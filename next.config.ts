import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Prefer WebP. AVIF optimization is intentionally left off until the
    // upstream libheif issue addressed in the Aug 2026 release is fully clear.
    formats: ["image/webp"],
  },
};

export default nextConfig;
