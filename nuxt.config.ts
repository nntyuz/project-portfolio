// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      'postcss-import': {},
      autoprefixer: {},
      'postcss-nested': {},
    },
  },
  modules: [
    '@unocss/nuxt',
  ],
  components: {
    dirs: [
      {
        path: '~/components',
        global: true,
      },
    ],
  },
  css: ['~/assets/styles/fonts.css', '~/assets/styles/main.css'],
})
