import request from '@/utils/request'


export default {
 
  getBookContents(bookId) {
    return request({
      url: '/home/book/contents/getBookContents',
      method: 'post',
      data: bookId,
    })
  },
  
  // 获取书籍评论
  getBookComments(commentParam) {
    //debugger;
    return request({
      url: '/home/book/comments/getBookComments',
      method: 'post',
      data: commentParam,
    })
  },
}
