interface SectionHeaderProps {
  readonly tag: string;
  readonly title: string;
  readonly description: string;
  readonly centered?: boolean;
}

export function SectionHeader({
  tag,
  title,
  description,
  centered = false,
}: SectionHeaderProps) {
  return (
    <>
      <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">
        {tag}
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-text-primary mb-2">
        {title}
      </h2>
      <p className={`text-text-secondary mb-12 ${centered ? "mx-auto" : ""}`}>
        {description}
      </p>
    </>
  );
}
