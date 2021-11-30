<template>
  <div class="golobal_content">
    <el-carousel indicator-position="outside" height="480px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <a
          target="_blank"
          :href="item.linkUrl"
          v-bind:style="{ backgroundImage: 'url(' + item.imageUrl + ')' }"
        ></a>
      </el-carousel-item>
    </el-carousel>

    <!-- 幻灯片 结束 -->

    <div class="golobal_content">
      <!-- 网校课程 开始 -->
      <section class="container">
        <div class="every_qustion">
          <div class="left_title fl">
            <img src="~/assets/img/erery_qustion.png" alt="" />
          </div>
          <div class="right_content fl">
            面向对象设计的准则？
          </div>
        </div>

        <div class="home_function">
          <a href="/teacher/1" class="function_btn ml180 mt20 fl">
            <img src="~/assets/img/home_study_progress.png" alt="" />
            <div class="btn_title">学习进度</div>
          </a>
          <a class="function_btn mr180 mt20 fr">
            <img src="~/assets/img/home_my_faveriter.png" alt="" />
            <div class="btn_title">我的收藏</div>
          </a>
        </div>
        <div class="couselist">
          <div class="comm-title">
            <h2 class="mt20">
              <span class="c-333">热门课程 / 专题</span>
            </h2>
          </div>
          <div>
            <article class="comm-course-list">
              <ul class="of" id="bna">
                <li v-for="course in eduList" :key="course.id">
                  <div class="cc-l-wrap">
                    <section class="course-img">
                      <img
                        :src="course.imgUrl"
                        class="img-responsive"
                        :alt="course.title"
                      />
                      <div class="cc-mask">
                        <a href="#" title="开始学习" class="comm-btn c-btn-1">
                          开始学习
                        </a>
                      </div>
                    </section>
                    <h3 class="hLh30 mt10">
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
                        <i class="c-666">{{course.buyCount}}人学习</i>
                        |
                        <i class="c-666">9634评论</i>
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
            <div class="home_guesslike_list book_item">
              <ul class="content_list">
                <li v-for="item in gusslikeList" :key="item.id">
                  <div v-if="item.type === 0">
                  <div class="course_list">
                     <nuxt-link :to="{name:'article-book',query:{id:item.id}}">
                <img :src="item.imgUrl" class="img fl" :alt="item.title">
              </nuxt-link>
                  </div>
                   <div class="text_con fr">
              <nuxt-link :to="{name:'article-book',query:{id:item.id}}">
               <p class="title">{{item.title}}</p>
                  {{item.title}}
              </nuxt-link>
                <p class="desc">{{item.content}}</p>
                <div class="info">
                  <img src="~/assets/img/article_point.png" class="img_point">
                  <span>共32节</span>
                  <img src="~/assets/img/article_point.png" class="img_point">
                  <span>{{ item.buyCount }}人已学习</span>
                </div>
                <div class="try-read-box">
                  <a
                    class="try-read-item"
                    href="/read/80/article/2090"
                    target="_blank"
                  >
                    <div class="try-read-img"></div>
                    <p
                      class="try-read-title"
                      title="01 开篇词：带你走进网络编程的世界"
                    >
                      01 开篇词：带你走进网络编程的世界
                    </p>
                  </a>
                </div>
                <a class="author-box" href="/u/6773399" target="_blank">
                  <div class="author-img" style="background-image:url('//img1.sycdn.imooc.com/5458620000018a2602200220-100-100.jpg');">
                  </div>
                  <span class="author-name">{{item.author}}</span>
                  <span>/</span>
                  <span class="author-title">{{item.authorPositon}}</span>
                </a>
                <div class="price_con cleartopicfix fr">
                  <!-- 没有订阅购买 -->
                  <a
                    class="sale-price cleartopicfix"
                    href="/read/80"
                    target="_blank"
                  >
                    <p class="ori fr">原价 ¥ {{ item.oldPrice }}</p>
                    <p class="sale fr">¥ {{ item.price }}</p>
                    <div
                      class="countdown fr"
                      data-remain="1617854"
                      style="clear: both"
                    >
                      <span class="name fl">限时优惠</span>

                      <p class="clock fl" style="display: none">
                        <span>倒计时:</span>
                        <span class="js-day">18天</span>
                        <span class="js-hour timer">17</span>:
                        <span class="js-minute timer">24</span>:
                        <span class="js-second timer">14</span>:
                        <span class="js-msec timer">0</span>
                      </p>
                    </div>
                  </a>
                   </div>
              </div>
                   <div class="clearfloat"></div>
                  
                      
                  </div>
                  <div v-else-if="item.type === 1">
                    <div class="op_artie_content">
                <nuxt-link class="article_title" :to="{name:'practice-detail',query:{id:item.id}}">
                      {{ item.title }}
                </nuxt-link>
                  <p class="op_pratice_describ">
                    {{ item.content }}
                  </p>
                  <ul>
                    <i class="pratice_icon_view"></i>
                    <span class="icon_des">{{item.viewCount}}</span>
                    <i class="pratice_icon_zhan"></span></i>
                    <span class="icon_des">{{item.good}}</span>
                    <i class="pratice_icon_comment"></i>
                    <span class="icon_des">11</span>
                  </ul>
                </div>
                  </div>
                  <div  v-else>
                    <nuxt-link :to="{name:'article-book',query:{id:item.id}}">
                <img :src="item.imgUrl" class="img fl" :alt="item.title">
              </nuxt-link>
              <div class="text_con fr">
              <nuxt-link :to="{name:'article-book',query:{id:item.id}}">
               <p class="title">{{item.title}}</p>
                  {{item.title}}
              </nuxt-link>
                <p class="desc">{{item.content}}</p>
                <div class="info">
                  <img src="~/assets/img/article_point.png" class="img_point">
                  <span>共32节</span>
                  <img src="~/assets/img/article_point.png" class="img_point">
                  <span>{{ item.buyCount }}人已购买</span>
                </div>
                <div class="try-read-box">
                  <a
                    class="try-read-item"
                    href="/read/80/article/2090"
                    target="_blank"
                  >
                    <div class="try-read-img"></div>
                    <p
                      class="try-read-title"
                      title="01 开篇词：带你走进网络编程的世界"
                    >
                      01 开篇词：带你走进网络编程的世界
                    </p>
                  </a>
                </div>
                <a class="author-box" href="/u/6773399" target="_blank">
                  <div class="author-img" style="background-image:url('//img1.sycdn.imooc.com/5458620000018a2602200220-100-100.jpg');">
                  </div>
                  <span class="author-name">{{item.author}}</span>
                  <span>/</span>
                  <span class="author-title">{{item.authorPositon}}</span>
                </a>
                <div class="price_con cleartopicfix fr">
                  <!-- 没有订阅购买 -->
                  <a
                    class="sale-price cleartopicfix"
                    href="/read/80"
                    target="_blank"
                  >
                    <p class="ori fr">原价 ¥ {{ item.oldPrice }}</p>
                    <p class="sale fr">¥ {{ item.price }}</p>
                    <div
                      class="countdown fr"
                      data-remain="1617854"
                      style="clear: both"
                    >
                      <span class="name fl">限时优惠</span>

                      <p class="clock fl" style="display: none">
                        <span>倒计时:</span>
                        <span class="js-day">18天</span>
                        <span class="js-hour timer">17</span>:
                        <span class="js-minute timer">24</span>:
                        <span class="js-second timer">14</span>:
                        <span class="js-msec timer">0</span>
                      </p>
                    </div>
                  </a>
                   </div>
              </div>
                   <div class="clearfloat"></div>
                  </div>
                </li>
              </ul>
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
              <img src="~/assets/img/appLogo.png" alt="" class="logo-icon fl" />
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
import '~/assets/css/contentlist.css'
import indexApi from '@/api/index'

export default {
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
    }
  },
  asyncData({ params, error }) {
    return indexApi.getIndexData().then((response) => {
      return {
        bannerList: response.data.banerList,
        eduList: response.data.eduList,
        gusslikeList: response.data.gusslikeList,
      }
    })
  },
  created() {},
  methods: {},
}
</script>

<style>
.el-carousel__item a {
  display: block;
  width: 100%;
  background-position: center;
  object-fit: none;
  height: 480px;
  background-image: url(https://static.redskt.com/banner/redskt_banner_1.png);
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

.home_function a {
  display: block;
}

.home_function a:hover {
  text-decoration: none;
}

.function_btn img {
  height: 80px;
}

.function_btn .btn_title {
  font-size: 20px;
  color: #333;
  font-weight: 600;
  padding-top: 5px;
}

.every_qustion .left_title img {
  margin-left: 10px;
}

.every_qustion .right_content {
  line-height: 80px;
  font-size: 20px;
  font-weight: 600;
  margin-left: 20px;
}

.comm-course-list ul {
  margin-left: -10px;
  margin-right: 10px;
}

.comm-title {
  overflow: hidden;
  clear: both;
  margin: 0px 0px 30px 0px;
  border-bottom: 1px solid rgba(28, 31, 33, 0.1);
  padding-bottom:10px;
}
.comm-title h2 {
  font-size: 20px;
  text-align: center;
  font-weight: 600;
}
.couselist {
  background: white;
}
.gusslike_page {
  background: white;
  margin-top: 20px;
  width: 790px;
  float: left;
  margin-bottom: 20px;
}

.op_app_decrb {
  width: 326px;
  height: 393px;
}
</style>
