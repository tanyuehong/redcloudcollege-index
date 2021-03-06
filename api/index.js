import request from '@/utils/serverRq'

export default {
  //查询前两条banner数据
  getListBanner() {
    return request({
      url: '/home/banner/getAllBanner',
      method: 'get',
    })
  },
  //查询热门课程和名师
  getIndexData() {
    return request({
      url: '/home/index',
      method: 'get',
    })
  },
  
  getMessageList() {
    return request({
      url: '/home/message/getMessageList',
      method: 'get',
    })
  },

  getMessageDetail(mId) {
    return request({
      url: `/home/message/getMessageDetail/${mId}`,
      method: 'get',
    })
  }
}
