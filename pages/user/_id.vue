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
            <ul class="user-about-item">
              <li class="user-about-item-li">
                <div class="user-about-count">18h</div>
                <div class="user-about-name">学习时长</div>
              </li>
              <li class="user-about-item-li">
                <div class="user-about-count">3</div>
                <div class="user-about-name">关注</div>
              </li>
              <li class="user-about-item-li">
                <div class="user-about-count">7</div>
                <div class="user-about-name">粉丝</div>
              </li>
              <li class="user-about-item-li">
                <div class="user-about-count">12</div>
                <div class="user-about-name">文章</div>
              </li>
              <li class="user-about-item-li">
                <div class="user-about-count">18</div>
                <div class="user-about-name">收获喜欢</div>
              </li>
              <li class="user-about-item-li">
                <div class="user-about-count">6</div>
                <div class="user-about-name">积分</div>
              </li>
            </ul>
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
              <div class="user_article_content book_item fl">
                <ul class="article_list">
                  <li v-for="bitem in articleList" :key="bitem.id">
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
            </el-tab-pane>
            <el-tab-pane label="收藏">收藏</el-tab-pane>
            <el-tab-pane label="关注">关注</el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <div class="col-md-4 ucenter-home-rightinfo">
      </div>
    </div>
  </div>
</template>

<script>

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
    }
  },
  computed: {}
};
</script>

<style>
.user_article_content .article_list {
  padding-left: 0px;
}

.ucenter-home-rightinfo {
  background: #fff;
  height: 600px;
  margin-top: 15px;
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
</style>
