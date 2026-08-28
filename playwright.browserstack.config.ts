import { defineConfig } from "@playwright/test";
import { devices } from "@playwright/test";

/**
 * Optional BrowserStack run (real Safari/iPhone, Chrome/Android, Edge, etc.).
 *
 * Prerequisites:
 *   BROWSERSTACK_USERNAME
 *   BROWSERSTACK_ACCESS_KEY
 *   PLAYWRIGHT_BASE_URL  — a publicly reachable preview or production URL
 *                          (BrowserStack cannot hit localhost unless you also
 *                          start BrowserStack Local).
 *
 * Usage:
 *   npx playwright test --config=playwright.browserstack.config.ts
 *
 * See README "Testing" for the recommended device matrix before launch.
 */
const username = process.env.BROWSERSTACK_USERNAME;
const accessKey = process.env.BROWSERSTACK_ACCESS_KEY;
const baseURL = process.env.PLAYWRIGHT_BASE_URL;

if (!username || !accessKey) {
  throw new Error(
    "Set BROWSERSTACK_USERNAME and BROWSERSTACK_ACCESS_KEY to run this config.",
  );
}

if (!baseURL) {
  throw new Error(
    "Set PLAYWRIGHT_BASE_URL to a public preview/production URL for BrowserStack.",
  );
}

function browserstackEndpoint(caps: Record<string, string>) {
  const payload = {
    ...caps,
    "browserstack.username": username,
    "browserstack.accessKey": accessKey,
    "browserstack.playwrightVersion": "1.55.0",
    project: "Fruiticana",
    build: process.env.BROWSERSTACK_BUILD_NAME ?? "fruiticana-website",
    name: caps.name,
  };
  return `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify(payload))}`;
}

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  retries: 1,
  reporter: [["list"], ["html", { open: "never" }]],
  timeout: 60_000,
  use: {
    baseURL,
    trace: "off",
    screenshot: "only-on-failure",
  },
  grep: /@cross-browser|@mobile/,
  projects: [
    {
      name: "bstack-chrome-windows",
      use: {
        connectOptions: {
          wsEndpoint: browserstackEndpoint({
            browser: "chrome",
            browser_version: "latest",
            os: "Windows",
            os_version: "11",
            name: "Chrome / Windows 11",
          }),
        },
      },
    },
    {
      name: "bstack-edge-windows",
      use: {
        connectOptions: {
          wsEndpoint: browserstackEndpoint({
            browser: "edge",
            browser_version: "latest",
            os: "Windows",
            os_version: "11",
            name: "Edge / Windows 11",
          }),
        },
      },
    },
    {
      name: "bstack-safari-macos",
      use: {
        ...devices["Desktop Safari"],
        connectOptions: {
          wsEndpoint: browserstackEndpoint({
            browser: "playwright-webkit",
            os: "OS X",
            os_version: "Sonoma",
            name: "Safari / macOS",
          }),
        },
      },
    },
    {
      name: "bstack-iphone",
      use: {
        ...devices["iPhone 13"],
        connectOptions: {
          wsEndpoint: browserstackEndpoint({
            browserName: "safari",
            device: "iPhone 15",
            os_version: "17",
            realMobile: "true",
            name: "Safari / iPhone 15",
          }),
        },
      },
    },
    {
      name: "bstack-android",
      use: {
        ...devices["Pixel 7"],
        connectOptions: {
          wsEndpoint: browserstackEndpoint({
            browserName: "chrome",
            device: "Samsung Galaxy S24",
            os_version: "14",
            realMobile: "true",
            name: "Chrome / Android",
          }),
        },
      },
    },
  ],
});
