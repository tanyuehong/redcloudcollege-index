import request from '@/utils/request'

export default {
  getInterviewTagList(typeId) {
    return request({
      url: `/home/interview/tagList/${typeId}`,
      method: 'get',
    })
  },
}
