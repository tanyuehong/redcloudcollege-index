import axios from 'axios'
import { Message } from 'element-ui'

var tipsShowTime = 2000
// 创建axios实例
const service = axios.create({
  baseURL: process.env.NODE_ENV == 'development' ? 'http://localhost/api':'https://www.redskt.com/api', // api的base_url
  timeout: 20000, // 请求超时时间
})

//第三步 创建拦截器  http request 拦截器
service.interceptors.request.use(
  (config) => {
    //debugger
    //判断cookie里面是否有名称是guli_token数据
    if (window.localStorage.getItem('redclass_token')) {
      config.headers['token'] = window.localStorage.getItem('redclass_token')
    }
    return config
  },
  (err) => {
    Message({
      message: '网络请求超时，请重新尝试！',
      type: 'error',
      duration: tipsShowTime,
    })
    return Promise.reject(err)
  },
)

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if(res.code == 200 && res.sucessTips != undefined && res.sucessTips.length>0) {
      Message({ message: res.sucessTips, type: 'success', duration: tipsShowTime });
      return res;
    }
    if(res.code == 210) {
      return Promise.reject(new Error('no tips'));
    }
    if (res.code !== 200) {
      var errorMsg = '未知错误，请联系管理员'
      var coustMessage = res.data.message
      if (coustMessage != undefined && coustMessage.length > 0) {
        errorMsg = res.data.message
      } else if (res.message.length > 0) {
        errorMsg = res.message
      }
      Message.closeAll()
      if (res.code == 999 || res.code == 998) {
        if (window) {
          window.localStorage.setItem('redclass_token', '')
          window.localStorage.setItem('redclass_user', '')
          window.$nuxt.$cookies.set('token', '')
        }
        window.$nuxt.$router.push({ name: 'user-login' });
      }
      Message({ message: errorMsg, type: 'error', duration: tipsShowTime })
      return Promise.reject(new Error(errorMsg))
    } else {
      return res
    }
  },
  (err) => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '请求错误(400)'
          break
        case 401:
          err.message = '未授权，请重新登录(401)'
          break
        case 403:
          err.message = '拒绝访问(403)'
          break
        case 404:
          err.message = '请求出错(404)'
          break
        case 408:
          err.message = '请求超时(408)'
          break
        case 500:
          err.message = '服务器错误(500)'
          break
        case 501:
          err.message = '服务未实现(501)'
          break
        case 502:
          err.message = '网络错误(502)'
          break
        case 503:
          err.message = '服务不可用(503)'
          break
        case 504:
          err.message = '网络超时(504)'
          break
        case 505:
          err.message = 'HTTP版本不受支持(505)'
          break
        default:
          err.message = `连接出错(${err.response.status})!`
      }
    } else {
      err.message = '连接服务失败!'
    }
    Message.closeAll()
    Message({ message: err.message, type: 'error', tipsShowTime })
    return Promise.reject(err)
  },
)

export default service
