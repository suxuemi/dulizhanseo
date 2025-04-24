import type { SidebarOptions } from '@vuepress/theme-default'

export const sidebarEn: SidebarOptions = {
  '/website/': [
    {
      text: '极速建站',
      children: [
        {
          text: '建站2022版',
          collapsible: true,
          children: [
            {
              text: '一、建站与SEO有哪些坑？',
              link: '/website/wordpress-website-building-and-seo-optimization-1.md',
            },
            {
              text: '二、外贸独立站是什么？',
              link: '/website/wordpress-website-building-and-seo-optimization-2.md',
            },
            {
              text: '三、网站有哪些构成要素？',
              link: '/website/wordpress-website-building-and-seo-optimization-3.md',
            },
            {
              text: '四、自建独立站有何优势',
              link: '/website/wordpress-website-building-and-seo-optimization-4.md',
            },
            {
              text: '五、选择适合你的建站方式',
              link: '/website/wordpress-website-building-and-seo-optimization-5.md',
            },
            {
              text: '六、动辄上万？这些坑速看！',
              link: '/website/wordpress-website-building-and-seo-optimization-6.md',
            },
            {
              text: '七、小白如何两天上线新站？',
              link: '/website/wordpress-website-building-and-seo-optimization-7.md',
            },
            {
              text: '八、一图看懂独立站获客逻辑！',
              link: '/website/wordpress-website-building-and-seo-optimization-8.md',
            },
            {
              text: '九、新手如何做好SEO与SEM？',
              link: '/website/wordpress-website-building-and-seo-optimization-9.md',
            },
            {
              text: '十、内容为王，拒绝代运营！',
              link: '/website/wordpress-website-building-and-seo-optimization-10.md',
            },
            {
              text: '十一、从“借鉴”开始SEO之路',
              link: '/website/wordpress-website-building-and-seo-optimization-11.md',
            },
            {
              text: '十二、Soho为何慎重选择SEM？',
              link: '/website/wordpress-website-building-and-seo-optimization-12.md',
            },
            {
              text: '十三、通过数据推动你的业务！',
              link: '/website/wordpress-website-building-and-seo-optimization-13.md',
            },
          ],
        },
        {
          text: '建站2023版',
          collapsible: true,
          children: [
            {
              text: '一、399元建站攻略',
              link: '/website/jianzhanjiaocheng2023-1-kaishizhiqian.md',
            },
            {
              text: '二、服务器购买与设置',
              link: '/website/2023-2.md',
            },
            {
              text: '三、域名购买与设置',
              link: '/website/jianzhanjiaocheng2023-3-yuming.md',
            },
            {
              text: '四、连接服务器',
              link: '/website/jianzhanjiaocheng2023-4-lianjiefuwuqi.md',
            },
            {
              text: '五、安装管理软件',
              link: '/website/jianzhanjiaocheng2023-5-anzhuangguanliruanjian.md',
            },
            {
              text: '五、完整教程教程',
              link: '/website/jianzhanjiaocheng2023-6-houxujiaocheng.md',
            },
          ],
        },
        '/guide/introduction.md',
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
      text: '搜索优化',
      children: ['/reference/bundler/vite.md', '/reference/bundler/webpack.md'],
    },
    {
      text: '搜索广告',
      children: [
        '/advanced/cookbook/README.md',
        '/advanced/cookbook/usage-of-client-config.md',
        '/advanced/cookbook/adding-extra-pages.md',
        '/advanced/cookbook/making-a-theme-extendable.md',
        '/advanced/cookbook/passing-data-to-client-code.md',
        '/advanced/cookbook/markdown-and-vue-sfc.md',
        '/advanced/cookbook/resolving-routes.md',
      ],
    },
  ],
  '/advanced/': [
    {
      text: 'Advanced',
      children: [
        '/advanced/architecture.md',
        '/advanced/plugin.md',
        '/advanced/theme.md',
      ],
    },
    {
      text: 'Cookbook',
      children: [
        '/advanced/cookbook/README.md',
        '/advanced/cookbook/usage-of-client-config.md',
        '/advanced/cookbook/adding-extra-pages.md',
        '/advanced/cookbook/making-a-theme-extendable.md',
        '/advanced/cookbook/passing-data-to-client-code.md',
        '/advanced/cookbook/markdown-and-vue-sfc.md',
        '/advanced/cookbook/resolving-routes.md',
      ],
    },
  ],
  '/reference/': [
    {
      text: 'Core',
      collapsible: true,
      children: [
        '/reference/cli.md',
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
      children: ['/reference/bundler/vite.md', '/reference/bundler/webpack.md'],
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
}
