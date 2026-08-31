/**
 * Structured school-inquiry options. Kept in data so the form, deep links,
 * and tests share one source of truth.
 */

export const interestTypes = [
  "School Food Service",
  "Healthy Snack Program",
  "Cafeteria",
  "Events",
  "Distribution",
  "Product Information",
  "Nutrition Information",
  "Other",
] as const;

export type InterestType = (typeof interestTypes)[number];

export const schoolTypes = [
  "Private School",
  "Public School",
  "Charter School",
  "School District",
  "College / University",
  "Food-Service Provider",
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
  if (value == null || value === "") return "School Food Service";
  return interestTypes.includes(value as InterestType)
    ? (value as InterestType)
    : "Other";
}
