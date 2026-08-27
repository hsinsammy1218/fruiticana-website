import type { Amount } from "@/data/flavors";

/** Format a possibly-missing Nutrition Facts value. Missing -> em dash. */
export function fmtAmount(amount: Amount, unit = ""): string {
  if (amount === null) return "\u2014";
  return `${amount}${unit}`;
}

/** Format a % Daily Value. */
export function fmtDv(dv: number): string {
  return `${dv}%`;
}
