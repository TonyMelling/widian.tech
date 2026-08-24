import Link from "next/link";
import { Logo } from "@/components/brand/Logo";

const FOOTER_COLUMNS: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: "Site",
    links: [
      { href: "/platform", label: "Platform" },
      { href: "/how-it-works", label: "How It Works" },
      { href: "/solutions", label: "Solutions" },
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

export function SiteFooter() {
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

      <div className="mx-auto mt-8 flex max-w-280 flex-wrap items-center justify-between gap-3 border-t border-navy-hairline pt-6">
        <a
          href="https://staging.widian.tech"
          className="font-mono text-xs text-on-navy-muted transition-colors hover:text-on-navy-secondary"
        >
          Staging login
        </a>
        <p className="font-mono text-xs text-on-navy-muted">
          Company information pending confirmation.
        </p>
      </div>
    </footer>
  );
}
