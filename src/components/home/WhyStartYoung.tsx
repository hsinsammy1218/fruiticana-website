import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { startYoungCopy } from "@/data/home";

export function WhyStartYoung() {
  return (
    <Section tone="white">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] lg:items-start lg:gap-14 xl:gap-16">
        <div>
          <SectionHeading
            className="max-w-none"
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
        <div className="reveal flex flex-col justify-center lg:min-h-full lg:border-l lg:border-line lg:pl-10 xl:pl-12">
          <h3 className="text-2xl font-extrabold text-green-deep">
            {startYoungCopy.whySchoolsTitle}
          </h3>
          <p className="info-copy mt-4">{startYoungCopy.whySchools}</p>
          <div className="mt-7">
            <Button href="/schools" size="lg">
              See the school program
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
