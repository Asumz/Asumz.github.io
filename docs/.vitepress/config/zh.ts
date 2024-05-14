// import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

// const require = createRequire(import.meta.url)

export const zh = defineConfig({
    lang: 'zh-Hans',
    title: '方向的个人网站',
    description: '记录值得分享的内容',

    themeConfig: {
        nav: nav(),

        sidebar: {
            '/web/': { base: '/web/', items: sidebarWeb() },
            '/examples/': { base: '/examples/', items: sidebarExamples() }
        },

        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        outline: {
            label: '页面导航'
        },

        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium'
            }
        },

        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: 'Web 开发技术',
            link: '/web/http-cache',
            activeMatch: '/web/'
        },
        {
            text: '示例',
            link: '/examples/scroll-snap',
            activeMatch: '/examples/'
        }
    ]
}

function sidebarWeb(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Web 开发技术',
            collapsed: false,
            items: [
                { text: 'HTTP 缓存', link: 'http-cache' },
                { text: '了解 JSBridge', link: 'jsbridge' },
                { text: '加载 SVG', link: 'load-svg' },
                { text: '学习 SEO', link: 'seo' }
            ]
        },
        {
            text: 'JavaScript',
            collapsed: false,
            base: '/web/javascript/',
            items: [
                { text: '实现一个bind函数', link: 'bind-polyfill' },
                { text: '实现一个cloneDeep函数', link: 'clone-deep' },
                { text: '尾调用优化', link: 'tco' }
            ]
        },
        {
            text: 'CSS',
            base: '/web/css/',
            collapsed: false,
            items: [{ text: '理解 BFC', link: 'bfc' }]
        }
    ]
}

function sidebarExamples(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '示例',
            collapsed: false,
            items: [{ text: 'css滚动吸附', link: 'scroll-snap' }]
        }
    ]
}

export const search: DefaultTheme.LocalSearchOptions['locales'] = {
    root: {
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
