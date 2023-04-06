<template>
  <div class="main_global_bg">
    <div class="container">
      <div class="ask_content" id="newQuestion">
        <div class="row">
          <div class="col-md-12">
            <div class="breadcrumb red_breadcrumb">
              <a class="section" href="/faquestion">开源实践面试</a>
              <span class="glyphicon glyphicon glyphicon-menu-right" aria-hidden="true"></span>
              <div class="askactive section">创建面试题</div>
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
                <label>面试岗位</label>
                <input type="hidden" name="catalog" value="1" />
                <div class="module-body">
                  <div class="mock-jobs-list">
                    <div href="/interview/ai/cover?jobTagId=639" class="mock-jobs-item"
                      v-bind:class="{ active: selectPosition == item.id }" v-for="item in positionList" :key="item.id"
                      @click="professionClick(item)">
                      <div class="mock-jobs-info active">
                        <p class="mock-jobs-name">{{ item.name }}</p>
                        <p class="item-mock-tips">115944人已参加</p>
                      </div>
                      <img class="mock-jobs-img" :src="item.img" alt="图标">
                    </div>
                  </div>
                </div>
              </div>
              <div class="required field">
                <label>面试题目</label>
                <div class="interview-input">
                  <el-input v-model="asktitle" placeholder="请在此输入面试题目" v-on:focus="inputfocuse"></el-input>
                </div>
              </div>
              <div class="field">
                <label>面试题分类</label>
                <div class="interview-input">
                  <el-select v-model="sId" clearable placeholder="请选择">
                    <el-option v-for="classify in classifyList" :key="classify.id" :label="classify.name"
                      :value="classify.id">
                    </el-option>
                  </el-select>
                </div>
              </div>
              <div class="required field mb20">
                <label>面试题标签</label>
                <div class="search_input">
                  <el-select multiple filterable :multiple-limit="3" v-model="selectTags" popper-class="pop-class"
                    no-data-text="当前没有标签" :loading="tagLoading" placeholder="准确的关联语言,平台，或者开源程序，可以获得更专业的解答 (最多3个)"
                    @focus="searchTagFocus" style="width:600px;">
                    <el-option v-for="item in tagList" :key="item.id" :label="item.name" :value="item.id">
                    </el-option>
                  </el-select>

                  <span class="tips_tag" @click="slectTagClick">
                    <span class="span_add" style="color: rgb(39, 124, 204);">
                      <i class="icon icon_add icon_add_pos"></i>
                    </span> 没有合适的标签，添加新标签？</span>
                </div>
              </div>

              <div class="field input-descrip">
                <label>
                  描述（请对面试问题进行详细描述：如问题补充说明、前置条件、提示信息等）
                </label>
                <div id="askQustion_content">
                </div>
              </div>
              <div class="publish_ask">
                <div class="interview-tips">
                  <el-checkbox v-model="checked" @change="confirmSelected">我确认提交的内容符合法律法规，若违反允许依法删除违规内容</el-checkbox>
                </div>
                <el-button type="primary" @click="publishAsk">提交面试题</el-button>
                <p class="tips_error_show" v-show="this.errtips.length > 0">
                  {{ errtips }}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import userApi from '@/api/user'
import interviewApi from '@/api/interviewReq.js'
import interviewAdmin from "@/api/interviewAdminReq";
import interviewServerApi from "@/api/interviewServerReq";
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
      tagsVisible: false,
      selectTags: [],
      tagList: [],
      classifyList:[],
      groupTagList: [],
      checked: false,
      tagLoading: true,

      sId:"",   // 面试题分类
    }
  },

  asyncData ({ params, error }) {
    return interviewServerApi.getInterviewPositionList(params.id).then((response) => {
      return {
        positionList: response.data.positionList,
        selectPosition: response.data.positionList[0].id,
      }
    })
  },

  head () {
    return {
      title: "创建面试题 - 开源实践面试",
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: "开源实践网,开源实践面试,创建面试题，面试问题",
        },
        {
          hid: 'description',
          name: 'description',
          content: "开源实践面试题创建页面",
        },
        {
          hid: 'og:description',
          content: "开源实践面试题创建页面",
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
    professionClick (item) {
      this.selectPosition = item.id;
      interviewAdmin
        .getPositionClassifyList(this.selectPosition)
        .then(response => {
          this.classifyList = response.data.positionClassifyList;
        });
      this.tagLoading = true;
    },
    groupTagClick (tag) {
      var index = this.selectTags.indexOf(tag.id);
      if (index == -1) {
        if (this.selectTags.length >= 3) {
          this.$message({
            type: 'error',
            message: '标签最多只能有3个哈！',
          });
          return;
        }
        this.selectTags.push(tag.id);
      } else {
        this.selectTags.splice(index, 1)
      }
    },
    searchTagFocus () {
      if(this.errtips == '至少需要选择一个标签哈！') {
        this.errtips = '';
      }
      if (this.tagLoading) {
        interviewApi.getInterviewTagList(this.selectPosition).then((response) => {
          this.tagList = response.data.tagList;
          this.tagLoading = false;
        });
      }
    },
    confirmSelected() {
      if(this.checked && this.errtips == '请确认您提交的内容哈！') {
        this.errtips = '';
      }
    },

    slectTagClick () {
        this.$message({
              type: 'info',
              message: '功能正在紧急开发中，敬请期待',
            })
    },

    handleTagClick (tab, event) {
      this.selectType = tab.name;
      interviewApi.getInterviewTagList(this.selectType).then((response) => {
        this.groupTagList = response.data.tagList;
      });
    },
    getUploadImageToken () {
      userApi.getUploadImageToken().then((response) => {
        if (response != undefined) {
          this.uploadToken = response.data.token;
        }
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
    
    publishAsk () {
      if (this.asktitle.length < 6) {
        this.errtips = '标题必须六个字符以上哈！'
        return
      }
      if(this.selectTags.length<=0) {
        this.errtips = '至少需要选择一个标签哈！'
        return
      }
      if(!this.checked) {
        this.errtips  = "请确认您提交的内容哈！";
        return
      }
      
      var userInfo = JSON.parse(window.localStorage.getItem('redclass_user'))
      if (userInfo) {
        interviewApi
          .submitInterviewQuestion({
            uid: userInfo.id,
            title: this.asktitle,
            content: this.askcontent,
            position: this.selectPosition,
            classify:this.sId,
            tagList: this.selectTags
          })
          .then((response) => {
            this.$message({
              type: 'success',
              message: '问题提交成功！',
            });
            this.$router.push({name: "interview-tag-sort",query: {}});
          })
      } else {
        this.$router.push({
          name: 'login',
          query: {},
        })
      }
    },
    inputfocuse () {
      if(this.errtips == '标题必须六个字符以上哈！') {
        this.errtips = ''
      }
    },

    init_wangeditor () {
      window.myVueComm = this;
      let editor = this.$wangeditor('#askQustion_content')
      editor.config.uploadImgMaxLength = 1
      editor.config.uploadImgServer = '/api/ucenter/uploadImage'
      editor.config.uploadFileName = 'file'
      editor.config.placeholder = '请输入面试题详细信息'
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

<style>
.search_input .el-select .el-tag__close.el-icon-close {
  background-color: #ecf5ff;
}

.search_input .el-tag.el-tag--info .el-tag__close:hover {
  background-color: #409eff;
}

.search_input .el-tag.el-tag--info {
  background-color: #ecf5ff;
  border-color: #d9ecff;
  display: inline-block;
  font-size: 12px;
  color: #409eff;
}
</style>>

<style scoped>

.ui.form .field.input-descrip {
  margin-right: 20px;
}
.interview-tips {
  margin-top: 15px;
  margin-bottom: 15px;
}

.required.field.input-descrip {
  padding-right: 20px;
}

.module-body {
  padding: 15px 0px;
  margin-left: -20px;
}

.mock-jobs-list {
  display: flex;
  flex-wrap: wrap;
}

.mock-jobs-list .mock-jobs-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 253px;
  padding: 14px 20px;
  background: #fff;
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 8%);
  border-radius: 4px;
  margin-bottom: 14px;
  margin-left: 23px;
  border: 2px solid #ffff;
}

.mock-jobs-list .mock-jobs-item.active {
  border: 2px solid #409eff;
}

.mock-jobs-item .mock-jobs-info .mock-jobs-name {
  font-size: 14px;
  font-weight: 500;
}

.mock-jobs-item .mock-jobs-info {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mock-jobs-item .mock-jobs-img {
  width: 58px;
  height: 58px;
}

.mock-jobs-item:hover {
  margin-top: -4px;
  height: 86px;
  text-decoration: none;
  box-shadow: 0 6px 20px 0 rgb(0 0 0 / 16%);
}

.group-taglist .nodata-image-tips {
  width: 150px;
  height: 150px;
}

.group-taglist .tag-list {
  margin-right: 12px;
  margin-bottom: 10px;
}

.group-taglist {
  margin-top: 6px;
}

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
  font-weight: 500;
  /* color: #409eff !important; */
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
  margin: 0 0 10px;
}

.ui.form .field>label {
  display: block;
  margin: 0 0 0.28571429rem 0;
  color: rgba(0, 0, 0, 0.87);
  font-size: 14px;
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

.interview-input {
  padding-right: 20px;
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
    top: 43px;
    left: 130px;
    color: red;
    font-size: 12px;
    width: 100%;
}

.editor {
  line-height: normal !important;
  height: 500px;
}
</style>
