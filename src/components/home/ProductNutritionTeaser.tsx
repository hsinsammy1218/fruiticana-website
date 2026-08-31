import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { flavors } from "@/data/flavors";

const highlights = [
  {
    title: "Nutrition panels",
    body: "Historical 2008 laboratory Nutrition Facts for all 12 original flavors, labeled as dated reference — not a current product label.",
    href: "/product#nutrition",
    label: "View nutrition panels",
  },
  {
    title: "Serving formats",
    body: "Institutional 3 oz and 4 oz single-serve cups from the historical school and parlor record, plus other documented formats.",
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
  const flavorNames = flavors.map((flavor) => flavor.name).join(", ");

  return (
    <Section>
      <SectionHeading
        eyebrow="Product & nutrition"
        title="Product & Nutrition Information"
        description="Review flavors, serving sizes, ingredients context, and historical laboratory documentation in one place."
      />
      <ul className="mt-10 grid gap-4 lg:grid-cols-3">
        {highlights.map((item) => (
          <li
            key={item.title}
            className="reveal flex h-full flex-col rounded-xl2 border border-line bg-white p-6"
          >
            <h3 className="text-lg font-bold text-green-deep">{item.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.body}</p>
            <Button href={item.href} variant="secondary" className="mt-5 self-start">
              {item.label}
            </Button>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm leading-relaxed text-muted">
        <span className="font-semibold text-green-deep">Original flavors: </span>
        {flavorNames}.
      </p>
    </Section>
  );
}
