import { describe, expect, it } from "vitest";
import {
  programNumbers,
  programSteps,
  proposedModelNotice,
  valueExchange,
} from "@/data/program";
import { faqItems } from "@/data/faq";
import { knownOperations, schoolOperations } from "@/data/operations";
import {
  closingCta,
  heroCopy,
  historyCopy,
  startYoungCopy,
  whyCopy,
} from "@/data/home";
import { schoolsIntro } from "@/data/schools";
import { visionIntro, visionPillars } from "@/data/vision";

const publicProgramCopy = [
  proposedModelNotice,
  ...programNumbers.map((item) => `${item.value} ${item.label} ${item.note}`),
  ...programSteps.map((step) => `${step.title} ${step.body}`),
  ...valueExchange.columns.flatMap((column) => column.items),
  valueExchange.schoolObligations,
  ...knownOperations.map((item) => `${item.title} ${item.body}`),
  ...schoolOperations.map((item) => `${item.question} ${item.answer}`),
  ...faqItems.map((item) => `${item.question} ${item.answer}`),
  heroCopy.subhead,
  whyCopy.title,
  whyCopy.body,
  startYoungCopy.hope,
  startYoungCopy.whySchools,
  schoolsIntro.description,
  historyCopy.today,
  closingCta.description,
  visionIntro.description,
  ...visionPillars.map((pillar) => `${pillar.title} ${pillar.body}`),
].join(" ");

describe("proposed school program", () => {
  it("states machines provided, maintenance, and involvement as proposed", () => {
    expect(publicProgramCopy).toMatch(/proposed/i);
    expect(publicProgramCopy).toMatch(/two machines/i);
    expect(publicProgramCopy).toMatch(/two flavors/i);
    expect(publicProgramCopy).toMatch(/provides the (machinery|machines|equipment)/i);
    expect(publicProgramCopy).toMatch(/maintain/i);
    expect(publicProgramCopy).toMatch(/not simply dropping off equipment/i);
  });

  it("does not claim a school sales-share percentage", () => {
    expect(publicProgramCopy).not.toMatch(/1\/3/);
    expect(publicProgramCopy).not.toMatch(/one-third/i);
    expect(publicProgramCopy).not.toMatch(/shares in (the program.?s )?sales/i);
    expect(publicProgramCopy).not.toMatch(/of Fruiticana sales/i);
  });

  it("does not promise that children will always choose fruit", () => {
    expect(publicProgramCopy).not.toMatch(/never stop/i);
    expect(publicProgramCopy).not.toMatch(/will always choose/i);
    expect(startYoungCopy.hope).toMatch(/hope/i);
  });

  it("does not present in-house kitchen prep as the current program", () => {
    const currentProgram = [
      ...programSteps.map((step) => `${step.title} ${step.body}`),
      schoolsIntro.description,
      visionPillars.find((pillar) => pillar.key === "how")?.body,
    ].join(" ");
    expect(currentProgram).not.toMatch(/in-house/i);
    expect(currentProgram).toMatch(/proposed/i);
  });

  it("keeps four scannable program steps focused on machines, flavors, involvement, and students", () => {
    expect(programSteps.map((step) => step.title)).toEqual([
      "We Provide the Machines",
      "We Bring the Flavors",
      "We Stay Involved",
      "Students Enjoy Fruiticana",
    ]);
    expect(programNumbers.map((item) => item.value)).toEqual(["2", "4"]);
  });
});
