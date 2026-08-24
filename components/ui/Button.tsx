import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "secondary-on-navy";
  className?: string;
};

const VARIANT_CLASSES: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-sm bg-ember px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-ember-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy",
  secondary:
    // hover:text-ember-hover, not hover:text-ember — #E8431A on white is
    // 4.00:1, failing WCAG AA's 4.5:1 for normal text (see the 2026-08-24
    // accessibility review). ember-hover (#C93A17) passes at 5.12:1 and
    // is already the button's own hover shade elsewhere, so this reuses
    // an existing token rather than introducing a new colour.
    "inline-flex items-center gap-1 border-b border-navy pb-0.5 text-[15px] font-semibold text-navy transition-colors hover:border-ember-hover hover:text-ember-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy",
  "secondary-on-navy":
    "inline-flex items-center gap-1 border-b border-navy-hairline pb-0.5 text-[15px] font-semibold text-white transition-colors hover:border-on-navy-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
};

/** Primary CTA label is standardised sitewide as "Book a Demo" — see
 * DECISIONS.md (supersedes D-016, which used "Book a Widian
 * walkthrough"). Page differentiation comes from surrounding copy and
 * secondary CTAs, not this label. */
export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link href={href} className={`${VARIANT_CLASSES[variant]} ${className ?? ""}`.trim()}>
      {children}
    </Link>
  );
}
