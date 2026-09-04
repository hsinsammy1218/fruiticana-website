import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductFormatCard } from "@/components/ui/ProductFormatCard";
import { HistoricalNotice } from "@/components/ui/HistoricalNotice";
import { formats, formatsNote } from "@/data/formats";

export function ServingFormats() {
  return (
    <Section>
      <SectionHeading
        eyebrow="How it can be served"
        title="Institutional single-serve cups"
        description="For school food-service review, the historical program emphasized moderate single-serve cup portions — a 3 oz institutional size and a 4 oz (1/2 cup) laboratory serving."
      />
      <ul className="mt-10 grid gap-5 sm:grid-cols-2">
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
