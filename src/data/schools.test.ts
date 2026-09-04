import { describe, expect, it } from "vitest";
import { schoolUses, schoolAudiences, schoolFitPoints } from "@/data/schools";

describe("schools data", () => {
  it("covers cafeteria, snack, private, district, events, summer, and campus — not wholesale", () => {
    const slugs = schoolUses.map((use) => use.slug);
    expect(slugs).toEqual([
      "cafeteria",
      "snack",
      "private",
      "district",
      "events",
      "summer",
      "campus",
    ]);
    expect(slugs).not.toContain("distribution");
  });

  it("names school audiences without distributors", () => {
    expect(schoolAudiences.length).toBeGreaterThanOrEqual(5);
    expect(schoolAudiences.join(" ")).toMatch(/food-service/i);
    expect(schoolAudiences.join(" ")).not.toMatch(/distributor/i);
    expect(schoolAudiences.join(" ")).not.toMatch(/wholesale/i);
  });

  it("pairs each use case and fit point with a scannable figure", () => {
    expect(schoolUses.every((use) => use.figure.length > 0 && use.figureLabel.length > 0)).toBe(
      true,
    );
    expect(schoolFitPoints.map((point) => point.figure)).toEqual([
      "12",
      "4 oz",
      "2003–05",
      "2003",
    ]);
  });
});
