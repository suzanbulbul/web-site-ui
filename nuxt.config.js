export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'web-site-ui',
    htmlAttrs: {
      lang: 'tr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  i18n: {
    langDir: 'i18n',
    defaultLocale: 'tr',
    fallbackLocale: 'tr',
    strategy: 'prefix',
    detectBrowserLanguage: false,
    lazy: true,
    locales: [
      { code: 'tr', iso: 'tr', file: 'tr' }
      // { code: 'en', iso: 'en', file: 'en' },

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/fonts/style.css',
    '~/assets/scss/style.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',   
    //https://vuejsprojects.com/vue-carousel 
    { src: '~/plugins/carousel.js', mode: 'client' }

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
     // https://go.nuxtjs.dev/axios
     '@nuxtjs/axios',
    //https://www.npmjs.com/package/@nuxtjs/dotenv     
     '@nuxtjs/dotenv',
    // https://i18n.nuxtjs.org/setup
     '@nuxtjs/i18n'
  ],
  
  env: {
    strapiBaseUri: process.env.API_URL,
    strapiBaseToken: process.env.API_TOKEN
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, { isDev, isClient }) {
      config.node = {
           fs: 'empty'
       }
      // ....
   }
  },
  axios: {
    baseURL: 'https://dilek-store-api.netlify.app/'
  },
  
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: 'http://localhost:1337/'
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: 'http://localhost:1337/'
    }
  },
  publicRuntimeConfig: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    strapiURL: 'http://localhost:1337'
  },
}
