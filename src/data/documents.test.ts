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

  it("does not publish downloadable original PDFs yet", () => {
    expect(documents.every((document) => document.file == null)).toBe(true);
    expect(documents.every((document) => document.canDownload === false)).toBe(true);
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
