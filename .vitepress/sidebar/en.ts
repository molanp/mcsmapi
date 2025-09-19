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
        { text: "Dashboard", link: "/en/endpoints/overview" },
        { text: "User", link: "/en/endpoints/user" },
        { text: "Instance", link: "/en/endpoints/instance" },
        { text: "Image", link: "/en/endpoints/image" },
        { text: "File", link: "/en/endpoints/file" },
        { text: "Node", link: "/en/endpoints/daemon" },
      ],
    },
    {
      text: "Models",
      collapsed: true,
      items: [
        { text: "Dashboard Models", link: "/en/models/overview" },
        { text: "User Models", link: "/en/models/user" },
        { text: "Instance Models", link: "/en/models/instance" },
        { text: "Image Models", link: "/en/models/image" },
        { text: "File Models", link: "/en/models/file" },
        { text: "Node Models", link: "/en/models/daemon" },
        { text: "Common Models", link: "/en/models/common" },
      ],
    },
  ],
};
