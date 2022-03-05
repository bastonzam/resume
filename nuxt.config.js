import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Portfolio | %s',
    title: 'Home',
    meta: [
      { charset: 'utf-8' },
      {
        hid: 'description',
        name: 'description',
        content: 'My portfolio of Nadthaphon',
      },
      { name: 'ROBOTS', content: 'NOINDEX, NOFOLLOW' },
      { name: 'HandheldFriendly', content: 'true' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, shrink-to-fit=no", user-scalable=no',
      },
    ],
    link: [
      // {
      //   rel: 'icon',
      //   type: 'image/x-icon',
      //   href: '/resume/favicon.ico',
      // },
    ],
  },
  target: 'static',
  loading: { color: '#ef0078' },
  generate: {
    routes: function () {
      return ['/resume/']
    },
  },
  router: {
    base: '/resume/',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'other',
        path: '*',
        component: resolve(__dirname, 'pages/index.vue/'),
      })
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/custom.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: '#565c5e',
          accent: '#fbe2f0',
          secondary: '#424242',
          info: '#00bcd4',
          warning: '#fff59d',
          error: '#ff6e40',
          success: '#81c784',
          text: '#fff',
        },
      },
      themes: {
        dark: {
          primary: '#565c5e',
          accent: '#fbe2f0',
          secondary: '#424242',
          info: '#00bcd4',
          warning: '#fff59d',
          error: '#ff6e40',
          success: '#81c784',
          text: '#fff',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
