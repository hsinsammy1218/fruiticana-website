import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrustDocumentCard } from "@/components/story/TrustDocumentCard";
import { documents } from "@/data/documents";
import { historicalRecord } from "@/data/record";

export function SupportingDocs() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Documentation"
        title="Supporting Documentation"
        description={`${historicalRecord.citation} Scanned PDFs are not published as downloads on this site; the cards below are the usable index for school review.`}
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
