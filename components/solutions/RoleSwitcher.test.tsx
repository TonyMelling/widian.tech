import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { RoleSwitcher } from "./RoleSwitcher";

describe("RoleSwitcher", () => {
  it("changes the conceptual image with the selected role", () => {
    render(<RoleSwitcher />);
    expect(screen.getByRole("img", { name: /cutaway illustration/i })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("tab", { name: /surveyor/i }));
    expect(screen.getByRole("img", { name: /surveyor capturing structured evidence/i })).toBeInTheDocument();
    expect(screen.getByText(/illustration of a sample scenario/i)).toBeInTheDocument();
  });
});
