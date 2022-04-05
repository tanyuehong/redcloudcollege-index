import request from '@/utils/request'

export default {
  getUserPraticeGood(praticeId) {
    return request({
      url: `/home/pratice/good/${praticeId}`,
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
  // 讲师关注的方法
  addTeacherFocus(fid) {
    return request({
      url: `/classroom/userfocus/addUserFocus/${fid}`,
      method: 'get',
    })
  },

  // 取消关注的方法
  cancleTeacherFocus(fid) {
    return request({
      url: `/classroom/userfocus/cancleUserFocus/${fid}`,
      method: 'get',
    })
  },

  // 获取关注的方法
  getTeacherFocus(fid) {
    return request({
      url: `/classroom/userfocus/getUserFocus/${fid}`,
      method: 'get',
    })
  },
}
