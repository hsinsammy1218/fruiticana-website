import { cn } from "@/lib/cn";

type HistoricalBadgeProps = {
  label?: string;
  className?: string;
};

/**
 * Visible, not color-only, qualifier for 2003–2011 material.
 */
export function HistoricalBadge({
  label = "Historical Documentation",
  className,
}: HistoricalBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-pill bg-cream-200 px-3 py-1 text-xs font-semibold text-green-deep",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-green" aria-hidden="true" />
      {label}
    </span>
  );
}
