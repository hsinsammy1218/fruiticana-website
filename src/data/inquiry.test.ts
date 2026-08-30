import { describe, expect, it } from "vitest";
import { interestTypes, resolveInterestType } from "@/data/inquiry";

describe("inquiry data", () => {
  it("resolves a known interest type", () => {
    expect(resolveInterestType("School Cafeteria")).toBe("School Cafeteria");
  });

  it("falls back to general information", () => {
    expect(resolveInterestType("Retailers")).toBe("General Information");
    expect(resolveInterestType(undefined)).toBe("General Information");
  });

  it("lists the institutional interest types", () => {
    expect(interestTypes).toContain("Healthy Snack Program");
    expect(interestTypes).toContain("Food-Service Distribution");
  });
});
