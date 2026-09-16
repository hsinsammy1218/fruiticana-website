import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyCopy } from "@/data/home";

export function OurWhy() {
  return (
    <Section tone="white">
      <SectionHeading
        eyebrow={whyCopy.eyebrow}
        title={whyCopy.title}
        description={whyCopy.description}
      />
      <blockquote className="reveal mt-10 max-w-3xl rounded-xl2 border border-line bg-cream-100 px-6 py-6 sm:px-8 sm:py-8">
        <p className="text-xl font-semibold leading-snug text-green-deep sm:text-2xl">
          {whyCopy.question}
        </p>
        <p className="mt-4 text-base leading-[1.75] text-muted sm:text-lg">
          {whyCopy.body}
        </p>
      </blockquote>
    </Section>
  );
}
