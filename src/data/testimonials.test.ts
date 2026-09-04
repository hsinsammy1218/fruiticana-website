import { describe, expect, it } from "vitest";
import { testimonials, testimonialsNote } from "@/data/testimonials";

describe("deck testimonials", () => {
  it("includes the named 2007 Waterbury comments from the deck", () => {
    const authors = testimonials.map((item) => item.author);
    expect(authors).toEqual(
      expect.arrayContaining(["Frank", "Latonja", "Shawn"]),
    );
    expect(testimonials.find((item) => item.author === "Frank")?.quote).toMatch(
      /great stuff/i,
    );
    expect(testimonials.find((item) => item.author === "Latonja")?.quote).toMatch(
      /simply awesome/i,
    );
    expect(testimonials.find((item) => item.author === "Shawn")?.quote).toMatch(
      /like nothing I have ever tasted/i,
    );
    expect(testimonials.find((item) => item.author === "Shawn")?.dateLabel).toBe(
      "July 18, 2007",
    );
  });

  it("includes the longer unnamed deck comments for cups, cones, and smoothies", () => {
    const copy = testimonials.map((item) => item.quote).join(" ");
    expect(copy).toMatch(/smoothie/i);
    expect(copy).toMatch(/smooth in texture/i);
    expect(copy).toMatch(/refreshing and light/i);
  });

  it("does not turn customer comments into a present-tense medical claim", () => {
    const copy = testimonials.map((item) => item.quote).join(" ");
    expect(copy).not.toMatch(/diabet/i);
    expect(testimonialsNote).toMatch(/not a current product label/i);
  });
});
