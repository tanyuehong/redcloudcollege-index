export default {
  // hooks: {
  //   'render:route': (url, result) => {
  //     result.html = result.html.replace(/data-n-head=\"ssr\"/gi, '')
  //   },
  // },

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'zh',
    },
    title: '开源实践网 - 一个有趣的在线学习网站',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '开源实践网，是国内第一家以开源项目作为学习实践的网站，在开源实践网，所有的项目都是商业级开源，每个开源项目都有完整专业的学习文档，并且用户还可以提交代码，通过审核并合入以后代码的所有权和收益均归用户所有。',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-d/font-awesome/4.7.0/css/font-awesome.min.css',
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css',
      },
    ],
    script: [
      {
        src:
          'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-d/jquery/3.3.1/jquery.min.js',
      },
      {
        src:
          'https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/element-ui' },
    { src: '@/plugins/wangEditor', ssr: false },
  ],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['cookie-universal-nuxt'],
  server: {
    port: 9528, // default: 3000
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extractCSS: true,
    extend(config, ctx) {},
  },
}
