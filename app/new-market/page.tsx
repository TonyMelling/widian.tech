import type { Metadata } from "next";
import { StubPage } from "@/components/StubPage";

export const metadata: Metadata = {
  title: "The New Market",
  robots: { index: false, follow: true },
};

export default function NewMarketPage() {
  return (
    <StubPage
      title="The New Market"
      question="How can Widian become more than another software tool? This page is in development — see docs/copy/new-market.md. Flagged as the highest overclaim-risk page on the site; needs joint review before it's built."
    />
  );
}
