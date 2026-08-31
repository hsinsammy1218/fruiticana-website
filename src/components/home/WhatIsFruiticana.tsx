import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

const points = [
  {
    title: "Fruit at the center",
    body: "A frozen dessert built around fruit flavor and a smooth, ice-cream-like texture — not a dairy ice-cream base with fruit mixed in. The original line had 12 fruit flavors.",
  },
  {
    title: "Cream-Less by design",
    body: `Originally introduced as ${site.legacyProductName}: a lactose-free concept for people looking beyond traditional dairy ice cream.`,
  },
  {
    title: "Documented history",
    body: "This site shares 2008 laboratory Nutrition Facts, 2003–2006 Connecticut school-program records, and product facts so administrators can evaluate Fruiticana on the evidence.",
  },
];

export function WhatIsFruiticana() {
  return (
    <Section tone="cream-100">
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="reveal">
          <SectionHeading
            eyebrow="The fruit way"
            title="What Is Fruiticana?"
            description="The Fruiticana idea began with a simple promise: enjoy fruit in a new way — as a creamless frozen dessert with the delight of ice cream."
          />
          <p className="info-copy mt-4 max-w-xl">
            After research and development by a multidisciplinary team,{" "}
            {site.name} became a line of fruit-based dessert for people who
            value taste, freshness, and a dairy-free concept. The original
            consumer banner said it plainly: “{site.tagline}”
          </p>
          <p className="info-copy mt-3 max-w-xl">
            Today’s site keeps that brand alive for school decision-makers and
            food-service partners — with historical documentation clearly
            labeled, and no overselling of current certifications.
          </p>
        </div>
        <ol className="reveal grid gap-4">
          {points.map((point, index) => (
            <li
              key={point.title}
              className="flex gap-4 rounded-xl2 border border-line bg-cream p-5 sm:p-6"
            >
              <span
                className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-deep font-display text-sm font-extrabold tabular-nums text-cream"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-bold text-green-deep">{point.title}</h3>
                <p className="info-copy mt-1.5">{point.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
