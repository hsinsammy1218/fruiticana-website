import { describe, expect, it } from "vitest";
import { schoolUses, schoolAudiences } from "@/data/schools";

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
    ]);
  });

  it("names the institutional audiences", () => {
    expect(schoolAudiences.length).toBeGreaterThanOrEqual(5);
    expect(schoolAudiences.join(" ")).toMatch(/food-service/i);
  });
});
