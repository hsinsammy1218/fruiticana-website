/** Keyboard skip link: visually hidden until focused, jumps to main content. */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-pill focus:bg-green-deep focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-cream"
    >
      Skip to main content
    </a>
  );
}
