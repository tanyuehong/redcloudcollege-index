<template>
  <div class="bg-fa of">
    <div class="top_backgroud_box">
      <div class="top-bg-mask">
        <div class="top-content-wrap">
          <div class="clearfix">
            <div class="share-box r">
              <div
                class="bdsharebuttonbox bdshare-button-style0-16"
                data-tag=""
                data-bd-bind="1631770229675"
              >
                <a
                  href="javascript:;"
                  class="share wx icon-share-weichat"
                  data-cmd="weixin"
                  title="分享到微信"
                ></a>
                <a
                  href="javascript:;"
                  class="share qq icon-share-qq"
                  data-cmd="qzone"
                  title="分享到QQ空间"
                ></a>
                <a
                  href="javascript:;"
                  class="share sina icon-share-weibo"
                  data-cmd="tsina"
                  title="分享到新浪微博"
                ></a>
              </div>
            </div>
          </div>
          <div class="teacher-box">
            <!-- <img class="tea-header" src="//img1.sycdn.imooc.com/5afe3d350001596a02430243-200-200.jpg" alt=""> -->
            <img
              class="tea-header"
              src="//img4.sycdn.imooc.com/5afe3d350001596a02430243-160-160.jpg"
              alt=""
            />
            <div class="tea-title">
              <p>慕课网官方认证</p>
              <h3>精英讲师</h3>
            </div>
            <p class="tea-nickname">神思者</p>
            <p class="tea-professional">全栈工程师</p>
            <a
              href="javascript:void(0);"
              class="
                moco-btn
                payattention-btn
                js-payattention-btn js-add-attention
              "
              data-id="2134188"
            >
              <i class="icon-group_add"></i>
              关注Ta
            </a>
            <p class="tea-desc">
              曾就职于IBM，中软国际等大型互联网公司，参与主持了Nebula云平台，Peony分布式前端渲染平台，Taims医疗云，Jobseeker人才库等大型系统的开发，多次担任教育部大学生互联网创新创业大赛导师与评委。
            </p>
            <div class="tea-detail-box">
              <ul class="clearfix">
                <li>
                  <a href="#Shizhan">
                    <p class="num">7</p>
                    <p class="text">实战</p>
                  </a>
                </li>
                <li>
                  <a href="#Course">
                    <p class="num">1</p>
                    <p class="text">课程</p>
                  </a>
                </li>
                <li>
                  <a href="#Article">
                    <p class="num">3</p>
                    <p class="text">手记</p>
                  </a>
                </li>
                <li>
                  <p class="num" id="js-tea-fan-num">8468</p>
                  <p class="text">粉丝</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
          <div class="bottom-trangle"></div>
      </div>
     
    </div>
    <!-- 讲师介绍 开始 -->
    <section class="container">
      <header class="comm-title">
        <h2 class="fl tac">
          <span class="c-333">讲师介绍</span>
        </h2>
      </header>
      <div class="t-infor-wrap">
        <!-- 讲师基本信息 -->
        <section class="fl t-infor-box c-desc-content">
          <div class="mt20 ml20">
            <section class="t-infor-pic">
              <img :src="teacher.avatar" />
            </section>
            <h3 class="hLh30">
              <span class="fsize24 c-333">
                {{ teacher.name }}&nbsp;
                {{ teacher.level === 1 ? "高级讲师" : "首席讲师" }}
              </span>
            </h3>
            <section class="mt10">
              <span class="t-tag-bg">{{ teacher.intro }}</span>
            </section>
            <section class="t-infor-txt">
              <p class="mt20">{{ teacher.career }}</p>
            </section>
            <div class="clear"></div>
          </div>
        </section>
        <div class="clear"></div>
      </div>
      <section class="mt30">
        <div>
          <header class="comm-title all-teacher-title c-course-content">
            <h2 class="fl tac">
              <span class="c-333">主讲课程</span>
            </h2>
            <section class="c-tab-title">
              <a href="javascript: void(0)">&nbsp;</a>
            </section>
          </header>
          <!-- /无数据提示 开始-->
          <section class="no-data-wrap" v-if="courseList.length == 0">
            <em class="icon30 no-data-ico">&nbsp;</em>
            <span class="c-666 fsize14 ml10 vam">
              没有相关数据，小编正在努力整理中...
            </span>
          </section>
          <!-- /无数据提示 结束-->
          <article class="comm-course-list">
            <ul class="of">
              <li v-for="course in courseList" :key="course.id">
                <div class="cc-l-wrap">
                  <section class="course-img">
                    <img :src="course.cover" class="img-responsive" />
                    <div class="cc-mask">
                      <a
                        href="#"
                        title="开始学习"
                        target="_blank"
                        class="comm-btn c-btn-1"
                      >
                        开始学习
                      </a>
                    </div>
                  </section>
                  <h3 class="hLh30 txtOf mt10">
                    <a
                      href="#"
                      :title="course.title"
                      target="_blank"
                      class="course-title fsize18 c-333"
                    >
                      {{ course.title }}
                    </a>
                  </h3>
                </div>
              </li>
            </ul>
            <div class="clear"></div>
          </article>
        </div>
      </section>
    </section>
    <!-- /讲师介绍 结束 -->
  </div>
</template>
<style>
.top_backgroud_box {
  position: relative;
  width: 100%;
  background: transparent url(/pic/teacher_detail_bg.jpg) center center
    no-repeat;
  background-size: cover;
}
.top_backgroud_box .top-bg-mask {
    width: 100%;
    height: 619px;
    background: rgba(0,0,0,.2);
}

.top_backgroud_box .top-content-wrap {
    margin: 0 auto;
    width: 980px;
}

.top_backgroud_box  .top-content-wrap .teacher-box {
    position: relative;
    margin: 0 auto;
    padding-top: 10px;
    text-align: center;
    z-index: 2;
}
.top_backgroud_box .bottom-trangle {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 137px;
    background: url(/pic/arrow-angle.png);
    background-position: center;
    z-index: 1;
}
</style>
<script>
import teacherApi from "@/api/teacher";
export default {
  //params.id获取路径id值
  asyncData({ params, error }) {
    return teacherApi.getTeacherInfo(params.id).then((response) => {
      return {
        teacher: response.data.teacher,
        courseList: response.data.courseList,
      };
    });
  },
};
</script>
