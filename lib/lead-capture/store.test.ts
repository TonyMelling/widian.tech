// @vitest-environment node
import { spawnSync } from "node:child_process";
import path from "node:path";
import { describe, expect, it, vi } from "vitest";
import { getLeadCaptureConfig } from "./config";
import { getLeadByReference, listNeedingAttention } from "./store";

const config = getLeadCaptureConfig({
  MARKETING_SUPABASE_URL: "https://marketing.supabase.co",
  MARKETING_SUPABASE_SERVICE_ROLE_KEY: "service-key",
  RESEND_API_KEY: "re_key",
  LEAD_EMAIL_FROM: "Widian <demo@mail.widian.tech>",
})!;

describe("operational lead lookups", () => {
  it("lists only leads with an unsent email that are old enough not to be in flight", async () => {
    const fetchMock = vi.fn(async () => Response.json([{ reference: "WD-AAAAAAAA", notify_status: "failed" }]));
    const rows = await listNeedingAttention(config, { minAgeMs: 120_000 }, fetchMock as unknown as typeof fetch);
    expect(rows).toHaveLength(1);
    const url = decodeURIComponent((fetchMock.mock.calls[0] as unknown as [string])[0]);
    expect(url).toContain("or=(ack_status.neq.sent,notify_status.neq.sent)");
    expect(url).toMatch(/created_at=lt\.\d{4}-\d\d-\d\dT/);
    expect(url).toContain("order=created_at.desc");
  });

  it("looks up a lead by a validated reference only", async () => {
    const fetchMock = vi.fn(async () => Response.json([{ reference: "WD-0A1B2C3D" }]));
    expect(await getLeadByReference(config, "WD-0A1B2C3D", fetchMock as unknown as typeof fetch)).toMatchObject({
      reference: "WD-0A1B2C3D",
    });
    await expect(getLeadByReference(config, "WD-1&select=*", fetchMock as unknown as typeof fetch)).rejects.toThrow(
      "invalid_reference",
    );
    await expect(getLeadByReference(config, "wd-0a1b2c3d", fetchMock as unknown as typeof fetch)).rejects.toThrow();
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("surfaces storage failures instead of reporting an empty list", async () => {
    const fetchMock = vi.fn(async () => new Response("x", { status: 500 }));
    await expect(listNeedingAttention(config, {}, fetchMock as unknown as typeof fetch)).rejects.toThrow("storage_500");
  });
});

describe("scripts/lead-ops.ts", () => {
  it("loads under plain Node and refuses to run when lead capture is not configured", () => {
    const script = path.resolve(import.meta.dirname, "../../scripts/lead-ops.ts");
    const result = spawnSync(process.execPath, [script, "list"], {
      env: { PATH: process.env.PATH ?? "", SystemRoot: process.env.SystemRoot ?? "" } as unknown as NodeJS.ProcessEnv,
      encoding: "utf8",
    });
    expect(result.stderr).toContain("not configured");
    expect(result.status).toBe(1);
  });
});
