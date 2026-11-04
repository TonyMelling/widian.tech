import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { DemoRequestForm } from "./DemoRequestForm";

function fill() {
  fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Ada Lovelace" } });
  fireEvent.change(screen.getByLabelText("Work email"), { target: { value: "ada@example.com" } });
  fireEvent.change(screen.getByLabelText("Organisation"), { target: { value: "Example Housing" } });
  fireEvent.change(screen.getByLabelText("Role"), { target: { value: "Head of Safety" } });
  fireEvent.change(screen.getByLabelText("Buildings you manage, inspect or work on"), { target: { value: "6-25" } });
  fireEvent.change(screen.getByLabelText("Main challenge"), { target: { value: "scattered-records" } });
}
const submit = () => fireEvent.click(screen.getByRole("button", { name: "Request a demo" }));

let fetchMock: ReturnType<typeof vi.fn>;
beforeEach(() => {
  fetchMock = vi.fn();
  vi.stubGlobal("fetch", fetchMock);
});
afterEach(() => vi.unstubAllGlobals());

describe("DemoRequestForm", () => {
  it("shows accessible, associated errors and does not call the API when the form is incomplete", async () => {
    render(<DemoRequestForm bookingUrl={null} contactEmail="info@widian.tech" />);
    submit();
    expect(await screen.findByRole("alert")).toHaveTextContent("Please check the following");
    expect(screen.getByLabelText("Name")).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByLabelText("Name").getAttribute("aria-describedby")).toBe("name-error");
    expect(document.getElementById("name-error")).toHaveTextContent("Enter your name.");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("keeps marketing permission optional and unticked, separate from the request, with the privacy notice beside submit", () => {
    render(<DemoRequestForm bookingUrl={null} contactEmail={null} />);
    const optIn = screen.getByRole("checkbox");
    expect(optIn).not.toBeChecked();
    expect(optIn).not.toBeRequired();
    expect(screen.getByRole("link", { name: "Privacy Notice" })).toHaveAttribute("href", "/privacy");
  });

  it("submits the answers, then shows a reference and the booking link only after acceptance", async () => {
    fetchMock.mockResolvedValue(Response.json({ status: "accepted", reference: "WD-AB12CD34" }, { status: 201 }));
    render(<DemoRequestForm bookingUrl="https://cal.com/widian/demo" contactEmail="info@widian.tech" />);
    fill();
    submit();

    expect(await screen.findByRole("heading", { name: "Request received." })).toBeInTheDocument();
    expect(screen.getByText("WD-AB12CD34")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Choose a time/ })).toHaveAttribute("href", "https://cal.com/widian/demo");
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("/api/walkthrough");
    const sent = JSON.parse(init.body);
    expect(sent).toMatchObject({ email: "ada@example.com", buildingBand: "6-25", marketingOptIn: false, website: "" });
    expect(sent.idempotencyKey).toMatch(/^[0-9a-f-]{36}$/);
  });

  it("does not claim a booking when no booking link is configured", async () => {
    fetchMock.mockResolvedValue(Response.json({ status: "accepted", reference: "WD-AB12CD34" }, { status: 201 }));
    render(<DemoRequestForm bookingUrl={null} contactEmail="info@widian.tech" />);
    fill();
    submit();
    expect(await screen.findByText(/We will reply to arrange a time/)).toBeInTheDocument();
    expect(screen.queryByText(/You.re booked|confirmed for/i)).not.toBeInTheDocument();
  });

  it("on failure keeps the visitor's answers, offers the email fallback and retries with the SAME idempotency key", async () => {
    fetchMock
      .mockResolvedValueOnce(Response.json({ status: "error" }, { status: 500 }))
      .mockResolvedValueOnce(Response.json({ status: "accepted", reference: "WD-AB12CD34" }, { status: 201 }));
    render(<DemoRequestForm bookingUrl={null} contactEmail="info@widian.tech" />);
    fill();
    submit();

    expect(await screen.findByText(/your request was not sent/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "info@widian.tech" })).toHaveAttribute("href", "mailto:info@widian.tech");
    expect(screen.getByLabelText("Work email")).toHaveValue("ada@example.com");

    submit();
    await screen.findByRole("heading", { name: "Request received." });
    const keys = fetchMock.mock.calls.map(([, init]) => JSON.parse(init.body).idempotencyKey);
    expect(keys[0]).toBe(keys[1]);
  });

  it("treats a network failure as retryable and shows server-side field errors inline", async () => {
    fetchMock.mockRejectedValueOnce(new TypeError("offline"));
    render(<DemoRequestForm bookingUrl={null} contactEmail={null} />);
    fill();
    submit();
    expect(await screen.findByText(/could not reach the server/)).toBeInTheDocument();

    fetchMock.mockResolvedValueOnce(Response.json({ status: "invalid", errors: { email: "Enter a valid email address." } }, { status: 422 }));
    submit();
    await waitFor(() => expect(document.getElementById("email-error")).toHaveTextContent("Enter a valid email address."));
  });

  it("exposes every control through a real label and hides the honeypot from assistive technology", () => {
    const { container } = render(<DemoRequestForm bookingUrl={null} contactEmail={null} />);
    for (const control of container.querySelectorAll("input:not([name=website]), select, textarea")) {
      const labelled = control.closest("label") ?? (control.id ? container.querySelector(`label[for="${control.id}"]`) : null);
      expect(labelled, `${control.getAttribute("name")} has no label`).not.toBeNull();
    }
    const honeypot = container.querySelector("input[name=website]");
    expect(honeypot?.closest('[aria-hidden="true"]')).not.toBeNull();
    expect(honeypot).toHaveAttribute("tabindex", "-1");
  });
});
