import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { missingPrivacyFacts } from "@/lib/site-config";
import PrivacyPage, { metadata } from "./page";

describe("PrivacyPage", () => {
  it("describes only processing that exists and does not promise unbuilt systems", () => {
    render(<PrivacyPage />);
    expect(screen.getByText(/has no accounts, sign-up forms, analytics or advertising/)).toBeInTheDocument();
    expect(screen.queryByText(/advertising cookies|google analytics/i)).not.toBeInTheDocument();
  });

  it("describes what the enquiry form collects and who handles it, with no marketing purpose", () => {
    const { container } = render(<PrivacyPage />);
    expect(screen.getByText(/stored in a database operated for Widian by Supabase, in\s+a project separate from the Widian application and hosted in London/)).toBeInTheDocument();
    expect(screen.getByText(/the size of your portfolio, your main challenge/)).toBeInTheDocument();
    expect(screen.getByText(/not added to a mailing list or used for promotional marketing/)).toBeInTheDocument();
    expect(screen.queryByRole("heading", { level: 3, name: "Optional updates" })).not.toBeInTheDocument();
    expect(container.textContent).not.toMatch(/consent\.|withdraw it/i);
    expect(screen.getByText(/Draft 0\.5/)).toBeInTheDocument();
    expect(screen.getByText(/Widian does not send\s+your enquiry details to Cal\.com/)).toBeInTheDocument();
  });

  it("states the approved retention and transfer facts, with no unresolved processor or retention placeholders", () => {
    const { container } = render(<PrivacyPage />);
    const text = container.textContent ?? "";
    expect(text).toMatch(/up to 12 months\s+after our last meaningful contact/);
    expect(text).toMatch(/justified reason/);
    expect(text).toMatch(/30 days under its standard\s+retention/);
    expect(text).toMatch(/Resend stores the content and\s+delivery records of emails about enquiries in the United States/);
    expect(text).toMatch(/Supabase may in limited cases process data outside the UK/);
    expect(text).toMatch(/publishes the safeguards/);
    expect(text).not.toMatch(/to be confirmed before this notice\s+is final/);
    // Nothing is asserted as verified that is not: no named transfer mechanism for Supabase/Resend, no agreements claim.
    expect(text).not.toMatch(/(Supabase|Resend)[^.]*(standard contractual clauses|Data Privacy Framework|signed|executed)/i);
    expect(text).not.toMatch(/Widian Limited|company number|registered office/i);
  });

  it("keeps missing controller facts visible rather than inventing them", () => {
    render(<PrivacyPage />);
    expect(screen.getByText("Required before publication")).toBeInTheDocument();
    expect(screen.getByText(/legal name of the data controller/)).toBeInTheDocument();
    expect(screen.queryByText(/Insert Widian/)).not.toBeInTheDocument();
  });

  it("stays unindexed until the controller and wording are confirmed, and uses the privacy mailbox", () => {
    expect(metadata.robots).toMatchObject({ index: false });
    render(<PrivacyPage />);
    expect(screen.getByText(/confirmation of the privacy notice wording/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "info@widian.tech" })).toHaveAttribute("href", "mailto:info@widian.tech");
    expect(screen.queryByText(/Company number|Registered office/)).not.toBeInTheDocument();
  });

  it("states the right to complain to Widian and to the ICO", () => {
    render(<PrivacyPage />);
    expect(screen.getByText(/acknowledge a complaint within 30 days/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /ico\.org\.uk/ })).toHaveAttribute("href", "https://ico.org.uk/make-a-complaint/");
    expect(screen.getByRole("link", { name: "Cookie Notice" })).toHaveAttribute("href", "/cookies");
  });
});

describe("missingPrivacyFacts", () => {
  const base = {
    controllerName: null,
    registeredAddress: null,
    companyNumber: null,
    privacyEmail: null,
    contactEmail: null,
    supportEmail: null,
    securityEmail: null,
    privacyWordingApproved: false,
  };
  const ready = { ...base, controllerName: "X", privacyEmail: "p@example.com", privacyWordingApproved: true };

  it("is empty only when the controller, privacy email and wording approval are all supplied", () => {
    expect(missingPrivacyFacts(base)).toHaveLength(3);
    expect(missingPrivacyFacts({ ...ready, privacyWordingApproved: false })).toHaveLength(1);
    expect(missingPrivacyFacts(ready)).toEqual([]);
  });

  it("requires the address and company number together", () => {
    const facts = { ...ready, companyNumber: "123" };
    expect(missingPrivacyFacts(facts)).toHaveLength(1);
    expect(missingPrivacyFacts({ ...facts, registeredAddress: "1 High Street" })).toEqual([]);
  });
});
