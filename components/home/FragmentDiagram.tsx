/** Home §6.2 — scattered fragments converging into one connected record.
 * Purely decorative; the point is already made in the adjacent body copy,
 * so it's hidden from assistive technology. */
export function FragmentDiagram() {
  return (
    <svg
      viewBox="0 0 400 320"
      className="h-auto w-full max-w-sm"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="70" cy="60" r="7" fill="#DCE0E7" />
      <circle cx="150" cy="30" r="7" fill="#DCE0E7" />
      <circle cx="40" cy="140" r="7" fill="#DCE0E7" />
      <circle cx="120" cy="110" r="7" fill="#DCE0E7" />
      <circle cx="90" cy="200" r="7" fill="#DCE0E7" />
      <path
        d="M180 160 L260 160"
        stroke="#8A93A3"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      <path d="M260 60 L260 260" stroke="#E8431A" strokeWidth="2.5" />
      <circle cx="260" cy="60" r="9" fill="#E8431A" />
      <circle cx="260" cy="160" r="9" fill="#E8431A" />
      <circle cx="260" cy="260" r="9" fill="#E8431A" />
      <rect
        x="230"
        y="20"
        width="60"
        height="280"
        fill="none"
        stroke="#141D2B"
        strokeWidth="1.5"
        rx="2"
      />
      <text
        x="260"
        y="310"
        textAnchor="middle"
        fontFamily="IBM Plex Mono, monospace"
        fontSize="11"
        fill="#5B6675"
      >
        ONE BUILDING RECORD
      </text>
    </svg>
  );
}
