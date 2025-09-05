import { defineConfig } from "vitepress";

export const sharedConfig = defineConfig({
  rewrites: {
    "zh/:rest*": ":rest*",
  },
  metaChunk: true,
  lang: "zh-CN",
  title: "MCSMAPI",
  description: "mcsmapi是一个帮助开发者更好的使用MCSManager的python-SDK",
  base: "/mcsmapi/",
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
          "MCSManager,MCSMAPI,MCSM,MCSM-API,MCSM-API-Python,MCSM-API-Python-SDK",
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
    footer: {
      message: "Released under the MIT License.",
      copyright: `Copyright © 2025 MCSMAPI`,
    },
    outline: {
      level: [1, 3],
      label: "目录",
    },

    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    docFooter: {
      prev: "Pagina prior",
      next: "Proxima pagina",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/molanp/mcsmapi" },
    ],
  },
});
