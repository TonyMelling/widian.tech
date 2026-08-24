import type { Metadata } from "next";
import { StubPage } from "@/components/StubPage";

export const metadata: Metadata = {
  title: "Solutions",
  robots: { index: false, follow: true },
};

export default function SolutionsPage() {
  return (
    <StubPage
      title="Solutions"
      question="What does the shared record change for my role? This page is in development — see docs/copy/solutions.md for the drafted copy."
    />
  );
}
