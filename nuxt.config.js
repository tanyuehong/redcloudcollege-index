
export default {
  /*
  ** Headers of the page
  */
  head: {
    title: '开源实践网',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: '开源项目网，一起来做有点意思的事，开源项目学习网,开源项目实践网,开源项目创业网,加入开源项目,代码创业' },
      { hid: 'description', name: 'description', content: '开源项目网，是国内第一家以开源项目作为学习实践的网站，在开源项目网，可以下载网站内所有的开源项目，每个开源项目都有完整专业的学习文档，并且用户还可以提交代码，通过以后代码的所有权和收益归用户所有。' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.bootcss.com/twitter-bootstrap/3.3.7/css/bootstrap.min.css' }
    ],
    script:[
      {src:'https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js'},
      {src:'https://cdn.bootcss.com/twitter-bootstrap/3.3.7/js/bootstrap.min.js'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
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
