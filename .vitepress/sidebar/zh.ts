import { DefaultTheme } from "vitepress";
export const zhSidebar: DefaultTheme.Sidebar = {
  "/": [
    {
      text: "使用指南",
      collapsed: false,
      items: [
        { text: "快速开始", link: `/quick-started` },
        { text: "初始化", link: `/initialization` },
      ],
    },
    {
      text: "接口",
      items: [
        { text: "仪表盘数据", link: "/endpoints/overview" },
        { text: "用户操作", link: "/endpoints/user" },
        { text: "实例操作", link: "/endpoints/instance" },
      ],
    },
    {
      text: "模型",
      collapsed: true,
      items: [
        { text: "仪表盘相关", link: "/models/overview" },
        { text: "用户相关", link: "/models/user" },
        { text: "实例相关", link: "/models/instance" },
      ],
    },
  ],
};
