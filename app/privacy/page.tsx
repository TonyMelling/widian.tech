import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/navigation/SiteFooter";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { PRIVACY_NOTICE, SITE_FACTS, missingPrivacyFacts } from "@/lib/site-config";

const missing = missingPrivacyFacts();
const complete = missing.length === 0;

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "How Widian uses personal data collected through widian.tech.",
  // Stays out of search indexes until the controller details below are supplied.
  robots: { index: complete, follow: true },
};

const PROCESSING = [
  [
    "Visiting the site",
    "Technical request data: IP address, browser and device information, pages requested and timestamps.",
    "To deliver the site, keep it secure and diagnose faults.",
    "Legitimate interests: operating and securing the website.",
  ],
  [
    "Enquiries you send us",
    "Through the Book a Demo form: your name, work email address, organisation, role, the size of your portfolio, your main challenge and anything you choose to write, plus a reference number, the date and time, the version of this notice, and records of the emails sent about your enquiry. By email: whatever you send.",
    "To reply, arrange a demonstration and manage any resulting business relationship. Enquiry details are not added to a mailing list or used for promotional marketing.",
    "Legitimate interests (responding to business enquiries) and steps taken at your request before entering a contract.",
  ],
] as const;

const RIGHTS = [
  "ask for a copy of the personal data Widian holds about you",
  "ask for inaccurate or incomplete data to be corrected",
  "ask for data to be erased in applicable circumstances",
  "ask Widian to restrict its use of your data in applicable circumstances",
  "object to processing that relies on legitimate interests",
  "ask for your data in a portable form where that right applies",
] as const;

const NAV: [string, string][] = [
  ["scope", "What this notice covers"],
  ["controller", "Who controls your data"],
  ["collection", "What we collect and why"],
  ["sharing", "Who handles it"],
  ["retention", "How long we keep it"],
  ["rights", "Your rights"],
  ["contact", "Contact and complaints"],
];

export default function PrivacyPage() {
  const { controllerName, registeredAddress, companyNumber, privacyEmail } = SITE_FACTS;
  return (
    <>
      <SiteHeader />
      <main>
        <header className="bg-grey px-4 pt-16 pb-14 md:px-16 md:pt-24 md:pb-20">
          <div className="mx-auto max-w-280">
            <p className="font-mono text-[11px] tracking-[0.12em] text-ember-hover uppercase">
              {complete ? "Privacy notice" : "Privacy notice · not yet final"}
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-[32px] leading-tight font-bold text-navy md:text-[52px]">
              How Widian uses personal data.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
              This notice explains what personal data Widian collects through widian.tech, why, who handles it, how long it
              is kept and what you can do about it.
            </p>
            <p className="mt-5 font-mono text-xs text-text-secondary">
              {complete ? `Version ${PRIVACY_NOTICE.finalVersion}` : `Draft ${PRIVACY_NOTICE.draftVersion}`} · {PRIVACY_NOTICE.date}
            </p>
          </div>
        </header>

        <div className="px-4 py-14 md:px-16 md:py-24">
          <div className="mx-auto grid max-w-280 gap-12 lg:grid-cols-[15rem_1fr] lg:gap-20">
            <nav aria-label="Privacy notice contents" className="lg:sticky lg:top-32 lg:self-start">
              <p className="font-mono text-[11px] font-semibold tracking-[0.1em] text-navy uppercase">On this page</p>
              <ol className="mt-4 space-y-2 border-l border-hairline pl-4 text-sm text-text-secondary">
                {NAV.map(([id, label]) => (
                  <li key={id}>
                    <a className="hover:text-navy" href={`#${id}`}>{label}</a>
                  </li>
                ))}
              </ol>
            </nav>

            <article className="min-w-0 space-y-14 text-[15px] leading-relaxed text-text-secondary md:text-base">
              {!complete && (
                <div className="border-l-2 border-amber bg-grey p-5">
                  <p className="font-semibold text-navy">Required before publication</p>
                  <p className="mt-1">Still to be supplied: {missing.join("; ")}.</p>
                </div>
              )}

              <section id="scope">
                <h2 className="font-display text-2xl font-bold text-navy">1. What this notice covers</h2>
                <p className="mt-4">
                  This notice covers personal data collected through the public website widian.tech. It does not cover the
                  Widian application at app.widian.tech. If you use the application, your organisation&rsquo;s Widian
                  administrator can tell you how your data is used there.
                </p>
                <p className="mt-4">
                  widian.tech has no accounts, sign-up forms, analytics or advertising. Its only form is the Book a Demo
                  enquiry form. It does not set cookies; see the <Link className="font-semibold text-navy underline" href="/cookies">Cookie Notice</Link>.
                </p>
              </section>

              <section id="controller">
                <h2 className="font-display text-2xl font-bold text-navy">2. Who controls your data</h2>
                <p className="mt-4">
                  <strong className="text-navy">{controllerName ?? "[Controller name to be confirmed]"}</strong> (&ldquo;Widian&rdquo;) decides
                  why and how personal data collected through this website is used, so it is the data controller.
                </p>
                {(registeredAddress || companyNumber) && (
                  <p className="mt-4">
                    {companyNumber ? `Company number ${companyNumber}. ` : ""}
                    {registeredAddress ? `Registered office: ${registeredAddress}.` : ""}
                  </p>
                )}
                <p className="mt-4">
                  Privacy contact:{" "}
                  {privacyEmail ? (
                    <a className="font-semibold text-navy underline" href={`mailto:${privacyEmail}`}>{privacyEmail}</a>
                  ) : (
                    "[monitored privacy email to be confirmed]"
                  )}
                  .
                </p>
              </section>

              <section id="collection">
                <h2 className="font-display text-2xl font-bold text-navy">3. What we collect and why</h2>
                <p className="mt-4">
                  Widian collects only what it needs. Providing personal data to us is optional; you can browse the site
                  without giving us any. We do not make decisions about you by automated means. Please do not send resident
                  information, special-category data, defect evidence or incident details in an enquiry.
                </p>
                <p className="mt-4">
                  On the Book a Demo form, every field except the message is required, because we cannot reply or prepare
                  for a demonstration without them.
                </p>
                <div className="mt-7 divide-y divide-hairline border-y border-hairline">
                  {PROCESSING.map(([activity, data, purpose, basis]) => (
                    <div key={activity} className="grid gap-3 py-6 md:grid-cols-[10rem_1fr_1fr_1fr] md:gap-6">
                      <h3 className="font-display text-lg font-bold text-navy">{activity}</h3>
                      <p><span className="font-semibold text-navy">Data: </span>{data}</p>
                      <p><span className="font-semibold text-navy">Purpose: </span>{purpose}</p>
                      <p><span className="font-semibold text-navy">Lawful basis: </span>{basis}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="sharing">
                <h2 className="font-display text-2xl font-bold text-navy">4. Who handles it</h2>
                <p className="mt-4">
                  Widian does not sell personal data. The site is hosted by Vercel Inc., which processes request data on
                  Widian&rsquo;s behalf. Enquiries sent by email are handled by Widian&rsquo;s email provider.
                </p>
                <p className="mt-4">
                  Enquiries made through the Book a Demo form are stored in a database operated for Widian by Supabase, in
                  a project separate from the Widian application and hosted in London, and are delivered by email through
                  Resend. A notification of each enquiry is sent to Widian&rsquo;s enquiry mailbox. Supabase and Resend act
                  on Widian&rsquo;s behalf, and enquiries are seen only by the people at Widian who respond to them.
                </p>
                <p className="mt-4">
                  Supabase may in limited cases process data outside the UK for operational purposes such as support and
                  maintenance, and publishes the safeguards it uses for those transfers. Resend stores the content and
                  delivery records of emails about enquiries in the United States, and publishes the safeguards it uses
                  for transfers of UK personal data.
                </p>
                <p className="mt-4">
                  After you send an enquiry, Widian may show a link to choose a time on Cal.com. Widian does not send
                  your enquiry details to Cal.com; if you follow the link and book, Cal.com handles what you enter there
                  under its own terms and privacy notice.
                </p>
                <p className="mt-4">
                  Vercel is a US company and may process request data outside the UK. Vercel states that it relies on the
                  EU&ndash;US Data Privacy Framework (including its UK extension) and on standard contractual clauses with the
                  UK Addendum for such transfers.
                </p>
              </section>

              <section id="retention">
                <h2 className="font-display text-2xl font-bold text-navy">5. How long we keep it</h2>
                <p className="mt-4">
                  An enquiry that does not lead to a demonstration or business relationship is kept for up to 12 months
                  after our last meaningful contact with you, and is then deleted or anonymised. We may keep it longer
                  where there is a justified reason, for example to deal with a complaint, a dispute or a legal
                  obligation.
                </p>
                <p className="mt-4">
                  An enquiry that leads to a business relationship is kept for as long as needed for that relationship,
                  and then only as long as legal, accounting or dispute-handling obligations require.
                </p>
                <p className="mt-4">
                  Resend keeps the content and delivery records of emails about an enquiry for 30 days under its standard
                  retention. Vercel keeps technical request data for the periods set in its service terms.
                </p>
              </section>

              <section id="rights">
                <h2 className="font-display text-2xl font-bold text-navy">6. Your rights</h2>
                <p className="mt-4">Under UK data-protection law you may:</p>
                <ul className="mt-4 space-y-2 border-l-2 border-navy pl-5">
                  {RIGHTS.map((right) => <li key={right}>{right};</li>)}
                </ul>
                <p className="mt-5">
                  There is no charge to make a request, and we will normally reply within one month. Where we rely on
                  legitimate interests you have the right to object at any time.
                </p>
              </section>

              <section id="contact">
                <h2 className="font-display text-2xl font-bold text-navy">7. Contact and complaints</h2>
                <p className="mt-4">
                  To use a right, or to raise a concern or complaint about how Widian handles your personal data, contact
                  the privacy contact above. We will acknowledge a complaint within 30 days and keep you informed of the
                  outcome.
                </p>
                <p className="mt-4">
                  You may also complain to the Information Commissioner&rsquo;s Office at{" "}
                  <a className="font-semibold text-navy underline" href="https://ico.org.uk/make-a-complaint/">ico.org.uk/make-a-complaint</a>.
                  You do not have to contact Widian first.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-navy">8. Changes to this notice</h2>
                <p className="mt-4">
                  Widian will update this notice, with a new version and date, if the personal data it collects or the
                  way it is used changes.
                </p>
              </section>
            </article>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
