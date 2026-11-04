import { SITE_FACTS, missingPrivacyFacts } from "../site-config.ts";

/**
 * Server-side configuration for demo-enquiry capture. Every value comes from environment variables; none is
 * committed. If any required value is missing, capture is treated as not configured: the Book a Demo page falls
 * back to its email-only layout and the API refuses submissions rather than pretending to accept them.
 */

export type LeadCaptureConfig = {
  supabaseUrl: string;
  supabaseServiceKey: string;
  resendApiKey: string;
  emailFrom: string;
  notifyTo: string[];
  replyTo: string | null;
  /** Public Cal.com booking page, offered as a link after the enquiry is stored. Optional (D-039 not yet wired). */
  bookingUrl: string | null;
  siteUrl: string;
};

function httpsUrl(value: string | undefined): string | null {
  if (!value) return null;
  try {
    const url = new URL(value.trim());
    return url.protocol === "https:" ? url.toString().replace(/\/$/, "") : null;
  } catch {
    return null;
  }
}

export function getLeadCaptureConfig(env: Record<string, string | undefined> = process.env): LeadCaptureConfig | null {
  const supabaseUrl = httpsUrl(env.MARKETING_SUPABASE_URL);
  const supabaseServiceKey = env.MARKETING_SUPABASE_SERVICE_ROLE_KEY?.trim();
  const resendApiKey = env.RESEND_API_KEY?.trim();
  const emailFrom = env.LEAD_EMAIL_FROM?.trim();
  // Owner notifications go to the published enquiry mailbox unless explicitly overridden.
  const override = (env.LEAD_NOTIFY_TO ?? "")
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean);
  const notifyTo = override.length > 0 ? override : SITE_FACTS.contactEmail ? [SITE_FACTS.contactEmail] : [];

  if (!supabaseUrl || !supabaseServiceKey || !resendApiKey || !emailFrom || notifyTo.length === 0) return null;

  return {
    supabaseUrl,
    supabaseServiceKey,
    resendApiKey,
    emailFrom,
    notifyTo,
    replyTo: env.LEAD_EMAIL_REPLY_TO?.trim() || null,
    bookingUrl: httpsUrl(env.CAL_BOOKING_URL),
    siteUrl: httpsUrl(env.NEXT_PUBLIC_SITE_URL) ?? "https://widian.tech",
  };
}

/** Same definition of "production" as app/robots.ts. */
export function isProductionDeployment(env: Record<string, string | undefined> = process.env): boolean {
  return env.VERCEL_ENV === "production" || env.DEPLOYMENT_ENV === "production";
}

export type EnabledLeadCapture = {
  config: LeadCaptureConfig;
  /** False while the privacy notice is unapproved: only possible outside Production, where the form is test-only. */
  noticeApproved: boolean;
};

/**
 * Whether the public form and API may accept enquiries in this deployment. Requires full configuration, and in
 * Production additionally requires the privacy notice and controller details to be approved (see SITE_FACTS and
 * missingPrivacyFacts), so real enquiries cannot be collected under an unapproved notice. Outside Production an
 * unapproved notice still allows the form, for acceptance testing with fictional data only.
 *
 * The recovery tool (scripts/lead-ops.ts) deliberately uses getLeadCaptureConfig, not this: stored leads must stay
 * recoverable even while collection is switched off.
 */
export function getEnabledLeadCapture(
  env: Record<string, string | undefined> = process.env,
  facts = SITE_FACTS,
): EnabledLeadCapture | null {
  const config = getLeadCaptureConfig(env);
  if (!config) return null;
  const noticeApproved = missingPrivacyFacts(facts).length === 0;
  if (!noticeApproved && isProductionDeployment(env)) return null;
  return { config, noticeApproved };
}

export function limitsFromEnv(env: Record<string, string | undefined> = process.env) {
  const max = Number(env.RATE_LIMIT_MAX_REQUESTS);
  const windowSeconds = Number(env.RATE_LIMIT_WINDOW_SECONDS);
  return {
    max: Number.isFinite(max) && max > 0 ? max : 5,
    windowMs: (Number.isFinite(windowSeconds) && windowSeconds > 0 ? windowSeconds : 600) * 1000,
  };
}
