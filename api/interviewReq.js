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
}
