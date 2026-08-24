import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { RecordNavigator } from "./RecordNavigator";

describe("RecordNavigator", () => {
  it("labels the example as synthetic and not a live product screen", () => {
    render(<RecordNavigator />);
    expect(screen.getByText("Synthetic demonstration")).toBeInTheDocument();
    expect(screen.getByText(/not a live product screen/i)).toBeInTheDocument();
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
