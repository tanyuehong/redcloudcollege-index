<template>
  <div class="course_detail">
    <!-- /课程详情 开始 -->
    <section class="container">
    <div class="course_header">
      <section class="path-wrap hLh30">
        <a href="#" title class="c-999 fsize14">首页</a>
        <a href="#" title class="c-999 fsize14">
          / {{ courseWebVo.subjectLevelOne }} /
        </a>
        <span class="path_courent fsize14">{{ courseWebVo.subjectLevelTwo }}</span>
      </section>

      <div class="course_top_content">
        <div class="course_lefte_cover fl">
          <img
              width="457px"
              :src="courseWebVo.imgUrl"
              :alt="courseWebVo.title"
              class="dis c-v-pic"
            />
        </div>

        <div class="course_right_info fr">
            <div class="course_title">
                <span>{{courseWebVo.title}}</span> 
            </div>
        </div>
        <div class="clearfix"></div>
      </div>

    </div>
      <div>
        <article class="c-v-pic-wrap" style="height: 357px;">
          <section class="p-h-video-box" id="videoPlay">
           
          </section>
        </article>
        <div class="clear"></div>
      </div>
      <!-- /课程封面介绍 -->
      <div class="mt20 c-infor-box">
        <article class="fl col-7">
          <section class="mr30">
            <div class="i-box">
              <div>
                <section id="c-i-tabTitle" class="c-infor-tabTitle c-tab-title">
                  <a name="c-i" class="current" title="课程详情">课程详情</a>
                </section>
              </div>
              <article class="ml10 mr10 pt20">
                <div>
                  <h6 class="c-i-content c-infor-title">
                    <span>课程介绍</span>
                  </h6>
                  <div class="course-txt-body-wrap">
                    <section class="course-txt-body">
                      <p v-html="courseWebVo.description">
                        {{ courseWebVo.description }}
                      </p>
                    </section>
                  </div>
                </div>
                <!-- /课程介绍 -->
                <div class="mt50">
                  <h6 class="c-g-content c-infor-title">
                    <span>课程大纲</span>
                  </h6>
                  <section class="mt20">
                    <div class="lh-menu-wrap">
                      <menu id="lh-menu" class="lh-menu mt10 mr10">
                        <ul>
                          <!-- 文件目录 -->
                          <li
                            class="lh-menu-stair"
                            v-for="chapter in chapterVideoList"
                            :key="chapter.id"
                          >
                            <a
                              href="javascript: void(0)"
                              :title="chapter.title"
                              class="current-1"
                            >
                              <em class="lh-menu-i-1 icon18 mr10"></em>
                              {{ chapter.title }}
                            </a>

                            <ol class="lh-menu-ol" style="display: block;">
                              <li
                                class="lh-menu-second ml30"
                                v-for="video in chapter.children"
                                :key="video.id"
                              >
                                <a
                                  :href="'/player/' + video.videoSourceId"
                                  target="_blank"
                                >
                                  <span class="fr">
                                    <i class="free-icon vam mr10">免费试听</i>
                                  </span>
                                  <em class="lh-menu-i-2 icon16 mr5">&nbsp;</em>
                                  {{ video.title }}
                                </a>
                              </li>
                            </ol>
                          </li>
                        </ul>
                      </menu>
                    </div>
                  </section>
                </div>
                <!-- /课程大纲 -->
              </article>
            </div>
          </section>
        </article>
        <aside class="fl col-3">
          <div class="i-box">
            <div>
              <section class="c-infor-tabTitle c-tab-title">
                <a title href="javascript:void(0)">主讲讲师</a>
              </section>
              <section class="stud-act-list">
                <ul style="height: auto;">
                  <li>
                    <div class="u-face">
                      <a href="#">
                        <img
                          :src="courseWebVo.avatar"
                          width="50"
                          height="50"
                          alt
                        />
                      </a>
                    </div>
                    <section class="hLh30">
                      <a class="c-333 fsize16 fl" href="#">
                        {{ courseWebVo.teacherName }}
                      </a>
                    </section>
                    <section class="hLh20">
                      <span class="c-999">{{ courseWebVo.intro }}</span>
                    </section>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </aside>
        <div class="clear"></div>
      </div>
    </section>
    <!-- /课程详情 结束 -->
  </div>
</template>

<style class="course_header">

.course_header {
  background:#ffffff;
  padding-top:10px;
  padding-left:15px;
}

.path-wrap {
  margin:0px;
  line-height:30px;
} 

.path_courent {
   color :#f56c6c;
}

.course_top_content {
  background:#ffffff;
  margin-top:5px;
}

.course_right_info {
  width:630px;
  background:green;
  margin-right:10px;
}
.course_right_info .course_title {
  text-align:left;
}

</style>

<script>
import courseApi from '@/api/course'
import ordersApi from '@/api/orders'
export default {
  asyncData({ params, error }) {
    return courseApi.getCourseInfo(params.id).then((response) => {
      return {
        courseWebVo: response.data.courseWebVo,
        chapterVideoList: response.data.chapterVideoList,
        courseId: params.id,
      }
    })
  },
  methods: {
    //生成订单
    createOrders() {
      ordersApi.createOrders(this.courseId).then((response) => {
        //获取返回订单号
        //生成订单之后，跳转订单显示页面
        console.log(response.data)
        this.$router.push({ path: '/orders/' + response.data.orderId })
      })
    },
  },
}
</script>
