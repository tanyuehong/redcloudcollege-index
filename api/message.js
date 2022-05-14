import request from '@/utils/request'

export default {
  getUserMessageStatus(mId) {
    return request({
      url: `/home/message/status/${mId}`,
      method: 'get',
    })
  },

  addUserMessageGood(mId) {
    return request({
      url: `/home/message/addGood/${mId}`,
      method: 'get',
    })
  },

  cancleleUserMessageGood(mId) {
    return request({
      url: `/home/message/cancleGood/${mId}`,
      method: 'get',
    })
  },

  submitMessageComment(comment) {
    return request({
      url: `/home/message/commet/submit`,
      method: 'post',
      data: comment,
    })
  },

  submitMessageReply(reply) {
    return request({
      url: `/home/message/commet/submitReply`,
      method: 'post',
      data: reply,
    })
  },

  addCommentGood(cid, type) {
    return request({
      url: `/home/message/addCommentGood/${cid}/${type}`,
      method: 'get',
    })
  },

  cancleCommentGood(cid, type) {
    return request({
      url: `/home/message/cancleCommentGood/${cid}/${type}`,
      method: 'get',
    })
  },

  getMessageCommentLists(bid, type) {
    return request({
      url: `/home/message/getCommentList/${bid}/${type}`,
      method: 'get',
    })
  },
}
