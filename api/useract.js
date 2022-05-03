import request from '@/utils/request'

export default {
  getUserBlogStatus(praticeId) {
    return request({
      url: `/home/pratice/status/${praticeId}`,
      method: 'get',
    })
  },

  addUserPraticeGood(praticeId) {
    return request({
      url: `/home/pratice/addGood/${praticeId}`,
      method: 'get',
    })
  },

  cancleleUserPraticeGood(praticeId) {
    return request({
      url: `/home/pratice/cancleGood/${praticeId}`,
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
  }
}
