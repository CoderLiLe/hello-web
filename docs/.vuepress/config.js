import { defineUserConfig } from 'vuepress'
import { hopeTheme } from 'vuepress-theme-hope'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Hello Web - 前端学习笔记',
  description: '前端相关笔记和资料整理，包含HTML、CSS、JavaScript、Vue等前端技术的学习笔记和代码示例',
  
  theme: hopeTheme({
    logo: '/logo.png',
    repo: 'CoderLiLe/hello-web',
    docsDir: 'docs',
    
    navbar: [
      { text: '首页', link: '/' },
      { text: 'HTML/CSS', link: '/html-css/' },
      { text: 'JavaScript', link: '/javascript/' },
      { text: 'Vue.js', link: '/vue/' },
      { text: '代码示例', link: '/examples/' },
      { text: '编码规范', link: '/code-guide/' },
    ],
    
    sidebar: {
      '/html-css/': [
        {
          text: 'HTML/CSS基础',
          collapsible: true,
          children: [
            '/docs/01start_web.md',
            '/docs/02HTML.md',
            '/docs/03CSS.md',
            '/docs/04HTML5.md',
            '/docs/05CSS3.md',
          ]
        }
      ],
      '/javascript/': [
        {
          text: 'JavaScript学习',
          collapsible: true,
          children: [
            '/docs/06JS.md',
            '/docs/07JS.md',
            '/docs/08JS.md',
            '/docs/09JS.md',
            '/docs/10JS.md',
          ]
        }
      ],
      '/code-guide/': [
        {
          text: '编码规范',
          collapsible: true,
          children: [
            '/docs/html_code_guide.md',
            '/docs/css_code_guide.md',
            '/docs/js_code_guide.md',
          ]
        }
      ]
    },
    
    plugins: {
      mdEnhance: {
        codetabs: true,
        tabs: true,
        sub: true,
        sup: true,
        align: true,
        attrs: true,
        footnote: true,
        mark: true,
        tasklist: true,
      },
    },
  }),
})