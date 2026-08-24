import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/navigation/SiteFooter";
import { SiteHeader } from "@/components/navigation/SiteHeader";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "How Widian collects, uses, stores and protects personal data submitted through widian.tech.",
  robots: { index: false, follow: true },
};

const PROCESSING = [
  ["Demo enquiries", "Name, work email, organisation, role, portfolio band, selected challenge, optional message, booking details and enquiry source.", "To respond, arrange and deliver the demo, keep an auditable enquiry record and manage any resulting business relationship.", "Widian proposes legitimate interests for business-to-business enquiries and steps requested before entering a contract. This basis must be approved before lead capture goes live."],
  ["Optional marketing", "Business contact details and a record of the wording, time and source of the preference.", "To send specifically requested updates and maintain suppression records when someone opts out.", "Consent where requested. Marketing permission is separate, optional and can be withdrawn at any time."],
  ["Site security and operation", "IP address, device and browser information, request metadata, timestamps and diagnostic events.", "To deliver the site, prevent abuse, investigate faults and protect Widian's systems.", "Widian's legitimate interests in operating and securing the website, subject to a documented balancing assessment."],
  ["Audience analytics", "Pseudonymous interaction and device information. Form values and direct identifiers must not be included.", "To understand site performance and improve relevant visitor journeys.", "Consent where required. Non-essential analytics must remain disabled until a visitor has made a valid choice."],
] as const;

const RIGHTS = [
  "ask for access to personal data Widian holds about you",
  "ask for inaccurate or incomplete data to be corrected",
  "ask for data to be erased in applicable circumstances",
  "ask Widian to restrict processing in applicable circumstances",
  "object to processing based on legitimate interests",
  "receive portable data where the right applies",
  "withdraw consent at any time where processing relies on consent",
] as const;

export default function PrivacyPage() {
  return <><SiteHeader /><main>
    <header className="bg-grey px-4 pt-16 pb-14 md:px-16 md:pt-24 md:pb-20"><div className="mx-auto max-w-280">
      <p className="font-mono text-[11px] tracking-[0.12em] text-ember uppercase">Privacy notice · draft for approval</p>
      <h1 className="mt-4 max-w-3xl font-display text-[32px] leading-tight font-bold text-navy md:text-[52px]">How Widian uses personal data.</h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">This notice explains the personal data collected through widian.tech, why it is used, where it is stored and the choices available to you.</p>
      <p className="mt-5 font-mono text-xs text-text-secondary">Version: draft 0.1 · 24 August 2026</p>
    </div></header>
    <div className="px-4 py-14 md:px-16 md:py-24"><div className="mx-auto grid max-w-280 gap-12 lg:grid-cols-[15rem_1fr] lg:gap-20">
      <nav aria-label="Privacy notice contents" className="lg:sticky lg:top-32 lg:self-start"><p className="font-mono text-[11px] font-semibold tracking-[0.1em] text-navy uppercase">On this page</p><ol className="mt-4 space-y-2 border-l border-hairline pl-4 text-sm text-text-secondary">{[["controller","Who controls your data"],["collection","What we collect and why"],["sharing","Storage and processors"],["retention","How long we keep it"],["rights","Your rights"],["contact","Contact and complaints"]].map(([href,label]) => <li key={href}><a className="hover:text-navy" href={`#${href}`}>{label}</a></li>)}</ol></nav>
      <article className="min-w-0 space-y-14 text-[15px] leading-relaxed text-text-secondary md:text-base">
        <section id="controller"><h2 className="font-display text-2xl font-bold text-navy">1. Who controls your data</h2><p className="mt-4"><strong className="text-navy">Widian is the data controller</strong> for personal data collected through this marketing website and its demo-enquiry process. Widian decides why and how that data is used.</p><Required>Insert Widian&rsquo;s registered legal name, registered address, company number and monitored privacy email address. Confirm whether a formal data protection officer is required or appointed.</Required></section>
        <section id="collection"><h2 className="font-display text-2xl font-bold text-navy">2. What we collect and why</h2><p className="mt-4">Widian limits collection to information needed for a defined purpose. Please do not submit resident information, special-category data, defect evidence or incident details through the demo form.</p><div className="mt-7 divide-y divide-hairline border-y border-hairline">{PROCESSING.map(([purpose,data,use,basis]) => <section key={purpose} className="py-6"><h3 className="font-display text-lg font-bold text-navy">{purpose}</h3><dl className="mt-3 grid gap-3 sm:grid-cols-[7rem_1fr]"><dt className="font-mono text-xs font-semibold text-navy uppercase">Data</dt><dd>{data}</dd><dt className="font-mono text-xs font-semibold text-navy uppercase">Purpose</dt><dd>{use}</dd><dt className="font-mono text-xs font-semibold text-navy uppercase">Lawful basis</dt><dd>{basis}</dd></dl></section>)}</div><p className="mt-5">Widian does not currently plan to use website enquiry data for solely automated decisions or profiling that produces legal or similarly significant effects.</p></section>
        <section id="sharing"><h2 className="font-display text-2xl font-bold text-navy">3. Storage, processors and international access</h2><p className="mt-4">Demo-enquiry records will be stored in a separate Supabase marketing database. The website will be hosted by Vercel using an EU AWS execution and storage region selected by Widian. Marketing data will not be placed in Widian&rsquo;s operational Building Record database by default.</p><p className="mt-4">Widian may use vetted providers to host the site and database, send transactional messages, schedule demos, monitor security and&mdash;only after the appropriate choice&mdash;measure site use. These providers act under contractual data-protection obligations and may use approved sub-processors.</p><p className="mt-4">An EU hosting region does not by itself rule out international access or onward processing. Before launch, Widian will document each processor, data location and restricted transfer, using an applicable UK adequacy regulation, the UK International Data Transfer Agreement or Addendum, or another permitted safeguard where required.</p></section>
        <section id="retention"><h2 className="font-display text-2xl font-bold text-navy">4. How long we keep personal data</h2><p className="mt-4">Widian will keep personal data only for as long as needed for the purpose collected, an active business relationship, legal or accounting obligations, disputes, or the minimum suppression record needed to honour a marketing objection.</p><Required>Approve and insert review or deletion periods for unqualified enquiries, active opportunities, customer communications, consent evidence, suppression records, security logs and analytics data.</Required></section>
        <section id="rights"><h2 className="font-display text-2xl font-bold text-navy">5. Your data-protection rights</h2><p className="mt-4">Depending on the processing and lawful basis, you may have the right to:</p><ul className="mt-4 space-y-2 border-l-2 border-navy pl-5">{RIGHTS.map(right => <li key={right}>{right};</li>)}</ul><p className="mt-5 font-semibold text-navy">You have the right to object at any time to personal data being used for direct marketing.</p><p className="mt-4">These rights are not absolute in every situation. Widian may need to verify your identity proportionately before acting on a request.</p></section>
        <section><h2 className="font-display text-2xl font-bold text-navy">6. Cookies and similar technologies</h2><p className="mt-4">Strictly necessary technologies may be used to operate and protect the site. Non-essential analytics and third-party calendar technologies must not load until the required consent choice has been made. See the <Link className="font-semibold text-navy underline decoration-hairline underline-offset-4" href="/cookies">Cookie Notice</Link> for the current inventory and controls.</p></section>
        <section id="contact"><h2 className="font-display text-2xl font-bold text-navy">7. Contact and complaints</h2><p className="mt-4">Contact Widian&rsquo;s privacy owner to exercise a right, withdraw consent or raise a concern. The monitored privacy address must be inserted before publication.</p><p className="mt-4">You can also complain to the Information Commissioner&rsquo;s Office. Visit <a className="font-semibold text-navy underline decoration-hairline underline-offset-4" href="https://ico.org.uk/make-a-complaint/" rel="noreferrer">ico.org.uk/make-a-complaint</a> for current contact options. We would welcome the opportunity to address your concern first.</p></section>
        <section><h2 className="font-display text-2xl font-bold text-navy">8. Changes to this notice</h2><p className="mt-4">Widian will review this notice when its purposes, suppliers or processing change. Material changes will be dated here, and the notice version shown with a demo enquiry will be stored with that enquiry.</p></section>
      </article>
    </div></div>
  </main><SiteFooter /></>;
}

function Required({ children }: { children: React.ReactNode }) {
  return <div className="mt-5 border-l-2 border-amber bg-grey p-5"><p className="font-semibold text-navy">Required before publication</p><p className="mt-1">{children}</p></div>;
}
