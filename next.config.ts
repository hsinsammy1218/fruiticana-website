import type { NextConfig } from "next";

/**
 * App-owned security headers for all routes.
 * HSTS is intentionally omitted here: Vercel sets Strict-Transport-Security at
 * the edge for HTTPS deployments. Setting HSTS from next start on http://localhost
 * would be inappropriate for local CI.
 */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js App Router emits inline bootstrapping scripts; Analytics may load va.vercel-scripts.com in debug.
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com",
      // next/font is self-hosted at build; Tailwind/runtime may use inline styles.
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self' data:",
      "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      // No upgrade-insecure-requests: local CI serves http://localhost and must keep working.
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Prefer WebP. AVIF optimization is intentionally left off until the
    // upstream libheif issue addressed in the Aug 2026 release is fully clear.
    formats: ["image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/flavors",
        destination: "/product",
        permanent: false,
      },
      {
        source: "/nutrition",
        destination: "/product",
        permanent: false,
      },
      {
        source: "/story",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/resources/laboratory-nutritional-analysis",
        destination: "/resources/nutritional-analysis",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
