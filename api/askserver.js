import request from '@/utils/serverRq'

export default {
  // 获取问答详情网页
  getQuestionDetails(id) {
    return request({
      url: '/home/eduask/getquestiondetail/' + id,
      method: 'get',
    })
  },
}