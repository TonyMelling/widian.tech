import { createHash, randomUUID } from "node:crypto";
import { getEnabledLeadCapture, limitsFromEnv } from "@/lib/lead-capture/config";
import { rateLimited } from "@/lib/lead-capture/rate-limit";
import { UUID_PATTERN, validateEnquiry } from "@/lib/lead-capture/schema";
import { sendAcknowledgement, sendInternalNotification } from "@/lib/lead-capture/email";
import { insertLead, recordDelivery } from "@/lib/lead-capture/store";
import { missingPrivacyFacts, PRIVACY_NOTICE, SITE_FACTS } from "@/lib/site-config";

/**
 * POST /api/walkthrough — Book a Demo enquiries (internal name kept per D-025).
 *
 * Contract: success is returned only after the lead is durably stored. Email is a notification channel; if either
 * email fails the lead is still accepted and the failure is recorded on the lead for manual follow-up.
 * Public errors are generic and never name providers or storage. Raw form content is never logged.
 */

export const runtime = "nodejs";

const MAX_BODY_BYTES = 10_000;
/** A human cannot complete the form faster than this; faster submissions are treated as automated. */
const MIN_FILL_MS = 2_000;

type Outcome =
  | "accepted"
  | "duplicate"
  | "invalid"
  | "rejected"
  | "rate_limited"
  | "unavailable"
  | "storage_failed"
  | "notify_failed"
  | "ack_failed";

function log(correlationId: string, outcome: Outcome, extra: Record<string, string | number | boolean> = {}) {
  // Structured, and deliberately free of any submitted values.
  const line = JSON.stringify({ event: "walkthrough_submit", correlationId, outcome, ...extra });
  if (["storage_failed", "unavailable", "notify_failed", "ack_failed"].includes(outcome)) console.error(line);
  else console.info(line);
}

function json(body: Record<string, unknown>, status: number) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

function sameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (!origin || !host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

function clientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return createHash("sha256")
    .update(forwarded || request.headers.get("x-real-ip") || "unknown")
    .digest("hex")
    .slice(0, 24);
}

const referenceFor = (idempotencyKey: string) =>
  `WD-${createHash("sha256").update(idempotencyKey.toLowerCase()).digest("hex").slice(0, 8).toUpperCase()}`;

export async function POST(request: Request) {
  const correlationId = randomUUID();

  if (!sameOrigin(request)) {
    log(correlationId, "rejected", { reason: "origin" });
    return json({ status: "error" }, 403);
  }

  // Not configured, or Production with an unapproved privacy notice: refuse rather than collect.
  const enabled = getEnabledLeadCapture();
  if (!enabled) {
    log(correlationId, "unavailable", { reason: "not_enabled" });
    return json({ status: "unavailable" }, 503);
  }
  const { config } = enabled;

  const { max, windowMs } = limitsFromEnv();
  if (rateLimited(clientKey(request), max, windowMs)) {
    log(correlationId, "rate_limited");
    return json({ status: "rate_limited" }, 429);
  }

  let raw: unknown;
  try {
    const text = await request.text();
    if (text.length > MAX_BODY_BYTES) {
      log(correlationId, "rejected", { reason: "too_large" });
      return json({ status: "error" }, 413);
    }
    raw = JSON.parse(text);
  } catch {
    log(correlationId, "invalid", { reason: "unparseable" });
    return json({ status: "error" }, 400);
  }

  const body = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>;
  const idempotencyKey = typeof body.idempotencyKey === "string" ? body.idempotencyKey : "";
  if (!UUID_PATTERN.test(idempotencyKey)) {
    log(correlationId, "invalid", { reason: "idempotency_key" });
    return json({ status: "error" }, 400);
  }
  const reference = referenceFor(idempotencyKey);

  // Bot signals (honeypot field, implausibly fast fill) get the same response as a real success, and nothing is
  // stored or sent, so automated clients learn nothing about what tripped them.
  const filledTooFast = typeof body.elapsedMs === "number" && body.elapsedMs < MIN_FILL_MS;
  if ((typeof body.website === "string" && body.website !== "") || filledTooFast) {
    log(correlationId, "rejected", { reason: "bot_signal" });
    return json({ status: "accepted", reference }, 202);
  }

  const result = validateEnquiry(body);
  if (!result.ok) {
    log(correlationId, "invalid", { fields: Object.keys(result.errors).join(",") });
    return json({ status: "invalid", errors: result.errors }, 422);
  }

  const noticeVersion = `${missingPrivacyFacts().length === 0 ? PRIVACY_NOTICE.finalVersion : `draft-${PRIVACY_NOTICE.draftVersion}`} (${PRIVACY_NOTICE.date})`;

  let stored: { created: boolean; id: string | null };
  try {
    stored = await insertLead(config, {
      idempotencyKey: idempotencyKey.toLowerCase(),
      correlationId,
      reference,
      enquiry: result.data,
      privacyNoticeVersion: noticeVersion,
    });
  } catch (error) {
    log(correlationId, "storage_failed", { error: error instanceof Error ? error.message : "unknown" });
    return json({ status: "error" }, 500);
  }

  if (!stored.created) {
    // A retry of an already-stored enquiry: same reference, no second round of emails.
    log(correlationId, "duplicate");
    return json({ status: "accepted", reference }, 200);
  }

  const [ack, notify] = await Promise.all([
    sendAcknowledgement(config, {
      idempotencyKey,
      reference,
      enquiry: result.data,
      contactEmail: SITE_FACTS.contactEmail,
    }),
    sendInternalNotification(config, { idempotencyKey, reference, correlationId, enquiry: result.data }),
  ]);

  if (stored.id) {
    const failures = [!ack.ok && ack.error, !notify.ok && notify.error].filter(Boolean).join(",");
    await recordDelivery(config, stored.id, {
      ack_status: ack.ok ? "sent" : "failed",
      ack_message_id: ack.ok ? ack.id : null,
      notify_status: notify.ok ? "sent" : "failed",
      notify_message_id: notify.ok ? notify.id : null,
      last_error: failures || null,
    });
  }

  // A lead whose owner notification failed is stored but unseen: make that loud in the logs (alert on
  // "notify_failed") and recoverable with `npm run leads:resend` — see docs/LEAD_CAPTURE_AND_COMMUNICATIONS.md.
  if (!notify.ok) log(correlationId, "notify_failed", { reference, error: notify.error });
  if (!ack.ok) log(correlationId, "ack_failed", { reference, error: ack.error });
  log(correlationId, "accepted", { ack: ack.ok, notify: notify.ok });
  return json({ status: "accepted", reference }, 201);
}
