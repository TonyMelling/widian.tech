import type { Metadata } from "next";
import { StubPage } from "@/components/StubPage";

export const metadata: Metadata = {
  title: "Solutions for Surveyors",
  robots: { index: false, follow: true },
};

export default function SurveyorsPage() {
  return (
    <StubPage
      title="Surveyors"
      question="Can I capture structured evidence efficiently on site, including offline? This page is in development — see docs/copy/solutions-surveyors.md."
    />
  );
}
