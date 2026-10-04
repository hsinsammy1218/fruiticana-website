import { afterEach, describe, expect, it, vi } from "vitest";
import { resolveSiteUrl } from "@/lib/site-url";

const ORIGINAL_ENV = { ...process.env };

afterEach(() => {
  process.env = { ...ORIGINAL_ENV };
  vi.unstubAllEnvs();
});

function setEnv(values: Record<string, string | undefined>) {
  for (const [key, value] of Object.entries(values)) {
    if (value === undefined) {
      delete process.env[key];
    } else {
      process.env[key] = value;
    }
  }
}

describe("resolveSiteUrl", () => {
  it("returns localhost default when unset outside Vercel production", () => {
    setEnv({
      NEXT_PUBLIC_SITE_URL: undefined,
      NODE_ENV: "development",
      VERCEL_ENV: undefined,
    });
    expect(resolveSiteUrl()).toBe("http://localhost:3000");
  });

  it("strips a trailing slash from a valid URL", () => {
    setEnv({ NODE_ENV: "development", VERCEL_ENV: undefined });
    expect(resolveSiteUrl("https://fruiticana-website.vercel.app/")).toBe(
      "https://fruiticana-website.vercel.app",
    );
  });

  it("accepts http localhost for local production builds and CI", () => {
    setEnv({
      NODE_ENV: "production",
      VERCEL_ENV: undefined,
      NEXT_PUBLIC_SITE_URL: "http://localhost:3000",
    });
    expect(resolveSiteUrl()).toBe("http://localhost:3000");
  });

  it("accepts https preview URLs when VERCEL_ENV is preview", () => {
    setEnv({
      NODE_ENV: "production",
      VERCEL_ENV: "preview",
      NEXT_PUBLIC_SITE_URL: "https://fruiticana-website-git-main.vercel.app",
    });
    expect(resolveSiteUrl()).toBe(
      "https://fruiticana-website-git-main.vercel.app",
    );
  });

  it("throws when unset on Vercel production", () => {
    setEnv({
      NODE_ENV: "production",
      VERCEL_ENV: "production",
      NEXT_PUBLIC_SITE_URL: undefined,
    });
    expect(() => resolveSiteUrl()).toThrow(/must be set/i);
  });

  it("throws on malformed URLs", () => {
    setEnv({ NODE_ENV: "development", VERCEL_ENV: undefined });
    expect(() => resolveSiteUrl("not a url")).toThrow(/absolute URL/i);
  });

  it("rejects placeholder hosts in production-like builds", () => {
    setEnv({
      NODE_ENV: "production",
      VERCEL_ENV: undefined,
      NEXT_PUBLIC_SITE_URL: "https://fruiticana.example.com",
    });
    expect(() => resolveSiteUrl()).toThrow(/placeholder host/i);
  });

  it("rejects placeholders and http on Vercel production", () => {
    setEnv({
      NODE_ENV: "production",
      VERCEL_ENV: "production",
      NEXT_PUBLIC_SITE_URL: "https://fruiticana.example.com",
    });
    expect(() => resolveSiteUrl()).toThrow(/placeholder or loopback/i);

    setEnv({
      NODE_ENV: "production",
      VERCEL_ENV: "production",
      NEXT_PUBLIC_SITE_URL: "http://schools.example.org",
    });
    expect(() => resolveSiteUrl()).toThrow(/must use https/i);

    setEnv({
      NODE_ENV: "production",
      VERCEL_ENV: "production",
      NEXT_PUBLIC_SITE_URL: "https://localhost",
    });
    expect(() => resolveSiteUrl()).toThrow(/placeholder or loopback/i);
  });

  it("rejects paths, query, hash, and credentials", () => {
    setEnv({ NODE_ENV: "development", VERCEL_ENV: undefined });
    expect(() => resolveSiteUrl("https://ok.example.org/path")).toThrow(/origin only/i);
    expect(() => resolveSiteUrl("https://ok.example.org?x=1")).toThrow(/query or hash/i);
    expect(() => resolveSiteUrl("https://user:pass@ok.example.org")).toThrow(
      /credentials/i,
    );
  });

  it("accepts a real https production origin on Vercel production", () => {
    setEnv({
      NODE_ENV: "production",
      VERCEL_ENV: "production",
      NEXT_PUBLIC_SITE_URL: "https://fruiticana-website.vercel.app",
    });
    expect(resolveSiteUrl()).toBe("https://fruiticana-website.vercel.app");
  });
});
