import { ConceptLabel } from "@/components/ui/ConceptLabel";

const events = [
  ["08:42", "Finding recorded", "P1 · Fire door FD-014"],
  ["10:16", "Action assigned", "Defined scope issued"],
  ["14:31", "Work evidenced", "Three evidence items"],
  ["16:08", "Awaiting review", "Next action: reviewer"],
] as const;

export function SyntheticRecordDemo() {
  return (
    <figure className="border border-hairline bg-white shadow-[0_18px_60px_rgba(20,29,43,0.08)]">
      <div className="grid border-b border-hairline md:grid-cols-[0.72fr_1.28fr]">
        <div className="bg-navy p-6 text-white md:p-8">
          <p className="font-mono text-[10px] tracking-[0.12em] text-ember uppercase">
            Synthetic demonstration
          </p>
          <p className="mt-5 font-display text-2xl font-bold">Harbour Court</p>
          <dl className="mt-8 space-y-5 text-sm">
            <div>
              <dt className="font-mono text-[10px] uppercase text-on-navy-muted">Record</dt>
              <dd className="mt-1 text-on-navy-secondary">Building → Level 04 → FD-014</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase text-on-navy-muted">Present state</dt>
              <dd className="mt-1 text-white">Work evidenced · awaiting review</dd>
            </div>
          </dl>
        </div>
        <ol className="divide-y divide-hairline p-6 md:p-8">
          {events.map(([time, title, detail], index) => (
            <li key={title} className="grid grid-cols-[52px_18px_1fr] gap-3 py-4 first:pt-0 last:pb-0">
              <time className="font-mono text-[11px] text-text-secondary">{time}</time>
              <span
                className={`mt-1.5 h-2.5 w-2.5 rounded-full ${index === events.length - 1 ? "bg-amber" : "bg-navy"}`}
                aria-hidden="true"
              />
              <div>
                <p className="text-sm font-semibold text-navy">{title}</p>
                <p className="mt-1 text-sm text-text-secondary">{detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <figcaption className="border-t border-hairline bg-grey px-6 py-4">
        <ConceptLabel>synthetic names and values; demonstrates record continuity, not a live product screen</ConceptLabel>
      </figcaption>
    </figure>
  );
}
