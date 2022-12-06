<template>
  <div class="main fr">
    <div class="sing_main">
      <div class="title">
        <nuxt-link :to="{name:'user-login'}">
          登录
        </nuxt-link>
        <span>·</span>
        <nuxt-link class="active"
                   :to="{name:'user-register'}">
          注册
        </nuxt-link>
      </div>
      <div class="sign-up-container">
        <el-form ref="userForm"
                 :model="params">
          <el-form-item class="input-prepend restyle"
                        prop="nickname"
                        :rules="[{ required: true, message: '请输入你的昵称', trigger: 'blur' }]">
            <div>
              <el-input type="text"
                        placeholder="你的昵称"
                        v-model="params.nickname" />
              <i class="iconfont icon-user" />
            </div>
          </el-form-item>

          <el-form-item class="input-prepend restyle no-radius"
                        prop="mobile"
                        :rules="[{ required: true, message: '请输入手机号码', trigger: 'blur' },{validator: checkPhone, trigger: 'blur'}]">
            <div>
              <el-input type="text"
                        placeholder="手机号"
                        v-model="params.mobile" />
              <i class="iconfont icon-phone" />
            </div>
          </el-form-item>

          <el-form-item class="input-prepend restyle no-radius"
                        prop="code"
                        :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]">
            <div style="width: 100%;display: block;float: left;position: relative">
              <el-input type="password"
                        placeholder="设置密码"
                        v-model="params.password" />
              <i class="iconfont icon-password" />
            </div>
            <!--
          <div class="btn" style="position:absolute;right: 0;top: 6px;width: 40%;">
            <a href="javascript:" type="button" @click="getCodeFun()" :value="codeTest" style="border: none;background-color: none">{{codeTest}}</a>
          </div>
          -->
          </el-form-item>

          <el-form-item class="input-prepend restyle"
                        prop="password"
                        :rules="[{ required: true, message: '请确认密码', trigger: 'blur' }]">
            <div>
              <el-input type="password"
                        placeholder="确认密码"
                        v-on:focus="formfocuse"
                        v-model="params.confirmpwd" />
              <i class="iconfont icon-password" />
            </div>
          </el-form-item>

          <el-form-item class="input-prepend"
                        :rules="[{ required: true, message: '请输入验证码', trigger: 'blur' }]">
            <div>
              <el-input type="text"
                        class="vercode"
                        maxlength ="6"
                        minlength ="6"
                        placeholder="验证码"
                        v-on:focus="formfocuse"
                        v-model="params.verCode" />
                        <img :src="vercodeurl" class="vercode_img" @click="refleshVercode" alt="验证码"/>
            </div>
          </el-form-item>

          <div class="sign_btn">
            <p class="tips_error_show"
               v-show="this.errtips.length>0">{{errtips}}</p>
            <input type="button"
                   class="sign-up-button"
                   value="注册"
                   @click="submitRegister('userForm')" />
          </div>
          <p class="sign-up-msg">
            点击 “注册” 即表示您同意并愿意遵守开源实践网
            <br />

            <nuxt-link :to="{name:'user-userterime'}"
                       target="_blank">
              用户协议
            </nuxt-link>
            和
            <nuxt-link :to="{name:'user-privacy'}"
                       target="_blank">
              隐私政策
            </nuxt-link>。
          </p>
        </el-form>
        <!-- 更多注册方式 -->
        <div class="more-sign">
          <h6>社交帐号直接注册</h6>
          <ul>
            <li>
              <!-- href="http://qy.free.idcfengye.com/api/ucenter/weixinLogin/login   target="_blank"" -->
              <a id="weixin"
                 class="weixin"
                 @click="weixinLoginClick"
                 href="javascript:void(0);">
                <i class="iconfont icon-weixin" />
              </a>
            </li>
            <li>
              <a id="qq"
                 class="qq"
                 @click="weixinLoginClick"
                 href="javascript:void(0);">
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
import "~/assets/css/sign.css";
import "~/assets/css/iconfont.css";

import registerApi from "@/api/user";
import registerApiServer from "@/api/userServerReq";

export default {
  layout: "sign",
  data () {
    return {
      params: {
        //封装注册输入数据
        mobile: "",
        code: "", //验证码
        nickname: "",
        password: "",
        confirmpwd:"",
        verCode:""
      },
      isShowTips: false,
      sending: true, //是否发送验证码
      second: 60, //倒计时间
      codeTest: "获取验证码",
      errtips: "",
      vercodeurl:""
    };
  },

  head () {
    return {
      title: "注册 - 开源实践网",
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: "开源实践网,用户注册,登陆,加入",
        }
      ],
    }
  },

  asyncData ({ params, error }) {
    return registerApiServer.getRegisterPage().then((response) => {
      return {
        pagekey: response.data.pagekey
      }
    })
  },
  mounted() {
    var baseUrl = process.env.NODE_ENV == 'development' ? 'http://localhost/api':'https://www.redskt.com/api';
    this.vercodeurl = baseUrl + "/home/ucenter/captcha" + "?pageKey=" + this.pagekey;
  },
  
  methods: {
    refleshVercode() {
      var baseUrl = process.env.NODE_ENV == 'development' ? 'http://localhost/api':'https://www.redskt.com/api';
      this.vercodeurl = baseUrl + "/home/ucenter/captcha" + "?pageKey=" + this.pagekey+"&timemap="+ new Date().getTime();
    },
    //注册提交的方法
    submitRegister (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.params.nickname.length == 0) {
            this.errtips = "请输入用户名！";
            return;
          }
          if (this.params.mobile.length == 0) {
            this.errtips = "请输入手机号！";
            return;
          }
          if (this.params.code.length == 0) {
            this.errtips = "请输入密码！";
            return;
          }
          if (this.params.password.length == 0) {
            this.errtips = "请输入确认密码！";
            return;
          }
          if (!(this.params.code === this.params.password)) {
            this.errtips = "您输入的密码不一致！";
            return;
          }
          registerApi.registerMember(this.params).then(response => {
            //提示注册成功
            this.$message({
              type: "success",
              message: "注册成功,请登录您的账号"
            });
            //跳转登录页面
            this.$router.push({ path: "/user/login" });
          });
        } else {
          return false;
        }
      });
    },
    timeDown () {
      let result = setInterval(() => {
        --this.second;
        this.codeTest = this.second;
        if (this.second < 1) {
          clearInterval(result);
          this.sending = true;
          //this.disabled = false;
          this.second = 60;
          this.codeTest = "获取验证码";
        }
      }, 1000);
    },
    //通过输入手机号发送验证码
    getCodeFun () {
      registerApi.sendCode(this.params.mobile).then(response => {
        this.sending = false;
        //调用倒计时的方法
        this.timeDown();
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
  }
};
</script>

<style scoped>
.btn .tips_error_show {
  position: absolute;
  top: -2.5px;
  left: 0px;
  color: red;
  font-size: 12px;
  width: 100%;
}
</style>