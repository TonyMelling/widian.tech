import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { RecordNavigator } from "./RecordNavigator";

describe("RecordNavigator", () => {
  it("labels the walkthrough as a worked example with sample data", () => {
    render(<RecordNavigator />);
    expect(screen.getByText("Worked example")).toBeInTheDocument();
    expect(screen.getByText(/sample building and data/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Show more lifecycle stages" })).toBeInTheDocument();
  });

  it("moves through ten lifecycle stages while retaining the finding and building", () => {
    render(<RecordNavigator />);
    expect(screen.getAllByRole("button").filter((button) => /stage \d/i.test(button.textContent ?? ""))).toHaveLength(10);
    fireEvent.click(screen.getByRole("button", { name: /stage 04.*finding raised/i }));
    expect(screen.getByRole("heading", { name: /finding raised/i })).toBeInTheDocument();
    expect(screen.getByText(/FND-207 · Harbour Court/)).toBeInTheDocument();
  });
});
