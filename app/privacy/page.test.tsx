import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PrivacyPage from "./page";

describe("PrivacyPage", () => {
  it("identifies the controller and approved storage direction", () => {
    render(<PrivacyPage />);
    expect(screen.getByText(/Widian is the data controller/)).toBeInTheDocument();
    expect(screen.getByText(/separate Supabase marketing database/)).toBeInTheDocument();
    expect(screen.getByText(/Vercel using an EU AWS/)).toBeInTheDocument();
  });

  it("keeps unresolved approval requirements visible", () => {
    render(<PrivacyPage />);
    expect(screen.getAllByText("Required before publication")).toHaveLength(2);
    expect(screen.getByText(/right to object at any time/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Cookie Notice" })).toHaveAttribute("href", "/cookies");
  });
});
