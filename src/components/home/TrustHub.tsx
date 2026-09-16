import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { trustHub } from "@/data/program";

export function TrustHub() {
  return (
    <Section id="learn-everything" tone="cream-100" className="scroll-mt-24">
      <SectionHeading
        eyebrow={trustHub.eyebrow}
        title={trustHub.title}
        description={trustHub.description}
      />
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {trustHub.links.map((link) => (
          <li key={link.href + link.label} className="reveal">
            <Link
              href={link.href}
              className="flex h-full flex-col rounded-xl2 border border-line bg-white p-5 transition-colors hover:border-green/40 hover:bg-cream-100"
            >
              <h3 className="text-base font-bold text-green-deep">{link.label}</h3>
              <p className="mt-1.5 text-sm leading-snug text-muted">{link.description}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button href="/contact" size="lg">
          Request School Information
        </Button>
      </div>
    </Section>
  );
}
