import Image from "next/image";

/**
 * Full-bleed hero visual from the original myfruiticana.com artwork:
 * fruit-filled waffle cones (historical “gift for your heart” mark).
 * Decorative in the hero composition; alt kept empty because adjacent
 * copy already names the brand and product.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full">
      <div
        aria-hidden="true"
        className="absolute inset-4 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.7),transparent_70%)] sm:inset-6"
      />
      <Image
        src="/images/brand/heart.jpg"
        alt=""
        width={640}
        height={640}
        priority
        className="hero-float relative mx-auto h-auto w-[92%] drop-shadow-[0_28px_50px_rgba(22,61,42,0.18)]"
      />
    </div>
  );
}
