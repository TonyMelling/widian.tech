import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ResponsibilityStages } from "./ResponsibilityStages";

describe("ResponsibilityStages", () => {
  it("shows all ten proposed lifecycle stages", () => {
    render(<ResponsibilityStages />);
    for (const stage of ["Recorded", "Submitted", "Reviewed", "Finding raised", "Assigned", "In progress", "Remediated", "Independently checked", "Client verified", "Closed"]) {
      expect(screen.getAllByRole("button", { name: new RegExp(stage, "i") }).length).toBeGreaterThan(0);
    }
    expect(screen.getByText(/proposed target lifecycle/i)).toBeInTheDocument();
  });

  it("retains the supplied building and finding context", () => {
    render(<ResponsibilityStages recordContext={{ building: "Harbour Court · BLD-012", finding: "P1 finding · FND-207" }} />);
    expect(screen.getByText("P1 finding · FND-207")).toBeInTheDocument();
    expect(screen.getByText(/retained against Harbour Court/i)).toBeInTheDocument();
  });
});
