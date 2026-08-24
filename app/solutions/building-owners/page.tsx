import type { Metadata } from "next";
import { RoleSolutionPage } from "@/components/solutions/RoleSolutionPage";

export const metadata: Metadata = {
  title: "Solutions for Building Owners",
  robots: { index: false, follow: true },
};

export default function BuildingOwnersPage() {
  return (
    <RoleSolutionPage eyebrow="For building owners" headline="See what’s true across your portfolio—not just what’s been reported." standfirst="Every building keeps its own connected record, so outstanding actions and accountable decisions remain visible after a report is issued." variant="portfolio" qualification="Client acceptance currently applies to priority P1/P2 findings; lower-priority findings follow the applicable review path." points={[
      { title: "Portfolio truth", body: "See open findings and outstanding actions across the buildings you are responsible for." },
      { title: "Accountable delegation", body: "The record shows who received an action and which evidenced decision follows." },
      { title: "Management activity", body: "Reviews, delegations and decisions remain attached to the operational record." },
      { title: "Qualified closure", body: "For P1/P2 findings, the client acceptance decision remains distinct from contractor completion." },
    ]} />
  );
}
