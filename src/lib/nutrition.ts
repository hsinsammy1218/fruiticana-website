import type { Amount, Flavor } from "@/data/flavors";
import { flavors } from "@/data/flavors";
import type { FactStat } from "@/data/facts";

/** Format a possibly-missing Nutrition Facts value. Missing -> em dash. */
export function fmtAmount(amount: Amount, unit = ""): string {
  if (amount === null) return "\u2014";
  return `${amount}${unit}`;
}

/** Format a % Daily Value. */
export function fmtDv(dv: number): string {
  return `${dv}%`;
}

export type NutritionSnapshot = {
  flavorCount: number;
  calorieMin: number;
  calorieMax: number;
  flavorsMissingCalories: string[];
  allZeroFat: boolean;
  allZeroSaturatedFat: boolean;
  allZeroTransFat: boolean;
  allZeroCholesterol: boolean;
  sodiumMin: number;
  sodiumMax: number;
  servingSize: string;
  servingGrams: number;
  lab: string;
  reportNumber: string;
  reportDate: string;
};

/** Aggregate 2008 lab values so UI numbers stay in sync with flavor data. */
export function getNutritionSnapshot(list: Flavor[] = flavors): NutritionSnapshot {
  const calorieValues = list
    .map((flavor) => flavor.nutrition.calories)
    .filter((calories): calories is number => typeof calories === "number");
  const first = list[0]?.nutrition;

  return {
    flavorCount: list.length,
    calorieMin: calorieValues.length ? Math.min(...calorieValues) : 0,
    calorieMax: calorieValues.length ? Math.max(...calorieValues) : 0,
    flavorsMissingCalories: list
      .filter((flavor) => flavor.nutrition.calories === null)
      .map((flavor) => flavor.name),
    allZeroFat: list.length > 0 && list.every((flavor) => flavor.nutrition.totalFatG === 0),
    allZeroSaturatedFat:
      list.length > 0 && list.every((flavor) => flavor.nutrition.saturatedFatG === 0),
    allZeroTransFat:
      list.length > 0 && list.every((flavor) => flavor.nutrition.transFatG === 0),
    allZeroCholesterol:
      list.length > 0 && list.every((flavor) => flavor.nutrition.cholesterolMg === 0),
    sodiumMin: list.length ? Math.min(...list.map((flavor) => flavor.nutrition.sodiumMg)) : 0,
    sodiumMax: list.length ? Math.max(...list.map((flavor) => flavor.nutrition.sodiumMg)) : 0,
    servingSize: first?.servingSize ?? "",
    servingGrams: first?.servingGrams ?? 0,
    lab: first?.lab ?? "",
    reportNumber: first?.reportNumber ?? "",
    reportDate: first?.reportDate ?? "",
  };
}

/** Scannable nutrition figures for product and homepage teasers. */
export function getNutritionGlanceStats(list: Flavor[] = flavors): FactStat[] {
  const snapshot = getNutritionSnapshot(list);
  const missing =
    snapshot.flavorsMissingCalories.length > 0
      ? `${snapshot.flavorsMissingCalories.join(", ")} left blank`
      : "Laboratory range";

  return [
    {
      value: snapshot.allZeroFat ? "0g" : "See panels",
      label: "Total fat",
      note: `All ${snapshot.flavorCount} flavors, 2008 lab`,
    },
    {
      value: snapshot.allZeroCholesterol ? "0mg" : "See panels",
      label: "Cholesterol",
      note: `All ${snapshot.flavorCount} flavors, 2008 lab`,
    },
    {
      value: `${snapshot.calorieMin}–${snapshot.calorieMax}`,
      label: "Calories per 4 oz",
      note: missing,
    },
    {
      value: `${snapshot.sodiumMin}–${snapshot.sodiumMax}mg`,
      label: "Sodium",
      note: `Range across ${snapshot.flavorCount} flavors`,
    },
  ];
}
