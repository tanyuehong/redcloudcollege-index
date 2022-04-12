import request from '@/utils/request'

export default {
  //条件分页课程查询的方法
  getCourseList(page, limit, searchObj) {
    return request({
      url: `/home/course/getCourseList/${page}/${limit}`,
      method: 'post',
      data: searchObj,
    })
  },

  //分页讲师查询的方法
  getTeacherList(page, limit) {
    return request({
      url: `/home/teacher/getTeacherList/${page}/${limit}`,
      method: 'post',
    })
  },

  // 讲师关注的方法
  addTeacherFocus(fid) {
    return request({
      url: `/classroom/userfocus/addUserFocus/${fid}`,
      method: 'get',
    })
  },

  // 取消关注的方法
  cancleTeacherFocus(fid) {
    return request({
      url: `/classroom/userfocus/cancleUserFocus/${fid}`,
      method: 'get',
    })
  },

  getTeacherFocus(fid) {
    return request({
      url: `/home/course/getUserFocus/${fid}`,
      method: 'get',
    })
  },
}
