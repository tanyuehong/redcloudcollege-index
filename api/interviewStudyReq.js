import request from '@/utils/request'

export default {
  getInterviewTagList(typeId) {
    return request({
      url: `/home/interview/tagList/${typeId}`,
      method: 'get',
    })
  },

  // 提交签到的接口
  submitInterviewSign(signData) {
    return request({
      url: `/interview/submit`,
      method: 'post',
      data: signData,
    })
  },
  
}
