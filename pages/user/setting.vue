<template>
  <div class="golobal_content">
    <div class="container">
      <div class="ucenter-setting-header">
        <li class="ucenter-back-item">
          <nuxt-link :to="{ name: 'user-ucenter'}">
            <span>返回个人主页</span>
            <i class="el-icon-arrow-right back_item"></i>
          </nuxt-link>
        </li>
      </div>
      <div class="setting-lefte-menu">
        <div class="setting-menu-item">
          <div data-v-55200008=""
               class="nav-item active"><svg data-v-55200008=""
                 width="16"
                 height="16"
                 viewBox="0 0 16 16"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
                 class="svg">
              <path data-v-55200008=""
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.3331 14.1052V14.3207C15.3331 14.5048 15.1839 14.654 14.9998 14.654H14.3204C14.1413 14.654 13.9967 14.5122 13.9801 14.3339C13.9778 14.3097 13.9754 14.2872 13.9728 14.2679C13.8008 12.9838 12.8312 12 11.7742 12H9.88471C8.82066 12 7.8512 12.997 7.68991 14.2937C7.68842 14.3056 7.68699 14.3189 7.68563 14.333C7.66842 14.5116 7.52439 14.654 7.34498 14.654H6.66643C6.48233 14.654 6.33309 14.5048 6.33309 14.3207V14.1052C6.33309 12.5335 7.41668 11.2082 8.82833 10.7979C8.3268 10.2875 8.01744 9.58768 8.01744 8.81561C8.01744 7.25359 9.2837 5.98733 10.8457 5.98733C12.4077 5.98733 13.674 7.25359 13.674 8.81561C13.674 9.59004 13.3627 10.2918 12.8585 10.8025C14.2611 11.2181 15.3331 12.5395 15.3331 14.1052ZM1.99984 2.66665V12.6666H4.9165V14H1.33317C0.964981 14 0.666504 13.7015 0.666504 13.3333V1.99998C0.666504 1.63179 0.964981 1.33331 1.33317 1.33331H13.3332C13.7014 1.33331 13.9998 1.63179 13.9998 1.99998V5.82955C13.5945 5.49574 13.1466 5.21989 12.6665 5.01331V2.66665H1.99984ZM3.33309 5.99994C3.33309 5.81584 3.48233 5.66661 3.66642 5.66661H6.66642C6.85052 5.66661 6.99976 5.81584 6.99976 5.99994V6.6666C6.99976 6.8507 6.85052 6.99994 6.66642 6.99994H3.66642C3.48233 6.99994 3.33309 6.8507 3.33309 6.66661V5.99994ZM3.33309 8.66661C3.33309 8.48251 3.48233 8.33327 3.66642 8.33327H4.99976C5.18385 8.33327 5.33309 8.48251 5.33309 8.66661V9.33327C5.33309 9.51737 5.18385 9.66661 4.99976 9.66661H3.66642C3.48233 9.66661 3.33309 9.51737 3.33309 9.33327V8.66661ZM10.8457 7.32066C10.0201 7.32066 9.35075 7.98997 9.35075 8.81561C9.35075 9.64125 10.0201 10.3106 10.8457 10.3106C11.6713 10.3106 12.3406 9.64125 12.3406 8.81561C12.3406 7.98997 11.6713 7.32066 10.8457 7.32066Z"
                    class="close-path"></path>
            </svg>
            个人资料
          </div>
        </div>
        <div class="setting-menu-item">
          <div class="nav-item"
               data-v-55200008=""><svg width="16"
                 height="16"
                 viewBox="0 0 16 16"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
                 class="svg"
                 data-v-55200008="">
              <path fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.58901 0.903176C9.07116 0.786587 8.53915 0.727234 7.99989 0.727234C7.46051 0.727234 6.92838 0.786615 6.41041 0.903258L6.11154 0.970562L5.17999 3.09499L2.88551 2.84416L2.67809 3.07008C1.95184 3.86112 1.40698 4.80463 1.08759 5.83506L0.997559 6.12553L2.36299 7.99996L1.17661 9.62859L0.997559 9.87439L1.08759 10.1649C1.40698 11.1953 1.95184 12.1388 2.67809 12.9298L2.88551 13.1558L5.17999 12.9049L5.98852 14.7488L6.11154 15.0294L6.41041 15.0967C6.92838 15.2133 7.46051 15.2727 7.99989 15.2727C8.53915 15.2727 9.07116 15.2133 9.58901 15.0967L9.88786 15.0295L10.8198 12.9049L13.1143 13.1558L13.3217 12.9298C14.0479 12.1389 14.5927 11.1955 14.9121 10.1652L15.0021 9.87479L13.6368 7.99996L14.8231 6.37093L15.0021 6.12513L14.9121 5.83469C14.5927 4.80441 14.0479 3.86103 13.3217 3.07008L13.1143 2.84416L10.8198 3.095L9.88786 0.970458L9.58901 0.903176ZM6.97185 2.02705C7.30885 1.96884 7.65237 1.93931 7.99995 1.93931C8.34745 1.93931 8.69087 1.96882 9.02778 2.027L9.7747 3.72978C9.94877 4.1266 10.3602 4.36453 10.791 4.31745L12.6271 4.11672C13.0706 4.65049 13.4202 5.257 13.6589 5.91059L12.5627 7.41589C12.3092 7.76397 12.3092 8.23586 12.5627 8.58396L13.6589 10.0892C13.4202 10.7428 13.0706 11.3493 12.6271 11.8831L10.791 11.6824C10.3602 11.6353 9.94877 11.8732 9.7747 12.27L9.02778 13.9728C8.69087 14.031 8.34745 14.0605 7.99995 14.0605C7.65237 14.0605 7.30885 14.031 6.97185 13.9728L6.22524 12.2701C6.05114 11.8732 5.63967 11.6353 5.20892 11.6824L3.3728 11.8831C2.92928 11.3493 2.5796 10.7427 2.3409 10.089L3.43719 8.58401C3.69075 8.23586 3.69075 7.76397 3.43723 7.41588L2.3409 5.91086C2.5796 5.25717 2.92928 4.65056 3.3728 4.11672L5.20891 4.31745C5.63967 4.36453 6.05114 4.1266 6.2252 3.72979L6.97185 2.02705ZM7.99996 4.96962C9.66782 4.96962 11.0187 6.32698 11.0187 7.99993C11.0187 9.67287 9.66782 11.0302 7.99996 11.0302C6.3321 11.0302 4.9812 9.67287 4.9812 7.99993C4.9812 6.32698 6.3321 4.96962 7.99996 4.96962ZM6.19336 7.99992C6.19336 6.99512 7.00287 6.18174 8 6.18174C8.99713 6.18174 9.80663 6.99512 9.80663 7.99992C9.80663 9.00472 8.99713 9.81811 8 9.81811C7.00287 9.81811 6.19336 9.00472 6.19336 7.99992Z"
                    class="close-path"
                    data-v-55200008=""></path>
            </svg>

            账号设置
          </div>
        </div>
      </div>
      <div v-if="settingtype===1">
        <div class="person-setting shadow">
          <div class="nav-text">个人资料</div>
          <div class="user-infos">
            <div class="info-input">
              <form 
                    class="form byte-form byte-form--label-right">
                <div 
                     class="divide"></div>
                <div 
                     class="byte-form-item byte-form-item--success"><label for="username"
                         class="byte-form-item__label"
                         style="width: 56px;">用户名</label>
                  <div class="byte-form-item__content">
                    <div 
                         class="input byte-input byte-input--normal byte-input--suffixed">
                      <!----><input type="text"
                             autocomplete=""
                             placeholder="填写你的用户名"
                             name=""
                             aria-label=""
                             spellcheck="false"
                             maxlength="20"
                             class="byte-input__input byte-input__input--normal">
                      <!----><span class="byte-input__suffix"><span 
                              class="suffix">
                          20/20
                        </span></span>
                      <!---->
                    </div>
                    <!---->
                    <!---->
                  </div>
                </div>
                <div 
                     class="divide"></div>
                <div 
                     class="byte-form-item byte-form-item--success"><label for="job_title"
                         class="byte-form-item__label"
                         style="width: 56px;">职位</label>
                  <div class="byte-form-item__content">
                    <div 
                         class="input byte-input byte-input--normal byte-input--suffixed">
                      <!----><input type="text"
                             autocomplete=""
                             placeholder="填写你的职位"
                             name=""
                             aria-label=""
                             spellcheck="false"
                             maxlength="100"
                             class="byte-input__input byte-input__input--normal">
                      <!----><span class="byte-input__suffix"><span 
                              class="suffix">
                          0/50
                        </span></span>
                      <!---->
                    </div>
                    <!---->
                    <!---->
                  </div>
                </div>
                <div 
                     class="divide"></div>
                <div 
                     class="byte-form-item"><label for="company"
                         class="byte-form-item__label"
                         style="width: 56px;">公司</label>
                  <div class="byte-form-item__content">
                    <div 
                         class="input byte-input byte-input--normal byte-input--suffixed">
                      <!----><input type="text"
                             autocomplete=""
                             placeholder="填写你的公司"
                             name=""
                             aria-label=""
                             spellcheck="false"
                             maxlength="100"
                             class="byte-input__input byte-input__input--normal">
                      <!----><span class="byte-input__suffix"><span 
                              class="suffix">
                          0/50
                        </span></span>
                      <!---->
                    </div>
                    <!---->
                    <!---->
                  </div>
                </div>
                <div
                     class="divide"></div>
                <div 
                     class="byte-form-item"><label for="blog_address"
                         class="byte-form-item__label"
                         style="width: 56px;">个人主页</label>
                  <div class="byte-form-item__content">
                    <div 
                         class="input byte-input byte-input--normal byte-input--suffixed">
                      <!----><input type="text"
                             autocomplete=""
                             placeholder="填写你的个人主页"
                             name=""
                             aria-label=""
                             spellcheck="false"
                             maxlength="200"
                             class="byte-input__input byte-input__input--normal">
                      <!----><span class="byte-input__suffix"><span 
                              class="suffix">
                          11/100
                        </span></span>
                      <!---->
                    </div>
                    <!---->
                    <!---->
                  </div>
                </div>
                <div 
                     class="divide"></div>
                <div 
                     class="byte-form-item"><label for="description"
                         class="byte-form-item__label"
                         style="width: 56px;">个人介绍</label>
                  <div class="byte-form-item__content">
                    <div 
                         class="textarea-input">
                      <div 
                           class="input textarea byte-input byte-input--normal"><textarea maxlength="188"
                                  rows="2"
                                  placeholder="填写职业技能、擅长的事情、喜欢的事情等"
                                  autocomplete=""
                                  name=""
                                  aria-label=""
                                  spellcheck="false"
                                  class="byte-input__textarea"></textarea></div> <span
                            class="textarea-suffix">
                        14/100
                      </span>
                    </div>
                    <!---->
                    <!---->
                  </div>
                </div>
                <!---->
                <!---->
                <!---->
              </form>
              <div  class="divide"></div> 
              <el-button type="primary">保存修改</el-button>
            </div>
            <div
                 class="avatar-input">
              <div 
                   class="avatar-info">
                <div 
                     class="title h5-only">我的头像</div>
                <div 
                     class="avatar-uploader uploader">
                  <div 
                       class="click-cover"><i 
                       class="add-icon byte-icon byte-icon--plus-circle"><svg t="1561635709826"
                           class="icon"
                           viewBox="0 0 1024 1024"
                           version="1.1"
                           xmlns="http://www.w3.org/2000/svg"
                           p-id="375017"
                           xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path d="M464.883436 464.883436V302.244035A23.732788 23.732788 0 0 1 488.616224 279.209271h46.069529a23.732788 23.732788 0 0 1 23.732788 23.034764v162.639401h162.6394a23.732788 23.732788 0 0 1 23.034765 23.732788v46.069529a23.732788 23.732788 0 0 1-23.034765 23.732788H558.418541v162.6394a23.732788 23.732788 0 0 1-23.732788 23.034765H488.616224a23.732788 23.732788 0 0 1-23.732788-23.034765V558.418541H302.244035A23.732788 23.732788 0 0 1 279.209271 534.685753V488.616224a23.732788 23.732788 0 0 1 23.034764-23.732788z m46.767552 465.581458a418.813906 418.813906 0 1 0-418.813906-418.813906 418.813906 418.813906 0 0 0 418.813906 418.813906z m0 92.837083a511.650988 511.650988 0 1 1 511.650989-511.650989 511.650988 511.650988 0 0 1-511.650989 511.650989z"
                              p-id="375018"></path>
                      </svg></i>
                    <div 
                         class="click-text">点击修改头像</div>
                    <!---->
                  </div> <img data-v-2afa39d6=""
                       data-v-3aafff8a=""
                      
                       src="https://p3-passport.byteacctimg.com/img/mosaic-legacy/3791/5035712059~300x300.image"
                       alt=""
                       class="lazy avatar avatar"
                       data-src="https://p3-passport.byteacctimg.com/img/mosaic-legacy/3791/5035712059~300x300.image"> <input 
                         type="file"
                         class="input">
                </div>
                <div 
                     class="title web-only">
                  我的头像
                </div>
                <!---->
                <!---->
                <div 
                     class="description">
                  支持 jpg、png、jpeg 格式大小 5M 以内的图片
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div v-if="settingtype===2">
        <div class="person-setting">
          这个是个人设置
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
      settingtype: 1,
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
    }
  },
  computed: {},
}
</script>

<style>
.ucenter-setting-header {
  height: 45.98px;
  background: #fff;
  margin-top: 15px;
  margin-bottom: 15px;
}

.ucenter-back-item {
  padding-top: 13px;
  font-size: 14px;
  padding-left: 15px;
}

.ucenter-back-item a {
  color: #666;
}

.setting-lefte-menu {
  float: left;
  box-sizing: border-box;
  background: #fff;
  width: 230px;
  height: 626px;
  padding: 8px;
}

.setting-menu-item .nav-item.active[data-v-55200008] {
  background: #e8f3ff;
  color: #f56c6c;
}

.setting-menu-item .nav-item[data-v-55200008] {
  display: flex;
  align-items: center;
  font-weight: 400;
  height: 48px;
  width: 214px;
  font-size: 16px;
  color: #4e5969;
}

.nav-item .svg[data-v-55200008] {
  margin-right: 12px;
  margin-left: 24px;
}

.nav-item.active .svg .close-path[data-v-55200008] {
  fill: #f56c6c;
}

.nav-item .svg .close-path[data-v-55200008] {
  fill: #86909c;
}

.person-setting {
  float: right;
  position: relative;
  padding: 20px;
  background-color: #fff;
  border-radius: 2px;
  box-sizing: border-box;
  background: #fff;
  width: calc(100% - 254px);
  min-height: 626px;
  margin-bottom: 20px;
}

.person-setting .nav-text {
  font-weight: 600;
  font-size: 20px;
  line-height: 18px;
  color: #333;
  margin-bottom: 20px;
}

.person-setting .user-infos {
  display: flex;
}

.person-setting .user-infos .info-input {
  min-width: 240px;
  width: calc(100% - 340px);
}

.person-setting .user-infos .info-input .divide {
    margin-left: 12px;
    margin-top: 13px;
    margin-bottom: 13px;
    width: 100%;
    border-top: 1px solid #eaeaea;
}

.person-setting.user-infos .info-input .form .byte-form-item {
    margin-bottom: 13px;
    white-space: nowrap;
}

.person-setting .user-infos .info-input .form .byte-form-item__label {
    font-weight: 500;
    font-size: 14px;
    color: #333;
    margin-left: 20px;
    margin-right: 30px;
    display: inline-block;
    text-align: left;
    padding-right: 0;
    float:left;
    line-height:32px;
}

.person-setting .user-infos .info-input .input .byte-input__suffix {
    width: 50px;
    right: 0;
        display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    font-size: 14px;
    line-height: 1.5;
}

.person-setting .user-infos .info-input .input .suffix {
    font-size: 12px;
    color: #86909c;
}

.byte-form-item__content {
    zoom: 1;
    position: relative;
    font-size: 14px;
    line-height: 32px;
}

.person-setting .user-infos .info-input .input {
    max-width: 380px;
    min-width: 100px;
}

.byte-input, .byte-input__input {
    position: relative;
    width: 100%;
    display: inline-block;
    font-size: 14px;
    line-height: 1.5;
}

.byte-input {
    vertical-align: middle;
    border-collapse: separate;
    border-spacing: 0;
}

.setting-profile-view .user-infos .avatar-input {
    padding-left: 74px;
}

.setting-profile-view .user-infos .info-input .input {
    max-width: 440px;
    min-width: 100px;
}

.avatar-info {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 112px;
}

.avatar-info .uploader {
    width: 90px;
    height: 90px;
    position: relative;
}

.avatar-info .title {
    color: #1d2129;
    font-weight: 500;
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 8px;
}

.avatar-info .description {
    color: #86909c;
    font-size: 12px;
    line-height: 17px;
    font-weight: 400;
}

.avatar-uploader .click-cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: rgba(29,33,41,.5);
    z-index: 2;
    visibility: hidden;
}

.byte-icon {
    width: 1em;
    height: 1em;
    display: inline-block;
    vertical-align: middle;
    line-height: 1;
}

.avatar-uploader .click-cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: rgba(29,33,41,.5);
    z-index: 2;
    visibility: hidden;
}

.editable, input[type=password], input[type=text], input[type=url], textarea {
    resize: none;
    outline: none;
    width: 100%;
    display: block;
    box-shadow: none;
    border: 1px solid #ddd;
    border-radius: 2px;
    transition: border .3s;
    background-color: #fff;
    box-sizing: border-box;
}

.byte-input__input {
    border: 1px solid #e6e8eb;
    border-radius: 2px;
    color: #282f38;
    background-color: #fff;
    -webkit-transition: all .3s;
    transition: all .3s;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    height: 32px;
    padding: 0 12px;
    font-size:12px;
}

.byte-input__textarea {
    border: 1px solid #e6e8eb;
    border-radius: 2px;
    position: relative;
    width: 100%;
    display: inline-block;
    color: #282f38;
    line-height: 1.5;
    background-color: #fff;
    -webkit-transition: all .3s;
    transition: all .3s;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    height: 32px;
    padding: 0 12px;
    font-size: 14px;
    height: auto;
    padding: 6px 10px;
    vertical-align: top;
    -webkit-transition: all .3s,height 0s;
    transition: all .3s,height 0s;
    resize: vertical;
}

.person-setting .user-infos .info-input .byte-input__textarea {
    height: 140px;
    min-height: 30px;
    color: #666;
    background: #fafafa;
    font-size:12px;
}

.person-setting .user-infos .info-input .textarea-suffix {
    position: absolute;
    right: 15px;
    bottom: -3px;
    color: #86909c;
    font-size: 12px;
    white-space: nowrap;
}

.avatar-uploader .avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

input[type="file" i] {
    appearance: none;
    background-color: initial;
    cursor: default;
    align-items: baseline;
    color: inherit;
    text-overflow: ellipsis;
    white-space: pre;
    text-align: start !important;
    padding: initial;
    border: initial;
    overflow: hidden !important;
}

.avatar-uploader .input {
    display: none;
}
</style>