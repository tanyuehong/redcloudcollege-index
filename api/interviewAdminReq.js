import request from '@/utils/request'

export default {
  getPositionList() {
    return request({
      url: `/interview/admin/positionList`,
      method: 'get',
    })
  },

  // 提交签到的接口
  submitInterviewSign(signData) {
    return request({
      url: `/interview/commitSign`,
      method: 'post',
      data: signData,
    })
  },
  
}
