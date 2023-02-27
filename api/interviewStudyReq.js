import request from '@/utils/request'

export default {
  getSignDateList() {
    return request({
      url: `/interview/getSignDateList`,
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
