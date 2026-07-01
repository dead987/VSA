type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-reading ${alignment}`}>
      <div className="mb-4 inline-flex items-center gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-brass">
          {eyebrow}
        </span>
        <span className="h-px w-16 bg-gradient-to-r from-brass/70 to-transparent" />
      </div>
      <h2 className="font-display text-3xl font-bold tracking-[-0.04em] text-warm-ivory sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-smoke sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
