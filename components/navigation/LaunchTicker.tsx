/** Site-wide "launching soon" banner — added 2026-08-24 per user direction,
 * logged as D-017 in docs/DECISIONS.md. Wording is deliberately generic
 * since exact launch status (available / pilot / early access) is still
 * an open input per WIDIAN_MARKETING_WEBSITE_SPEC.md §20. Ember is used
 * only on the label chip to keep it scarce; the scroll respects
 * prefers-reduced-motion via the .ticker-track rule in globals.css. */
function TickerContent() {
  return (
    <span className="inline-flex items-center gap-4 font-mono">
      <span className="rounded-sm bg-ember px-2.5 py-1 text-xs tracking-wider text-white">
        LAUNCHING SOON
      </span>
      <span className="text-sm text-on-navy-secondary">
        Widian is launching soon — book a walkthrough to be among the first.
      </span>
    </span>
  );
}

export function LaunchTicker() {
  return (
    <div className="flex h-11 items-center overflow-hidden border-b border-navy-hairline bg-navy">
      <div className="ticker-track">
        <TickerContent />
        <span aria-hidden="true">
          <TickerContent />
        </span>
      </div>
    </div>
  );
}
