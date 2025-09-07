import { DefaultTheme } from "vitepress";
export const enSidebar: DefaultTheme.Sidebar = {
  "/": [
    {
      text: "Guide",
      collapsed: false,
      items: [
        { text: "Quick Start", link: `/en/quick-started` },
        { text: "Initialization", link: `/en/initialization` },
      ],
    },
    {
      text: "APIs",
      items: [
        { text: "Dashboard Data", link: "/en/endpoints/overview" },
        { text: "User Operations", link: "/en/endpoints/user" },
        { text: "Instance Operations", link: "/en/endpoints/instance" },
        { text: "Image Operations", link: "/en/endpoints/image" },
        { text: "File Operations", link: "/en/endpoints/file" },
        { text: "Node Operations", link: "/en/endpoints/daemon" },
      ],
    },
    {
      text: "Models",
      collapsed: true,
      items: [
        { text: "Dashboard Related", link: "/en/models/overview" },
        { text: "User Related", link: "/en/models/user" },
        { text: "Instance Related", link: "/en/models/instance" },
        { text: "Image Related", link: "/en/models/image" },
        { text: "File Related", link: "/en/models/file" },
        { text: "Node Related", link: "/en/models/daemon" },
        { text: "Common Models", link: "/en/models/common" },
      ],
    },
  ],
};
