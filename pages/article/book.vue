<template>
  <div class="book_all">
    <div class="container">
      <div class="row book_top_content">
        <div class="col-md-3">
          <div class="book_top_img">
            <img :src="bookItem.imgUrl"
                 class="book_top_lefte_img" />
          </div>
        </div>
        <div class="col-md-9">
          <div class="book_top_title">
            <h2>{{ bookItem.title }}</h2>
          </div>

          <div class="book_top_description">
            <a href="https://learnku.com/courses/laravel-essential-training/8.x/delete-user/9845">
              <span class="glyphicon glyphicon-time"
                    aria-hidden="true"></span>

              更新于
              <span title="2021-03-11 06:54:19">1周前</span>
            </a>
            <div class="book_des">
              {{ bookItem.describ }}
            </div>
            <div class="book_info">
              <span class="intro">跟着 10 年资深架构师一起学微服务架构</span>
              <span class="sep">|</span>
              <a href="/u/7568351"
                 target="_blank">
                <span>
                  {{ bookItem.author }} / {{ bookItem.authorPositon }}
                </span>
              </a>
              <img src="~/assets/img/article_point.png"
                   class="img_point" />
              <span>共32节</span>
              <img src="~/assets/img/article_point.png"
                   class="img_point" />
              <span>67人已购买</span>
            </div>
            <div class="book_price">
              <span style="line-height: 42px;">
                <b class="ui text orange">售价：79.00 元</b>
              </span>
            </div>
            <el-button type="primary">购买本书</el-button>
            <el-button type="danger">立即试读</el-button>
          </div>
        </div>
      </div>

      <div class="row book_mid_content">
        <div class="col-md-12">
          <div class="book_select">
            <el-tabs v-model="activeName"
                     @tab-click="tabClickBookInfo"
                     :tab-position="tabPosition">
              <el-tab-pane label="课程介绍"
                           name="bookDescrb">
                <div class="book_info_right"
                     v-html="bookDesc"></div>
              </el-tab-pane>
              <el-tab-pane label="课程目录"
                           name="bookContents">
                <div class="book_info_right">
                  <div class="catalog-title">
                    课程目录
                    <span>已更新{{ bookContentsCount }}节</span>
                  </div>
                  <el-timeline>
                    <el-timeline-item v-for="item in chapterList"
                                      v-bind:key="item.id"
                                      :timestamp="item.title"
                                      class="mytest"
                                      color="#f56c6c"
                                      placement="top">
                      <el-card>
                        <div v-if="item.chapterContents"
                             class="book_contents_detail">
                          <div v-for="content in item.chapterContents"
                               v-bind:key="content.id"
                               class="book_contens_item">
                            <nuxt-link :to="{name:'article-detail',query:{id:content.articleId}}">
                              <span>{{content.title}}</span>
                              <span class="book-contens_time">2021-01</span>
                              <div class="taste-btn">试读</div>
                            </nuxt-link>
                          </div>
                        </div>
                        <div v-else
                             class="book_no_contents"> 正在努力更新中，敬请期待 </div>
                      </el-card>
                    </el-timeline-item>
                  </el-timeline>
                </div>
              </el-tab-pane>
              <el-tab-pane label="课程讨论"
                           name="bookComment">
                <div class="book_info_right">
                  <el-tabs v-model="activeComment"
                           @tab-click="comentClick">
                    <el-tab-pane label="热点"
                                 name="hotComment">
                      <div class="book_comment">
                        <div v-for="item in commentList"
                             class="event">
                          <div class="comment_label">
                            <a href="https://learnku.com/users/49196">
                              <img src="https://cdn.learnku.com/uploads/avatars/49196_1568765806.jpeg!/both/100x100" />
                            </a>
                          </div>
                          <div class="comment_content">
                            <div class="date">
                              <a href="https://learnku.com/users/49196">
                                lhj456
                              </a>
                              在
                              <span title="2021-03-17 10:09:03">1周前</span>
                              发布了
                            </div>

                            <div class="summary">
                              <a href="https://learnku.com/laravel/t/55351"
                                 class="title">
                                {{ item.title }}
                              </a>
                            </div>

                            <div class="topics-meta meta">
                              <i class="thumbs up icon"
                                 style="font-size: 1.2em;"></i>
                              {{ item.praise }} 个点赞 |
                              <i class="talk icon"></i>
                              {{ item.comment }} 个回复 |
                              <i class="folder icon"></i>
                              {{ item.tags }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane label="精华"
                                 name="bestComment">
                      <div class="book_comment">
                        <div v-for="item in commentList"
                             class="event">
                          <div class="comment_label">
                            <a href="https://learnku.com/users/49196">
                              <img src="https://cdn.learnku.com/uploads/avatars/49196_1568765806.jpeg!/both/100x100" />
                            </a>
                          </div>
                          <div class="comment_content">
                            <div class="date">
                              <a href="https://learnku.com/users/49196">
                                lhj456
                              </a>
                              在
                              <span title="2021-03-17 10:09:03">1周前</span>
                              发布了
                            </div>

                            <div class="summary">
                              <a href="https://learnku.com/laravel/t/55351"
                                 class="title">
                                {{ item.title }}
                              </a>
                            </div>

                            <div class="topics-meta meta">
                              <i class="thumbs up icon"
                                 style="font-size: 1.2em;"></i>
                              {{ item.praise }} 个点赞 |
                              <i class="talk icon"></i>
                              {{ item.comment }} 个回复 |
                              <i class="folder icon"></i>
                              {{ item.tags }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane label="最近"
                                 name="latestComment">
                      <div class="book_comment">
                        <div v-for="item in commentList"
                             class="event">
                          <div class="comment_label">
                            <a href="https://learnku.com/users/49196">
                              <img src="https://cdn.learnku.com/uploads/avatars/49196_1568765806.jpeg!/both/100x100" />
                            </a>
                          </div>
                          <div class="comment_content">
                            <div class="date">
                              <a href="https://learnku.com/users/49196">
                                lhj456
                              </a>
                              在
                              <span title="2021-03-17 10:09:03">1周前</span>
                              发布了
                            </div>

                            <div class="summary">
                              <a href="https://learnku.com/laravel/t/55351"
                                 class="title">
                                {{ item.title }}
                              </a>
                            </div>

                            <div class="topics-meta meta">
                              <i class="thumbs up icon"
                                 style="font-size: 1.2em;"></i>
                              {{ item.praise }} 个点赞 |
                              <i class="talk icon"></i>
                              {{ item.comment }} 个回复 |
                              <i class="folder icon"></i>
                              {{ item.tags }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane label="未解决"
                                 name="undealComment">
                      <div class="book_comment">
                        <div v-for="item in commentList"
                             class="event">
                          <div class="comment_label">
                            <a href="https://learnku.com/users/49196">
                              <img src="https://cdn.learnku.com/uploads/avatars/49196_1568765806.jpeg!/both/100x100" />
                            </a>
                          </div>
                          <div class="comment_content">
                            <div class="date">
                              <a href="https://learnku.com/users/49196">
                                lhj456
                              </a>
                              在
                              <span title="2021-03-17 10:09:03">1周前</span>
                              发布了
                            </div>

                            <div class="summary">
                              <a href="https://learnku.com/laravel/t/55351"
                                 class="title">
                                {{ item.title }}
                              </a>
                            </div>

                            <div class="topics-meta meta">
                              <i class="thumbs up icon"
                                 style="font-size: 1.2em;"></i>
                              {{ item.praise }} 个点赞 |
                              <i class="talk icon"></i>
                              {{ item.comment }} 个回复 |
                              <i class="folder icon"></i>
                              {{ item.tags }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </el-tab-pane>
                  </el-tabs>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  font-family: -apple-system, system-ui, Segoe UI, Roboto, Ubuntu, Cantarell,
    Noto Sans, sans-serif, BlinkMacSystemFont, 'Helvetica Neue', 'PingFang SC',
    'Hiragino Sans GB', 'Microsoft YaHei', Arial;
  line-height: 1.8;
  font-size: 14px;
}

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
  font-weight: 700px;
  font-family: Lato, Helvetica Neue, Arial, Helvetica, sans-serif;
}
.book_top_title h2 {
  margin-top: 5px;
  line-height: 25px;
  font-size: 26px;
  font-weight: 550;
  margin-bottom: 10px;
}

.book_info_right {
  padding-left: 30px;
}

.book_top_description .book_des {
  margin-bottom: 0px;
}

.book_info_right .catalog-title {
  font-size: 18px;
  color: #1c1f21;
  line-height: 18px;
  border-bottom: 1px solid rgba(28, 31, 33, 0.1);
  padding: 16px 0;
  font-weight: 700;
  margin-bottom: 16px;
}

.book_info_right .catalog-title span {
  font-size: 12px;
  color: #9199a1;
  text-align: left;
  line-height: 18px;
  margin-left: 16px;
  font-weight: 400;
}

.book_comment .event {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  width: 100%;
  padding: 0.21428571rem 0;
  margin: 0;
  background: none;
  border-top: none;
}
.book_comment .event .comment_content {
  display: block;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  -ms-flex-item-align: stretch;
  -ms-grid-row-align: stretch;
  align-self: stretch;
  text-align: left;
  word-wrap: break-word;
  margin-left: 10px;
  margin-bottom: 10px;
}
.book_comment .event .comment_label {
  flex: 0 0 auto;
  width: 2.5em;
  height: auto;
  display: block;
  -webkit-box-flex: 0;
}

.book_comment .event .comment_label img {
  width: 100%;
  height: auto;
  border-radius: 500rem;
}

.comment_content .date {
  color: #777;
  font-size: 14px;
  margin-bottom: 10px;
}

.comment_content .summary {
  color: rgba(0, 0, 0, 0.87);
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 5px;
}

.comment_content .summary a {
  color: inherit;
}

.el-timeline-item__timestamp {
  color: #333;
  font-weight: 550;
  font-size: 16px;
}

.book_contens_item {
  padding-bottom: 15px;
  padding-top: 15px;
  font-weight: 450;
  position: relative;
  border-bottom: 1px solid rgba(28, 31, 33, 0.1);
}
.book_contens_item a {
  display: block;
  text-decoration: none;
}

.book_contents_detail div:last-child {
  padding-bottom: 8px;
  border: none;
}
.book_contents_detail div:first-child {
  padding-top: 8px;
}

.book_contents_detail .book-contens_time {
  font-size: 12px;
  margin-left: 20px;
  color: #9199a1;
}

.book_contents_detail .taste-btn {
  width: 76px;
  height: 30px;
  position: absolute;
  top: 12px;
  right: 0;
  text-align: center;
  font-size: 12px;
  color: #37f;
  line-height: 30px;
  font-weight: 700;
  background: rgba(51, 119, 255, 0.1);
  border-radius: 18px;
  transition: all 0.3s;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
}

.book_contents_detail .taste-btn:hover {
  background-color: rgba(0, 136, 204, 0.2);
}

.book_contents_detail div:first-child div {
  top: 1px;
}
</style>

<script>
import articleApi from '@/api/article'
import { Message } from 'element-ui'
import showdown from "showdown";

export default {
  data () {
    return {
      bookItem: {}, //当前页
      activeComment: 'hotComment',
      bookDesc: '',
      chapterList: [],
      tabPosition: 'left',
      commentList: [],
      isFirstComment: 1,
      activeName: 'bookDescrb'
    }
  },
  created () {
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
    getHomeBookDetail (bookId) {
      articleApi.getBookDetails(bookId).then((response) => {
        this.bookItem = response.data.book
        this.changMarkToHtml(this.bookItem.bookDetail)
        this.bookContents = response.data.content_list
      })
    },

    tabClickBookInfo (tab, event) {
      if (tab.name == 'bookComment') {
        this.comentClick(null, null)
      } else if (tab.name == 'bookContents') {
        this.getBookContents()
      }
    },

    comentClick (tab, event) {
      var type = 1
      if (tab && tab.name == 'bestComment') {
        type = 2
      }
      if (tab && tab.name == 'latestComment') {
        type = 3
      }
      if (tab && tab.name == 'undealComment') {
        type = 4
      }
      articleApi
        .getBookComments({ bookId: this.bookItem.id, type: type })
        .then((response) => {
          this.commentList = response.data.comments;
        })
    },

    getBookContents () {
      articleApi
        .getBookContents({ bookId: this.bookItem.id })
        .then((response) => {
          this.chapterList = response.data.chapterList;
        })
    },

    changMarkToHtml (markstring) {
      var converter = new showdown.Converter();
      this.bookDesc = converter.makeHtml(markstring);
    },
  },

  computed: {
    bookContentsCount: function () {
      var count = 0;
      for (var i = 0; i < this.chapterList.length; i++) {
        var chapter = this.chapterList[i];
        if (chapter.chapterContents) {
          count += chapter.chapterContents.length;
        }
      }
      return count;
    },
  },
}
</script>
