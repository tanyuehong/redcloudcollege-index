<template>
  <div class="container-fluid full_backgroud">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="row">
        <div class="col-md-9 col-md-offset-3">
          <div class="headTitle">
            <a
              href="javascript:void(0);"
              class="hidden-xs hidden-sm"
              v-on:click="contentsBtnClick"
            >
              <span
                class="glyphicon glyphicon-list content_btn_size"
                aria-hidden="true"
              ></span>
            </a>
            <span class="book_title">{{ bookItem.title }}</span>
            <span>/</span>
            <span>{{ contentsItem.title }}</span>
          </div>
           <div class="left-back">
            <span>返回</span>
            <i class="el-icon-arrow-right back_item"></i>
          </div>
        </div>
      </div>
    </nav>
    <div class="row">
      <div class="col-md-3 hidden-xs hidden-sm">
        <div class="catalog-con">
          <p class="title">目录</p>
          <div class="book_lefte_descrb">
            <div class="item">
              <div class="section clearfix">
                <p class="sec_name l">第 1 章：微服务的规划与设计</p>
              </div>
              <ul>
                <li>
                  <!-- 开放 -->
                  <a href="/read/91/article/2551" class="js-read">
                    <div class="articleName">
                      01 开篇词-什么是微服务，是否要实施微服务？
                    </div>
                    <div class="info">
                      <!-- 开放 -->
                      <!-- <span>4658 个文字</span>                              <i class="imv2-dot_samll"></i>                             <span>1565 次阅读</span>-->
                    </div>
                    <!-- 未购买 -->
                    <div class="taste-btn">试读</div>
                  </a>
                </li>
                <li>
                  <!-- 开放 -->
                  <a href="/read/91/article/2552" class="js-read">
                    <div class="articleName">
                      02 单体服务转为微服务体系需要注意什么问题？
                    </div>
                    <div class="info">
                      <!-- 开放 -->
                      <!-- <span>4485 个文字</span>                              <i class="imv2-dot_samll"></i>                             <span>966 次阅读</span>-->
                    </div>
                    <!-- 未购买 -->
                    <div class="taste-btn">试读</div>
                  </a>
                </li>
                <li>
                  <!-- 开放 -->
                  <a href="javascript:;" class="js-lock">
                    <div class="articleName">
                      03 如何确立微服务的技术架构体系与服务分层？
                    </div>
                    <div class="info">
                      <!-- 开放 -->
                      <!-- <span>4105 个文字</span>                              <i class="imv2-dot_samll"></i>                             <span>123 次阅读</span>-->
                    </div>
                    <!-- 未购买 -->
                    <div class="lock-btn"><i class="imv2-lock"></i></div>
                  </a>
                </li>
                <li>
                  <!-- 开放 -->
                  <a href="/read/91/article/2554" class="js-read">
                    <div class="articleName">04 如何进行微服务的技术选型？</div>
                    <div class="info">
                      <!-- 开放 -->
                      <!-- <span>5419 个文字</span>                              <i class="imv2-dot_samll"></i>                             <span>824 次阅读</span>-->
                    </div>
                    <!-- 未购买 -->
                    <div class="taste-btn">试读</div>
                  </a>
                </li>
                <li>
                  <!-- 开放 -->
                  <a href="javascript:;" class="js-lock">
                    <div class="articleName">05 怎样进行微服务的拆分？</div>
                    <div class="info">
                      <!-- 开放 -->
                      <!-- <span>3462 个文字</span>                              <i class="imv2-dot_samll"></i>                             <span>103 次阅读</span>-->
                    </div>
                    <!-- 未购买 -->
                    <div class="lock-btn"><i class="imv2-lock"></i></div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div v-bind:class="bookContentShow">
        <div class="book_tecAritcle" v-html="bookDesc"></div>
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

b,
strong {
  font-weight: 550;
}
.navbar {
  min-height: 40px;
}

.navbar .left-back {
  font-size: 16px;
  color: #1c1f21;
  font-weight: 500;
  display: inline-block;
  height: 28px;
  line-height: 28px;
  vertical-align: middle;
  padding-left: 20px;
  padding-top: 5px;
  margin-right: 20px;
  float:right;
}
.navbar .left-back span {
  vertical-align: middle;
}
.navbar .back_item {
  font-size: 20px;
  vertical-align: middle;
}

.full_backgroud {
  background-color: #f0f2f5;
}

.catalog-con {
  background: #fff;
  padding-top: 58px;
}

.catalog-con p {
  margin-top: 0px;
  margin-bottom: 0px;
}

.catalog-con .title {
  font-size: 18px;
  padding-left: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #f3f5f6;
}

.book_lefte_descrb .item .section {
  border-bottom: 1px solid #f3f5f6;
}

.book_lefte_descrb .item .section .sec_name {
  width: 100%;
  font-size: 15px;
  color: #1c1f21;
  line-height: 18px;
  text-align: left;
  font-weight: 700;
  padding: 16px 20px;
}

.book_lefte_descrb .item ul {
  margin-left: 0px;
  padding-left: 0px;
}
.book_lefte_descrb .item ul li {
  position: relative;
  box-sizing: border-box;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(28, 31, 33, 0.1);
}
.book_lefte_descrb .item articleName {
  max-width: 380px;
  font-size: 15px;
  color: #1c1f21;
  line-height: 24px;
  margin-bottom: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.book_lefte_descrb .item ul li .taste-btn {
  position: absolute;
  right: 10px;
  text-align: center;
  font-size: 12px;
  color: #37f;
  line-height: 14px;
  bottom: 20px;
  font-weight: 700;
  background: #fff;
  box-shadow: -12px 0 14px 9px #fff;
}

.book_lefte_descrb .item a {
  color: #1c1f21;
}
.headTitle {
float: left;
width:300px;
margin-left:10px;
}

.headTitle .icon_open {
width:20px;
}

.headTitle a {
  color: #9199a1;
}
.headTitle span {
  font-size: 14px;
  line-height: 40px;
  vertical-align: middle;
}
.headTitle .content_btn_size {
  font-size: 20px;
  top: -1px;
  vertical-align: middle;
}

.headTitle .book_title {
  font-size: 16px;
  font-weight: 500;
  padding-left: 5px;
}
.book_tecAritcle {
  background: #fff;
  padding: 20px 20px;
  margin-top: 40px;
}
.book_lefte_contents {
  padding-top: 50px;
}

h1,
h2,
h3,
h4,
h5 {
  margin-top: 16px;
  margin-bottom: 16px;
  font-weight: 550;
  color: #404040;
  font-weight: bold;
}
p,
dl {
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 0;
}
h1 {
  font-size: 42px;
  line-height: 54px;
}
h2 {
  font-size: 32px;
  line-height: 42px;
}
h3 {
  font-size: 26px;
  line-height: 30px;
}
h4 {
  font-size: 21px;
  line-height: 26px;
}
h5 {
  font-size: 16px;
  line-height: 23px;
}
a {
  color: #0099ff;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
}
a:hover {
  text-decoration: none;
  color: #ff6600;
}
a:visited {
  /*color: purple;*/
}
ul,
ol {
  padding: 0;
  padding-left: 24px;
  margin: 0;
}
li {
  line-height: 24px;
}
p,
ul,
ol {
  font-size: 16px;
  line-height: 24px;
}

ol ol,
ul ol {
  list-style-type: lower-roman;
}

code,
pre {
  border-radius: 3px;
  background-color: #f7f7f7;
  color: inherit;
}

code {
  margin: 0 2px;
  font-family: 'Courier New', sans-serif !important;
  font-size: 12px !important;
  line-height: 20px;
  background-color: #f5f5f5 !important;
  padding: 0 5px !important;
  border-radius: 3px !important;
  line-height: 1.8;
  margin: 1px 5px;
  vertical-align: middle;
  display: inline-block;
  overflow-x: auto;
  color: #333;
}

pre {
  margin-top: 10px;
  margin-bottom: 10px;
  white-space: pre-wrap;
  line-height: 1.7em;
  overflow: auto;
  padding: 6px 10px;
  border-left: 3px solid #f56c6c;
}
</style>

<script>
import articleApi from '@/api/article'
import showdown from 'showdown'
import { Message } from 'element-ui'

export default {
  data() {
    return {
      articleItem: {},
      bookItem: {},
      contentsItem: {},
      bookDesc: '',

      chapterList: [],
      tabPosition: 'left',
      commentList: [],
      isFirstComment: 1,
      isShowContent: false,
    }
  },
  created() {
    var articleId = this.$route.query.id
    if (articleId && articleId.length > 0) {
      this.getBookArticleDetail(articleId)
    } else {
      Message({
        message: '参数异常，请重新尝试！',
        type: 'error',
        duration: 2000,
      })
    }
  },
  mounted() {
    window.addEventListener('resize', this.windowFrameChange)
    this.windowFrameChange()
  },
  methods: {
    //分页切换的方法
    //参数是页码数
    getBookArticleDetail(articleId) {
      articleApi.getBookArticleDetail(articleId).then((response) => {
        this.articleItem = response.data.item
        this.bookItem = response.data.book
        this.contentsItem = response.data.contents
        this.changMarkToHtml(this.articleItem.content)
      })
    },

    tabClickBookInfo(tab, event) {
      if (this.isFirstComment == 1 && tab.name == 'bookComment') {
        this.comentClick(null, null)
        this.isFirstComment = 2
      }

      if (tab.name == 'bookContents') {
        this.getBookContents()
        this.isFirstComment = 2
      }
    },

    comentClick(tab, event) {
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
          this.commentList = response.data.comments
        })
    },

    getBookContents() {
      articleApi
        .getBookContents({ bookId: this.bookItem.id })
        .then((response) => {
          this.chapterList = response.data.chapterList
        })
    },

    changMarkToHtml(markstring) {
      var converter = new showdown.Converter()
      this.bookDesc = converter.makeHtml(markstring)
    },

    contentsBtnClick() {
      this.isShowContent = true
    },
    windowFrameChange() {
      if (window) {
        window.console.log('heigit ===' + window.innerWidth + 'px')
      }
    },
  },

  computed: {
    bookContentsCount: function () {
      var count = 0
      for (var i = 0; i < this.chapterList.length; i++) {
        var chapter = this.chapterList[i]
        if (chapter.chapterContents) {
          count += chapter.chapterContents.length
        }
      }
      return count
    },

    bookContentShow: function () {
      return {
        'col-md-9': this.isShowContent == false,
        'col-md-12': this.isShowContent,
      }
    },
  },
  layout: 'content',
}
</script>
