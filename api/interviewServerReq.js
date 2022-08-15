import request from '@/utils/serverRq'

export default {
  // 获取问答详情网页
  getQuestionDetail(parm) {
    return request({
      url: '/home/interview/getQuestionDetail/',
      method: 'post',
      data: parm,
    })
  },

  getInterviewIndex(parm) {
    return request({
      url: '/home/interview/index',
      method: 'post',
      data: parm,
    })
  },

  getInterviewTypeList() {
    return request({
      url: '/home/interview/typelist',
      method: 'get',
    })
  },
}
