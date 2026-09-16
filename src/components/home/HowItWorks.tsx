import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductFormatCard } from "@/components/ui/ProductFormatCard";
import { formats } from "@/data/formats";
import { howCopy } from "@/data/home";
import { knownOperations, schoolOperations } from "@/data/operations";

export function HowItWorks() {
  return (
    <Section id={howCopy.id} tone="white" className="scroll-mt-24">
      <SectionHeading
        eyebrow={howCopy.eyebrow}
        title={howCopy.title}
        description={howCopy.description}
      />

      <div className="relative mt-10 min-h-[min(28rem,55vh)] overflow-hidden rounded-[1.75rem] ring-1 ring-green-deep/10">
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
        <div className="relative flex h-full min-h-[min(28rem,55vh)] flex-col justify-between gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:flex-row lg:items-stretch lg:gap-12 lg:px-10 lg:py-12">
          <div className="flex max-w-2xl flex-col justify-center">
            <h3 className="text-2xl font-extrabold text-green-deep">
              {howCopy.knownTitle}
            </h3>
            <ul className="mt-6 space-y-4">
              {knownOperations.map((item) => (
                <li key={item.title}>
                  <p className="font-semibold text-green-deep">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              {howCopy.photoCaption}
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
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-extrabold text-green-deep">
          {howCopy.pendingTitle}
        </h3>
        <p className="info-copy mt-3 max-w-3xl">{howCopy.pendingIntro}</p>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {schoolOperations.map((item) => (
            <li
              key={item.question}
              className="rounded-xl2 border border-line bg-cream-100 p-5"
            >
              <p className="flex flex-wrap items-center gap-2">
                <span className="font-semibold text-green-deep">{item.question}</span>
                <span
                  className={
                    item.status === "known"
                      ? "rounded-pill bg-green/15 px-2.5 py-0.5 text-xs font-semibold text-green-700"
                      : "rounded-pill bg-cream-200 px-2.5 py-0.5 text-xs font-semibold text-green-deep"
                  }
                >
                  {item.status === "known" ? "From the record" : "Still being documented"}
                </span>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
