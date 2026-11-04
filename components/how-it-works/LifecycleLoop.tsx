type LifecycleLoopProps = {
  stages: readonly string[];
  selected: number;
};

const CX = 200;
const CY = 200;
const RING = 100;
const NODE = 17;
const LABEL_RADIUS = 142;

const angle = (i: number) => ((-90 + i * 36) * Math.PI) / 180;
const point = (i: number, radius = RING) => ({ x: CX + radius * Math.cos(angle(i)), y: CY + radius * Math.sin(angle(i)) });
const f = (n: number) => n.toFixed(1);

/** Ring segment between consecutive nodes, clockwise, stopping short of each node. */
function ringSegment(i: number) {
  const margin = (12 * Math.PI) / 180;
  const a1 = angle(i) + margin;
  const a2 = angle(i + 1) - margin;
  const p1 = { x: CX + RING * Math.cos(a1), y: CY + RING * Math.sin(a1) };
  const p2 = { x: CX + RING * Math.cos(a2), y: CY + RING * Math.sin(a2) };
  return `M ${f(p1.x)} ${f(p1.y)} A ${RING} ${RING} 0 0 1 ${f(p2.x)} ${f(p2.y)}`;
}

/** Curved connector inside the ring from one node to another, trimmed to the node edges. */
function innerCurve(from: number, to: number, control: { x: number; y: number }) {
  const a = point(from);
  const b = point(to);
  const toward = (p: { x: number; y: number }, gap: number) => {
    const dx = control.x - p.x;
    const dy = control.y - p.y;
    const len = Math.hypot(dx, dy);
    return { x: p.x + (dx / len) * gap, y: p.y + (dy / len) * gap };
  };
  const s = toward(a, NODE + 2);
  const e = toward(b, NODE + 5);
  return `M ${f(s.x)} ${f(s.y)} Q ${f(control.x)} ${f(control.y)} ${f(e.x)} ${f(e.y)}`;
}

/**
 * The compliance cycle: ten stages in a ring, with the return from Monitor to Inspect (next cycle)
 * and the rework path back to Remediate. Decorative; the stage list beside it is the control.
 */
export function LifecycleLoop({ stages, selected }: LifecycleLoopProps) {
  const label = `Cycle of ten stages: ${stages.join(", ")}. Monitor returns to Inspect to start the next cycle. A rejected outcome returns the work to Remediate.`;
  return (
    <figure className="mx-auto max-w-lg">
      <svg viewBox="0 20 400 360" role="img" aria-label={label} className="h-auto w-full">
        <defs>
          <marker id="loop-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="9" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" className="fill-navy" />
          </marker>
          <marker id="loop-arrow-next" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="9" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" className="fill-ember-hover" />
          </marker>
          <marker id="loop-arrow-rework" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="9" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" className="fill-amber" />
          </marker>
        </defs>

        {stages.slice(0, -1).map((_, i) => (
          <path key={`seg-${i}`} d={ringSegment(i)} fill="none" className="stroke-navy" strokeWidth="1.5" markerEnd="url(#loop-arrow)" />
        ))}

        <path d={innerCurve(9, 1, { x: CX, y: 176 })} fill="none" className="stroke-ember-hover" strokeWidth="2" markerEnd="url(#loop-arrow-next)" />
        <path d={innerCurve(7, 5, { x: 160, y: 252 })} fill="none" className="stroke-amber" strokeWidth="2" strokeDasharray="5 4" markerEnd="url(#loop-arrow-rework)" />

        <text x={CX} y="170" textAnchor="middle" className="fill-ember-hover" fontSize="12" fontWeight="600">Next cycle</text>
        <text x={CX} y="204" textAnchor="middle" className="fill-text-secondary" fontSize="12">One cycle leads</text>
        <text x={CX} y="219" textAnchor="middle" className="fill-text-secondary" fontSize="12">into the next</text>
        <text x="214" y="262" textAnchor="middle" className="fill-amber" fontSize="12" fontWeight="600">Rework</text>

        {stages.map((name, i) => {
          const p = point(i);
          const l = point(i, LABEL_RADIUS);
          const cos = Math.cos(angle(i));
          const sin = Math.sin(angle(i));
          const anchor = cos > 0.3 ? "start" : cos < -0.3 ? "end" : "middle";
          const active = i === selected;
          return (
            <g key={name}>
              <circle cx={p.x} cy={p.y} r={NODE} className={active ? "fill-navy stroke-navy" : "fill-white stroke-navy"} strokeWidth="1.5" />
              <text x={p.x} y={p.y + 4.5} textAnchor="middle" fontSize="13" fontWeight="600" className={active ? "fill-white" : "fill-navy"}>{i + 1}</text>
              <text
                x={l.x + (anchor === "start" ? -22 : anchor === "end" ? 22 : 0)}
                y={l.y + (sin < -0.3 ? -2 : sin > 0.3 ? 14 : 5)}
                textAnchor={anchor}
                fontSize="14"
                fontWeight={active ? 700 : 500}
                className="fill-navy"
              >
                {name}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="mt-4 space-y-2 text-sm leading-relaxed text-text-secondary">
        <p className="flex items-start gap-3">
          <span className="mt-2 h-0.5 w-6 shrink-0 bg-ember-hover" aria-hidden="true" />
          <span><strong className="text-navy">Next cycle.</strong> Monitoring leads back to inspection, with the updated record to hand.</span>
        </p>
        <p className="flex items-start gap-3">
          <span className="mt-2 w-6 shrink-0 border-t-2 border-dashed border-amber" aria-hidden="true" />
          <span><strong className="text-navy">Rework.</strong> A rejected outcome returns the work to remediation.</span>
        </p>
      </figcaption>
    </figure>
  );
}
