import type { ModuleOptions } from "@nuxtjs/sitemap";

export const sitemap: Partial<ModuleOptions> = {
  exclude: ["/secret"],
};
