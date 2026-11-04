import type { LeadCaptureConfig } from "./config";
import type { EnquiryInput } from "./schema.ts";
import { MARKETING_WORDING_VERSION } from "./schema.ts";

/**
 * Durable lead storage in the isolated marketing Supabase project (D-007), over PostgREST with the service-role
 * key. Server-only: this module must never be imported from a client component. Table definition:
 * supabase/marketing/001_demo_enquiries.sql.
 */

export type NewLead = {
  idempotencyKey: string;
  correlationId: string;
  reference: string;
  enquiry: EnquiryInput;
  privacyNoticeVersion: string;
};

export type DeliveryUpdate = {
  ack_status?: "sent" | "failed";
  ack_message_id?: string | null;
  notify_status?: "sent" | "failed";
  notify_message_id?: string | null;
  last_error?: string | null;
};

type Fetch = typeof fetch;

/**
 * Legacy `service_role` keys are JWTs and go in both headers. Newer `sb_secret_…` keys are not JWTs: sent as a
 * Bearer token they are rejected ("Invalid JWT"), so they go in `apikey` only.
 */
function headers(config: LeadCaptureConfig, extra: Record<string, string> = {}) {
  const isJwt = config.supabaseServiceKey.startsWith("eyJ");
  return {
    apikey: config.supabaseServiceKey,
    ...(isJwt ? { Authorization: `Bearer ${config.supabaseServiceKey}` } : {}),
    "Content-Type": "application/json",
    ...extra,
  };
}

/**
 * Inserts the lead. Returns `{ created: false }` when the idempotency key already exists (a retry), so the caller
 * can report the same reference without sending a second round of emails. Throws on any storage failure.
 */
export async function insertLead(
  config: LeadCaptureConfig,
  lead: NewLead,
  fetchImpl: Fetch = fetch,
): Promise<{ created: boolean; id: string | null }> {
  const { enquiry } = lead;
  const now = new Date().toISOString();
  const response = await fetchImpl(
    `${config.supabaseUrl}/rest/v1/demo_enquiries?on_conflict=idempotency_key&select=id`,
    {
      method: "POST",
      headers: headers(config, { Prefer: "resolution=ignore-duplicates,return=representation" }),
      body: JSON.stringify({
        idempotency_key: lead.idempotencyKey,
        correlation_id: lead.correlationId,
        reference: lead.reference,
        name: enquiry.name,
        email: enquiry.email,
        organisation: enquiry.organisation,
        role: enquiry.role,
        building_band: enquiry.buildingBand,
        challenge: enquiry.challenge,
        message: enquiry.message || null,
        source_page: "/book-a-demo",
        privacy_notice_version: lead.privacyNoticeVersion,
        marketing_opt_in: enquiry.marketingOptIn,
        marketing_wording_version: enquiry.marketingOptIn ? MARKETING_WORDING_VERSION : null,
        marketing_opt_in_at: enquiry.marketingOptIn ? now : null,
      }),
      cache: "no-store",
    },
  );
  if (!response.ok) throw new Error(`storage_${response.status}`);
  const rows = (await response.json()) as { id?: string }[];
  return rows.length > 0 ? { created: true, id: rows[0].id ?? null } : { created: false, id: null };
}

export type LeadRow = {
  id: string;
  reference: string;
  idempotency_key: string;
  correlation_id: string;
  created_at: string;
  name: string;
  email: string;
  organisation: string;
  role: string;
  building_band: string;
  challenge: string;
  message: string | null;
  marketing_opt_in: boolean;
  ack_status: string;
  notify_status: string;
  last_error: string | null;
};

const LEAD_COLUMNS =
  "id,reference,idempotency_key,correlation_id,created_at,name,email,organisation,role,building_band,challenge,message,marketing_opt_in,ack_status,notify_status,last_error";

export const REFERENCE_PATTERN = /^WD-[0-9A-F]{8}$/;

/**
 * Leads whose acknowledgement or owner notification is not confirmed sent. Rows younger than `minAgeMs` are
 * skipped because a request that is still running legitimately shows "pending".
 */
export async function listNeedingAttention(
  config: LeadCaptureConfig,
  { minAgeMs = 120_000, limit = 50 }: { minAgeMs?: number; limit?: number } = {},
  fetchImpl: Fetch = fetch,
): Promise<LeadRow[]> {
  const olderThan = new Date(Date.now() - minAgeMs).toISOString();
  const query =
    `select=${LEAD_COLUMNS}&or=(ack_status.neq.sent,notify_status.neq.sent)` +
    `&created_at=lt.${encodeURIComponent(olderThan)}&order=created_at.desc&limit=${limit}`;
  const response = await fetchImpl(`${config.supabaseUrl}/rest/v1/demo_enquiries?${query}`, {
    headers: headers(config),
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`storage_${response.status}`);
  return (await response.json()) as LeadRow[];
}

export async function getLeadByReference(
  config: LeadCaptureConfig,
  reference: string,
  fetchImpl: Fetch = fetch,
): Promise<LeadRow | null> {
  if (!REFERENCE_PATTERN.test(reference)) throw new Error("invalid_reference");
  const response = await fetchImpl(
    `${config.supabaseUrl}/rest/v1/demo_enquiries?select=${LEAD_COLUMNS}&reference=eq.${reference}`,
    { headers: headers(config), cache: "no-store" },
  );
  if (!response.ok) throw new Error(`storage_${response.status}`);
  const rows = (await response.json()) as LeadRow[];
  if (rows.length > 1) throw new Error("ambiguous_reference");
  return rows[0] ?? null;
}

/** Records delivery outcomes on the lead. Never throws: a failed status write must not mask an accepted lead. */
export async function recordDelivery(
  config: LeadCaptureConfig,
  id: string,
  update: DeliveryUpdate,
  fetchImpl: Fetch = fetch,
): Promise<boolean> {
  try {
    const response = await fetchImpl(`${config.supabaseUrl}/rest/v1/demo_enquiries?id=eq.${encodeURIComponent(id)}`, {
      method: "PATCH",
      headers: headers(config, { Prefer: "return=minimal" }),
      body: JSON.stringify({ ...update, updated_at: new Date().toISOString() }),
      cache: "no-store",
    });
    return response.ok;
  } catch {
    return false;
  }
}
