import { describe, expect, it } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import { RecordSpine } from "./RecordSpine";

describe("RecordSpine", () => {
  it("renders exactly the nine record layers as selectable buttons", () => {
    render(<RecordSpine />);
    const buttons = within(screen.getByTestId("record-spine-mobile")).getAllByRole("button");
    expect(buttons).toHaveLength(9);
  });

  it("shows Building identity's detail by default", () => {
    render(<RecordSpine />);
    expect(within(screen.getByTestId("record-spine-mobile")).getByRole("heading", { name: "Building identity" })).toBeInTheDocument();
  });

  it("switches detail content when another layer is selected", () => {
    render(<RecordSpine />);

    const mobile = screen.getByTestId("record-spine-mobile");
    const evidenceButton = within(mobile).getByRole("button", { name: /Evidence/ });
    fireEvent.click(evidenceButton);

    expect(within(mobile).getByRole("heading", { name: "Evidence" })).toBeInTheDocument();
    expect(evidenceButton).toHaveAttribute("aria-expanded", "true");
  });

  it("never shows the blocked 10-stage lifecycle language for Inspections", () => {
    render(<RecordSpine />);
    expect(screen.queryByText(/Recorded.*Submitted.*Reviewed/)).not.toBeInTheDocument();
  });
});
