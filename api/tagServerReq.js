import request from '@/utils/serverRq'

export default {

    getAllTagList() {
        return request({
          url: `/home/tags/getAllTagList`,
          method: 'get',
        })
      },

      getTagDetail(tId) {
        return request({
          url: `/home/tags/getTagDetail/${tId}`,
          method: 'get',
        })
      },

}