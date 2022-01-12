const { path } = require('@vuepress/utils')

module.exports = {
  title: 'vuepress-docs-starter',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    navbar: [
      {
        text: '组件库',
        children: [
          {
            text: '业务组件',
            children: ['/components/table.md'],
          },
        ],
      }
    ],
  },
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components')
      },
    ],
  ]
}