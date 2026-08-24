import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { LaunchAnnouncement } from "./LaunchAnnouncement";

const route = vi.hoisted(() => ({ pathname: "/" }));

vi.mock("next/navigation", () => ({ usePathname: () => route.pathname }));

describe("LaunchAnnouncement", () => {
  beforeEach(() => {
    route.pathname = "/";
    window.sessionStorage.clear();
  });

  afterEach(() => cleanup());

  it("shows the modal only on the first Home visit in a session", async () => {
    const first = render(<LaunchAnnouncement />);
    await waitFor(() => expect(screen.getByText("Widian is launching soon.")).toBeInTheDocument());
    expect(window.sessionStorage.getItem("widian-launch-modal-seen")).toBe("true");

    first.unmount();
    render(<LaunchAnnouncement />);
    await waitFor(() => expect(screen.getByText(/Widian is launching soon\./)).toBeInTheDocument());
    expect(screen.getByText("LAUNCHING SOON")).toBeInTheDocument();
  });

  it("keeps the ticker on pages other than Home", () => {
    route.pathname = "/platform";
    render(<LaunchAnnouncement />);
    expect(screen.getByText("LAUNCHING SOON")).toBeInTheDocument();
    expect(window.sessionStorage.getItem("widian-launch-modal-seen")).toBeNull();
  });
});
