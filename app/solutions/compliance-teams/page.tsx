import type { Metadata } from "next";
import { RoleSolutionPage } from "@/components/solutions/RoleSolutionPage";

export const metadata: Metadata = {
  title: "Solutions for Compliance Teams",
  robots: { index: false, follow: true },
};

export default function ComplianceTeamsPage() {
  return (
    <RoleSolutionPage eyebrow="For compliance teams" headline="Know what’s overdue, unverified, and whose action it is." standfirst="Priorities, review states and attributed decisions make the next action visible without turning the record into another reporting dashboard." variant="attention" qualification="Independent checking currently means a permissioned reviewer other than the original inspection submitter; it is not a separate product persona." points={[
      { title: "Priority remains visible", body: "P1–P5 priority is carried with the finding rather than buried in a report." },
      { title: "Review is separate", body: "Inspection QA prevents the original submitter from approving their own inspection." },
      { title: "Ownership is explicit", body: "Open work is framed by its status, owner and next permitted decision." },
      { title: "Decisions leave context", body: "Implemented review and work-order events retain actor and timestamp attribution." },
    ]} />
  );
}
