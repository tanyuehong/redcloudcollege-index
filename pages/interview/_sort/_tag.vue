<template>
  <section class="my_gogal">
    <div class="interview_xuanchuan">
    </div>
    <div class="main_global_bg">
      <section class="container">
        <div class="row mb15">
          <div class="interview-content">
            <div class="interview-function">
              <div class="content___3CUOk"><a target="_blank" rel="noopener"
                  href="https://marketing.qiniu.com/activity/os_lp#www-homepage_button-1" class="container___1me7f">
                  <section class="card___2JUgs card___JWlTD">
                    <div class="icon___2NyVK"
                      style="background-image:url(https://static-file.qiniu.io/thallo/admin/1654513637)"></div>
                    <div class="content___2eWOS cardContent___24wEe">
                      <h5 class="title___1e416 title___2VARs">每日一题</h5>
                      <p class="desc___3fiGh desc___3Su17">拳不离手，曲不离口</p>
                    </div>
                  </section>
                </a><a target="_blank" rel="noopener"
                  href="https://marketing.qiniu.com/activity/act-free#www-homepage_button-3" class="container___1me7f">
                  <section class="card___2JUgs card___JWlTD">
                    <div class="icon___2NyVK"
                      style="background-image:url(https://static-file.qiniu.io/thallo/admin/1654513787)"></div>
                    <div class="content___2eWOS cardContent___24wEe">
                      <h5 class="title___1e416 title___2VARs">智能出题</h5>
                      <p class="desc___3fiGh desc___3Su17">精选名企真题，迅速查漏补缺</p>
                    </div>
                  </section>
                </a><a target="_blank" rel="noopener"
                  href="https://marketing.qiniu.com/activity/2021618-act-cdn#www-homepage_button-4"
                  class="container___1me7f">
                  <section class="card___2JUgs card___JWlTD">
                    <div class="icon___2NyVK"
                      style="background-image:url(https://static-file.qiniu.io/thallo/admin/1654513880)"></div>
                    <div class="content___2eWOS cardContent___24wEe">
                      <h5 class="title___1e416 title___2VARs">学习计划</h5>
                      <p class="desc___3fiGh desc___3Su17">步步为营，稳步提升</p>
                    </div>
                  </section>
                </a>

                <nuxt-link :to="'/interview/question'" target="_blank" class="container___1me7f">
                  <section class="card___2JUgs card___JWlTD">
                    <div class="icon___2NyVK"
                      style="background-image:url(https://static-file.qiniu.io/thallo/admin/1654513880)"></div>
                    <div class="content___2eWOS cardContent___24wEe">
                      <h5 class="title___1e416 title___2VARs">面试题上传</h5>
                      <p class="desc___3fiGh desc___3Su17">分享面试真题，爱心传递</p>
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
                  <a href="/interview/ai/cover?jobTagId=639" class="mock-jobs-item" v-for="item in typeList"
                    :key="item.id">
                    <div class="mock-jobs-info">
                      <p class="mock-jobs-name">{{ item.name }}</p>
                      <p class="item-mock-tips">115944人已参加</p>
                    </div>
                    <img class="mock-jobs-img" :src="item.img">
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-8 interview_content-list">
              <div class="interview-top-group">
                <div class="interview-tag-list" v-if="tagList.length > 0">
                  <ul class="tag-warper">
                    <li class="tag-item" v-for="item in tagList" :key="item.id">
                      <nuxt-link :to="tagPath(item)" class="tag-link" v-bind:class="{ active: tag == item.id }">{{
                          item.name
                      }}
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="interview_detail_con">
                <div class="nodata-warper" v-if="list.length == 0">
                  <img class="nodata-image-tips" src="https://img.redskt.com/asset/img/nodata.png" />
                  <div>
                    <span>暂时没有数据哦，赶紧抢沙发吧</span>
                  </div>
                </div>
                <div class="interview-list-header" v-if="list.length > 0">
                  <ul class="nav-list">
                    <li class="blog-item right">
                      <nuxt-link :to="sortPath('recommand')" class="content-type-item"
                        v-bind:class="{ active: sort == 'recommand' }">推荐</nuxt-link>
                    </li>
                    <li class="blog-item right">
                      <nuxt-link :to="sortPath('latest')" class="content-type-item"
                        v-bind:class="{ active: sort == 'latest' }">最新</nuxt-link>
                    </li>
                    <li class="blog-item">
                      <nuxt-link :to="sortPath('hot')" class="content-type-item"
                        v-bind:class="{ active: sort == 'hot' }">
                        热榜
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
                <div v-for="item in list" :key="item.qid" class="interview_list">
                  <div class="answer_title">
                    <nuxt-link :to="'/faquestion/' + item.qid" class="header">
                      {{ item.title }}
                      <div class="ui red label horizontal">顶</div>
                      <div class="ui orange label horizontal" v-if="item.readcount > 300">热</div>
                      <div class="ui red label horizontal fix" v-if="item.state == 9">已解决</div>
                    </nuxt-link>
                  </div>

                  <div class="description" v-html="item.content">
                  </div>
                  <div class="extra question-tags" v-if="item.tags">
                    <nuxt-link :to="'/tags/' + tag.id" class="ui horizontal basic label popup-tag" target="_blank"
                      v-for="tag in item.tags" :key="tag.id">
                      <img :src="tag.img" v-if="tag.img" />{{ tag.name }}
                    </nuxt-link>
                  </div>

                  <div class="q_time">
                    <span>{{ item.gmtCreate }}来自</span>
                    <nuxt-link :to="'/user/' + item.uid + '/blog'" class="user_name" target="_blank">
                      {{ item.nickname }}
                    </nuxt-link>
                    <b v-if="item.price > 0">
                      悬赏
                      <a href="javascript:;" title="个人悬赏">¥{{ item.price }}</a>
                    </b>
                    <nuxt-link :to="'/faquestion/' + item.qid" class="answer_num" title="问题回答数量">
                      <span>{{ item.reply }}</span>
                      <p class="anser-lable">回答</p>
                    </nuxt-link>
                  </div>
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
                <img src="~/assets/img/appLogo.png" alt="" class="logo-icon fl" />
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

import '~/assets/css/appdown.css'
import '~/assets/css/askindex.css'
import interviewServerApi from "@/api/interviewServerReq";

export default {
  data () {
    return {
      activeIndex: "1",
      tagList: [],
      typeList: [],
      tagList: [],
      sort: 'recommand',
      tag: 'all',
      typeIndex: 0,
      title: "开源实践面试 - 最用心的面试刷题知识学习网站",
      descrb: "求职之前，先上开源实践网面试频道，专业的面试题库和最走心得面试解答，让你轻轻松松找到互联网工作。互联网IT技术/产品/运营/硬件/汽车机械制造/金融/财务管理/审计/银行/市场营销/地产/快消/管培生等等专业技能学习/备考/求职神器，在线进行企业校招实习笔试面试真题模拟考试练习，全面提升求职竞争力，找到好工作，拿到好offer。"
    };
  },

  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: "开源实践网,C++笔试面试,Java笔试面试,计算机笔试,计算机面试,IT笔试,笔试题库,笔试练习,IT面试,在线编程,编程学习，开源实践网",
        },
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

  asyncData ({ params, error }) {
    return interviewServerApi.getInterviewIndex({ 'type': params.type ? params.type : '', 'sort': '', 'tag': '' }).then((response) => {
      return {
        list: response.data.list ? response.data.list : [],
        typeList: response.data.typeList,
        tagList: response.data.tagList,
        sort: params.sort ? params.sort : "recommand",
        tag: params.tag ? params.tag : (response.data.tagList.length > 0 ? "all" : "")
      }
    })
  },

  mounted () {
    interviewServerApi.getInterviewIndex({ 'sort': '', 'tag': '' }).then((response) => {
    })
  },

  computed: {
    sortPath () {
      return function (sortString) {
        if (sortString == 'recommand') {
          return "/interview"
        }
        return "/interview/" + sortString;
      }
    },
    tagPath () {
      return function (item) {
        if (item.id == 'all') {
          return "/interview";
        }
        return "/interview/" + this.sort + "/" + item.id;
      }
    }
  },

  methods: {
    jumpStartQuestion () {
      var token = localStorage.getItem('redclass_token')
      if (!(token && token != 'undefined')) {
        this.$message({
          message: "提问需要登录，正在跳转登录界面中！", type: 'error', duration: 2000, onClose: () => {
            $nuxt.$router.push({
              name: "user-login"
            });
          }
        })
        return;
      }
      var item = window.localStorage.getItem('show_howto-ask');
      if (item) {
        this.$router.push({
          name: "faquestion-ask",
          query: {},
        });
      } else {
        window.localStorage.setItem('show_howto-ask', '1')
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
.interview_list {
  margin-top: 10px;
}

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
  background: rgba(7, 190, 255, .05);
  color: #409eff;
}


.interview-list-header {
  margin-left: -10px;
  padding-left: 0;
  padding-top: 4px;
  padding-bottom: 4px;
  border-bottom: 1px solid hsla(0, 0%, 59.2%, .1);
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
  border-right: 1px solid hsla(0, 0%, 59.2%, .2);
}

.interview-content .interview_detail_con {
  margin: 10px 20px 20px 20px;
  padding-bottom: 25px;
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
  box-shadow: 0 8px 32pxrgba(0, 0, 0, .04);
  border-radius: 8px;
  cursor: pointer;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
  -webkit-transition-duration: .3s;
  transition-duration: .3s;
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
