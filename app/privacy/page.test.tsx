import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { missingPrivacyFacts } from "@/lib/site-config";
import PrivacyPage from "./page";

describe("PrivacyPage", () => {
  it("describes only processing that exists and does not promise unbuilt systems", () => {
    render(<PrivacyPage />);
    expect(screen.getByText(/has no accounts, sign-up forms, contact forms, analytics or advertising/)).toBeInTheDocument();
    expect(screen.queryByText(/Supabase/)).not.toBeInTheDocument();
    expect(screen.queryByText(/demo form/i)).not.toBeInTheDocument();
  });

  it("keeps missing controller facts visible rather than inventing them", () => {
    render(<PrivacyPage />);
    expect(screen.getByText("Required before publication")).toBeInTheDocument();
    expect(screen.getByText(/legal name of the data controller/)).toBeInTheDocument();
    expect(screen.queryByText(/Insert Widian/)).not.toBeInTheDocument();
  });

  it("states the right to complain to Widian and to the ICO", () => {
    render(<PrivacyPage />);
    expect(screen.getByText(/acknowledge a complaint within 30 days/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /ico\.org\.uk/ })).toHaveAttribute("href", "https://ico.org.uk/make-a-complaint/");
    expect(screen.getByRole("link", { name: "Cookie Notice" })).toHaveAttribute("href", "/cookies");
  });
});

describe("missingPrivacyFacts", () => {
  const base = { controllerName: null, registeredAddress: null, companyNumber: null, privacyEmail: null, contactEmail: null };

  it("is empty only when the controller and privacy email are supplied", () => {
    expect(missingPrivacyFacts(base)).toHaveLength(2);
    expect(missingPrivacyFacts({ ...base, controllerName: "X", privacyEmail: "p@example.com" })).toEqual([]);
  });

  it("requires the address and company number together", () => {
    const facts = { ...base, controllerName: "X", privacyEmail: "p@example.com", companyNumber: "123" };
    expect(missingPrivacyFacts(facts)).toHaveLength(1);
    expect(missingPrivacyFacts({ ...facts, registeredAddress: "1 High Street" })).toEqual([]);
  });
});
