import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { SiteHeader } from "./SiteHeader";

describe("SiteHeader", () => {
  it("renders every primary nav link", () => {
    render(<SiteHeader />);
    const nav = screen.getByRole("navigation", { name: "Primary" });
    for (const label of [
      "Platform",
      "Building Record",
      "How It Works",
      "Solutions",
      "The New Market",
      "Security & Trust",
    ]) {
      expect(within(nav).getByRole("link", { name: label })).toBeInTheDocument();
    }
  });

  it("points Sign in at the production application, not an internal route", () => {
    render(<SiteHeader />);
    const signInLinks = screen.getAllByRole("link", { name: "Sign in" });
    for (const link of signInLinks) {
      expect(link).toHaveAttribute("href", "https://app.widian.tech/sign-in");
    }
  });

  it("uses the standardised primary CTA label (see DECISIONS.md, supersedes D-016)", () => {
    render(<SiteHeader />);
    expect(screen.getAllByRole("link", { name: "Book a Demo" }).length).toBeGreaterThan(0);
  });
});
