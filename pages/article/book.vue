<template>
  <div class="book_all">
    <div class="container">
      <div class="row mt20">
        <div class="col-md-4">
          <div class="book_lefte">
            <img :src="bookItem.bookImg" class="book_lefte_img" />
          </div>
        </div>
        <div class="col-md-4">.col-md-1</div>
      </div>
    </div>
  </div>
</template>

<style>
.book_main {
  background: white;
}
.book_all {
  background: #f7f7f7;
}
.book_lefte .book_lefte_img {
  width: 175px;
  height: 218px;
}
</style>

<script>
import { Message } from 'element-ui'
import articleApi from '@/api/article'

export default {
  data() {
    return {
      bookItem: {}, //当前页
      bookContents: [],
    }
  },
  created() {
    var bookId = this.$route.query.id
    if (bookId && bookId.length > 0) {
      this.getHomeBookDetail(bookId)
    } else {
      Message({
        message: '参数异常，请重新尝试！',
        type: 'error',
        duration: 2000,
      })
    }
  },
  methods: {
    //分页切换的方法
    //参数是页码数
    getHomeBookDetail(bookId) {
      articleApi.getBookDetails(bookId).then((response) => {
        this.bookItem = response.data.book
        this.bookContents = response.data.content_list
      })
    },
  },
}
</script>
