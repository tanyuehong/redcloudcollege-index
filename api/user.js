import request from '@/utils/request'

export default {
  //登录的方法
  submitLoginUser(userInfo) {
    return request({
      url: `/ucenter/login`,
      method: 'post',
      data: userInfo,
    })
  },

  //根据token获取用户信息
  getLoginUserInfo() {
    return request({
      url: `/ucenter/getUserInfo`,
      method: 'get',
    })
  },

  //根据手机号发验证码
  sendCode(phone) {
    return request({
      url: `/edumsm/msm/send/${phone}`,
      method: 'get',
    })
  },

  //注册的方法
  registerMember(formItem) {
    return request({
      url: `/home/ucenter/register`,
      method: 'post',
      data: formItem,
    })
  },

   //根据token获取用户信息
   updateUserInfo(userData) {
    return request({
      url: `/ucenter/updateUserInfo`,
      method: 'post',
      data: userData,
    })
  },

  // 修改用户密码
  changeUserPwd(pwdData) {
    return request({
      url: `/ucenter/changeUserPwd`,
      method: 'post',
      data: pwdData,
    })
  }
}
