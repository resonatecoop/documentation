// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Resonate Documentation',
  tagline: 'Documentation for the tech behind the co-operative music streaming service',
  url: 'https://resonate.coop',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'resonatecoop', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/resonatecoop/docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/resonatecoop/docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Resonate Docs',
        logo: {
          alt: 'Resonate Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // { to: '/api', label: 'API', position: 'left' },
          {
            href: 'https://api.resonate.coop/v3/docs',
            label: 'API 3.0',
            position: 'right',
          },
          {
            href: 'https://api.resonate.coop/v2/docs',
            label: 'API 2.0',
            position: 'right',
          },
          {
            href: 'https://github.com/resonatecoop',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Basics',
                to: '/docs/category/tutorial---basics',
              },
              {
                label: 'Ecosystem',
                to: '/docs/category/tutorial---ecosystem',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Web Player',
                href: 'https://stream.resonate.coop/',
              },
              {
                label: 'Forum',
                href: 'https://community.resonate.is/',
              },
              {
                label: 'Handbook',
                href: 'https://community.resonate.is/docs',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/resonatecoop',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'API 3.0',
                href: 'https://api.resonate.coop/v3/docs',
              },
              {
                label: 'API 2.0',
                href: 'https://api.resonate.coop/v2/docs',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/resonatecoop',
              },
            ],
          },
        ],
        copyright: `Copyright © 2015 - ${new Date().getFullYear()} Resonate.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
