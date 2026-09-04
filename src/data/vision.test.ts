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

  it("positions the site for schools rather than wholesale", () => {
    const copy = [
      visionIntro.description,
      ...visionPillars.map((pillar) => `${pillar.title} ${pillar.body}`),
    ].join(" ");
    expect(copy).toMatch(/schools/i);
    expect(copy).toMatch(/not wholesale/i);
    expect(copy).not.toMatch(/distributor/i);
    expect(copy).not.toMatch(/for wholesale/i);
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