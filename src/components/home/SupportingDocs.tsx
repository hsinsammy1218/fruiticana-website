import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrustDocumentCard } from "@/components/story/TrustDocumentCard";
import { documents } from "@/data/documents";

export function SupportingDocs() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Documentation"
        title="Supporting Documentation"
        description="Organized records from Fruiticana’s historical business file. Materials from 2003–2011 are marked historical until their current validity is confirmed. Scanned PDFs are not published as downloads on this site."
      />
      <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
        {documents.map((document) => (
          <li key={document.slug} className="reveal">
            <TrustDocumentCard document={document} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
