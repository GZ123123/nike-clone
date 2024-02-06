/** @type {import('tailwindcss').Config} */
import type { ModuleOptions } from "@nuxtjs/tailwindcss";

export const tailwindcss: Partial<ModuleOptions> = {
  cssPath: ["@/assets/css/tailwind.css", { injectPosition: "last" }],
  configPath: "@/configs/tailwind.config.ts",
  exposeConfig: false,
  exposeLevel: 2,
  config: {},
  injectPosition: "first",
  viewer: true,
};

export default {
  content: [
    `./components/**/*.{vue,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./plugins/**/*.{js,ts}`,
    `./app.vue`,
    `./error.vue`,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
