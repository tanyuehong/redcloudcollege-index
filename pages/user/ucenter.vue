<template>

<div class="golobal_content">
<div class="ucenter-home-header">
<div class="header-backgroud">
  <div class="container">
     <div class="user-info">
       <div class="user-pic">
         <div class="user-pic-bg">
           <img class="user-header-img" src="https://static.redskt.com/assets/img/yonghutouxiangnan.png">
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
     </div>
  </div>
</div>
</div>
<div class="container">
<div class="ucenter-home-content">
  <el-tabs tab-position="left" style="height:200px;">
    <el-tab-pane label="学习进度">学习进度</el-tab-pane>
    <el-tab-pane label="我的收藏">我的收藏</el-tab-pane>
    <el-tab-pane label="我的文章">我的文章</el-tab-pane>
    <el-tab-pane label="我的评论">我的评论</el-tab-pane>
    <el-tab-pane label="个人设置">个人设置</el-tab-pane>
  </el-tabs>
</div>
</div>
</div>
</div>

</template>

<script>

import userApi from '@/api/user'

export default {

 data() {
    return {
       userInfo: {}, // 查询表单对象
    };
  },
  created() {
    this.getLoginUserInfo();
  },
  methods: {
    //分页切换的方法
    //参数是页码数
    getLoginUserInfo() {
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
    background-size:100% 100%;
}

.ucenter-home-content {
   background:white;
   margin-top:16px;
   padding-top:15px;
   padding-left:20px;

  padding-bottom:15px;
   margin-bottom:20px;
}

.user-info .user-pic {
    float: left;
    width: 124px;
    height: 124px;
}

.user-info .user-pic .user-pic-bg {
    box-shadow: 0 4px 8px 0 rgb(7 17 27 / 10%);
    width: 120px;
    height: 120px;
    position: relative;
    border-radius: 50%;
    background: #fff;
    top: 74px;
}

.user-info .user-pic .user-pic-bg .user-header-img {
    text-align: center;
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

.user-info-right {
   float: right;
   margin-right: 80px;
   width: 920px;
   margin-top: 88px;
}

.user-info-setting {
    float: right;
    margin-top:10px;
}

</style>