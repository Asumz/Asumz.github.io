import { defineConfig } from 'vitepress'
import { search as zhSearch } from './zh'

export const shared = defineConfig({
    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,

    // sitemap: {
    //     hostname: 'https://asumz.pages.dev',
    //     transformItems(items) {
    //         return items.filter(item => !item.url.includes('migration'))
    //     }
    // },

    /* prettier-ignore */
    head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    // ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh' }],
    ['meta', { property: 'og:title', content: '方向的个人网站 - 记录值得分享的内容' }],
    ['meta', { property: 'og:site_name', content: '方向的个人网站' }],
    ['meta', { property: 'og:image', content: 'https://asumz.pages.dev/fx-og.svg' }],
    ['meta', { property: 'og:url', content: 'https://asumz.pages.dev/' }],
  ],

    themeConfig: {
        logo: { src: '/favicon.svg', width: 24, height: 24 },

        // socialLinks: [
        //     { icon: 'github', link: 'https://github.com/Asumz' }
        // ],

        search: {
            provider: 'local',
            options: {
                locales: { ...zhSearch }
            }
        }
    }
})
