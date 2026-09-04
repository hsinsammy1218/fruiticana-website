import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductFormatCard } from "@/components/ui/ProductFormatCard";
import { HistoricalNotice } from "@/components/ui/HistoricalNotice";
import { formats, formatsNote } from "@/data/formats";

export function ServingFormats() {
  return (
    <Section tone="white">
      <SectionHeading
        eyebrow="How"
        title="How it can be served in school"
        description="For school cafeteria and snack-program review, the historical program emphasized a moderate single-serve cup portion — 4 oz (1/2 cup), matching the laboratory Nutrition Facts serving."
      />
      <ul className="mt-10 grid gap-5 sm:grid-cols-1 lg:max-w-md">
        {formats.map((format) => (
          <li key={format.slug} className="reveal">
            <ProductFormatCard format={format} />
          </li>
        ))}
      </ul>
      <HistoricalNotice className="mt-8">{formatsNote}</HistoricalNotice>
    </Section>
  );
}
