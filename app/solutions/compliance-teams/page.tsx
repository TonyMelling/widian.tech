import type { Metadata } from "next";
import { StubPage } from "@/components/StubPage";

export const metadata: Metadata = {
  title: "Solutions for Compliance Teams",
  robots: { index: false, follow: true },
};

export default function ComplianceTeamsPage() {
  return (
    <StubPage
      title="Compliance Teams"
      question="What remains open, overdue, unsupported or unverified? This page is in development — see docs/copy/solutions-compliance-teams.md."
    />
  );
}
