<template>
  <div>
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="headTitle">
          <span class="book_title">{{ bookItem.title }}</span>
          /
          <span>{{ contentsItem.title }}</span>
        </div>
      </div>
    </nav>

    <div class="container">
      <div class="book_tecAritcle" v-html="bookDesc"></div>
    </div>
  </div>
</template>

<style>
html {
    font-size: 14px;
}

body {
    font-family: -apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Helvetica Neue","PingFang SC","Hiragino Sans GB","Microsoft YaHei",Arial;
    line-height: 1.8;
}

b, strong {
    font-weight: 550;
}
.navbar {
    min-height: 40px;
}
.headTitle span {
    font-size:14px;
    line-height:40px;
}

.headTitle .book_title {
   font-size:16px;
   font-weight: 500;
}
.book_tecAritcle {
    padding-top:50px;
}

h1, h2, h3, h4, h5 {
  margin-top: 16px;
  margin-bottom: 16px;
  font-weight: 550;
  color: #404040;
  font-weight: bold;
}
p , dl {
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
ul, ol {
    padding: 0;
    padding-left: 24px;
    margin: 0;
}
li {
    line-height: 24px;
}
p, ul, ol {
    font-size: 16px;
    line-height: 24px;
}

ol ol, ul ol {
    list-style-type: lower-roman;
}

code, pre {
    border-radius: 3px;
    background-color:#f7f7f7;
    color: inherit;
}

code {
    margin: 0 2px;
    font-family: "Courier New",sans-serif !important;
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
    var converter = new showdown.Converter();
    this.bookDesc      = converter.makeHtml(markstring);
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
  },
  layout: 'content',
}
</script>
