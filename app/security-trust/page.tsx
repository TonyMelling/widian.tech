import type { Metadata } from "next";
import { StubPage } from "@/components/StubPage";

export const metadata: Metadata = { title: "Security & Trust", robots: { index: false, follow: true } };

export default function SecurityTrustPage() {
  return <StubPage title="Security & Trust" question="Can Widian be trusted with important building records? This page remains under construction while verified assurance content is assembled." />;
}
