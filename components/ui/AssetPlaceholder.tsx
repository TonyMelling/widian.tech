/** The placeholder convention established across the wireframe canvas and
 * formalised in docs/DESIGN_SYSTEM.md §8: any asset-blocked image gets a
 * dashed border, light fill and a mono caption stating exactly what's
 * missing — never a generic or stock stand-in presented as real content. */
export function AssetPlaceholder({
  caption,
  className,
  dark = false,
}: {
  caption: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      role="img"
      aria-label={caption}
      className={`flex items-center justify-center rounded-sm border border-dashed p-6 text-center font-mono text-[13px] leading-relaxed ${
        dark
          ? "border-navy-hairline bg-navy-800 text-on-navy-muted"
          : "border-[#8A93A3] bg-[#F7F8FA] text-text-secondary"
      } ${className ?? ""}`}
    >
      {caption}
    </div>
  );
}
