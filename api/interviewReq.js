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
      url: `/eduask/submit`,
      method: 'post',
      data: qData,
    })
  },
}