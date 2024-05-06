import type { DefaultTheme } from 'vitepress'

export default {
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
                },
                {
                    text: '尾调用优化',
                    link: '/doc-javascript/tco'
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
                    link: '/doc-css/index'
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
    ],
    '/examples': [
        {
            text: 'css滚动吸附',
            link: '/examples/scroll-snap'
        }
    ]
} satisfies DefaultTheme.Sidebar
