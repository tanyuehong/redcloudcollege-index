import request from '@/utils/serverRq'

export default {
  getHomeRealPratice(parm) {
    return request({
      url: `/home/pratice/index`,
      method: 'post',
      data: parm,
    })
  },

  getRealPraticeDetail(id) {
    return request({
      url: `/home/pratice/getDetail/${id}`,
      method: 'get',
    })
  },

  getPraticeBlogCommentLists(bid, type) {
    return request({
      url: `/home/pratice/getCommentList/${bid}/${type}`,
      method: 'get',
    })
  },
}
