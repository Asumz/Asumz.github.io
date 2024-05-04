import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: '方向的个人网站',
    description: "Fang Xiang's Personal Website",
    head: [['link', { rel: 'icon', href: '/favicon.svg' }]],
    cleanUrls: true,
    themeConfig: {
        logo: '/favicon.svg',
        externalLinkIcon: true,
        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'short'
            }
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        search: {
            provider: 'local'
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '主页', link: '/' },
            { text: 'JavaScript', link: '/doc-javascript/bind-polyfill' },
            { text: 'CSS', link: '/doc-css/demos' },
            { text: 'Web 开发技术', link: '/web-technology/http-cache' }
        ],
        sidebar: {
            '/doc-javascript': [
                {
                    text: 'JavaScript',
                    items: [
                        {
                            text: '实现一个bind函数',
                            link: '/doc-javascript/bind-polyfill'
                        },
                        {
                            text: '实现一个cloneDeep函数',
                            link: '/doc-javascript/clone-deep'
                        }
                    ]
                }
            ],
            '/doc-css': [
                {
                    text: 'CSS',
                    items: [
                        {
                            text: '有趣的css',
                            link: '/doc-css/demos'
                        }
                    ]
                }
            ],
            '/web-technology': [
                {
                    text: 'Web 开发技术',
                    items: [
                        {
                            text: 'HTTP缓存',
                            link: '/web-technology/http-cache'
                        },
                        {
                            text: '项目优化以及最佳实践',
                            link: '/web-technology/thinking-about-projects'
                        }
                    ]
                }
            ]
        },

        socialLinks: [{ icon: 'github', link: 'https://github.com/Asumz' }]
    }
})
