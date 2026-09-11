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

  it("publishes the FDA and AHA PDFs and keeps other originals unpublished", () => {
    const fda = getDocument("fda-facility-registration");
    expect(fda?.file).toBe("/documents/fda-facility-registration.pdf");
    expect(fda?.canDownload).toBe(true);

    const aha = getDocument("aha-food-certification-letter");
    expect(aha?.file).toBe("/documents/aha-food-certification-letter.pdf");
    expect(aha?.canDownload).toBe(true);

    const others = documents.filter(
      (document) =>
        document.slug !== "fda-facility-registration" &&
        document.slug !== "aha-food-certification-letter",
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
