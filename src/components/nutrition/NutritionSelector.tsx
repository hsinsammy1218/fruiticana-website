"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/cn";
import { flavors, getFlavor } from "@/data/flavors";
import { NutritionPanel } from "@/components/nutrition/NutritionPanel";

export function NutritionSelector() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const initial =
    (searchParams.get("flavor") && getFlavor(searchParams.get("flavor")!)?.slug) ||
    flavors[0].slug;
  const [selected, setSelected] = useState<string>(initial);

  const flavor = getFlavor(selected) ?? flavors[0];

  function handleSelect(slug: string) {
    setSelected(slug);
    // Keep the URL shareable/deep-linkable without scrolling.
    router.replace(`${pathname}?flavor=${slug}`, { scroll: false });
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[260px_1fr] lg:gap-10">
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
          Choose a flavor
        </h2>
        <div
          className="mt-3 flex flex-wrap gap-2 lg:flex-col"
          role="group"
          aria-label="Choose a flavor to view its historical nutrition"
        >
          {flavors.map((f) => {
            const active = f.slug === selected;
            return (
              <button
                key={f.slug}
                type="button"
                onClick={() => handleSelect(f.slug)}
                aria-pressed={active}
                className={cn(
                  "inline-flex min-h-11 items-center gap-2 rounded-pill border px-4 text-sm font-semibold transition-colors lg:w-full lg:rounded-xl2",
                  active
                    ? "border-green-deep bg-green-deep text-cream"
                    : "border-line bg-white text-green-deep hover:border-green-deep/40",
                )}
              >
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: f.accent }}
                  aria-hidden="true"
                />
                {f.name}
              </button>
            );
          })}
        </div>
      </div>

      <div aria-live="polite">
        <NutritionPanel flavor={flavor} />
      </div>
    </div>
  );
}
