import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Button } from "@/components/ui/Button";
import { HistoricalNotice } from "@/components/ui/HistoricalNotice";
import { healthierBenefits } from "@/data/facts";
import { healthCopy } from "@/data/home";

/**
 * Health and enjoyment together. Dated 2008/2007 facts only; no new
 * nutrient or medical claim.
 */
export function HealthierChoice() {
  return (
    <Section tone="cream-100">
      <SectionHeading
        eyebrow={healthCopy.eyebrow}
        title={healthCopy.title}
        description={healthCopy.description}
      />
      <HistoricalNotice className="mt-8 max-w-3xl" label="Needs current testing">
        {healthCopy.notice}
      </HistoricalNotice>
      <ul className="mt-8 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {healthierBenefits.map((benefit) => (
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
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href={healthCopy.nutritionCta.href} variant="secondary">
          {healthCopy.nutritionCta.label}
        </Button>
        <Button href={healthCopy.ingredientsCta.href} variant="ghost">
          {healthCopy.ingredientsCta.label}
        </Button>
      </div>
    </Section>
  );
}
