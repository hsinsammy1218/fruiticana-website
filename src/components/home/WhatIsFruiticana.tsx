import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { productConceptBenefits } from "@/data/facts";
import { site } from "@/data/site";

export function WhatIsFruiticana() {
  return (
    <Section tone="cream-100">
      <SectionHeading
        eyebrow="What"
          title="A healthier frozen treat for schools"
          description={`${site.tagline} Fruit-based and creamless, with the delight of ice cream — an option for cafeteria and snack service.`}
      />
      <ul className="mt-8 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {productConceptBenefits.map((benefit) => (
          <li key={benefit.title} className="reveal">
            <FeatureCard
              icon={benefit.icon}
              figure={benefit.figure}
              title={benefit.title}
              description={benefit.description}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
