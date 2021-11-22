<template>
<div class="golobal_content">
<section class="container">

<div class="practice_detail">

<div class="practice_header">
</div>

<div class="practice_content" v-html="changeMarkToHtml(pitem.content)">
</div>

</div>

</section>
</div>
</template>
<style>
.practice_content {
  background:white;
  padding-left:15px;
  padding-top:20px;
  padding-bottom:15px;
  margin-bottom:20px;
  margin-top:20px;
  padding-right:15px;
}
</style>
<script>

import showdown from 'showdown'
import '~/assets/css/markdown.css'
import realPractice from '@/api/realpractice'

export default {
  //异步调用，调用一次
  //params: 相当于之前 this.$route.params.id  等价  params.id
  // this.$route.query.id
  asyncData({ query, error }) {
    return realPractice.getRealPraticeDetail(query.id).then((response) => {
      return {
        pitem: response.data.pitem,
      }
    })
  },
  methods: {
    //分页切换的方法
    //参数是页码数
    handleClick(tab, event) {
      console.log(tab, event)
    },
    changeMarkToHtml(content) {
      var converter = new showdown.Converter()
      return converter.makeHtml(content)
    },
  },
  computed: {},
}

</script>