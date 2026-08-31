/**
 * Full-bleed hero visual inspired by the original myfruiticana.com heart
 * artwork: waffle cones overflowing with fruit. Purely decorative.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-lg lg:max-w-none">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.55),transparent_55%)]"
      />
      <svg
        viewBox="0 0 520 640"
        className="relative h-full w-full drop-shadow-[0_30px_60px_rgba(22,61,42,0.18)]"
        role="img"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="cone" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f3c98a" />
            <stop offset="1" stopColor="#d49a4a" />
          </linearGradient>
          <radialGradient id="berryScoop" cx="0.4" cy="0.35" r="0.75">
            <stop offset="0" stopColor="#ff7a7a" />
            <stop offset="1" stopColor="#d62828" />
          </radialGradient>
          <radialGradient id="mangoScoop" cx="0.4" cy="0.35" r="0.75">
            <stop offset="0" stopColor="#ffe08a" />
            <stop offset="1" stopColor="#f5b942" />
          </radialGradient>
          <radialGradient id="kiwiScoop" cx="0.4" cy="0.35" r="0.75">
            <stop offset="0" stopColor="#9ad66f" />
            <stop offset="1" stopColor="#5faf45" />
          </radialGradient>
        </defs>

        {/* soft ground */}
        <ellipse cx="260" cy="590" rx="150" ry="22" fill="#163d2a" opacity="0.1" />

        {/* left cone */}
        <g className="hero-float-delayed" style={{ transformOrigin: "160px 480px" }}>
          <path d="M110 330 L160 560 L210 330 Z" fill="url(#cone)" />
          <path d="M118 350 L160 540 L202 350" fill="none" stroke="#b87a35" strokeWidth="2" opacity="0.35" />
          <circle cx="160" cy="300" r="58" fill="url(#kiwiScoop)" />
          <circle cx="145" cy="255" r="28" fill="#7a3e9d" />
          <circle cx="178" cy="248" r="22" fill="#ef5b5b" />
          <circle cx="138" cy="245" r="5" fill="#ffffff" opacity="0.45" />
        </g>

        {/* right cone */}
        <g className="hero-float" style={{ transformOrigin: "360px 480px" }}>
          <path d="M310 340 L360 570 L410 340 Z" fill="url(#cone)" />
          <path d="M318 360 L360 550 L402 360" fill="none" stroke="#b87a35" strokeWidth="2" opacity="0.35" />
          <circle cx="360" cy="310" r="56" fill="url(#mangoScoop)" />
          <circle cx="338" cy="268" r="26" fill="#f08a24" />
          <circle cx="385" cy="260" r="24" fill="#ef5b5b" />
          <path d="M385 240c6-10 16-8 18-2-5 5-14 7-18 2z" fill="#4a9235" />
        </g>

        {/* center cone (front) */}
        <g className="hero-float" style={{ transformOrigin: "260px 500px" }}>
          <path d="M200 360 L260 610 L320 360 Z" fill="url(#cone)" />
          <path d="M210 385 L260 585 L310 385" fill="none" stroke="#b87a35" strokeWidth="2.5" opacity="0.4" />
          <circle cx="260" cy="330" r="70" fill="url(#berryScoop)" />
          <circle cx="230" cy="280" r="32" fill="#ef5b5b" />
          <circle cx="295" cy="275" r="28" fill="#8fd35a" />
          <circle cx="265" cy="245" r="26" fill="#f08a24" />
          <circle cx="220" cy="268" r="6" fill="#ffffff" opacity="0.45" />
          <path d="M230 255c7-12 18-10 20-2-6 5-15 8-20 2z" fill="#4a9235" />
        </g>

        {/* floating fruit accents */}
        <circle cx="70" cy="180" r="22" fill="#5865a8" className="hero-float" />
        <circle cx="64" cy="172" r="5" fill="#ffffff" opacity="0.5" />
        <circle cx="450" cy="150" r="26" fill="#f08a24" className="hero-float-delayed" />
        <circle cx="442" cy="141" r="6" fill="#ffffff" opacity="0.5" />
        <circle cx="470" cy="420" r="18" fill="#ef5b5b" className="hero-float" />
      </svg>
    </div>
  );
}
