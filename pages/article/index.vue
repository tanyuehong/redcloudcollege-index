<template>
  <el-main>
    <div class="toppic_back_setting">
      <div class="container">
      <el-carousel :interval="4000" type="card" height="250px">
        <el-carousel-item v-for="item in topic_list_item" :key="item.vue">
          <div class="grid-content">
            <el-col :md="12">
              <div class="topic_carousel">
                <img :src="item.src" />
                <p class="italictext">{{ item.title }}</p>
                <span class="service">{{ item.txt1 }}</span>
                <p class="last">{{ item.txt3 }}</p>
              </div>
            </el-col>
          </div>
        </el-carousel-item>
      </el-carousel>
      </div>
      <section class="container">
        <section class="c-sort-box">
          <section class="c-s-dl">
            <dl>
              <dt>
                <span class="c-999 fsize14">专题类别</span>
              </dt>
              <dd class="c-s-dl-li">
                <ul class="cleartopicfix">
                  <li>
                    <a title="全部" href="#">iOS</a>
                  </li>
                  <li
                    v-for="(item, index) in subjectNestedList"
                    :key="index"
                    :class="{ active: oneIndex == index }"
                  >
                    <a
                      :title="item.title"
                      href="#"
                      @click="searchOne(item.id, index)"
                      >{{ item.title }}</a
                    >
                  </li>
                </ul>
              </dd>
            </dl>
            <div class="clear"></div>
          </section>
        </section>
        <div class="row">
          <div class="col-md-8 left_con">
          <ul class>
            <li class="cleartopicfix">
              <a href="/read/80" target="_blank">
                <div
                  class="img l"
                  style="
                    background-image: url(//img3.sycdn.imooc.com/5ed8c19b000108e602940333.jpg);
                  "
                ></div>
              </a>
              <div class="text_con r">
                <a href="/read/80" target="_blank">
                  <p class="title">零基础学透网络编程</p>
                </a>
                <p class="desc">学好通用知识，提升技术竞争力</p>
                <div class="info">
                  <i class="imv2-dot_samll"></i>
                  <span>共32节</span>
                  <i class="imv2-dot_samll"></i>
                  <span>55人已购买</span>
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
                  <div
                    class="author-img"
                    style="
                      background-image: url('//img1.sycdn.imooc.com/5458620000018a2602200220-100-100.jpg');
                    "
                  ></div>
                  <span class="author-name">陈子兴</span>
                  <span>/</span>
                  <span class="author-title">资深软件架构师</span>
                </a>
                <div class="price_con cleartopicfix r">
                  <!-- 没有订阅购买 -->
                  <a
                    class="sale-price cleartopicfix"
                    href="/read/80"
                    target="_blank"
                  >
                    <p class="ori r">原价 ¥ 58.00</p>
                    <p class="sale r">¥ 42.00</p>
                    <div
                      class="countdown r"
                      data-remain="1617854"
                      style="clear: both"
                    >
                      <span class="name l">限时优惠</span>

                      <p class="clock l" style="display: none">
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
            <li class="cleartopicfix">
              <a href="/read/78" target="_blank">
                <div
                  class="img l"
                  style="
                    background-image: url(//img3.sycdn.imooc.com/5ecf52150001770102940333.jpg);
                  "
                ></div>
              </a>
              <div class="text_con r">
                <a href="/read/78" target="_blank">
                  <p class="title">再学经典：《Effective Java》独家解析</p>
                </a>
                <p class="desc">学习Java很重要，学会怎么学习Java更重要</p>
                <div class="info">
                  <i class="imv2-dot_samll"></i>
                  <span>共32节</span>
                  <i class="imv2-dot_samll"></i>
                  <span>118人已购买</span>
                </div>
                <div class="try-read-box">
                  <a
                    class="try-read-item"
                    href="/read/78/article/1975"
                    target="_blank"
                  >
                    <div class="try-read-img"></div>
                    <p
                      class="try-read-title"
                      title="01 开篇词：为什么要学习本专栏"
                    >
                      01 开篇词：为什么要学习本专栏
                    </p>
                  </a>
                  <a
                    class="try-read-item"
                    href="/read/78/article/1976"
                    target="_blank"
                  >
                    <div class="try-read-img"></div>
                    <p class="try-read-title" title="02 Java 源码学习指南">
                      02 Java 源码学习指南
                    </p>
                  </a>
                  <a
                    class="try-read-item"
                    href="/read/78/article/1977"
                    target="_blank"
                  >
                    <div class="try-read-img"></div>
                    <p class="try-read-title" title="03 Java 反编译指南">
                      03 Java 反编译指南
                    </p>
                  </a>
                  <a
                    class="try-read-item"
                    href="/read/78/article/1978"
                    target="_blank"
                  >
                    <div class="try-read-img"></div>
                    <p class="try-read-title" title="04 Java 反汇编指南">
                      04 Java 反汇编指南
                    </p>
                  </a>
                </div>
                <a class="author-box" href="/u/1246063" target="_blank">
                  <div
                    class="author-img"
                    style="
                      background-image: url('//img4.sycdn.imooc.com/54dc328d0001b75e04630463-100-100.jpg');
                    "
                  ></div>
                  <span class="author-name">明明如月</span>
                  <span>/</span>
                  <span class="author-title">高级JAVA开发工程师</span>
                </a>
                <div class="price_con cleartopicfix r">
                  <!-- 没有订阅购买 -->

                  <a
                    class="sale-price cleartopicfix"
                    href="/read/78"
                    target="_blank"
                  >
                    <p class="ori r">原价 ¥ 68.00</p>
                    <p class="sale r">¥ 49.00</p>
                    <div
                      class="countdown r"
                      data-remain="1013054"
                      style="clear: both"
                    >
                      <span class="name l">限时优惠</span>

                      <p class="clock l" style="display: none">
                        <span>倒计时:</span>
                        <span class="js-day">11天</span>
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

            <li class="cleartopicfix">
              <a href="/read/38" target="_blank">
                <div
                  class="img l"
                  style="
                    background-image: url(//img1.mukewang.com/5d5bd45b0001765b02940333.jpg);
                  "
                ></div>
              </a>
              <div class="text_con r">
                <a href="/read/38" target="_blank">
                  <p class="title">JavaScript 设计模式精讲</p>
                </a>
                <p class="desc">以不变的设计应对常变框架</p>
                <div class="info">
                  <i class="imv2-dot_samll"></i>
                  <span>共29节</span>
                  <i class="imv2-dot_samll"></i>
                  <span>1386人已购买</span>
                </div>
                <div class="try-read-box">
                  <a
                    class="try-read-item"
                    href="/read/38/article/476"
                    target="_blank"
                  >
                    <div class="try-read-img"></div>
                    <p
                      class="try-read-title"
                      title="01  开篇 ： 为什么学习本专栏？"
                    >
                      01 开篇 ： 为什么学习本专栏？
                    </p>
                  </a>
                  <a
                    class="try-read-item"
                    href="/read/38/article/477"
                    target="_blank"
                  >
                    <div class="try-read-img"></div>
                    <p
                      class="try-read-title"
                      title="02 this、new、bind、call、apply"
                    >
                      02 this、new、bind、call、apply
                    </p>
                  </a>
                  <a
                    class="try-read-item"
                    href="/read/38/article/478"
                    target="_blank"
                  >
                    <div class="try-read-img"></div>
                    <p class="try-read-title" title="03 闭包与高阶函数">
                      03 闭包与高阶函数
                    </p>
                  </a>
                  <a
                    class="try-read-item"
                    href="/read/38/article/487"
                    target="_blank"
                  >
                    <div class="try-read-img"></div>
                    <p
                      class="try-read-title"
                      title="12 享元模式：驾考现场的考试车"
                    >
                      12 享元模式：驾考现场的考试车
                    </p>
                  </a>
                </div>
                <a class="author-box" href="/u/4546248" target="_blank">
                  <div
                    class="author-img"
                    style="
                      background-image: url('//img3.mukewang.com/599d28bc0001134304400440-100-100.jpg');
                    "
                  ></div>
                  <span class="author-name">SHERlocked93</span>
                  <span>/</span>
                  <span class="author-title">开源社区活跃贡献者</span>
                </a>
                <div class="price_con cleartopicfix r">
                  <!-- 没有订阅购买 -->
                  <a class="sale-price" href="/read/38" target="_blank">
                    <p class="sale">¥ 48.00</p>
                  </a>
                </div>
              </div>
            </li>
          </ul>
          </div>
          <div class="bottom-loading" style="display: none">
            <i class="imv2-loading"></i>
            <span>正在加载中...</span>
          </div>
          <div class="col-md-4">
            <div class="wechatma-con js-wechatma-con">
              <div class="ma-con">
                <div class="ma"></div>
                <div class="desc">
                  <div class="title">扫码关注慕课网服务号</div>
                  <div class="item-con">
                    <div class="item">干货分享</div>
                    <div class="item">定期活动</div>
                    <div class="item">课程优惠</div>
                    <div class="item">专栏福利</div>
                  </div>
                </div>
              </div>
              <div class="text-con">
                官方优惠福利活动一手掌握，关注慕课网（ID：imooc-com），和30万+程序员一起成长！
              </div>
            </div>
            <div class="download-app js-show-download clearfix">
              <img
                src="https://www.imooc.com/static/img/column/icon.png"
                alt=""
                class="logo-icon l"
              />
              <div class="text l">
                <h4>下载慕课网APP</h4>
                <p>更好的体验 阅读随处可享</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </el-main>
</template>

<script>
import courseApi from "@/api/course";
export default {
  data() {
    return {
      topic_list_item: [
        {
          title: "哈哈",
          txt1: "第二标题",
          txt3: "第三描述",
          src: "/pic/banner-1.jpg",
        },
        {
          title: "哈哈",
          txt1: "第二标题",
          txt3: "第三描述",
          src: "/pic/banner-2.jpg",
        },
        {
          title: "哈哈",
          txt1: "第二标题",
          txt3: "第三描述",
          src: "/pic/banner-3.jpg",
        },
        {
          title: "哈哈",
          txt1: "第二标题",
          txt3: "第三描述",
          src: "/pic/banner-4.jpg",
        },
        {
          title: "哈哈",
          txt1: "第二标题",
          txt3: "第三描述",
          src: "/pic/banner-5.jpg",
        },
      ],
      page: 1, //当前页
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
  created() {},
  methods: {},
};
</script>

<style>
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
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.topic_carousel img {
  width: 750px;
}

.c-s-dl dl {
  border-bottom: none;
  line-height: 30px;
}

.l {
  float: left;
}

.r {
  float: right;
}

.left_con {
  margin-bottom: 48px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(28, 31, 33, 0.06);
  box-sizing: border-box;
  padding: 50px 40px 10px 50px;
}

.left_con ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}

.left_con li {
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(28, 31, 33, 0.1);
  margin-bottom: 38px;
}
.left_con .cleartopicfix {
  display: block;
  height: 1%;
  zoom: 1;
}

.left_con .cleartopicfix:after {
  content: "\0020";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.left_con li .img {
  width: 138px;
  height: 157px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  box-sizing: border-box;
  transition: all 0.5s;
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
}
.left_con li:hover .img {
  transition: all 0.5s 0.2s;
  -moz-transition: all 0.5s 0.2s;
  -webkit-transition: all 0.5s 0.2s;
  -o-transition: all 0.5s 0.2s;
  transform: scale(1.2);
  -ms-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  -o-transform: scale(1.2);
}
.left_con li .text_con {
  width: 75%;
  padding: 0 0 16px 0;
  font-size: 0;
}

.left_con li .text_con .title {
  font-weight: 700;
  font-size: 20px;
  color: #1c1f21;
  line-height: 24px;
  text-align: left;
  margin-bottom: 12px;
  margin-top: 4px;
}
.left_con li .text_con .info {
  display: inline-block;
  margin-bottom: 14px;
  vertical-align: top;
}
.left_con li .text_con .desc {
  font-size: 14px;
  color: #545c63;
  font-weight: 600;
  line-height: 14px;
  text-align: left;
  margin-bottom: 18px;
  display: inline-block;
  max-width: 350px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.left_con li .text_con .info {
  display: inline-block;
  margin-bottom: 14px;
  vertical-align: top;
}

.left_con li .text_con .info i {
  padding: 0 8px;
  font-size: 12px;
  color: #9199a1;
  text-align: left;
  line-height: 14px;
}

[class^="imv2-"],
[class*=" imv2-"] {
  font-family: "imv2" !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  letter-spacing: 0;
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga=1";
  -moz-font-feature-settings: "liga";
  -ms-font-feature-settings: "liga" 1;
  font-feature-settings: "liga";
  -webkit-font-variant-ligatures: discretionary-ligatures;
  font-variant-ligatures: discretionary-ligatures;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.imv2-dot_samll:before {
  content: "\e94c";
}
.left_con li .text_con .try-read-box {
  margin-bottom: 12px;
}
.left_con li .text_con .try-read-box .try-read-item {
  width: 290px;
  height: 20px;
  margin-right: 10px;
  font-size: 0;
  display: inline-block;
  margin-bottom: 8px;
}
.left_con li .text_con .try-read-box .try-read-item .try-read-img {
  display: inline-block;
  vertical-align: middle;
  margin-right: 6px;
  background: url(https://www.imooc.com/static/img/column/try-read-img_new_2x.png);
  background-repeat: no-repeat;
  background-size: 34px auto;
  background-position: center;
  width: 30px;
  height: 20px;
}
.left_con li .text_con .try-read-box .try-read-item .try-read-title {
  display: inline-block;
  font-size: 12px;
  color: #545c63;
  text-align: left;
  line-height: 16px;
  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
}

.left_con li .text_con .author-box {
  display: inline-block;
  font-size: 0;
}
.left_con li .text_con .author-box .author-img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: top center;
  display: inline-block;
  vertical-align: middle;
}

.left_con li .text_con .author-box .author-name {
  margin: 0 8px 0 12px;
  font-size: 14px;
  text-align: left;
  line-height: 36px;
  font-weight: 700;
}
.left_con li .text_con .author-box span {
  font-size: 12px;
  color: #1c1f21;
  vertical-align: middle;
}
.left_con li .text_con .author-box .author-title {
  font-size: 12px;
  text-align: left;
  line-height: 36px;
  margin-left: 8px;
}

.left_con li .text_con .price_con .sale-price .ori {
  font-size: 12px;
  color: #9199a1;
  text-align: left;
  line-height: 36px;
  text-decoration: line-through;
}
.left_con li .text_con .price_con .sale-price .sale {
  font-weight: 700;
  font-size: 18px;
  color: #37f;
  text-align: left;
  line-height: 36px;
  margin-right: 8px;
}
.countdown .name {
  color: #fff;
  line-height: 16px;
  height: 20px;
  background-image: linear-gradient(90deg, #37f 0, #74ccff 99%);
  padding: 2px 6px;
  font-size: 12px;
}
.countdown .clock {
  color: #545c63;
  display: inline-block;
  margin-left: 6px;
  font-size: 12px;
  line-height: 20px;
  font-weight: 700;
}
.left_con li .text_con .info span {
  font-size: 12px;
  color: #9199a1;
  text-align: left;
  line-height: 14px;
}
.left_con li .text_con .author-box {
  display: inline-block;
  font-size: 0;
}
.left_con li .text_con .price_con {
  display: inline-block;
  min-height: 56px;
}


.wechatma-con {
  background: #fff;
  padding: 22px;
  box-sizing: border-box;
  margin-bottom: 24px;
  box-shadow: 0 2px 4px 0 rgba(28, 31, 33, 0.06);
}
.wechatma-con .ma-con {
  display: flex;
  padding-bottom: 15.5px;
  border-bottom: 1px solid rgba(28, 31, 33, 0.06);
}
.wechatma-con .ma-con .ma {
  width: 80px;
  height: 80px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(https://static3.sycdn.imooc.com/static/img/column/qiqi_wechat_qr2.png);
}
.wechatma-con .ma-con .desc {
  width: 140px;
  margin-left: 25px;
}
.wechatma-con .ma-con .desc .title {
  font-size: 14px;
  color: #07111b;
  line-height: 16px;
  font-weight: 700;
  margin-bottom: 10px;
}
.wechatma-con .ma-con .desc .item-con .item {
  width: 58px;
  height: 22px;
  text-align: center;
  line-height: 22px;
  background: #f6f6f6;
  border-radius: 4px;
  font-size: 12px;
  color: #545c63;
  margin-right: 12px;
  margin-bottom: 11px;
}
.download-app .text h4 {
  font-size: 14px;
  color: #1c1f21;
  font-weight: 600;
  line-height: 16px;
  margin-bottom: 5px;
}
.download-app .text p {
  font-size: 12px;
  color: #240000;
  line-height: 14px;
}
.wechatma-con .ma-con .desc .item-con {
  display: flex;
  flex-wrap: wrap;
}
.wechatma-con .text-con {
  padding-top: 7.5px;
  font-size: 14px;
  color: #545c63;
  line-height: 23px;
}
.download-app {
  width: 100%;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(28, 31, 33, 0.06);
  padding: 24px;
  margin-top: 24px;
  margin-bottom: 20px;
  cursor: pointer;
}
.download-app .logo-icon {
  width: 56px;
  height: 56px;
}
.download-app .text {
  margin-top: 10px;
  margin-left: 16px;
}
</style>