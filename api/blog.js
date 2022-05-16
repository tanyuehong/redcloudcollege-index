import request from '@/utils/request'

export default {
  
  getHomeRealPratice() {
    return request({
      url: `/home/pratice/index`,
      method: 'get',
    })
  },

  getRealPraticeDetail(id) {
    return request({
      url: `/home/pratice/getDetail/${id}`,
      method: 'get',
    })
  },

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
