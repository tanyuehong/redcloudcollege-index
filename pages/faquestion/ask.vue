<template>
  <div class="main_global_bg">
    <div class="container">
      <div class="ask_content" id="newQuestion">
        <div class="row">
          <div class="col-md-8">
            <div class="breadcrumb red_breadcrumb">
              <a class="section" href="/faquestion">开源实践问答</a>
              <span
                class="glyphicon glyphicon glyphicon-menu-right"
                aria-hidden="true"
              ></span>
              <div class="active section">我要提问</div>
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
                  <a
                    href="https://www.oschina.net/question/2918182_2262855"
                    target="_blank"
                  >
                    新版社区规范
                  </a>
                </li>
              </ol>
            </div>
            <form class="ui new-question form">
              <input
                type="hidden"
                name="user_code"
                value="IMqpO8mgcnPOwUeaVbRFT5zlfSFKllVq4AFnIACu"
              />
              <input type="hidden" name="userId" value="2825958" />
              <input type="hidden" name="id" value />
              <input type="hidden" name="askUserId" value="0" />
              <input type="hidden" name="tag" value />
              <input type="hidden" name="tag_type" value />
              <div class="field">
                <label>选择版块</label>
                <input type="hidden" name="catalog" value="1" />
                <div class="ui five item pointing menu catalog">
                  <a class="item active" data-value="1" title="技术问答">
                    <span
                      class="glyphicon glyphicon-question-sign"
                      aria-hidden="true"
                    ></span>
                    <span>技术问答</span>
                  </a>
                  <a class="item" data-value="100" title="职业生涯">
                    <span
                      class="glyphicon glyphicon-briefcase"
                      aria-hidden="true"
                    ></span>
                    <span>职业生涯</span>
                  </a>
                  <a class="item" data-value="2" title="技术分享">
                    <span
                      class="glyphicon glyphicon-share"
                      aria-hidden="true"
                    ></span>
                    <span>技术分享</span>
                  </a>
                  <a class="item" data-value="3" title="IT大杂烩">
                    <span
                      class="glyphicon glyphicon-user"
                      aria-hidden="true"
                    ></span>
                    <span>IT大杂烩</span>
                  </a>
                  <a class="item" data-value="4" title="站务/建议">
                    <span
                      class="glyphicon glyphicon-hand-up"
                      aria-hidden="true"
                    ></span>
                    <span>站务/建议</span>
                  </a>
                </div>
              </div>
              <div class="required field">
                <label>标题</label>
                <div class="ui input focus">
                  <el-input
                    v-model="asktitle"
                    placeholder="您有什么技术问题，请在此输入"
                    v-on:focus="inputfocuse"
                  ></el-input>
                </div>
              </div>
              <div class="field">
                <a
                  href="https://www.oschina.net/question/12_21851"
                  target="_blank"
                >
                  什么样的问题算是一个好问题？
                </a>
              </div>
              <div class="field">
                <label>语言 平台 标签</label>
                <div class="search_input">
                  <el-input
                    v-model="asktag"
                    placeholder="准确的关联语言,平台，或者开源程序，可让更多专家看到这个问题 (最多5个)"
                  ></el-input>
                </div>
              </div>

              <div class="required field">
                <label>
                  描述（请对问题进行详细描述：如软件运行环境、详细错误、异常信息等）
                </label>
                <client-only>
                 <div class="quill-editor" 
         :content="content"
         @change="onEditorChange($event)"
         @blur="onEditorBlur($event)"
         @focus="onEditorFocus($event)"
         @ready="onEditorReady($event)"
         v-quill:myQuillEditor="editorOption">
    </div>
                </client-only>
              </div>
              <div class="field">
                <div class="ui checkbox">
                  <el-checkbox v-model="tipsme">
                    有人回答时邮件通知我 (957963898@qq.com)
                  </el-checkbox>
                  <a
                    href="https://my.oschina.net/redskt/admin/mail-settings"
                    target="_blank"
                  >
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
                  <a
                    href="https://www.oschina.net/question/2918182_2262855"
                    target="_blank"
                  >
                    新版社区规范
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import askApi from '@/api/askqustion'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import 'quill/dist/quill.core.css'

export default {
  data() {
    return {
      tipsme: true,
      nocomment: true,
      askcontent: '',
      asktitle: '',
      asktag: '',
      errtips: '',
       content: '',
        editorOption: {
          placeholder: "请输入您的问题",
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block']
            ]
          }
        },
    }
  },
  methods: {
     onEditorBlur(editor) {
        console.log('editor blur!', editor)
      },
      onEditorFocus(editor) {
        console.log('editor focus!', editor)
      },
      onEditorReady(editor) {
        console.log('editor ready!', editor)
      },
      onEditorChange({ editor, html, text }) {
        console.log('editor change!', editor, html, text)
        this.content = html
      },
    publishAsk() {
      if (this.asktitle.length < 6) {
        this.errtips = '问题标题必须六个字符以上哈！'
        return
      }
      if (this.askcontent.length < 12) {
        this.errtips = '问题内如必须12字符以上哈！'
        return
      }
      var userInfo = JSON.parse(window.localStorage.getItem('redclass_user'))
      if (userInfo) {
        askApi
          .submitQuestion({
            uid: userInfo.id,
            title: this.asktitle,
            content: this.askcontent,
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
    inputfocuse() {
      this.errtips = ''
    },
  },
}
</script>

<style>
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

.ui.form .field > label {
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

.ui.form .required.field > label:after {
  display: inline-block;
  vertical-align: top;
}

.required.field > label:after {
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
}

.ui.message .list li {
  padding-top:5px;
  margin-left:5px;
}

.tips_error_show {
  position: absolute;
  top: 10px;
  left: 110px;
  color: red;
  font-size: 12px;
  width: 100%;
}

.quill-editor {
   height:200px;
}
</style>
