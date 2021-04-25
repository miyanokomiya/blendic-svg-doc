module.exports = {
  base: process.env.BASE_PATH,
  lang: 'en-US',
  title: 'Blendic SVG',
  description:
    'Documentation for Blendic SVG - SVG animation editor for web inspired by Blender',

  themeConfig: {
    repo: 'miyanokomiya/blendic-svg-doc',
    docsDir: 'docs',
    docsBranch: 'main',
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
        {
          text: 'Mode',
          link: '/mode/index',
          children: [
            { text: 'Object', link: '/mode/object' },
            { text: 'Edit', link: '/mode/edit' },
            { text: 'Pose', link: '/mode/pose' },
            { text: 'Weight Paint', link: '/mode/weight-paint' },
          ],
        },
        {
          text: 'Animation',
          link: '/animation/index',
          children: [
            { text: 'Action', link: '/animation/action' },
            { text: 'Controller', link: '/animation/controller' },
            { text: 'Keyframe', link: '/animation/Keyframe' },
            { text: 'Action Sheet', link: '/animation/action-sheet' },
            { text: 'Graph Sheet', link: '/animation/graph-sheet' },
          ],
        },
        {
          text: 'Constraint',
          link: '/constraint/index',
          children: [
            { text: 'IK', link: '/constraint/ik' },
            { text: 'Copy Location', link: '/constraint/copy-location' },
            { text: 'Copy Rotation', link: '/constraint/copy-rotation' },
            { text: 'Limit Rotation', link: '/constraint/limit-rotation' },
          ],
        },
        {
          text: 'History',
          link: '/history/index',
        },
        {
          text: 'Project File',
          link: '/project/index',
        },
        {
          text: 'Import',
          link: '/import/index',
        },
        {
          text: 'Export',
          link: '/export/index',
        },
      ],
    },
  },
}
