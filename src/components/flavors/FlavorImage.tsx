import { cn } from "@/lib/cn";
import type { Flavor } from "@/data/flavors";

type FlavorImageProps = {
  flavor: Flavor;
  className?: string;
  priority?: boolean;
};

/**
 * Renders the flavor's placeholder artwork.
 *
 * The current art is decorative (the flavor name is always shown as adjacent
 * text), so alt="" is correct for screen readers. When real product
 * photography (WebP) replaces the SVGs, switch this to next/image and use
 * `flavor.imageAlt` for meaningful alt text.
 */
export function FlavorImage({ flavor, className, priority }: FlavorImageProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={flavor.image}
      alt=""
      aria-hidden="true"
      width={1200}
      height={800}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={cn("h-full w-full object-cover", className)}
    />
  );
}
