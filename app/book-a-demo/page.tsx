import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/navigation/SiteFooter";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { SITE_FACTS } from "@/lib/site-config";

const { contactEmail } = SITE_FACTS;

export const metadata: Metadata = {
  title: "Book a Demo",
  description: "Contact Widian to arrange a demonstration or ask a question about the Building Record.",
  // Not indexed until a monitored enquiry address is published.
  robots: { index: Boolean(contactEmail), follow: true },
};

export default function BookADemoPage() {
  return (
    <>
      <SiteHeader />
      <main className="px-4 py-16 md:px-16 md:py-24">
        <div className="mx-auto max-w-2xl">
          <p className="font-mono text-[11px] tracking-[0.12em] text-ember-hover uppercase">Contact</p>
          <h1 className="mt-4 font-display text-[32px] leading-tight font-bold text-navy md:text-[44px]">
            Talk to Widian.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-text-secondary md:text-lg">
            Arrange a demonstration, or ask a question about how Widian keeps inspections, findings, remedial work and
            verification together in one Building Record.
          </p>

          {contactEmail ? (
            <p className="mt-8 text-base text-navy">
              Email{" "}
              <a className="font-semibold underline decoration-ember underline-offset-4" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>{" "}
              and tell us your organisation and what you would like to see.
            </p>
          ) : (
            <p className="mt-8 border-l-2 border-amber bg-grey p-5 text-base text-navy">
              A public enquiry address is not published yet. Please use the contact details you were given by Widian.
            </p>
          )}

          <p className="mt-6 text-sm leading-relaxed text-text-secondary">
            Please do not send resident information, special-category data, defect evidence or incident details in an
            enquiry. See the <Link className="font-semibold text-navy underline" href="/privacy">Privacy Notice</Link>.
          </p>

          <div className="mt-12 border-t border-hairline pt-8">
            <h2 className="font-display text-xl font-bold text-navy">Already using Widian?</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
              <a className="font-semibold text-navy underline" href="https://app.widian.tech/sign-in">Sign in</a>. If you
              cannot sign in or something is not working, contact your organisation&rsquo;s Widian administrator.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
