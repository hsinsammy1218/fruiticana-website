import { test } from "@playwright/test";
import { expectNoAxeViolations, primaryRoutes } from "./helpers";

test.describe("accessibility @cross-browser", () => {
  test("primary routes have no WCAG A/AA axe violations", async ({ page }) => {
    test.setTimeout(120_000);
    await page.emulateMedia({ reducedMotion: "reduce" });
    for (const route of primaryRoutes) {
      await page.goto(route.path);
      await expectNoAxeViolations(page);
    }
  });

  test("flavor detail and legal pages have no axe violations", async ({
    page,
  }) => {
    test.setTimeout(120_000);
    await page.emulateMedia({ reducedMotion: "reduce" });
    for (const path of [
      "/flavors/mango",
      "/flavors/banana",
      "/resources/fda-facility-registration",
      "/resources/laboratory-nutritional-analysis",
      "/privacy",
      "/terms",
      "/accessibility",
    ]) {
      await page.goto(path);
      await expectNoAxeViolations(page);
    }
  });
});
