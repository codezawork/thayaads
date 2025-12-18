import { webcrypto } from 'node:crypto'

if (!globalThis.crypto?.subtle) {
  // only patch if subtle is missing
  Object.defineProperty(globalThis, 'crypto', {
    value: webcrypto,
    configurable: true,
  })
}


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],

  css: ['~/assets/css/main.css'],
  
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/thaya.ico' }
      ]
    }
  },

  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
})
