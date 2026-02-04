import { webcrypto } from 'node:crypto'
import categories from './data/categories.js'

// ✅ Patch crypto for Cloudflare / Nitro (SSR)
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

  modules: [
    '@nuxtjs/tailwindcss',
    // ⚠️ nuxt-simple-sitemap supports Nuxt 3.x officially
    // Works in Nuxt 4 with compatibility mode (can remove if issues)
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

  // ✅ Cloudflare Pages + Static Prerender Safe Config
  nitro: {
    preset: 'cloudflare-pages',
    prerender: {
      // Only prerender public static pages
      routes: [
        '/',
        '/AboutUs',
        '/OurServices',
        '/FeaturedProjects',
        '/Gallery',
        '/Categories',
        ...categoryRoutes
      ],

      // ❌ Do NOT prerender dynamic / client-only pages
      ignore: [
        '/Clients',
        '/MakingVideo'
      ],

      // Optional safety: build should not fail even if some page errors
      failOnError: false
    }
  },

  // ✅ Sitemap (only public SEO pages)
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
