import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { LifecycleThread } from "./LifecycleThread";

// Guards against the blocked 10-stage chain (D-015 in docs/DECISIONS.md)
// silently creeping back into the Home page before the build ships and
// is re-verified.
describe("LifecycleThread", () => {
  it("renders exactly the six approved stages", () => {
    render(<LifecycleThread />);
    for (const label of [
      "Issue identified",
      "Action assigned",
      "Work evidenced",
      "Independently reviewed",
      "Closed",
    ]) {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0);
    }
    expect(screen.getAllByText("Verified*").length).toBeGreaterThan(0);
    expect(screen.queryByText("Client verified")).not.toBeInTheDocument();
    expect(screen.queryByText("Recorded")).not.toBeInTheDocument();
  });

  it("keeps the priority-scoping footnote visible near the thread", () => {
    render(<LifecycleThread />);
    expect(
      screen.getByText(/Verification by the client applies to priority findings/),
    ).toBeInTheDocument();
  });
});
