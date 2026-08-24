export function ConceptLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] leading-relaxed tracking-[0.08em] text-text-secondary uppercase">
      Conceptual illustration · {children}
    </p>
  );
}
