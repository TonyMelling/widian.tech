import type { Metadata } from "next";
import { StubPage } from "@/components/StubPage";

export const metadata: Metadata = {
  title: "How It Works",
  robots: { index: false, follow: true },
};

export default function HowItWorksPage() {
  return (
    <StubPage
      title="How It Works"
      question="What prevents an issue from being marked complete prematurely? This page is in development — see docs/copy/how-it-works.md for the drafted copy."
    />
  );
}
