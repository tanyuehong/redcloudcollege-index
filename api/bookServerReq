import request from '@/utils/serverRq'

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
    return request({
      url: '/home/book/getBookDetail/' + id,
      method: 'get',
    })
  },

    // 获取数据目录内容页
   getBookArticleDetail(id) {
    //debugger;
    return request({
      url: '/home/book/getBookArticleDetail/' + id,
      method: 'get',
    })
   }
}
