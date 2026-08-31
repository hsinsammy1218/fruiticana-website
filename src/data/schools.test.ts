import { describe, expect, it } from "vitest";
import { schoolUses, schoolAudiences, schoolFitPoints } from "@/data/schools";

describe("schools data", () => {
  it("covers cafeteria, snack, private, district, events, and distribution", () => {
    const slugs = schoolUses.map((use) => use.slug);
    expect(slugs).toEqual([
      "cafeteria",
      "snack",
      "private",
      "district",
      "events",
      "distribution",
      "summer",
      "campus",
    ]);
  });

  it("names the institutional audiences", () => {
    expect(schoolAudiences.length).toBeGreaterThanOrEqual(5);
    expect(schoolAudiences.join(" ")).toMatch(/food-service/i);
  });

  it("pairs each use case and fit point with a scannable figure", () => {
    expect(schoolUses.every((use) => use.figure.length > 0 && use.figureLabel.length > 0)).toBe(
      true,
    );
    expect(schoolFitPoints.map((point) => point.figure)).toEqual([
      "12",
      "3 oz",
      "2003–05",
      "2003",
    ]);
  });
});
