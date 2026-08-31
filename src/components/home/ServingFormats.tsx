import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductFormatCard } from "@/components/ui/ProductFormatCard";
import { HistoricalNotice } from "@/components/ui/HistoricalNotice";
import { formats, formatsNote } from "@/data/formats";

const schoolFirst = ["institutional-cup", "cup", "smoothie", "frozen-pop"];

export function ServingFormats() {
  const ordered = [
    ...formats.filter((format) => schoolFirst.includes(format.slug)),
    ...formats.filter((format) => !schoolFirst.includes(format.slug)),
  ];

  return (
    <Section>
      <SectionHeading
        eyebrow="How it can be served"
        title="Cups, smoothies, and frozen novelties"
        description="For school-oriented review, single-serve cups, smoothies, and frozen novelties are the formats to start with. Cone and take-home containers appear in the historical parlor record."
      />
      <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {ordered.map((format) => (
          <li key={format.slug} className="reveal">
            <ProductFormatCard format={format} />
          </li>
        ))}
      </ul>
      <HistoricalNotice className="mt-8">{formatsNote}</HistoricalNotice>
    </Section>
  );
}
