import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductFormatCard } from "@/components/ui/ProductFormatCard";
import { HistoricalNotice } from "@/components/ui/HistoricalNotice";
import { formats, formatsNote } from "@/data/formats";

export function ServingFormats() {
  return (
    <Section tone="white">
      <div className="relative min-h-[min(36rem,70vh)] overflow-hidden rounded-[1.75rem] ring-1 ring-green-deep/10">
        <Image
          src="/images/sections/serving-foreground.webp"
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 1200px"
          className="object-cover object-center"
          aria-hidden
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-white/94 via-white/78 to-white/52"
        />

        <div className="relative flex h-full min-h-[min(36rem,70vh)] flex-col justify-between gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:flex-row lg:items-stretch lg:gap-12 lg:px-10 lg:py-12">
          <div className="flex max-w-2xl flex-col justify-center">
            <SectionHeading
              eyebrow="How"
              title="How it works in school kitchens"
              description="Fruiticana is designed to be made in-house — a practical school option without the extra cost of bringing in a specialty outside dessert. Schools serve a moderate single-serve cup: 4 oz (1/2 cup), matching the laboratory Nutrition Facts serving."
            />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Illustrative photo — a frozen treat portioned for school kitchens
              in a 4&nbsp;oz single-serve cup.
            </p>
          </div>

          <div className="flex w-full max-w-md flex-col justify-end gap-5 lg:ml-auto lg:pb-1">
            <ul className="grid gap-5">
              {formats.map((format) => (
                <li key={format.slug} className="reveal">
                  <ProductFormatCard
                    format={format}
                    className="border-white/80 bg-white/95 shadow-[0_16px_36px_rgba(22,61,42,0.12)] backdrop-blur-sm"
                  />
                </li>
              ))}
            </ul>
            <HistoricalNotice className="border-white/70 bg-white/92 backdrop-blur-sm">
              {formatsNote}
            </HistoricalNotice>
          </div>
        </div>
      </div>
    </Section>
  );
}
