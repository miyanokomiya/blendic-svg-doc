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
          link: '/mode',
          children: [
            { text: 'Object', link: '/mode/object' },
            { text: 'Edit', link: '/mode/edit' },
            { text: 'Pose', link: '/mode/pose' },
            { text: 'Weight Paint', link: '/mode/weight-paint' },
          ],
        },
        {
          text: 'Animation',
          link: '/animation',
          children: [
            { text: 'Action', link: '/animation/action' },
            { text: 'Controller', link: '/animation/controller' },
            { text: 'Keyframe', link: '/animation/Keyframe' },
          ],
        },
        {
          text: 'Constraint',
          link: '/constraint',
          children: [
            { text: 'IK', link: '/constraint/ik' },
            { text: 'Copy Location', link: '/constraint/copy-location' },
            { text: 'Copy Rotation', link: '/constraint/copy-rotation' },
            { text: 'Limit Rotation', link: '/constraint/limit-rotation' },
          ],
        },
        {
          text: 'History',
          link: '/history',
        },
        {
          text: 'Project File',
          link: '/project',
        },
        {
          text: 'Import',
          link: '/import',
        },
        {
          text: 'Export',
          link: '/export',
        },
      ],
    },
  },
}
