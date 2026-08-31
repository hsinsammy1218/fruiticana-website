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
        description="Fruiticana was developed as a fruit-based alternative to traditional ice cream. Originally introduced as Fruiticana Creamless Ice Cream, it was created for people who wanted the refreshing taste of fruit in a smooth frozen dessert."
      />
      <p className="info-copy mt-4 max-w-3xl">
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
