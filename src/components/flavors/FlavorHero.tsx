import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FlavorImage } from "@/components/flavors/FlavorImage";
import { NutritionPanel } from "@/components/nutrition/NutritionPanel";
import { ArrowRightIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/Button";
import type { Flavor } from "@/data/flavors";

export function FlavorHero({ flavor }: { flavor: Flavor }) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ ["--accent" as string]: flavor.accent }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.10]"
        style={{ backgroundColor: "var(--accent)" }}
      />
      <Container className="py-8 sm:py-10 lg:py-12">
        <Link
          href="/product#flavors"
          className="inline-flex items-center gap-1.5 rounded-md text-sm font-semibold text-green-600 hover:text-green-700"
        >
          <ArrowRightIcon width={16} height={16} className="rotate-180" />
          All flavors
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span
            className="inline-flex items-center gap-2 rounded-pill px-3 py-1 text-xs font-semibold text-green-deep"
            style={{ backgroundColor: "color-mix(in srgb, var(--accent) 22%, white)" }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: "var(--accent)" }}
            />
            {flavor.category}
          </span>
        </div>
        <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">{flavor.name}</h1>
        <p className="mt-2 text-xl font-medium text-green-deep-80">
          {flavor.tagline}
        </p>
        <p className="mt-3 max-w-3xl text-lg leading-[1.75] text-muted">
          {flavor.detail}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl2 border border-line bg-white shadow-soft">
            <FlavorImage flavor={flavor} priority fill className="object-center" />
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-muted">
            {flavor.name} is part of the original documented lineup. The fruit
            photo stands in until a rights-cleared product photo is available.
            Nutrition below is the 2008 laboratory panel, not a current label.
          </p>
        </div>

        <div id="nutrition" className="mt-12 scroll-mt-24 max-w-xl">
          <h2 className="font-display text-3xl text-green-deep">Nutrition Facts</h2>
          <p className="mt-2 text-sm text-muted">
            Full 2008 Nutrition Facts panel for {flavor.name}.
          </p>
          <div className="mt-4">
            <NutritionPanel flavor={flavor} />
          </div>
          <div className="mt-6">
            <Button href={`/product?flavor=${flavor.slug}#nutrition`}>
              Compare all flavor panels
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
