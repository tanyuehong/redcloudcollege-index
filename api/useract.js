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
    }
}
