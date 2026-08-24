import type { Metadata } from "next";
import { StubPage } from "@/components/StubPage";

export const metadata: Metadata = {
  title: "Solutions for Building Owners",
  robots: { index: false, follow: true },
};

export default function BuildingOwnersPage() {
  return (
    <StubPage
      title="Building Owners"
      question="Can I establish the current truth across my buildings? This page is in development — see docs/copy/solutions-building-owners.md."
    />
  );
}
