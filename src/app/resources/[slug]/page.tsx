import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { HistoricalBadge } from "@/components/ui/HistoricalBadge";
import { HistoricalNotice } from "@/components/ui/HistoricalNotice";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  documentSlugs,
  getDocument,
  resourceCategoryMeta,
} from "@/data/documents";
import { navCta } from "@/data/navigation";
import { site } from "@/data/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return documentSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const document = getDocument(slug);
  if (!document) return {};
  return {
    title: `${document.title} — School documentation`,
    description: document.summary,
    alternates: { canonical: `/resources/${document.slug}` },
  };
}

export default async function DocumentPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const document = getDocument(slug);
  if (!document) notFound();

  const category = resourceCategoryMeta.find(
    (group) => group.id === document.category,
  );

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
      {
        "@type": "ListItem",
        position: 3,
        name: document.title,
        item: `${site.url}/resources/${document.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <Section className="pb-6">
        <Link
          href="/resources"
          className="inline-flex items-center gap-1 text-sm font-semibold text-green-600 hover:text-green-700"
        >
          <span aria-hidden="true">&larr;</span> Back to all documentation
        </Link>
        <SectionHeading
          as="h1"
          className="mt-4"
          eyebrow="School documentation"
          title={document.title}
          description={document.summary}
        />
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <HistoricalBadge label="School documentation" />
          <span className="text-xs font-semibold text-muted">
            {document.period}
          </span>
          {category ? (
            <span className="text-xs font-semibold text-muted">
              &middot; {category.title}
            </span>
          ) : null}
        </div>
      </Section>

      <Section tone="cream-100" className="pt-0">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
          {document.image ? (
            <figure className="reveal">
              <div className="overflow-hidden rounded-xl2 border border-line bg-white shadow-[0_18px_40px_rgba(22,61,42,0.10)]">
                <Image
                  src={document.image}
                  alt={document.imageAlt}
                  width={1024}
                  height={1536}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
              <figcaption className="mt-3 text-xs leading-relaxed text-muted">
                <a
                  href={document.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-green-600 hover:text-green-700"
                >
                  Open the full-size document image
                </a>{" "}
                &mdash; shown for school review. A downloadable original PDF is
                not published on this site.
              </figcaption>
            </figure>
          ) : null}

          <div className="space-y-5">
            <HistoricalNotice label="Context">
              {document.clarification}
            </HistoricalNotice>
            <p className="info-copy">
              This document is part of Fruiticana&rsquo;s business record and is
              provided for school review. Confirm current details through a
              school inquiry before relying on it for procurement.
            </p>
            <div className="flex flex-wrap gap-3">
              {document.href ? (
                <Button href={document.href}>
                  {document.hrefLabel ?? "View details"}
                </Button>
              ) : null}
              <Button href="/resources" variant="secondary">
                All documentation
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <CTASection
        title="Need this for a school evaluation?"
        description="Request school information and tell us which documents, flavors, or serving formats your team needs to review."
        primary={{ label: navCta.label, href: navCta.href }}
        secondary={{ label: "Flavors & Nutrition", href: "/product" }}
      />
    </>
  );
}
