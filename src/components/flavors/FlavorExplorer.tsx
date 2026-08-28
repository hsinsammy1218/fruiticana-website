"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import { flavors, flavorCategories, type FlavorCategory } from "@/data/flavors";
import { FlavorGrid } from "@/components/flavors/FlavorGrid";

type Filter = "All" | FlavorCategory;

export function FlavorExplorer() {
  const [filter, setFilter] = useState<Filter>("All");
  const filters: Filter[] = ["All", ...flavorCategories];

  const visible = useMemo(
    () => (filter === "All" ? flavors : flavors.filter((f) => f.category === filter)),
    [filter],
  );

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter flavors by category"
      >
        {filters.map((option) => {
          const active = option === filter;
          return (
            <button
              key={option}
              type="button"
              onClick={() => setFilter(option)}
              aria-pressed={active}
              className={cn(
                "min-h-11 rounded-pill border px-4 text-sm font-semibold transition-colors",
                active
                  ? "border-green-deep bg-green-deep text-cream"
                  : "border-line bg-white text-green-deep hover:border-green-deep/40",
              )}
            >
              {option}
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-sm text-muted" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "flavor" : "flavors"}
        {filter !== "All" ? ` in ${filter}` : ""}.
      </p>

      <FlavorGrid className="mt-6" flavors={visible} />
    </div>
  );
}
