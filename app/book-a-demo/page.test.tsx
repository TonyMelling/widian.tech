import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import BookADemoPage from "./page";
import CookiesPage from "../cookies/page";

vi.mock("next/server", () => ({ connection: async () => {} }));

const CAPTURE_ENV = {
  MARKETING_SUPABASE_URL: "https://marketing.supabase.co",
  MARKETING_SUPABASE_SERVICE_ROLE_KEY: "service-key",
  RESEND_API_KEY: "re_key",
  LEAD_EMAIL_FROM: "Widian <demo@mail.widian.tech>",
  LEAD_NOTIFY_TO: "owner@example.com",
};

afterEach(() => vi.unstubAllEnvs());

describe("BookADemoPage without lead capture configured", () => {
  it("is a real contact page with no internal build text, using only the published mailboxes", async () => {
    const { container } = render(await BookADemoPage());
    expect(screen.getByRole("heading", { level: 1, name: "Talk to Widian." })).toBeInTheDocument();
    expect(container.textContent).not.toMatch(/docs\/|in development|open decision/i);
    const mailtos = [...container.querySelectorAll('a[href^="mailto:"]')].map((a) => a.getAttribute("href"));
    expect(mailtos).toContain("mailto:info@widian.tech");
    expect(mailtos).toContain("mailto:support@widian.tech");
    expect(mailtos.every((m) => /^mailto:(info|support|security)@widian\.tech$/.test(m ?? ""))).toBe(true);
    expect(screen.getByText(/contact your organisation.s Widian administrator/)).toBeInTheDocument();
  });

  it("offers no form it cannot honour", async () => {
    const { container } = render(await BookADemoPage());
    expect(container.querySelector("form")).toBeNull();
  });

  it("never links to the staging environment from the footer", async () => {
    const { container } = render(await BookADemoPage());
    expect(container.querySelector('a[href*="staging."]')).toBeNull();
    expect(container.textContent).not.toMatch(/pending confirmation/i);
  });
});

describe("BookADemoPage with lead capture configured", () => {
  it("shows the enquiry form, keeps the email route and never exposes server configuration", async () => {
    for (const [key, value] of Object.entries(CAPTURE_ENV)) vi.stubEnv(key, value);
    const { container } = render(await BookADemoPage());
    expect(container.querySelector("form")).not.toBeNull();
    expect(screen.getByRole("button", { name: "Request a demo" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "info@widian.tech" })).toHaveAttribute("href", "mailto:info@widian.tech");
    expect(container.innerHTML).not.toMatch(/service-key|re_key|owner@example\.com|supabase\.co/);
  });
});

describe("CookiesPage", () => {
  it("is a real notice rather than a stub", () => {
    render(<CookiesPage />);
    expect(screen.getByRole("heading", { level: 1, name: "Cookies on widian.tech." })).toBeInTheDocument();
    expect(screen.queryByText(/D-010|privacy owner/)).not.toBeInTheDocument();
  });
});
