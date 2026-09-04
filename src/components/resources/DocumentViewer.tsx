import Image from "next/image";
import { HistoricalBadge } from "@/components/ui/HistoricalBadge";
import { Button } from "@/components/ui/Button";
import type { HistoricalDocument } from "@/data/documents";

export function DocumentViewer({ document }: { document: HistoricalDocument }) {
  const canFile = Boolean(document.file && document.canDownload);

  return (
    <article className="overflow-hidden rounded-xl2 border border-line bg-white">
      {document.image ? (
        <a
          href={document.image}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block bg-cream-100"
          aria-label={`Open full image: ${document.title}`}
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
            Open full document image
          </span>
        </a>
      ) : null}

      <div className="p-6">
        <div className="flex flex-wrap items-center gap-2">
          <HistoricalBadge label="Historical document — provided for background/reference." />
          <span className="text-xs font-semibold text-muted">{document.period}</span>
        </div>
        <h3 className="mt-4 text-lg font-bold text-green-deep">{document.title}</h3>
        <p className="info-copy mt-2">{document.summary}</p>
        <p className="info-copy mt-3">{document.clarification}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          {document.href ? (
            <Button href={document.href} variant="secondary">
              {document.hrefLabel ?? "View"}
            </Button>
          ) : null}
          {canFile ? (
            <>
              <Button href={document.file!} variant="secondary">
                Download
              </Button>
              <Button href={document.file!} variant="ghost">
                Print
              </Button>
            </>
          ) : (
            <p className="text-xs leading-relaxed text-muted">
              {document.image
                ? "Archive image shown above. A downloadable original PDF is not published on this site."
                : "A downloadable or printable scan is not published on this site."}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
