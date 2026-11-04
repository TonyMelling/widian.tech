import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { LifecycleThread } from "./LifecycleThread";

// Home keeps a six-moment summary of one finding's path; the ten-stage cycle lives on How It Works.
describe("LifecycleThread", () => {
  it("renders exactly the six approved stages", () => {
    render(<LifecycleThread />);
    for (const label of [
      "Identified",
      "Assigned",
      "Remediated",
      "Re-inspected",
      "Closed",
    ]) {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0);
    }
    expect(screen.getAllByText("Verified*").length).toBeGreaterThan(0);
    expect(screen.queryByText("Client verified")).not.toBeInTheDocument();
    expect(screen.queryByText("Recorded")).not.toBeInTheDocument();
    expect(screen.queryByText("Independently reviewed")).not.toBeInTheDocument();
  });

  it("keeps the priority-scoping footnote visible near the thread", () => {
    render(<LifecycleThread />);
    expect(
      screen.getByText(/Verification by the client applies to priority findings/),
    ).toBeInTheDocument();
  });
});
