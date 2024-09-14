import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    coverage: {
      include: ["src/components/**/*.ts", "src/components/**/*.tsx"],
      exclude: ["src/components/index.ts"],
    },
  },
});
