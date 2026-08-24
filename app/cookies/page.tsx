import type { Metadata } from "next";
import { StubPage } from "@/components/StubPage";

export const metadata: Metadata = {
  title: "Cookie Notice",
  robots: { index: false, follow: true },
};

// Structurally blocked — same privacy-owner gap as /privacy (D-010,
// D-012). No real cookie inventory or consent copy until that's
// resolved — see docs/copy/cookies.md.
export default function CookiesPage() {
  return (
    <StubPage
      title="Cookie Notice"
      question="This page is blocked pending a named privacy owner (D-010, D-012) — see docs/copy/cookies.md."
    />
  );
}
