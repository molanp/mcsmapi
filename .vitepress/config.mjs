import { defineConfig } from "vitepress";
import { sharedConfig } from "./config/share";
import { zhConfig } from "./config/zh";
import { enConfig } from "./config/en";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...sharedConfig,
  locales: {
    // 多语言
    root: {
      label: "简体中文",
      lang: "zh-Hans",
      ...zhConfig,
    },
    en: {
      label: "English",
      lang: "en",
      link: "/en/",
      ...enConfig,
    },
  },
});
