interface TechBadgeProps {
  readonly label: string;
}

export function TechBadge({ label }: TechBadgeProps) {
  return (
    <span className="bg-badge-bg border border-border-custom px-2.5 py-0.5 rounded-md text-xs text-text-secondary">
      {label}
    </span>
  );
}
