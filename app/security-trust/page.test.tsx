import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SecurityTrustPage from "./page";

describe("SecurityTrustPage", () => {
  it("states verified controls with their limits", () => {
    render(<SecurityTrustPage />);

    expect(screen.getByRole("heading", { name: "What we can evidence today." })).toBeInTheDocument();
    expect(screen.getByText(/Hashing is not external notarisation/)).toBeInTheDocument();
    expect(screen.getByText(/issued reports, not every record/)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "What the hash can prove." })).toBeInTheDocument();
    expect(screen.getByText(/if the content changes/)).toBeInTheDocument();
    expect(screen.getByText(/does not by itself prove when or why a change occurred/)).toBeInTheDocument();
    expect(screen.getByText(/Current scope: inspections, evidence photographs/)).toBeInTheDocument();
  });

  it("does not imply certifications or statutory compliance", () => {
    render(<SecurityTrustPage />);

    expect(screen.getByText(/does not currently claim an independent security certification/)).toBeInTheDocument();
    expect(screen.getByText(/do not claim that Widian certifies statutory compliance/)).toBeInTheDocument();
  });
});
