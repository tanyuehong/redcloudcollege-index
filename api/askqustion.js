import request from '@/utils/request'

export default {
  // 问题建议的提交接口
  submitQuestionAdvise(advise) {
    return request({
      url: `/eduask/submitAdvise`,
      method: 'post',
      data: advise,
    })
  },

  // 举报的接口
  submitUserWaring(waring) {
    return request({
      url: `/eduask/submitWaring`,
      method: 'post',
      data: waring,
    })
  },

  // 问题提交的接口
  submitQuestion(qesData) {
    return request({
      url: `/eduask/submit`,
      method: 'post',
      data: qesData,
    })
  },

  // 问题回答的提交接口
  submitQuestionReply(reply) {
    return request({
      url: `/eduask/submitReply`,
      method: 'post',
      data: reply,
    })
  },

  // 回复评论的提交
  submitQuestionReplyComment(replycomment) {
    return request({
      url: `/eduask/submitReplyComment`,
      method: 'post',
      data: replycomment,
    })
  },

  //  获取问题列表
  getHomeAskQuestionList(parm) {
    return request({
      url: `/home/eduask/questionlist`,
      method: 'post',
      data: parm,
    })
  },

  // 获取编辑器图片上传token
  getUploadImageToken() {
    return request({
      url: `/eduask/uploadqiniutoken`,
      method: 'post',
    })
  },

  // 获取回答回复列表
  getQustionReplyList(rId, type) {
    return request({
      url: `/home/eduask/getQustionReplyList/${rId}/${type}`,
      method: 'get',
    })
  },

  getUserGoodQustionState(qId) {
    return request({
      url: `/home/eduask/qGoodState/${qId}`,
      method: 'get',
    })
  },

  // 问题点赞请求
  addUserGoodQustion(qId) {
    return request({
      url: `/home/eduask/addqGood/${qId}`,
      method: 'get',
    })
  },

  addQcommentGood(cId) {
    return request({
      url: `/home/eduask/addCGood/${cId}`,
      method: 'get',
    })
  },

  cancleQcommentGood(cId) {
    return request({
      url: `/home/eduask/canclecGood/${cId}`,
      method: 'get',
    })
  },

  cancleUserGoodQustion(qId) {
    return request({
      url: `/home/eduask/cancleqGood/${qId}`,
      method: 'get',
    })
  },

  getUserQustionCollectState(qId) {
    return request({
      url: `/home/eduask/qCollectState/${qId}`,
      method: 'get',
    })
  },

  addUserQustionCollect(qId) {
    return request({
      url: `/home/eduask/addqCollect/${qId}`,
      method: 'get',
    })
  },

  cancleUserQustionCollect(qId) {
    return request({
      url: `/home/eduask/cancleqCollect/${qId}`,
      method: 'get',
    })
  },

  updateRelpyState(rId, type) {
    return request({
      url: `/home/eduask/updateRelpyState/${rId}/${type}`,
      method: 'get',
    })
  },

  getUserGoodReplyState(rIds) {
    return request({
      url: `/home/eduask/getUserGoodState`,
      method: 'post',
      data: rIds,
    })
  },

  deleteQustionReply(cId) {
    return request({
      url: `/eduask/deleteQustionReply/${cId}`,
      method: 'get',
    })
  },

  deleteReplyComment(cId) {
    return request({
      url: `/eduask/deleteReplyComment/${cId}`,
      method: 'get',
    })
  },
}
