import { describe, expect, it } from "vitest";
import { fmtAmount, fmtDv } from "@/lib/nutrition";

describe("fmtAmount", () => {
  it("renders a missing value as an em dash", () => {
    expect(fmtAmount(null)).toBe("\u2014");
  });

  it("keeps the historical less-than-one marker", () => {
    expect(fmtAmount("<1", "g")).toBe("<1g");
  });

  it("appends an optional unit", () => {
    expect(fmtAmount(100)).toBe("100");
    expect(fmtAmount(25, "g")).toBe("25g");
    expect(fmtAmount(0, "g")).toBe("0g");
  });
});

describe("fmtDv", () => {
  it("formats a daily value percent", () => {
    expect(fmtDv(0)).toBe("0%");
    expect(fmtDv(8)).toBe("8%");
  });
});
