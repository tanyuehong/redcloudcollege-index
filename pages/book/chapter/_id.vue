<template>
  <div class="container-fluid full_backgroud">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="row">
        <div v-bind:class="bookNavMenuShow">
          <div class="headTitle">
            <a href="javascript:void(0);"
               class="hidden-xs hidden-sm"
               v-on:click="contentsBtnClick">
              <span class="glyphicon glyphicon-list content_btn_size"
                    aria-hidden="true"></span>
            </a>
            <span class="book_title">{{ bookItem.title }}</span>
            <span>/</span>
            <span>{{ contentsItem.title }}</span>
          </div>
          <div class="left-back">
            <a href="javascript:void(0);"
               v-on:click="backBtnClick">
              <span>返回</span>
              <i class="el-icon-arrow-right back_item"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
    <div class="row">
      <div v-bind:class="bookMuluShow">
        <div class="catalog-con">
          <p class="title">目录</p>
          <div class="book_lefte_descrb">
            <div class="item" v-for="chapter in chapterList" :key="chapter.id">
              <div class="section clearfix">
                <p class="sec_name l">{{chapter.title}}</p>
              </div>
              <ul>
                <li v-for="ccontents in chapter.chapterContents" :key="ccontents.id">
                  <!-- 开放 -->
                  <nuxt-link :to="'/book/chapter/'+ccontents.articleId" class="js-read">
                    <div class="articleName">
                      {{ccontents.title}}
                    </div>
                    <div class="info">
                      <!-- 开放 -->
                      <!-- <span>4658 个文字</span>                              <i class="imv2-dot_samll"></i>                             <span>1565 次阅读</span>-->
                    </div>
                    <!-- 未购买 -->
                    <div class="taste-btn">试读</div>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div v-bind:class="bookContentShow">
        <div class="book_tecAritcle">
          <div class="mark_content"
               v-html="bookDesc">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  float: right;
}
.navbar .left-back span {
  vertical-align: middle;
}

.left-back a {
  color: #333;
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
  width: 300px;
  margin-left: 10px;
}

.headTitle .icon_open {
  width: 20px;
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
</style>

<script>
import '~/assets/css/markdown.css'
import bookReq from '@/api/bookReq'
import bookServerReq from '@/api/bookServerReq'
import showdown from 'showdown'

export default {
  data () {
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

  asyncData ({ params, error }) {
    return bookServerReq.getBookArticleDetail(params.id).then((response) => {
      return {
        articleItem: response.data.item,
        bookItem: response.data.book,
        contentsItem: response.data.contents
      }
    });
  },

  created () {
    if (this.articleItem.content) {
      this.changMarkToHtml(this.articleItem.content);
    }
  },

  mounted () {
    window.addEventListener('resize', this.windowFrameChange)
    this.windowFrameChange();
    this.getBookContents();
  },

  methods: {
    getBookContents () {
      bookReq
        .getBookContents({ bookId: this.bookItem.id })
        .then((response) => {
          window.console.log("dddfffff");
          this.chapterList = response.data.chapterList
        })
    },

    changMarkToHtml (markstring) {
      var converter = new showdown.Converter()
      this.bookDesc = converter.makeHtml(markstring)
    },

    contentsBtnClick () {
      this.isShowContent = !this.isShowContent;
    },

    backBtnClick () {
      if (window) {
        window.location.href = "javascript:history.go(-1)";
      }
    },
    windowFrameChange () {
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
        'col-md-9': !this.isShowContent,
        'col-md-12': this.isShowContent,
      }
    },

    bookMuluShow: function () {
      return {
        'hidenP': this.isShowContent,
        'col-md-3 hidden-xs hidden-sm': !this.isShowContent,
      }
    },

    bookNavMenuShow: function () {
      return {
        'col-md-12': this.isShowContent,
        'col-md-9 col-md-offset-3': !this.isShowContent,
      }
    },
  },
  layout: 'content',
}
</script>
