/**
 * Structured school-inquiry options. Kept in data so the form, deep links,
 * and tests share one source of truth.
 */

export const interestTypes = [
  "School Cafeteria",
  "Healthy Snack Program",
  "Private School",
  "District-Level Inquiry",
  "Food-Service Distribution",
  "Events",
  "General Information",
] as const;

export type InterestType = (typeof interestTypes)[number];

export const schoolTypes = [
  "Public school",
  "Private school",
  "Charter school",
  "District office",
  "Food-service company",
  "Distributor",
  "Other",
] as const;

export type SchoolType = (typeof schoolTypes)[number];

export const roles = [
  "Administrator",
  "Principal",
  "Superintendent",
  "Food-service director",
  "Cafeteria manager",
  "Nutrition coordinator",
  "Purchasing",
  "Distributor",
  "Other",
] as const;

export type Role = (typeof roles)[number];

export const studentRanges = [
  "Under 200",
  "200–500",
  "500–1,000",
  "1,000–2,500",
  "2,500–5,000",
  "5,000+",
  "Not sure / district-level",
] as const;

export type StudentRange = (typeof studentRanges)[number];

export function resolveInterestType(value?: string | null): InterestType {
  return interestTypes.includes(value as InterestType)
    ? (value as InterestType)
    : "General Information";
}
