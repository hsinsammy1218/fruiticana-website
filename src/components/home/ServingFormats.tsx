import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductFormatCard } from "@/components/ui/ProductFormatCard";
import { HistoricalNotice } from "@/components/ui/HistoricalNotice";
import { formats, formatsNote } from "@/data/formats";

export function ServingFormats() {
  return (
    <Section tone="white">
      <div className="relative overflow-hidden rounded-[1.75rem] ring-1 ring-green-deep/10">
        <Image
          src="/images/sections/serving-foreground.webp"
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 1200px"
          className="object-cover object-[center_35%]"
          aria-hidden
          priority={false}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-white/96 via-white/90 to-white/55 sm:from-white/94 sm:via-white/82 sm:to-white/40"
        />
        <div className="relative px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <SectionHeading
            eyebrow="How"
            title="How it works in school kitchens"
            description="Fruiticana is designed to be made in-house — a practical school option without the extra cost of bringing in a specialty outside dessert. Schools serve a moderate single-serve cup: 4 oz (1/2 cup), matching the laboratory Nutrition Facts serving."
          />
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
            Illustrative photo — a frozen treat portioned for school kitchens
            in a 4&nbsp;oz single-serve cup.
          </p>
        </div>
      </div>

      <ul className="mt-10 grid gap-5 lg:max-w-md">
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
