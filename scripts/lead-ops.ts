/**
 * Minimal operations tool for demo enquiries — find leads whose emails did not go out, and resend them.
 * Not a lead console and not a retry service: a person runs it.
 *
 *   npm run leads:attention                      list leads with an unsent acknowledgement or owner notification
 *   npm run leads:resend -- WD-1A2B3C4D          resend whichever email(s) are not marked sent
 *   npm run leads:resend -- WD-1A2B3C4D notify   force the owner notification   (also: ack | both)
 *
 * Needs the same server-side variables as the site (see .env.example), e.g. pulled into .env.local for the
 * environment being operated on. Runs on Node 22.18+ (built-in TypeScript type stripping). Prints references and
 * statuses only — never names, email addresses or messages.
 */
import { getLeadCaptureConfig } from "../lib/lead-capture/config.ts";
import { sendAcknowledgement, sendInternalNotification } from "../lib/lead-capture/email.ts";
import { getLeadByReference, listNeedingAttention, recordDelivery } from "../lib/lead-capture/store.ts";
import { SITE_FACTS } from "../lib/site-config.ts";

const config = getLeadCaptureConfig();
if (!config) {
  console.error("Lead capture is not configured in this environment (see .env.example). Nothing was changed.");
  process.exit(1);
}

const [command, reference, which = "auto"] = process.argv.slice(2);

async function main() {
  if (!config) return;

  if (command === "list") {
    const rows = await listNeedingAttention(config);
    if (rows.length === 0) {
      console.log("No leads need attention.");
      return;
    }
    console.log(`${rows.length} lead(s) need attention (newest first):`);
    for (const row of rows) {
      console.log(
        `${row.reference}  ${row.created_at}  ack=${row.ack_status}  notify=${row.notify_status}  ${row.last_error ?? ""}`.trimEnd(),
      );
    }
    console.log("\nRecover with: npm run leads:resend -- <reference>");
    return;
  }

  if (command === "resend" && reference) {
    if (!["auto", "notify", "ack", "both"].includes(which)) throw new Error("Choose notify, ack or both.");
    const row = await getLeadByReference(config, reference.toUpperCase());
    if (!row) throw new Error(`No lead with reference ${reference}.`);

    const doNotify = which === "both" || which === "notify" || (which === "auto" && row.notify_status !== "sent");
    const doAck = which === "both" || which === "ack" || (which === "auto" && row.ack_status !== "sent");
    if (!doNotify && !doAck) {
      console.log(`${row.reference}: both emails are already marked sent. Use "notify", "ack" or "both" to force a resend.`);
      return;
    }

    const enquiry = {
      name: row.name,
      email: row.email,
      organisation: row.organisation,
      role: row.role,
      buildingBand: row.building_band,
      challenge: row.challenge,
      message: row.message ?? "",
      marketingOptIn: row.marketing_opt_in,
    };
    // A fresh idempotency suffix per manual run, so Resend sends again rather than replaying the failed attempt.
    const attempt = `${row.idempotency_key}:manual-${Date.now()}`;
    const update: Parameters<typeof recordDelivery>[2] = {};
    const errors: string[] = [];

    if (doNotify) {
      const result = await sendInternalNotification(config, {
        idempotencyKey: attempt,
        reference: row.reference,
        correlationId: row.correlation_id,
        enquiry,
      });
      update.notify_status = result.ok ? "sent" : "failed";
      update.notify_message_id = result.ok ? result.id : null;
      if (!result.ok) errors.push(result.error);
      console.log(`${row.reference}: owner notification ${result.ok ? "sent" : `FAILED (${result.error})`}`);
    }
    if (doAck) {
      const result = await sendAcknowledgement(config, {
        idempotencyKey: attempt,
        reference: row.reference,
        enquiry,
        contactEmail: SITE_FACTS.contactEmail,
      });
      update.ack_status = result.ok ? "sent" : "failed";
      update.ack_message_id = result.ok ? result.id : null;
      if (!result.ok) errors.push(result.error);
      console.log(`${row.reference}: acknowledgement ${result.ok ? "sent" : `FAILED (${result.error})`}`);
    }
    update.last_error = errors.length > 0 ? errors.join(",") : null;
    const saved = await recordDelivery(config, row.id, update);
    if (!saved) console.error("Warning: the emails were attempted but the lead's status could not be updated.");
    if (errors.length > 0) process.exitCode = 1;
    return;
  }

  console.error("Usage: leads:attention | leads:resend -- <WD-reference> [notify|ack|both]");
  process.exitCode = 2;
}

main().catch((error: unknown) => {
  console.error(`Failed: ${error instanceof Error ? error.message : "unknown error"}`);
  process.exitCode = 1;
});
