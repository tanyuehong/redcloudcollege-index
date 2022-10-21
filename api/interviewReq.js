import request from '@/utils/request'

export default {
  getInterviewTagList(typeId) {
    return request({
      url: `/home/interview/tagList/${typeId}`,
      method: 'get',
    })
  },

  // 问题提交的接口
  submitInterviewQuestion(qData) {
    return request({
      url: `/interview/submit`,
      method: 'post',
      data: qData,
    })
  },

  submitComment(comment) {
    return request({
      url: `/interview/commet`,
      method: 'post',
      data: comment,
    })
  },
  submitReply(reply) {
    return request({
      url: `/interview/reply`,
      method: 'post',
      data: reply,
    })
  },
  // 问题回答的提交接口
  submitQuestionAnswer(reply) {
    return request({
      url: `/interview/answer`,
      method: 'post',
      data: reply,
    })
  },

    // 问题点赞请求
    addGoodQustion(qId) {
      return request({
        url: `/home/interview/addGood/${qId}`,
        method: 'get',
      })
    },

    cancleGoodQustion(qId) {
      return request({
        url: `/home/interview/cancleGood/${qId}`,
        method: 'get',
      })
    },

    addCollectQustion(qId) {
      return request({
        url: `/home/interview/addCollect/${qId}`,
        method: 'get',
      })
    },
  
    cancleCollectQustion(qId) {
      return request({
        url: `/home/interview/cancleCollect/${qId}`,
        method: 'get',
      })
    },

    addCollectAnswer(aId) {
      return request({
        url: `/home/interview/addAnswerCollect/${aId}`,
        method: 'get',
      })
    },
  
    cancleCollectAnswer(aId) {
      return request({
        url: `/home/interview/cancleAnswerCollect/${aId}`,
        method: 'get',
      })
    },

    getUserStatus(qId) {
      return request({
        url: `/home/interview/status/${qId}`,
        method: 'get',
      })
    },

    deleteQuestion(qId) {
      return request({
        url: `/home/interview/deleteQuestion/${qId}`,
        method: 'get',
      })
    },

    deleteQuestionAnswer(qId) {
      return request({
        url: `/home/interview/deleteAnswer/${qId}`,
        method: 'get',
      })
    },

    updateAnswerGood(aId, type) {
      return request({
        url: `/interview/updateAnswerGood/${aId}/${type}`,
        method: 'get',
      })
    },

    questionGoodAnswer(aId) {  // 最佳题解功能
      return request({
        url: `/interview/goodAnswer/${aId}`,
        method: 'get',
      })
    },

    updateCommentGood(cId, type) {
      return request({
        url: `/interview/updateCommentGood/${cId}/${type}`,
        method: 'get',
      })
    },
    updateCommentReplyGood(cId, type) {
      return request({
        url: `/interview/updateCommentReplyGood/${cId}/${type}`,
        method: 'get',
      })
    },

      // 回复评论的提交
    submitCommentReply(replycomment) {
     return request({
      url: `/interview/reply`,
      method: 'post',
      data: replycomment,
      })
    },

    deleteComment(cId,type) {
      return request({
        url: `/interview/deleteComment/${cId}/${type}`,
        method: 'get',
      })
    },

    addQuestionMeet(qId,type) {
      return request({
        url: `/interview/updateMeetType/${qId}/${type}`,
        method: 'get',
      })
    },

    addQuestionCompanyMeet(qId,cId) {
      return request({
        url: `/interview/commitMeetCompany/${qId}/${cId}`,
        method: 'get',
      })
    },

    addQuestionPosition(qId,pId) {
      return request({
        url: `/interview/commitMeetPosition/${qId}/${pId}`,
        method: 'get',
      })
    },

    getPositionList() {
      return request({
        url: `/interview/positionList`,
        method: 'get',
      })
    },

    getComPanyList() {
      return request({
        url: `/interview/comPanyList`,
        method: 'get',
      })
    }
}
