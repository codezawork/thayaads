import { webcrypto } from 'node:crypto'
import categories from './data/categories.js'

// ✅ Patch crypto for Cloudflare / Nitro
if (!globalThis.crypto?.subtle) {
  Object.defineProperty(globalThis, 'crypto', {
    value: webcrypto,
    configurable: true,
  })
}

// ✅ Convert object keys → route paths
const categoryRoutes = Object.keys(categories).map(key => `/category/${key}`)

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  // ✅ IMPORTANT: Enable SSR so meta tags appear in HTML
  ssr: true,

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-simple-sitemap'
  ],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/thaya.ico' }
      ],
      meta: [
        { name: 'google-site-verification', content: 'ABC123xyz...' }
      ]
    }
  },

  postcss: {
    plugins: {
      autoprefixer: {}
    }
  },

  // ✅ Cloudflare Pages Static Output (Pre-rendered HTML)
  nitro: {
    preset: 'cloudflare-pages',

    prerender: {
      crawlLinks: true, // auto-detect internal links

      routes: [
        '/',
        '/AboutUs',
        '/OurServices',
        '/FeaturedProjects',
        '/Gallery',
        '/Categories',
        ...categoryRoutes
      ],

      ignore: [
        '/Clients',
        '/MakingVideo'
      ],

      failOnError: false
    }
  },

  // ✅ Sitemap for SEO
  sitemap: {
    siteUrl: 'https://thayaads.com',
    gzip: true,
    routes: [
      '/',
      '/AboutUs',
      '/OurServices',
      '/FeaturedProjects',
      '/Gallery',
      '/Categories',
      ...categoryRoutes
    ]
  }
})
