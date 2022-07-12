import request from '@/utils/serverRq'

export default {
  // 获取问答详情网页
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
