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
        { text: "用户", link: "/endpoints/user" },
        { text: "实例", link: "/endpoints/instance" },
        { text: "镜像", link: "/endpoints/image" },
        { text: "文件", link: "/endpoints/file" },
        { text: "节点", link: "/endpoints/daemon" },
        { text: "计划任务", link: "/endpoints/schedule" },
      ],
    },
    {
      text: "模型",
      collapsed: true,
      items: [
        { text: "仪表盘模型", link: "/models/overview" },
        { text: "用户模型", link: "/models/user" },
        { text: "实例模型", link: "/models/instance" },
        { text: "镜像模型", link: "/models/image" },
        { text: "文件模型", link: "/models/file" },
        { text: "节点模型", link: "/models/daemon" },
        { text: "通用模型", link: "/models/common" },
        { text: "计划任务模型", link: "/models/schedule" },
      ],
    },
  ],
};
