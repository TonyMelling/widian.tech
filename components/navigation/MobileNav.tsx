"use client";

import { useRef } from "react";
import { NAV_LINKS } from "./nav-links";

/** Uses the native <dialog> element for the mobile menu overlay: it gives
 * us focus trapping, Escape-to-close and top-layer rendering for free,
 * rather than hand-rolling a focus trap. Matches the "Mobile menu — open
 * state" wireframe. */
export function MobileNav() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => dialogRef.current?.showModal()}
        className="flex h-11 w-11 items-center justify-center text-navy lg:hidden"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Site navigation"
        className="m-0 h-dvh max-h-none w-full max-w-none border-none bg-navy p-0 backdrop:bg-navy/60"
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center justify-end px-4">
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => dialogRef.current?.close()}
              className="flex h-11 w-11 items-center justify-center text-white"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              </svg>
            </button>
          </div>

          <nav className="flex flex-grow flex-col gap-0 px-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b border-navy-hairline py-4 font-display text-xl font-semibold text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://app.widian.tech/sign-in"
              className="py-4 font-display text-xl font-semibold text-on-navy-muted"
            >
              Sign in
            </a>
          </nav>

          <div className="p-5">
            <a
              href="/book-a-demo"
              className="block rounded-sm bg-ember px-4 py-4 text-center text-[15px] font-semibold text-white"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}
