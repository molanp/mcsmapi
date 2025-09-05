import { DefaultTheme } from "vitepress";
export const enSidebar: DefaultTheme.Sidebar = {
  "/en": [
    {
      text: "User Guide",
      collapsed: false,
      items: [
        { text: "Quick Start", link: "/en/quick-started" },
        { text: "Initialization", link: "/en/initialization" },
      ],
    },
    {
      text: "API",
      items: [
        { text: "Dashboard Data", link: "/en/endpoints/overview" },
        { text: "User Operations", link: "/en/endpoints/user" },
        { text: "Instance Operations", link: "/en/endpoints/instance" },
      ],
    },
    {
      text: "Models",
      collapsed: true,
      items: [
        { text: "Dashboard Related", link: "/en/models/overview" },
        { text: "User Related", link: "/en/models/user" },
        { text: "Instance Related", link: "/en/models/instance" },
      ],
    },
  ],
};
