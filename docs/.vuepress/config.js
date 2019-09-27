
module.exports = {
  base: '/blog/',
  head: [],
  port: 3000,
  host: '127.0.0.1',
  extraWatchFiles: [ // 额外监听文件
    '/README.md'
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '今天是周五',
      description: '前端技术博客'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Today is Friday',
      description: 'Front-end Technology Blog'
    }
  },
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    searchMaxSuggestions: 5,
    repo: 'https://github.com/dongbusi/blog',
    repoLabel: 'Github',
    editLinks: true,
    displayAllHeaders: true,
    docsRepo: 'https://github.com/dongbusi/blog',
    docsDir: 'docs',
    docsBranch: 'master',
    sidebarDepth: 2,
    locales: {
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        nav: [
          { text: 'blog', link: 'http://www.nantiewang.cn'},
          { text: 'home', link: '/en/'},
          { text: 'layout', items: [
            { text: 'HTML', link: '/en/dom/'},
            { text: 'CSS', link: '/en/css/'},
            { text: 'SCSS/SASS', link: '/en/css-scss/'},
          ]},
          { text: 'else', link: '/else/'}
        ],
        sidebar: 'auto',
        lastUpdated: 'Last Updated',
      },
      '/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        nav: [
          { text: '博客', link: 'http://www.nantiewang.cn'},
          { text: '主页', link: '/'},
          { text: '布局', items: [
            { text: 'HTML', link: '/dom/'},
            { text: 'CSS', link: '/css/'},
            { text: 'SASS', link: '/css-scss/'},
          ]},
          { text: '其他', link: '/else/'},
        ],
        sidebar: 'auto',
        lastUpdated: '最后更新时间',
      }
    }
  },
  plugins: [
    '@vuepress/back-to-top', '@vuepress/active-header-links',
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).format('lll')
        }
      }
    ]
  ]
}