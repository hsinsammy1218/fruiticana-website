import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

const points = [
  {
    title: "Fruit at the center",
    body: "A frozen dessert built around fruit flavor and a smooth, ice-cream-like texture — not a dairy ice-cream base with fruit mixed in.",
  },
  {
    title: "Developed as an alternative",
    body: "Originally introduced as Fruiticana Creamless Ice Cream: a lactose-free concept for people looking beyond traditional dairy ice cream.",
  },
  {
    title: "Documented, not oversold",
    body: "This site shares historical nutrition panels, school-program records, and product facts so administrators can evaluate Fruiticana on the evidence.",
  },
];

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12l4.5 4.5L19 7" />
    </svg>
  );
}

export function WhatIsFruiticana() {
  return (
    <Section tone="white">
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="reveal">
          <SectionHeading
            eyebrow="What is Fruiticana?"
            title="What Is Fruiticana?"
            description={site.shortDescription}
          />
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
            Originally marketed as {site.legacyProductName}, with the consumer
            line “{site.legacyTagline}” That history belongs on this site as
            context — the pages here are written for school and food-service
            readers.
          </p>
        </div>
        <ul className="reveal grid gap-4">
          {points.map((point) => (
            <li
              key={point.title}
              className="flex gap-4 rounded-xl2 border border-line bg-cream-100 p-5"
            >
              <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green/15 text-green-600">
                <CheckIcon />
              </span>
              <div>
                <h3 className="text-base font-bold text-green-deep">{point.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{point.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
