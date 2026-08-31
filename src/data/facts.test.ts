import { describe, expect, it } from "vitest";
import {
  connecticutProgramStats,
  homeGlanceStats,
  learnGlanceStats,
  schoolDesignBenefits,
  schoolGlanceStats,
  storyPilotStats,
} from "@/data/facts";

describe("snapshot facts", () => {
  it("keeps homepage figures inside the documented record", () => {
    const values = homeGlanceStats.map((stat) => stat.value);
    expect(values).toEqual(["12", "3 oz", "0g", "~30,000"]);
    expect(homeGlanceStats.every((stat) => /historical|documented|lab|school/i.test(`${stat.label} ${stat.note}`))).toBe(
      true,
    );
  });

  it("does not put historical pilot sales on the homepage or schools strip", () => {
    const publicValues = [...homeGlanceStats, ...schoolGlanceStats, ...connecticutProgramStats]
      .map((stat) => stat.value)
      .join(" ");
    expect(publicValues).not.toMatch(/\$/);
  });

  it("reserves the ~$1M figure for the story page", () => {
    expect(storyPilotStats.some((stat) => stat.value === "~$1M")).toBe(true);
  });

  it("covers the classroom resource with countable modules", () => {
    expect(learnGlanceStats.map((stat) => stat.value)).toEqual([
      "12",
      "5",
      "3",
      "2003–05",
    ]);
  });

  it("gives each school-design benefit a scannable figure", () => {
    expect(schoolDesignBenefits.map((benefit) => benefit.title)).toEqual([
      "Fruit Based",
      "Smooth Frozen Texture",
      "Lactose-Free Concept",
      "Individual Serving Options",
    ]);
    expect(schoolDesignBenefits.every((benefit) => (benefit.figure ?? benefit.title).length > 0)).toBe(
      true,
    );
  });
});
