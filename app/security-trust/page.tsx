import type { Metadata } from "next";
import { StubPage } from "@/components/StubPage";

export const metadata: Metadata = {
  title: "Security & Trust",
  robots: { index: false, follow: true },
};

export default function SecurityTrustPage() {
  return (
    <StubPage
      title="Security & Trust"
      question="Can Widian be trusted with important building records? This page is in development — see docs/copy/security-trust.md. Most sections remain Withhold pending approved facts."
    />
  );
}
