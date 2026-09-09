import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  workers: 2,
  reporter: "list",
  use: { baseURL: "http://127.0.0.1:4187", reducedMotion: "reduce" },
  projects: [
    { name: "chromium", use: { browserName: "chromium" } },
    { name: "edge", use: { browserName: "chromium", channel: "msedge" } },
  ],
  webServer: {
    command: "npm run preview -- --port 4187 --strictPort",
    url: "http://127.0.0.1:4187",
    reuseExistingServer: true,
  },
});
