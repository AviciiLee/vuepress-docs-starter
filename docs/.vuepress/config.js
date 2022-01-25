module.exports = {
  title: "Aviciilee's Blog",
  description: 'starter',
  themeConfig: {
    nav:[
      {
        text: '文章',
        items: [
          {text: '正则表达式', link: '/blog/正则表达式'}
        ]
      },
      {text: '组件库', link: '/components/' },
      {text: '常用网站', link: '/links/'}
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
    },
  base: '/'
}