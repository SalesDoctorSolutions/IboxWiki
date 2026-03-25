// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'iBOX',
  tagline: 'iBOX Документация',
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        href: '/img/favicon.ico',
        media: '(prefers-color-scheme: light)',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        href: '/img/favicon-dark.ico',
        media: '(prefers-color-scheme: dark)',
      },
    },
  ],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://help.ibox.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SalesDoctorSolutions', // Usually your GitHub org/user name.
  projectName: 'IboxWiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
  locales: ['ru', 'uz'],
  localeConfigs: {
    ru: { label: 'Русский' },
    uz: { label: "O‘zbekcha" },
  },

  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
          /*editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',*/
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Логотип iBOX',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Руководство',
          },
           {to: '/blog', label: 'Новости', position: 'left'},
           {
            type: 'localeDropdown',
            position: 'right',
           },
        ],
      },
      
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Документация',
            items: [
              {
                label: 'Больше Информации',
                to: '/docs/knowledge',
              },
            ],
          },
          {
            title: 'Сообщество',
            items: [
              {
                label: 'Телеграм Канал',
                href: 'https://t.me/ibox_app',
              },
            ],
          },
          {
            title: 'Дополнительно',
            items: [
              {
                label: 'Блог',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} iBox.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      
      
    }),
    themes: [
    [
      // @ts-ignore
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      // @ts-ignore
      ({
        hashed: true,
        language: ["en", "ru",], 
      }),
    ],
  ],
};




export default config;
