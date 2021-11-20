<template>
  <div class="golobal_content">
    <div class="op_top_back">
    </div>
    <section class="container">
    <el-tabs v-model="activeName" @tab-click="handleClick">

    <el-tab-pane :label="item.name" :name="item.id" v-for="item in typeList" :key="item.id">
    <ul class="op_pratice_subtag">
    <li class="li-item"  v-for="sutem in subTypeList" :key="sutem.id"> <a>{{sutem.name}}</a> </li>
    </ul>
    <div class="op_pratice_content fl">
      
      <ul class="article_list"> 
      <li class="li-item"  v-for="bitem in blogList" :key="bitem.id"> 
      <div class="op_artie_content">
        <a class="article_title">
           {{bitem.title}}
        </a>
        <p v-html = "changModelMarkToHtml(bitem.content)">
        </p>
      </div>
      </li>
      </ul>

    </div>

    <div class="op_pratice_aside fr">
    </div>
    </el-tab-pane>
    </el-tabs>
    </section>
  </div>
</template>
<script>
import '~/assets/css/markdown.css'
import showdown from 'showdown'
import realPractice from '@/api/realpractice'

export default {
  //异步调用，调用一次
  //params: 相当于之前 this.$route.params.id  等价  params.id
   data () {
    return { activeName: 'first' }
  },
  asyncData({ params, error }) {
    return realPractice.getHomeRealPratice(1, 8).then((response) => {
      return { typeList: response.data.typeList,
               subTypeList:response.data.subTypeList,
               blogList:response.data.blogList,
               activeName:response.data.typeList[0].id }
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
     changModelMarkToHtml(content) {
      var converter = new showdown.Converter()
      return converter.makeHtml(content);
    },
  },
 computed: {
 
  }
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

.op_pratice_subtag {
    display: flex;
    flex-wrap: wrap;
    height: auto;
}
.op_pratice_subtag .li-item {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 1rem;
    font-size: 1.2rem;
    color: #8a9aa9;
    padding: 0 .83rem;
    margin-bottom: 1rem;
    margin-right: 20px;
    height:30px;
}

.op_pratice_content {
  width:780px;
  background:white;
  position: relative;
  margin-top: .33rem;
}

.op_pratice_aside {
    width: 326px;
    background:white;
    height:400px;
}

</style>
