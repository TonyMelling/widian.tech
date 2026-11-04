import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ResponsibilityStages } from "./ResponsibilityStages";

describe("ResponsibilityStages", () => {
  it("shows all ten lifecycle stages", () => {
    render(<ResponsibilityStages />);
    for (const stage of ["Know", "Inspect", "Identify", "Prioritise", "Assign", "Remediate", "Re-inspect", "Verify", "Update", "Monitor"]) {
      expect(screen.getAllByRole("button", { name: new RegExp(stage, "i") }).length).toBeGreaterThan(0);
    }
    expect(screen.queryByText(/introducing the ten stages progressively/i)).not.toBeInTheDocument();
  });

  it("shows the cycle, including the return to inspection and the rework path", () => {
    render(<ResponsibilityStages />);
    expect(screen.getByRole("img", { name: /Monitor returns to Inspect.*returns the work to Remediate/i })).toBeInTheDocument();
    expect(screen.getByText(/Monitoring leads back to inspection/i)).toBeInTheDocument();
    expect(screen.getByText(/a rejected outcome returns the work to remediation/i)).toBeInTheDocument();
  });

  it("retains the supplied building and finding context", () => {
    render(<ResponsibilityStages recordContext={{ building: "Harbour Court · BLD-012", finding: "P1 finding · FND-207" }} />);
    expect(screen.getByText("P1 finding · FND-207")).toBeInTheDocument();
    expect(screen.getByText(/retained against Harbour Court/i)).toBeInTheDocument();
  });
});
