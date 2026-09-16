import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { partnershipCopy } from "@/data/program";

export function Partnership() {
  return (
    <Section tone="white">
      <SectionHeading
        eyebrow={partnershipCopy.eyebrow}
        title={partnershipCopy.title}
        description={partnershipCopy.body}
      />
    </Section>
  );
}
