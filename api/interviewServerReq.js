import request from '@/utils/serverRq'

export default {
  // 获取问答详情网页
  getQuestionDetail(id, type) {
    return request({
      url: '/home/interview/getQuestionDetail/' + id + '/' + type,
      method: 'get',
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
