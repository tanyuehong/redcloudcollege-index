import request from '@/utils/request'

export default {

  getQuestionList() {
    return request({
      url: `/interview/admin/questionList`,
      method: 'get',
    })
  },

  getPositionList() {
    return request({
      url: `/interview/admin/positionList`,
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

  deleteClassify(cId) {
    return request({
      url: `/interview/admin/deleteClassify/${cId}`,
      method: 'get'
    })
  },
  
}
