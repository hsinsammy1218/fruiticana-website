import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { TrustDocumentCard } from "@/components/story/TrustDocumentCard";
import { documents } from "@/data/documents";

const homeDocs = documents.filter((document) =>
  [
    "ct-team-nutrition-letter",
    "laboratory-nutritional-analysis",
    "fda-facility-registration",
    "aha-food-certification-letter",
  ].includes(document.slug),
);

export function SupportingDocs() {
  return (
    <Section tone="white">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Documentation"
          title="Historical documentation"
          description="Organized records from Fruiticana’s historical business file, with archive page images for school review. Materials from 2003–2011 are marked historical until their current validity is confirmed."
        />
        <Button href="/resources" variant="secondary">
          View all resources
        </Button>
      </div>
      <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
        {homeDocs.map((document) => (
          <li key={document.slug} className="reveal">
            <TrustDocumentCard document={document} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
