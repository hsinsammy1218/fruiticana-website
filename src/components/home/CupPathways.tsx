import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HistoricalBadge } from "@/components/ui/HistoricalBadge";
import { cupCopy } from "@/data/home";

export function CupPathways() {
  return (
    <Section id="in-the-cup" tone="cream-100" className="scroll-mt-24">
      <SectionHeading
        eyebrow={cupCopy.eyebrow}
        title={cupCopy.title}
        description={cupCopy.description}
      />
      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {cupCopy.links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="flex h-full flex-col rounded-xl2 border border-line bg-white p-6 transition-colors hover:border-green/40"
            >
              <HistoricalBadge label="Historical record" />
              <h3 className="mt-4 font-display text-2xl text-green-deep">
                {link.label}
              </h3>
              <p className="mt-2 text-sm leading-snug text-muted">
                {link.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
