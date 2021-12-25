<template>

  <div class="golobal_content">
    <div class="ucenter-home-header">
      <div class="header-backgroud">
        <div class="container">
          <div class="user-info">
            <div class="user-pic">
              <div class="user-pic-bg">
                <img class="user-header-img"
                     src="https://static.redskt.com/assets/img/yonghutouxiangnan.png">
              </div>
            </div>
          </div>
          <div class="user-info-right">
            <div class="user-info-detail">
              <div class="user-name">
                <span>{{userInfo.nickname}}</span>
              </div>

              <div class="user-sign">
                <span>{{userInfo.sign}}</span>
              </div>
            </div>
            <div class="user-info-setting">
              <el-button round>个人设置</el-button>
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
    </div>
    <div class="container">
      <div class="ucenter-home-content">
        <el-tabs tab-position="left"
                 style="height:200px;">
          <el-tab-pane label="学习进度">学习进度</el-tab-pane>
          <el-tab-pane label="我的收藏">我的收藏</el-tab-pane>
          <el-tab-pane label="我的文章">我的文章</el-tab-pane>
          <el-tab-pane label="我的评论">我的评论</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
  </div>

</template>

<script>

import userApi from '@/api/user'

export default {

  data () {
    return {
      userInfo: {}, // 查询表单对象
    };
  },
  created () {
    this.getLoginUserInfo();
  },
  methods: {
    //分页切换的方法
    //参数是页码数
    getLoginUserInfo () {
      userApi.getLoginUserInfo().then((response) => {
        this.userInfo = response.data.userInfo
        cookie.set('redskt_ucenter', this.loginInfo, { domain: 'redskt' })
      })
    },
  },
  computed: {},
}
</script>

<style>
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
  ont-size: 12px;
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