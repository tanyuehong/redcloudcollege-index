<template>
  <div class="main_global_bg">
    <div class="container">
      <div class="qustin_detall_content">
        <div class="ask_detail_content">
          <div class="ask-detail-lefte">
            <div class="ui breadcrumb red_breadcrumb">
              <a class="section"
                 href="/faquestion">开源实践问答</a>
              <span class="glyphicon glyphicon glyphicon-menu-right"
                    aria-hidden="true"></span>
              <div class="active section">问题详情</div>
            </div>
            <div>
              <div class="question_info">
                <a href="#">
                  <img class="vam user-head-image"
                       :src="qdetail.avatar"
                       width="30"
                       height="30"
                       alt />
                  <span> {{ qdetail.nickname }}</span></a>
                <span class="qustion-top-item">发布于 {{ qdetail.gmtCreate }}</span>
                <span class="glyphicon glyphicon-star-empty qustion-top-item"
                      aria-hidden="true">
                </span>
                <span> 收藏30 </span>

                <span class="qustion-top-item"> 已解决 </span>
                <div class="qustion-right-view">
                  浏览 {{ qdetail.readcount }}
                </div>
              </div>
              <div>
                <h2 class="title_header">{{ qdetail.title }}</h2>
                <div class="ui red label horizontal"
                     data-tooltip="置顶">
                  顶
                </div>
                <div class="ui orange label horizontal"
                     data-tooltip="热门">
                  热
                </div>
              </div>

              <div class="extra question-tags mt10">
                <a class="ui horizontal basic label popup-tag"
                   href="https://www.oschina.net/question/tag/ruby"
                   target="_blank">
                  <img class="question-tags-img"
                       src="https://static.oschina.net/img/logo/ruby.gif" />
                  Ruby
                </a>

                <a class="ui horizontal basic label popup-tag"
                   href="https://www.oschina.net/question/tag/java"
                   target="_blank">
                  <img class="question-tags-img"
                       src="https://static.oschina.net/img/logo/java.png" />
                  Java
                </a>
              </div>

              <div class="qustion_content"
                   v-html="qdetail.content"></div>
              <div class="qustion_info">
                <div class="ui_center_button">
                  <el-button plain
                             type="primary"
                             icon="el-icon-star-off">收藏</el-button>
                  <div class="ui_group_button">
                    <el-dropdown class="sort">
                      <el-button plain
                                 type="primary"
                                 icon="el-icon-share">分享</el-button>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>微博</el-dropdown-item>
                        <el-dropdown-item>QQ</el-dropdown-item>
                        <el-dropdown-item>微信</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </div>
                </div>
                <ul class="ask-issue-tool">
                  <span class="answer_span"
                        @click="answerBtnClick"><i class="icon ic_question_reply"></i>写回答</span>
                  <li class="up_down_wrap wrapdisLike ask-info-item">
                    <span class="vote_span disLike"
                          @click="goodQustionClick"
                          v-bind:class="{ like: goodqustion }">

                      <i class="icon icon_vote_up"></i>好问题
                      <em class="qustion-good-num"
                          v-if="qdetail.good>0">{{qdetail.good}}</em>
                      <!---->
                    </span>
                    <span class="vote_span2"><i class="icon icon_vote_down"></i>提建议
                    </span>
                  </li>
                  <li class="ask-info-item">
                    <i class="icon icon_vote_jubao"></i>举报
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="qustion-answer-list"
               v-if="replyList.length > 0">
            <h4 class="reply-title">
              <span><em class="em1">{{ replyList.length }}</em>条回答</span>
              <span class="reply_wrap">
                <em class="em2"
                    :class="{ cur: answertype }"
                    @click="clickAnserType(true)">默认</em>
                <em class="em2"
                    :class="{ cur: answertype == false }"
                    @click="clickAnserType(false)">最新</em>
              </span>
            </h4>

            <div class="qustion-answer-content">
              <ul class="qustion-anser-list">
                <li class="answer-list-item"
                    v-for="(item, index) in replyList"
                    :key="item.id">
                  <div class="answer-item-userinfo">
                    <img class="vam user-head-image"
                         :src="qdetail.avatar"
                         width="30"
                         height="30"
                         alt />
                    <span> {{ qdetail.nickname }}</span>
                    <span class="qustion-top-item">发布于 {{ qdetail.gmtCreate }}</span>
                  </div>

                  <div class="answer-item-content"
                       v-html="item.content"></div>

                  <div class="reply_content_tool">
                    <span class="mr20px"
                          @click="repplaybtnclinck(item,index)">
                      <i class="icon icon_comment"></i>
                      评论
                    </span>
                    <div class="vote-box vote_like">
                      <span data-report-click='{"spm":"3001.5631"}'
                            class="vote_span vote_spaned"><i class="icon icon_vote_up"></i>
                        解决
                        <em class="qustion-good-num">1</em></span>
                      <span data-report-click='{"spm":"3001.5632"}'
                            class="vote_span2"><i class="icon icon_vote_down"></i>无用
                        <!---->
                      </span>
                    </div>
                    <span class="mr20px2">
                      <i class="icon icon_reward"></i>
                      打赏
                    </span>
                    <!---->
                    <span>
                      <i class="icon icon_share2"></i>
                      分享
                    </span>

                    <span class="li_more li_report">
                      <i class="icon icon_ask_report"></i>
                      举报
                    </span>

                  </div>

                  <transition v-on:before-enter="beforeEnter"
                              v-on:enter="enter"
                              v-on:after-enter="afterEnter"
                              v-on:leave="leave"
                              v-bind:css="false">
                    <div :id="'replayedtor'+index"
                         class="replay-editor"
                         v-if="item.showeditor">
                    </div>
                  </transition>
                </li>
              </ul>
            </div>
          </div>

          <div class="answer-qustion-editor">
            <div id="answer-editor"></div>
            <div class="answer-ediot-detail">
              <span class="report-common-question">报告相同问题？</span>
              <el-checkbox v-model="checked"
                           class="answer-btn-check">关注问题</el-checkbox>
              <el-button type="primary"
                         class="answer-btn-style"
                         @click="submitAnserClick">提交</el-button>
            </div>
          </div>
        </div>

        <div class="ask-detail-right">
          <div>
            <div class="user_header">
              <span class="addTitle">
                <i class="icon icon_info"></i>
                点击登录
              </span>
              <span class="addQuestion">提问题</span>
            </div>

            <div class="ask-top-wrap">
              <a target="_blank"
                 class="ask-top-warper-item"
                 href="https://ask.csdn.net/questions/7398651">◇ 欢迎建议意见</a>
              <a target="_blank"
                 class="ask-top-warper-item"
                 href="https://bbs.csdn.net/topics/603750556">◇ 开源问答上线</a>
              <a target="_blank"
                 class="ask-top-warper-item"
                 href="https://bbs.csdn.net/forums/ask?category=0">◇ 通知公告</a>
            </div>
          </div>

          <div class="qustion-type-warper">
            <div class="qustion-tag-header">
              <span> 技术问答</span>
              <span> / 前端 </span>
              <span class="ask-tag-user-fawllow">关注</span>
            </div>

            <div class="qustion-tag-content">
              <span>热门标签</span>
              <div class="qustion-tag-warper"></div>
            </div>
          </div>
        </div>
        <div class="clearfloat"></div>
      </div>
    </div>
  </div>
</template>

<script>
import askApi from "@/api/askqustion";
import useract from '@/api/useract'
const qiniu = require("qiniu-js");

export default {
  data () {
    return {
      qdetail: {},
      checked: true,
      answertype: true,
      editor: {},
      loginInfo: {},
      replyList: [],
      replyContent: "",
      uploadToken: "",
      goodqustion: false,
    };
  },
  head () {
    return {
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.0/velocity.min.js', async: true, defer: true }
      ],
    }
  },
  mounted () {
    var qId = this.$route.params.id;
    this.getQustionDetail(qId);
    this.init_wangeditor();
    this.getUploadImageToken(false);

    window.gotoPage = {
      path: `/faquestion/` + qId,
    };
  },

  methods: {
    goodQustionClick () {
      if (this.goodqustion) {
        this.qdetail.good--;
        this.cancleUserGoodQustion();
      } else {
        this.qdetail.good++;
        this.addUserGoodQustion();
      }
      this.goodqustion = !this.goodqustion;
    },
    getUserGoodQustionState () {
      useract.getUserGoodQustionState(this.qdetail.id).then((response) => {
        this.goodslect = response.data.good;
      })
    },

    addUserGoodQustion () {
      useract.addUserGoodQustion(this.qdetail.id).then((response) => {
      })
    },

    cancleUserGoodQustion () {
      useract.cancleUserGoodQustion(this.qdetail.id).then((response) => {
      })
    },
    beforeEnter: function (el) {
      el.style.width = '732px';
      el.style.height = '0px'
    },

    enter: function (el, done) {
      var Velocity = $.Velocity;
      Velocity(el, { height: '190px' }, 300, function () { done() })
    },

    afterEnter: function (el) {
      this.init_replyeditor();
    },

    leave: function (el, done) {
      var Velocity = $.Velocity;
      Velocity(el, { height: '0px' }, { duration: 300 }, { complete: done })
    },

    clickAnserType (type) {
      this.answertype = type;
    },

    getQustionDetail (qId) {
      askApi.getQuestionDetails(qId).then((response) => {
        this.qdetail = response.data.qdetail;
        this.replyList = response.data.replyList;
      });
    },

    getUploadImageToken (isForce) {
      var token = localStorage.getItem("redclass_token");
      if (!(token && token != "undefined")) {
        if (isForce) {
          this.$message({
            message: "回答问题需要登录，正在跳转登录界面中！",
            type: "error",
            duration: 2000,
            onClose: () => {
              $nuxt.$router.push({
                name: "user-login",
              });
            },
          });
        }
        return;
      }
      var userStr = localStorage.getItem("redclass_user");
      if (userStr && userStr != "undefined") {
        this.loginInfo = JSON.parse(userStr);
      }
      askApi.getUploadImageToken().then((response) => {
        this.uploadToken = response.data.token;
      });
    },

    answerBtnClick () {
      document.getElementById("answer-editor").scrollIntoView();
      this.editor.config.focus = true;
      this.editor.txt.html("");
      this.getUploadImageToken(true);
    },

    submitAnserClick () {
      if (this.replyContent.length <= 6) {
        this.answerBtnClick();
        this.$message({
          message: "输入的内容太短了哦！",
          type: "error",
          duration: 2000,
        });
        return;
      }
      askApi
        .submitQuestionReply({
          content: this.replyContent,
          qid: this.qdetail.qid,
          uid: this.loginInfo.id,
        })
        .then((response) => {
          this.$message({
            message: "问题回答成功哦",
            type: "success",
            duration: 2000,
          });
        });
      this.getQustionDetail(this.qdetail.qid);
    },

    init_wangeditor () {
      window.myVueComm = this;
      let editor = this.$wangeditor("#answer-editor");
      this.editor = editor;
      editor.config.uploadImgMaxLength = 1;
      editor.config.uploadImgServer = "/api/ucenter/uploadImage";
      editor.config.uploadFileName = "file";
      editor.config.placeholder = "请输入回答";
      editor.config.focus = false;

      editor.config.onfocus = function (newHtml) {
        myVueComm.getUploadImageToken(true);
      };

      editor.config.customUploadImg = function (files, insertImgFn) {
        // resultFiles 是 input 中选中的文件列表
        // insertImgFn 是获取图片 url 后，插入到编辑器的方法
        var file = files[0];
        const putExtra = {
          mimeType: file.type,
        };
        const config = {
          region: qiniu.region.z2,
        };
        const observable = qiniu.upload(
          file,
          null,
          window.myVueComm.uploadToken,
          putExtra,
          config
        );
        const observer = {
          next (res) {
            window.console.log(res);
          },
          error (err) {
            window.console.log(err);
          },
          complete (res) {
            window.console.log(res);
            insertImgFn("https://img.redskt.com/" + res.hash);
          },
        };
        const subscription = observable.subscribe(observer);
      };
      editor.config.onchange = function (newHtml) {
        window.myVueComm.replyContent = newHtml;
      };
      editor.create();
    },

    repplaybtnclinck (item, index) {
      item.commnetId = "#replayedtor" + index;
      window.replyItem = item;
      if (!item.editor) {
        item.showeditor = true;
      } else {
        item.showeditor = false;
        item.editor.destroy();
        item.editor = null;
      }
    },

    init_replyeditor () {
      window.myVueComm = this;
      var item = window.replyItem;

      window.console.log("dddd" + item.commnetId);
      let editor = this.$wangeditor(item.commnetId);
      item.editor = editor;
      editor.config.uploadImgMaxLength = 1;
      editor.config.uploadImgServer = "/api/ucenter/uploadImage";
      editor.config.uploadFileName = "file";
      editor.config.placeholder = "请输入回复";
      editor.config.height = 150;

      editor.config.onfocus = function (newHtml) {
        myVueComm.getUploadImageToken(true);
      };
      editor.config.menus = [
        'bold',
        'fontSize',
        'fontName',
        'italic',
        'underline',
        'indent',
        'foreColor',
        'link',
        'list',
        'todo',
        'justify',
        'emoticon',
        'image',
        'code',
        'splitLine',
      ]

      editor.config.customUploadImg = function (files, insertImgFn) {
        // resultFiles 是 input 中选中的文件列表
        // insertImgFn 是获取图片 url 后，插入到编辑器的方法
        var file = files[0];
        const putExtra = {
          mimeType: file.type,
        };
        const config = {
          region: qiniu.region.z2,
        };
        const observable = qiniu.upload(
          file,
          null,
          window.myVueComm.uploadToken,
          putExtra,
          config
        );
        const observer = {
          next (res) {
            window.console.log(res);
          },
          error (err) {
            window.console.log(err);
          },
          complete (res) {
            window.console.log(res);
            insertImgFn("https://img.redskt.com/" + res.hash);
          },
        };
        const subscription = observable.subscribe(observer);
      };
      editor.config.onchange = function (newHtml) {
        window.myVueComm.replyContent = newHtml;
      };
      editor.create();
    },
  },
};
</script>

<style>
.vote_span.vote_span.like i {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAhBJREFUWEfFlr1rFFEUxc/Jexs1rGgQ0TIgIgiCOrEQsm3AxmoniKCIiFhZ2Cls4weWYiXEBIsI0XmRNPoP6DZK3kQlINhYCIJiiihB4nxc2aDLZI2ZGcnum2qYOe+e35t3595LOL7o2B//BSD+wWosA1cJqYH4TuBp3yAmOG6jshsqDSD+8W0Jfr4A4GXN+oCQsRrl7KvFMhClAZK6d0+IS+ubyJQ24dmuAUh9+ERKeSZY/+gI/FDGDnQFQM4NbU2Xdy0IsO9fBgSWlLE7uwIQ1b0GiesbB5c5bcJjmw4gpw8NJlH/BwA7NgpOYFIZe2HTAZL68C2hXMsNTLmog/B+ri4jyP0L5OSB7cmW6se83eeZthKUQDNO0eh/Yl/+0ecCJGPeZRHczTMo+p6QlZQyWgnmn7fWtAFi32sVl5HfgZra2FrrPvGPvhdwf1GDIjoCb5SxhzsBJLtYG7sKF/vemudFDIpolMZuTtuv2S/QW4A42sPZt19cASxrY6vOjoDAa2XsEZcARhk75gxAiNuVwK4WNjc5IHJez4QPnAEIUKsY23QGoPTKXk4vfHYCQOCbMrbdVXueAwRCZWx7nuw5ACCPtQlP/dUNO2t+t3oBiZsqsA1nAKCc0UH40BVApFQ6xEfzn5wAKPIKg7k72XadO5B0DCpFWv1ajSAm8U4EN/SMNZ0Bckey8o7lVjgH+AVoSwkwj5cq7AAAAABJRU5ErkJggg==);
}
.vote_span.vote_span.like {
  color: #fc5533;
  background: #fff;
  border: 1px solid #fc5533;
}
.qustion-good-num {
  margin-left: -2px;
}
.answer-list-item {
  margin-bottom: 16px;
  border-bottom: 1px solid rgba(28, 31, 33, 0.1);
}

.fade-enter-active,
.fade-leave-active {
  transition: height 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active, 2.1.8 版本以下 */ {
  height: 10px;
}

.replay-editor {
  width: 726px;
  height: 190px;
  margin-left: 12px;
  margin-bottom: 12px;
}

.icon_ask_report {
  width: 16px;
  height: 16px;
  margin-right: 4px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAy5JREFUWEftl01oVFcUx//nTsyHNZHM0oWbUtRWaBdCXehGceHKilQodiONSmuhNZ2Ze964GGbhvHNnprEFbVEjbiyCUtquXEjd2EULLlqwtaW4cdFlQhM1iSb3yA1JGGLem48sBMmsz//c3/2fj3eHsIqfZbkT5E54d6dpKE1YKo1kJyaAs2eHx1aKsyy6ALBinlOnRrIDA0C5vLI+aFMBmN1DhXZBsc05/n85RBqAtbIRhPsEmhWxm5MumgpgWX4GsIdAX4rYXDsAzK6u0C8A3HbCezsCyBer7xivdwGd83Nme61W+LcxUVIP5PPVN0zG3wMo4w3tqFUKv3cEEEQFdpcIOgRC1cVsW2k2G4mDoqCg0arYY2ma1BIEIXM8qERs4K/EcfHvVgCiqLLVwxwlVRGJxpsCRJE7Oud1xJCeFom+SRIcP35hXTY79h5gDih0B4BNC7H/Eegu4H8aG8v+ePHiiWdJOZjjT7zSmYyh4Ti2V+YdKETuI1JcApQI9N3srDlRr+cfNyZhjg+qUg2E11NdUDwg0rxI9ENjXC5Xe62ry19Q6BGAVAnHqrG9vFSCYlEOz3mMAugH8JsT3hkSlEolMzOzPgx8LgAq6B4ZGjVqbnV39z0MMU+fTm325Pep1yGCbg8HEFDv6XnC5XLZhxjL8iuAdwFMZgyGKhW+/sIemK+dN9dAeLS43ZhdVaH5cA4Uw729U98uJl3uRICdnu77GIQRAN0EqonYwgLAHVVsyBj/QWMvNVlE8UGF+R7QZwTdLxLdbqUJmeM9CroJ0DqCP7S8HI05EgFCww0Ojt+fr7niU+f4fCuHL8ZYKydBOAfFg/HxwW1JjZkIwBy/r6DroeZ9PU/eTrI9CSqUY2pm/R+hJwh6WCS6sVJsCoC7Ot+xxnzuKoWv27n9kgvF6mfw/qswWSL2w7YALEtYOlsMdb0Vx7m/OgGIovqbXmf/BPCPE97aLsBEGMnenv7+cvnko04ASqXzG6ZnJifD6DnhgXYBUr/1rQI1ezMk9kAz4RrAmgNrDqw58Oo5sPDG39XqzVYZ98vii2tpFb90gFXeqGN50z8mHWduUfgc77mmMHr1wngAAAAASUVORK5CYII=);
}

.icon_share2 {
  width: 16px;
  height: 16px;
  margin-right: 4px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADF0lEQVRYR8WXzWtUVxiHn/dO4icqCrqwVDRuWlACVkEFRa3Glbgx+g+0pavGasw5ExEMqPcctV00KzeVbg1+gJsWUYMLxdJCae2iRbNwpQbRqG2q49xX7jgZxzjJzMlc6oW7udx7fs/9vV/nCO/5kmb1jXWXRZgtJDviuHc4dL0sADQVFeSWSHFLKERmAFOFyAxARG6p6opQJzIDiCRZpJq7ooRBZAbgnZV8/tjCUIhMAdI8CIUIAvj64JEPWpPWrZLoOoSPgSXA0lQ4dWCsBEMgGgIwxu0AuhA2A1GNWr/pnV1b/by7+/CilpaZl+vlxKQA1sZtIKcVNpYXH1X0Uk6iq0XhjySKhp6PPHvY39/3pFYDagRiQgBr4w5EBlSZCwwLUayafO+9HQnpdvXCUROgp9dvk0QvAtOBs4J+7lz+UYhwo+F4ByC1XZFfgPmCfOec2QuU2m0z10ROvAOQDhdgC8o57+2uLMQnq463AIxxOxEuqPIgEv2oGdsncqvaCeD82wDW/QysQfjSx/ZUM5YHAxjj2hF+A+79+8+spf39Xz3PGqBWHlQc6LH+uKAHEL71sd3/f4ine4cKgLHud2BlUZL1J+PeG1kCTNYLSgDpC4lG90GfDq1avmBg9+7iGEBnZ2du2bLVm4hYL+gn5d6/EJgDzABywHXv7IZa0A01ItPrtpPwI8IlH9uOdCFj3Dwi9qF8Biyu50j1MAoZSiUHrI2NIk6Qb5wz3dae2KoUf6gIK38RcRHh16RQ/HvatJn3C4XCk8eP7/w3f0Hbi/HTMGQslwB6rD8l6BcI6T1KwmmgBS1VRZf39tpEDhjrSl2yqXFsrPsJ6ECik2jSBdKC6NGh222HBwbe5EMtiPEA9WI+fo2SA8a69E/bgQLQinDEx/ZQvbiXv604ECqefl8OQXxXkA/LgoMzpo9+2tfXl4QANLUpNTYeAZmrSlGg3Xv7ZyPi1Q40tS031o2Walo442O7p1HxaoDXdoafjsZy4GXaUATd7Fx+cCoAUxGv5IDN+0FVzXlnNoIEbT7e++E0xK1a774C6ywQo/DgHbUAAAAASUVORK5CYII=);
}

.icon_reward {
  width: 16px;
  height: 16px;
  background-image: url(https://img.redskt.com/asset/img/faqustion-dashang.png);
  position: relative;
  margin-right: 4px;
}

.reply_content_tool .vote-box {
  line-height: 32px;
  height: 32px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 16px;
  border: 1px solid #e8e8ed;
  margin-right: 16px;
}

.reply_content_tool .vote-box span.vote_span {
  text-align: center;
  border: 1px solid #e8e8ed;
  border-left: 0;
  border-radius: 16px;
  position: relative;
  display: inline-block;
  height: 32px;
  line-height: 30px;
  padding: 0 12px;
  font-weight: 400;
  color: #777888;
}

.icon_comment {
  width: 16px;
  height: 16px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAhdJREFUWEftlr9PFEEUx79vdi4YCyz4Ff8FOS7BJTQgBVcSSY64JLY2UPEn+D8QG2hsJR6GRjshIVAA5jQGjsR/wISghZGGsDePzLJcjt1lGXdnucYtNzPz+cybN28eocsf2eZzbbxPr0kbB79N1rYmwN7oQIvFWyLMaDAzPjmkXlH922maiBUBDVcQWwyUAfwJgY8IOBJQ02kSuQX+1iqDD2VpU8MDoH9R1QKq81+KRC6Bzp1Hd3sjKoyPcr3xPOkoMgukwa9BXKsMKlk6AtAvfGcgKTEzCZjAtcTZbHnoQU/PDwJ6rQmYwgs5AlN4LDFtJGER8KBgmVSrouBGAkXC7xQoGp4qcB/wWwXuC54oEIEroUSFPnxpRpM1qHJOaYsJwyaPzm3JHrsFvufuAxgnQDEgkha3BY9FgOfcxy0HP/WT6igxoYRaa79yYTGJwA8FVPWuN9+4H+AXo9UWic8AdmS9MRXNBd+nl9LhtTDsueGxCLTm3SVmLIN4Vb7/uhh0Nh3NRsexWIHHBPz5pytgWiDGkrPeeHMduvPaWFlK/h7mhDV4XMBzdwBMEuH1VWvFT5hJZ/kIA7rFSoT74TyTsh6O2ZX1xrP4EXjuLwaCrjb6CWCPoGaTEs6agO+NbRN4mIFjYui7f6yIm1KWmvRu/+Qfdmg81Og1NF4tw8D/Au0IZEikDAFvT4nfgq4L5NlOnrldT8JLe8mJMLeISrcAAAAASUVORK5CYII=);
}

.reply_content_tool .mr20px {
  padding: 0 16px;
  text-align: center;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #fc5533;
  font-size: 14px;
  font-weight: 400;
  color: #fc5533;
  margin-right: 16px;
}

.reply_content_tool span {
  color: #777888;
  padding-right: 16px;
  cursor: pointer;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.reply_content_tool {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 0;
  margin: 16px 0 20px;
}

.answer-item-userinfo {
  font-size: 12px;
  color: #666;
}
.answer-item-content {
  margin-top: 8px;
  margin-left: 12px;
  margin-right: 12px;
}

.qustion-answer-content {
  margin-top: 6px;
  margin-bottom: 6px;
}

.qustion-answer-list h4 .em2.cur {
  color: #222226;
  background: #fff;
}

.qustion-answer-list .reply-title {
  padding-right: 24px;
  font-size: 16px;
  font-weight: 400;
  color: #222226;
  line-height: 48px;
  height: 48px;
  background: #fff;
  margin: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  font-style: normal;
}

.qustion-answer-list h4 .em1 {
  color: #222226;
  margin-right: 3px;
  font-style: normal;
}

.qustion-answer-list h4 .em2 {
  font-style: normal;
  float: left;
  width: 42px;
  height: 28px;
  background: #f0f0f2;
  border-radius: 4px;
  margin: 2px;
  font-size: 12px;
  font-weight: 400;
  color: #999aaa;
  line-height: 28px;
  text-align: center;
  cursor: pointer;
}

.qustion-answer-list {
  margin-top: 10px;
  background: #ffffff;
  padding: 15px;
  font-weight: 400;
  font-size: 14px;
}

.qustion-answer-list h4 .reply_wrap {
  margin-top: 8px;
  display: inline-block;
  width: 92px;
  height: 32px;
  background: #f0f0f2;
  border-radius: 6px;
}

.report-common-question {
  font-size: 14px;
  color: #666;
}

.qustion-tag-content {
  margin-top: 10px;
}

.ask-tag-user-fawllow {
  display: inline-block;
  text-align: center;
  width: 60px;
  height: 24px;
  border-radius: 18px;
  border: 1px solid #fc5531;
  font-size: 14px;
  font-weight: 400;
  color: #fc5531;
  line-height: 22px;
  cursor: pointer;
  margin-left: 130px;
  margin-top: 3px;
}

.qustion-type-warper {
  margin-top: 15px;
  padding: 15px;
  background: #ffffff;
}
.ask-top-warper-item {
  display: block;
}

.ask-top-wrap {
  padding: 14px 20px;
  color: #507999;
  background: #ffffff;
}

.user_header {
  line-height: 48px;
  z-index: 999999;
  height: 48px;
  background: #fff;
  border-bottom: 1px solid #f0f0f2;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0 20px;
}

.user_header .addQuestion {
  text-align: center;
  margin-top: 10px;
  cursor: pointer;
  width: 94px;
  height: 30px;
  background: #fc5531;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  line-height: 30px;
}

.icon_add3 {
  width: 12px;
  height: 12px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAR0lEQVRIS2NkIBL8////P7JSRkZGRmK0EqUIZNCoBQSDczSIRoMIZwgwoqcOgmFFooJRCwgG2GhhNxpEiBAYLa4JpoZBG0QAg/tgCdLS33gAAAAASUVORK5CYII=);
  position: relative;
  top: -1px;
  margin-right: 8px;
}

.icon_info {
  width: 16px;
  height: 16px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAACdElEQVRYCdVWPUxTURQ+55U0kcHBRCMMJOhGk07FyQkTo4MyNT4cCIMB/yYnx0YXJ+OgoIZBHeA13VwkDITBrUwNdkMSBjFhMwaShr7jOfT19b32lnNreRjvdO/5+b7vnnfvuQ/gHw/slX9q6lGm7h/eI4LrnDsS5O8gwmrKGVhcXn7zrRdMawH5QiGN1d2XgPCAiBwTCSL6QLBAY0NPSoVCzRTTbrMSIORQ3f0CQBPtAOY1rsHY0E0bEcadtIMe7dyaXLJpopHTjtS5VisQfPNKt7J3QjYs8jn4TGS1M6FWoHHgzN+8G7nYRbDkHhcjPlVAcNo1HKPfJlcVwMjNq2YkUYxqro0AhaM/t42AnT4o1FxVgHS4vxVgk6sKkPZ61OF6VBFcw0UtLaUFbG6W9zKZ3AWOu6LFRv0IOF8sLnyM2kxztQKSJL0dgNur9cC1Ro6eoFZAIKrr6/VM/paHe7/PcWlzbDJ2UCm77JzfgWmbd0CwjUDi6DZO+jnuxnNqdrUC+enZEajhDX7pswRwGZEuEeFZvmKD3GoHRSnP93m+z75f7PvOoFv8elQgTSulT++P7QVGAfyQ4J27913y6Sn/YGT7KgdCBR18UVx66/EZ4T3ER4eA/MzDi3hw+Jl3NB4P7W/FVSrTmYHbpQ/zP6NIMQGu+3i47te+csBoNOgE59spJ33V817/aGLG+oBPtVcJkgvnaMDR5G9dQ9edy9V9KoeeBCcpB8c9792GUIQV8AEmE+SMQUe5QgHkw7VYVIKLKFcoAJCGE+SMQ0e4WgIIzsejElxFuFoCpJ+d2mhxhQKY/Tk31YPkNTAH0rPkef4Xhj99280YIF5cMwAAAABJRU5ErkJggg==);
  margin-right: 8px;
  margin-top: -1px;
}

.user_header .addTitle {
  height: 48px;
  font-size: 16px;
  font-weight: 500;
  color: #222226;
  line-height: 48px;
}

.answer-btn-check {
  margin-left: 470px;
}

.answer-btn-style {
  margin-left: 20px;
  height: 40px;
  width: 80px;
  margin-top: 15px;
}

.answer-qustion-editor {
  margin-top: 10px;
  padding-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 15px;
  background: #ffffff;
}

.qustion-top-item {
  margin-left: 8px;
}
.qustion-right-view {
  float: right;
}

.ask-info-item {
  margin-left: 16px;
  color: #777888;
  font-size: 12px;
}

.icon_vote_down,
.icon_vote_up {
  width: 16px;
  height: 16px;
  position: relative;
  left: -2px;
}

.icon_vote_jubao {
  background-image: url('https://img.redskt.com/asset/img/icon-ask-jubao.png');
  vertical-align: middle;
  height: 18px;
  width: 18px;
  margin-top: -2px;
}

.icon_vote_up {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAxZJREFUWEfFl99LVEEUx7/n3iVXUEODfkAP5l9QFkmERQ9FPyGIpEiCohAiKCqduUpd19qdmTWWkIoCoQch6MdLRUVvFVFSUFT0FhQUiZgpmbWr7T2xwZrtZrrLer1Pl3tn5vM5M3PumUuY4YtmmI+8BFz3XMnIyJDDoFpmfAPxrarK8s6GhobRXAPKWSAWixX39o0+AnP1eBgBL4hK1ip1sD8XiZwFhBO9APYaiPAWlt1EnlfGzK0MVBJRl1Zi97QJOE50o8febSLEOYDl5qR8nYK5rlkYT/AHEA0aJcqnRcB1LwUTid43DFRZhKNKyVga1NraPvdHPNlLwIDWsmJaBKQ0xxncRkSvqpcsqq6rq0umQaLl9Cokfz4AqNtosaLgAlKeLwd9fc+MMtiB1SZ87OF4iGiOHoLnnSFQp9Zif+EFmk2EPXZAdM8osT4TIKW+zsA2i2ivUuJSQQWMMaUDg/wxFX3ApppwWDzNBAhpegCe/38w/QDhLgUCp/TJoy/SbSdNwz/Ti/tayzX/gghp7gC8YSqRE+EbwV6nVOOTVPsxAde9OiuReNcG4t3MWJA1mG1vNeHGG1OB/KuN45ydwzysGbwPoMdGi5V/CUhpUi/FRIBgkbBDIfLyFUj16+joKPrU8/0zM0qCRfOKQ6E98bEZkI7+lIrcImuTUk13xlJMak7dGy0nXa6pyAnH9IO5Ilg0a04odOTL2KBiAtBEz6cCy9qsWs/GIAYBGjZalPy1BH4ItLSYZT+T/IyAl1rLxb4LSBndyfAug+i6UWK77wLCiZ4AeyGySOmIaPZdQErdxUD9+C+mr5tQOrqbGTWwUWvC8pHvM5BOQdsKzo9EDvf6KuC6sYp4YqQfoCGjRVlWLZjuNHSc9hqPk90gem6UWOq7gGhur4eX7CKiK1qJHb4LOI4OeYwTFuGUUvK47wJS6psMbIGFXSYiL2cJpIsRLGw2EXm7UMXo92F2tK8e7F1kpiShdJ7WBwayBSYpx/kUn8w+mafp3A4keRqk/iEAvAZb7Vo3XcscpiA1Pk+3391mXOAXqa2wMC1BU08AAAAASUVORK5CYII=);
  vertical-align: middle;
  top: -2px;
}

.icon_vote_down {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAyFJREFUWEfFl9tvDFEcx7+/2Y1dSRVtoiQe1F9AI0TE5YW4JhJRESJxSZqIkLjsOdPFdNTuOWfJhgYhggfiAS/EJR5d4vrQ0HiTkJBWQ7Vx3W2785NBF0WzW90xT5Mzv/l+P3POnPn+hvCfD/rP/sgDOM65Ydnssz0gXsOMcUMFRoQMgBawtU/r2Pn+unkAKY1msBgq4z/pWIRtSsn0z9d+ANi61X9yi6xFSsWu9hUJqdk/N1oOarkc51Q02/N6Ndg7xkw5wogqrTd29unnRf9m9K8AfUZS6ksMLIGFVSYpzwYPUG8a2GOHLEropNgZPIA0qxh8BkTnjBIrAgeIx83U3hzfJ6BZa1kTOIDjpCsy2e4OgN4bLcoDB/ANhW06wFwRjVjjXDf2yh8LbBf4ZtLW95gxzSJrllKxW8EDSH2agdVkWet1MnYycABhp3aDPRcEbZS0AweQMrWS4Z0F0QWjxPLAAeJxM6U3xw8JeKS1nBQ4gNB6JLrQBdBHo0XZLwDyexjBwmKTlFeGKoz6p6K09RtmVEYjwypdd+vbguM4GhEh1yXvX+K6qakp0tr2yQcoi0aqhrvu2kzhDUkotNQkdlwcLIBtH6pk/uj3HBsAumO0mPHLEvxN2LbNZo/5IBHd0ErM+VOdkOYqwAsKgSPCB0JonlI77hYEYIwZ0dnFL5lRHg7RtERCPOhvJKRpA3jswAD0GYRrFA7v1Y3bmn/LgoFulvUmyR7bILpulJj/24sl9QUGlllE65QSpwqZieIA5JHRoHfP/VlAKDzbJLbf/NlE1Ke2wPMOgOiEUWLDkAN8DRJpdjF4DxE9rplcXVNbW5vLb9X4/lnI9d4A6J7RYnpJAL42l9n2JwxM7N/dNjTsG/M5k2snoFNrWVESAF/UtlMLPfau+L0+hzHVNMoWf9xxzPhMll+AqMsoMbpkAL6wsFNHwV4dEZ7CCsXI88qZuYGBCUR0WiuxpqQA6XR6ePvrnttgzvd13/dzM1HZXKU2dZQU4NuUHy7r7n5vM2gms/9hweXq6lHH6+rqeooxL+hDVKxgsfWD+t0q1mSg+i/B+LEwffaI4AAAAABJRU5ErkJggg==);
  top: -1px;
  margin-right: 4px;
}

.vote_span.disLike {
  border: 1px solid #e8e8ed;
  border-left: 0;
}
.ask-issue-tool {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 24px 0 0;
  font-size: 12px;
}
.vote_span2 {
  padding: 0 12px;
  text-align: center;
  border-radius: 16px;
  display: inline-block;
  border: 1px solid transparent;
  height: 32px;
  line-height: 30px;
  font-size: 12px;
  font-weight: 400;
  color: #777888;
}
.vote_span {
  text-align: center;
  border: 1px solid transparent;
  border-radius: 16px;
  position: relative;
  display: inline-block;
  height: 32px;
  line-height: 30px;
  padding: 0 12px;
  font-size: 12px;
  font-weight: 400;
  color: #777888;
}
li.up_down_wrap {
  font-size: 0;
  line-height: 32px;
  height: 32px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  /* -webkit-box-align: center; */
  -ms-flex-align: center;
  align-items: center;
  border-radius: 16px;
  border: 1px solid #e8e8ed;
  margin-right: 16px;
}

.answer_span .ic_question_reply {
  margin-right: 4px;
}
.icon {
  display: inline-block;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  vertical-align: middle;
}

.answer_span {
  width: 94px;
  height: 32px;
  font-size: 12px;
  background: #fc5531;
  border-radius: 16px;
  font-weight: 400;
  text-align: center;
  line-height: 32px;
  color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.ic_question_reply {
  width: 16px;
  height: 16px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAbRJREFUWEftlr0uREEYhp/XBVCwxC34KzV+Ckqh12qo9hLcg2ho1C6ADomsglJYiRuQCAo34JPZzJHj7OzunD2ztnGaTfbMmeeZmXfmGzHkR6n5Zjbu+pT0EdN3MgEzqwEnwIYHnwM7kt66iSQR8PArYA749MAx4BFY6yZRWcDMJoFLD3fAdS+Q/6+jRCWBwsh/jbbw7kzSZmgp+hboBs9Afnac2ARQCwWzL4EYuJMwsyngGRhNJlAC7nZFFsw0S1ACXgxm9RAOAt46sGJOq0HBowQGCe8pMGh4V4G/gHcU+Ct4UKAA/wIWJDWLYfWnnNvnszFFp1PY23aBmd0Bi4CDj4Q6TwVvmwEzmwZefEldAk5zVa51mBTgD6769ar50fcBM3Ol9AJoSFoNZGHbS7lprwwPzUAdOACOJe35gpI/07NlSQIPCRwBu0Bd0mGurLqbzr3PRDJ4SKABLAP7PgczPuXzgLtiBeFmln0Xc7K7NjeSVkIC70DrVht4boGtUOBSClz7ET8Bbu9nv01Jr7HDK9MuqhqW6bBs23+BnxnoI0hlZzvfvn0XDF2gynCqfDv0EH4DRAAPMH3G5MsAAAAASUVORK5CYII=);
}
.qustion_content {
  margin-top: 15px;
  margin-bottom: 20px;
  font-size: 14px;
}
.qustin_detall_content {
  margin-top: 15px;
}

.ask-detail-lefte {
  padding: 15px;
  background: #ffffff;
}

.title_header {
  display: inline;
}

.ask_detail_content {
  margin-left: 0px;
  width: 780px;
  float: left;
}

.ask-detail-right {
  float: right;
  height: 500px;
  width: 335px;
}
.question_info {
  margin-top: 10px;
  margin-bottom: 6px;
}

.question-tags-img {
  display: inline-block;
  vertical-align: baseline;
  height: 22px;
  border-radius: 0.14285714rem;
  padding: 2px 0;
  margin: -0.5833em 0.5em -0.5833em 0;
}

.ui_center_button {
  width: 160px;
  margin: 0 auto;
}

.ui_group_button {
  height: 30px;
  width: 60px;
  display: inline-block;
}
</style>
