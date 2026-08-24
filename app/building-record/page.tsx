import type { Metadata } from "next";
import { StubPage } from "@/components/StubPage";

export const metadata: Metadata = {
  title: "Building Record",
  robots: { index: false, follow: true },
};

// Added as its own route per the 2026-08-24 redesign decision (see
// DECISIONS.md) — a portfolio-to-building-to-asset drill-down, distinct
// from /platform's static nine-layer anatomy. Copy brief pending at
// docs/copy/building-record.md.
export default function BuildingRecordPage() {
  return (
    <StubPage
      title="Building Record"
      question="How do you move from a whole portfolio down to one finding? This page is in development — see docs/copy/building-record.md."
    />
  );
}
