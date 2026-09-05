import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { HistoricalNotice } from "@/components/ui/HistoricalNotice";
import { Button } from "@/components/ui/Button";
import { healthierBenefits } from "@/data/facts";

/**
 * Priority #2 — the "healthier" core benefit. Framing stays defensible:
 * fruit-first (not dairy), the documented Team Nutrition Healthy Snack pilot,
 * and 2008 laboratory panels that carry their own historical qualification.
 * No new nutrient/medical claim is introduced; the caveat routes school staff
 * to the full nutrition documentation.
 */
export function HealthierChoice() {
  return (
    <Section tone="white">
      <SectionHeading
        eyebrow="Healthier"
        title="A healthier way to eat fruit"
        description="The first idea behind Fruiticana is health — a way to help students eat more fruit. It is built from fruit instead of a dairy base, and it was shaped for school snack programs with nutrition standards in mind."
      />
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
      <HistoricalNotice className="mt-8 max-w-3xl">
        Nutrition figures come from an independent 2008 laboratory analysis
        (Northeast Laboratories). Confirm them against the current Fruiticana
        formulation before relying on them.
      </HistoricalNotice>
      <div className="mt-6">
        <Button href="/product#nutrition" variant="secondary">
          See the Nutrition Information
        </Button>
      </div>
    </Section>
  );
}
