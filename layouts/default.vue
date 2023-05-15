<template>
  <div class="in-wrap">
    <!-- 公共头引入 -->
    <header id="header">
      <section class="container">
        <h1 id="logo">
          <nuxt-link to="/" title="开源实践网">
            <img src="~/assets/img/logo.png" class="logo_index" alt="开源实践网" />
            <img src="~/assets/img/logo_descrb.png" class="logo_decrb" alt="logo图标" />
          </nuxt-link>
        </h1>

        <div class="h-r-nsl">
          <ul class="nav">
            <nuxt-link to="/" tag="li" active-class="current" exact>
              <a>首页</a>
            </nuxt-link>
            <nuxt-link to="/course" tag="li" active-class="current">
              <a>课程</a>
            </nuxt-link>
            <nuxt-link to="/practice" tag="li" active-class="current">
              <a>实践</a>
            </nuxt-link>
             <nuxt-link to="/interview" tag="li" active-class="current">
              <a>面试</a>
            </nuxt-link>
            <nuxt-link to="/book" tag="li" active-class="current">
              <a>专题</a>
            </nuxt-link>
            <nuxt-link to="/faquestion" tag="li" active-class="current">
              <a>问答</a>
            </nuxt-link>
          </ul>
          <!-- / nav -->
          <!-- / nav -->
          <client-only>
            <ul class="h-r-login">
              <li v-if="!loginInfo.id" id="no-login">
                <nuxt-link :to="{ name: 'user-login' }">
                  <em class="icon18 login-icon">&nbsp;</em>
                  <span class="vam mr5">登录</span>
                </nuxt-link>|<nuxt-link :to="{ name: 'user-register' }">
                  <span class="vam ml5">注册</span>
                </nuxt-link>
              </li>
              <li v-if="loginInfo.id" id="is-login-one" class="mr10">
               <nuxt-link :to="'/about/message'" title="消息">
                  <em class="icon18 news-icon">&nbsp;</em>
                </nuxt-link>
                <q class="red-point" style="display: none;">&nbsp;</q>
              </li>
              <li v-if="loginInfo.id" id="is-login-two" class="h-r-user">
                <nuxt-link :to="{ name: 'user-id-type', params: { id: this.loginInfo.id, type: 'blog' } }">
                  <el-dropdown @command="handleCommand">
                    <span class="el-dropdown-link">
                      <img class="vam user-head-image" :src="loginInfo.avatar" width="30" height="30" alt="用户头像"/>
                      <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="userHome" icon="el-icon-user-solid">
                        我的主页
                      </el-dropdown-item>
                      <!-- <el-dropdown-item icon="el-icon-star-off">
                        学习进度
                      </el-dropdown-item> -->
                      <el-dropdown-item command="userStar" icon="el-icon-star-off">
                        我的关注
                      </el-dropdown-item>
                      <el-dropdown-item command="userCollect" icon="el-icon-s-order">
                        我的收藏
                      </el-dropdown-item>
                      <!-- <el-dropdown-item icon="el-icon-question">
                        帮助与反馈
                      </el-dropdown-item> -->
                      <el-dropdown-item command="userSetting" icon=" el-icon-setting">
                        设置
                      </el-dropdown-item>
                      <el-dropdown-item command="quit" icon="el-icon-switch-button">
                        退出
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </nuxt-link>
              </li>
              <!-- /未登录显示第1 li；登录后显示第2，3 li -->
            </ul>
          </client-only>
          <aside class="h-r-search">
            <form action="#" method="post">
              <label class="h-r-s-box">
                <input type="text" placeholder="输入你感兴趣的内容" name="queryCourse.courseName" value />
                <button type="button" class="s-btn" @click="serchBtnClick">
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
              <a href="https://ke.qq.com/" title="腾讯课堂" target="_blank">
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
                <nuxt-link :to="'/about/detail/1523552231247499263'" target="_blank" title="关于我们">关于我们</nuxt-link>
                |
                <nuxt-link :to="'/about/detail/1523552231247499263'" target="_blank" title="联系我们">联系我们</nuxt-link>
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
                <img src="~/assets/img/wx-icon.png" alt="微信" />
              </span>
            </section>
            <section class="gf-tx">
              <span>
                <img src="~/assets/img/wb-icon.png" alt="微博" />
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
import loginApi from '@/api/user'

export default {
  data () {
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
  created () {
    //获取路径里面token值
    this.token = this.$route.query.token
    if (this.token) {
      //判断路径是否有token值
      this.wxLogin()
    }
  },

  mounted() {
    window.loginInfo = this;
    this.showInfo()
  },

  methods: {
    serchBtnClick () {
      this.$message({
        message: "搜索功能正在开发过程中，敬请期待！",
        type: "info",
        duration: 2000,
      });
    },
    //微信登录显示的方法
    handleCommand (command) {
      if (command == 'quit') {
        this.logout()
      } else if (command == 'userHome') {
        this.$router.push({
          name: "user-id-type",
          params: { id: this.loginInfo.id, type: "blog" }
        });
      } else if (command == 'userStar') {
        this.$router.push({
          name: "user-id-type",
          params: { id: this.loginInfo.id, type: "focus" }
        });
      } else if (command == 'userCollect') {
        this.$router.push({
          name: "user-id-type",
          params: { id: this.loginInfo.id, type: "collect" }
        });
      } else if (command == 'userSetting') {
        var loginToken = window.localStorage.getItem('redclass_token');
        this.$router.push({
          name: "user-setting",
          params: { "loginToken": loginToken },
        });
      }
    },
    wxLogin () {
      //console.log('************'+this.token)
      //把token值放到cookie里面
      //cookie.set('redskt_token', this.token, { domain: 'redskt' })
      //cookie.set('redskt_ucenter', '', { domain: 'redskt' })
      //console.log('====='+cookie.get('guli_token'))
      //调用接口，根据token值获取用户信息
      loginApi.getLoginUserInfo().then((response) => {
        // console.log('################'+response.data.userInfo)
        this.loginInfo = response.data.userInfo
        window.localStorage.setItem("redclass_user", JSON.stringify(this.loginInfo));
      })
    },
    //创建方法，从cookie获取用户信息
    showInfo () {
      //从cookie获取用户信息
      if (process.client) {
        var userStr = localStorage.getItem('redclass_user')
        if (userStr && userStr != 'undefined') {
          this.loginInfo = JSON.parse(userStr)
        } else {
          this.loginInfo = {};
        }
      }
    },

    //退出
    logout () {
      window.localStorage.setItem('redclass_token', '')
      window.localStorage.setItem('redclass_user', '')
      this.$cookies.set('token', '')
      //回到首页面
      window.location.href = '/'
    },
  },
}
</script>
