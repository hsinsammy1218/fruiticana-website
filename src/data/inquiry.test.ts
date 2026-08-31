import { describe, expect, it } from "vitest";
import { interestTypes, resolveInterestType } from "@/data/inquiry";

describe("inquiry data", () => {
  it("resolves a known interest type", () => {
    expect(resolveInterestType("Cafeteria")).toBe("Cafeteria");
  });

  it("falls back to Other", () => {
    expect(resolveInterestType("Retailers")).toBe("Other");
    expect(resolveInterestType(undefined)).toBe("Other");
  });

  it("lists the institutional interest types", () => {
    expect(interestTypes).toContain("Healthy Snack Program");
    expect(interestTypes).toContain("School Food Service");
    expect(interestTypes).toContain("Nutrition Information");
  });
});
