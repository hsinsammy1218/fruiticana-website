import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { StatGrid } from "@/components/ui/StatGrid";
import { HistoricalNotice } from "@/components/ui/HistoricalNotice";
import { flavors } from "@/data/flavors";
import { getNutritionGlanceStats } from "@/lib/nutrition";

const highlights = [
  {
    title: "12 nutrition panels",
    body: "Historical 2008 laboratory Nutrition Facts for all 12 original flavors, labeled as dated reference — not a current product label.",
    href: "/product#nutrition",
    label: "View nutrition panels",
  },
  {
    title: "3 oz and 4 oz cups",
    body: "Institutional 3 oz and 4 oz (½ cup / 90 g) single-serve cups from the historical school and parlor record, plus other documented formats.",
    href: "/product#servings",
    label: "View serving information",
  },
  {
    title: "Ingredients honesty",
    body: "High-level fruit-based description only. A full current ingredient and allergen list is withheld until it can be verified.",
    href: "/product#ingredients",
    label: "Read ingredients notes",
  },
];

export function ProductNutritionTeaser() {
  const glance = getNutritionGlanceStats();

  return (
    <Section>
      <SectionHeading
        eyebrow="Product & nutrition"
        title="Product & Nutrition Information"
        description="Review flavors, serving sizes, ingredients context, and historical laboratory documentation in one place. Figures below are from the 2008 Northeast Laboratories panels (report #20080318F)."
      />
      <StatGrid
        className="mt-10"
        items={glance}
        aria-label="Historical 2008 nutrition snapshot"
      />
      <HistoricalNotice className="mt-6 max-w-3xl">
        0 g total fat and 0 mg cholesterol were recorded on every 2008 panel.
        Calories ranged from 100 to 150 per 4 oz serving for flavors with a
        legible value. These are historical lab results, not a current label.
      </HistoricalNotice>
      <ul className="mt-10 grid gap-4 lg:grid-cols-3">
        {highlights.map((item) => (
          <li
            key={item.title}
            className="reveal flex h-full flex-col rounded-xl2 border border-line bg-white p-6"
          >
            <h3 className="text-lg font-bold text-green-deep">{item.title}</h3>
            <p className="info-copy mt-2 flex-1">{item.body}</p>
            <Button href={item.href} variant="secondary" className="mt-5 self-start">
              {item.label}
            </Button>
          </li>
        ))}
      </ul>
      <ul className="mt-8 flex flex-wrap gap-2" aria-label="Original flavors">
        {flavors.map((flavor) => (
          <li key={flavor.slug}>
            <Link
              href={`/flavors/${flavor.slug}`}
              className="inline-flex items-center rounded-pill border border-line bg-white px-3.5 py-1.5 text-sm font-semibold text-green-deep transition-colors hover:border-green-deep/40 hover:bg-cream-100"
            >
              {flavor.name}
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
