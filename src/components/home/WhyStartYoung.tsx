import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { startYoungCopy } from "@/data/home";

export function WhyStartYoung() {
  return (
    <Section tone="white">
      <SectionHeading
        eyebrow={startYoungCopy.eyebrow}
        title={startYoungCopy.title}
        description={startYoungCopy.description}
      />
      <blockquote className="reveal mt-10 max-w-3xl rounded-xl2 border border-line bg-cream-100 px-6 py-6 sm:px-8 sm:py-8">
        <p className="text-xl font-semibold leading-snug text-green-deep sm:text-2xl">
          {startYoungCopy.hope}
        </p>
      </blockquote>
      <div className="reveal mt-10 max-w-3xl">
        <h3 className="text-2xl font-extrabold text-green-deep">
          {startYoungCopy.whySchoolsTitle}
        </h3>
        <p className="info-copy mt-3">{startYoungCopy.whySchools}</p>
        <div className="mt-6">
          <Button href="/schools" size="lg">
            See the school program
          </Button>
        </div>
      </div>
    </Section>
  );
}
