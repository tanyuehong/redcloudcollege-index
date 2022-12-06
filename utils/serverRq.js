import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.NODE_ENV == 'development' ? 'http://localhost/api':'https://www.redskt.com/api', // api的base_url
  timeout: 20000, // 请求超时时间
})

service.interceptors.response.use((response) => {
  const res = response.data
  return res
})

export default service
