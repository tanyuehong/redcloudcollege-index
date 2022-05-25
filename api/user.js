import request from '@/utils/request'

export default {
  // 获取用户文章列表
  getArticleList(uId) {
    return request({
      url: `/home/ucenter/getArticleList/${uId}`,
      method: 'get',
    })
  },

  getCollectArticleList(uId) {
    return request({
      url: `/home/ucenter/getCollectArticleList/${uId}`,
      method: 'get',
    })
  },

  getCollectAskList(uId) {
    return request({
      url: `/home/ucenter/getCollectAskList/${uId}`,
      method: 'get',
    })
  },

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
  // 关注的方法
  addUserFocus(fid) {
    return request({
      url: `/ucenter/addUserFocus/${fid}`,
      method: 'get',
    })
  },

  // 取消关注的方法
  cancleUserFocus(fid) {
    return request({
      url: `/ucenter/cancleUserFocus/${fid}`,
      method: 'get',
    })
  },

  getUserFocus(fid) {
    return request({
      url: `/home/ucenter/getUserFocus/${fid}`,
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
  },

  // 获取编辑器图片上传token
  getUploadImageToken() {
    return request({
      url: `/eduask/uploadqiniutoken`,
      method: 'post',
    })
  },
}
