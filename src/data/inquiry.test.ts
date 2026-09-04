import { describe, expect, it } from "vitest";
import { interestTypes, resolveInterestType } from "@/data/inquiry";

describe("inquiry data", () => {
  it("resolves a known interest type", () => {
    expect(resolveInterestType("Cafeteria")).toBe("Cafeteria");
  });

  it("defaults missing values to School Food Service and unknown values to Other", () => {
    expect(resolveInterestType(undefined)).toBe("School Food Service");
    expect(resolveInterestType("")).toBe("School Food Service");
    expect(resolveInterestType("Retailers")).toBe("Other");
    expect(resolveInterestType("Distribution")).toBe("Other");
  });

  it("lists school-facing interest types without wholesale distribution", () => {
    expect(interestTypes).toContain("Healthy Snack Program");
    expect(interestTypes).toContain("School Food Service");
    expect(interestTypes).toContain("Nutrition Information");
    expect(interestTypes).toContain("Classroom / Teaching");
    expect(interestTypes).not.toContain("Distribution");
  });
});
