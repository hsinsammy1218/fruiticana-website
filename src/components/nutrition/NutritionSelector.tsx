import Link from "next/link";
import { cn } from "@/lib/cn";
import { flavors, getFlavor } from "@/data/flavors";
import { NutritionPanel } from "@/components/nutrition/NutritionPanel";

export function NutritionSelector({ selectedSlug }: { selectedSlug?: string }) {
  const flavor = (selectedSlug && getFlavor(selectedSlug)) || flavors[0];

  return (
    <div className="relative z-10 grid gap-6 lg:grid-cols-[260px_1fr] lg:gap-10">
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
          Choose a flavor
        </h2>
        <div
          className="mt-3 flex flex-wrap gap-2 lg:flex-col"
          role="list"
          aria-label="Choose a flavor to view its historical nutrition"
        >
          {flavors.map((item) => {
            const active = item.slug === flavor.slug;
            return (
              <div key={item.slug} role="listitem">
                <Link
                  href={`/product?flavor=${item.slug}#nutrition`}
                  scroll={false}
                  aria-current={active ? "true" : undefined}
                  className={cn(
                    "inline-flex min-h-11 w-full cursor-pointer items-center gap-2 rounded-pill border px-4 text-sm font-semibold transition-colors lg:rounded-xl2",
                    active
                      ? "border-green-deep bg-green-deep text-cream"
                      : "border-line bg-white text-green-deep hover:border-green-deep/40",
                  )}
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: item.accent }}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <NutritionPanel flavor={flavor} />
      </div>
    </div>
  );
}
