import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import BookADemoPage from "./page";
import CookiesPage from "../cookies/page";

describe("BookADemoPage", () => {
  it("is a real contact page with no internal build text, using only the published mailboxes", () => {
    const { container } = render(<BookADemoPage />);
    expect(screen.getByRole("heading", { level: 1, name: "Talk to Widian." })).toBeInTheDocument();
    expect(container.textContent).not.toMatch(/docs\/|in development|open decision/i);
    const mailtos = [...container.querySelectorAll('a[href^="mailto:"]')].map((a) => a.getAttribute("href"));
    expect(mailtos).toContain("mailto:info@widian.tech");
    expect(mailtos).toContain("mailto:support@widian.tech");
    expect(mailtos.every((m) => /^mailto:(info|support|security)@widian\.tech$/.test(m ?? ""))).toBe(true);
    expect(screen.getByText(/contact your organisation.s Widian administrator/)).toBeInTheDocument();
  });

  it("never links to the staging environment from the footer", () => {
    const { container } = render(<BookADemoPage />);
    expect(container.querySelector('a[href*="staging."]')).toBeNull();
    expect(container.textContent).not.toMatch(/pending confirmation/i);
  });
});

describe("CookiesPage", () => {
  it("is a real notice rather than a stub", () => {
    render(<CookiesPage />);
    expect(screen.getByRole("heading", { level: 1, name: "Cookies on widian.tech." })).toBeInTheDocument();
    expect(screen.queryByText(/D-010|privacy owner/)).not.toBeInTheDocument();
  });
});
