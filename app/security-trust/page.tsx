import type { Metadata } from "next";
import { SiteFooter } from "@/components/navigation/SiteFooter";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Security & Trust",
  description:
    "See what Widian can currently evidence about attribution, permissions and record integrity, including the limits of those claims.",
  robots: { index: false, follow: true },
};

const ASSURANCE_ITEMS = [
  {
    title: "Identity and attribution",
    status: "Verified",
    statusClass: "text-verified",
    summary:
      "Implemented audit events, work-order transitions and review records retain the account and timestamp associated with the action.",
    scope: "Scoped to implemented events and actor fields on core records.",
  },
  {
    title: "Organisation and role boundaries",
    status: "Verified",
    statusClass: "text-verified",
    summary:
      "Access is scoped by organisation and implemented role. Database row-level security enforces those boundaries rather than relying on interface labels alone.",
    scope: "Verified roles include Widian administrators, surveyors, suppliers and client users.",
  },
  {
    title: "Evidence integrity checking",
    status: "Qualified",
    statusClass: "text-amber",
    summary:
      "SHA-256 hashes support integrity checking for inspections, evidence photographs, signatures, work orders and issued reports.",
    scope:
      "Hashing is not external notarisation, legal chain-of-custody certification or a claim that every record is tamper-proof.",
  },
  {
    title: "Issued-report controls",
    status: "Verified · issued reports only",
    statusClass: "text-verified",
    summary:
      "Once a report is issued, its original bytes, hash and template version are frozen. It cannot be deleted and can only move one way to superseded or withdrawn.",
    scope: "This control applies to issued reports, not every record in Widian.",
  },
] as const;

const NOT_CLAIMED = [
  "Widian does not currently claim an independent security certification.",
  "We do not describe every record as immutable or universally tamper-proof.",
  "We do not claim that Widian certifies statutory compliance or replaces professional judgement.",
] as const;

export default function SecurityTrustPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-navy px-4 pt-16 pb-14 md:px-16 md:pt-24 md:pb-20">
          <div className="mx-auto max-w-280">
            <p className="font-mono text-[11px] tracking-[0.12em] text-ember-on-navy uppercase">
              Security &amp; Trust
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-[32px] leading-[1.13] font-bold text-white md:text-[54px]">
              Trust is not a badge. It is a provable record.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-on-navy-secondary md:text-lg">
              We would rather state exactly what the current evidence supports than imply more
              than we can prove.
            </p>
          </div>
        </section>

        <section className="px-4 py-14 md:px-16 md:py-24" aria-labelledby="assurance-register">
          <div className="mx-auto max-w-280">
            <div className="grid gap-6 border-b border-hairline pb-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
              <div>
                <p className="font-mono text-[11px] tracking-[0.1em] text-ember-hover uppercase">
                  Evidence register
                </p>
                <h2 id="assurance-register" className="mt-3 font-display text-2xl font-bold text-navy md:text-[34px]">
                  What we can evidence today.
                </h2>
              </div>
              <p className="max-w-2xl text-[15px] leading-relaxed text-text-secondary md:justify-self-end md:text-base">
                Each statement carries its own scope. A qualified claim is not a weaker label;
                it is the boundary that keeps the statement accurate.
              </p>
            </div>

            <div className="divide-y divide-hairline">
              {ASSURANCE_ITEMS.map((item) => (
                <article key={item.title} className="grid gap-5 py-8 md:grid-cols-[0.72fr_1.28fr] md:gap-16 md:py-10">
                  <div>
                    <p className={`font-mono text-[11px] font-semibold tracking-[0.08em] uppercase ${item.statusClass}`}>
                      {item.status}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-bold text-navy">{item.title}</h3>
                  </div>
                  <div>
                    <p className="text-[15px] leading-relaxed text-navy md:text-base">{item.summary}</p>
                    <p className="mt-3 border-l-2 border-hairline pl-4 text-sm leading-relaxed text-text-secondary">
                      <span className="font-semibold text-navy">Scope:</span> {item.scope}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-grey px-4 py-14 md:px-16 md:py-24" aria-labelledby="not-claimed">
          <div className="mx-auto grid max-w-280 gap-10 md:grid-cols-[0.75fr_1.25fr] md:gap-20">
            <div>
              <p className="font-mono text-[11px] tracking-[0.1em] text-ember-hover uppercase">
                Limits kept visible
              </p>
              <h2 id="not-claimed" className="mt-3 font-display text-2xl font-bold text-navy md:text-[34px]">
                What we do not claim.
              </h2>
            </div>
            <ul className="divide-y divide-hairline border-y border-hairline">
              {NOT_CLAIMED.map((item) => (
                <li key={item} className="grid grid-cols-[1.5rem_1fr] gap-4 py-5 text-[15px] leading-relaxed text-text-secondary md:text-base">
                  <span aria-hidden="true" className="font-mono text-ember-hover">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-navy px-4 py-14 md:px-16 md:py-24" aria-labelledby="hashing-explained">
          <div className="mx-auto max-w-280">
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
              <div>
                <p className="font-mono text-[11px] tracking-[0.1em] text-ember-on-navy uppercase">
                  Integrity checking
                </p>
                <h2 id="hashing-explained" className="mt-3 font-display text-2xl font-bold text-white md:text-[34px]">
                  What the hash can prove.
                </h2>
              </div>
              <div className="text-[15px] leading-relaxed text-on-navy-secondary md:text-base">
                <p>
                  Widian calculates a SHA-256 digest from the relevant digital content. That
                  digest acts like a content fingerprint: if the content changes, calculating
                  it again produces a different result.
                </p>
                <ol className="mt-7 grid gap-px border border-navy-hairline bg-navy-hairline sm:grid-cols-3">
                  {[
                    ["01", "Calculate", "A SHA-256 digest is calculated for supported evidence and record types."],
                    ["02", "Retain", "The digest remains associated with the content it was calculated from."],
                    ["03", "Compare", "A later calculation can be compared with the retained digest to detect a mismatch."],
                  ].map(([number, title, detail]) => (
                    <li key={number} className="bg-navy p-5">
                      <span className="font-mono text-[11px] text-ember-on-navy">{number}</span>
                      <h3 className="mt-4 font-display text-lg font-bold text-white">{title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-on-navy-secondary">{detail}</p>
                    </li>
                  ))}
                </ol>
                <p className="mt-7 border-l-2 border-ember pl-5">
                  This can show that checked content no longer matches its retained digest. It
                  does not by itself prove when or why a change occurred, who was responsible,
                  that the original content was accurate, or that every Widian record is legally
                  immutable. It is not external notarisation or chain-of-custody certification.
                </p>
                <p className="mt-5 font-mono text-xs text-on-navy-muted">
                  Current scope: inspections, evidence photographs, signatures, work orders and
                  issued reports.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 md:px-16 md:py-20">
          <div className="mx-auto grid max-w-280 gap-8 border-t-2 border-navy pt-8 md:grid-cols-[1fr_auto] md:items-center md:gap-16">
            <div>
              <h2 className="font-display text-2xl font-bold text-navy md:text-[32px]">
                Assess Widian against your own requirements.
              </h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-text-secondary md:text-base">
                Use a focused demonstration to discuss permissions, evidence handling and the
                boundaries that matter to your organisation.
              </p>
            </div>
            <Button href="/book-a-demo">Book a Demo</Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
