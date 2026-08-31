import { HistoricalBadge } from "@/components/ui/HistoricalBadge";
import { Button } from "@/components/ui/Button";
import type { HistoricalDocument } from "@/data/documents";

export function DocumentViewer({ document }: { document: HistoricalDocument }) {
  const canFile = Boolean(document.file && document.canDownload);

  return (
    <article className="rounded-xl2 border border-line bg-white p-6">
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
        ) : (
          <p className="text-sm text-muted">View: on-site summary above.</p>
        )}
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
            A downloadable or printable scan is not published on this site.
          </p>
        )}
      </div>
    </article>
  );
}
