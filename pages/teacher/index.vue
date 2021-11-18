<template>
  <div class="golobal_content">
    <div class="op_top_back">
    </div>
    <section class="container">
    <el-tabs v-model="activeName" @tab-click="handleClick">

    <el-tab-pane :label="item.name" :name="item.id" v-for="item in typeList" :key="item.id">
    测试内容
    </el-tab-pane>
    </el-tabs>
    </section>
  </div>
</template>
<script>
import realPractice from '@/api/realpractice'

export default {
  //异步调用，调用一次
  //params: 相当于之前 this.$route.params.id  等价  params.id
   data () {
    return { activeName: 'first' }
  },
  asyncData({ params, error }) {
    return realPractice.getHomeRealPratice(1, 8).then((response) => {
      return { typeList: response.data.typeList,activeName:response.data.typeList[0].id }
    })
  },
  methods: {
    //分页切换的方法
    //参数是页码数
     handleClick(tab, event) {
        console.log(tab, event);
      },
    gotoPage(page) {
      realPractice.getTeacherList(page, 8).then((response) => {
        this.data = response.data
      })
    },
  },
}
</script>

<style>

.op_top_back {
background-color: white;
height:80px;
}
.el-tabs--top {
  margin-top:-50px;
}
.el-tabs__header {
 background-color: white;
}
.teacher_content {
  background-color: white;
}

.el-tabs__nav-wrap::after {
  background-color: white;
}

.el-tabs__nav {
    height:50px
}
</style>
>
