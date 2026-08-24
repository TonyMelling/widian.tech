"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LaunchTicker } from "./LaunchTicker";

const SEEN_KEY = "widian-launch-modal-seen";

export function LaunchAnnouncement() {
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [homeState, setHomeState] = useState<"checking" | "modal" | "ticker">("checking");

  useEffect(() => {
    if (pathname !== "/") return;
    let active = true;
    let nextState: "modal" | "ticker";
    try {
      if (window.sessionStorage.getItem(SEEN_KEY)) {
        nextState = "ticker";
      } else {
        window.sessionStorage.setItem(SEEN_KEY, "true");
        nextState = "modal";
      }
    } catch {
      nextState = "modal";
    }
    queueMicrotask(() => {
      if (active) setHomeState(nextState);
    });
    return () => {
      active = false;
    };
  }, [pathname]);

  useEffect(() => {
    if (pathname === "/" && homeState === "modal" && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal?.();
    }
  }, [homeState, pathname]);

  if (pathname !== "/" || homeState === "ticker") return <LaunchTicker />;

  return (
    <>
      <div className="h-0" aria-hidden="true" />
      {homeState === "modal" ? (
        <dialog
          ref={dialogRef}
          aria-labelledby="launch-modal-title"
          aria-describedby="launch-modal-description"
          onClose={() => setHomeState("ticker")}
          className="m-auto w-[calc(100%-2rem)] max-w-xl border-0 bg-white p-0 shadow-2xl backdrop:bg-navy/75"
        >
          <div className="border-t-[3px] border-ember p-6 md:p-9">
            <div className="flex items-start justify-between gap-6">
              <p className="font-mono text-[11px] tracking-[0.12em] text-ember uppercase">Launching soon</p>
              <button type="button" aria-label="Close launch announcement" onClick={() => dialogRef.current?.close()} className="-mt-2 -mr-2 flex h-11 w-11 items-center justify-center text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" /></svg>
              </button>
            </div>
            <h2 id="launch-modal-title" className="mt-5 max-w-md font-display text-3xl leading-tight font-bold text-navy md:text-[38px]">Widian is launching soon.</h2>
            <p id="launch-modal-description" className="mt-4 max-w-md text-[15px] leading-relaxed text-text-secondary md:text-base">See how one Building Record can connect inspections, findings, remedial work and accountable decisions.</p>
            <div className="mt-7 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <Link href="/book-a-demo" onClick={() => dialogRef.current?.close()} className="inline-flex items-center justify-center rounded-sm bg-ember px-7 py-3.5 text-[15px] font-semibold text-white hover:bg-ember-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy">Book a Demo</Link>
              <button type="button" onClick={() => dialogRef.current?.close()} className="border-b border-navy pb-0.5 text-sm font-semibold text-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy">Continue to the website</button>
            </div>
          </div>
        </dialog>
      ) : null}
    </>
  );
}
