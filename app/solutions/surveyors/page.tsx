import type { Metadata } from "next";
import { RoleSolutionPage } from "@/components/solutions/RoleSolutionPage";

export const metadata: Metadata = {
  title: "Solutions for Surveyors",
  robots: { index: false, follow: true },
};

export default function SurveyorsPage() {
  return (
    <RoleSolutionPage eyebrow="For surveyors" headline="Capture findings on site—even without signal." standfirst="Identify the element, record the finding and add the photograph. The core inspection-and-finding capture loop saves locally and synchronises when a connection returns." variant="field" image={{ src: "/images/surveyor-field-capture.webp", alt: "Conceptual editorial photograph of a surveyor measuring a fire-door gap while holding a tablet." }} qualification="Offline scope is limited to the core inspection and finding capture-and-sync loop. Scheduling, agenda prefetch and full history are not claimed as offline." points={[
      { title: "Identify the element", body: "Use QR-based lookup to reach the specific asset being inspected." },
      { title: "Capture structured evidence", body: "Priority, photographs and structured fields keep the finding attached to its element." },
      { title: "Save locally", body: "Inspection and finding capture can continue through the implemented offline core loop." },
      { title: "See synchronisation state", body: "Pending and synchronised records remain distinguishable when connectivity returns." },
    ]} />
  );
}
