<template>
  <div class="main fr">
    <div class="sing_main">
      <div class="title">
        <nuxt-link class="active" :to="{ name: 'user-login' }">
          登录
        </nuxt-link>
        <span>·</span>
        <nuxt-link :to="{ name: 'user-register' }">
          注册
        </nuxt-link>
      </div>

      <div class="sign-up-container">
        <el-form ref="userForm" :model="user">
          <el-form-item class="input-prepend restyle" prop="username"
            :rules="[{ required: true, message: '请输入手机号码', trigger: 'blur' }, { validator: checkPhone, trigger: 'blur' }]">
            <div>
              <el-input type="text" v-on:focus="formfocuse" placeholder="手机号" v-model="user.username" />
              <i class="iconfont icon-phone" />
            </div>
          </el-form-item>

          <el-form-item class="input-prepend" prop="password"
            :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]">
            <div>
              <el-input type="password" v-on:focus="formfocuse" placeholder="密码" v-model="user.password" />
              <i class="iconfont icon-password" />
            </div>
          </el-form-item>

          <div class="sign_btn">
            <p class="tips_error_show" v-show="this.errtips.length > 0">{{ errtips }}</p>
            <input type="button" class="sign-in-button" value="登录" @click="submitLogin('userForm')"
              v-on:keyup.enter="submitLogin('userForm')" />
          </div>
        </el-form>
        <!-- 更多登录方式 -->
        <div class="more-sign">
          <h6>社交帐号登录</h6>
          <ul>
            <li>

              <!-- href="http://qy.free.idcfengye.com/api/ucenter/weixinLogin/login   target="_blank"" -->
              <a id="weixin" class="weixin" @click="weixinLoginClick" href="javascript:void(0);">
                <i class="iconfont icon-weixin" />
              </a>
            </li>
            <li>
              <a id="qq" class="qq" @click="weixinLoginClick" href="javascript:void(0);">
                <i class="iconfont icon-qq" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '~/assets/css/appdown.css'
import "~/assets/css/sign.css";
import "~/assets/css/iconfont.css";
import loginApi from "@/api/user";

export default {
  layout: "sign",

  data () {
    return {
      user: {
        username: "",
        password: ""
      },
      errtips: "",
      loginInfo: {},
    };
  },

    head () {
    return {
      title: "登陆 - 开源实践网",
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: "开源实践网,用户登陆,注册,加入",
        }
      ],
    }
  },

  created () {
    if (process.browser) {
      window.addEventListener("keydown", this.handleKeyDown, true);
    }
  },

  destroyed () {
    window.removeEventListener("keydown", this.handleKeyDown, true);
  },

  methods: {
    //登录的方法
    handleKeyDown (e) {
      let key = null;
      if (window.event === undefined) {
        key = e.keyCode;
      } else {
        key = window.event.keyCode;
      }
      if (key === 13) {
        //触发的事件
        this.submitLogin('userForm');
      }
    },

    submitLogin (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.user.username.length == 0) {
            this.errtips = "请输入登录用户名哦！";
            return;
          }
          if (this.user.password.length == 0) {
            this.errtips = "请输入登录密码！";
            return;
          }
          loginApi.submitLoginUser(this.user).then(response => {
            window.localStorage.setItem("redclass_token", response.data.token)
            this.$cookies.set('token', response.data.token)
            //第四步 调用接口 根据token获取用户信息，为了首页面显示
            loginApi.getLoginUserInfo().then(response => {
              this.loginInfo = response.data.userInfo;
              window.localStorage.setItem("redclass_user", JSON.stringify(this.loginInfo))
              //跳转页面
              if (window && window.gotoPage) {
                window.console.log("跳转" + window.gotoPage)
                this.$router.push(window.gotoPage);
              } else {
                this.$router.push({
                  name: "index",
                  query: {},
                });
                window.console.log("跳转首页");
              }
            });
          });
        } else {
          this.errtips = "数据格式验证失败！";
          return false;
        }
      });
    },

    checkPhone (rule, value, callback) {
      if (!/^1[3456789]\d{9}$/.test(value)) {
        return callback(new Error("手机号码格式不正确"));
      }
      return callback();
    },
    formfocuse () {
      this.errtips = "";
    },
    weixinLoginClick () {
      this.$message({
        showClose: true,
        message: '抱歉，该功能正在紧急开发中哈'
      });
    }
  },
};
</script>
<style scoped>
.el-form-item__error {
  z-index: 9999999;
}

.btn .tips_error_show {
  position: absolute;
  top: -2.5px;
  left: 0px;
  color: red;
  font-size: 12px;
  width: 100%;
}
</style>