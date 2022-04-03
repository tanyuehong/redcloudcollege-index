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
              <p>开源实践网官方</p>
              <span>精英讲师</span>
            </div>
            <p class="tea-nickname">{{teacher.name}}</p>
            <p class="tea-professional">{{teacher.career}}</p>
            <a href="javascript:void(0);"
               class="moco-btn payattention-btn js-payattention-btn js-add-attention"
               data-id="2134188">
              <i class="icon-group_add"></i>
              关注Ta
            </a>
            <p class="tea-desc">{{teacher.intro}}</p>
            <div class="tea-detail-box">
              <ul class="clearfix">
                <li>
                  <a href="#Shizhan">
                    <p class="num">1</p>
                    <p class="text">实战</p>
                  </a>
                </li>
                <li>
                  <a href="#Course">
                    <p class="num">2</p>
                    <p class="text">课程</p>
                  </a>
                </li>
                <li>
                  <a href="#Article">
                    <p class="num">6</p>
                    <p class="text">博文</p>
                  </a>
                </li>
                <li>
                  <p class="num"
                     id="js-tea-fan-num">468</p>
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
                :key="course.qid">
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
            <li style="background-image: url('//img1.sycdn.imooc.com/szimg/5b8e74ac00019f7d05400300-500-284.jpg');">
              <div class="shizhan-mask">
                <a href="//coding.imooc.com/class/274.html"
                   target="_blank">
                  <p class="shizhan-title"
                     title="MySQL数据库集群-PXC方案，解决数据库领域的常见疑难杂症">
                    MySQL数据库集群-PXC方案，解决数据库领域的常见疑难杂症
                  </p>
                  <p class="shizhan-desc">学习PXC，打造高价值的MySQL集群</p>
                  <div class="bottom-box clearfix">
                    <p class="shizhan-price fl">￥299.00</p>
                    <p class="icon icon-right fr">
                      <i class="el-icon-arrow-right icon-font fw900"></i>
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li style="
                background-image: url('//img1.sycdn.imooc.com/szimg/5d08d0b308c9749706000338-500-284.jpg');
              ">
              <div class="shizhan-mask">
                <a href="//coding.imooc.com/class/353.html"
                   target="_blank">
                  <p class="shizhan-title"
                     title="阿里新零售数据库设计与实战 （升级版） 提升数据库综合能力">
                    阿里新零售数据库设计与实战 （升级版） 提升数据库综合能力
                  </p>
                  <p class="shizhan-desc">
                    数据库是开发人员的必修课，解锁&amp;ldquo;新零售&amp;rdquo;业务让数据库实战能力再上一层楼
                  </p>
                  <div class="bottom-box clearfix">
                    <p class="shizhan-price fl">￥288.00</p>
                    <p class="icon icon-right fr">
                      <i class="el-icon-arrow-right icon-font fw900"></i>
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li style="background-image: url('//img1.sycdn.imooc.com/szimg/5ecc7cb709a1053112000676-500-284.jpg');">
              <div class="shizhan-mask">
                <a href="//coding.imooc.com/class/441.html"
                   target="_blank">
                  <p class="shizhan-title"
                     title="Java支付全家桶 企业级各类支付手段一站式解决方案">
                    Java支付全家桶 企业级各类支付手段一站式解决方案
                  </p>
                  <p class="shizhan-desc">
                    微信/支付宝/银联/混合支付，App/PC/H5/小程序，一课搞定全类型各行业企业级通用支付方式，值！
                  </p>
                  <div class="bottom-box clearfix">
                    <p class="shizhan-price fl">￥388.00</p>
                    <p class="icon icon-right fr">
                      <i class="el-icon-arrow-right icon-font fw900"></i>
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li style="background-image: url('//img1.sycdn.imooc.com/szimg/5fed3a7d09ac11c112000676-500-284.jpg');">
              <div class="shizhan-mask">
                <a href="//coding.imooc.com/class/485.html"
                   target="_blank">
                  <p class="shizhan-title"
                     title="SpringBoot 在线协同办公小程序开发 全栈式项目实战">
                    SpringBoot 在线协同办公小程序开发 全栈式项目实战
                  </p>
                  <p class="shizhan-desc">
                    未来趋势型业务 + 前后端综合技术栈 + 惊艳的细节打磨
                  </p>
                  <div class="bottom-box clearfix">
                    <p class="shizhan-price fl">￥388.00</p>
                    <p class="icon icon-right fr">
                      <i class="el-icon-arrow-right icon-font fw900"></i>
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li style="background-image: url('//img1.sycdn.imooc.com/szimg/6124bf9209c0e3b712000676-500-284.jpg');">
              <div class="shizhan-mask">
                <a href="//coding.imooc.com/class/530.html"
                   target="_blank">
                  <p class="shizhan-title"
                     title="SpringBoot+Vue3 项目实战，打造企业级在线办公系统">
                    SpringBoot+Vue3 项目实战，打造企业级在线办公系统
                  </p>
                  <p class="shizhan-desc">
                    以业务为基础，贯穿前后端技术栈，获得企业级项目开发经验
                  </p>
                  <div class="bottom-box clearfix">
                    <p class="shizhan-price fl">￥399.00</p>
                    <p class="icon icon-right fr">
                      <i class="el-icon-arrow-right icon-font fw900"></i>
                    </p>
                  </div>
                </a>
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
            <li>
              <a href="/article/316559"
                 target="_blank">
                <p class="article-title"
                   title="如何在SpringBoot中快速整合Swagger？">
                  如何在SpringBoot中快速整合Swagger？
                </p>
                <p class="article-desc">
                  一、传统的Swagger配置方式
                  开发前后端分离或者微服务项目，调试后端Web接口必然会用到Swagger，特别是给Swagger添加上JWT的时候，配置代码写起来较为复杂和啰嗦。例如下面的这个配置类，就是给SpringBoot设置Swagger，并且附带上JWT，一堆集合，看着就让人头晕。
                  @Configuration @EnableSwagger2 public class SwaggerConfig {
                  @Bean public Docket createRestApi() { Docket docket = new
                  Docket(DocumentationType.SWAGGER_2); ApiInfoBuilder builder =
                  new ApiInfoBu
                </p>
                <div class="bottom-box clearfix">
                  <p class="item fl">2977浏览</p>
                  <em class="fl"></em>
                  <p class="item fl">4推荐</p>
                  <em class="fl"></em>
                  <p class="item fl">1评论</p>
                  <p class="icon icon-right fr"></p>
                </div>
              </a>
            </li>
            <li>
              <a href="/article/292009"
                 target="_blank">
                <p class="article-title"
                   title="面试的时候被问“擅长前端还是后台”应该怎么回答？">
                  面试的时候被问“擅长前端还是后台”应该怎么回答？
                </p>
                <p class="article-desc">
                  昨天在实战课的QQ群里面，有一个同学来问我，说他自己参加了一个技术面试，面试官问他擅长前端还是后台，他觉得前端比后台简单，就说自己擅长前端。于是面试官问了很多前端底层的技术问题，搞的他这次面试的情况不太乐观。他觉得自己学的是全栈方向，前端后台都懂一些，但是掌握的都不如专业人员那么精深。所以他就打退堂鼓了，全栈方向这条技术路线到底有没有必要坚持下去？我相信很多学习全栈的同学，在面试的时候都会遇到这样的经历。下面我就来解答一下这个疑问。首先在面试的时候，再被问到“擅长前端还是后台”，你应该这样回答“开发项目的时候，前端很后台我都要写，我们的项目组，没有明确的责任划分。我负责的模块，前端跟后台都是我写的，所以前端跟后台项目我都懂一些。甚至维护数据库的工作也是我负责的。”你这样回答，其实就是在前端跟后台两个选项中，硬生生插入了第三个选项。你这么回答的好处是让面试官觉得你在项目组里面是个万金油的角色，哪里需要人，都可以把你派过去，所以你在同等面试人员里面优势就凸显出来了。再有，各种技术多少都会一些的人，面试官心里也清
                </p>
                <div class="bottom-box clearfix">
                  <p class="item fl">5659浏览</p>
                  <em class="fl"></em>
                  <p class="item fl">10推荐</p>
                  <em class="fl"></em>
                  <p class="item fl">5评论</p>
                  <p class="icon icon-right fr"></p>
                </div>
              </a>
            </li>
            <li>
              <a href="/article/30432"
                 target="_blank">
                <p class="article-title"
                   title="Percona向左，MariaDB向右，MySQL衍生版如何取舍？">
                  Percona向左，MariaDB向右，MySQL衍生版如何取舍？
                </p>
                <p class="article-desc">
                  缘起
                  自从甲骨文公司收购了MySQL后，有将MySQL闭源的潜在风险。而且Oracle对培养MySQL这个免费的儿子并不太用心，漏洞修补和版本升级的速度一段时间非常缓慢，所以业界对MySQL的未来普遍不抱有乐观态度。因此社区采用分支的方式来避开这个风险，例如谷歌、Facebook、RedHat都将MySQL替换成了衍生版，国内也有企业纷纷放弃了MySQL官方版,像阿里和腾讯还做起了自己的MySQL衍生版。
                  目前MySQL领域存在着众多的衍生版数据库，主流的有官方MySQL、MariaDB以及Percona
                  Server，小众一些的还有阿里的
                </p>
                <div class="bottom-box clearfix">
                  <p class="item fl">10331浏览</p>
                  <em class="fl"></em>
                  <p class="item fl">25推荐</p>
                  <em class="fl"></em>
                  <p class="item fl">4评论</p>
                  <p class="icon icon-right fr">
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
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
  padding: 38px 48px 32px;
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
  width: 380px;
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
import teacherApi from '@/api/teacher'

export default {

  data () {
    return {
      activeName: 'first',
      subPraCticeTag: -1,
      title: "开源实践-",
      descrb: "开源实践博文，是一个记录真实项目开发过程的一个博客，里面的文章都是项目开发过程中流程和难点的总结。通过文章，能让大家提升自己的项目能力和技术能力，让别人的经验成为自己提升的基石。"
    }
  },

  asyncData ({ params, error }) {
    return teacherApi.getTeacherInfo(params.id).then((response) => {
      return {
        teacher: response.data.teacher,
        courseList: response.data.courseList,
      }
    })
  },

  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.descrb,
        },
        {
          hid: 'og:description',
          content: this.descrb,
        },
      ],
    }
  },
}
</script>
