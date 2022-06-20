import request from '@/utils/serverRq'

export default {
  // 获取问答详情网页
  getQuestionDetails(id) {
    return request({
      url: '/home/eduask/getquestiondetail/' + id,
      method: 'get',
    })
  },

  //讲师详情的方法
  getHomeAskQuestionList(parm) {
    return request({
      url: `/home/eduask/questionlist`,
      method: 'post',
      data: parm,
    })
  },

  getQuestionTypeList() {
    return request({
      url: `/home/eduask/questionTypeList`,
      method: 'get',
    })
  },

  getAllTagList(typeId) {
    return request({
      url: `/home/tags/getAllTagList`,
      method: 'get',
    })
  },
}
