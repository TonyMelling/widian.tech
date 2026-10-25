import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import BookADemoPage from "./page";
import CookiesPage from "../cookies/page";

describe("BookADemoPage", () => {
  it("is a real contact page with no internal build text and no invented address", () => {
    const { container } = render(<BookADemoPage />);
    expect(screen.getByRole("heading", { level: 1, name: "Talk to Widian." })).toBeInTheDocument();
    expect(container.textContent).not.toMatch(/docs\/|in development|open decision/i);
    expect(container.querySelector('a[href^="mailto:"]')).toBeNull();
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
