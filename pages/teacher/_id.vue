<template>
  <div class="bg-fa of">
    <div class="top_backgroud_box">
      <div class="top-bg-mask">
        <div class="top-content-wrap">
          <div class="clearfix">
            <div class="share-box r">
              <div class="bdsharebuttonbox bdshare-button-style0-16"
                   data-tag=""
                   data-bd-bind="1631770229675">
                <a href="javascript:;"
                   class="share wx icon-share-weichat"
                   data-cmd="weixin"
                   title="分享到微信"></a>
                <a href="javascript:;"
                   class="share qq icon-share-qq"
                   data-cmd="qzone"
                   title="分享到QQ空间"></a>
                <a href="javascript:;"
                   class="share sina icon-share-weibo"
                   data-cmd="tsina"
                   title="分享到新浪微博"></a>
              </div>
            </div>
          </div>
          <div class="teacher-box">
            <!-- <img class="tea-header" src="//img1.sycdn.imooc.com/5afe3d350001596a02430243-200-200.jpg" alt=""> -->
            <img class="tea-header"
                 src="//img4.sycdn.imooc.com/5afe3d350001596a02430243-160-160.jpg"
                 alt="" />
            <div class="tea-title">
              <p>{{teacherTypeString}}</p>
              <span>{{teacher.tposition}}</span>
            </div>
            <p class="tea-nickname">{{teacher.name}}</p>
            <p class="tea-professional">{{teacher.career}}</p>
            <a href="javascript:void(0);"
               @click="focusTeacherClick"
               class="moco-btn payattention-btn js-payattention-btn js-add-attention"
               data-id="2134188">
              <i class="icon-group_add"></i>{{focusString}}</a>
            <p class="tea-desc">{{teacher.intro}}</p>
            <div class="tea-detail-box">
              <ul class="clearfix">
                <li>
                  <a href="#Course">
                    <p class="num">{{courseList.length}}</p>
                    <p class="text">课程</p>
                  </a>
                </li>
                <li>
                  <a href="#Article">
                    <p class="num">{{bookList.length}}</p>
                    <p class="text">专题</p>
                  </a>
                </li>
                <li>
                  <a href="#Shizhan">
                    <p class="num">{{praticeList.length}}</p>
                    <p class="text">实践</p>
                  </a>
                </li>
                <li>
                  <p class="num"
                     id="js-tea-fan-num">{{teacher.focus}}</p>
                  <p class="text">粉丝</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="bottom-trangle"></div>
      </div>
    </div>

    <div class="bottom-box">
      <div class="course-box">
        <h2 id="Course">课程</h2>
        <p class="cato-desc">精品体系课程应有尽有，快速帮你查漏补缺</p>
        <div class="course-del-box">
          <ul>
            <li class="moco-course-wrap"
                v-for="course in courseList"
                :key="course.id">
              <nuxt-link :to="'/course/'+course.id"
                         title="课程详情">
                <div class="moco-course-box">
                  <img alt="课程封面"
                       :src="course.adimage"
                       height="155"
                       width="100%" />
                  <div class="moco-course-intro">
                    <h3 class="c-333">
                      {{course.title}}
                    </h3>
                    <p>{{course.cdescribe}}</p>
                  </div>
                  <div class="moco-course-bottom">
                    <span class="l">{{course.buyCount}}人在学</span>
                  </div>
                </div>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="shizhan-box">
        <h2 id="Article">专题</h2>
        <p class="cato-desc">分享经验交流心得，学习前沿流行技术</p>
        <div class="shizhan-del-box">
          <ul>
            <li v-for="book in bookList"
                :key="book.id">
              <div class="shizhan-mask">

                <div class="book-cover">
                  <img :src="book.imgUrl"
                       class="book-cover-img">
                </div>
                <div class="book-info">
                  <p class="shizhan-title"
                     :title="book.title">
                    {{book.title}}
                  </p>
                  <p class="shizhan-desc">
                    {{book.describ}}
                  </p>

                  <div class="bottom-box">
                    <p class="shizhan-price fl">￥{{book.price}}</p>
                    <p class="icon icon-right fr">
                      <i class="el-icon-arrow-right icon-font fw900"></i>
                    </p>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="article-box">
        <h2 id="Shizhan">实践</h2>
        <p class="cato-desc">纸上得来终觉浅，绝知此事要躬行</p>
        <div class="article-del-box">
          <ul>
            <li v-for="pratice in praticeList"
                :key="pratice.id">
              <nuxt-link :to="'/practice/'+pratice.id"
                         target="_blank">
                <p class="article-title"
                   :title="pratice.title">
                  {{pratice.title}}
                </p>
                <p class="article-desc">{{pratice.descrb}}</p>
                <div class="bottom-box clearfix">
                  <p class="item fl">{{pratice.viewCount}}浏览</p>
                  <em class="fl"></em>
                  <p class="item fl">{{pratice.good}}推荐</p>
                  <em class="fl"></em>
                  <p class="item fl">6评论</p>
                  <p class="icon icon-right fr"></p>
                </div>
              </nuxt-link>
            </li>

          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.book-cover {
  float: left;
}
.book-info {
  float: right;
  width: 210px;
}

.book-cover-img {
  width: 168px;
}
.moco-course-intro h3 {
  margin-top: 0px;
  margin-bottom: 6px;
  font-weight: 550;
}
.top_backgroud_box {
  position: relative;
  width: 100%;
  background: transparent url(/pic/teacher_detail_bg.jpg) center center
    no-repeat;
  background-size: cover;
}
.top_backgroud_box .top-bg-mask {
  width: 100%;
  height: 600px;
  background: rgba(0, 0, 0, 0.5);
}

.top_backgroud_box .top-content-wrap {
  margin: 0 auto;
  width: 980px;
}

.top_backgroud_box .top-content-wrap .teacher-box {
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

.top_backgroud_box .top-content-wrap .teacher-box .tea-header {
  width: 114px;
  height: 114px;
  border-radius: 50%;
  margin-top: 35px;
  border: 3px solid #fff;
}

.top_backgroud_box .top-content-wrap .teacher-box .tea-title {
  position: relative;
  margin: -24px auto 0;
  width: 149px;
  height: 56px;
  text-align: center;
  color: #fff;
  background: url(~/assets/img/flag-bg.png);
  z-index: 2;
  font-size: 14px;
}

.top_backgroud_box .top-content-wrap .teacher-box .tea-nickname {
  margin-top: 12px;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  line-height: 24px;
}

.top_backgroud_box .top-content-wrap .teacher-box .tea-professional {
  margin-top: 12px;
  font-size: 14px;
  color: #fff;
  line-height: 14px;
}

.top_backgroud_box .top-content-wrap .teacher-box .payattention-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #fff;
}

.top_backgroud_box .top-content-wrap .teacher-box .payattention-btn {
  margin: 24px 0 36px;
  padding: 0;
  height: 36px;
  width: 96px;
  background: 0 0;
  font-size: 12px;
  line-height: 36px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.6);
}

.top_backgroud_box .top-content-wrap .teacher-box a {
  text-decoration: none;
}

.top_backgroud_box .top-content-wrap .teacher-box .tea-desc {
  margin: 0 auto 24px;
  width: 740px;
  height: 48px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 24px;
  word-break: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  text-overflow: -o-ellipsis-lastline;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.moco-btn {
  position: relative;
  display: inline-block;
  margin-bottom: 0;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  text-decoration: none;
  box-sizing: border-box;
  background-image: none;
  border-radius: 0;
  -webkit-appearance: none;
  white-space: nowrap;
  outline: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  -weibkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  color: #545c63;
  background-color: transparent;
  border-color: #9199a1;
  opacity: 1;
  padding: 7px 16px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 18px;
}

.top-content-wrap .teacher-box .tea-detail-box,
.bottom-box .course-box .course-del-box {
  text-align: center;
  margin: 0 auto;
  width: 100%;
}

.top-content-wrap .teacher-box .tea-detail-box ul li {
  margin-right: 100px;
  display: inline-block;
  text-align: center;
}

.top-content-wrap .teacher-box .tea-detail-box ul li .num {
  margin-bottom: 8px;
  font-size: 24px;
  line-height: 24px;
  color: #fff;
}

.top-content-wrap .teacher-box .tea-detail-box ul li .text {
  font-size: 14px;
  line-height: 14px;
  color: rgba(255, 255, 255, 0.8);
}

.bottom-box {
  margin: 0 auto;
  width: 980px;
  padding-bottom: 35px;
}
.bottom-box .article-box,
.bottom-box .course-box,
.bottom-box .shizhan-box {
  padding-top: 48px;
}
.bottom-box .article-box h2,
.bottom-box .course-box h2,
.bottom-box .shizhan-box h2 {
  margin-bottom: 16px;
  font-size: 24px;
  line-height: 24px;
  color: #07111b;
  font-weight: 700;
  text-align: center;
}
.bottom-box .article-box .cato-desc,
.bottom-box .course-box .cato-desc,
.bottom-box .shizhan-box .cato-desc {
  margin-bottom: 36px;
  color: #93999f;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
}

.shizhan-del-box ul {
  width: 100%;
}

.shizhan-del-box,
.article-del-box {
  margin: 0 auto;
  width: 100%;
  text-align: center;
}
.shizhan-del-box ul {
  width: 100%;
}
.shizhan-del-box ul li,
.course-del-box ul li,
.bottom-box .article-box .article-del-box ul li {
  display: inline-block;
  word-break: break-all;
  vertical-align: top;
}
.shizhan-del-box ul li .shizhan-mask {
  width: 476px;
  height: 246px;
  box-sizing: border-box;
  padding: 18px 30px 32px;
  background: url(/pic/shizhan-mask.png);
}

.shizhan-del-box ul li .shizhan-title {
  margin-bottom: 12px;
  height: 56px;
  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
  color: #fff;
  word-break: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  text-overflow: -o-ellipsis-lastline;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.shizhan-del-box ul li .shizhan-desc {
  margin-bottom: 24px;
  height: 44px;
  font-size: 14px;
  line-height: 22px;
  color: rgba(255, 255, 255, 0.6);
  word-break: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  text-overflow: -o-ellipsis-lastline;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.shizhan-del-box ul li .bottom-box {
  width: 210px;
  position: absolute;
  bottom: 30px;
  padding-bottom: 0;
}

.bottom-box .shizhan-del-box ul li {
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 476px;
  height: 246px;
  box-sizing: border-box;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 10%);
  text-align: left;
  margin-bottom: 24px;
}

.bottom-box .shizhan-del-box ul li .shizhan-title {
  margin-bottom: 12px;
  height: 56px;
  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
  color: #fff;
  word-break: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  text-overflow: -o-ellipsis-lastline;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.bottom-box .shizhan-del-box ul li .shizhan-desc {
  margin-bottom: 24px;
  height: 44px;
  font-size: 14px;
  line-height: 22px;
  color: rgba(255, 255, 255, 0.6);
  word-break: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  text-overflow: -o-ellipsis-lastline;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.bottom-box .shizhan-del-box ul li .bottom-box .shizhan-price {
  font-size: 20px;
  line-height: 20px;
  font-weight: 200;
  color: #fff;
}

.bottom-box .shizhan-del-box ul li .bottom-box .icon {
  margin-top: -16px;
  width: 50px;
  height: 50px;
  font-size: 24px;
  line-height: 50px;
  text-align: center;
  color: #fff;
  background: rgba(7, 17, 27, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  border-radius: 50%;
}

.bottom-box .shizhan-del-box ul li:nth-child(2n) {
  margin-left: 23px;
}

.bottom-box .course-del-box ul .moco-course-wrap {
  margin: 8px !important;
}

.moco-course-wrap .moco-course-box {
  width: 334px;
  height: 262px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
}

.moco-course-wrap .moco-course-box .moco-course-intro {
  box-sizing: border-box;
  position: absolute;
  padding: 10px 20px;
  transition: top 0.5s;
  top: 145px;
  height: 134px;
  width: 100%;
  background: #eee;
}

.moco-course-wrap .moco-course-box .moco-course-intro p {
  color: #666;
  font-size: 12px;
  height: 40px;
  overflow: hidden;
  line-height: 20px;
}

.moco-course-wrap .moco-course-box .moco-course-bottom {
  position: absolute;
  padding: 0 20px;
  bottom: 0;
  box-sizing: border-box;
  width: 100%;
  height: 42px;
  background: #eee;
  color: #409eff;
  font-size: 16px;
  line-height: 36px;
}

.bottom-box .article-del-box ul li {
  position: relative;
  padding: 40px;
  margin-bottom: 24px;
  width: 476px;
  height: 246px;
  box-sizing: border-box;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 10%);
  text-align: left;
  background: #fff;
}

.bottom-box .article-del-box ul li .article-title {
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: #07111b;
  word-break: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.bottom-box .article-del-box ul li .article-desc {
  margin-bottom: 32px;
  height: 72px;
  font-size: 14px;
  line-height: 24px;
  color: #4d555d;
  word-break: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  text-overflow: -o-ellipsis-lastline;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.bottom-box .article-del-box ul li .bottom-box {
  width: 396px;
  position: absolute;
  bottom: 40px;
  padding-bottom: 0;
}

.bottom-box .article-del-box ul li .bottom-box .item:nth-child(1) {
  margin-right: 20px;
}

.bottom-box .article-del-box ul li a {
  display: block;
}

.bottom-box .article-del-box ul li:nth-child(2n) {
  margin-left: 23px;
}

.bottom-box .article-del-box ul li .bottom-box .item:nth-child(1) {
  margin-right: 20px;
}

.bottom-box .article-del-box ul li .bottom-box .item {
  font-size: 12px;
  line-height: 20px;
  color: #93999f;
}

.bottom-box .article-del-box ul li .bottom-box em {
  margin-top: 5px;
  display: block;
  font-style: normal;
  width: 1px;
  height: 12px;
  background: #d9dde1;
}

.bottom-box .article-del-box ul li .bottom-box .item:nth-child(3) {
  margin-left: 20px;
  margin-right: 20px;
}

.bottom-box .article-del-box ul li .bottom-box .item:nth-child(5) {
  margin-left: 20px;
}

a:link,
:visited,
ins {
  text-decoration: none;
}
</style>
<script>
import teacherApi from '@/api/courseSerReq'
import useractApi from '@/api/useract'

export default {

  data () {
    return {
      activeName: 'first',
      subPraCticeTag: -1,
      isFocus: false,
      forbiden: true,

    }
  },

  asyncData ({ params, error }) {
    return teacherApi.getTeacherInfo(params.id).then((response) => {
      return {
        teacher: response.data.teacher,
        courseList: response.data.courseList,
        praticeList: response.data.praticeList,
        bookList: response.data.bookList,
        derscb: response.data.teacher.derscb,
      }
    })
  },

  head () {
    return {
      title: this.teacher.name + "-" + this.teacherTypeString + this.teacher.tposition,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.teacher.keywords,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.teacher.intro,
        },
        {
          hid: 'og:description',
          content: this.teacher.intro,
        },
      ],
    }
  },
  mounted () {
    var token = localStorage.getItem("redclass_token");
    var userStr = localStorage.getItem("redclass_user");
    if (!(token && token != "undefined") || !(userStr && userStr != "undefined")) {
      this.isLogin = false;
    } else {
      this.isLogin = true;
      useractApi.getUserFocus(this.teacher.id).then((response) => {
        window.console.log(response);
        this.isFocus = response.data.focus;
      })
    };
  },
  computed: {
    // 计算属性的 getter
    courseCount: function () {
      // `this` 指向 vm 实例
      return this.courseList.length;
    },
    focusString: function () {
      return this.isFocus ? "已关注" : "关注Ta";
    },
    teacherTypeString: function () {
      return this.teacher.ttype == 2 ? "开源实践网官方" : "开源实践网认证";
    }
  },
  methods: {
    focusTeacherClick () {
      window.myVueComm = this;
      if (this.forbiden) {
        this.forbiden = false;
        if (this.isLogin) {
          if (this.isFocus) {
            useractApi.cancleUserFocus(this.teacher.id).then((response) => {
              this.isFocus = response.data.focus;
              this.teacher.focus--;
              this.$message({
                message: "取消关闭老师成功哈~",
                type: "success",
                duration: 2000,
              });
            });
          } else {
            useractApi.addUserFocus(this.teacher.id).then((response) => {
              this.isFocus = response.data.focus;
              this.teacher.focus++;
              this.$message({
                message: "关注老师成功哈~",
                type: "success",
                duration: 2000,
              });
            });
          }
        } else {
          this.$message({
            message: "请您登录以后在关注哈",
            type: "success",
            duration: 2000,
          });
        }
      }
      setTimeout(function () {
        window.myVueComm.forbiden = true;
      }, 500)

    }
  }
}
</script>
