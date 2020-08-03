import request from '@/utils/request'

export default {
    //分页讲师查询的方法
  submitQuestion(qesData) {
    return request({
      url: `/eduask/submit`,
      method: 'post',
      data: qesData
    })
  },
  //讲师详情的方法
  getHomeAskQuestionList() {
    return request({
      url: `/home/eduask/questionlist`,
      method: 'get'
    })
  }
}