<template>
  <div class="golobal_content">
    <div class="ucenter-home-header">
      <div class="header-backgroud">
        <div class="container">
          <div class="user-info">
            <div class="user-pic">
              <div class="user-pic-bg">
                <img class="user-header-img" :src="userInfo.avatar" />
              </div>
            </div>
          </div>
          <div class="user-info-right">
            <div class="user-info-detail">
              <div class="user-name">
                <span>{{ userInfo.nickname }}</span>
              </div>

              <div class="user-sign">
                <span>{{ userInfo.sign }}</span>
              </div>
            </div>
            <div class="user-info-setting">
              <el-button @click="personSetting" round>个人设置</el-button>
            </div>

          </div>
        </div>
      </div>
      <div class="message-spreate"></div>
    </div>
    <div class="container">
      <div class="col-md-8">
        <div class="ucenter-home-content">
          <el-tabs>
            <el-tab-pane label="文章">
              <div class="user_article_content book_item">
                <ul class="article_list">
                  <li v-for="bitem in articleList" :key="bitem.id">
                    <div class="op_artie_content" v-if="bitem.ctype === 1">
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
                    <div class="op_message_content" v-else>
                      <div class="push-lf">
                        <nuxt-link :to="'/about/detail/' + bitem.id">
                          <img :src="bitem.cover" />
                        </nuxt-link>
                      </div>

                      <div class="push-rt">
                        <p class="message-title">
                          <nuxt-link :to="'/about/detail/' + bitem.id" target="_blank">{{ bitem.title }}</nuxt-link>
                        </p>
                        <div class="message-info">
                          <div class="info-item">
                            <i class="el-icon-view"></i>
                            <span class="read-tx">{{ bitem.viewCount }} 阅读</span>
                          </div>
                        </div>
                      </div>
                      <div class="clearfix">
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="收藏">收藏</el-tab-pane>
            <el-tab-pane label="关注">关注</el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <div class="col-md-4 ucenter-rightinfo">
        <div class="info-honor">
          <div class="block-title">个人成就</div>
          <div class="block-body">
            <!---->
            <!---->
            <!---->
            <!---->
            <div class="stat-item"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26"
                class="icon">
                <g fill="none" fill-rule="evenodd" transform="translate(0 .57)">
                  <ellipse cx="12.5" cy="12.57" fill="#E1EFFF" rx="12.5" ry="12.57" data-v-4fa4e5da=""></ellipse>
                  <path fill="#7BB9FF"
                    d="M8.596 11.238V19H7.033C6.463 19 6 18.465 6 17.807v-5.282c0-.685.483-1.287 1.033-1.287h1.563zm4.275-4.156A1.284 1.284 0 0 1 14.156 6c.885.016 1.412.722 1.595 1.07.334.638.343 1.687.114 2.361-.207.61-.687 1.412-.687 1.412h3.596c.38 0 .733.178.969.488.239.317.318.728.21 1.102l-1.628 5.645a1.245 1.245 0 0 1-1.192.922h-7.068v-7.889c1.624-.336 2.623-2.866 2.806-4.029z">
                  </path>
                </g>
              </svg> <span class="content">文章被点赞<span class="count">449</span></span></div>
            <div class="stat-item"><svg width="25" height="25" viewBox="0 0 25 25" class="icon stat-view-icon">
                <g fill="none" fill-rule="evenodd">
                  <circle cx="12.5" cy="12.5" r="12.5" fill="#E1EFFF"></circle>
                  <path fill="#7BB9FF"
                    d="M4 12.5S6.917 7 12.75 7s8.75 5.5 8.75 5.5-2.917 5.5-8.75 5.5S4 12.5 4 12.5zm8.75 2.292c1.208 0 2.188-1.026 2.188-2.292 0-1.266-.98-2.292-2.188-2.292-1.208 0-2.188 1.026-2.188 2.292 0 1.266.98 2.292 2.188 2.292z">
                  </path>
                </g>
              </svg> <span class="content">文章被阅读<span class="count">60,111</span></span></div><a
              href="https://juejin.cn/book/6844733795329900551/section/6844733795371843597" target="_blank"
              rel="nofollow noopener noreferrer" class="stat-item" data-v-4fa4e5da=""><svg
                xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" class="icon stat-jp-icon">
                <g fill="none" fill-rule="evenodd">
                  <circle cx="12.5" cy="12.5" r="12.5" fill="#E1EFFF"></circle>
                  <path fill="#7BB9FF"
                    d="M16.694 13.516l-3.719 3.055a1.1 1.1 0 0 1-1.412-.013l-2.77-2.362-3.597 2.437a.693.693 0 0 1-.895-.101.649.649 0 0 1-.008-.876l3.68-4.096a1.1 1.1 0 0 1 1.507-.122l2.653 2.135 2.248-2.4-1.34-1.358a.5.5 0 0 1 .327-.85l5.438-.313a.5.5 0 0 1 .528.533l-.368 5.449a.5.5 0 0 1-.855.317l-1.417-1.435z">
                  </path>
                </g>
              </svg> <span class="content">热心指数<span class="count">1,050</span></span></a>
            <!---->
          </div>
        </div>
        <!---->
        <div class="follow-block block shadow"><a href="/user/1592558262169277/following" rel="nofollow"
            class="follow-item" data-v-4fa4e5da="">
            <div class="item-title">关注了</div>
            <div class="item-count">0</div>
          </a><a href="/user/1592558262169277/followers" class="follow-item" data-v-4fa4e5da="">
            <div class="item-title">关注者</div>
            <div class="item-count">43</div>
          </a></div>
        <div class="more-block block"><a href="/user/1592558262169277/collections" class="more-item" data-v-4fa4e5da="">
            <div class="item-title">收藏集</div>
            <div class="item-count">2</div>
          </a><a href="/user/1592558262169277/tags" class="more-item" data-v-4fa4e5da="">
            <div class="item-title">关注标签</div>
            <div class="item-count">8</div>
          </a>
          <div class="more-item">
            <div class="item-title">加入于</div>
            <div class="item-count"><time datetime="2021-12-25T11:20:25.000Z" title="2021-12-25 19:20:25"
                class="time">2021-12-25</time></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import '~/assets/css/appdown.css'
import '~/assets/css/contentlist.css'

import userApi from "@/api/user";
import userServerApi from "@/api/userServerReq";

export default {

  data () {
    return {
      articleList: [], // 查询表单对象
    };
  },

  asyncData ({ params, error }) {
    return userServerApi.getShowUserInfo(params.id).then(response => {
      return {
        userInfo: response.data.userInfo,
        parmUid: params.id
      };
    });
  },
  mounted () {
    this.getUserArticleList();
  },

  methods: {
    // 获取文章列表的方法
    getUserArticleList () {
      userApi.getUserArticleList(this.parmUid).then(response => {
        this.articleList = response.data.articleList;
      });
    },
    personSetting () {
      var loginToken = window.localStorage.getItem('redclass_token');
      this.$router.push({
        name: "user-setting",
        params: { "loginToken": loginToken },
      });
    }
  },
  computed: {}
};
</script>

<style>
.info-item {
  font-size: 14px;
}

.op_message_content .push-rt {
  float: left;
}

.op_message_content .push-rt .message-title {
  margin-top: 3px;
  margin-bottom: 20px;
}

.op_message_content .push-rt p:first-child a {
  display: block;
  height: 36px;
  line-height: 18px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #444;
  font-size: 16px;
  font-weight: 550;
}

.op_message_content .read-tx {
  margin-right: 15px;
  color: #999;
}

.op_message_content .push-lf {
  float: left;
  width: 180px;
  height: 110px;
  overflow: hidden;
  margin-right: 12px;
}

.op_message_content .push-lf img {
  display: block;
  width: 100%;
}

.user_article_content .article_list {
  padding-left: 0px;
}

.ucenter-rightinfo {
  margin-top: 15px;
  padding-right: 0px;
  padding-left: 0px;
}

.ucenter-rightinfo .info-honor {
  background: #fff;
  border-radius: 2px;
  padding: 15px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
}

.info-honor .block-title {
  font-size: 16px;
  margin-top: 5px;
  padding-bottom: 20px;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid rgba(230, 230, 231, .5);
  margin-bottom: 20px;
}

.info-honor .stat-item {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
  font-weight: 550;
  margin-top: 14px;
  margin-bottom: 10px;
}

.info-honor .stat-item .icon {
  flex: 0 0 auto;
  margin-right: 12px;
}

.info-honor .stat-item .count {
  margin-left: 6px;
  font-weight: 500;
}

.ucenter-home-header .message-spreate {
  border: 0;
  height: 1px;
  background: #333;
  background-image: linear-gradient(90deg, #ccc, #333, #ccc);
  clear: both;
}

.header-backgroud {
  background-image: url(https://static.redskt.com/assets/img/usercover.jpg);
  background-position: center;
  height: 180px;
  background-size: 100% 100%;
}

.ucenter-home-content {
  background: white;
  margin-top: 16px;
  padding-top: 15px;
  padding-left: 20px;

  padding-bottom: 15px;
  margin-bottom: 20px;
  min-height: 600px;
}

.user-info {
  float: left;
  margin-top: 74px;
}

.user-info .user-pic {
  width: 124px;
  height: 124px;
}

.user-info .user-pic .user-pic-bg {
  box-shadow: 0 4px 8px 0 rgb(7 17 27 / 10%);
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #fff;
}

.user-info .user-pic .user-pic-bg .user-header-img {
  text-align: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.user-info-right {
  float: left;
  margin-right: 80px;
  width: 920px;
  margin-top: 93px;
}

.user-info-detail {
  width: 360px;
  float: left;
  margin-left: 6px;
}

.user-info-right .user-info-detail .user-name {
  font-weight: 600;
  text-align: left;
  font-size: 18px;
  line-height: 28px;
  margin-top: 6px;
  color: #333;
}

.user-info-right .user-info-detail .user-sign {
  color: #666;
  text-align: left;
  font-size: 12px;
  margin-top: 6px;
}

.user-about-item {
  display: flex;
  flex-wrap: wrap;
  height: auto;
  margin-top: 15px;
  margin-right: 20px;
  float: right;
}

.user-about-item .user-about-item-li {
  display: block;
  margin-right: 16px;
  height: 40px;
}

.user-about-item .user-about-item-li .user-about-count {
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: #333;
}

.user-about-item .user-about-item-li .user-about-name {
  width: 100%;
  font-size: 14px;
  color: #666;
  text-align: center;
}

.user-info-right .user-info-setting {
  float: right;
  margin-top: 15px;
}
</style>
