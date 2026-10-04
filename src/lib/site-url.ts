/**
 * Resolve the public site origin used for canonicals, Open Graph, sitemap, and robots.
 *
 * Production (Vercel production) requires a real absolute https URL via
 * NEXT_PUBLIC_SITE_URL. Local/dev/test may omit the variable and get
 * http://localhost:3000. Placeholder and loopback hosts are never accepted on
 * Vercel production.
 */

const DEV_DEFAULT = "http://localhost:3000";

const PLACEHOLDER_HOSTS = new Set([
  "fruiticana.example.com",
  "example.com",
  "www.example.com",
  "example.org",
  "www.example.org",
  "localhost",
  "127.0.0.1",
  "0.0.0.0",
  "::1",
  "[::1]",
]);

function isVercelProduction(): boolean {
  return process.env.VERCEL_ENV === "production";
}

function isProdLike(): boolean {
  return process.env.NODE_ENV === "production" || isVercelProduction();
}

function normalizeHost(hostname: string): string {
  return hostname.trim().toLowerCase().replace(/\.$/, "");
}

function isPlaceholderHost(hostname: string): boolean {
  const host = normalizeHost(hostname);
  if (PLACEHOLDER_HOSTS.has(host)) return true;
  if (host.endsWith(".example.com") || host.endsWith(".example.org")) return true;
  return false;
}

/**
 * Parse and validate a site URL string. Throws on empty/malformed values and on
 * placeholder or loopback hosts when running in a production-like environment.
 */
export function resolveSiteUrl(
  raw: string | undefined = process.env.NEXT_PUBLIC_SITE_URL,
): string {
  const trimmed = raw?.trim();

  if (!trimmed) {
    if (isVercelProduction()) {
      throw new Error(
        "NEXT_PUBLIC_SITE_URL must be set to the real https production origin when VERCEL_ENV=production.",
      );
    }
    return DEV_DEFAULT;
  }

  let parsed: URL;
  try {
    parsed = new URL(trimmed);
  } catch {
    throw new Error(
      `NEXT_PUBLIC_SITE_URL must be an absolute URL (received "${trimmed}").`,
    );
  }

  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    throw new Error(
      `NEXT_PUBLIC_SITE_URL must use http: or https: (received "${parsed.protocol}").`,
    );
  }

  if (parsed.username || parsed.password) {
    throw new Error("NEXT_PUBLIC_SITE_URL must not include credentials.");
  }

  if (parsed.pathname !== "/" && parsed.pathname !== "") {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL must be an origin only (no path). Example: https://www.example.org",
    );
  }

  if (parsed.search || parsed.hash) {
    throw new Error("NEXT_PUBLIC_SITE_URL must not include query or hash.");
  }

  const host = normalizeHost(parsed.hostname);
  const isLoopback =
    host === "localhost" || host === "127.0.0.1" || host === "0.0.0.0" || host === "::1" || host === "[::1]";

  if (isVercelProduction()) {
    if (parsed.protocol !== "https:") {
      throw new Error(
        "NEXT_PUBLIC_SITE_URL must use https: when VERCEL_ENV=production.",
      );
    }
    if (isLoopback || isPlaceholderHost(host)) {
      throw new Error(
        `NEXT_PUBLIC_SITE_URL must not use a placeholder or loopback host in production (received "${host}").`,
      );
    }
  } else if (isProdLike() && isPlaceholderHost(host) && !isLoopback) {
    // Catch example.com baked into production builds / previews even when not on Vercel prod.
    throw new Error(
      `NEXT_PUBLIC_SITE_URL must not use a placeholder host in production builds (received "${host}"). Set a real origin or omit the variable for local defaults.`,
    );
  }

  return parsed.origin.replace(/\/$/, "");
}
