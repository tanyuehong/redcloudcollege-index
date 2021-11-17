<template>
  <div class="golobal_content">
    <div class="op_top_back">
    </div>
    <section class="container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
    </section>
  </div>
</template>
<script>
import teacherApi from '@/api/teacher'

export default {
  //异步调用，调用一次
  //params: 相当于之前 this.$route.params.id  等价  params.id
  asyncData({ params, error }) {
    return teacherApi.getTeacherList(1, 8).then((response) => {
      return { data: response.data }
    })
  },
  methods: {
    //分页切换的方法
    //参数是页码数
    gotoPage(page) {
      teacherApi.getTeacherList(page, 8).then((response) => {
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
