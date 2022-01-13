import request from '@/utils/request'

export default {
  //分页讲师查询的方法
  submitQuestion(qesData) {
    return request({
      url: `/eduask/submit`,
      method: 'post',
      data: qesData,
    })
  },
  //讲师详情的方法
  getHomeAskQuestionList() {
    return request({
      url: `/home/eduask/questionlist`,
      method: 'get',
    })
  },
  // 获取问答详情网页
  getQuestionDetails(id) {
    return request({
      url: '/eduask/getquestiondetail/' + id,
      method: 'get',
    })
  },

  getUploadImageToken() {
    return request({
      url: `/eduask/uploadqiniutoken`,
      method: 'post',
    })
  }
}
