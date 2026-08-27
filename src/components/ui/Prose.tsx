import { cn } from "@/lib/cn";

/** Lightweight typographic wrapper for long-form legal/informational copy. */
export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-4 leading-relaxed text-muted",
        "[&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-green-deep",
        "[&_p_strong]:font-semibold [&_p_strong]:text-green-deep",
        "[&_a]:font-semibold [&_a]:text-green-600 hover:[&_a]:text-green-700",
        "[&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5",
        className,
      )}
    >
      {children}
    </div>
  );
}
