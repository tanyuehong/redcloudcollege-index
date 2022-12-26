<template>
  <section class="my_gogal">
    <div class="interview_xuanchuan"></div>
    <div class="main_global_bg">
      <section class="container">
        <div class="row mb15">
          <div class="interview-content">
            <div class="interview-function">
              <div class="content___3CUOk">
                <a rel="noopener" href="#" class="container___1me7f">
                  <section class="card___2JUgs card___JWlTD">
                    <div class="content___2eWOS cardContent___24wEe">
                      <h5 class="title___1e416 title___2VARs">每日一题</h5>
                      <p class="desc___3fiGh desc___3Su17">
                        拳不离手，曲不离口
                      </p>
                    </div>
                  </section>
                </a>
                <a rel="noopener" href="#" class="container___1me7f">
                  <section class="card___2JUgs card___JWlTD">
                    <div class="content___2eWOS cardContent___24wEe">
                      <h5 class="title___1e416 title___2VARs">智能出题</h5>
                      <p class="desc___3fiGh desc___3Su17">
                        精选名企真题，迅速查漏补缺
                      </p>
                    </div>
                  </section>
                </a>
                <a rel="noopener" href="#" class="container___1me7f">
                  <section class="card___2JUgs card___JWlTD">
                    <div class="content___2eWOS cardContent___24wEe">
                      <h5 class="title___1e416 title___2VARs">学习计划</h5>
                      <p class="desc___3fiGh desc___3Su17">
                        步步为营，稳步提升
                      </p>
                    </div>
                  </section>
                </a>

                <nuxt-link :to="'/interview/question'" target="_blank" class="container___1me7f">
                  <section class="card___2JUgs card___JWlTD">
                    <div class="content___2eWOS cardContent___24wEe">
                      <h5 class="title___1e416 title___2VARs">面试题上传</h5>
                      <p class="desc___3fiGh desc___3Su17">
                        分享面试真题，爱心传递
                      </p>
                    </div>
                  </section>
                </nuxt-link>
              </div>
            </div>

            <div class="module-box js-scroll-occupation">
              <div class="module-head clearfix">
                <h1>按岗位练习</h1>
                <span class="mock-sub-title">选择目标职位，精选名企面试真题，体验真实现场面试</span>
              </div>
              <div class="module-body">
                <div class="mock-jobs-list">
                  <nuxt-link :to="'/interview/position/' + item.id" class="mock-jobs-item" v-for="item in typeList" :key="item.id">
                    <div class="mock-jobs-info">
                      <p class="mock-jobs-name">{{  item.name  }}</p>
                      <!-- 0人已参加 -->
                      <p class="item-mock-tips">功能开发中</p>
                    </div>
                    <img class="mock-jobs-img" :src="item.img" alt="图标"/>
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="col-md-8 interview_content-list">
              <div class="interview-top-group">
                <div class="interview-tag-list" v-if="tagList.length > 0">
                  <ul class="tag-warper">
                    <li class="tag-item" v-for="item in tagList" :key="item.id">
                      <nuxt-link :to="tagPath(item)" class="tag-link" v-bind:class="{ active: tag == item.path }">{{
                         item.name  }}
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="interview_detail_con">
                <div class="nodata-warper" v-if="list.length == 0">
                  <img class="nodata-image-tips" src="https://img.redskt.com/asset/img/nodata.png" alt="空数据提示"/>
                  <div>
                    <span>暂时没有数据哦，赶紧抢沙发吧</span>
                  </div>
                </div>
                <div class="interview-list-header" v-if="list.length > 0">
                  <ul class="nav-list">
                    <li class="blog-item right">
                      <nuxt-link :to="sortPath('recommand')" class="content-type-item"
                        v-bind:class="{ active: sort == 'recommand'}">推荐</nuxt-link>
                    </li>
                    <li class="blog-item right">
                      <nuxt-link :to="sortPath('latest')" class="content-type-item"
                        v-bind:class="{ active: sort == 'latest' ||  tag == 'latest' }">最新</nuxt-link>
                    </li>
                    <li class="blog-item">
                      <nuxt-link :to="sortPath('hot')" class="content-type-item"
                        v-bind:class="{ active: sort == 'hot'||  tag == 'hot' }">
                        热榜
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
                <div v-for="item in list" :key="item.qid" class="interview_list">
                  <div class="answer_title">
                    <nuxt-link :to="'/interview/detail/' + item.qid" class="header">
                      {{  item.title  }}
                    </nuxt-link>
                  </div>
                  <div class="description" v-html="item.content"></div>
                  <div class="extra question-tags" v-if="item.tags">
                    <div class="ui red label top horizontal">精选</div>
                    <div class="ui orange label horizontal" v-if="item.readcount > 300">
                      热
                    </div>
                    <nuxt-link :to="'/tags/' + tag.id" class="ui horizontal basic label popup-tag" target="_blank"
                      v-for="tag in item.tags" :key="tag.id">
                      <img :src="tag.img" v-if="tag.img" alt="标签图标"/>{{  tag.name  }}
                    </nuxt-link>
                  </div>

                  <div class="interview-descrip">
                    <span class="descrip-item right">{{  item.type  }}</span>
                    <span class="descrip-item right">{{  item.deep  }}</span>
                    <span class="descrip-item">{{  item.gmtCreate  }}来自</span>
                    <nuxt-link :to="'/user/' + item.uid + '/blog'" class="user_name" target="_blank">
                      {{  item.nickname  }}
                    </nuxt-link>
                    <b v-if="item.price > 0">
                      悬赏
                      <a href="javascript:;" title="个人悬赏">¥{{  item.price  }}</a>
                    </b>
                  </div>
                  <div class="interview-qustion-info">
                    <div class="interview-item">
                      <nuxt-link :to="'/interview/detail/' + item.qid" target="_blank">
                        <button type="button" class="interview-btn-sm">
                          <span role="img" aria-label="eye" class="anticon anticon-eye"><svg viewBox="64 64 896 896"
                              focusable="false" data-icon="eye" width="1em" height="1em" fill="currentColor"
                              aria-hidden="true">
                              <path
                                d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z">
                              </path>
                            </svg></span><span>{{  item.readcount  }}</span>
                        </button>
                      </nuxt-link>
                    </div>
                    <div class="interview-item">
                      <button type="button" class="interview-btn-sm">
                        <span role="img" aria-label="star" class="anticon anticon-star"><svg viewBox="64 64 896 896"
                            focusable="false" data-icon="star" width="1em" height="1em" fill="currentColor"
                            aria-hidden="true">
                            <path
                              d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z">
                            </path>
                          </svg></span><span>{{  item.collect  }}</span>
                      </button>
                    </div>
                    <div class="interview-item">
                      <nuxt-link :to="'/interview/detail/' + item.qid" target="_blank">
                        <button type="button" class="interview-btn-sm">
                          <span role="img" aria-label="message" class="anticon anticon-message"><svg
                              viewBox="64 64 896 896" focusable="false" data-icon="message" width="1em" height="1em"
                              fill="currentColor" aria-hidden="true">
                              <path
                                d="M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z">
                              </path>
                            </svg></span><span>{{  item.reply  }}</span>
                        </button>
                      </nuxt-link>
                    </div>
                    <div class="interview-item">
                      <button type="button" class="interview-btn-sm">
                        <span role="img" aria-label="history" class="anticon anticon-history"><svg
                            viewBox="64 64 896 896" focusable="false" data-icon="history" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true">
                            <path
                              d="M536.1 273H488c-4.4 0-8 3.6-8 8v275.3c0 2.6 1.2 5 3.3 6.5l165.3 120.7c3.6 2.6 8.6 1.9 11.2-1.7l28.6-39c2.7-3.7 1.9-8.7-1.7-11.2L544.1 528.5V281c0-4.4-3.6-8-8-8zm219.8 75.2l156.8 38.3c5 1.2 9.9-2.6 9.9-7.7l.8-161.5c0-6.7-7.7-10.5-12.9-6.3L752.9 334.1a8 8 0 003 14.1zm167.7 301.1l-56.7-19.5a8 8 0 00-10.1 4.8c-1.9 5.1-3.9 10.1-6 15.1-17.8 42.1-43.3 80-75.9 112.5a353 353 0 01-112.5 75.9 352.18 352.18 0 01-137.7 27.8c-47.8 0-94.1-9.3-137.7-27.8a353 353 0 01-112.5-75.9c-32.5-32.5-58-70.4-75.9-112.5A353.44 353.44 0 01171 512c0-47.8 9.3-94.2 27.8-137.8 17.8-42.1 43.3-80 75.9-112.5a353 353 0 01112.5-75.9C430.6 167.3 477 158 524.8 158s94.1 9.3 137.7 27.8A353 353 0 01775 261.7c10.2 10.3 19.8 21 28.6 32.3l59.8-46.8C784.7 146.6 662.2 81.9 524.6 82 285 82.1 92.6 276.7 95 516.4 97.4 751.9 288.9 942 524.8 942c185.5 0 343.5-117.6 403.7-282.3 1.5-4.2-.7-8.9-4.9-10.4z">
                            </path>
                          </svg></span><span>{{  item.meet  }}</span>
                      </button>
                    </div>
                  </div>
                  <nuxt-link :to="'/interview/detail/' + item.qid" class="answer_num" title="问题回答数量">
                    <img src="https://img.redskt.com/interview/questionlist/interview-tags.png" alt="图标"/>
                    <span>{{  item.reply  }}</span>
                    <span class="anser-lable">解答</span>
                  </nuxt-link>
                  <span class="descrip-more">
                    <el-dropdown>
                      <el-button type="primary" size="mini" plain>更多操作<i class="el-icon-arrow-down el-icon--right"></i>
                      </el-button>

                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>收藏</el-dropdown-item>
                        <el-dropdown-item>添加题库</el-dropdown-item>
                        <el-dropdown-item>设为必掌握</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </span>
                </div>
              </div>
              <div class="clearnfloat"></div>
            </div>
            <div class="col-md-4">
              <div class="wechatma-con js-wechatma-con">
                <div class="ma-con">
                  <div class="ma"></div>
                  <div class="desc">
                    <div class="title">扫码关注开源实践网微信公众号</div>
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
              <div class="download-app clearfix">
                <img src="~/assets/img/appLogo.png" alt="app图标" class="logo-icon fl" />
                <div class="text fl">
                  <h4>下载开源实践APP</h4>
                  <p>更好的体验 学习随处可享</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import "~/assets/css/appdown.css";
import "~/assets/css/askindex.css";
import interviewServerApi from "@/api/interviewServerReq";

export default {
  data() {
    return {
      activeIndex: "1",
      tagList: [],
      typeList: [],
      tagList: [],
      sort: "recommand",
      tag: "all",
      typeIndex: 0,
      title: "开源实践面试 - 最用心的面试刷题知识学习网站",
      descrb:
        "求职之前，先上开源实践网面试频道，专业的面试题库和最走心得面试解答，让你轻轻松松找到互联网工作。互联网IT技术/产品/运营/硬件/汽车机械制造/金融/财务管理/审计/银行/市场营销/地产/快消/管培生等等专业技能学习/备考/求职神器，在线进行企业校招实习笔试面试真题模拟考试练习，全面提升求职竞争力，找到好工作，拿到好offer。",
    };
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content:
            "开源实践网,C++笔试面试,Java笔试面试,计算机笔试,计算机面试,IT笔试,笔试题库,笔试练习,IT面试,在线编程,编程学习，开源实践网",
        },
        {
          hid: "description",
          name: "description",
          content: this.descrb,
        },
        {
          hid: "og:description",
          content: this.descrb,
        },
      ],
    };
  },

  asyncData({ params, error }) {
    return interviewServerApi
      .getInterviewIndex({
        type: params.type ? params.type : "",
        sort: (params.tag =="latest" || params.tag =="hot") ?  params.tag : ( params.sort ? params.sort : "recommand"),
        tag: (params.tag && params.tag != 'recommand' && params.tag != 'latest' && params.tag != 'hot')
            ? params.tag: "",
      })
      .then((response) => {
        return {
          list: response.data.list ? response.data.list : [],
          typeList: response.data.typeList,
          tagList: response.data.tagList,
          sort: (params.tag =="latest" || params.tag =="hot") ?  params.tag : ( params.sort ? params.sort : "recommand") ,

          tag: (params.tag && params.tag != 'recommand' && params.tag != 'latest' && params.tag != 'hot')
            ? params.tag: "all"
        };
      });
  },

  mounted() {
    interviewServerApi
      .getInterviewIndex({ sort: "", tag: "" })
      .then((response) => { });
  },

  computed: {
    sortPath() {
      return function (sortString) {
        if (this.tag == 'all') {
          if(sortString == 'recommand') {
            return "/interview";
          }
          return "/interview/" + sortString;
        }
        return "/interview/" + this.tag + "/" + sortString;
      };
    },
    tagPath() {
      return function (item) {
        if (item.id == "all") {
          return "/interview";
        }
        return "/interview/" + item.path;
      };
    },
  },

  methods: {
    sortParmString(tag,sort) {
      if(tag == "recommand" ||tag == "latest" || tag == "hot" ) {
        return tag;
      }
      return sort;
    },
    moreClickCommend() { },
    jumpStartQuestion() {
      var token = localStorage.getItem("redclass_token");
      if (!(token && token != "undefined")) {
        this.$message({
          message: "提问需要登录，正在跳转登录界面中！",
          type: "error",
          duration: 2000,
          onClose: () => {
            $nuxt.$router.push({
              name: "user-login",
            });
          },
        });
        return;
      }
      var item = window.localStorage.getItem("show_howto-ask");
      if (item) {
        this.$router.push({
          name: "faquestion-ask",
          query: {},
        });
      } else {
        window.localStorage.setItem("show_howto-ask", "1");
        this.$router.push({
          name: "faquestion-howtoask",
          query: {},
        });
      }
    },
  },
};
</script>

<style scoped>

.answer_title {
  margin-right: 60px;
}
.descrip-more {
  position: absolute;
  bottom: 10px;
  right: 2px;
}

.interview_list .description {
   margin-top: 15px;
   font-size: 12px;
   color: #333;
}

.interview-qustion-info .interview-item {
  margin-right: 8px;
}

.interview-descrip .descrip-item.right {
  border-right: 1px solid hsla(0, 0%, 59.2%, 0.2);
}

.interview-descrip .user_name {
  margin-left: -12px;
}

.interview-descrip .descrip-item {
  font-size: 12px;
  color: #666;
  padding-right: 6px;
  margin-right: 6px;
}

.interview-qustion-info {
  display: flex;
  flex-flow: row wrap;
  margin-top: 8px;
  margin-left: -6px;
}

.interview-btn-sm .anticon {
  text-align: center;
  vertical-align: middle;
  font-size: 16px;
  margin-right: 4px;
  color: #666;
}

.interview-btn-sm {
  border: none;
  background: #fff;
  font-size: 12px;
}

.interview-btn-sm span {
  font-size: 12px;
  color: #666;
}

.interview_list {
  margin-top: 15px;
  position: relative;
  padding-bottom: 6px;
}

.interview_list:not(:last-child) {
  border-bottom: 1px solid #f0f0f0;
}

.interview_list .answer_num {
  position: absolute;
  top: 0px;
  right: 10px;
  color: #666;
  font-size: 12px;
}

.interview_list .answer_num:hover {
  text-decoration: none;
}

.interview_list .answer_num img {
  width: 30px;
  height: 30px;
  vertical-align: middle;
  margin-right: -6px;
}

.interview_list .answer_title .header {
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 10px;
}

.interview_list .question-tags {
  margin-top: 10px;
  margin-bottom: 10px;
}

.interview_list .ui.label.top {
  padding: 5px 8px;
  border-width: 1px;
  border-color: #b7eb8f !important;
  background: #f6ffed !important;
  color: #389e0d !important;
  margin-right: 6px;
}

.interview_list .ui.basic.label {}

.interview-top-group {
  border-bottom: solid 1px #e6e6e6;
  margin-top: 20px;
  padding-bottom: 0px;
  margin-right: -10px;
}

.interview-content {
  margin-bottom: 20px;
}

.interview-tag-list .tag-warper .tag-item .tag-link.active {
  background: rgba(7, 190, 255, 0.05);
  color: #409eff;
}

.interview-list-header {
  margin-left: -10px;
  padding-left: 0;
  padding-top: 4px;
  padding-bottom: 4px;
  border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
}

.extra.question-tags img {
  display: inline-block;
  vertical-align: baseline;
  height: 22px !important;
  border-radius: 0.14285714rem;
  padding: 2px 0;
  margin: -0.5833em 0.5em -0.5833em 0;
}

.interview-list-header .nav-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: 2px;
}

.interview-list-header .blog-item .content-type-item.active {
  color: #409eff;
}

.interview-list-header .blog-item {
  font-size: 14px;
  border-bottom: none;
  margin-top: 12px;
  margin-bottom: 4px;
  padding-left: 26px;
  padding-right: 26px;
}

.interview-list-header .blog-item .content-type-item {
  color: #666;
  text-decoration: none;
}

.blog-item.right {
  border-right: 1px solid hsla(0, 0%, 59.2%, 0.2);
}

.interview-content .interview_detail_con {
  margin: 10px 10px 10px 10px;
  padding-bottom: 10px;
}

.interview-tag-list {
  margin-top: 5px;
  margin-bottom: 15px;
}

.interview-tag-list .tag-warper {
  display: flex;
  flex-wrap: wrap;
}

.interview-tag-list .tag-warper .tag-item {
  margin-right: 18px;
  margin-bottom: 15px;
}

.interview-tag-list .tag-warper .tag-item .tag-link {
  background: #efefef;
  border-radius: 14px;
  padding: 5px 16px;
  font-size: 14px;
  text-decoration: none;
  color: #666;
}

.interview-type-item.active {
  color: #409eff;
}

.interview_content-list {
  background: #fff;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
}

.interview-type-item {
  font-size: 16px;
  margin-right: 36px;
  font-weight: 500;
  color: #333;
  text-decoration: none;
}

.interview_xuanchuan {
  height: 300px;
  width: 100%;
  background-repeat: repeat-x;
  background-image: url(https://img.redskt.com/interview/home/iterviewcover.jpg);
}

.interview-function {
  margin-top: -10px;
}

.content___3CUOk {
  width: 1160px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: auto;
  padding: 0;
  overflow-x: unset;
}

.content___3CUOk .container___1me7f {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 0px;
  flex: 1 1 0;
  display: block;
  margin: 0 15px 0 15px;
}

.content___3CUOk .container___1me7f .card___JWlTD .cardContent___24wEe .desc___3Su17 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 8px;
  font-size: 14px;
  line-height: 22px;
  color: #666;
}

.content___3CUOk .container___1me7f.first {
  margin-left: 0px;
}

.content___3CUOk .container___1me7f .card___JWlTD {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: #fff;
  height: 108px;
  padding: 0 20px;
  position: relative;
  border: none;
  -webkit-box-shadow: 0 8px 32px rgb(0 0 0 / 4%);
  box-shadow: 0 8px 32pxrgba (0, 0, 0, 0.04);
  border-radius: 8px;
  cursor: pointer;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}

.module-box {
  margin-top: 15px;
  border-radius: 3px;
  margin-bottom: 10px;
  background: #fff;
}

.module-head {
  padding: 25px 20px 0;
  line-height: normal;
  position: relative;
}

.module-head h1,
.module-head h2 {
  font-size: 16px;
  line-height: 16px;
  float: left;
  font-weight: 600;
  white-space: nowrap;
}

.mock-sub-title:before {
  position: absolute;
  left: -6px;
  top: 6px;
  content: "";
  height: 0;
  width: 0;
  border-right: 6px solid #f3f3f6;
  border-top: 6px dashed transparent;
  border-bottom: 6px dashed transparent;
}

.mock-sub-title {
  font-size: 14px;
  color: #999;
  float: left;
  line-height: 16px;
  margin-left: 20px;
  background: #f3f3f6;
  padding: 5px 10px;
  border-radius: 4px;
  margin-top: -5px;
  position: relative;
}

.module-body {
  padding: 20px 0px;
}

.mock-jobs-list {
  display: flex;
  flex-wrap: wrap;
}

.mock-jobs-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 253px;
  padding: 14px 20px;
  background: #fff;
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 8%);
  border-radius: 4px;
  margin-bottom: 14px;
  margin-left: 23px;
}

.mock-jobs-item .mock-jobs-info {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mock-jobs-item .mock-jobs-img {
  width: 58px;
  height: 58px;
}

.mock-jobs-item:hover {
  margin-top: -4px;
  height: 86px;
  box-shadow: 0 6px 20px 0 rgb(0 0 0 / 16%);
}
</style>
