import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { LaunchTicker } from "./LaunchTicker";
import { MobileNav } from "./MobileNav";
import { NAV_LINKS } from "./nav-links";

export function SiteHeader() {
  return (
    <div className="sticky top-0 z-20">
      <LaunchTicker />
      <header className="flex h-16 items-center justify-between border-b border-hairline bg-surface px-4 md:px-8 lg:h-20 lg:px-16">
        <Link href="/" aria-label="Widian home">
          <Logo variant="mark" className="h-7 lg:hidden" />
          <Logo variant="full" className="hidden h-6.5 lg:block" />
        </Link>

        {/* Cuts over at lg (1024px), not md (768px) — at 768px the full
            nav + sign in + CTA doesn't fit and wraps onto the ticker.
            Tablet gets the mobile hamburger nav instead. */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-navy transition-colors hover:text-ember"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://app.widian.tech/sign-in"
            className="text-[15px] font-medium text-text-secondary transition-colors hover:text-navy"
          >
            Sign in
          </a>
          <Button href="/book-a-walkthrough" className="!px-5.5 !py-2.5 !text-sm">
            Book a walkthrough
          </Button>
        </nav>

        <MobileNav />
      </header>
    </div>
  );
}
