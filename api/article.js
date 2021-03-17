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
  // 获取首页书籍列表
  getHomeBookList() {
    return request({
      url: `/home/book/getBooks`,
      method: 'get'
    })
  },
   // 获取问答详情网页
  getQuestionDetails(id) {
    return request({
      url: '/eduask/getquestiondetail/'+id,
      method: 'get'
    })
  }
}