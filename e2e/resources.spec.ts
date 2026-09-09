import { test, expect } from "@playwright/test";

const documentPages = [
  { slug: "fda-facility-registration", title: /u\.s\. fda facility registration/i },
  {
    slug: "aha-food-certification-letter",
    title: /american heart association program letter/i,
  },
  {
    slug: "ct-team-nutrition-letter",
    title: /connecticut team nutrition pilot letter/i,
  },
  {
    slug: "laboratory-nutritional-analysis",
    title: /laboratory nutritional analysis/i,
  },
];

test.describe("resources documentation", () => {
  test("documents on /resources link to their own readable page", async ({
    page,
  }) => {
    await page.goto("/resources");

    const readLinks = page.getByRole("link", {
      name: "Read the document",
      exact: true,
    });
    await expect(readLinks.first()).toBeVisible();
    expect(await readLinks.count()).toBeGreaterThanOrEqual(4);

    await readLinks.first().click();
    await expect(page).toHaveURL(/\/resources\/[a-z0-9-]+$/);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByRole("img").first()).toBeVisible();
  });

  for (const doc of documentPages) {
    test(`renders a readable page for ${doc.slug}`, async ({ page }) => {
      await page.goto(`/resources/${doc.slug}`);

      await expect(
        page.getByRole("heading", { level: 1, name: doc.title }),
      ).toBeVisible();
      // The document image is the readable artifact.
      await expect(page.getByRole("img").first()).toBeVisible();
      // Honest, unchanged framing.
      await expect(
        page.getByText(/downloadable original pdf is not published/i),
      ).toBeVisible();
      // A way back to the listing, and a full-size view.
      await expect(
        page.getByRole("link", { name: /back to all documentation/i }),
      ).toBeVisible();
      await expect(
        page.getByRole("link", { name: /open the full-size document image/i }),
      ).toBeVisible();
    });
  }

  test("the nutrition analysis page offers the live nutrition panels", async ({
    page,
  }) => {
    await page.goto("/resources/laboratory-nutritional-analysis");
    await expect(
      page.getByRole("link", { name: /view nutrition panels/i }),
    ).toHaveAttribute("href", /\/product#nutrition/);
  });

  test("About documentation cards open the readable document pages", async ({
    page,
  }) => {
    await page.goto("/about");

    const fdaThumb = page.getByRole("link", {
      name: /read the document: u\.s\. fda facility registration/i,
    });
    await expect(fdaThumb).toHaveAttribute(
      "href",
      "/resources/fda-facility-registration",
    );

    await page
      .getByRole("link", { name: "Read the document", exact: true })
      .first()
      .click();
    await expect(page).toHaveURL(/\/resources\/[a-z0-9-]+$/);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });
});
