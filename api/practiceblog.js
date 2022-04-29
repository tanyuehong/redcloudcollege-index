import request from '@/utils/request'

export default {
  //分页讲师查询的方法
  getHomeRealPratice() {
    return request({
      url: `/home/pratice/index`,
      method: 'get',
    })
  },
  //讲师详情的方法
  getRealPraticeDetail(id) {
    return request({
      url: `/home/pratice/getDetail/${id}`,
      method: 'get',
    })
  },

  submitBlogComment(comment) {
    return request({
      url: `/blogCommet/submit`,
      method: 'post',
      data: comment,
    })
  },

  submitBlogReply(reply) {
    return request({
      url: `/blogCommet/submitReply`,
      method: 'post',
      data: reply,
    })
  },

  addCommentGood(cid, type) {
    return request({
      url: `/blogCommet/addCommentGood/${cid}/${type}`,
      method: 'get',
    })
  },

  cancleCommentGood(cid, type) {
    return request({
      url: `/blogCommet/cancleCommentGood/${cid}/${type}`,
      method: 'get',
    })
  },
}
