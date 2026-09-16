import { test, expect } from "@playwright/test";

test.describe("home @cross-browser", () => {
  test("renders the brand promise and primary CTAs", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /an exciting new way\s+to eat fruit/i,
      }),
    ).toBeVisible();
    await expect(
      page.getByText(/get excited about eating fruit/i).first(),
    ).toBeVisible();
    await expect(page.getByText(/cream-less ice crème/i).first()).toBeVisible();
    await expect(
      page.getByRole("link", { name: "See How It Works" }).first(),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Bring Fruiticana to Your School" }).first(),
    ).toBeVisible();
  });

  test("leads with why and fruit before flavors", async ({ page }) => {
    await page.goto("/");

    const why = page.getByRole("heading", {
      name: "Healthy Choices Should Still Be Exciting",
    });
    const idea = page.getByRole("heading", {
      name: "Fruit They Know. A New Way to Enjoy It.",
    });
    const flavors = page.getByRole("heading", { name: "Original fruit flavors" });

    await expect(why).toBeVisible();
    await expect(idea).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Real Fruit", exact: true }),
    ).toBeVisible();
    const ideaSection = idea.locator("xpath=ancestor::section[1]");
    await expect(ideaSection.locator("img")).toHaveCount(4);
    await expect(
      page.getByRole("img", {
        name: /cut mango, strawberries, orange, pineapple, apple, and blueberries/i,
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("img", {
        name: /pink and yellow frozen scoops in a cup/i,
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("img", {
        name: /spoon lifting a smooth strawberry-mango frozen scoop/i,
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("img", {
        name: /students smiling in a school cafeteria/i,
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Made for Kids to Enjoy" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Health and enjoyment belong together" }),
    ).toBeVisible();

    const whyTop = await why.evaluate((el) => el.getBoundingClientRect().top);
    const ideaTop = await idea.evaluate((el) => el.getBoundingClientRect().top);
    const flavorsTop = await flavors.evaluate((el) => el.getBoundingClientRect().top);
    expect(whyTop).toBeLessThan(ideaTop);
    expect(ideaTop).toBeLessThan(flavorsTop);
  });

  test("hero CTAs open how it works and the school inquiry", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "See How It Works" }).first().click();
    await expect(page).toHaveURL(/#how-it-works/);
    await expect(
      page.getByRole("heading", { name: "Bringing Fruiticana to Your School" }),
    ).toBeVisible();

    await page.goto("/");
    await page
      .getByRole("main")
      .getByRole("link", { name: "Bring Fruiticana to Your School" })
      .click();
    await expect(page).toHaveURL(/\/contact$/);
  });

  test("establishes product, schools, history, how it works, FAQ, and closing inquiry", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: "A fruit-based frozen treat for students" }),
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Fruit based" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Ice-cream feel" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Single-serve cups" })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Original fruit flavors" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Schools Are Where Students Eat" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Bringing Fruiticana to Your School" }),
    ).toBeVisible();
    const howSection = page
      .getByRole("heading", { name: "Bringing Fruiticana to Your School" })
      .locator("xpath=ancestor::section[1]");
    await expect(howSection.getByText(/illustrative photo/i)).toBeVisible();
    await expect(howSection.locator("img").first()).toBeAttached();
    await expect(page.getByText(/team nutrition healthy snack/i).first()).toBeVisible();
    await expect(
      page.getByRole("heading", {
        name: "We've Been in Connecticut Schools Before",
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", {
        name: /a documented connecticut chapter, shared for review/i,
      }),
    ).toBeVisible();
    await expect(page.getByText("~30,000").first()).toBeVisible();
    await expect(page.getByText("4 oz").first()).toBeVisible();
    await expect(page.getByText("Original fruit flavors", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("Total fat on 2008 panels", { exact: true })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "FAQ for school teams" }),
    ).toBeVisible();
    await expect(
      page.getByText("What is Fruiticana?").first(),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", {
        name: "Let's Give Students a New Way to Enjoy Fruit.",
      }),
    ).toBeVisible();

    await expect(
      page.getByRole("main").getByRole("link", { name: "View Documentation" }),
    ).toHaveAttribute("href", "/resources");

    await page.getByRole("link", { name: "Read Our Story" }).click();
    await expect(page).toHaveURL(/\/about$/);

    await page.goto("/");
    await page.getByRole("link", { name: "Request School Information" }).last().click();
    await expect(page).toHaveURL(/\/contact$/);
  });
});
