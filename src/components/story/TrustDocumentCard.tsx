import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { HistoricalNotice } from "@/components/ui/HistoricalNotice";
import { HistoricalBadge } from "@/components/ui/HistoricalBadge";
import type { HistoricalDocument } from "@/data/documents";

function DocIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 3h7l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v4h4" />
      <path d="M9 13h6M9 17h6" />
    </svg>
  );
}

export function TrustDocumentCard({
  document,
  className,
}: {
  document: HistoricalDocument;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-xl2 border border-line bg-white",
        className,
      )}
    >
      {document.image ? (
        <div className="relative border-b border-line bg-cream-100">
          <Image
            src={document.image}
            alt={document.imageAlt}
            width={720}
            height={960}
            sizes="(max-width: 768px) 100vw, 40vw"
            className="mx-auto h-auto max-h-56 w-full object-contain object-top"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-green/12 text-green-600">
            <DocIcon />
          </span>
          <div className="flex flex-col items-end gap-1.5">
            <HistoricalBadge />
            <HistoricalNotice variant="inline" label={document.period} />
          </div>
        </div>
        <h3 className="mt-4 text-lg font-bold text-green-deep">{document.title}</h3>
        <p className="info-copy mt-2">{document.summary}</p>
        <p className="info-copy mt-3 border-t border-line pt-3">
          <span className="font-semibold text-green-deep">Context: </span>
          {document.clarification}
        </p>
        {document.href ? (
          <Link
            href={document.href}
            className="mt-auto pt-4 text-sm font-semibold text-green-600 hover:text-green-700"
          >
            {document.hrefLabel ?? "View details"}
          </Link>
        ) : document.image ? (
          <Link
            href="/resources"
            className="mt-auto pt-4 text-sm font-semibold text-green-600 hover:text-green-700"
          >
            View document image
          </Link>
        ) : document.file && document.canDownload ? (
          <Link
            href={document.file}
            className="mt-auto pt-4 text-sm font-semibold text-green-600 hover:text-green-700"
          >
            Download
          </Link>
        ) : (
          <p className="mt-auto pt-4 text-xs leading-relaxed text-muted">
            Historical record — a downloadable scan is not published here.
          </p>
        )}
      </div>
    </article>
  );
}
