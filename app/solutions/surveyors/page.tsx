import type { Metadata } from "next";
import { RoleSolutionPage } from "@/components/solutions/RoleSolutionPage";

export const metadata: Metadata = {
  title: "Solutions for Surveyors",
  description: "Capture structured inspection findings and photographs against the specific element on site, with offline capture and later synchronisation.",
};

export default function SurveyorsPage() {
  return (
    <RoleSolutionPage eyebrow="For surveyors" headline="Capture findings on site—even without signal." standfirst="Identify the element, record the finding and add the photograph. The core inspection-and-finding capture loop saves locally and synchronises when a connection returns." variant="field" image={{ src: "/images/surveyor-field-capture.webp", alt: "Illustration of a surveyor measuring a fire-door gap while holding a tablet." }} qualification="Offline use is limited to inspection and finding capture and synchronisation. Scheduling, agenda prefetch and full history are not offered offline." points={[
      { title: "Identify the element", body: "Use QR-based lookup to reach the specific asset being inspected." },
      { title: "Capture structured evidence", body: "Priority, photographs and structured fields keep the finding attached to its element." },
      { title: "Save locally", body: "Inspection and finding capture can continue without a connection." },
      { title: "See synchronisation state", body: "Pending and synchronised records remain distinguishable when connectivity returns." },
    ]} />
  );
}
