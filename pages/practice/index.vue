<template>
  <div class="golobal_content">
    <div class="op_top_back"></div>
    <section class="container">
      <div class="practice-content">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane :label="item.name" :name="item.id" v-for="item in typeList" :key="item.id">
            <ul class="op_pratice_subtag">
              <li class="li-item" v-for="(sutem, index) in subTypeList" :key="sutem.id">
                <a v-bind:class="{ praticesubtagactive: subPraCticeTag == index }" @click="subPraCticeTagClick(index)"
                  href="javascript:void(0);">{{ sutem.name }}
                </a>
              </li>
            </ul>
            <div class="op_pratice_content book_item fl">
              <ul class="article_list">
                <li v-for="bitem in blogList" :key="bitem.id">
                  <div class="op_artie_content">
                    <nuxt-link class="article_title" :to="'/practice/' + bitem.id">
                      {{ bitem.title }}
                    </nuxt-link>
                    <p class="op_pratice_describ">{{ bitem.descrb }}</p>
                    <ul>
                      <i class="pratice_icon_view"></i>
                      <span class="icon_des">{{ bitem.viewCount }}</span>
                      <i class="pratice_icon_zhan"></i>
                      <span class="icon_des">{{ bitem.good }}</span>
                      <i class="pratice_icon_comment"></i>
                      <span class="icon_des">{{ bitem.ccount }}</span>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <div class="op_pratice_aside fr">
              <div class="op_app_decrb fr">
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
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </section>
  </div>
</template>
<script>
import '~/assets/css/appdown.css'
import '~/assets/css/contentlist.css'
import showdown from 'showdown'
import realPractice from '@/api/blogServerReq'

export default {
  //异步调用，调用一次
  //params: 相当于之前 this.$route.params.id  等价  params.id
  data () {
    return {
      activeName: 'first',
      subPraCticeTag: -1,
      title: "开源实践博文，真正的实践记录者",
      descrb: "开源实践博文，是一个记录真实项目开发过程的一个博客，里面的文章都是项目开发过程中流程和难点的总结。通过文章，能让大家提升自己的项目能力和技术能力，让别人的经验成为自己提升的基石。"
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: '开源实践,客户端面试,iOS面试题,安卓面试题,Vue.js,前端面试题,nginx配置,Kotlin,RxJava,React Native,敏捷开发,Python',
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
    return realPractice.getHomeRealPratice(1, 8).then((response) => {
      return {
        typeList: response.data.typeList,
        subTypeList: response.data.subTypeList,
        blogList: response.data.blogList,
        activeName: response.data.typeList[0].id,
      }
    })
  },
  methods: {
    //分页切换的方法
    //参数是页码数
    handleClick (tab, event) {
      console.log(tab, event)
    },
    changModelMarkToHtml (content) {
      var converter = new showdown.Converter()
      return converter.makeHtml(content)
    },

    subPraCticeTagClick (index) {
      this.subPraCticeTag = index;
      window.console.log(index);
    }
  },
  computed: {},
}
</script>


<style>
.practice-content .el-tabs__nav {
  height: 50px;
}

.practice-content .el-tabs__header {
  background-color: white;
}

.practice-content .el-tabs__nav-wrap::after {
  background-color: white;
}

.praticesubtagactive {
  color: #409eff !important;
}

.op_top_back {
  background-color: white;
  height: 70px;
}

.practice-content {
  margin-top: -50px;
}

.teacher_content {
  background-color: white;
}

.op_pratice_subtag {
  display: flex;
  flex-wrap: wrap;
  height: auto;
  padding-left: 0px;
}

.op_pratice_subtag .li-item {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 1rem;
  font-size: 1.2rem;
  color: #8a9aa9;
  padding: 0 0.83rem;
  margin-bottom: 1rem;
  margin-right: 20px;
  height: 32px;
  width: 70px;
}

.op_pratice_subtag a {
  color: #666666;
}

.op_pratice_subtag a:hover {
  color: #409eff;
}

.op_pratice_content {
  width: 780px;
  background: white;
  position: relative;
  margin-bottom: 10px;
}

.article_list {
  padding-top: 20px;
  padding-left: 18px;
}

.op_pratice_aside {
  width: 326px;
  height: 400px;
}

.download-app .text p {
  margin-top: 0px;
  margin-bottom: 0px;
}

.download-app .text h4 {
  margin-top: 0px;
}
</style>
