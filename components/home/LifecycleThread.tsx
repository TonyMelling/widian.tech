"use client";

import { useEffect, useRef, useState } from "react";

const STAGES = [
  { label: "Issue identified", color: "bg-ember" },
  { label: "Action assigned", color: "bg-ember" },
  { label: "Work evidenced", color: "bg-ember" },
  { label: "Independently reviewed", color: "bg-ember" },
  { label: "Verified*", color: "bg-verified" },
  { label: "Closed", color: "bg-navy" },
] as const;

/** Home §6.4 lifecycle preview. Deliberately six stages, not the blocked
 * 10-stage chain — see D-015 in docs/DECISIONS.md and
 * docs/copy/home.md §6.4. Nodes light up sequentially once in view; all
 * labels are always in the DOM (no content depends on the animation
 * running), and reduced-motion collapses the stagger to instant via the
 * global rule in globals.css. */
export function LifecycleThread() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {/* Desktop: horizontal thread */}
      <div className="relative hidden px-5 md:block">
        <div className="absolute top-[23px] right-15 left-15 h-0.5 bg-ember" />
        <ol className="relative grid grid-cols-6 gap-2">
          {STAGES.map((stage, i) => (
            <li key={stage.label} className="text-center">
              <div
                className={`mx-auto flex h-11.5 w-11.5 items-center justify-center rounded-full font-mono text-[13px] text-white transition-opacity duration-300 ${stage.color}`}
                style={{
                  opacity: active ? 1 : 0.25,
                  transitionDelay: active ? `${i * 120}ms` : "0ms",
                }}
                aria-hidden="true"
              >
                {i + 1}
              </div>
              <div className="mt-3.5 font-mono text-xs text-navy">{stage.label}</div>
            </li>
          ))}
        </ol>
      </div>

      {/* Mobile: vertical thread */}
      <ol className="relative flex flex-col pl-7 md:hidden">
        <div className="absolute top-1.5 bottom-1.5 left-2.5 w-0.5 bg-ember" />
        {STAGES.map((stage, i) => (
          <li key={stage.label} className="relative flex items-center gap-4 pb-6 last:pb-0">
            <div
              className={`absolute -left-7 h-5 w-5 rounded-full transition-opacity duration-300 ${stage.color}`}
              style={{
                opacity: active ? 1 : 0.25,
                transitionDelay: active ? `${i * 120}ms` : "0ms",
              }}
              aria-hidden="true"
            />
            <div className="font-mono text-[13px] text-navy">{stage.label}</div>
          </li>
        ))}
      </ol>

      <p className="mx-auto mt-9 max-w-md text-center text-sm text-text-secondary">
        * Verification by the client applies to priority findings. Lower-priority findings
        close once independently reviewed.
      </p>
    </div>
  );
}
