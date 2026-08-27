import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HistoricalNotice } from "@/components/ui/HistoricalNotice";
import { Prose } from "@/components/ui/Prose";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Preliminary terms for the Fruiticana website. The site is informational; no products are sold here at this time.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <Section>
      <SectionHeading as="h1" eyebrow="Legal" title="Terms of Use" />
      <HistoricalNotice label="Draft" className="mt-6 max-w-3xl">
        These are preliminary terms for a pre-launch, informational website. They
        will be replaced with complete terms, naming the responsible legal
        entity, before any commerce features go live.
      </HistoricalNotice>
      <Prose className="mt-8">
        <h2>Informational use</h2>
        <p>
          This website is provided for general information about the Fruiticana
          brand. No products are sold through this site at this time.
        </p>
        <h2>Historical content</h2>
        <p>
          Some content - including the timeline, testimonials, documentation
          references, and nutrition panels - is <strong>historical</strong> and
          drawn from the brand&rsquo;s earlier business record. It is presented
          as history and should not be read as a current offer, certification,
          or endorsement.
        </p>
        <h2>Intellectual property</h2>
        <p>
          The Fruiticana name, content, and design on this site are provided for
          informational purposes and may not be reused without permission.
        </p>
        <h2>Changes</h2>
        <p>
          This content may be updated as the brand and website evolve. Questions
          can be recorded through our <Link href="/contact">contact page</Link>.
        </p>
      </Prose>
    </Section>
  );
}
