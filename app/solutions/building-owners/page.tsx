import type { Metadata } from "next";
import { RoleSolutionPage } from "@/components/solutions/RoleSolutionPage";

export const metadata: Metadata = {
  title: "Solutions for Building Owners",
  description: "See open findings, outstanding actions and accountable decisions across every building in your portfolio, held in one Widian building record.",
};

export default function BuildingOwnersPage() {
  return (
    <RoleSolutionPage eyebrow="For building owners" headline="See what’s true across your portfolio—not just what’s been reported." standfirst="Every building keeps its own connected record, so outstanding actions and accountable decisions remain visible after a report is issued." variant="portfolio" qualification="Every finding, from P1 to P5, is closed only after the client accepts the remedial outcome." points={[
      { title: "Portfolio truth", body: "See open findings and outstanding actions across the buildings you are responsible for." },
      { title: "Accountable delegation", body: "The record shows who received an action and which evidenced decision follows." },
      { title: "Management activity", body: "Reviews, delegations and decisions remain attached to the operational record." },
      { title: "Client-accepted closure", body: "The client’s acceptance decision remains distinct from contractor completion, for every priority." },
    ]} />
  );
}
