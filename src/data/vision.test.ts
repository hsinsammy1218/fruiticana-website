import { describe, expect, it } from "vitest";
import { visionIntro, visionPillars } from "@/data/vision";

describe("vision data", () => {
  it("tells schools the what, why, and how", () => {
    expect(visionPillars.map((pillar) => pillar.key)).toEqual([
      "what",
      "why",
      "how",
    ]);
    expect(visionIntro.title).toMatch(/what/i);
    expect(visionIntro.title).toMatch(/why/i);
    expect(visionIntro.title).toMatch(/how/i);
  });

  it("explains the vision without announcing the audience", () => {
    const copy = [
      visionIntro.description,
      ...visionPillars.map((pillar) => `${pillar.title} ${pillar.body}`),
    ].join(" ");
    expect(copy).toMatch(/students/i);
    expect(copy).toMatch(/cafeteria/i);
    expect(copy).not.toMatch(/for schools/i);
    expect(copy).not.toMatch(/this website is for/i);
    expect(visionIntro.description).not.toMatch(/only for/i);
  });

  it("keeps the how pillar on in-house school prep without specialty cost", () => {
    const how = visionPillars.find((pillar) => pillar.key === "how");
    expect(how?.figure).toBe("In-house");
    expect(how?.title).toMatch(/in-house/i);
    expect(how?.body).toMatch(/in-house/i);
    expect(how?.body).toMatch(/cost/i);
    expect(how?.body).toMatch(/4 oz/);
  });
});
