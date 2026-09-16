import { describe, expect, it } from "vitest";
import { isNavItemActive } from "@/data/navigation";

describe("isNavItemActive", () => {
  it("marks Home only on the homepage", () => {
    expect(isNavItemActive("/", "/")).toBe(true);
    expect(isNavItemActive("/about", "/")).toBe(false);
    expect(isNavItemActive("/product", "/")).toBe(false);
    expect(isNavItemActive("/flavors/mango", "/")).toBe(false);
  });

  it("marks nested resource pages under Resources", () => {
    expect(isNavItemActive("/resources", "/resources")).toBe(true);
    expect(
      isNavItemActive("/resources/fda-facility-registration", "/resources"),
    ).toBe(true);
    expect(isNavItemActive("/about", "/resources")).toBe(false);
  });

  it("treats flavor sheets as Product & Nutrition", () => {
    expect(isNavItemActive("/product", "/product")).toBe(true);
    expect(isNavItemActive("/flavors/mango", "/product")).toBe(true);
    expect(isNavItemActive("/about", "/product")).toBe(false);
  });

  it("does not treat one nav path as a prefix of another", () => {
    expect(isNavItemActive("/about", "/about")).toBe(true);
    expect(isNavItemActive("/about-us", "/about")).toBe(false);
  });
});
