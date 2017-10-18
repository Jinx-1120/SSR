module.exports = {
  /*
  ** Router config
  */
  /*
  ** Headers of the page
  */
  head: {
    title: 'demo',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://unpkg.com/element-ui/lib/theme-default/index.css'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  vender: [
    'axios',
    'element-ui'
  ],
  // babel:{
  //   "plugins": [["component", [
  //     {
  //       "libraryName": "element-ui",
  //       "styleLibraryName": "theme-default"
  //     },
  //     'transform-async-to-generator',
  //     'transform-runtime'
  //   ]]],
  //   comments: true
  // },
  plugins: [
    { src: '~plugins/element-ui', ssr: true }
  ],
  css:[
    'assets/main.css'
  ]
}
