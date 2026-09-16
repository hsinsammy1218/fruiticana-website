/**
 * Fruiticana ingredient list for school kitchen / recipe review.
 * Source lineup matches the original myfruiticana.com product pages.
 *
 * The archived line “Mar/az” is left unexpanded — the source is truncated
 * and must not be guessed.
 */

export type RecipeIngredient = {
  name: string;
  /** Optional recipe-style amount when known; otherwise omit. */
  amount?: string;
  /** Short note shown beside the ingredient (e.g. “if fruit isn’t ripe”). */
  note?: string;
};

/** @deprecated Prefer recipeIngredients; kept for existing imports/tests. */
export type HistoricalIngredient = RecipeIngredient;

export const recipeIngredients: RecipeIngredient[] = [
  { name: "Fresh fruit", amount: "main base" },
  { name: "Wheat protein" },
  {
    name: "Dextrose / starch",
    note: "Only if the fruit is not ripe enough",
  },
  { name: "Emulsifier (E471, E412)" },
  {
    name: "Agave nectar",
    note: "Only if the fruit is not ripe enough",
  },
  { name: "Citric acid" },
  { name: "Guar gum" },
  {
    name: "Mar/az",
    note: "As written on the original product pages; wording not expanded here",
  },
];

/** Alias so older imports keep working. */
export const historicalIngredients = recipeIngredients;

export const recipeYield =
  "Historical recipe lineup associated with Fruiticana Creamless Ice Cream, including a 4 oz laboratory serving on 2008 Nutrition Facts panels.";

export const recipeIntro =
  "A fruit-first ingredient list from 2007 product pages, shared for school review. It is not a current kitchen SOP for the proposed machine program.";

export const recipeIngredientsSource =
  "Ingredient lineup from Fruiticana product pages on myfruiticana.com (Wayback Machine, March 2007).";

/** @deprecated Prefer recipeIngredientsSource */
export const historicalIngredientsSource = recipeIngredientsSource;

export const wheatProteinFlag =
  "Wheat protein is on the recipe list. Confirm gluten status with your current Fruiticana formulation before serving students.";

export const currentVerificationNotice =
  "The Nutrition Facts on this site are from a 2008 laboratory analysis. The ingredient list is from 2007 product pages. Fruiticana needs current testing before launch for calories, fat, fiber, total sugar, added sugar, dairy and lactose status, and allergens. Wheat protein appears on the 2007 list. Added sugar was not reported as a separate line on those panels.";

export const ingredientsSectionIntro =
  "A fruit-first 2007 ingredient list for school review. Confirm the mix and allergens against a current Fruiticana formulation before any service.";
