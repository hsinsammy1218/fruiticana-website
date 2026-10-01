import { cn } from "@/lib/cn";

type HistoricalBadgeProps = {
  label?: string;
  className?: string;
  /**
   * `accent` — berry chip with light on-deep text (default, for deep/moss bands).
   * `surface` — pale card chip with dark ink (for light yellow/lime overlays).
   */
  tone?: "accent" | "surface";
};

/**
 * Visible qualifier for school documentation cards and flavor sheets.
 */
export function HistoricalBadge({
  label = "School documentation",
  className,
  tone = "accent",
}: HistoricalBadgeProps) {
  const isSurface = tone === "surface";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-pill px-3 py-1 text-xs font-semibold",
        isSurface
          ? "bg-card/90 text-green-deep backdrop-blur"
          : "bg-berry text-on-deep",
        className,
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          isSurface ? "bg-berry" : "bg-cream",
        )}
        aria-hidden="true"
      />
      {label}
    </span>
  );
}
