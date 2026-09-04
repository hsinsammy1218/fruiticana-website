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
        title="Why Fruiticana was made for schools"
        description="For administrators, principals, and food-service directors. Fruiticana is a fruit-based frozen treat meant for school kitchens, cafeterias, and snack programs."
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
          Learn About Fruiticana for Schools
        </Button>
      </div>
    </Section>
  );
}
