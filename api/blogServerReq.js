import request from '@/utils/serverRq'

export default {
  //分页讲师查询的方法
  getHomeRealPratice(parm) {
    return request({
      url: `/home/pratice/index`,
      method: 'post',
      data: parm,
    })
  },

  //讲师详情的方法
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
