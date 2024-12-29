import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kokomi Platform",
  description: "Player data platform.",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },

    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    nav: [
      {
        text: "使用文档",
        items: [
          { text: "BOT文档", link: "/tutorial/robot/command" },
          { text: "APP文档", link: "/tutorial/software/start" },
        ],
      },
      {
        text: "设计文档",
        items: [
          { text: "接口返回值", link: "/design/return" },
          { text: "数据接口", link: "/design/api" },
          { text: "功能设计", link: "/design/function/recent" },
          { text: "数据库设计", link: "/design/mysql/user" },
        ],
      },
      {
        text: "接口文档",
        items: [{ text: "APP接口文档", link: "/document/api" }],
      },
      {
        text: "功能Q&A",
        link: "/blog/recent",
      },
    ],

    sidebar: {
      tutorial: [
        {
          text: "BOT使用文档",
          items: [{ text: "BOT指令", link: "/tutorial/robot/command" }],
        },
        {
          text: "APP使用文档",
          items: [{ text: "APP注册", link: "/tutorial/software/start" }],
        },
      ],

      "/design/": [
        {
          text: "接口返回值",
          items: [{ text: "接口返回值参考", link: "/design/return" }],
        },
        {
          text: "数据接口文档",
          items: [{ text: "游戏数据接口", link: "/design/api" }],
        },
        {
          text: "功能设计",
          items: [
            { text: "Recent功能设计文档", link: "/design/function/recent" },
            { text: "用户评分算法设计文档", link: "/design/function/algo" },
            {
              text: "用户缓存功能设计文档",
              link: "/design/function/user_cache",
            },
            {
              text: "工会缓存功能设计文档",
              link: "/design/function/clan_cache",
            },
          ],
        },
        {
          text: "数据库设计",
          items: [
            { text: "APP-用户数据库", link: "/design/mysql/app_user" },
            { text: "BOT-用户数据库", link: "/design/mysql/robot_user" },
            { text: "BASE-用户数据库", link: "/design/mysql/user" },
            { text: "BASE-工会数据库", link: "/design/mysql/clan" },
            { text: "BASE-地区信息数据库", link: "/design/mysql/region" },
            { text: "BASE-Recent数据库", link: "/design/mysql/recent" },
            { text: "BASE-Recents数据库", link: "/design/mysql/recents" },
            { text: "BASE-Ships数据库", link: "/design/mysql/ships" },
            { text: "BASE-缓存数据库", link: "/design/redis/key_name" },
          ],
        },
      ],

      "/document/": [
        {
          text: "APP接口文档",
          items: [{ text: "登录相关功能接口", link: "/document/api" }],
        },
      ],

      "/blog/": [
        {
          text: "BOT功能文档",
          items: [{ text: "Recent功能", link: "/blog/recent" }],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/SangonomiyaKoko" },
      { icon: "discord", link: "https://discord.gg/n5swUvFRfr" },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-2024 Mao Yu",
    },
  },
});
