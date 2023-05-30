import request from '@/utils/request'

export default {

  getEveryDayQuestionList(date) {
    return request({
      url: `/interview/admin/getEveryDayQuestionList/${date}`,
      method: 'get',
    })
  },

  getQuestionList() {
    return request({
      url: `/interview/admin/questionList`,
      method: 'get',
    })
  },

  getPositionList() {
    return request({
      url: `/home/interview/positionList`,
      method: 'get',
    })
  },

  getQuestionClassifyList(qId) {
    return request({
      url: `/interview/admin/questionClassifyList/${qId}`,
      method: 'get'
    })
  },

  getPositionClassifyList(pId) {
    return request({
      url: `/interview/admin/positionClassifyList/${pId}`,
      method: 'get'
    })
  },

   // 提交职位子分类
  submitInterviewClassify(classify) {
    return request({
      url: `/interview/admin/submitClassify`,
      method: 'post',
      data: classify,
    })
  },

   // 提交问题的职位
  submitQuestionPosition(position) {
    return request({
      url: `/interview/admin/submitQuestionPosition`,
      method: 'post',
      data: position,
    })
  },

  submitEveryQuestion(dayQuestion) {
    return request({
      url: `/interview/admin/submitEveryQuestion`,
      method: 'post',
      data: dayQuestion,
    })
  },

  deleteClassify(cId) {
    return request({
      url: `/interview/admin/deleteClassify/${cId}`,
      method: 'get'
    })
  },

  addInterviewPosition(position) {
    return request({
      url: `/interview/admin/addInterviewPosition`,
      method: 'post',
      data: position,
    })
  },

  deletePosition(pId) {
    return request({
      url: `/interview/admin/deletePosition/${pId}`,
      method: 'get'
    })
  }
}
