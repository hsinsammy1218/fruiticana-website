import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DocumentViewer } from "@/components/resources/DocumentViewer";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { documents, resourceCategoryMeta } from "@/data/documents";
import { navCta } from "@/data/navigation";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Fruiticana documentation for school administrators: product information, nutrition analyses, Connecticut Team Nutrition records, and credentials.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Resources",
        item: `${site.url}/resources`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <Section className="pb-6">
        <SectionHeading
          as="h1"
          eyebrow="Resources"
          title="Documentation for school review"
          description="School administrators often want supporting material. Open any document below to read it on its own page for school review and program conversations."
        />
      </Section>

      {resourceCategoryMeta.map((group) => {
        const items = documents.filter((document) => document.category === group.id);
        return (
          <Section key={group.id} id={group.id} className="scroll-mt-24 pt-4">
            <SectionHeading title={group.title} description={group.description} />
            <ul className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
              {items.map((document) => (
                <li key={document.slug}>
                  <DocumentViewer document={document} />
                </li>
              ))}
            </ul>
          </Section>
        );
      })}

      <CTASection
        title="Need these materials for a school evaluation?"
        description="Request school information and tell us which documents, flavors, or serving formats your team needs to review."
        primary={{ label: navCta.label, href: navCta.href }}
        secondary={{ label: "Flavors & Nutrition", href: "/product" }}
      />
    </>
  );
}
