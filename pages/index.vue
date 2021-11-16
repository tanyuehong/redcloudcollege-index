<template>
  <div>
    <el-carousel indicator-position="outside" height="480px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <a target="_blank" :href="item.linkUrl">
          <img :src="item.imageUrl" :alt="item.title" />
        </a>
      </el-carousel-item>
    </el-carousel>

    <!-- 幻灯片 结束 -->

    <div class="golobal_content">
      <!-- 网校课程 开始 -->
      <section class="container">
        <div class="every_qustion">
          <div class="left_title fl">
          <img
                src="~/assets/img/erery_qustion.png"
                alt=""
              />
          </div>
          <div class="right_content fl">
            面向对象设计的准则？
          </div>
        </div>

        <div class="home_function">
          <a href="/teacher/1" class="function_btn ml180 mt20 fl">
          <img
                src="~/assets/img/home_study_progress.png"
                alt=""
              />
              <div class="btn_title">学习进度</div>
          </a>
          <a class="function_btn mr180 mt20 fr">
          <img
                src="~/assets/img/home_my_faveriter.png"
                alt=""
              />
               <div class="btn_title">我的收藏</div>
          </a>
        </div>
        <div class="couselist">
          <div class="comm-title">
            <h2 class="mt20">
              <span class="c-333">热门课程</span>
            </h2>
          </div>
          <div>
            <article class="comm-course-list">
              <ul class="of" id="bna">
                <li v-for="course in eduList" :key="course.id">
                  <div class="cc-l-wrap">
                    <section class="course-img">
                      <img
                        :src="course.cover"
                        class="img-responsive"
                        :alt="course.title"
                      />
                      <div class="cc-mask">
                        <a href="#" title="开始学习" class="comm-btn c-btn-1">
                          开始学习
                        </a>
                      </div>
                    </section>
                    <h3 class="hLh30 txtOf mt10">
                      <a
                        href="#"
                        :title="course.title"
                        class="course-title fsize18 c-333"
                      >
                        {{ course.title }}
                      </a>
                    </h3>
                    <section class="mt10 hLh20 of">
                      <span
                        class="fr jgTag bg-green"
                        v-if="Number(course.price) === 0"
                      >
                        <i class="c-fff fsize12 f-fA">免费</i>
                      </span>
                      <span class="fl jgAttr c-ccc f-fA">
                        <i class="c-999 f-fA">9634人学习</i>
                        |
                        <i class="c-999 f-fA">9634评论</i>
                      </span>
                    </section>
                  </div>
                </li>
              </ul>
              <div class="clear"></div>
            </article>
            <section class="tac">
              <a href="/course" title="更多课程" class="comm-btn c-btn-2">
                更多课程
              </a>
            </section>
          </div>
        </div>
      </section>
      <!-- /网校课程 结束 -->
      <!-- 网校名师 开始 -->
      <div>
        <section class="container">
          <div class="gusslike_page">
            <header class="comm-title">
              <h2 class="tac mt20">
                <span class="c-333">猜你喜欢</span>
              </h2>
            </header>
            <div>
              <article class="i-teacher-list">
                <ul class="of">
                  <li v-for="teacher in teacherList" :key="teacher.id">
                    <section class="i-teach-wrap">
                      <div class="i-teach-pic">
                        <a href="/teacher/1" :title="teacher.name">
                          <img :alt="teacher.name" :src="teacher.avatar" />
                        </a>
                      </div>
                      <div class="mt10 hLh30 txtOf tac">
                        <a
                          href="/teacher/1"
                          :title="teacher.name"
                          class="fsize18 c-666"
                        >
                          {{ teacher.name }}
                        </a>
                      </div>
                      <div class="hLh30 txtOf tac">
                        <span class="fsize14 c-999">{{ teacher.career }}</span>
                      </div>
                      <div class="mt15 i-q-txt">
                        <p class="c-999 f-fA">{{ teacher.intro }}</p>
                      </div>
                    </section>
                  </li>
                </ul>
                <div class="clear"></div>
              </article>
            </div>
          </div>
          <div class="op_app_decrb fr mt20">
            <div class="wechatma-con js-wechatma-con">
              <div class="ma-con">
                <div class="ma"></div>
                <div class="desc">
                  <div class="title">扫码关注开源实践网服务号</div>
                  <div class="item-con">
                    <div class="item">干货分享</div>
                    <div class="item">定期活动</div>
                    <div class="item">课程优惠</div>
                    <div class="item">专栏福利</div>
                  </div>
                </div>
              </div>
              <div class="text-con">
                官方优惠福利活动一手掌握，关注开源实践官网（ID：www.redskt.com），和1万+客户端程序员一起成长！
              </div>
            </div>
            <div class="download-app js-show-download clearfix">
              <img
                src="~/assets/img/appLogo.png"
                alt=""
                class="logo-icon fl"
              />
              <div class="text fl">
                <h4>下载开源实践APP</h4>
                <p>更好的体验 学习随处可享</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <!-- /网校名师 结束 -->
    </div>
  </div>
</template>

<script>
import '~/assets/css/appdown.css'
import index from '@/api/index'

export default {
  // asyncData({ params, error }) {
  //   return index.getIndexData().then(response => {
  //         return { data: response.data }
  //      })
  // },
  data() {
    return {
      swiperOption: {
        //配置分页
        pagination: {
          el: '.swiper-pagination', //分页的dom节点
        },
        //配置导航
        navigation: {
          nextEl: '.swiper-button-next', //下一页dom节点
          prevEl: '.swiper-button-prev', //前一页dom节点
        },
      },
      //banner数组
      bannerList: [],
      eduList: [],
      teacherList: [],
    }
  },
  created() {
    //调用查询banner的方法
    this.getBannerList()
    this.getHotCourseTeacher()
  },
  methods: {
    //查询banner数据
    getBannerList() {
      index.getListBanner().then((response) => {
        this.bannerList = response.data.list
      })
    },
    //查询热门课程和名师
    getHotCourseTeacher() {
      index.getIndexData().then((response) => {
        this.eduList = response.data.eduList
        this.teacherList = response.data.teacherList
      })
    },
  },
}
</script>

<style>
.in-wrap {
  background: #f7f7f7;
}
.every_qustion {
  margin-bottom: 20px;
  height: 80px;
  background: white;
  border-radius: 20px;
}

.home_function {
  margin-bottom: 10px;
  height: 155px;
  background: white;
  border-radius: 20px;
}

.home_function  a {
  display:block;
}

.home_function a:hover{text-decoration:none}

.function_btn  img {
   height: 80px;
}

.function_btn  .btn_title {
  font-size:20px;
  color: #333;
  font-weight:600;
  padding-top:5px;
}

.every_qustion .left_title img {
   margin-left:10px;
}

.every_qustion .right_content {
    line-height:80px;
    font-size:20px;
    font-weight:600;
    margin-left:20px;
}

.comm-course-list ul {
    margin-left: -10px;
    margin-right: 10px;
}

.comm-title{overflow:hidden;clear:both;margin:0px 0 30px}
.comm-title h2  {
  font-size:20px;
  text-align:center;
  padding-left:20px;
  font-weight:600;
}
.couselist {
  background: white;
}
.gusslike_page {
  background: white;
  margin-top: 20px;
  width: 790px;
  float: left;
  margin-bottom:20px;
}

.op_app_decrb {
  width: 326px;
  height: 393px;
}

</style>
