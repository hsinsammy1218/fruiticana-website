import { describe, expect, it } from "vitest";
import {
  historicalIngredients,
  wheatProteinFlag,
} from "@/data/ingredients";

describe("historical ingredients", () => {
  it("preserves the 2007 website list without expanding Mar/az", () => {
    const names = historicalIngredients.map((item) => item.name);
    expect(names).toEqual([
      "Fresh fruit",
      "Wheat protein",
      "Dextrose / starch",
      "Emulsifier E471, E412",
      "Agave nectar",
      "Citric acid",
      "Guar gum",
      "Mar/az",
    ]);
    expect(historicalIngredients.find((item) => item.name === "Mar/az")?.note).toMatch(
      /not expanded/i,
    );
  });

  it("flags wheat protein as a historical allergen concern", () => {
    expect(wheatProteinFlag).toMatch(/wheat protein/i);
    expect(wheatProteinFlag).toMatch(/gluten/i);
  });
});
