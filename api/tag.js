import request from '@/utils/request'

export default {

  addTag(tag) {
    return request({
      url: `/tags/addTag`,
      method: 'post',
      data: tag,
    })
  },

  addTagPosition(tItem) {
    return request({
      url: `/tags/addTagPosition`,
      method: 'post',
      data: tItem,
    })
  },

  getTagList() {
    return request({
      url: `/tags/getTagList`,
      method: 'get',
    })
  },

  getTagPositionList(tId) {
    return request({
      url: `/tags/getTagPositionList/${tId}`,
      method: 'get',
    })
  },
}
