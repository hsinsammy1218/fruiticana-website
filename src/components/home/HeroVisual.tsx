/**
 * Decorative hero illustration: an abstract stack of frozen "scoops" in the
 * brand green plus a few fruit accents. Built as inline SVG (no large raster)
 * for a fast LCP. Purely decorative -> aria-hidden.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white to-cream-200" />
      <div className="absolute inset-0 rounded-[2rem] ring-1 ring-green-deep/5" />
      <svg
        viewBox="0 0 500 500"
        className="relative h-full w-full"
        role="img"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="scoopGreen" cx="0.38" cy="0.32" r="0.8">
            <stop offset="0" stopColor="#7cc463" />
            <stop offset="1" stopColor="#4a9235" />
          </radialGradient>
          <radialGradient id="scoopMango" cx="0.38" cy="0.32" r="0.8">
            <stop offset="0" stopColor="#ffd27a" />
            <stop offset="1" stopColor="#f5b942" />
          </radialGradient>
          <radialGradient id="scoopBerry" cx="0.38" cy="0.32" r="0.8">
            <stop offset="0" stopColor="#ff8585" />
            <stop offset="1" stopColor="#ef5b5b" />
          </radialGradient>
        </defs>

        {/* soft ground shadow */}
        <ellipse cx="250" cy="392" rx="140" ry="24" fill="#163d2a" opacity="0.08" />

        {/* dish */}
        <path
          d="M150 330h200l-18 44a26 26 0 0 1-25 18H193a26 26 0 0 1-25-18z"
          fill="#fff9ef"
          stroke="#e7e0d1"
          strokeWidth="2"
        />
        <ellipse cx="250" cy="330" rx="100" ry="20" fill="#ffffff" stroke="#e7e0d1" strokeWidth="2" />

        {/* scoops */}
        <circle cx="205" cy="300" r="62" fill="url(#scoopGreen)" />
        <circle cx="292" cy="292" r="56" fill="url(#scoopMango)" />
        <circle cx="250" cy="240" r="52" fill="url(#scoopBerry)" />
        {/* scoop highlights */}
        <ellipse cx="188" cy="280" rx="20" ry="13" fill="#ffffff" opacity="0.35" />
        <ellipse cx="236" cy="222" rx="16" ry="11" fill="#ffffff" opacity="0.4" />

        {/* mint leaf */}
        <path d="M250 196c8-22 30-30 46-24-2 22-18 36-46 24z" fill="#4a9235" />
        <path d="M250 196c6-10 16-16 26-17" stroke="#163d2a" strokeWidth="2" fill="none" opacity="0.4" />

        {/* floating fruit accents */}
        <circle cx="96" cy="150" r="26" fill="#5865a8" />
        <circle cx="90" cy="142" r="6" fill="#ffffff" opacity="0.5" />
        <circle cx="412" cy="196" r="30" fill="#f08a24" />
        <circle cx="405" cy="187" r="7" fill="#ffffff" opacity="0.5" />
        <circle cx="392" cy="392" r="20" fill="#ef5b5b" />
        <path d="M392 372c5-8 14-6 16-1-4 4-12 5-16 1z" fill="#4a9235" />
      </svg>
    </div>
  );
}
