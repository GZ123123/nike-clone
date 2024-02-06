import type { ModuleOptions } from "@nuxtjs/i18n";

export const i18n: Partial<ModuleOptions> = {
  locales: [
    { name: "English", code: "en", iso: "en-US", files: ["en.json"] },
    { name: "Tiếng Việt", code: "vn", iso: "vn-VN", files: ["vn.json"] },
  ],
  lazy: true,
  langDir: "locales",
  defaultLocale: "en",
};
