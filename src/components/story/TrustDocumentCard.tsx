import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { HistoricalNotice } from "@/components/ui/HistoricalNotice";
import { HistoricalBadge } from "@/components/ui/HistoricalBadge";
import { documentPath, type HistoricalDocument } from "@/data/documents";

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
  const readHref = documentPath(document.slug);

  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-xl2 border border-line bg-white",
        className,
      )}
    >
      {document.image ? (
        <Link
          href={readHref}
          aria-label={`Read the document: ${document.title}`}
          className="group relative block border-b border-line bg-cream-100"
        >
          <Image
            src={document.image}
            alt={document.imageAlt}
            width={720}
            height={960}
            sizes="(max-width: 768px) 100vw, 40vw"
            className="mx-auto h-auto max-h-56 w-full object-contain object-top transition duration-300 group-hover:opacity-95"
          />
          <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-green-deep/55 to-transparent px-4 pb-2.5 pt-8 text-center text-xs font-semibold text-cream opacity-0 transition group-hover:opacity-100">
            Read the document
          </span>
        </Link>
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
        <Link
          href={readHref}
          className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-green-600 hover:text-green-700"
        >
          Read the document
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </article>
  );
}
