<template>
  <div class="in-wrap">
    <!-- 公共头引入 -->
    <header id="header">
      <section class="container">
        <h1 id="logo">
          <router-link to="/" title="开源实践网">
            <img
              src="~/assets/img/logo.png"
              class="logo_index"
              alt="开源实践网"
            />
            <img src="~/assets/img/logo_descrb.png" class="logo_decrb" alt="" />
          </router-link>
        </h1>

        <div class="h-r-nsl">
          <ul class="nav">
            <router-link to="/" tag="li" active-class="current" exact>
              <a>首页</a>
            </router-link>
            <router-link to="/course" tag="li" active-class="current">
              <a>课程</a>
            </router-link>
            <router-link to="/practice" tag="li" active-class="current">
              <a>实践</a>
            </router-link>
            <router-link to="/article" tag="li" active-class="current">
              <a>技术专题</a>
            </router-link>
            <router-link to="/faquestion" tag="li" active-class="current">
              <a>问答</a>
            </router-link>
          </ul>
          <!-- / nav -->
          <!-- / nav -->
          <client-only>
            <ul class="h-r-login">
              <li v-if="!loginInfo.id" id="no-login">
                <a href="/login" title="登录">
                  <em class="icon18 login-icon">&nbsp;</em>
                  <span class="vam ml5">登录</span>
                </a>
                |
                <a href="/register" title="注册">
                  <span class="vam ml5">注册</span>
                </a>
              </li>
              <li v-if="loginInfo.id" id="is-login-one" class="mr10">
                <a id="headerMsgCountId" href="#" title="消息">
                  <em class="icon18 news-icon">&nbsp;</em>
                </a>
                <q class="red-point" style="display: none;">&nbsp;</q>
              </li>
              <li v-if="loginInfo.id" id="is-login-two" class="h-r-user">
                <a href="/ucenter" title>
                  <el-dropdown @command="handleCommand">
                    <span class="el-dropdown-link">
                      <img
                        :src="loginInfo.avatar"
                        width="30"
                        height="30"
                        class="vam picImg"
                        alt
                      />
                      <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item icon="el-icon-user-solid">
                        我的主页
                      </el-dropdown-item>
                         <el-dropdown-item icon="el-icon-star-off">
                        学习进度
                      </el-dropdown-item>
                      <el-dropdown-item icon="el-icon-star-off">
                        我的收藏
                      </el-dropdown-item>
                      <el-dropdown-item icon="el-icon-s-order">
                        我的订单
                      </el-dropdown-item>
                      <el-dropdown-item icon="el-icon-question">
                        帮助与反馈
                      </el-dropdown-item>
                      <el-dropdown-item icon=" el-icon-setting">
                        设置
                      </el-dropdown-item>
                      <el-dropdown-item command="quit" icon="el-icon-switch-button">
                        退出
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </a>
              </li>
              <!-- /未登录显示第1 li；登录后显示第2，3 li -->
            </ul>
          </client-only>
          <aside class="h-r-search">
            <form action="#" method="post">
              <label class="h-r-s-box">
                <input
                  type="text"
                  placeholder="输入你感兴趣的内容"
                  name="queryCourse.courseName"
                  value
                />
                <button type="submit" class="s-btn">
                  <em class="icon18">&nbsp;</em>
                </button>
              </label>
            </form>
          </aside>
        </div>
        <aside class="mw-nav-btn">
          <div class="mw-nav-icon"></div>
        </aside>
        <div class="clear"></div>
      </section>
    </header>
    <!-- /公共头引入 -->

    <nuxt />

    <!-- 公共底引入 -->
    <footer id="footer">
      <section class="container">
        <div class>
          <h4 class="hLh30">
            <span class="fsize18 f-fM c-999">友情链接</span>
          </h4>
          <ul class="of flink-list">
            <li>
              <a
                href="http://www.atguigu.com/"
                title="腾讯课堂"
                target="_blank"
              >
                腾讯课堂
              </a>
            </li>
          </ul>
          <div class="clear"></div>
        </div>
        <div class="b-foot">
          <section class="fl col-7">
            <section class="mr20">
              <section class="b-f-link">
                <a href="#" title="关于我们" target="_blank">关于我们</a>
                |
                <a href="#" title="联系我们" target="_blank">联系我们</a>
                |
                <a href="#" title="帮助中心" target="_blank">帮助中心</a>
                |
                <a href="#" title="资源下载" target="_blank">资源下载</a>
                |
                <span>服务热线：16623170187</span>
                <span>Email：redskt@163.com</span>
              </section>
              <section class="b-f-link mt10">
                <span>
                  ©2020课程版权均归开源实践网所有
                  <a href="https://beian.miit.gov.cn">京ICP备16006909号-1</a>
                </span>
              </section>
            </section>
          </section>
          <aside class="fl col-3 tac mt15">
            <section class="gf-tx">
              <span>
                <img src="~/assets/img/wx-icon.png" alt />
              </span>
            </section>
            <section class="gf-tx">
              <span>
                <img src="~/assets/img/wb-icon.png" alt />
              </span>
            </section>
          </aside>
          <div class="clear"></div>
        </div>
      </section>
    </footer>
    <!-- /公共底引入 -->
  </div>
</template>
<script>
import '~/assets/css/theme.css'
import '~/assets/css/global.css'

import loginApi from '@/api/login'

export default {
  data() {
    return {
      token: '',
      loginInfo: {
        id: '',
        age: '',
        avatar: '',
        mobile: '',
        nickname: '',
        sex: '',
      },
    }
  },
  created() {
    //获取路径里面token值
    this.token = this.$route.query.token
    console.log(this.token)
    if (this.token) {
      //判断路径是否有token值
      this.wxLogin()
    }

    this.showInfo()
  },
  methods: {
    //微信登录显示的方法
    handleCommand(command) {
      if(command=="quit") {
         this.logout();
      }

    },
    wxLogin() {
      //console.log('************'+this.token)
      //把token值放到cookie里面
      cookie.set('redskt_token', this.token, { domain: 'localhost' })
      cookie.set('redskt_ucenter', '', { domain: 'localhost' })
      //console.log('====='+cookie.get('guli_token'))
      //调用接口，根据token值获取用户信息
      loginApi.getLoginUserInfo().then((response) => {
        // console.log('################'+response.data.userInfo)
        this.loginInfo = response.data.userInfo
        cookie.set('redskt_ucenter', this.loginInfo, { domain: 'localhost' })
      })
    },
    //创建方法，从cookie获取用户信息
    showInfo() {
      //从cookie获取用户信息
      if (process.client) {
        var userStr = localStorage.getItem('redclass_user')
        if (userStr && userStr != 'undefined') {
          this.loginInfo = JSON.parse(userStr)
        }
      }
    },

    //退出
    logout() {
      window.localStorage.setItem('redclass_token', '')
      window.localStorage.setItem('redclass_user', '')
      //回到首页面
      window.location.href = '/'
    },
  },
}
</script>
