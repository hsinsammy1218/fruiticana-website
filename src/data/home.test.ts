import { describe, expect, it } from "vitest";
import { faqItems } from "@/data/faq";
import {
  closingCta,
  healthCopy,
  heroCopy,
  historyCopy,
  howCopy,
  ideaCopy,
  whyCopy,
  whySchoolsCopy,
} from "@/data/home";
import { knownOperations, schoolOperations } from "@/data/operations";
import { site } from "@/data/site";

const homepageCopy = [
  site.tagline,
  site.heroSupport,
  site.promise,
  site.shortDescription,
  heroCopy.subhead,
  whyCopy.title,
  whyCopy.description,
  whyCopy.question,
  whyCopy.body,
  healthCopy.description,
  healthCopy.notice,
  whySchoolsCopy.description,
  historyCopy.body,
  historyCopy.distinction,
  howCopy.description,
  closingCta.title,
  closingCta.description,
  ...faqItems.map((item) => `${item.question} ${item.answer}`),
  ...knownOperations.map((item) => `${item.title} ${item.body}`),
  ...schoolOperations.map((item) => `${item.question} ${item.answer}`),
].join(" ");

describe("student-mission copy", () => {
  it("does not make disease, certification, or no-cost claims", () => {
    expect(homepageCopy).not.toMatch(/obesity|diabetes|cardiovascular|prevents? disease/i);
    expect(homepageCopy).not.toMatch(/fda certified|fda approved|fda endorsement/i);
    expect(homepageCopy).not.toMatch(/aha certified|heart association certified/i);
    expect(homepageCopy).not.toMatch(/free for schools/i);
    expect(homepageCopy).not.toMatch(/100% fruit/i);
  });

  it("keeps historical school participation dated", () => {
    expect(historyCopy.body).toMatch(/2003/);
    expect(historyCopy.body).toMatch(/Team Nutrition/i);
    expect(historyCopy.distinction).toMatch(/historical/i);
    expect(historyCopy.distinction).toMatch(/not a current/i);
  });

  it("covers the ten school-implementation questions without inventing answers", () => {
    expect(schoolOperations).toHaveLength(10);
    expect(schoolOperations.filter((item) => item.status === "to-confirm").length).toBeGreaterThanOrEqual(6);
    expect(schoolOperations.every((item) => item.answer.length > 20)).toBe(true);
  });

  it("gives each fruit-journey card a dedicated photo", () => {
    expect(ideaCopy.steps.map((step) => step.image)).toEqual([
      "/images/journey/real-fruit.webp",
      "/images/journey/fruiticana.webp",
      "/images/journey/frozen.webp",
      "/images/journey/students.webp",
    ]);
    expect(ideaCopy.steps.every((step) => step.imageAlt.length > 20)).toBe(true);
  });

  it("answers principal FAQ with fruit, schools, and a next step", () => {
    const questions = faqItems.map((item) => item.question).join(" ");
    expect(questions).toMatch(/what is fruiticana/i);
    expect(questions).toMatch(/why does fruiticana exist/i);
    expect(questions).toMatch(/schools/i);
    expect(faqItems.some((item) => item.href?.url === "/contact")).toBe(true);
  });
});
