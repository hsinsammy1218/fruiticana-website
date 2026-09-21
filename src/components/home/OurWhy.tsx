import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyCopy } from "@/data/home";

export function OurWhy() {
  return (
    <Section tone="white">
<<<<<<< Updated upstream
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
=======
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-stretch lg:gap-12 xl:gap-16">
        <SectionHeading
          className="max-w-none self-center [&_p:last-child]:max-w-none"
          eyebrow={whyCopy.eyebrow}
          title={whyCopy.title}
          description={whyCopy.description}
        />
        <blockquote className="reveal flex flex-col justify-center rounded-xl2 border border-line bg-cream-100 px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <p className="text-xl font-semibold leading-snug text-green-deep sm:text-2xl lg:text-[1.65rem]">
            {whyCopy.question}
          </p>
          <p className="mt-4 text-base leading-[1.75] text-muted sm:text-lg">
            {whyCopy.body}
          </p>
        </blockquote>
      </div>
>>>>>>> Stashed changes
    </Section>
  );
}
