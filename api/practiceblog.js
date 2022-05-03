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
      url: `/blog/commet/submit`,
      method: 'post',
      data: comment,
    })
  },

  submitBlogReply(reply) {
    return request({
      url: `/blog/commet/submitReply`,
      method: 'post',
      data: reply,
    })
  },

  addCommentGood(cid, type) {
    return request({
      url: `/blog/commet/addCommentGood/${cid}/${type}`,
      method: 'get',
    })
  },

  cancleCommentGood(cid, type) {
    return request({
      url: `/blog/commet/cancleCommentGood/${cid}/${type}`,
      method: 'get',
    })
  },

  addBlogCollect(bid) {
    return request({
      url: `/blog/collect/addBlogCollect/${bid}`,
      method: 'get',
    })
  },

  cancleBlogCollect(bid, type) {
    return request({
      url: `/blog/collect/cancleBlogCollect/${bid}`,
      method: 'get',
    })
  },
}
