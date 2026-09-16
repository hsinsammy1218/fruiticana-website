import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { studentAppeal, studentAppealIntro } from "@/data/schools";

export function MadeForKids() {
  return (
    <Section tone="white">
      <SectionHeading
        title={studentAppealIntro.title}
        description={studentAppealIntro.description}
      />
      <ul className="mt-8 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {studentAppeal.map((point) => (
          <li key={point.title} className="reveal">
            <FeatureCard
              icon={point.icon}
              figure={point.figure}
              title={point.title}
              description={point.description}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
