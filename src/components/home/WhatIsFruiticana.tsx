import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { productConceptBenefits } from "@/data/facts";
import { productCopy } from "@/data/home";

export function WhatIsFruiticana() {
  return (
    <Section>
      <SectionHeading
        eyebrow={productCopy.eyebrow}
        title={productCopy.title}
        description={productCopy.description}
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
