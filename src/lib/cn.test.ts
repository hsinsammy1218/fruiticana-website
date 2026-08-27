import { describe, expect, it } from "vitest";
import { cn } from "@/lib/cn";

describe("cn", () => {
  it("joins class names", () => {
    expect(cn("px-2", "text-sm")).toBe("px-2 text-sm");
  });

  it("drops falsy values", () => {
    expect(cn("px-2", false && "hidden", undefined, "block")).toBe("px-2 block");
  });

  it("dedupes conflicting Tailwind utilities", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
    expect(cn("text-green-deep", "text-cream")).toBe("text-cream");
  });
});
