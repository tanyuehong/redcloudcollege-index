import request from '@/utils/serverRq'

export default {
  //分页讲师查询的方法
  getHomeRealPratice() {
    return request({
      url: `/home/pratice/index`,
      method: 'get',
    })
  },
  //讲师详情的方法
  getRealPraticeDetail(id) {
    return request({
      url: `/home/pratice/getDetail/${id}`,
      method: 'get',
    })
  },

}
