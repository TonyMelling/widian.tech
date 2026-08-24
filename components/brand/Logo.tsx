import Image from "next/image";

type LogoProps = {
  variant?: "full" | "mark";
  /** Reversed (white) rendering. Interim stopgap via CSS filter until an
   * approved reversed SVG lock-up exists — see docs/DESIGN_SYSTEM.md §5.
   * Do not carry this filter approach into a production release without
   * revisiting that decision. */
  reversed?: boolean;
  className?: string;
};

const ASSETS = {
  full: { src: "/brand/widian-logo.png", width: 792, height: 312, alt: "Widian" },
  mark: {
    src: "/brand/widian-mark-transparent.png",
    width: 512,
    height: 512,
    alt: "Widian",
  },
};

export function Logo({ variant = "full", reversed = false, className }: LogoProps) {
  const asset = ASSETS[variant];
  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={asset.width}
      height={asset.height}
      priority
      className={`w-auto ${reversed ? "brightness-0 invert" : ""} ${className ?? ""}`.trim()}
    />
  );
}
