import { cn } from "@/lib/cn";
import { Container } from "@/components/layout/Container";

type Tone = "cream" | "cream-100" | "white" | "deep";

const toneClasses: Record<Tone, string> = {
  cream: "",
  "cream-100": "bg-cream-100",
  white: "bg-white",
  deep: "bg-green-deep text-cream",
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
      className={cn("py-14 sm:py-18 lg:py-24", toneClasses[tone], className)}
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
