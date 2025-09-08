import { defineConfig } from "vitepress";

export const sharedConfig = defineConfig({
  rewrites: {
    "zh/:rest*": ":rest*",
  },
  metaChunk: true,
  sitemap: {
    hostname: "https://mcsmapi.awkchan.top",
  },
  lang: "zh-CN",
  title: "MCSMAPI | Easy Interfacing with MCSManager",
  description: "mcsmapi是一个帮助开发者更好的使用MCSManager的python-SDK",
  head: [
    [
      "meta",
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,shrink-to-fit=no",
      },
    ],
    [
      "meta",
      {
        name: "keywords",
        content:
          "MCSManager,MCSMAPI,MCSM-SDK",
      },
    ],
  ],
  appearance: true,
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
  },
  themeConfig: {
    siteTitle: "MCSMAPI",
    footer: {
      message: "Released under the MIT License.",
      copyright: `Copyright © 2025 MCSMAPI`,
    },
    search: {
      provider: "local",
    },
    outline: {
      level: [1, 3],
      label: "Directory",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/molanp/mcsmapi" },
    ],
  },
});
