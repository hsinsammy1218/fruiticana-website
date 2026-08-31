import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { HistoricalNotice } from "@/components/ui/HistoricalNotice";
import { schoolDesignBenefits } from "@/data/facts";

export function DesignedForSchools() {
  return (
    <Section>
      <SectionHeading
        eyebrow="School programs"
        title="Designed With Schools in Mind"
        description="Fruiticana’s historical program included distribution to Connecticut schools and participation in the Connecticut Team Nutrition Healthy Snack pilot. Participating vendors had to meet the program’s nutrition standards and use moderate single-serving portions."
      />
      <HistoricalNotice className="mt-6 max-w-3xl">
        This describes Fruiticana’s 2003–2006 Connecticut school chapter. It is
        not a claim that Fruiticana is on school menus today, and past pilot
        participation is not a current endorsement.
      </HistoricalNotice>
      <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {schoolDesignBenefits.map((benefit) => (
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
