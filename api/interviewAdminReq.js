import request from '@/utils/request'

export default {
  getPositionList() {
    return request({
      url: `/interview/admin/positionList`,
      method: 'get',
    })
  },

  // 提交签到的接口
  getPositionClassifyList(pId) {
    return request({
      url: `/interview/admin/positionClassifyList/${pId}`,
      method: 'get'
    })
  },
  
}
