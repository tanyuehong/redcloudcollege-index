
<template>

</template>

<style>

</style>

<script>
import articleApi from '@/api/article'
import marked from 'marked'
import { Message } from 'element-ui'

export default {
  data() {
    return {
      bookItem: {}, //当前页
      activeComment: 'hotComment',
      bookDesc: '',
      chapterList: [],
      tabPosition: 'left',
      commentList: [],
      isFirstComment: 1,
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
        this.changMarkToHtml(this.bookItem.bookDetail)
        this.bookContents = response.data.content_list
      })
    },

    tabClickBookInfo(tab, event) {
      commonLog(tab)
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
          this.commentList = response.data.comments;
        })
    },

    getBookContents() {
      articleApi
        .getBookContents({ bookId: this.bookItem.id })
        .then((response) => {
          this.chapterList = response.data.chapterList;
        })
    },

    changMarkToHtml(markstring) {
      this.bookDesc = marked(markstring)
    },
  },

  computed: {
    bookContentsCount: function () {
      var count = 0;
      for (var i=0;i<this.chapterList.length;i++)
      {
         var chapter = this.chapterList[i];
         if(chapter.chapterContents) {
            count += chapter.chapterContents.length;
         }
      }
      return count;
    },
  },
}
</script>