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

  getPositionClassifyList(pId) {
    return request({
      url: `/interview/admin/positionClassifyList/${pId}`,
      method: 'get'
    })
  },

   // 问题提交的接口
   submitInterviewClassify(classify) {
    return request({
      url: `/interview/admin/submitClassify`,
      method: 'post',
      data: classify,
    })
  },

  deleteClassify(cId) {
    return request({
      url: `/interview/admin/deleteClassify/${cId}`,
      method: 'get'
    })
  },
  
}
