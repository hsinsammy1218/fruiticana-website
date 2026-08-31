/**
 * Historical ingredient list transcribed from the 2007 myfruiticana.com
 * product pages. This is NOT a current specification sheet.
 *
 * The archived line “Mar/az” is left unexpanded — the source is truncated
 * and must not be guessed.
 */

export type HistoricalIngredient = {
  name: string;
  note?: string;
};

export const historicalIngredients: HistoricalIngredient[] = [
  { name: "Fresh fruit" },
  { name: "Wheat protein" },
  {
    name: "Dextrose / starch",
    note: "Listed only if the fruit was not ripe enough",
  },
  { name: "Emulsifier E471, E412" },
  {
    name: "Agave nectar",
    note: "Listed only if the fruit was not ripe enough",
  },
  { name: "Citric acid" },
  { name: "Guar gum" },
  {
    name: "Mar/az",
    note: "Wording as archived on the 2007 product pages; not expanded here",
  },
];

export const historicalIngredientsSource =
  "Transcribed from Fruiticana product pages on myfruiticana.com (Wayback Machine, March 2007).";

export const historicalIngredientsNotice =
  "This list describes a historical formulation from the 2007 website. It is not a current ingredient or allergen statement. Wheat protein appears in the archived list, so gluten status must be confirmed against any current Fruiticana formulation before school use.";

export const wheatProteinFlag =
  "The 2007 website listed wheat protein among the ingredients. Treat gluten as a historical allergen flag until a current specification is verified.";
