import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MarketRoadmap } from "./MarketRoadmap";

describe("MarketRoadmap", () => {
  it("shows all six steps and preserves future-state qualifications", () => {
    render(<MarketRoadmap />);
    expect(screen.getAllByRole("button").filter((button) => /^0\d/.test(button.textContent ?? ""))).toHaveLength(6);
    expect(screen.getByRole("button", { name: "Show more market direction options" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /shared coordination/i }));
    expect(screen.getByText("Looking ahead")).toBeInTheDocument();
    expect(screen.getByText(/it could become the natural place to coordinate/i)).toBeInTheDocument();
  });
});
