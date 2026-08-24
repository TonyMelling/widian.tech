const ROLES = [
  {
    name: "Surveyor",
    description: "Captures structured findings on site, against the specific element.",
    path: "M12 8a3.2 3.2 0 1 0 0-.01M5 20c0-4 3-6.5 7-6.5s7 2.5 7 6.5",
  },
  {
    name: "Contractor",
    description: "Receives clear scope and submits evidence against it.",
    path: "M4 20l4-4M14 6l4 4-9 9H5v-4z",
  },
  {
    name: "Reviewer",
    description: "Someone other than the original submitter confirms the work.",
    path: "M4 12l5 5L20 6",
  },
  {
    name: "Client",
    description: "Makes the final acceptance call on the findings that matter most.",
    path: "M4 4h16v16H4z M8 10h8 M8 14h5",
  },
] as const;

/** Home §6.5. Original line iconography, not stock "hard-hat" photography
 * — SPEC §9 imagery rules. Icons carry adjacent text labels, so they're
 * decorative for assistive tech (aria-hidden). */
export function RoleCards() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
      {ROLES.map((role) => (
        <div key={role.name} className="rounded-sm border border-hairline bg-white p-6">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d={role.path} stroke="#141D2B" strokeWidth="1.6" />
          </svg>
          <div className="mt-4 text-base font-semibold text-navy">{role.name}</div>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">{role.description}</p>
        </div>
      ))}
    </div>
  );
}
