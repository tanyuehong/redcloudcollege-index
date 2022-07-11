<template>
  <div class="golobal_content">

    <div class="blog-top-type">
      <section class="container">
        <ul class="blog-typeList">
          <nuxt-link :to="typePath(item, index)" v-for="(item, index) in typeList" :key="item.id" class="blog-type-item"
            v-bind:class="{ active: type == item.type }" :title="item.name">
            {{ item.name }}
          </nuxt-link>
        </ul>
      </section>
    </div>
    <section class="container">
      <div class="practice-content">
        <div class="tag-list" v-if="tagList.length > 0">
          <ul class="tag-warper">
            <li class="tag-item" v-for="item in tagList" :key="item.id">
              <a class="tag-link">{{ item.name }}</a>
            </li>
          </ul>
        </div>

        <div class="op_pratice_content fl">
          <div class="nodata-warper" v-if="blogList.length == 0">
            <img class="nodata-image-tips" src="https://img.redskt.com/asset/img/nodata.png" />
            <div>
              <span class="nodata-title">该分类下暂时没有文章哦！</span>
            </div>
          </div>
          <div class="blog-list-header" v-if="type == 'all' && blogList.length > 0">
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
                <nuxt-link :to="sortPath('hot')" class="content-type-item" v-bind:class="{ active: sort == 'hot' }">热榜
                </nuxt-link>
              </li>
            </ul>
          </div>
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
      typeIndex: 0,
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
  asyncData ({ params, error, app }) {
    var getToken = app.$cookies.get("token");
    return realPractice.getHomeRealPratice({ "type": params.type, "sort": params.sort, "tag": params.tag, "token": getToken }).then((response) => {
      return {
        typeList: response.data.typeList,
        tagList: response.data.tagList,
        blogList: response.data.blogList,
        activeName: response.data.typeList[0].id,
        type: response.data.typeList[0].type,
        tag: response.data.typeList[0].type,
        sort: params.sort ? params.sort : "recommand",
      }
    })
  },
  methods: {
    changModelMarkToHtml (content) {
      var converter = new showdown.Converter()
      return converter.makeHtml(content)
    },

    subPraCticeTagClick (index) {
      this.subPraCticeTag = index;
      window.console.log(index);
    }
  },

  mounted () {
  },

  computed: {
    // 计算属性的 getter
    typePath () {
      return function (item, index) {
        if (index == 0) {
          return "/practice";
        }
        return "/practice/category/" + item.type;
      }
    },

    sortPath () {
      return function (sort) {
        return "/practice/category/" + this.type + "/" + sort;
      }
    }
  }
}
</script>


<style>
.article_list li:not(:last-child) {
  border-bottom: 1px solid #e5e6eb;
}

.article_list li {
  margin-top: 18px;
}

.blog-list-header {
  padding-left: 0px;
  padding-top: 4px;
  padding-bottom: 4px;
  border-bottom: 1px solid hsla(0, 0%, 59.2%, .1);
}

.blog-list-header .blog-item {
  font-size: 14px;
  border-bottom: none;
  margin-top: 12px;
  margin-bottom: 4px;
  padding-left: 26px;
  padding-right: 26px;
}

.blog-item.right {
  border-right: 1px solid hsla(0, 0%, 59.2%, .2);
}

.blog-list-header .blog-item .content-type-item {
  color: #666;
  text-decoration: none;
}

.blog-list-header .blog-item .content-type-item.active {
  color: #409eff;
}

.blog-list-header .nav-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: 2px;
}

.blog-top-type {
  background: #fff;
}

.blog-top-type .blog-typeList {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  height: 40px;
  margin-left: 15px;
  text-decoration: none;
}

.blog-top-type .blog-typeList .blog-type-item {
  font-size: 16px;
  margin-right: 26px;
  font-weight: 500;
  color: #333;
  text-decoration: none;
}

.blog-top-type .blog-typeList .blog-type-item.active {
  color: #409eff;
}

.praticesubtagactive {
  color: #409eff !important;
}

.practice-content {
  margin-top: 10px;
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
  margin-bottom: 15px;
}

.article_list {
  padding-top: 6px;
  padding-left: 18px;
  padding-bottom: 10px;
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
