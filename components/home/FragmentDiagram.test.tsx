import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { FragmentDiagram } from "./FragmentDiagram";

describe("FragmentDiagram", () => {
  it("renders the decorative diagram and a visible, readable caption", () => {
    render(<FragmentDiagram />);
    expect(
      screen.getByText(/scattered activity converges into one connected building record/i),
    ).toBeInTheDocument();
  });

  it("keeps the SVG itself hidden from assistive technology (redundant with adjacent body copy)", () => {
    const { container } = render(<FragmentDiagram />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("aria-hidden", "true");
  });
});
