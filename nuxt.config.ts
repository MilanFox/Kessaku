// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';
import { routes } from './config/routes';

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/sitemap',
    '@pinia/nuxt',
    '@storyblok/nuxt',
    '@vercel/speed-insights',
    '@vueuse/nuxt',
    'nuxt-gtag',
  ],

  components: [
    { path: './components', pathPrefix: false },
  ],

  devtools: { enabled: true },

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
      title: 'Meisterstücke für kleine Entdecker',
      titleTemplate: '%s · Kessaku Kids',
    },
  },

  css: ['~/assets/scss/main.scss'],

  site: {
    url: process.env.APP_BASE_URL,
  },

  runtimeConfig: {
    basicAuthEnabled: false,
    basicAuthUsername: '',
    basicAuthPassword: '',
  },

  alias: {
    '@assets': resolve(__dirname, './assets'),
    '@config': resolve(__dirname, './config'),
    '@components': resolve(__dirname, './app/components'),
    '@atoms': resolve(__dirname, './app/components/atoms'),
    '@molecules': resolve(__dirname, './app/components/molecules'),
    '@organisms': resolve(__dirname, './app/components/organisms'),
    '@sb': resolve(__dirname, './app/storyblok'),
    '@stores': resolve(__dirname, './app/stores'),
    '@composables': resolve(__dirname, './app/composables'),
    '@constants': resolve(__dirname, './app/constants'),
    '@server': resolve(__dirname, './server'),
    '@layouts': resolve(__dirname, './app/layouts'),
    '@middleware': resolve(__dirname, './app/middleware'),
  },

  routeRules: {
    [`${routes.STYLEGUIDE}/**`]: { appLayout: 'styleguide' },
  },

  sourcemap: {
    server: true,
    client: true,
  },

  compatibilityDate: '2024-04-03',

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/global.scss" as *;',
        },
      },
    },
  },

  postcss: {
    plugins: {
      'postcss-pxtorem': {
        rootValue: 16,
        unitPrecision: 3,
        propList: ['*', '!border*'],
        replace: true,
        mediaQuery: true,
        minPixelValue: 2,
      },
    },
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  gtag: {
    id: process.env.NODE_ENV === 'development'
      ? process.env.NUXT_PUBLIC_GTAG_LOCAL_ID
      : (process.env.VERCEL_ENV === 'preview'
          ? (process.env.NUXT_PUBLIC_GTAG_UAT_ID || process.env.NUXT_PUBLIC_GTAG_PROD_ID)
          : process.env.NUXT_PUBLIC_GTAG_PROD_ID),
    enabled: true
  },

  sitemap: {
    sources: ['/api/__sitemap__/urls'],
    exclude: [`${routes.STYLEGUIDE}/**`],
  },

  storyblok: {
    accessToken: 'invalid',
    bridge: true,
    apiOptions: { region: 'eu' },
  },
});
