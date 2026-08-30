import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { HistoricalNotice } from "@/components/ui/HistoricalNotice";
import { valueIcons } from "@/components/ui/icons";

const benefits: {
  icon: keyof typeof valueIcons;
  title: string;
  description: string;
}[] = [
  {
    icon: "fruit",
    title: "Fruit-Based",
    description: "Built around fruit rather than a traditional dairy ice-cream base.",
  },
  {
    icon: "leaf",
    title: "Lactose-Free Concept",
    description:
      "Originally designed as an option for people avoiding lactose. Current formulation still needs verification.",
  },
  {
    icon: "cup",
    title: "Individual Portions",
    description:
      "The historical school program used single-serving cups, including a recorded institutional 3 oz size.",
  },
  {
    icon: "flavors",
    title: "Multiple Flavors",
    description: "The original Fruiticana product line included 12 fruit flavors.",
  },
];

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
        {benefits.map((benefit) => (
          <li key={benefit.title} className="reveal">
            <FeatureCard
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
