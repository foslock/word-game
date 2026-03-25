import { defineConfig } from "vite";

export default defineConfig({
  test: {
    // Use happy-dom for a lightweight browser-like environment so that
    // localStorage and other Web APIs are available in all test files.
    environment: "happy-dom",
    globals: true,
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov"],
      include: ["src/**/*.ts"],
      exclude: ["src/__tests__/**", "src/main.ts"],
    },
  },
});
