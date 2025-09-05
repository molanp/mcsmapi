import { zhNav } from "../navbar";
import { zhSidebar } from "../sidebar";
import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: {
    sidebar: zhSidebar,
    nav: zhNav,
  },
};
