import { cn } from "@/lib/cn";
import type { Flavor } from "@/data/flavors";
import { FlavorCard } from "@/components/flavors/FlavorCard";

type FlavorGridProps = {
  flavors: Flavor[];
  className?: string;
  /** Number of cards that render eagerly (above the fold). */
  priorityCount?: number;
};

export function FlavorGrid({ flavors, className, priorityCount = 0 }: FlavorGridProps) {
  return (
    <ul
      className={cn(
        "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {flavors.map((flavor, index) => (
        <li key={flavor.slug} className="reveal">
          <FlavorCard flavor={flavor} priority={index < priorityCount} />
        </li>
      ))}
    </ul>
  );
}
