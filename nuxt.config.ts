// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/robots', '@nuxtjs/sitemap', "@nuxtjs/supabase", '@pinia/nuxt', 'nuxt-icon', '@nuxt/image', '@nuxt/icon', '@vueuse/nuxt'],
    plugins: ['~/plugins/click-outside.ts'],

    runtimeConfig: {
        royalution: {
            apiKey: process.env.NUXT_ONBOARDING_API_KEY,
        },
        openAi: {
            secretKey: process.env.NUXT_OPENAI_API_KEY,
        },
    },
    image: {
        domains: ['accounts.creatormate.com'],
    },
    supabase: {
        cookieOptions: {
            domain: process.env.NUXT_MODE == 'Development' ? '.localhost' : ".creatormate.com",
            sameSite: "strict"
        },
        redirectOptions: {
            login: '',
            callback: '/callback',
            exclude: ['/', '/callback', '/work', '/about-us', '/select-login', '/privacy-policy', '/terms-of-service']
        }
    },

    sitemap: {
        //@ts-ignore
        path: "/sitemap.xml",
        gzip: true,
        cacheTime: 1000 * 60 * 15,
        hostname: process.env.WEBSITE_URL
    },

    robots: {
        configPath: './robots.config.js',
    },

    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            title: 'creatormate',
            meta: [
                {name: 'twitter:card', content: "summary_large_image"},
                {name: 'twitter:site', content: "https://creatormate.com"},
                {name: 'twitter:title', content: "a creator’s best friend"},
                {
                    name: 'twitter:description',
                    content: "it’s the all-in-one workspace for content creators to build, grow & monetise their community."
                },
                {name: 'twitter:image', content: "https://creatormate.com/web_banner.png"},
                {name: 'og:title', content: "a creator’s best friend"},
                {
                    name: 'og:description',
                    content: "it’s the all-in-one workspace for content creators to build, grow & monetise their community."
                },
                {name: 'og:image', content: "https://creatormate.com/web_banner.png"},
                {name: 'og:url', content: "https://creatormate.com"},
                {
                    name: 'description',
                    content: 'it’s the all-in-one workspace for content creators to build, grow & monetise their community.!'
                },
                {
                    name: 'keywords',
                    content: 'creatormate, optimize instagram, how do i grow my instagram, instagram, grow, optimize, platform, creator, mate, facebook, meta, waitlist, joinlist, creatormate.com creatormate.net'
                },
            ],
            script: [
                {
                    async: true,
                    id: "vtag-ai-js",
                    src: "https://r2.leadsy.ai/tag.js",
                    'data-pid': "1BkuQzldPanZAl2qF",
                    'data-version': "062024"
                }
            ],

            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://use.typekit.net/amp4tas.css'
                },
            ]
        }
    },

    compatibilityDate: '2024-11-18'
})