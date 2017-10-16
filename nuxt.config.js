module.exports = {
  /*
  ** Router config
  */
  router: {
    // mode: 'hash'
  },
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
      { rel: 'stylesheet', href: '/common/common.css' },
      { href: 'https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js'}
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
    'axios'
  ],
  // babel: {
  //   'plugins': [['component', [
  //     {
  //       'libraryName': 'element-ui',
  //       'styleLibraryName': 'theme-default'
  //     },
  //     'transform-async-to-generator'
  //   ]]],
  //   comments: true
  // },
  // plugins: [
  //   { src: '~plugins/element-ui', ssr: true }
  // ]
  // css: [
  //   'element-ui/lib/theme-default/index.css'
  // ]

}
