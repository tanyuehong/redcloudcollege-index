<template>
  <div class="main_global_bg">
    <div class="container">
      <div class="ask_content" id="newQuestion">
        <div class="row">
          <div class="col-md-8">
            <div class="breadcrumb red_breadcrumb">
              <a class="section" href="/faquestion">开源实践问答</a>
              <span class="glyphicon glyphicon glyphicon-menu-right" aria-hidden="true"></span>
              <div class="askactive section">我要提问</div>
            </div>

            <div class="visible-sm">
              <h4 class="header">提问和发帖必读</h4>
              <ol class="list">
                <li>技术无关问题请勿在此发布</li>
                <li>提问有人回答后不允许修改和删除</li>
                <li>
                  请勿在此发布招聘信息，
                  <a href="https://www.oschina.net/job">我要招聘</a>
                </li>
                <li>
                  请勿在此发布活动信息，
                  <a href="https://www.oschina.net/event">我要发布活动</a>
                </li>
                <li>
                  更多信息请查阅 &nbsp;
                  <a href="https://www.oschina.net/question/2918182_2262855" target="_blank">
                    新版社区规范
                  </a>
                </li>
              </ol>
            </div>
            <form class="ui new-question form">
              <div class="field">
                <label>选择版块</label>
                <input type="hidden" name="catalog" value="1" />
                <div class="ui five item pointing menu catalog">
                  <a class="item" v-bind:class="{ askactive: askType == index }" v-for="(item, index) in typeList"
                    :key="item.id" @click="askTypeClick(index)" href="javascript:void(0);" :title="item.name">
                    <span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span>
                    <span>{{ item.name }}</span>
                  </a>
                </div>
              </div>
              <div class="required field">
                <label>标题</label>
                <div class="ui input focus">
                  <el-input v-model="asktitle" placeholder="您有什么技术问题，请在此输入" v-on:focus="inputfocuse"></el-input>
                </div>
              </div>
              <div class="field">
                <nuxt-link :to="{ name: 'faquestion-howtoask' }" target="_blank">什么样的问题算是一个好问题？</nuxt-link>
              </div>
              <div class="field">
                <label>语言 平台 标签</label>
                <div class="search_input">
                  <el-select v-model="value" multiple filterable allow-create default-first-option remote
                    placeholder="准确的关联语言,平台，或者开源程序，可让更多专家看到这个问题 (最多5个)" style="width:600px">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>

                  <span class="tips_tag" @click="visible = !visible">
                    <span class="span_add" style="color: rgb(39, 124, 204);">
                      <i class="icon icon_add icon_add_pos"></i>
                    </span> 选择标签</span>
                  <el-popover placement="bottom" width="600" trigger="manual" v-model="visible">
                    <el-tabs tab-position="left" style="height: 200px;">
                      <el-tab-pane label="用户管理">用户管理</el-tab-pane>
                      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
                      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
                      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
                    </el-tabs>
                  </el-popover>
                </div>
              </div>

              <div class="required field">
                <label>
                  描述（请对问题进行详细描述：如软件运行环境、详细错误、异常信息等）
                </label>
                <div id="askQustion_content">
                </div>

              </div>
              <div class="field">
                <div class="ui checkbox">
                  <el-checkbox v-model="tipsme">
                    有人回答时邮件通知我 (957963898@qq.com)
                  </el-checkbox>
                  <a href="https://my.oschina.net/redskt/admin/mail-settings" target="_blank">
                    更改提醒邮箱？
                  </a>
                </div>
              </div>
              <div class="field">
                <div class="ui checkbox">
                  <el-checkbox v-model="nocomment">此帖不允许评论</el-checkbox>
                </div>
              </div>
              <div class="publish_ask">
                <el-button type="primary" @click="publishAsk">
                  发布问题
                </el-button>
                <p class="tips_error_show" v-show="this.errtips.length > 0">
                  {{ errtips }}
                </p>
              </div>
            </form>
          </div>
          <div class="col-md-4">
            <div class="ui warning small message">
              <h4 class="header">提问和发帖必读</h4>
              <ol class="list">
                <li>请不要发布违反法律法规的内容</li>
                <li>提问有人回答后不允许修改和删除</li>
                <li>内容违规，保留问题删除的权利，具体以国家规定为基准</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userApi from '@/api/user'
import askApi from '@/api/ask'
import askServerApi from "@/api/askServerReq";
const qiniu = require('qiniu-js')

export default {
  data () {
    return {
      tipsme: false,
      nocomment: false,
      askcontent: '',
      asktitle: '',
      asktag: '',
      errtips: '',
      askType: 0,
      loginToken: '',
      uploadToken: '',
      visible: false,
    }
  },

  asyncData ({ params, error }) {
    return askServerApi.getQuestionTypeList(params.id).then((response) => {
      return {
        typeList: response.data.typeList,
      }
    })
  },

  head () {
    return {
      title: "创建新问题 - 开源实践问答",
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: "开源实践问答,创建问题，提问题，技术问题",
        },
        {
          hid: 'description',
          name: 'description',
          content: "开源实践问答问题创建页面",
        },
        {
          hid: 'og:description',
          content: "开源实践问答问题创建页面",
        },
      ],
    }
  },

  mounted () {
    this.loginToken = window.localStorage.getItem('redclass_token');
    this.init_wangeditor();
    this.getUploadImageToken();
  },

  methods: {
    getUploadImageToken () {
      userApi.getUploadImageToken().then((response) => {
        window.console.log(response);
        this.uploadToken = response.data.token;
      });
    },
    beforeUpload (file) {
      const isJPG = file.type === 'image/jpeg';
      const isPng = file.type === 'image/png';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!(isJPG || isPng)) {
        this.$message.error('上传头像图片只能是 JPG 和 PNG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return (isJPG || isPng) && isLt2M;
    },

    askTypeClick (type) {
      this.askType = type;
    },
    publishAsk () {
      if (this.asktitle.length < 6) {
        this.errtips = '问题标题必须六个字符以上哈！'
        return
      }
      if (this.askcontent.length < 12) {
        this.errtips = '问题内容必须12字符以上哈！'
        return
      }
      var userInfo = JSON.parse(window.localStorage.getItem('redclass_user'))
      if (userInfo) {
        askApi
          .submitQuestion({
            uid: userInfo.id,
            title: this.asktitle,
            content: this.askcontent,
            qustype: this.typeList[this.askType].id
          })
          .then((response) => {
            this.$message({
              type: 'success',
              message: '问题提交成功！',
            })
            this.$router.push({
              name: 'faquestion',
              query: {},
            })
          })
      } else {
        this.$router.push({
          name: 'login',
          query: {},
        })
      }
    },
    inputfocuse () {
      this.errtips = ''
    },

    init_wangeditor () {
      window.myVueComm = this;
      let editor = this.$wangeditor('#askQustion_content')
      editor.config.uploadImgMaxLength = 1
      editor.config.uploadImgServer = '/api/ucenter/uploadImage'
      editor.config.uploadFileName = 'file'
      editor.config.placeholder = '请输入问题'
      editor.config.zIndex = 100;
      editor.config.uploadImgHeaders = {
        token: this.loginToken
      }
      editor.config.customUploadImg = function (files, insertImgFn) {
        // resultFiles 是 input 中选中的文件列表
        // insertImgFn 是获取图片 url 后，插入到编辑器的方法
        var file = files[0];
        const putExtra = {
          mimeType: file.type,
        };
        const config = {
          region: qiniu.region.z2
        };
        const observable = qiniu.upload(file, null, window.myVueComm.uploadToken, putExtra, config);
        window.console.log('ddddd');
        const observer = {
          next (res) {
            window.console.log(res);
          },
          error (err) {
            window.console.log(err);
          },
          complete (res) {
            window.console.log(res);
            insertImgFn('https://img.redskt.com/' + res.hash);
          }
        }
        const subscription = observable.subscribe(observer)
      }
      editor.config.onchange = function (newHtml) {
        window.myVueComm.askcontent = newHtml;
      };
      editor.create()
    },
  },
}
</script>

<style scoped>
.tips_tag {
  height: 20px;
  font-size: 14px;
  font-weight: 400;
  color: #507999;
  line-height: 24px;
  cursor: pointer;
  margin-left: 12px;
}

.icon_add_pos {
  margin-left: 0;
  position: relative;
  top: -1px;
}

.icon {
  display: inline-block;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  vertical-align: middle;
}

.icon_add {
  width: 12px;
  height: 12px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAXElEQVRIS2NkoDFgpLH5DERbEFA58z+yYza0pxOllyhFIINHLSAY16NBRPsgQg9jgjYSUADLJ/B8MGoBeohhBBGhMB/NB4RCaLQ0JRhCwyCICPsRuwqi62RyLQAAilhQGRoPkngAAAAASUVORK5CYII=);
  cursor: pointer;
}

.span_add {
  display: inline-block !important;
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  background-color: #ebf2f7;
  border-radius: 2px;
  cursor: pointer;
}

.askactive {
  border-color: #409eff;
  color: #409eff !important;
}

.checkbox {
  margin-left: -15px;
}

.ask_content {
  background: #fff;
  padding-top: 15px;
  padding-left: 25px;
  margin-top: 10px;
  margin-bottom: 20px;
  padding-bottom: 20px;
}

.publish_ask {
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
}

.ui.form .field {
  clear: both;
  margin: 0 0 1em;
}

.ui.form .field>label {
  display: block;
  margin: 0 0 0.28571429rem 0;
  color: rgba(0, 0, 0, 0.87);
  font-size: 0.92857143em;
  font-weight: 700;
  text-transform: none;
  margin-bottom: 10px;
}

.ui.item.menu,
.ui.item.menu .item {
  width: 100%;
  padding-left: 0 !important;
  padding-right: 0 !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
  text-align: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.ui.menu:last-child {
  margin-bottom: 0;
}

.ui.menu {
  font-size: 1rem;
}

.ui.menu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 1rem 0;
  font-family: 'PingFang SC', 'Helvetica Neue', 'Microsoft YaHei UI',
    'Microsoft YaHei', 'Noto Sans CJK SC', Sathu, EucrosiaUPC, Arial, Helvetica,
    sans-serif;
  background: #fff;
  font-weight: 400;
  border: 1px solid rgba(34, 36, 38, 0.15);
  -webkit-box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);
  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);
  border-radius: 0.14285714rem;
  min-height: 2.85714286em;
}

.ui.menu.five.item .item {
  width: 20%;
  padding-top: 6px;
  padding-bottom: 6px;
  border-right: 1px solid rgba(34, 36, 38, 0.15);
}

.ui.menu.five.item a {
  display: block;
  color: rgba(0, 0, 0, 0.87);
  text-decoration: none;
}

.ui.menu.five.item a span {
  font-weight: 600;
}

.ui.form .required.field>label:after {
  display: inline-block;
  vertical-align: top;
}

.required.field>label:after {
  margin: -0.2em 0 0 0.2em;
  content: '*';
  color: #db2828;
}

.ui .input {
  width: 100%;
}

.ui.form input {
  font-family: 'PingFang SC', 'Helvetica Neue', 'Microsoft YaHei UI',
    'Microsoft YaHei', 'Noto Sans CJK SC', Sathu, EucrosiaUPC, Arial, Helvetica,
    sans-serif;
  margin: 0;
  outline: 0;
  width: 100%;
  -webkit-appearance: none;
  line-height: 1.21428571em;
  padding: 0.67857143em 1em;
  font-size: 1em;
  background: #fff;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.14285714rem;
  -webkit-box-shadow: 0 0 0 0 transparent inset;
  box-shadow: 0 0 0 0 transparent inset;
  -webkit-transition: color 0.1s ease, border-color 0.1s ease;
  transition: color 0.1s ease, border-color 0.1s ease;
}

.search_input {
  position: relative;
}

.qustion_tag_search {
  margin-top: 10px;
}

.placeholder_text {
  position: absolute;
  top: 6px;
  left: 10px;
}

.ui.warning.message {
  -webkit-box-shadow: 0 0 0 1px #c9ba9b inset, 0 0 0 0 transparent;
  box-shadow: 0 0 0 1px #c9ba9b inset, 0 0 0 0 transparent;
}

.ui.warning.message {
  background-color: #fffaf3;
  color: #573a08;
  width: 280px;
}

.ui.message {
  position: relative;
  min-height: 1em;
  margin: 1em 0;
  background: #f8f8f9;
  padding: 1em 1.5em;
  line-height: 1.4285em;
  color: rgba(0, 0, 0, 0.87);
  -webkit-transition: opacity 0.1s ease, color 0.1s ease, background 0.1s ease,
    -webkit-box-shadow 0.1s ease;
  transition: opacity 0.1s ease, color 0.1s ease, background 0.1s ease,
    -webkit-box-shadow 0.1s ease;
  transition: opacity 0.1s ease, color 0.1s ease, background 0.1s ease,
    box-shadow 0.1s ease;
  transition: opacity 0.1s ease, color 0.1s ease, background 0.1s ease,
    box-shadow 0.1s ease, -webkit-box-shadow 0.1s ease;
  border-radius: 0.14285714rem;
  -webkit-box-shadow: 0 0 0 1px rgba(34, 36, 38, 0.22) inset,
    0 0 0 0 transparent;
  box-shadow: 0 0 0 1px rgba(34, 36, 38, 0.22) inset, 0 0 0 0 transparent;
}

.ui.warning.message .header {
  color: #794b02;
  margin-top: 16px;
  margin-bottom: 10px;
}

.ui.message .list:not(.ui) li:before {
  position: absolute;
  content: '•';
  left: 16px;
  height: 100%;
  vertical-align: baseline;
}

.ui.message .list {
  margin-left: 16px;
  padding: 0px;
  font-size: 14px;
}

.ui.message .list li {
  padding-top: 5px;
  margin-left: 5px;
  margin-bottom: 8px;
  line-height: 16px;
}

.tips_error_show {
  position: absolute;
  top: 10px;
  left: 110px;
  color: red;
  font-size: 12px;
  width: 100%;
}

.editor {
  line-height: normal !important;
  height: 500px;
}

.ql-snow .ql-tooltip[data-mode='link']::before {
  content: '请输入链接地址:';
}

.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
  border-right: 0px;
  content: '保存';
  padding-right: 0px;
}

.ql-snow .ql-tooltip[data-mode='video']::before {
  content: '请输入视频地址:';
}

.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
  content: '14px';
}

.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
  content: '10px';
}

.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
  content: '18px';
}

.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
  content: '32px';
}

.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
  content: '文本';
}

.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
  content: '标题1';
}

.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
  content: '标题2';
}

.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
  content: '标题3';
}

.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
  content: '标题4';
}

.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
  content: '标题5';
}

.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
  content: '标题6';
}

.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
  content: '标准字体';
}

.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
  content: '衬线字体';
}

.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='monospace']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
  content: '等宽字体';
}
</style>
