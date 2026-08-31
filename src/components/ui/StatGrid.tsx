import { cn } from "@/lib/cn";
import type { FactStat } from "@/data/facts";

type StatGridProps = {
  items: readonly FactStat[];
  /** Visual theme. “deep” is for green-deep sections. */
  tone?: "light" | "deep";
  /** Column count from the `sm` breakpoint up. Mobile is always 2 columns. */
  columns?: 2 | 3 | 4;
  className?: string;
  "aria-label"?: string;
};

const columnClass: Record<2 | 3 | 4, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

/**
 * Scannable number strip for school decision-makers. Value is visually first;
 * the accessible name stays label-then-value (dt before dd in the DOM).
 */
export function StatGrid({
  items,
  tone = "light",
  columns = 4,
  className,
  "aria-label": ariaLabel = "Key figures",
}: StatGridProps) {
  const deep = tone === "deep";

  return (
    <dl
      aria-label={ariaLabel}
      className={cn("grid grid-cols-2 gap-3 sm:gap-4", columnClass[columns], className)}
    >
      {items.map((item) => (
        <div
          key={item.label}
          className={cn(
            "flex h-full flex-col rounded-xl2 p-5",
            deep
              ? "bg-green-deep-80"
              : "border border-line bg-white shadow-[0_1px_0_rgba(22,61,42,0.03)]",
          )}
        >
          <dt
            className={cn(
              "order-2 mt-1 text-sm font-semibold leading-snug",
              deep ? "text-cream/85" : "text-ink",
            )}
          >
            {item.label}
          </dt>
          <dd
            className={cn(
              "order-1 font-display text-3xl font-extrabold tabular-nums tracking-tight sm:text-4xl",
              deep ? "text-cream" : "text-green-deep",
            )}
          >
            {item.value}
          </dd>
          {item.note ? (
            <p
              className={cn(
                "order-3 mt-1.5 text-sm leading-snug",
                deep ? "text-cream/70" : "text-muted",
              )}
            >
              {item.note}
            </p>
          ) : null}
        </div>
      ))}
    </dl>
  );
}
