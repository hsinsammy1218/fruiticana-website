import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { startYoungCopy } from "@/data/home";

export function WhyStartYoung() {
  return (
    <Section tone="white">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] lg:items-stretch lg:gap-12 xl:gap-16">
        <div>
          <SectionHeading
            className="max-w-none [&_p:last-child]:max-w-none"
            eyebrow={startYoungCopy.eyebrow}
            title={startYoungCopy.title}
            description={startYoungCopy.description}
          />
          <blockquote className="reveal mt-8 rounded-xl2 border border-line bg-cream-100 px-6 py-6 sm:mt-10 sm:px-8 sm:py-8">
            <p className="text-xl font-semibold leading-snug text-green-deep sm:text-2xl">
              {startYoungCopy.hope}
            </p>
          </blockquote>
        </div>
        <div className="reveal flex flex-col justify-center gap-4 lg:border-l lg:border-line lg:pl-10 xl:pl-12">
          <h3 className="text-2xl font-extrabold text-green-deep sm:text-3xl">
            {startYoungCopy.whySchoolsTitle}
          </h3>
          <p className="info-copy">{startYoungCopy.whySchools}</p>
          <div className="pt-2">
            <Button href="/schools" size="lg">
              See the school program
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
