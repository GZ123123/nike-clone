// https://nuxt.com/docs/api/configuration/nuxt-config

import { sitemap } from "./configs/sitemap.config";
import { tailwindcss } from "./configs/tailwind.config";
import { i18n } from "./configs/i18n.config";
import { svgo } from "./configs/svgo.config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ["@nuxtjs/tailwindcss", tailwindcss],
    ["@nuxtjs/sitemap", { trailingSlash: true, ...sitemap }],
    ["@nuxtjs/i18n", i18n],
    ["nuxt-svgo", svgo],
  ],
});
