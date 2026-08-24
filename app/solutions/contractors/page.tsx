import type { Metadata } from "next";
import { RoleSolutionPage } from "@/components/solutions/RoleSolutionPage";

export const metadata: Metadata = {
  title: "Solutions for Contractors",
  robots: { index: false, follow: true },
};

export default function ContractorsPage() {
  return (
    <RoleSolutionPage eyebrow="For contractors" headline="Know your scope. Submit your evidence. Know what happens next." standfirst="A secure guest link can take you to the defined work order without requiring a full account. Submitting evidence remains separate from review and acceptance." variant="handover" image={{ src: "/images/contractor-evidence.webp", alt: "Conceptual editorial photograph of completed fire-stopping work being documented with a measurement scale." }} qualification="Submitting remedial evidence is not closure. Independent review remains separate, and client acceptance currently applies to P1/P2 findings." points={[
      { title: "Exact scope", body: "The work order stays connected to its specific finding and element." },
      { title: "Required evidence", body: "The expected evidence is defined against the work rather than reconstructed later." },
      { title: "Guest completion", body: "An expiring, rate-limited guest link supports completion without a full account." },
      { title: "Clear handover", body: "Evidence submission, review, client acceptance and closure remain distinct states." },
    ]} />
  );
}
