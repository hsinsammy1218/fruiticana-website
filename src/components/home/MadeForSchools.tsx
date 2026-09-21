import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatGrid } from "@/components/ui/StatGrid";
import {
  programHowCopy,
  programNumbers,
  proposedModelNotice,
} from "@/data/program";
import { knownOperations } from "@/data/operations";

export function MadeForSchools() {
  return (
    <Section id="for-schools" tone="cream-100" className="scroll-mt-24">
      <SectionHeading
        eyebrow="Made for schools"
        title="Bring Fruiticana to your students."
        description="Under the proposed model, Fruiticana brings the equipment and stays with the school. This is not a claim that Fruiticana is on menus today."
      />
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
        {proposedModelNotice}
      </p>
      <StatGrid
        className="mt-8 max-w-3xl"
        items={programNumbers}
        columns={2}
        aria-label="Proposed school program figures"
      />
      <ul className="mt-6 grid gap-4 md:grid-cols-3">
        {knownOperations
          .filter((item) => item.title !== "Two machines, two flavors each")
          .map((item) => (
            <li
              key={item.title}
              className="rounded-xl2 border border-line bg-white p-5"
            >
              <h3 className="font-display text-xl text-green-deep">{item.title}</h3>
              <p className="mt-2 text-sm leading-snug text-muted">{item.body}</p>
            </li>
          ))}
      </ul>
      <p className="mt-6 max-w-2xl text-sm text-muted">{programHowCopy.numbersIntro}</p>
    </Section>
  );
}
