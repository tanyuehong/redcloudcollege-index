import request from '@/utils/serverRq'

export default {
  // 获取问答详情网页
  getQuestionDetail(id) {
    return request({
      url: '/home/interview/getQuestionDetail/' + id,
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
