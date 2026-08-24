import type { Metadata } from "next";
import { StubPage } from "@/components/StubPage";

export const metadata: Metadata = {
  title: "Privacy Notice",
  robots: { index: false, follow: true },
};

// Structurally blocked — no privacy owner assigned (D-010, D-012 in
// docs/DECISIONS.md, parked at user's direction). Do not write real
// privacy content here without that review — see docs/copy/privacy.md.
export default function PrivacyPage() {
  return (
    <StubPage
      title="Privacy Notice"
      question="This page is blocked pending a named privacy owner (D-010, D-012) — see docs/copy/privacy.md."
    />
  );
}
