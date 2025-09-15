export default defineNuxtConfig({
  ssr: false,

  router: {
    base: '/'
  },

  app: {
    head: {
      title: 'Seeding Solidarity',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Seeding Solidarity' },
        { name: 'format-detection', content: 'telephone=no' },
        {
          name: 'apple-mobile-web-app-title',
          content: 'Seeding Solidarity'
        },
        {
          name: 'og:title',
          property: 'og:title',
          content: 'Seeding Solidarity'
        },
        {
          name: 'og:site_name',
          property: 'og:site_name',
          content: 'Seeding Solidarity'
        },
        {
          name: 'og:description',
          property: 'og:description',
          content: 'Map of the solidarity economy in NYC'
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      link: [{ rel: "preconnect", href: "https://fonts.googleapis.com" }],
      link: [{ rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true }],
      link: [{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&family=Work+Sans:wght@400;500;700&display=swap" }],
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'mapbox-gl/dist/mapbox-gl.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
  },

  modules: ['@pinia/nuxt'],

  runtimeConfig: {
    public: {
      airtableApiKey: '',
    },
  },

  compatibilityDate: '2025-09-14',
})
