// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    'nuxt-gtag'
  ],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    classSuffix: ''
  },
  runtimeConfig: {
    mongoDBUri: process.env.MONGODB_COURSE_URI
  },
  nitro: {
    plugins: [
      'plugins/mongoose.js'
    ]
  },
  gtag: {
    id: process.env.NUXT_PUBLIC_GTAG_ID
  },
})
