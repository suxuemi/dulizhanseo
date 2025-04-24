import type { NavbarOptions } from '@vuepress/theme-default'
import { VERSION } from '../meta.js'

export const navbarEn: NavbarOptions = [
  {
    text: '网站营销',
    children: [
      '/website/2023-2.md',
      '/guide/getting-started.md',
      '/guide/configuration.md',
      '/guide/page.md',
      '/guide/markdown.md',
      '/guide/assets.md',
      '/guide/i18n.md',
      '/guide/deployment.md',
      '/guide/theme.md',
      '/guide/plugin.md',
      '/guide/bundler.md',
      '/guide/migration.md',
      '/guide/troubleshooting.md',
    ],
  },
  {
    text: '工具分享',
    children: [
      {
        text: 'Web',
        children: [
          {
            text: 'CLI',
            link: '/reference/cli.html',
          },
          '/reference/config.md',
          '/reference/frontmatter.md',
          '/reference/components.md',
          '/reference/plugin-api.md',
          '/reference/theme-api.md',
          '/reference/client-api.md',
          '/reference/node-api.md',
        ],
      },
      {
        text: 'Bundlers',
        children: [
          '/reference/bundler/vite.md',
          '/reference/bundler/webpack.md',
        ],
      },
      {
        text: 'Ecosystem',
        children: [
          {
            text: 'Default Theme',
            link: 'https://ecosystem.vuejs.press/themes/default/',
          },
          {
            text: 'Plugins',
            link: 'https://ecosystem.vuejs.press/plugins/',
          },
        ],
      },
    ],
  },

  {
    text: '更多资源',
    children: [
      {
        text: '进阶',
        children: [
          '/advanced/architecture.md',
          '/advanced/plugin.md',
          '/advanced/theme.md',
          {
            text: 'Cookbook',
            link: '/advanced/cookbook/',
          },
        ],
      },
      {
        text: '学习交流',
        children: [
          {
            text: '讨论区',
            link: 'https://bbs.maozhishi.com/',
          },
          {
            text: '来发信',
            link: 'https://www.laifaxin.com',
          },
        ],
      },
    ],
  },
  {
    text: `v${VERSION}`,
    children: [
      {
        text: 'Changelog',
        link: 'https://github.com/vuepress/core/blob/main/CHANGELOG.md',
      },
      {
        text: 'v1.x',
        link: 'https://v1.vuepress.vuejs.org',
      },
      {
        text: 'v0.x',
        link: 'https://v0.vuepress.vuejs.org',
      },
    ],
  },
  // TODO: remove the type assertion
] as NavbarOptions
