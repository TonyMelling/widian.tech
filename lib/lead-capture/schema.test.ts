import { describe, expect, it } from "vitest";
import { getEnabledLeadCapture, getLeadCaptureConfig, limitsFromEnv } from "./config";
import { SITE_FACTS } from "../site-config";
import { rateLimited, resetRateLimits } from "./rate-limit";
import { LIMITS, validateEnquiry } from "./schema";

const valid = {
  name: "  Ada Lovelace ",
  email: "Ada@Example.COM ",
  organisation: "Example Housing",
  role: "Head of Safety",
  buildingBand: "6-25",
  challenge: "scattered-records",
  message: "",
};

describe("validateEnquiry", () => {
  it("normalises valid input (trim, lower-case email)", () => {
    const result = validateEnquiry(valid);
    expect(result).toMatchObject({ ok: true, data: { name: "Ada Lovelace", email: "ada@example.com" } });
  });

  it("collects no marketing permission: a stale client sending marketingOptIn has it ignored", () => {
    const result = validateEnquiry({ ...valid, marketingOptIn: true });
    expect(result.ok).toBe(true);
    if (result.ok) expect(Object.keys(result.data)).not.toContain("marketingOptIn");
  });

  it("reports an error for each missing or invalid field", () => {
    const result = validateEnquiry({});
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(Object.keys(result.errors).sort()).toEqual(
        ["buildingBand", "challenge", "email", "name", "organisation", "role"].sort(),
      );
    }
  });

  it.each(["not-an-email", "a@b", "a b@example.com", "@example.com", "a@.com"])("rejects email %s", (email) => {
    expect(validateEnquiry({ ...valid, email })).toMatchObject({ ok: false, errors: { email: expect.any(String) } });
  });

  it("only accepts the controlled values", () => {
    expect(validateEnquiry({ ...valid, buildingBand: "lots" })).toMatchObject({ ok: false });
    expect(validateEnquiry({ ...valid, challenge: "<script>" })).toMatchObject({ ok: false });
  });

  it("enforces length limits and strips control characters and line breaks from single-line fields", () => {
    expect(validateEnquiry({ ...valid, message: "x".repeat(LIMITS.message + 1) })).toMatchObject({ ok: false });
    const result = validateEnquiry({ ...valid, name: "Ada\r\nBcc: x@y.com\u0000" });
    expect(result).toMatchObject({ ok: true, data: { name: "Ada Bcc: x@y.com" } });
  });

  it("ignores non-string and non-object input safely", () => {
    expect(validateEnquiry(null)).toMatchObject({ ok: false });
    expect(validateEnquiry({ ...valid, name: { $ne: 1 } })).toMatchObject({ ok: false, errors: { name: expect.any(String) } });
  });
});

describe("getLeadCaptureConfig", () => {
  const full = {
    MARKETING_SUPABASE_URL: "https://abc.supabase.co/",
    MARKETING_SUPABASE_SERVICE_ROLE_KEY: "service",
    RESEND_API_KEY: "re_key",
    LEAD_EMAIL_FROM: "Widian <demo@mail.widian.tech>",
    LEAD_NOTIFY_TO: "owner@example.com, backup@example.com",
  };

  it("is null unless every required value is present", () => {
    expect(getLeadCaptureConfig({})).toBeNull();
    for (const key of Object.keys(full).filter((k) => k !== "LEAD_NOTIFY_TO")) {
      expect(getLeadCaptureConfig({ ...full, [key]: "" })).toBeNull();
    }
  });

  it("notifies the published enquiry mailbox by default, and only overrides it explicitly", () => {
    const { LEAD_NOTIFY_TO: _omitted, ...withoutNotify } = full;
    void _omitted;
    expect(getLeadCaptureConfig(withoutNotify)?.notifyTo).toEqual(["info@widian.tech"]);
    expect(getLeadCaptureConfig({ ...withoutNotify, LEAD_NOTIFY_TO: "  " })?.notifyTo).toEqual(["info@widian.tech"]);
    expect(getLeadCaptureConfig(full)?.notifyTo).toEqual(["owner@example.com", "backup@example.com"]);
  });

  it("requires an https Supabase URL and ignores a non-https booking URL", () => {
    expect(getLeadCaptureConfig({ ...full, MARKETING_SUPABASE_URL: "http://abc.supabase.co" })).toBeNull();
    const config = getLeadCaptureConfig({ ...full, CAL_BOOKING_URL: "javascript:alert(1)" });
    expect(config?.bookingUrl).toBeNull();
    expect(config?.supabaseUrl).toBe("https://abc.supabase.co");
    expect(config?.notifyTo).toEqual(["owner@example.com", "backup@example.com"]);
    expect(getLeadCaptureConfig({ ...full, CAL_BOOKING_URL: "https://cal.com/widian/demo" })?.bookingUrl).toBe(
      "https://cal.com/widian/demo",
    );
  });

  it("falls back to sensible rate-limit defaults", () => {
    expect(limitsFromEnv({})).toEqual({ max: 5, windowMs: 600_000 });
    expect(limitsFromEnv({ RATE_LIMIT_MAX_REQUESTS: "2", RATE_LIMIT_WINDOW_SECONDS: "60" })).toEqual({ max: 2, windowMs: 60_000 });
  });
});

describe("getEnabledLeadCapture (privacy-approval gate)", () => {
  const env = {
    MARKETING_SUPABASE_URL: "https://abc.supabase.co",
    MARKETING_SUPABASE_SERVICE_ROLE_KEY: "service",
    RESEND_API_KEY: "re_key",
    LEAD_EMAIL_FROM: "Widian <demo@mail.widian.tech>",
  };
  const approved = { ...SITE_FACTS, controllerName: "Widian Test Ltd", privacyWordingApproved: true };
  const unapproved = { ...SITE_FACTS, privacyWordingApproved: false };

  it("is off in Production until the notice is approved, however complete the configuration", () => {
    expect(getEnabledLeadCapture({ ...env, VERCEL_ENV: "production" }, unapproved)).toBeNull();
    expect(getEnabledLeadCapture({ ...env, DEPLOYMENT_ENV: "production" }, unapproved)).toBeNull();
  });

  it("is available outside Production for testing, flagged as unapproved", () => {
    expect(getEnabledLeadCapture({ ...env, VERCEL_ENV: "preview" }, unapproved)).toMatchObject({ noticeApproved: false });
    expect(getEnabledLeadCapture(env, unapproved)).toMatchObject({ noticeApproved: false });
  });

  it("turns on in Production once the controller and wording are approved", () => {
    expect(getEnabledLeadCapture({ ...env, VERCEL_ENV: "production" }, approved)).toMatchObject({ noticeApproved: true });
  });

  it("is off everywhere when unconfigured, and the recovery tool's config is independent of approval", () => {
    expect(getEnabledLeadCapture({ VERCEL_ENV: "preview" }, approved)).toBeNull();
    expect(getLeadCaptureConfig({ ...env, VERCEL_ENV: "production" })).not.toBeNull();
  });
});

describe("rateLimited", () => {
  it("blocks after the maximum within the window and recovers afterwards", () => {
    resetRateLimits();
    expect([1, 2, 3].map(() => rateLimited("k", 2, 1000, 0))).toEqual([false, false, true]);
    expect(rateLimited("other", 2, 1000, 0)).toBe(false);
    expect(rateLimited("k", 2, 1000, 1001)).toBe(false);
  });
});
