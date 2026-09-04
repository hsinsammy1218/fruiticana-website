import { describe, expect, it } from "vitest";
import {
  historicalIngredients,
  recipeIngredients,
  wheatProteinFlag,
} from "@/data/ingredients";

describe("recipe ingredients", () => {
  it("keeps the original ingredient lineup without expanding Mar/az", () => {
    const names = recipeIngredients.map((item) => item.name);
    expect(names).toEqual([
      "Fresh fruit",
      "Wheat protein",
      "Dextrose / starch",
      "Emulsifier (E471, E412)",
      "Agave nectar",
      "Citric acid",
      "Guar gum",
      "Mar/az",
    ]);
    expect(recipeIngredients.find((item) => item.name === "Mar/az")?.note).toMatch(
      /not expanded/i,
    );
    expect(historicalIngredients).toBe(recipeIngredients);
  });

  it("flags wheat protein for school allergen review", () => {
    expect(wheatProteinFlag).toMatch(/wheat protein/i);
    expect(wheatProteinFlag).toMatch(/gluten/i);
  });
});
