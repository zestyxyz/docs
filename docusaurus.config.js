
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Zesty Market',
  tagline: 'Resources and Documentation',
  url: 'https://zesty-docusaurus.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/zesty.png',
  organizationName: 'Zesty Market', // Usually your GitHub org/user name.
  projectName: 'zesty-docusaurus', // Usually your repo name.

  
  presets: [
    [
      '@docusaurus/preset-classic',
      ({
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
        path: './guides/',
        routeBasePath: 'guides/',
        sidebarPath: require.resolve('./sidebars/guides-sidebar.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'system-overview',
        path: './system-overview/',
        routeBasePath: 'system-overview/',
        sidebarPath: require.resolve('./sidebars/system-sidebar.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'smart-contracts',
        path: './smart-contracts/',
        routeBasePath: 'smart-contracts/',
        sidebarPath: require.resolve('./sidebars/contracts-sidebar.js'),
      },
    ],
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexBlog: false,
      },
    ],
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
            to: '/guides/welcome',
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
                href: 'https://discord.gg/4Jc3XhM5mp',
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
        respectPrefersColorScheme: true,
        switchConfig: {
          darkIcon: '🌙',
          lightIcon: '☀️',
        },
      },
      
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
