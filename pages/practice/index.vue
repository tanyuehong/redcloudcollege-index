<template>
  <div class="golobal_content">
    <div class="op_top_back"></div>
    <section class="container">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane
          :label="item.name"
          :name="item.id"
          v-for="item in typeList"
          :key="item.id"
        >
          <ul class="op_pratice_subtag">
            <li class="li-item" v-for="sutem in subTypeList" :key="sutem.id">
              <a>{{ sutem.name }}</a>
            </li>
          </ul>
          <div class="op_pratice_content book_item fl">
            <ul class="article_list">
              <li v-for="bitem in blogList" :key="bitem.id">
                <div class="op_artie_content">
                <nuxt-link class="article_title" :to="{name:'practice-detail',query:{id:bitem.id}}">
                      {{ bitem.title }}
                </nuxt-link>
                  <p class="op_pratice_describ">
                    {{ bitem.descrb }}
                  </p>
                  <ul>
                    <i class="pratice_icon_view"></i>
                    <span class="icon_des">{{bitem.viewCount}}</span>
                    <i class="pratice_icon_zhan"></span></i>
                    <span class="icon_des">{{bitem.good}}</span>
                    <i class="pratice_icon_comment"></i>
                    <span class="icon_des">11</span>
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
              <img
                src="~/assets/img/appLogo.png"
                alt=""
                class="logo-icon fl"
              />
              <div class="text fl">
                <h4>下载开源实践APP</h4>
                <p>更好的体验 学习随处可享</p>
              </div>
            </div>
          </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </section>
  </div>
</template>
<script>
import '~/assets/css/appdown.css'
import '~/assets/css/contentlist.css'
import showdown from 'showdown'
import realPractice from '@/api/realpractice'

export default {
  //异步调用，调用一次
  //params: 相当于之前 this.$route.params.id  等价  params.id
  data() {
    return { activeName: 'first' }
  },
  asyncData({ params, error }) {
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
    handleClick(tab, event) {
      console.log(tab, event)
    },
    changModelMarkToHtml(content) {
      var converter = new showdown.Converter()
      return converter.makeHtml(content)
    },
  },
  computed: {},
}
</script>

<style>
.op_top_back {
  background-color: white;
  height: 70px;
}
.el-tabs--top {
  margin-top: -50px;
}
.el-tabs__header {
  background-color: white;
}
.teacher_content {
  background-color: white;
}

.el-tabs__nav-wrap::after {
  background-color: white;
}

.el-tabs__nav {
  height: 50px;
}

.op_pratice_subtag {
  display: flex;
  flex-wrap: wrap;
  height: auto;
  padding-left:0px;
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
  color:#666666;
}

.op_pratice_subtag a:hover {
  color:#f56c6c;;
}

.op_pratice_content {
  width: 780px;
  background: white;
  position: relative;
  margin-bottom: 10px;
}

.article_list {
  padding-top: 20px;
  padding-left:18px;
}

.op_pratice_aside {
  width: 326px;
  height: 400px;
}
.download-app  .text p {
  margin-top: 0px;
  margin-bottom: 0px;
}

.download-app  .text h4 {
    margin-top: 0px;
}
</style>
