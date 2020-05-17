import request from '@/utils/request'

export default {
    //登录的方法
  submitLoginUser(userInfo) {
    return request({
      url: `http://localhost:8008/ucenter/member/login`,
      method: 'post',
      data: userInfo
    })
  },

  //根据token获取用户信息
  getLoginUserInfo() {
    return request({
      url: `http://localhost:8008/ucenter/member/getMemberInfo`,
      method: 'get'
    })
  }
}