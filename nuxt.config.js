export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.npm_package_name || "",
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel:"stylesheet prefetch", href:"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.0/components/icon.min.css"},
      { rel:"stylesheet", href:"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css", integrity:"sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ==", crossorigin:"anonymous", referrerpolicy:"no-referrer"},
    ],
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js",
        type: "application/javascript"
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js" , integrity:"sha512-dqw6X88iGgZlTsONxZK9ePmJEFrmHwpuMrsUChjAw1mRUhUITE5QU9pkcSox+ynfLhL15Sv2al5A0LVyDCmtUw==", crossorigin:"anonymous", referrerpolicy:"no-referrer",
        type: "application/javascript"
      },
      {
        src:"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js",
        type: "application/javascript"
      }
    ]

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/overall', '~/assets/css/iziToast', '~/static/css/main.7d2eaa66.chunk', //'~/assets/css/semantic.min'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
     ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
   //
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    //'@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  router: {
    // customize the Nuxt router
    routes: [
      {
        name: 'index',
        path: '/',
        component: 'pages/index.vue'
      },
      {
        name: 'accounts',
        path: '/users/:id?',
        component: 'pages/users/_id.vue'
      },
    ]
  }
}
