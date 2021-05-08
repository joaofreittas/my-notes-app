export default {
  head: {
    title: 'notes-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/assets/css/main.css',
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
    'bootstrap-vue/nuxt',
  ],
  fontawesome:{
    icons:{
      solid:true,
      brands:true,
    }
  },
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/fontawesome',
  ],

  build: {
  }
}
