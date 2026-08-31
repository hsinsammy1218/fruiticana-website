import { describe, expect, it } from "vitest";
import { appendixIndex, historicalRecord, recordFacts } from "@/data/record";

describe("historical business record", () => {
  it("cites the PDF page ranges used for transcription", () => {
    expect(historicalRecord.narrativePages).toBe("1–11");
    expect(historicalRecord.appendixPages).toBe("12–40");
    expect(historicalRecord.nutritionPages).toBe("15–37");
    expect(historicalRecord.citation).toMatch(/20080318F/);
  });

  it("includes the Team Nutrition vendor count from the record", () => {
    const vendors = recordFacts.find((fact) => fact.label === "Team Nutrition vendors");
    expect(vendors?.figure).toBe("1 of 11");
    expect(vendors?.fromRecord).toMatch(/3 frozen-dessert vendors/);
  });

  it("does not present appendix items as current certifications", () => {
    const joined = appendixIndex.map((item) => `${item.title} ${item.use}`).join(" ");
    expect(joined).not.toMatch(/currently certified/i);
    expect(joined).toMatch(/not/i);
  });

  it("keeps banned marketing claims out of the briefing", () => {
    const blob = JSON.stringify({ historicalRecord, recordFacts, appendixIndex });
    expect(blob).not.toMatch(/diabet/i);
    expect(blob).not.toMatch(/two servings a day/i);
    expect(blob).not.toMatch(/healthiest/);
    expect(blob).not.toMatch(/\$/);
  });
});
