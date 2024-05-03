import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: '方向的个人网站',
    description: "Fang Xiang's Personal Website",
    head: [['link', { rel: 'icon', href: '/favicon.svg' }]],
    cleanUrls: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '主页', link: '/' },
            { text: '博客', link: '/web-technology/thinking-about-projects' }
        ],

        sidebar: [
            {
                text: 'JavaScript'
            },
            {
                text: 'CSS'
            },
            {
                text: 'Web 开发技术',
                items: [
                    {
                        text: '项目优化以及最佳实践',
                        link: '/web-technology/thinking-about-projects'
                    },
                    {
                        text: 'HTTP缓存',
                        link: '/web-technology/http-cache'
                    }

                    // {
                    //     text: '项目功能点',
                    //     link: '/web-technology/points-of-projects'
                    // }
                ]
            }
        ],

        socialLinks: [{ icon: 'github', link: 'https://github.com/Asumz' }]
    }
})
