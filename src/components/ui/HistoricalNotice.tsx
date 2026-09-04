import { cn } from "@/lib/cn";

type HistoricalNoticeProps = {
  children?: React.ReactNode;
  className?: string;
  /** "inline" is a compact tag; "block" is a full callout. */
  variant?: "inline" | "block";
  label?: string;
};

function InfoIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      className="mt-0.5 shrink-0"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" strokeLinecap="round" />
      <circle cx="12" cy="7.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * Reusable info callout for school-facing notes.
 */
export function HistoricalNotice({
  children,
  className,
  variant = "block",
  label = "Note",
}: HistoricalNoticeProps) {
  if (variant === "inline") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 rounded-pill bg-cream-200 px-3 py-1 text-xs font-semibold text-green-deep",
          className,
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-green" aria-hidden="true" />
        {label}
      </span>
    );
  }

  return (
    <div
      className={cn(
        "flex gap-2.5 rounded-card border border-line bg-cream-100 px-4 py-3.5 text-base leading-[1.75] text-muted",
        className,
      )}
    >
      <span className="text-green-600">
        <InfoIcon />
      </span>
      <p>
        <span className="font-semibold text-green-deep">{label}: </span>
        {children}
      </p>
    </div>
  );
}
