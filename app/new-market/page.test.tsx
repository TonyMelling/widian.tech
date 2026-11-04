import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import NewMarketPage from "./page";

describe("NewMarketPage", () => {
  it("frames operational tension without presenting a regulatory forecast", () => {
    render(<NewMarketPage />);
    expect(screen.getByRole("heading", { name: "Responsibility is becoming harder to hand off." })).toBeInTheDocument();
    expect(screen.getByText(/scattered records and evidence converging around one building/)).toBeInTheDocument();
    expect(screen.getByAltText(/fragmented inspection records/)).toBeInTheDocument();
  });
});
