import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FlavorImage } from "@/components/flavors/FlavorImage";
import { ArrowRightIcon } from "@/components/ui/icons";
import { HistoricalBadge } from "@/components/ui/HistoricalBadge";
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
      <Container className="py-10 sm:py-14 lg:py-16">
        <Link
          href="/product#flavors"
          className="inline-flex items-center gap-1.5 rounded-md text-sm font-semibold text-green-600 hover:text-green-700"
        >
          <ArrowRightIcon width={16} height={16} className="rotate-180" />
          All flavors
        </Link>

        <div className="mt-6 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
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
            <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">{flavor.name}</h1>
            <p className="mt-3 text-xl font-medium text-green-deep-80">
              {flavor.tagline}
            </p>
            <p className="mt-4 max-w-xl text-lg leading-[1.75] text-muted">
              {flavor.detail}
            </p>
            <p className="mt-5 text-sm text-muted">
              From Fruiticana&rsquo;s original 12-flavor lineup.
            </p>
            <HistoricalBadge
              label="Nutrition analysis"
              className="mt-4"
            />
          </div>

          <div
            className="reveal overflow-hidden rounded-xl2 border border-line bg-white shadow-soft"
            data-revealed="true"
          >
            <div className="aspect-[4/3]">
              <FlavorImage flavor={flavor} priority />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
