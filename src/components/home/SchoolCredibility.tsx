import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { trustCopy } from "@/data/home";

export function SchoolCredibility() {
  return (
    <Section tone="cream-100">
      <div className="reveal grid items-center gap-8 rounded-xl2 border border-line bg-white p-8 sm:p-10 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
        <SectionHeading
          eyebrow={trustCopy.eyebrow}
          title={trustCopy.title}
          description={trustCopy.description}
        />
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Button href={trustCopy.docsCta.href} size="lg">
            {trustCopy.docsCta.label}
          </Button>
          <Button href={trustCopy.nutritionCta.href} size="lg" variant="secondary">
            {trustCopy.nutritionCta.label}
          </Button>
        </div>
      </div>
    </Section>
  );
}
