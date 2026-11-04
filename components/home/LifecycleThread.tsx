"use client";

import { useEffect, useRef, useState } from "react";

const STAGES = [
  { label: "Identified", color: "bg-ember" },
  { label: "Assigned", color: "bg-ember" },
  { label: "Remediated", color: "bg-ember" },
  { label: "Re-inspected", color: "bg-ember" },
  { label: "Verified*", color: "bg-verified" },
  { label: "Closed", color: "bg-navy" },
] as const;

/** Home §6.4 summary of one finding's path to closure. Deliberately six moments, a summary of the
 * ten-stage compliance cycle explained on How It Works (Identify → Assign → Remediate → Re-inspect →
 * Verify → closure), not a second ten-stage diagram. Nodes light up sequentially once in view; all
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
      <div className="relative hidden px-5 md:block before:absolute before:top-[23px] before:right-15 before:left-15 before:h-0.5 before:bg-ember">
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
      <ol className="relative flex flex-col pl-7 before:absolute before:top-1.5 before:bottom-1.5 before:left-2.5 before:w-0.5 before:bg-ember md:hidden">
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
        close after re-inspection.
      </p>
      <p className="mx-auto mt-3 max-w-md text-center text-sm text-text-secondary">
        Each verified outcome is added to the building record and informs the next inspection, so the
        cycle repeats rather than ending at closure.
      </p>
    </div>
  );
}
