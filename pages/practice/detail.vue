<template>
<div class="golobal_content">
<section class="container">

<div class="practice_detail">

<div class="practice_header">
</div>

<div class="practice_content">
</div>

</div>


</section>
</div>
</template>
<style>
</style>
<script>

import showdown from 'showdown'
import '~/assets/css/markdown.css'
import realPractice from '@/api/realpractice'


export default {
  //异步调用，调用一次
  //params: 相当于之前 this.$route.params.id  等价  params.id
  // this.$route.query.id
  asyncData({ params, error }) {
    return realPractice.getRealPraticeDetail(params.id).then((response) => {
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