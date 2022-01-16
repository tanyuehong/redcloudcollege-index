<template>
  <div id="aCoursesList"
       class="bg-fa of">
    <!-- /课程列表 开始 -->
    <section class="container">
      <div class="course_content">
        <header class="course-title">
          <h2>全部课程</h2>
        </header>
        <div class="course-class-group">
          <section class="course-top-group">
            <div class="course-group-wrap">
              <span>课程类别</span>
            </div>
            <ul class="op_couse_subtag">
              <li>
                <a title="全部"
                   href="#">全部</a>
              </li>
              <li v-for="(item, index) in subjectNestedList"
                  :key="index"
                  :class="{ active: oneIndex == index }">
                <a :title="item.title"
                   href="#"
                   @click="searchOne(item.id, index)">
                  {{ item.title }}
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <div class="clear"></div>
      <section class="fl">
        <ul class="op_course_subtag clearfix">
          <li class="li-course-item">
            <a title="销量"
               href="javascript:void(0);"
               @click="searchBuyCount()">
              销量
              <span :class="{ hide: buyCountSort == '' }">↓</span>
            </a>
          </li>
          <li class="li-course-item">
            <a title="最新"
               href="javascript:void(0);"
               @click="searchGmtCreate()">
              最新
              <span :class="{ hide: gmtCreateSort == '' }">↓</span>
            </a>
          </li>
          <li class="li-course-item">
            <a title="价格"
               href="javascript:void(0);"
               @click="searchPrice()">
              价格&nbsp;
              <span :class="{ hide: priceSort == '' }">↓</span>
            </a>
          </li>
        </ul>
      </section>
      <div class="clearfix"></div>
      <div class="course-list-content">
        <!-- /无数据提示 开始-->
        <section class="no-data-wrap"
                 v-if="data.total == 0">
          <em class="icon30 no-data-ico">&nbsp;</em>
          <span class="c-666 fsize14 ml10 vam">
            没有相关数据，小编正在努力整理中...
          </span>
        </section>
        <!-- /无数据提示 结束-->
        <div v-if="data.total > 0"
             class="comm-course-list">
          <ul class="of"
              id="bna">
            <li v-for="course in data.items"
                :key="course.id">
              <div class="cc-l-wrap">
                <section class="course-img">
                  <img :src="course.imgUrl"
                       class="img-responsive"
                       :alt="course.title" />
                  <div class="cc-mask">
                    <nuxt-link title="开始学习"
                               class="comm-btn c-btn-1"
                               :to="{name:'course-id',params:{id:course.id}}">开始学习</nuxt-link>
                  </div>
                </section>

                <div class="course-index-title">
                  <span class="course-index-tag">
                    自研
                  </span>
                  <a href="#"
                     :title="course.title"
                     class="course-title-content">
                    {{ course.title }}
                  </a>
                </div>
                <section class="course-info-detail">
                  <span class="fl jgAttr c-ccc f-fA">
                    <i class="c-666">{{course.level}}</i>
                    |
                    <i class="c-666">{{course.lessonNum}}课时</i>
                  </span>
                </section>
                <div class="buy-info">
                  <div class="buy-info_left">
                    <!----> <span class="buy-count">已有{{course.buyCount}}人学习</span>
                  </div>
                  <div class="buy-info_right">
                    <!----> <span class="price"
                          v-if="course.price>0"><span class="yan">￥</span>{{course.price}}</span>
                    <span class="price"
                          v-if="course.price==0">免费</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div class="clear"></div>
        </div>
      </div>
      <!-- 公共分页 开始 -->
      <div>
        <div class="paging">
          <!-- undisable这个class是否存在，取决于数据属性hasPrevious -->
          <a :class="{ undisable: !data.hasPrevious }"
             href="#"
             title="首页"
             @click.prevent="gotoPage(1)">
            首
          </a>
          <a :class="{ undisable: !data.hasPrevious }"
             href="#"
             title="前一页"
             @click.prevent="gotoPage(data.current - 1)">
            &lt;
          </a>
          <a v-for="page in data.pages"
             :key="page"
             :class="{
                  current: data.current == page,
                  undisable: data.current == page,
                }"
             :title="'第' + page + '页'"
             href="#"
             @click.prevent="gotoPage(page)">
            {{ page }}
          </a>
          <a :class="{ undisable: !data.hasNext }"
             href="#"
             title="后一页"
             @click.prevent="gotoPage(data.current + 1)">
            &gt;
          </a>
          <a :class="{ undisable: !data.hasNext }"
             href="#"
             title="末页"
             @click.prevent="gotoPage(data.pages)">
            末
          </a>
          <div class="clear" />
        </div>
      </div>
    </section>
  </div>
  </section>
  </section>
  <!-- /课程列表 结束 -->
  </div>
</template>
<script>

import '~/assets/css/coursecommon.css'
import courseApi from '@/api/course'

export default {
  data () {
    return {
      page: 1, //当前页
      data: {}, //课程列表
      subjectNestedList: [], // 一级分类列表
      subSubjectList: [], // 二级分类列表

      searchObj: {}, // 查询表单对象

      oneIndex: -1,
      twoIndex: -1,
      buyCountSort: '',
      gmtCreateSort: '',
      priceSort: '',
    }
  },
  created () {
    //课程第一次查询
    this.initCourseFirst()
    //一级分类显示
    this.initSubject()
  },
  methods: {
    //1 查询第一页数据
    initCourseFirst () {
      courseApi.getCourseList(1, 8, this.searchObj).then((response) => {
        this.data = response.data
      })
    },

    //2 查询所有一级分类
    initSubject () {
      courseApi.getAllSubject().then((response) => {
        this.subjectNestedList = response.data.list
      })
    },

    //3 分页切换的方法
    gotoPage (page) {
      if (page == 0 || page > this.data.pages) {
        return
      }
      courseApi.getCourseList(page, 8, this.searchObj).then((response) => {
        this.data = response.data
      })
    },

    //4 点击某个一级分类，查询对应二级分类
    searchOne (subjectParentId, index) {
      //把传递index值赋值给oneIndex,为了active样式生效
      this.oneIndex = index

      this.twoIndex = -1
      this.searchObj.subjectId = ''
      this.subSubjectList = []

      //把一级分类点击id值，赋值给searchObj
      this.searchObj.subjectParentId = subjectParentId
      //点击某个一级分类进行条件查询
      this.gotoPage(1)

      //拿着点击一级分类id 和 所有一级分类id进行比较，
      //如果id相同，从一级分类里面获取对应的二级分类
      for (let i = 0; i < this.subjectNestedList.length; i++) {
        //获取每个一级分类
        var oneSubject = this.subjectNestedList[i]
        //比较id是否相同
        if (subjectParentId == oneSubject.id) {
          //从一级分类里面获取对应的二级分类
          this.subSubjectList = oneSubject.children
        }
      }
    },

    //5 点击某个二级分类实现查询
    searchTwo (subjectId, index) {
      //把index赋值,为了样式生效
      this.twoIndex = index
      //把二级分类点击id值，赋值给searchObj
      this.searchObj.subjectId = subjectId
      //点击某个二级分类进行条件查询
      this.gotoPage(1)
    },

    //6 根据销量排序
    searchBuyCount () {
      //设置对应变量值，为了样式生效
      this.buyCountSort = '1'
      this.gmtCreateSort = ''
      this.priceSort = ''

      //把值赋值到searchObj
      this.searchObj.buyCountSort = this.buyCountSort
      this.searchObj.gmtCreateSort = this.gmtCreateSort
      this.searchObj.priceSort = this.priceSort

      //调用方法查询
      this.gotoPage(1)
    },

    //7 最新排序
    searchGmtCreate () {
      //设置对应变量值，为了样式生效
      this.buyCountSort = ''
      this.gmtCreateSort = '1'
      this.priceSort = ''

      //把值赋值到searchObj
      this.searchObj.buyCountSort = this.buyCountSort
      this.searchObj.gmtCreateSort = this.gmtCreateSort
      this.searchObj.priceSort = this.priceSort

      //调用方法查询
      this.gotoPage(1)
    },

    //8 价格排序
    searchPrice () {
      //设置对应变量值，为了样式生效
      this.buyCountSort = ''
      this.gmtCreateSort = ''
      this.priceSort = '1'

      //把值赋值到searchObj
      this.searchObj.buyCountSort = this.buyCountSort
      this.searchObj.gmtCreateSort = this.gmtCreateSort
      this.searchObj.priceSort = this.priceSort

      //调用方法查询
      this.gotoPage(1)
    },
  },
}
</script>
<style scoped>
.course-title {
  overflow: hidden;
  clear: both;
  margin: 0px 0px 20px 0px;
  border-bottom: 1px solid rgba(28, 31, 33, 0.1);
  padding-bottom: 15px;
  padding-left: 15px;
}
.course-class-group {
  margin-top: 10px;
}

.active {
  background: #bdbdbd;
}
.hide {
  display: none;
}
.show {
  display: block;
}
.course_content {
  background-color: white;
  padding-top: 20px;
}

.course_content h2 {
  font-size: 20px;
  font-weight: 600;
  margin-top: 0px;
  margin-bottom: 0px;
  color: #333;
}

.course_content .course_header_title {
  text-align: left;
  padding-left: 15px;
  color: #333;
  margin-bottom: 10px;
  line-height: 40px;
  border-bottom: 1px dotted #ddd;
}

.course-top-group .op_couse_subtag {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
  padding-bottom: 20px;
  padding-left: 10px;
  font-size: 14px;
  color: #666;
}

.course-top-group .op_couse_subtag li {
  margin-right: 15px;
}

.course-top-group .course-group-wrap {
  float: left;
  padding-left: 15px;
  font-size: 14px;
  color: #666;
  line-height: auto;
}

.op_course_subtag {
  display: flex;
  flex-wrap: wrap;
  height: auto;
  margin-top: 10px;
}

.op_course_subtag .li-course-item {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 1rem;
  font-size: 1.2rem;
  color: #8a9aa9;
  padding: 0 0.83rem;
  margin-bottom: 1rem;
  margin-right: 20px;
  height: 32px;
  width: 70px;
}
.course-list-content {
  background: #ffffff;
  padding-top: 20px;
}

.course-detail-title {
  overflow: hidden;
  clear: both;
  margin: 0px 0px 20px 0px;
  padding-bottom: 15px;
  padding-left: 0px;
}
</style>
