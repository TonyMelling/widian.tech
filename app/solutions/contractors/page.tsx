import type { Metadata } from "next";
import { StubPage } from "@/components/StubPage";

export const metadata: Metadata = {
  title: "Solutions for Contractors",
  robots: { index: false, follow: true },
};

export default function ContractorsPage() {
  return (
    <StubPage
      title="Contractors"
      question="Will I receive a clear scope and know what evidence is required? This page is in development — see docs/copy/solutions-contractors.md."
    />
  );
}
