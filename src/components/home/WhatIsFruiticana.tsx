import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { productConceptBenefits } from "@/data/facts";
import { site } from "@/data/site";

export function WhatIsFruiticana() {
  return (
    <Section tone="white">
      <SectionHeading
        eyebrow="What is Fruiticana?"
        title="A Different Kind of Frozen Dessert"
        description={`The Fruiticana idea began with a simple promise: ${site.tagline} A creamless frozen dessert with the delight of ice cream.`}
      />
      <p className="info-copy mt-4 max-w-4xl">
        {site.shortDescription} The original consumer line was “{site.legacyTagline}”
      </p>
      <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
