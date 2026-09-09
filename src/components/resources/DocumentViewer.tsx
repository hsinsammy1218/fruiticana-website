import Image from "next/image";
import Link from "next/link";
import { HistoricalBadge } from "@/components/ui/HistoricalBadge";
import { Button } from "@/components/ui/Button";
import { documentPath, type HistoricalDocument } from "@/data/documents";

export function DocumentViewer({ document }: { document: HistoricalDocument }) {
  const readHref = documentPath(document.slug);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl2 border border-line bg-white">
      {document.image ? (
        <Link
          href={readHref}
          aria-label={`Read the document: ${document.title}`}
          className="group relative block bg-cream-100"
        >
          <Image
            src={document.image}
            alt={document.imageAlt}
            width={900}
            height={1200}
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="mx-auto h-auto max-h-[28rem] w-full object-contain object-top transition duration-300 group-hover:opacity-95"
          />
          <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-green-deep/55 to-transparent px-4 pb-3 pt-10 text-center text-xs font-semibold text-cream opacity-0 transition group-hover:opacity-100">
            Read the document
          </span>
        </Link>
      ) : null}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <HistoricalBadge label="School documentation" />
          <span className="text-xs font-semibold text-muted">{document.period}</span>
        </div>
        <h3 className="mt-4 text-lg font-bold text-green-deep">{document.title}</h3>
        <p className="info-copy mt-2">{document.summary}</p>
        <p className="info-copy mt-3">{document.clarification}</p>
        <div className="mt-auto flex flex-wrap gap-3 pt-5">
          <Button href={readHref} variant="secondary">
            Read the document
          </Button>
          {document.href ? (
            <Button href={document.href} variant="ghost">
              {document.hrefLabel ?? "View"}
            </Button>
          ) : null}
        </div>
        <p className="mt-3 text-xs leading-relaxed text-muted">
          Shown for school review. A downloadable original PDF is not published
          on this site.
        </p>
      </div>
    </article>
  );
}
