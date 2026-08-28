import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductFormatCard } from "@/components/ui/ProductFormatCard";
import { formats, formatsNote } from "@/data/formats";

export function Formats() {
  return (
    <Section>
      <SectionHeading
        align="center"
        eyebrow="Serve it your way"
        title="Enjoy it your way"
        description="Fruiticana has been served in a range of formats over the years."
      />
      <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {formats.map((format) => (
          <li key={format.slug} className="reveal">
            <ProductFormatCard format={format} />
          </li>
        ))}
      </ul>
      <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-muted">
        {formatsNote}
      </p>
    </Section>
  );
}
