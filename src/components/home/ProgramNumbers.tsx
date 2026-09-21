import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatGrid } from "@/components/ui/StatGrid";
import { programHowCopy, programNumbers, proposedModelNotice } from "@/data/program";

type ProgramNumbersProps = {
  heading?: string;
  description?: string;
};

export function ProgramNumbers({
  heading = "We Bring the Program. You Bring the Students.",
  description = programHowCopy.numbersIntro,
}: ProgramNumbersProps) {
  return (
    <Section tone="cream-100">
      <SectionHeading title={heading} description={description} />
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
        {proposedModelNotice}
      </p>
      <StatGrid
        className="mt-10"
        items={programNumbers}
        columns={2}
        aria-label="Proposed school program figures"
      />
    </Section>
  );
}
