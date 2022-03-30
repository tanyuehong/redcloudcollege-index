<template>
  <el-main>
    <div class="toppic_back_setting">
      <div class="container">
        <el-carousel :interval="4000"
                     type="card"
                     height="260px"
                     style="position: relative">
          <el-carousel-item v-for="item in topic_list_item"
                            :key="item.vue">
            <div class="grid-content">
              <el-col :md="12">
                <div class="topic_carousel">
                  <img :src="item.src" />
                </div>
              </el-col>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <section class="container">
        <div class="row">
          <div class="col-md-8 book_item">
            <section class="zhuanti-top-group">
              <div class="zhuanti-group-title">
                <span class="c-666 fsize14">专题类别</span>
              </div>
              <ul class="zhuanti-group-detail">
                <li>
                  <a title="全部"
                     href="#">iOS</a>
                </li>
                <li v-for="(item, index) in subjectNestedList"
                    :key="index"
                    :class="{ active: oneIndex == index }">
                  <a :title="item.title"
                     href="#"
                     @click="searchOne(item.id, index)">{{ item.title }}</a>
                </li>
              </ul>
              <div class="clear"></div>
            </section>
            <ul>
              <li class="cleartopicfix"
                  v-for="item in bookList"
                  :key="item.id">
                <nuxt-link :to="'/book/'+item.id">
                  <img :src="item.imgUrl"
                       class="img fl"
                       :alt="item.title">
                </nuxt-link>
                <div class="text_con fr">
                  <nuxt-link :to="'/book/'+item.id">
                    <p class="title">{{item.title}}</p>
                    {{item.title}}
                  </nuxt-link>
                  <p class="desc">{{item.describ}}</p>
                  <div class="try-read-box">
                    <a class="try-read-item"
                       href="/read/80/article/2090"
                       target="_blank">
                      <div class="try-read-img"></div>
                      <p class="try-read-title"
                         title="01 开篇词：带你走进网络编程的世界">
                        01 开篇词：带你走进网络编程的世界
                      </p>
                    </a>
                  </div>
                  <div class="info">
                    <img src="~/assets/img/article_point.png"
                         class="img_point">
                    <span>共32节</span>
                    <img src="~/assets/img/article_point.png"
                         class="img_point">
                    <span>{{ item.buyCount }}人已购买</span>
                  </div>
                  <div class="clearfloat"></div>
                  <a class="author-box"
                     href="/u/6773399"
                     target="_blank">
                    <div class="author-img"
                         style="background-image: url('//img1.sycdn.imooc.com/5458620000018a2602200220-100-100.jpg');">
                    </div>
                    <span class="author-name">{{item.author}}</span>
                    <span>/</span>
                    <span class="author-title">{{item.authorPositon}}</span>
                  </a>
                  <div class="price_con cleartopicfix fr">
                    <!-- 没有订阅购买 -->
                    <a class="sale-price cleartopicfix"
                       href="/read/80"
                       target="_blank">
                      <p class="ori fr">原价 ¥ {{ item.oldPrice }}</p>
                      <p class="sale fr">¥ {{ item.price }}</p>
                      <div class="countdown fr"
                           data-remain="1617854"
                           style="clear: both">
                        <span class="name fl">限时优惠</span>

                        <p class="clock fl"
                           style="display: none">
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
              </li>
            </ul>
          </div>
          <div class="bottom-loading"
               style="display: none">
            <i class="imv2-loading"></i>
            <span>正在加载中...</span>
          </div>
          <div class="col-md-4">
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
    </div>
  </el-main>
</template>

<script>
import '~/assets/css/appdown.css'
import '~/assets/css/contentlist.css'
import bookReq from "@/api/bookReq";
export default {
  data () {
    return {
      topic_list_item: [
        {
          src: "/pic/banner-1.jpg",
        },
        {
          src: "/pic/banner-2.jpg",
        },
        {
          src: "/pic/banner-3.jpg",
        },
      ],
      page: 1, //当前页
      bookList: [],
      data: {}, //课程列表
      subjectNestedList: [], // 一级分类列表
      subSubjectList: [], // 二级分类列表

      searchObj: {}, // 查询表单对象

      oneIndex: -1,
      twoIndex: -1,
      buyCountSort: "",
      gmtCreateSort: "",
      priceSort: "",
    };
  },

  created () {
    this.getHomeBooks();
  },

  methods: {
    getHomeBooks () {
      bookReq.getHomeBookList().then((response) => {
        this.bookList = response.data.bookList;
        // debugger;
      });
    },
    jumpStartQuestion () {
      this.$router.push({
        name: "faquestion-howtoask",
        query: {},
      });
    },
  },
};
</script>

<style>
.zhuanti-top-group {
  border-bottom: 1px solid rgba(28, 31, 33, 0.1);
  margin-bottom: 20px;
}

.zhuanti-group-title {
  float: left;
  margin-right: 16px;
}

.zhuanti-group-detail {
  float: left;
}

.zhuanti-group-detail li {
  border: none;
  margin-bottom: 16px;
}
.el-main {
  padding: 0px;
}
.toppic_back_setting {
  background-color: #fafafa;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
}

.el-carousel__item:nth-child(2n + 1) {
}

.topic_carousel img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate3d(-50%, -50%, 0);
  -webkit-transform: translate3d(-50%, -50%, 0);
}

.c-s-dl dl {
  border-bottom: none;
  line-height: 30px;
}

.book_item {
  margin-bottom: 48px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(28, 31, 33, 0.06);
  box-sizing: border-box;
  padding: 20px 0px 10px 15px;
  width: 773px;
}

.book_item ul {
  display: block;
  margin: 0px;
  padding: 0px;
}
</style>