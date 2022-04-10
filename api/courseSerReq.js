import request from '@/utils/serverRq'

export default {
  // 获取课程首页的数据
  getCourseIndex() {
    return request({
      url: `/home/course/getCourseIndex`,
      method: 'get',
    })
  },

  //讲师详情的方法
  getTeacherInfo(id) {
    return request({
      url: `/home/course/getTeacherDetail/${id}`,
      method: 'get',
    })
  },

  //课程详情的方法
  getCourseInfo(id) {
    return request({
      url: '/home/course/getFrontCourseInfo/' + id,
      method: 'get',
    })
  },
}
