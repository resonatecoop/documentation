// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Resonate Documentation',
  tagline: 'Documenting the tech behind the co-operative music streaming service',
  url: 'https://resonate.coop',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'log',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'resonatecoop', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  deploymentBranch: 'gh-pages', // GitHub Pages requires this to be explicit as a config field or environment variable.
  trailingSlash: false, // GitHub Pages adds a trailing slash to Docusaurus URLs by default.
                        // It is recommended to set a trailingSlash config(true or false, not undefined).

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      "docusaurus-plugin-remote-content",
      {
        name: "api",
        sourceBaseUrl: "https://raw.githubusercontent.com/resonatecoop/api/main/",
        outDir: "docs/active-development",
        documents: ["README.md"],
        modifyContent(filename, content) {
          if (filename.includes("README")) {
            return {
              filename: "api.md",
              content: `---
sidebar_position: 1
title: API
---

Explore the <code>[api](https://github.com/resonatecoop/api)</code> repository...

${content}`,
            }
          }
          return undefined
        },
      },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        name: "beam",
        sourceBaseUrl: "https://raw.githubusercontent.com/resonatecoop/beam/main/",
        outDir: "docs/active-development",
        documents: ["README.md"],
        modifyContent(filename, content) {
          if (filename.includes("README")) {
            return {
                filename: "beam.md",
                content: `---
sidebar_position: 2
title: Beam
---

Explore the <code>[beam](https://github.com/resonatecoop/beam)</code> desktop app repository...

${content}`,
            }
          }
          return undefined
        },
      },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        name: "mobile",
        sourceBaseUrl: "https://raw.githubusercontent.com/resonatecoop/mobile/main/",
        outDir: "docs/active-development",
        documents: ["README.md"],
        modifyContent(filename, content) {
          if (filename.includes("README")) {
            return {
              filename: "mobile.md",
              content: `---
sidebar_position: 3
title: Mobile
---

Explore the mobile & tablet <code>[mobile](https://github.com/resonatecoop/mobile)</code> repository...
${content}`,
            }
          }
          return undefined
        },
      },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        name: "documentation",
        sourceBaseUrl: "https://raw.githubusercontent.com/resonatecoop/documentation/main/",
        outDir: "docs/active-development",
        documents: ["README.md"],
        modifyContent(filename, content) {
          if (filename.includes("README")) {
            return {
              filename: "documentation.md",
              content: `---
sidebar_position: 4
title: Documentation
---

Explore the <code>[documentation](https://github.com/resonatecoop/mobile)</code> repository...
${content}`,
            }
          }
          return undefined
        },
      },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        name: "website",
        sourceBaseUrl: "https://raw.githubusercontent.com/resonatecoop/website/develop/",
        outDir: "docs/legacy",
        documents: ["README.md"],
        modifyContent(filename, content) {
          if (filename.includes("README")) {
            return {
              filename: "website.md",
              content: `---
sidebar_position: 1
title: Website
---

Explore the Resonate <code>[website](https://github.com/resonatecoop/website)</code> repository...

${content}`,
            }
          }
          return undefined
        },
      },
  ],
    [
        "docusaurus-plugin-remote-content",
        {
          name: "stream",
          sourceBaseUrl: "https://raw.githubusercontent.com/resonatecoop/stream/development/",
          outDir: "docs/legacy",
          documents: ["README.md"],
          modifyContent(filename, content) {
            if (filename.includes("README")) {
              return {
                filename: "stream.md",
                content: `---
sidebar_position: 2
title: Stream
---

Explore the monorepo for the web player, the <code>[stream](https://github.com/resonatecoop/stream)</code> repository...

${content.replace('<!-- Standard -->', '').replace('stream2own', '')}`,
              }
            }
            return undefined
          },
        }
    ],
    [
        "docusaurus-plugin-remote-content",
        {
          name: "id",
          sourceBaseUrl: "https://raw.githubusercontent.com/resonatecoop/id/develop/",
          outDir: "docs/legacy",
          documents: ["README.md"],
          modifyContent(filename, content) {
            if (filename.includes("README")) {
              return {
                filename: "id.md",
                content: `---
sidebar_position: 3
title: ID Server
---

Explore the <code>[id](https://github.com/resonatecoop/id)</code> server repository...

${content}`,
              }
            }
            return undefined
          },
        },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        name: "stream-app",
        sourceBaseUrl: "https://raw.githubusercontent.com/peterklingelhofer/stream-app/main/",
        outDir: "docs/legacy",
        documents: ["README.md"],
        modifyContent(filename, content) {
          if (filename.includes("README")) {
            return {
              filename: "stream-app.md",
              content: `---
sidebar_position: 4
title: Stream App
---

Explore the mobile & tablet <code>[stream-app](https://github.com/peterklingelhofer/stream-app)</code> repository...

${content}`,
            }
          }
          return undefined
        },
      },
    ],
    [
        "docusaurus-plugin-remote-content",
        {
          name: "user-api",
          sourceBaseUrl: "https://raw.githubusercontent.com/resonatecoop/user-api/master/",
          outDir: "docs/legacy",
          documents: ["README.md"],
          modifyContent(filename, content) {
            if (filename.includes("README")) {
              return {
                  filename: "user-api.md",
                  content: `---
sidebar_position: 5
title: User API
---

Explore the Golang-based <code>[user-api](https://github.com/resonatecoop/user-api)</code> repository...

${content}`,
              }
            }
            return undefined
          },
        }
    ],
    [
        "docusaurus-plugin-remote-content",
        {
          name: "user-api-client",
          sourceBaseUrl: "https://raw.githubusercontent.com/resonatecoop/user-api-client/master/",
          outDir: "docs/legacy",
          documents: ["README.md"],
          modifyContent(filename, content) {
            if (filename.includes("README")) {
              return {
                  filename: "user-api-client.md",
                  content: `---
sidebar_position: 6
title: User API Client
---

Explore the goswagger.io generated client for <code>user-api</code>, the <code>[user-api-client](https://github.com/resonatecoop/user-api-client)</code> repository...

${content}`,
              }
            }
            return undefined
          },
        },
    ],
    [
        "docusaurus-plugin-remote-content",
        {
          name: "verifiable-credentials",
          sourceBaseUrl: "https://raw.githubusercontent.com/resonatecoop/verifiable-credentials/master/",
          outDir: "docs/legacy",
          documents: ["readme.md"],
          modifyContent(filename, content) {
            if (filename.includes("readme")) {
              return {
                filename: "verifiable-credentials.md",
                content: `---
sidebar_position: 7
title: Verifiable Credentials
---

Explore the Verifiable Credentials Reference Implementation in the <code>[verifiable-credentials](https://github.com/resonatecoop/verifiable-credentials)</code> repository...

${content}`,
              }
            }
            return undefined
          },
        },
    ],
    [
        "docusaurus-plugin-remote-content",
        {
          name: "search",
          sourceBaseUrl: "https://raw.githubusercontent.com/resonatecoop/search/development/",
          outDir: "docs/legacy",
          documents: ["README.md"],
          modifyContent(filename, content) {
            if (filename.includes("README")) {
              return {
                filename: "search.md",
                content: `---
sidebar_position: 8
title: Search
---

Explore the <code>[search](https://github.com/resonatecoop/search)</code> repository...

${content.replace('## UI Design', '').replace('![alt text](./search.png "Search Figma Design")', '')}`,
              }
            }
            return undefined
          },
        },
    ],
    [
        "docusaurus-plugin-remote-content",
        {
          name: "upload",
          sourceBaseUrl: "https://raw.githubusercontent.com/resonatecoop/upload/main/",
          outDir: "docs/legacy",
          documents: ["README.md"],
          modifyContent(filename, content) {
            if (filename.includes("README")) {
              return {
                filename: "upload.md",
                content: `---
sidebar_position: 9
title: Upload
---

Explore the <code>[upload](https://github.com/resonatecoop/upload)</code> repository...

${content}`,
              }
            }
            return undefined
          },
        },
    ],
    [
        "docusaurus-plugin-remote-content",
        {
          name: "audio-process-queue",
          sourceBaseUrl: "https://raw.githubusercontent.com/resonatecoop/audio-process-queue/main/",
          outDir: "docs/legacy",
          documents: ["README.md"],
          modifyContent(filename, content) {
            if (filename.includes("README")) {
              return {
                filename: "audio-process-queue.md",
                content: `---
sidebar_position: 10
title: Audio Process Queue
---

Explore the <code>[audio-process-queue](https://github.com/resonatecoop/audio-process-queue)</code> repository...

${content}`,
              }
            }
            return undefined
          },
        },
    ],
    [
        "docusaurus-plugin-remote-content",
        {
          name: "image-process-queue",
          sourceBaseUrl: "https://raw.githubusercontent.com/resonatecoop/image-process-queue/main/",
          outDir: "docs/legacy",
          documents: ["README.md"],
          modifyContent(filename, content) {
            if (filename.includes("README")) {
              return {
                filename: "image-process-queue.md",
                content: `---
sidebar_position: 11
title: Image Process Queue
---

Explore the <code>[image-process-queue](https://github.com/resonatecoop/image-process-queue)</code> repository...

${content}`,
              }
            }
            return undefined
          },
        },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ({ docPath }) => {
            switch (true) {
              case docPath.includes('stream') && !docPath.includes('stream-app'):
                return 'https://github.com/resonatecoop/stream/edit/development/README.md';
              case docPath.includes('website'):
                return 'https://github.com/resonatecoop/website/edit/develop/README.md';
              case docPath.includes('id'):
                return 'https://github.com/resonatecoop/id/edit/develop/README.md';
              case docPath.includes('user-api'):
                return 'https://github.com/resonatecoop/user-api/edit/master/README.md';
              case docPath.includes('user-api-client'):
                return 'https://github.com/resonatecoop/user-api-client/edit/master/README.md';
              case docPath.includes('verifiable-credentials'):
                return 'https://github.com/resonatecoop/verifiable-credentials/edit/master/readme.md';
              case docPath.includes('search'):
                return 'https://github.com/resonatecoop/search/edit/development/README.md';
              case docPath.includes('upload'):
                return 'https://github.com/resonatecoop/upload/edit/main/README.md';
              case docPath.includes('audio-process-queue'):
                return 'https://github.com/resonatecoop/audio-process-queue/edit/main/README.md';
              case docPath.includes('image-process-queue'):
                return 'https://github.com/resonatecoop/image-process-queue/edit/main/README.md';
              case docPath.includes('beam'):
                return 'https://github.com/resonatecoop/beam/edit/main/README.md';
              case docPath.includes('mobile'):
                return 'https://github.com/resonatecoop/mobile/edit/main/README.md';
              case docPath.includes('api'):
                return 'https://github.com/resonatecoop/api/edit/main/README.md';
              case docPath.includes('documentation'):
                  return 'https://github.com/resonatecoop/documentation/edit/main/README.md';
              case docPath.includes('stream-app'):
                return 'https://github.com/peterklingelhofer/stream-app/edit/main/README.md';
              default:
                return `https://github.com/resonatecoop/documentation/edit/main/docs/${docPath}`;
            }
          },
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/resonatecoop/documentation/edit/main/',
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
            'aria-label': `Documentation for Resonate's tech stack`,
          },
          // // Hiding Legacy APIs from header
          // {
          //   href: 'https://api.resonate.coop/v3/docs',
          //   label: 'API 3.0',
          //   position: 'right',
          //   'aria-label': 'API version 3.0 documentation',
          // },
          // {
          //   href: 'https://api.resonate.coop/v2/docs',
          //   label: 'API 2.0',
          //   position: 'right',
          //   'aria-label': 'API version 2.0 documentation',
          // },
          // {
          //   href: 'https://api.resonate.ninja',
          //   label: 'User API',
          //   position: 'right',
          //   'aria-label': 'User API documentation',
          // },
          {
            href: 'https://github.com/resonatecoop',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repositories',
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
                label: 'Active Development',
                to: '/docs/category/active-development',
              },
              {
                label: 'Legacy',
                to: '/docs/category/active-development',
              },
            ],
          },
          {
            title: 'Legacy API',
            items: [
              {
                label: 'API 3.0',
                href: 'https://api.resonate.coop/v3/docs',
                'aria-label': 'API version 3.0 documentation',
              },
              {
                label: 'API 2.0',
                href: 'https://api.resonate.coop/v2/docs',
                'aria-label': 'API version 2.0 documentation',
              },
              {
                label: 'User API',
                href: 'https://api.resonate.ninja',
                'aria-label': 'User API documentation',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Web Player',
                href: 'https://stream.resonate.coop/',
                'aria-label': 'Stream music on the web player',
              },
              {
                label: 'Forum',
                href: 'https://community.resonate.coop/',
                'aria-label': 'Browse the Discourse Forum',
              },
              {
                label: 'Handbook',
                href: 'https://community.resonate.coop/docs',
                'aria-label': 'Read the Handbook and Guide',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/resonatecoop',
                'aria-label': `View Resonate's Twitter`,
              },
            ],
          },
        ],
        copyright: `Copyright © 2015 - ${new Date().getFullYear()} Resonate.`,
      },
      algolia: {
        appId: 'MVYIGUGQFL', // The application ID provided by Algolia
        apiKey: '046118e383b3a7dbd6e9dfeb7c9dca1a', // Public API key: it is safe to commit it
        indexName: 'resonate', // The index name provided by Algolia
        contextualSearch: true,
        searchPagePath: 'search', // Optional: path for search page that enabled by default (`false` to disable it)
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
