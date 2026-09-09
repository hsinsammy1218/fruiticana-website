import { describe, expect, it } from "vitest";
import {
  historicalIngredients,
  recipeIngredients,
  recipeMethod,
  recipePrep,
  recipeServings,
  recipeYield,
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

  it("reads like a recipe: amounts, yield, and a numbered method", () => {
    expect(recipeIngredients.every((item) => Boolean(item.amount))).toBe(true);
    expect(recipeIngredients[0]?.amount).toMatch(/main base/i);
    expect(recipeYield).toMatch(/4 oz/i);
    expect(recipeServings).toMatch(/students/i);
    expect(recipePrep).toMatch(/in-house/i);
    expect(recipeMethod).toHaveLength(4);
    expect(recipeMethod[0]).toMatch(/fresh fruit/i);
  });

  it("flags wheat protein for school allergen review", () => {
    expect(wheatProteinFlag).toMatch(/wheat protein/i);
    expect(wheatProteinFlag).toMatch(/gluten/i);
    expect(wheatProteinFlag).not.toMatch(/historical/i);
  });
});
