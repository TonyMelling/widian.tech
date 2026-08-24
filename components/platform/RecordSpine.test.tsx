import { describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { RecordSpine } from "./RecordSpine";

describe("RecordSpine", () => {
  it("renders exactly the nine record layers as selectable buttons", () => {
    render(<RecordSpine />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(9);
  });

  it("shows Building identity's detail by default", () => {
    render(<RecordSpine />);
    expect(
      screen.getByRole("heading", { name: "Building identity" }),
    ).toBeInTheDocument();
  });

  it("switches detail content when another layer is selected", () => {
    render(<RecordSpine />);

    const evidenceButton = screen.getByRole("button", { name: /Evidence/ });
    fireEvent.click(evidenceButton);

    expect(screen.getByRole("heading", { name: "Evidence" })).toBeInTheDocument();
    expect(evidenceButton).toHaveAttribute("aria-current", "true");
  });

  it("never shows the blocked 10-stage lifecycle language for Inspections", () => {
    render(<RecordSpine />);
    expect(screen.queryByText(/Recorded.*Submitted.*Reviewed/)).not.toBeInTheDocument();
  });
});
