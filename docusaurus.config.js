module.exports = {
  title: 'SkyCiv API V3',
  tagline: 'Structural Analysis & Design',
  url: 'https://skyciv.com',
  baseUrl: '/api/v3/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'skyciv', // Usually your GitHub org/user name.
  projectName: 'api-v3-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'SkyCiv API',
      logo: {
        alt: 'SkyCiv Logo',
        src: 'img/logo.ico',
      },
      items: [
        {
          to: 'docs/getting-started',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/skyciv',
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
              label: 'Getting Started',
              to: 'docs/getting-started',
            },
            {
              label: 'The Request Object',
              to: 'docs/the-request-object',
            },
            {
              label: 'The Model Object',
              to: 'docs/s3d-model',
            },
            {
              label: 'API Functions',
              to: 'docs/the-request-object#functions',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/skyciv',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/skyciv',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/SkyCivOnline',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/skyciv',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SkyCiv`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
