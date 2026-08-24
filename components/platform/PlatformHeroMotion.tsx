const LAYERS = [
  "Building",
  "Elements",
  "Inspections",
  "Findings",
  "Remediation",
  "Evidence",
  "Checking",
  "Verification",
  "History",
] as const;

export function PlatformHeroMotion() {
  return (
    <figure className="platform-motion border border-hairline bg-grey p-4 sm:p-6">
      <div
        className="relative min-h-[340px] overflow-hidden bg-white sm:min-h-[390px]"
        role="img"
        aria-label="Conceptual animation showing nine kinds of building information connecting to one persistent Building Record."
      >
        <div className="absolute top-0 right-0 left-0 flex items-center justify-between border-b border-hairline px-4 py-3 font-mono text-[10px] tracking-[0.1em] text-text-secondary uppercase">
          <span>Record assembly</span>
          <span className="platform-motion-pulse flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-amber" aria-hidden="true" />
            Evidence connecting
          </span>
        </div>

        <div className="absolute inset-x-4 top-16 bottom-5 sm:inset-x-7">
          <div className="platform-motion-building absolute top-1/2 left-1/2 flex h-36 w-32 -translate-x-1/2 -translate-y-1/2 flex-col justify-end border border-navy bg-navy p-4 text-white shadow-[0_14px_40px_rgba(20,29,43,0.18)] sm:h-44 sm:w-40">
            <span className="font-mono text-[9px] tracking-[0.12em] text-on-navy-muted uppercase">Persistent anchor</span>
            <strong className="mt-2 font-display text-lg leading-tight">Building Record</strong>
          </div>

          <span className="platform-motion-thread absolute top-1/2 right-[12%] left-[12%] h-px bg-ember" aria-hidden="true" />
          <span className="platform-motion-thread platform-motion-thread-y absolute top-[12%] bottom-[12%] left-1/2 w-px bg-ember" aria-hidden="true" />

          {LAYERS.map((layer, index) => {
            const positions = [
              "top-[3%] left-[2%]",
              "top-[3%] right-[2%]",
              "top-[25%] left-0",
              "top-[25%] right-0",
              "top-[55%] left-0",
              "top-[55%] right-0",
              "bottom-[2%] left-[2%]",
              "bottom-[2%] right-[2%]",
              "bottom-[2%] left-1/2 -translate-x-1/2",
            ];
            return (
              <span
                key={layer}
                className={`platform-motion-layer absolute ${positions[index]} border border-hairline bg-white px-2.5 py-2 font-mono text-[9px] tracking-wide text-navy uppercase shadow-[0_5px_14px_rgba(20,29,43,0.07)] sm:px-3 sm:text-[10px]`}
                style={{ "--layer-index": index } as React.CSSProperties}
              >
                {String(index + 1).padStart(2, "0")} · {layer}
              </span>
            );
          })}

          <span className="platform-motion-verified absolute right-[4%] bottom-[24%] flex items-center gap-2 border border-verified bg-white px-3 py-2 font-mono text-[9px] text-verified uppercase">
            <span className="h-2 w-2 rounded-full bg-verified" aria-hidden="true" />
            Decision retained
          </span>
        </div>
      </div>
      <figcaption className="mt-3 font-mono text-[10px] leading-relaxed tracking-[0.08em] text-text-secondary uppercase">
        Conceptual platform model · illustrates connected record layers, not a product screen
      </figcaption>
    </figure>
  );
}
