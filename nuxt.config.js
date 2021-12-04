
export default {
  /*
  ** Headers of the page
  */
  head: {
    title: '开源实践网',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '开源实践网，是国内第一家以开源项目作为学习实践的网站，在开源实践网，所有的项目都是商业级开源，每个开源项目都有完整专业的学习文档，并且用户还可以提交代码，通过审核并合入以后代码的所有权和收益均归用户所有。',
      },
      { hid: 'description', name: 'description', content: '开源实践网，是国内第一家以开源项目作为学习实践的网站，在开源实践网，所有的项目都是商业级开源，每个开源项目都有完整专业的学习文档，并且用户还可以提交代码，通过审核并合入以后代码的所有权和收益均归用户所有。' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.bootcss.com/twitter-bootstrap/3.3.7/css/bootstrap.min.css' }
    ],
    script:[
      {src:'https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js'},
      {src: 'https://cdn.bootcss.com/twitter-bootstrap/3.3.7/js/bootstrap.min.js'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/element-ui', ssr: true }
  ],
    
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
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
    extend (config, ctx) {
    }
  }
}
