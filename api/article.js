import request from '@/utils/request'

export default {
  // 获取首页书籍列表
  getHomeBookList() {
    return request({
      url: `/home/book/getBooks`,
      method: 'get',
    })
  },
  // 获取书籍详情页
  getBookDetails(id) {
    //debugger;
    return request({
      url: '/home/book/getBookDetail/' + id,
      method: 'get',
    })
  },
}
