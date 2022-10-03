
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Zesty Market',
  tagline: 'Resources and Documentation',
  url: 'https://docs.zesty.market/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/zesty.png',
  organizationName: 'zestymarket', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  
  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        gtag: {
          trackingID: 'G-4EWNW4EEDX',
          anonymizeIP: true,
        },
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guides',
        path: './docs/guides/',
        routeBasePath: 'guides/',
        sidebarPath: require.resolve('./sidebars/guides-sidebar.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'system-overview',
        path: './docs/system-overview/',
        routeBasePath: 'system-overview/',
        sidebarPath: require.resolve('./sidebars/system-sidebar.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'smart-contracts',
        path: './docs/smart-contracts/',
        routeBasePath: 'smart-contracts/',
        sidebarPath: require.resolve('./sidebars/contracts-sidebar.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs',
        path: './docs/',
        routeBasePath: 'docs',
        sidebarPath: require.resolve('./sidebars/docs-sidebar.js'),
      },
    ],
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexBlog: false,
        },
      ],
      'plugin-image-zoom'
    ],

  themeConfig: 
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Zesty Market',
        logo: {
          alt: 'My Site Logo',
          src: 'img/zesty.png',
        },
        items: [
          {
            to: 'docs/intro',
            label: 'Introduction'
          },
          {
            to: '/guides/for-creators/create-space',
            label: 'Guides'
          },
          {
            to: 'system-overview/synopsis',
            label: 'System'
          },
          {
            to: 'smart-contracts/overview',
            label: 'Smart Contracts'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/4tcveDjBuD',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/zestymarket',
              },
              {
                label: 'Github',
                href: 'https://github.com/zestymarket'
              }
            ],
          },
        ],
      },

      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true
      },

      zoomSelector: '.markdown :not(em) > img',

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;