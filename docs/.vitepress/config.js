module.exports = {
  lang: 'en-US',
  title: 'Blendic SVG',
  description:
    'Documentation for Blendic SVG - SVG animation editor for web inspired by Blender',

  themeConfig: {
    repo: 'miyanokomiya/blendic-svg-doc',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    nav: [
      {
        text: 'Blendic SVG',
        link: 'https://github.com/miyanokomiya/blendic-svg',
      },
    ],

    sidebar: {
      '/': [
        { text: 'Introduction', link: '/index' },
        { text: 'Overview', link: '/overview' },
        { text: 'Quick Start', link: '/quick-start' },
      ],
    },
  },
}
