import type { Metadata } from "next";
import { StubPage } from "@/components/StubPage";

export const metadata: Metadata = {
  title: "Platform",
  robots: { index: false, follow: true },
};

export default function PlatformPage() {
  return (
    <StubPage
      title="Platform"
      question="What is actually inside a Widian Building Record? This page is in development — see docs/copy/platform.md for the drafted copy."
    />
  );
}
