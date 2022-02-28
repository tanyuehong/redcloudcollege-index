import request from '@/utils/request'

export default {
  // 问题提交的接口
  submitQuestion(qesData) {
    return request({
      url: `/eduask/submit`,
      method: 'post',
      data: qesData,
    })
  },

  // 问题回复的提交接口
  submitQuestionReply(reply) {
    return request({
      url: `/eduask/submitReply`,
      method: 'post',
      data: reply,
    })
  },

    // 问题回复评论的提交
    submitQuestionReplyComment(replycomment) {
      return request({
        url: `/eduask/submitReplyComment`,
        method: 'post',
        data: replycomment,
      })
    },


  //讲师详情的方法
  getHomeAskQuestionList(parm) {
    return request({
      url: `/home/eduask/questionlist`,
      method: 'post',
      data:parm,
    })
  },

  getUploadImageToken() {
    return request({
      url: `/eduask/uploadqiniutoken`,
      method: 'post',
    })
  }
}
