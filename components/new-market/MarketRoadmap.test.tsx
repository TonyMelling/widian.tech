import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MarketRoadmap } from "./MarketRoadmap";

describe("MarketRoadmap", () => {
  it("shows all six steps and preserves future-state qualifications", () => {
    render(<MarketRoadmap />);
    expect(screen.getAllByRole("button")).toHaveLength(6);
    fireEvent.click(screen.getByRole("button", { name: /potential network effects/i }));
    expect(screen.getByText("Strategic hypothesis")).toBeInTheDocument();
    expect(screen.getByText(/not a measured network effect/i)).toBeInTheDocument();
  });
});
