import type { Metadata } from "next";
import { StubPage } from "@/components/StubPage";

export const metadata: Metadata = {
  title: "Book a Walkthrough",
  robots: { index: false, follow: true },
};

// The walkthrough form itself (fields, validation, API route, lead
// storage) is out of scope for the Phase 4 Home vertical slice — see
// docs/copy/book-a-walkthrough.md and LEAD_CAPTURE_AND_COMMUNICATIONS.md.
// This route exists so Home's CTAs have a real destination.
export default function BookAWalkthroughPage() {
  return (
    <StubPage
      title="Book a Widian Walkthrough"
      question="The walkthrough form is in development — see docs/copy/book-a-walkthrough.md. Calendar provider and lead storage are still open decisions."
    />
  );
}
