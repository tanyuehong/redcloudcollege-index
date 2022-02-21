import request from '@/utils/request'

export default {

    getUserPraticeGood(praticeId) {
      return request({
        url: `/home/pratice/good/${praticeId}`,
        method: 'get',
      })
    },

    addUserPraticeGood(praticeId) {
      return request({
        url: `/home/pratice/addGood/${praticeId}`,
        method: 'get',
      })
    },
    cancleleUserPraticeGood(praticeId) {
      return request({
        url: `/home/pratice/cancleGood/${praticeId}`,
        method: 'get',
      })
    },

    getUserGoodQustionState(qId) {
      return request({
        url: `/home/eduask/qGoodState/${qId}`,
        method: 'get',
      })
    },

    addUserGoodQustion(qId) {
      return request({
        url: `/home/eduask/addqGood/${qId}`,
        method: 'get',
      })
    },
    
    cancleUserGoodQustion(qId) {
      return request({
        url: `/home/eduask/cancleqGood/${qId}`,
        method: 'get',
      })
    },

    getUserQustionCollectState(qId) {
      return request({
        url: `/home/eduask/qCollectState/${qId}`,
        method: 'get',
      })
    },

    addUserQustionCollect(qId) {
      return request({
        url: `/home/eduask/addqCollect/${qId}`,
        method: 'get',
      })
    },
    
    cancleUserQustionCollect(qId) {
      return request({
        url: `/home/eduask/cancleqCollect/${qId}`,
        method: 'get',
      })
    },

    updateRelpyState(rId,type) {
      return request({
        url: `/home/eduask/updateRelpyState/${rId}/${type}`,
        method: 'get',
      })
    },

    getUserGoodReplyState(rIds) {
      return request({
        url: `/home/eduask/getUserGoodState`,
        method: 'post',
        data:rIds,
      })
    },

    getQustionReplyList(rId,type) {
      return request({
        url: `/home/eduask/getQustionReplyList/${rId}/${type}`,
        method: 'get',
      })
    },
}
