import { cn } from "@/lib/cn";
import { Container } from "@/components/layout/Container";

/** Section bands: lime page (cream), lemon, grove, deep orchard. */
type Tone = "cream" | "cream-100" | "white" | "grove" | "blush" | "deep";

const toneClasses: Record<Tone, string> = {
  cream: "",
  "cream-100": "bg-cream-100",
  /** @deprecated Prefer grove — kept as alias for call sites. */
  white: "bg-grove",
  grove: "bg-grove",
  blush: "bg-blush",
  deep: "bg-green-deep text-on-deep",
};

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  tone?: Tone;
  id?: string;
  /** Set false to render children without the centered container. */
  contained?: boolean;
  "aria-labelledby"?: string;
  "aria-label"?: string;
};

/** Consistent vertical rhythm; avoids full-viewport-height empty sections. */
export function Section({
  children,
  className,
  containerClassName,
  tone = "cream",
  id,
  contained = true,
  ...aria
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-12 sm:py-16 lg:py-20", toneClasses[tone], className)}
      {...aria}
    >
      {contained ? (
        <Container className={containerClassName}>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}
