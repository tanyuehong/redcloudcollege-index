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

  getPositionQuestionList(parm) {
    return request({
      url: '/home/interview/pindex',
      method: 'post',
      data: parm,
    })
  },

  getInterviewPositionList() {
    return request({
      url: '/home/interview/positionList',
      method: 'get',
    })
  },
}
