// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { resetRateLimits } from "@/lib/lead-capture/rate-limit";
import { POST } from "./route";

const ENV = {
  MARKETING_SUPABASE_URL: "https://marketing.supabase.co",
  MARKETING_SUPABASE_SERVICE_ROLE_KEY: "service-key",
  RESEND_API_KEY: "re_key",
  LEAD_EMAIL_FROM: "Widian <demo@mail.widian.tech>",
};
const KEY = "5b0f3f3e-8f6d-4c0e-9b53-7f4f3f0c1a11";
const body = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  organisation: "Example Housing",
  role: "Head of Safety",
  buildingBand: "6-25",
  challenge: "closure-evidence",
  message: "Private context 12345",
  marketingOptIn: true,
  idempotencyKey: KEY,
  website: "",
  elapsedMs: 15_000,
};

function post(payload: unknown, headers: Record<string, string> = {}) {
  return POST(
    new Request("https://widian.tech/api/walkthrough", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        origin: "https://widian.tech",
        "x-forwarded-host": "widian.tech",
        "x-forwarded-for": "203.0.113.9",
        ...headers,
      },
      body: typeof payload === "string" ? payload : JSON.stringify(payload),
    }),
  );
}

type Call = { url: string; init: RequestInit };
let calls: Call[];
let supabaseInsert: () => Response;
let resend: () => Response;

beforeEach(() => {
  resetRateLimits();
  calls = [];
  supabaseInsert = () => Response.json([{ id: "row-1" }], { status: 201 });
  resend = () => Response.json({ id: "msg-1" });
  for (const [key, value] of Object.entries(ENV)) vi.stubEnv(key, value);
  vi.stubGlobal(
    "fetch",
    vi.fn(async (url: string, init: RequestInit) => {
      calls.push({ url, init });
      if (url.includes("/rest/v1/demo_enquiries") && init.method === "POST") return supabaseInsert();
      if (url.includes("/rest/v1/demo_enquiries") && init.method === "PATCH") return new Response(null, { status: 204 });
      if (url.startsWith("https://api.resend.com/")) return resend();
      throw new Error(`unexpected fetch ${url}`);
    }),
  );
  vi.spyOn(console, "info").mockImplementation(() => {});
  vi.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

const where = (needle: string) => calls.filter((c) => c.url.includes(needle));

describe("POST /api/walkthrough", () => {
  it("stores the lead durably, then sends the acknowledgement and owner notification, and reports a reference", async () => {
    const response = await post(body);
    expect(response.status).toBe(201);
    const result = await response.json();
    expect(result).toEqual({ status: "accepted", reference: expect.stringMatching(/^WD-[0-9A-F]{8}$/) });

    // Order: storage first, emails after.
    expect(calls[0].url).toContain("/rest/v1/demo_enquiries");
    const stored = JSON.parse(String(calls[0].init.body));
    expect(stored).toMatchObject({
      idempotency_key: KEY,
      email: "ada@example.com",
      building_band: "6-25",
      marketing_opt_in: true,
      marketing_wording_version: expect.any(String),
      privacy_notice_version: expect.stringContaining("draft-0.3"),
    });
    expect(new Headers(calls[0].init.headers).get("apikey")).toBe("service-key");

    const emails = where("api.resend.com").map((c) => JSON.parse(String(c.init.body)));
    expect(emails).toHaveLength(2);
    const ack = emails.find((e) => e.to[0] === "ada@example.com");
    const notify = emails.find((e) => e.to[0] === "info@widian.tech");
    expect(ack.subject).toContain(result.reference);
    expect(ack.text).not.toMatch(/GDPR|compliant|certif|secure|guarantee/i);
    expect(notify.reply_to).toBe("ada@example.com");
    expect(notify.text).toContain("Private context 12345");
    expect(notify.text).toContain("Optional updates requested: yes");

    const patch = where("id=eq.row-1")[0];
    expect(JSON.parse(String(patch.init.body))).toMatchObject({ ack_status: "sent", notify_status: "sent", last_error: null });
  });

  it("never reports success when storage fails, and sends no email", async () => {
    supabaseInsert = () => new Response("db down", { status: 503 });
    const response = await post(body);
    expect(response.status).toBe(500);
    expect(await response.json()).toEqual({ status: "error" });
    expect(where("api.resend.com")).toHaveLength(0);
  });

  it("keeps an accepted lead when email fails, and records the failure for manual follow-up", async () => {
    resend = () => new Response("no", { status: 500 });
    const response = await post(body);
    expect(response.status).toBe(201);
    const patch = JSON.parse(String(where("id=eq.row-1")[0].init.body));
    expect(patch).toMatchObject({ ack_status: "failed", notify_status: "failed", last_error: "email_500,email_500" });
  });

  it("makes a failed owner notification identifiable in the logs by reference, without personal data", async () => {
    resend = () => new Response("no", { status: 500 });
    const result = await (await post(body)).json();
    const errors = vi.mocked(console.error).mock.calls.flat().map(String);
    const failure = errors.find((line) => line.includes('"notify_failed"'));
    expect(failure).toBeDefined();
    expect(failure).toContain(result.reference);
    expect(errors.join(" ")).not.toMatch(/ada@example\.com|Lovelace|Private context/);
  });

  it("does not raise a failure signal when both emails succeed", async () => {
    await post(body);
    expect(vi.mocked(console.error)).not.toHaveBeenCalled();
  });

  it("is idempotent: a retry with the same key returns the same reference and sends no second email", async () => {
    const first = await (await post(body)).json();
    calls.length = 0;
    supabaseInsert = () => Response.json([], { status: 200 }); // ignore-duplicates returns no row
    const retry = await post(body);
    expect(retry.status).toBe(200);
    expect(await retry.json()).toEqual({ status: "accepted", reference: first.reference });
    expect(where("api.resend.com")).toHaveLength(0);
  });

  it("returns field errors for invalid input without touching storage", async () => {
    const response = await post({ ...body, email: "nope", buildingBand: "" });
    expect(response.status).toBe(422);
    expect((await response.json()).errors).toMatchObject({ email: expect.any(String), buildingBand: expect.any(String) });
    expect(calls).toHaveLength(0);
  });

  it("quietly discards honeypot and implausibly fast submissions without storing or sending", async () => {
    for (const payload of [{ ...body, website: "http://spam.example" }, { ...body, elapsedMs: 300 }]) {
      const response = await post(payload);
      expect(response.status).toBe(202);
      expect((await response.json()).status).toBe("accepted");
    }
    expect(calls).toHaveLength(0);
  });

  it("rejects cross-origin and origin-less posts", async () => {
    expect((await post(body, { origin: "https://evil.example" })).status).toBe(403);
    const noOrigin = await POST(
      new Request("https://widian.tech/api/walkthrough", { method: "POST", body: JSON.stringify(body) }),
    );
    expect(noOrigin.status).toBe(403);
    expect(calls).toHaveLength(0);
  });

  it("rejects malformed JSON, oversized bodies and a bad idempotency key", async () => {
    expect((await post("{not json")).status).toBe(400);
    expect((await post(JSON.stringify({ ...body, message: "x".repeat(11_000) }))).status).toBe(413);
    expect((await post({ ...body, idempotencyKey: "abc" })).status).toBe(400);
    expect(calls).toHaveLength(0);
  });

  it("rate-limits repeated posts from one client", async () => {
    vi.stubEnv("RATE_LIMIT_MAX_REQUESTS", "2");
    const statuses = [];
    for (let i = 0; i < 3; i++) statuses.push((await post({ ...body, email: "bad" })).status);
    expect(statuses).toEqual([422, 422, 429]);
  });

  it("fails closed with a generic 503 when lead capture is not configured", async () => {
    vi.stubEnv("RESEND_API_KEY", "");
    const response = await post(body);
    expect(response.status).toBe(503);
    expect(await response.json()).toEqual({ status: "unavailable" });
    expect(calls).toHaveLength(0);
  });

  it("does not leak providers or storage details in public errors, nor submitted data in logs", async () => {
    supabaseInsert = () => new Response("supabase secret detail", { status: 500 });
    const response = await post(body);
    expect(JSON.stringify(await response.json())).not.toMatch(/supabase|resend|postgres|service/i);
    const logged = [...vi.mocked(console.info).mock.calls, ...vi.mocked(console.error).mock.calls].flat().join(" ");
    expect(logged).toContain("walkthrough_submit");
    expect(logged).not.toMatch(/ada@example\.com|Lovelace|Private context|Example Housing/);
  });
});
