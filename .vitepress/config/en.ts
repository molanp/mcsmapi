import { enNav } from "../navbar";
import { enSidebar } from '../sidebar'
import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: {
    nav: enNav,
    sidebar: enSidebar,
  },
};
