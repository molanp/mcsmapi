import { DefaultTheme } from "vitepress";
export const zhSidebar: DefaultTheme.Sidebar = {
  "/": [
    {
      text: "User Guide",
      collapsed: false,
      items: [
        { text: "Quick Start", link: `/en/quick-started` },
        { text: "Initialization", link: `/en/initialization` },
      ],
    },
    {
      text: "Endpoints",
      items: [
        { text: "Dashboard Data", link: "/en/endpoints/overview" },
        { text: "Users", link: "/en/endpoints/user" },
        { text: "Instances", link: "/en/endpoints/instance" },
        { text: "Images", link: "/en/endpoints/image" },
        { text: "Files", link: "/en/endpoints/file" },
        { text: "Daemons", link: "/en/endpoints/daemon" },
        { text: "Scheduled Tasks", link: "/en/endpoints/schedule" },
      ],
    },
    {
      text: "Models",
      collapsed: true,
      items: [
        { text: "Dashboard Model", link: "/en/models/overview" },
        { text: "User Model", link: "/en/models/user" },
        { text: "Instance Model", link: "/en/models/instance" },
        { text: "Image Model", link: "/en/models/image" },
        { text: "File Model", link: "/en/models/file" },
        { text: "Node Model", link: "/en/models/daemon" },
        { text: "Common Model", link: "/en/models/common" },
        { text: "Scheduled Task Model", link: "/en/models/schedule" },
      ],
    },
  ],
};
