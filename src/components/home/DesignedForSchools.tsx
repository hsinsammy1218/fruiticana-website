import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Button } from "@/components/ui/Button";
import { schoolHomeBenefits } from "@/data/facts";

export function DesignedForSchools() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Why"
        title="Why Fruiticana belongs in the cafeteria"
        description="A fruit-based frozen dessert that belongs in a cafeteria or snack program — a new way to eat fruit."
      />
      <ul className="mt-8 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {schoolHomeBenefits.map((benefit) => (
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
      <div className="mt-8">
        <Button href="/schools" size="lg">
          Learn more
        </Button>
      </div>
    </Section>
  );
}
