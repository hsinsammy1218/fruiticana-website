import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Prefer WebP. AVIF optimization is intentionally left off until the
    // upstream libheif issue addressed in the Aug 2026 release is fully clear.
    formats: ["image/webp"],
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
    ];
  },
};

export default nextConfig;
