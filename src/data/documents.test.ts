import { describe, expect, it } from "vitest";
import {
  documentPath,
  documentSlugs,
  documents,
  getDocument,
} from "@/data/documents";

describe("documents data", () => {
  it("gives every document an on-site image", () => {
    expect(documents.length).toBeGreaterThanOrEqual(8);
    expect(documents.every((document) => Boolean(document.image))).toBe(true);
    expect(documents.every((document) => document.image?.endsWith(".webp"))).toBe(true);
    expect(documents.every((document) => document.imageAlt.length > 20)).toBe(true);
  });

  it("publishes the FDA, AHA, and CT Team Nutrition PDFs and keeps other originals unpublished", () => {
    const downloadable = [
      "fda-facility-registration",
      "aha-food-certification-letter",
      "ct-team-nutrition-letter",
    ] as const;

    for (const slug of downloadable) {
      const document = getDocument(slug);
      expect(document?.file).toBe(`/documents/${slug}.pdf`);
      expect(document?.canDownload).toBe(true);
    }

    const others = documents.filter(
      (document) => !downloadable.includes(document.slug as (typeof downloadable)[number]),
    );
    expect(others.every((document) => document.file == null)).toBe(true);
    expect(others.every((document) => document.canDownload === false)).toBe(true);
  });

  it("exposes a unique slug and a lookup for every document", () => {
    expect(documentSlugs).toHaveLength(documents.length);
    expect(new Set(documentSlugs).size).toBe(documentSlugs.length);

    for (const slug of documentSlugs) {
      expect(getDocument(slug)?.slug).toBe(slug);
      expect(documentPath(slug)).toBe(`/resources/${slug}`);
    }

    expect(getDocument("not-a-real-document")).toBeUndefined();
  });
});
