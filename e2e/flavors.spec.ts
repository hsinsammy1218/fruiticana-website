import { test, expect } from "@playwright/test";
import { flavorSlugs } from "./helpers";

test.describe("flavors", () => {
  test("lists twelve flavors and filters by family", async ({ page }) => {
    await page.goto("/flavors");

    await expect(
      page.getByRole("heading", { level: 1, name: /flavor for every kind/i }),
    ).toBeVisible();
    await expect(page.getByText("Showing 12 flavors.")).toBeVisible();

    for (const slug of flavorSlugs) {
      await expect(page.locator(`a[href="/flavors/${slug}"]`)).toBeVisible();
    }

    await page.getByRole("button", { name: "Berry" }).click();
    await expect(page.getByText("Showing 2 flavors in Berry.")).toBeVisible();
    await expect(page.locator('a[href="/flavors/strawberry"]')).toBeVisible();
    await expect(page.locator('a[href="/flavors/blueberry"]')).toBeVisible();
    await expect(page.locator('a[href="/flavors/mango"]')).toHaveCount(0);

    await page.getByRole("button", { name: "All" }).click();
    await expect(page.getByText("Showing 12 flavors.")).toBeVisible();
  });

  test("flavor detail shows related flavors and a nutrition deep link", async ({
    page,
  }) => {
    await page.goto("/flavors/mango");

    await expect(page.getByRole("heading", { level: 1, name: "Mango" })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /learn about mango/i }),
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "All flavors" })).toBeVisible();
    await expect(
      page.getByRole("link", { name: "See full nutrition facts" }),
    ).toHaveAttribute("href", "/nutrition?flavor=mango");

    await page.getByRole("link", { name: "See full nutrition facts" }).click();
    await expect(page).toHaveURL(/\/nutrition\?flavor=mango/);
    await expect(page.getByRole("button", { name: "Mango" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });

  test("all flavor slugs render a heading", async ({ page }) => {
    for (const slug of flavorSlugs) {
      await page.goto(`/flavors/${slug}`);
      await expect(page.locator("h1")).toBeVisible();
      await expect(page.getByRole("link", { name: "All flavors" })).toBeVisible();
    }
  });
});
