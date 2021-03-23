<template>
  <div class="book_all">
    <div class="container">
      <div class="row book_top_content">
        <div class="col-md-3">
          <div class="book_top_img">
            <img :src="bookItem.bookImg" class="book_top_lefte_img" />
          </div>
        </div>
        <div class="col-md-9">
          <div class="book_top_title">
            <h2>{{ bookItem.title }}</h2>
          </div>

          <div class="book_top_description">
            <a
              href="https://learnku.com/courses/laravel-essential-training/8.x/delete-user/9845"
            >
              <span class="glyphicon glyphicon-time" aria-hidden="true"></span>

              更新于
              <span title="2021-03-11 06:54:19">1周前</span>
            </a>
            <div class="book_des">
              {{ bookItem.describ }}
            </div>
            <div class="book_info">
              <span class="intro">跟着 10 年资深架构师一起学微服务架构</span>
              <span class="sep">|</span>
              <a href="/u/7568351" target="_blank">
                <span>
                  {{ bookItem.author }} / {{ bookItem.authorPositon }}
                </span>
              </a>
              <img src="~/assets/img/article_point.png" class="img_point" />
              <span>共32节</span>
              <img src="~/assets/img/article_point.png" class="img_point" />
              <span>67人已购买</span>
            </div>
            <div class="book_price">
              <span style="line-height: 24px;">
                <b class="ui text orange">售价：79.00 元</b>
              </span>
            </div>
            <el-button type="danger">购买本书</el-button>
            <el-button type="primary">立即试读</el-button>
          </div>
        </div>
      </div>

      <div class="row book_mid_content">
        <div class="col-md-12">
          <div class="book_select">
          <el-tabs :tab-position="tabPosition" style="height: 200px;">
            <el-tab-pane label="课程介绍">课程介绍</el-tab-pane>
            <el-tab-pane label="课程目录">课程目录</el-tab-pane>
            <el-tab-pane label="课程评论">课程评论</el-tab-pane>
          </el-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.book_top_content {
  padding-top: 30px;
  padding-left: 20px;
  padding-bottom: 20px;
  background: white;
}

.book_mid_content {
  padding-top: 30px;
  padding-left: 20px;
  padding-bottom: 20px;
  background: white;
}
.book_all {
  background: #f7f7f7;
}
.book_top {
  padding-top: 30px;
  padding-left: 20px;
}
.book_top_lefte_img {
  width: 175px;
  height: 208px;
  margin-left: 20px;
  -webkit-box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%),
    0 2px 10px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
}
.book_top_title {
  color: rgba(0, 0, 0, 0.85);
  font-weight: 700;
  font-family: Lato, Helvetica Neue, Arial, Helvetica, sans-serif;
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
       tabPosition: 'left',
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
