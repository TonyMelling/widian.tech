import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders as a link to the given href", () => {
    render(<Button href="/book-a-walkthrough">Book a Widian walkthrough</Button>);
    expect(screen.getByRole("link", { name: "Book a Widian walkthrough" })).toHaveAttribute(
      "href",
      "/book-a-walkthrough",
    );
  });
});
