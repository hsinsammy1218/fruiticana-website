import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ideaCopy } from "@/data/home";

export function FruitJourney() {
  return (
    <Section tone="cream-100">
      <SectionHeading
        eyebrow={ideaCopy.eyebrow}
        title={ideaCopy.title}
        description={ideaCopy.description}
      />
      <ol className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {ideaCopy.steps.map((step, index) => (
          <li
            key={step.title}
            className="reveal relative flex h-full flex-col overflow-hidden rounded-xl2 border border-line bg-white"
          >
            <p className="absolute left-4 top-4 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-deep font-sans text-sm font-bold text-cream">
              {index + 1}
            </p>
            <div className="relative aspect-[4/3] bg-cream-100">
              {step.image ? (
                <Image
                  src={step.image}
                  alt={step.imageAlt ?? ""}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-lime/30 via-cream to-yellow/40 px-4 text-center">
                  <span className="font-display text-3xl font-bold tracking-tight text-green-deep">
                    Fruiticana
                  </span>
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-bold text-green-deep">{step.title}</h3>
              <p className="mt-2 text-sm leading-snug text-muted">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
