/** @type {import('@lhci/cli').Config} */
module.exports = {
  ci: {
    collect: {
      url: [
        "http://localhost:3001/",
        "http://localhost:3001/flavors",
        "http://localhost:3001/story",
        "http://localhost:3001/nutrition",
        "http://localhost:3001/contact",
      ],
      startServerCommand: "npx next start --hostname localhost --port 3001",
      startServerReadyPattern: "Ready",
      numberOfRuns: 2,
      settings: {
        preset: "desktop",
        onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
      },
    },
    assert: {
      assertions: {
        // PLAN.md targets: Performance 90+, A11y 95+, Best Practices 95+, SEO 95+
        // Performance is warned (not failed) because lab scores can jitter locally.
        "categories:performance": ["warn", { minScore: 0.9 }],
        "categories:accessibility": ["error", { minScore: 0.95 }],
        "categories:best-practices": ["error", { minScore: 0.95 }],
        "categories:seo": ["error", { minScore: 0.95 }],
      },
    },
    upload: {
      target: "filesystem",
      outputDir: ".lighthouseci",
    },
  },
};
