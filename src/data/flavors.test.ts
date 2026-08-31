import { describe, expect, it } from "vitest";
import {
  featuredFlavors,
  flavorCategories,
  flavorSlugs,
  flavors,
  getFlavor,
  getRelatedFlavors,
} from "@/data/flavors";

describe("flavor catalog", () => {
  it("includes the original 12 flavors", () => {
    expect(flavors).toHaveLength(12);
    expect(flavorSlugs).toEqual([
      "apricot",
      "mango",
      "pineapple",
      "banana",
      "raisin",
      "strawberry",
      "lemonade",
      "blueberry",
      "grapefruit",
      "apple",
      "orange",
      "cantaloupe",
    ]);
  });

  it("marks six flavors as featured", () => {
    expect(featuredFlavors.map((flavor) => flavor.slug)).toEqual([
      "mango",
      "pineapple",
      "strawberry",
      "blueberry",
      "orange",
      "cantaloupe",
    ]);
  });

  it("exposes fruit-family categories used by the filter chips", () => {
    expect(flavorCategories).toEqual([
      "Orchard",
      "Tropical",
      "Berry",
      "Citrus",
      "Melon",
    ]);
  });

  it("looks up a flavor by slug", () => {
    expect(getFlavor("mango")?.name).toBe("Mango");
    expect(getFlavor("does-not-exist")).toBeUndefined();
  });

  it("leaves Banana calories blank rather than guessing", () => {
    expect(getFlavor("banana")?.nutrition.calories).toBeNull();
  });

  it("labels every flavor’s nutrition as historical analysis", () => {
    expect(flavors.every((flavor) => flavor.nutritionStatus === "historical-analysis")).toBe(
      true,
    );
  });

  it("prefers same-category flavors for related picks", () => {
    const related = getRelatedFlavors("mango", 3);
    expect(related.map((flavor) => flavor.slug)).toEqual([
      "pineapple",
      "banana",
      "apricot",
    ]);
    expect(related.every((flavor) => flavor.slug !== "mango")).toBe(true);
  });

  it("returns an empty list for an unknown slug", () => {
    expect(getRelatedFlavors("nope")).toEqual([]);
  });
});
