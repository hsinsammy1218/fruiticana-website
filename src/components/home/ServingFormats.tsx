import Image from "next/image";
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
        title="How it works in school kitchens"
        description="Fruiticana is designed to be made in-house — a practical school option without the extra cost of bringing in a specialty outside dessert. Schools serve a moderate single-serve cup: 4 oz (1/2 cup), matching the laboratory Nutrition Facts serving."
      />
      <div className="mt-10 grid items-start gap-8 md:grid-cols-2 md:gap-10 lg:gap-16">
        <div>
          <ul className="grid gap-5">
            {formats.map((format) => (
              <li key={format.slug} className="reveal">
                <ProductFormatCard format={format} />
              </li>
            ))}
          </ul>
          <HistoricalNotice className="mt-8">{formatsNote}</HistoricalNotice>
        </div>

        <figure className="overflow-hidden rounded-xl2 border border-line bg-cream-100 shadow-[0_18px_40px_rgba(22,61,42,0.10)]">
          <Image
            src="/images/sections/serving-foreground.webp"
            alt="Colorful gelato and ice cream in a serving display — illustrative photo for school kitchen service."
            width={900}
            height={1100}
            sizes="(max-width: 768px) 100vw, 45vw"
            className="h-auto w-full object-cover"
          />
          <figcaption className="border-t border-line bg-white px-4 py-3 text-center text-sm leading-relaxed text-muted">
            Illustrative photo — a frozen treat portioned for school kitchens in
            a 4&nbsp;oz single-serve cup.
          </figcaption>
        </figure>
      </div>
    </Section>
  );
}
