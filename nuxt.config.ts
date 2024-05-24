// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/robots', '@nuxtjs/sitemap', "@nuxtjs/supabase", '@pinia/nuxt', 'nuxt-icon'],
  runtimeConfig: {
    royalution: {
      apiKey: process.env.NUXT_ONBOARDING_API_KEY,
    },
    openAi: {
      secretKey: process.env.NUXT_OPENAI_API_KEY,
    },
  },
  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/login',
      exclude: ['/', '/callback']
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
      title: 'creator mate',
      meta: [
        {name: 'description', content: 'Creatormate is the all-in-one workspace for creators, join our waiting list now!'},
        {name: 'keywords', content: 'creatormate, optimize instagram, how do i grow my instagram, instagram, grow, optimize, platform, creator, mate, facebook, meta, waitlist, joinlist, creatormate.com creatormate.net'},
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap'
        }
      ]
    }
  }
})