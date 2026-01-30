import { webcrypto } from 'node:crypto'

if (!globalThis.crypto?.subtle) {
  // only patch if subtle is missing
  Object.defineProperty(globalThis, 'crypto', {
    value: webcrypto,
    configurable: true,
  })
}

// summa for git
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap' // ✅ sitemap module added
  ],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/thaya.ico' }
      ],
      meta: [
        { name: 'google-site-verification', content: 'ABC123xyz...' } // ✅ GSC verification code
      ]
    }
  },

  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },

  // ✅ Sitemap configuration block
  sitemap: {
    hostname: 'https://thayaads.com',
    gzip: true,
    routes: [
      '/', 
      '/AboutUs', 
      '/OurServices', 
      '/Clients', 
      '/FeaturedProjects', 
      '/Gallery', 
      '/MakingVideo', 
      '/Categories'
    ]
  }
})