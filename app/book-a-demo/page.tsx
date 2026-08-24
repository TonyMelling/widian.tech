import type { Metadata } from "next";
import { StubPage } from "@/components/StubPage";

export const metadata: Metadata = {
  title: "Book a Demo",
  robots: { index: false, follow: true },
};

// The demo form itself (fields, validation, API route, lead storage) is
// out of scope for the Phase 4 Home vertical slice — see
// docs/copy/book-a-demo.md and LEAD_CAPTURE_AND_COMMUNICATIONS.md.
// This route exists so Home's CTAs have a real destination. Renamed
// from /book-a-walkthrough per the CTA-wording decision recorded in
// DECISIONS.md (supersedes D-016).
export default function BookADemoPage() {
  return (
    <StubPage
      title="Book a Widian Demo"
      question="The demo booking form is in development — see docs/copy/book-a-demo.md. Calendar provider and lead storage are still open decisions."
    />
  );
}
