import { test } from "@playwright/test";
import { viewports } from "./helpers";

const shots = [
  { name: "home", path: "/" },
  { name: "schools", path: "/schools" },
  { name: "product", path: "/product" },
  { name: "contact", path: "/contact" },
] as const;

test.describe("qa screenshots", () => {
  test("capture home, schools, product, and contact at mobile and desktop", async ({
    page,
  }, testInfo) => {
    test.setTimeout(120_000);
    await page.emulateMedia({ reducedMotion: "reduce" });

    for (const pageShot of shots) {
      await page.setViewportSize(viewports.phone390);
      await page.goto(pageShot.path, { waitUntil: "networkidle" });
      await page.screenshot({
        path: testInfo.outputPath(`${pageShot.name}-mobile.png`),
        fullPage: true,
      });

      await page.setViewportSize(viewports.desktop1440);
      await page.goto(pageShot.path, { waitUntil: "networkidle" });
      await page.screenshot({
        path: testInfo.outputPath(`${pageShot.name}-desktop.png`),
        fullPage: true,
      });
    }
  });
});
