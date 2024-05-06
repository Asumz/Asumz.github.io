import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: '方向的个人网站',
    description: "Fang Xiang's Personal Website",
    head: [['link', { rel: 'icon', href: '/favicon.svg' }]],
    cleanUrls: true,

    themeConfig: {
        logo: '/favicon.svg',

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

        // 右侧文章索引级别
        // outline: 'deep',
        // 右侧索引展示文本
        outlineTitle: '页面导航',

        // 文章底部切换按钮展示文本
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        // git提交时间展示文本
        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'short'
            }
        },

        // md 中使用外部链接时展示额外的图标
        externalLinkIcon: true,

        // 右上方社交链接，提供了预设的icon，也可以自定义填写{ svg: string }
        socialLinks: [{ icon: 'github', link: 'https://github.com/Asumz' }],

        // 移动端切换主题展示文本
        darkModeSwitchLabel: '切换主题',

        // 移动端展示弹出sidebar展示文本
        sidebarMenuLabel: '菜单',

        // 移动端切换语言展示文本
        langMenuLabel: '切换语言',

        // 回到顶部展示文本
        returnToTopLabel: '回到顶部',

        // 搜索功能
        search: {
            // 使用本地搜索
            provider: 'local',
            options: {
                // 配置搜索组件展示文本
                translations: {
                    button: {
                        buttonText: '搜索文档'
                    },
                    modal: {
                        displayDetails: '显示详情',
                        noResultsText: '未找到相关结果',
                        resetButtonTitle: '清除',
                        footer: {
                            closeText: '关闭',
                            selectText: '选择',
                            navigateText: '切换'
                        }
                    }
                }
            }
        }
    }
})
