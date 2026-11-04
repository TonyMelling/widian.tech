import type { LeadCaptureConfig } from "./config";
import { BUILDING_BANDS, CHALLENGES, labelFor, type EnquiryInput } from "./schema.ts";

/**
 * Transactional email through Resend (D-008). Plain-text only, so nothing a visitor types is ever interpreted as
 * markup. Server-only. Each send carries an Idempotency-Key so a retry cannot double-send.
 */

type Fetch = typeof fetch;
export type SendResult = { ok: true; id: string | null } | { ok: false; error: string };

async function send(
  config: LeadCaptureConfig,
  idempotencyKey: string,
  message: { to: string[]; subject: string; text: string; replyTo?: string | null },
  fetchImpl: Fetch,
): Promise<SendResult> {
  try {
    const response = await fetchImpl("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.resendApiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": idempotencyKey,
      },
      body: JSON.stringify({
        from: config.emailFrom,
        to: message.to,
        subject: message.subject,
        text: message.text,
        ...(message.replyTo ? { reply_to: message.replyTo } : {}),
      }),
      cache: "no-store",
    });
    if (!response.ok) return { ok: false, error: `email_${response.status}` };
    const body = (await response.json().catch(() => ({}))) as { id?: string };
    return { ok: true, id: body.id ?? null };
  } catch {
    return { ok: false, error: "email_network" };
  }
}

/** Single-line value safe to place in a header or subject. */
const oneLine = (value: string) => value.replace(/\s+/g, " ").trim();

export function sendAcknowledgement(
  config: LeadCaptureConfig,
  args: { idempotencyKey: string; reference: string; enquiry: EnquiryInput; contactEmail: string | null },
  fetchImpl: Fetch = fetch,
) {
  const { reference, enquiry } = args;
  const next = config.bookingUrl
    ? `You can choose a time that suits you here: ${config.bookingUrl}\n\nIf none of the times work, reply to this email and we will arrange one with you.`
    : "We will reply to arrange a time for your demonstration.";
  const text = [
    `Hello ${oneLine(enquiry.name)},`,
    "",
    "Thank you for asking about a Widian demonstration. We have received your request.",
    "",
    next,
    "",
    `Your reference is ${reference}.`,
    "",
    `We use the details you gave only to respond to your request. How Widian handles personal data: ${config.siteUrl}/privacy`,
    "",
    "Widian",
  ].join("\n");
  return send(
    config,
    `${args.idempotencyKey}:ack`,
    {
      to: [enquiry.email],
      subject: `Your Widian demo request (${reference})`,
      text,
      replyTo: config.replyTo ?? args.contactEmail,
    },
    fetchImpl,
  );
}

export function sendInternalNotification(
  config: LeadCaptureConfig,
  args: { idempotencyKey: string; reference: string; correlationId: string; enquiry: EnquiryInput },
  fetchImpl: Fetch = fetch,
) {
  const { enquiry, reference } = args;
  const text = [
    `New demo request ${reference}`,
    `Correlation ID: ${args.correlationId}`,
    "",
    `Name: ${oneLine(enquiry.name)}`,
    `Email: ${enquiry.email}`,
    `Organisation: ${oneLine(enquiry.organisation)}`,
    `Role: ${oneLine(enquiry.role)}`,
    `Portfolio: ${labelFor(BUILDING_BANDS, enquiry.buildingBand)}`,
    `Main challenge: ${labelFor(CHALLENGES, enquiry.challenge)}`,
    `Optional updates requested: ${enquiry.marketingOptIn ? "yes" : "no"}`,
    "",
    "Message:",
    enquiry.message || "(none)",
    "",
    "The canonical record is the demo_enquiries table in the marketing database.",
  ].join("\n");
  return send(
    config,
    `${args.idempotencyKey}:notify`,
    {
      to: config.notifyTo,
      subject: `New Widian demo request ${reference}`,
      text,
      replyTo: enquiry.email,
    },
    fetchImpl,
  );
}
