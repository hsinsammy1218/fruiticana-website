import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { HistoricalNotice } from "@/components/ui/HistoricalNotice";
import { Button } from "@/components/ui/Button";
import { schoolHomeBenefits } from "@/data/facts";

export function DesignedForSchools() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Why"
        title="Why Fruiticana was made for schools"
        description="Fruiticana was not built as a wholesale parlor brand. The idea was a fruit-based frozen dessert that could belong in a school cafeteria or snack program — a new way for students to eat fruit."
      />
      <HistoricalNotice className="mt-6 max-w-3xl">
        This describes Fruiticana’s 2003–2006 Connecticut school chapter. It is
        not a claim that Fruiticana is on school menus today, and past pilot
        participation is not a current endorsement.
      </HistoricalNotice>
      <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
