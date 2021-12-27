<template>
  <div class="course_detail">
    <!-- /课程详情 开始 -->
    <section class="container">
      <div class="course_header">
        <section class="path-wrap hLh30">
          <a href="#"
             title
             class="c-999 fsize14">首页</a>
          <a href="#"
             title
             class="c-999 fsize14">
            / {{ courseWebVo.subjectLevelOne }} /
          </a>
          <span class="path_courent fsize14">
            {{ courseWebVo.subjectLevelTwo }}
          </span>
        </section>

        <div class="course_top_content">
          <div class="course_lefte_cover fl">
            <img width="600px"
                 :src="courseWebVo.adimage"
                 :alt="courseWebVo.title"
                 class="dis c-v-pic" />
          </div>

          <div class="course_right_info fr">
            <div class="course_title">
              <span>{{ courseWebVo.title }}</span>
            </div>
            <div class="course_buy_describ">
              <span class="course_info_text">
                {{ courseWebVo.buyCount }} 购买
              </span>

              <i class="icon-sep"></i>
              <span class="course_info_text">
                好评度
                <span class="rate-num">
                  100%
                </span>
              </span>
              <i class="icon-sep"></i>
              <img src="~/assets/img/course-faver.png"
                   class="fl" />
              <span class="course_info_faver">
                收藏
              </span>
            </div>
            <div class="clearfix"></div>
            <div class="course-other-info">
              <nuxt-link :to="{ name: 'teacher-id' }">
                <span>主讲老师:</span> <span>{{courseWebVo.teacherName}}</span>
              </nuxt-link>

            </div>
            <div class="inst-bar-layout-main">
              <p class="inst-bar-layout-hd">
                <span class="inst-bar-layout">
                  限时抢购
                </span>
                <span class="count-down-txt">
                  距离结束30天
                  <span class="count-down-txt-pad">02</span>
                  <span class="count-down-txt-colon">:</span>
                  <span class="count-down-txt-pad">26</span>
                  <span class="count-down-txt-colon">:</span>
                  <span class="count-down-txt-pad">53</span>
                </span>
              </p>
              <p class="course-info-price">
                <span class="basic-price">
                  <span class="basic-price-discount">
                    <span class="basic-price-current">￥</span>
                    <span class="basic-price-num">1.00</span>
                  </span>
                  <span class="basic-price-origin">
                    <span class="basic-price-unit">￥</span>
                    <span class="basic-price-unit">299.00</span>
                  </span>
                </span>
              </p>
            </div>
            <div class="course-goumai">
              <el-button type="primary">立即购买</el-button>
              <el-button type="success"
                         icon="el-icon-chat-dot-round">
                咨询
              </el-button>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
      <!-- /课程封面介绍 -->
      <div class="course-detail_content">
        <div class="detail_content_group">
          <el-tabs v-model="activeName"
                   @tab-click="handleClick">
            <el-tab-pane label="课程介绍"
                         name="first">
              <div class="course-video-descrb">
                <div class="course-video-descrb-content">
                  这里是课程介绍
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="课程表"
                         name="second">
              <div class="course-chapter-detail">
                <div class="course-chapter-one">
                  <div class="course-chaper-title">
                    课程导读
                    <div>
                      <div class="course-chaper-list">
                        <li>
                          <nuxt-link :to="{ name: 'course-classroom' }">
                            第一节 本课程讲什么？适合谁？
                          </nuxt-link>
                        </li>
                      </div>
                    </div>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="评价"
                         name="third">评价</el-tab-pane>
            <el-tab-pane label="课程问答"
                         name="fourth">课程问答</el-tab-pane>
          </el-tabs>
        </div>
        <div class="op_course_app_decrb fr">
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
            <img src="~/assets/img/appLogo.png"
                 alt=""
                 class="logo-icon fl" />
            <div class="text fl">
              <h4>下载开源实践APP</h4>
              <p>更好的体验 学习随处可享</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /课程详情 结束 -->
  </div>
</template>

<style class="course_header">
.course_header {
  background: #ffffff;
  padding-top: 15px;
  padding-left: 20px;
  padding-right: 20px;
}

.path-wrap {
  margin: 0px;
  line-height: 30px;
}

.path_courent {
  color: #f56c6c;
}

.course_top_content {
  background: #ffffff;
  margin-top: 10px;
  padding-bottom: 20px;
}

.course_lefte_cover img {
  height: auto;
}
.course_right_info {
  width: 450px;
}
.course_right_info .course_title {
  text-align: left;
  font-size: 22px;
  font-weight: 400;
}

.icon-sep {
  float: left;
  margin: 2px 20px 0;
  display: inline-block;
  vertical-align: middle;
  width: 1px;
  height: 14px;
  background: #ddd;
}

.course_buy_describ {
  margin-top: 10px;
  font-size: 14px;
}

.course_buy_describ .course_info_text {
  color: #666;
  float: left;
}

.course_buy_describ .course_info_faver {
  color: #666;
  float: left;
  margin-left: 3px;
}

.inst-bar-layout-main {
  border: 1px solid #ff0042;
  margin-top: 10px;
}
.inst-bar-layout-main .inst-bar-layout-hd {
  background: red;
  height: 40px;
  padding-top: 10px;
}

.inst-bar-layout-main .inst-bar-layout {
  color: #ffffff;
  font-size: 16px;
  margin-left: 15px;
}

.inst-bar-layout-main .count-down-txt {
  color: #ffffff;
  font-size: 16px;
  margin-left: 160px;
}

.inst-bar-layout-main .basic-price-discount {
  font-size: 24px;
  color: #ff4f23;
}

.inst-bar-layout-main .course-info-price {
  height: 36px;
  margin-top: 8px;
  padding-left: 10px;
}

.inst-bar-layout-main .course-info-price .basic-price-num {
  margin-left: -8px;
}
.inst-bar-layout-main .course-info-price .basic-price-origin {
  margin-left: 5px;
}

.course_buy_describ img {
  width: 22px;
  margin-top: -1px;
}

.basic-price-unit {
  font-size: 14px;
  color: 666666 !important;
}

.course_right_info .course-goumai {
  margin-top: 20px;
}

.course-detail_content {
  margin-top: 20px;
}

.course-detail_content .detail_content_group {
  background: #ffffff;
  width: 790px;
  padding-left: 20px;
  padding-top: 10px;
  padding-left: 20px;
  float: left;
}

.op_course_app_decrb {
  width: 326px;
}
</style>

<script>
import '~/assets/css/appdown.css'
import courseApi from '@/api/course'
import ordersApi from '@/api/orders'

export default {
  asyncData ({ params, error }) {
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
    createOrders () {
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
