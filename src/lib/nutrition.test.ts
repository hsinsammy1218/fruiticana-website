import { describe, expect, it } from "vitest";
import {
  fmtAmount,
  fmtDv,
  getNutritionGlanceStats,
  getNutritionSnapshot,
} from "@/lib/nutrition";

describe("fmtAmount", () => {
  it("renders a missing value as an em dash", () => {
    expect(fmtAmount(null)).toBe("\u2014");
  });

  it("keeps the historical less-than-one marker", () => {
    expect(fmtAmount("<1", "g")).toBe("<1g");
  });

  it("appends an optional unit", () => {
    expect(fmtAmount(100)).toBe("100");
    expect(fmtAmount(25, "g")).toBe("25g");
    expect(fmtAmount(0, "g")).toBe("0g");
  });
});

describe("fmtDv", () => {
  it("formats a daily value percent", () => {
    expect(fmtDv(0)).toBe("0%");
    expect(fmtDv(8)).toBe("8%");
  });
});

describe("getNutritionSnapshot", () => {
  it("summarizes the 2008 lab panels without guessing Banana calories", () => {
    const snapshot = getNutritionSnapshot();
    expect(snapshot.flavorCount).toBe(12);
    expect(snapshot.calorieMin).toBe(100);
    expect(snapshot.calorieMax).toBe(150);
    expect(snapshot.flavorsMissingCalories).toEqual(["Banana"]);
    expect(snapshot.allZeroFat).toBe(true);
    expect(snapshot.allZeroSaturatedFat).toBe(true);
    expect(snapshot.allZeroTransFat).toBe(true);
    expect(snapshot.allZeroCholesterol).toBe(true);
    expect(snapshot.sodiumMin).toBe(10);
    expect(snapshot.sodiumMax).toBe(25);
    expect(snapshot.servingGrams).toBe(90);
  });

  it("builds glance stats from those aggregates", () => {
    const glance = getNutritionGlanceStats();
    expect(glance.map((stat) => stat.value)).toEqual([
      "0g",
      "0mg",
      "100–150",
      "10–25mg",
    ]);
    expect(glance[2]?.note).toMatch(/Banana/);
  });
});
