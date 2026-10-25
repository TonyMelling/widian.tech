import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { SITE_FACTS } from "@/lib/site-config";

const FOOTER_COLUMNS: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: "Site",
    links: [
      { href: "/platform", label: "Platform" },
      { href: "/how-it-works", label: "How It Works" },
      { href: "/solutions", label: "Solutions" },
      { href: "/resources", label: "Resources" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/security-trust", label: "Security & Trust" },
      { href: "/book-a-demo", label: "Book a Demo" },
      { href: "https://app.widian.tech/sign-in", label: "Sign in" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/cookies", label: "Cookies" },
    ],
  },
];

/** Shown only from verified facts; nothing is displayed until the owner supplies them in lib/site-config.ts. */
function legalLineFrom({ controllerName, companyNumber, registeredAddress } = SITE_FACTS): string | null {
  if (!controllerName) return null;
  const parts = [controllerName];
  if (companyNumber) parts.push(`Company number ${companyNumber}`);
  if (registeredAddress) parts.push(`Registered office: ${registeredAddress}`);
  return parts.join(" · ");
}

export function SiteFooter() {
  const legalLine = legalLineFrom();
  return (
    <footer className="bg-navy px-4 py-12 md:px-16 md:py-16">
      <div className="mx-auto max-w-280 md:grid md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-10">
        <div>
          <Logo variant="full" reversed className="h-8" />
          <div className="mt-3.5 font-mono text-xs text-on-navy-muted">
            Clarity Through Compliance
          </div>
        </div>

        {FOOTER_COLUMNS.map((column) => (
          <div key={column.heading} className="mt-7 flex flex-col gap-2.5 md:mt-0">
            {column.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-on-navy-secondary transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      {legalLine ? (
        <div className="mx-auto mt-8 max-w-280 border-t border-navy-hairline pt-6">
          <p className="font-mono text-xs text-on-navy-muted">{legalLine}</p>
        </div>
      ) : null}
    </footer>
  );
}
