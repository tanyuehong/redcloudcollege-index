<template>
  <div class="golobal_content">
    <section class="container">
      <div class="practice_detail">
        <div class="practice_content">
          <div class="practice_header">
            <h1>{{ pitem.title }}</h1>

            <div class="practice-header-bloginfo">
              <div class="audth-user-image">
                <nuxt-link class="article_title"
                           :to="'/teacher/' + pitem.authorUid">
                  <img class="vam user-head-image article-avatar"
                       :src="pitem.authorAvatar"
                       width="30"
                       height="30"
                       alt />
                </nuxt-link>
              </div>

              <div class="blog-info-detail">
                <nuxt-link class="article_title"
                           :to="'/teacher/' + pitem.authorUid">
                  <div class="article-author">{{ pitem.authorName }}</div>
                </nuxt-link>
                <div>
                  <span>{{ pitem.gmtCreate }} </span>
                  <span>阅读 {{ pitem.viewCount }} </span>
                </div>

              </div>

              <div class="header-focus">
                <el-button type="primary"
                           plain
                           icon="el-icon-plus">关注</el-button>
              </div>
            </div>
            <div class="purclearfix"> </div>
          </div>
          <div class="mark_content"
               v-html="changeMarkToHtml(pitem.content)"></div>
          <div class="bottom-tool">
            <div class="bottom-tool_item">
              <div class="tool_crcle"
                   @click="goodBtnClick"
                   v-bind:class="{ toolactive: goodslect }"
                   role="button"
                   tabindex="-1"
                   aria-label="给文章点赞">
                <i aria-label="ic-like"
                   class="anticon">
                  <svg width="1em"
                       height="1em"
                       fill="currentColor"
                       aria-hidden="true"
                       focusable="false"
                       class="">
                    <use xlink:href="#ic-like"></use>
                  </svg>
                </i>
              </div>
              <div class="bottom-good">
                <span>{{ pitem.good }}人点赞</span>
              </div>
            </div>
            <div class="bottom-tool_item">
              <div class="tool_crcle _1fDw5l">
                <i class="el-icon-collection fsize24"></i>
              </div>
              <div class="bottom-good">收藏</div>
            </div>
          </div>

        </div>

        <div class="bottom-content">
          <div class="bottom-comment">
            <div class="comment-header">
              <nuxt-link class="article_title"
                         :to="'/teacher/' + pitem.authorUid">
                <img class="vam user-head-image article-avatar"
                     :src="pitem.authorAvatar"
                     width="30"
                     height="30"
                     alt />
              </nuxt-link>
            </div>
            <div class="commet-editor-content">
              <div id="comment-editor"></div>

          <transition     v-on:before-enter="cbeforeEnter" 
                                  v-on:enter="center"
                                  v-on:leave="cleave"
                                  v-bind:css="false">
                   <div class="editor-submit-tool" v-if="showComment">
                <el-button type="primary" round size="small">发布</el-button>
                <el-button round size="small" @click="cancleCommentClick">取消</el-button>
              </div>
            </transition>
              
            </div>
            <div class="purclearfix"></div>
          </div>

          <div class="comment-list-content">
            <h4 class="reply-title">
              <span><em class="em1">全部评论{{commentList.length}}</em></span>
              <span class="reply_wrap">
                <em class="em2"
                    :class="{ cur: answertype }"
                    @click="clickAnserType(true)">默认</em>
                <em class="em2"
                    :class="{ cur: answertype == false }"
                    @click="clickAnserType(false)">最新</em>
              </span>
            </h4>
          
          <div id="answer-list"
               class="qustion-answer-list"
               v-if="commentList.length">
            

            <div class="qustion-answer-content">
              <ul class="qustion-anser-list">
                <li class="answer-list-item"
                    v-for="(item, index) in commentList"
                    :key="item.id">
                  <div class="answer-item-userinfo">
                    <img class="vam user-head-image"
                         :src="item.avatar"
                         width="30"
                         height="30"
                         alt />
                    <span class="ml5"> {{ item.username }}</span>
                    <span class="qustion-top-item"> {{ item.gmtCreate }}</span>
                  </div>

                  <div class="answer-item-content"
                       v-html="item.content"></div>

                  <div class="reply_content_tool">
                    <span class="mr20px fbselect"
                          @click="repplaybtnclinck(item,index)">
                      <i class="icon icon_comment"></i>
                      评论
                    </span>
                    <div class="vote-box vote_like">
                      <span v-bind:class="{ like: item.goodreply }"
                            @click="goodReplyClick(item)"
                            class="vote_span vote_spaned">
                        <i class="icon icon_vote_up"></i>解决<em class="qustion-good-num">{{item.good}}</em></span>
                      <span class="vote_span2"
                            @click="badReplyClick(item)"
                            v-bind:class="{ like: item.badreply}"><i class="icon icon_vote_down"></i>无用<em class="qustion-good-num"
                            v-if="item.bad>0">{{item.bad}}</em>
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

                    <span class="li_more li_report"
                          @click="jubaoBtnClick(item.id,'回答')">
                      <i class="icon icon_ask_report"></i>
                      举报
                    </span>

                  </div>

                  <transition v-on:before-enter="beforeEnter"
                              v-on:enter="enter"
                              v-on:after-enter="afterEnter"
                              v-on:leave="leave"
                              v-bind:css="false">
                    <div :id="'replayedtor' + index"
                         class="replay-editor"
                         v-if="item.showeditor"
                         :key="item.id">
                    </div>
                  </transition>

                  <div class="reply-comment-tool"
                       v-if="item.showeditor">
                    <span @click="repplaybtnclinck(item,index)">取消</span>
                    <div class="comment-btn"
                         @click="replyCommntClick(item,index)">评论</div>
                  </div>

                  <div class="reply-comment-container"
                       v-if="item.comments">
                    <div class="reply-comment-item"
                         v-for="(comment, cindex) in item.comments"
                         :key="comment.id">
                      <div class="answer-item-userinfo">
                        <img class="vam user-head-image"
                             :src="comment.avatar"
                             width="30"
                             height="30"
                             alt />
                        <span class="ml5"> {{ comment.name }}</span>
                        <span class="comment-replyment"
                              v-if="comment.toname">回复</span>
                        <span v-if="comment.toname">{{ comment.toname }}</span>
                        <span class="qustion-top-item">{{ comment.gmtCreate }}</span>
                      </div>
                      <div class="answer-item-content"
                           v-html="comment.content"></div>
                      <div class="comment-tool-bar fbselect">
                        <span class="mr15"
                              v-bind:class="{ goodcomment: comment.goodcomment }"
                              @click="goodCommentClick(comment)"><i class="icon icon_vote_up"></i>{{commentGood(comment.good)}}</span>
                        <span class="mr15"
                              @click="commentbtnclinck(comment,cindex)">回复</span>
                        <span class="li_more li_report"
                              @click="jubaoBtnClick(comment.id,'评论')">
                          <i class="icon icon_ask_report"></i>举报
                        </span>

                      </div>

                      <transition v-on:before-enter="cbeforeEnter"
                                  v-on:enter="center"
                                  v-on:after-enter="cafterEnter"
                                  v-on:leave="cleave"
                                  v-bind:css="false">
                        <div :id="'creplayedtor' + cindex"
                             class="c-replay-editor"
                             v-if="comment.showeditor"
                             :key="comment.id">
                        </div>
                      </transition>
                      <div class="reply-comment-tool r-comment"
                           v-if="comment.showeditor">
                        <span @click="commentbtnclinck(comment,cindex)">取消</span>
                        <div class="comment-btn"
                             @click="creplyCommntClick(comment,item,cindex)">提交</div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>

        <div class="practice_left_show">
          <div class="tool_item">
            <div class="tool_crcle"
                 @click="goodBtnClick"
                 v-bind:class="{ toolactive: goodslect }"
                 role="button"
                 tabindex="-1"
                 aria-label="给文章点赞">
              <i aria-label="ic-like"
                 class="anticon">
                <svg width="1em"
                     height="1em"
                     fill="currentColor"
                     aria-hidden="true"
                     focusable="false"
                     class="">
                  <use xlink:href="#ic-like"></use>
                </svg>
              </i>
            </div>
            <div class="P63n6G">
              <div class="_2LKTFF">
                <span class="_1GPnWJ">
                  {{ pitem.good }}
                  赞
                </span>
              </div>
            </div>
          </div>
          <div class="tool_item">
            <div class="tool_crcle _1fDw5l">
              <i class="el-icon-collection fsize24"></i>
            </div>
            <div class="P63n6G">收藏</div>
          </div>
          <div class="tool_item">
            <div class="tool_crcle"
                 role="button"
                 tabindex="-1"
                 aria-label="赞赏作者">
              <i aria-label="ic-shang"
                 class="anticon">
                <img src="~/assets/img/dashang.png"
                     class="tool_item_image" />
              </i>
            </div>
            <div class="P63n6G"
                 role="button"
                 tabindex="-1"
                 aria-label="查看赞赏列表">
              赞赏
            </div>
          </div>
          <div class="tool_item">
            <div class="tool_crcle _1fDw5l">
              <img src="~/assets/img/gengduo.png"
                   class="tool_item_image" />
            </div>

            <div class="P63n6G">更多好文</div>
          </div>
        </div>
      </div>
    </section>
    <svg class="svgcostClass"
         style="display: none; width: 0; height: 0"
         width="0"
         height="0"
         focusable="false"
         aria-hidden="true">
      <symbol id="ic-like"
              viewBox="0 0 1084 1024">
        <path d="M728.064 343.943529c-17.648941-2.891294-23.552-20.239059-26.503529-28.912941V104.026353C701.560471 46.200471 654.396235 0 595.425882 0c-53.007059 0-97.28 40.478118-106.134588 89.569882-29.997176 184.862118-138.541176 255.457882-217.630118 280.937412a26.142118 26.142118 0 0 0-18.130823 24.877177v560.067764c0 19.817412 16.022588 35.84 35.84 35.84h535.973647c56.018824-11.565176 94.328471-31.804235 120.892235-86.738823l120.832-416.105412c23.552-75.173647-14.757647-147.395765-100.231529-144.564706h-238.772706z m-571.813647 31.744H76.619294C35.358118 375.687529 0 410.383059 0 450.861176v462.426353c0 43.369412 32.406588 78.004706 76.619294 78.004706h79.631059c27.708235 0 50.115765-22.407529 50.115765-50.115764V425.863529a50.115765 50.115765 0 0 0-50.115765-50.115764z"></path>
      </symbol>
    </svg>
  </div>
</template>

<style scoped>

.editor-submit-tool {
  padding-top: 8px;
  overflow: hidden;
}

.editor-submit-tool .el-button {
  padding: 6px 12px;
  font-size: 10px;
  border-radius: 14px;
  
}

.bottom-content {
  background: #fff;
}

.commet-editor-content {
  width: 600px;
  padding-top: 20px;
  float: right;
  margin-right: 20px;
  font-size: 12px;
}

.bottom-comment {
  background: #fff;
  padding-bottom: 20px;
  margin-bottom: 15px;
  width: 680px;
}

.bottom-comment .comment-header {
  width: 40px;
  float: left;
  margin-left: 15px;
  margin-top: 15px;
}

.bottom-tool_item {
  display: flex;
  cursor: pointer;
  color: #969696;
  margin-right: 30px;
}

.bottom-tool_item .bottom-good {
  font-size: 14px;
  color: #666;
  margin-top: 14px;
}
.bottom-tool {
  display: flex;
  margin-top: 26px;
  margin-bottom: 8px;
}
.article_title .article-author {
  font-size: 12px;
  font-weight: 550;
}

.header-focus .el-button {
  padding: 8px 10px;
  font-size: 12px;
}

.article-avatar {
  margin-top: 3px;
}

.practice-header-bloginfo {
  margin-top: 16px;
}

.audth-user-image {
  float: left;
}
.blog-info-detail {
  float: left;
  margin-left: 10px;
}

.blog-info-detail .article_title {
  color: #333;
  font-weight: 500;
  text-decoration: none;
}

.practice_header .header-focus {
  float: right;
}

.mark_content {
  margin-top: 26px;
}

.toolactive {
  color: #fff;
  background-color: #ec7259 !important;
}
.practice_content {
  background: white;
  padding-left: 15px;
  padding-top: 20px;
  padding-bottom: 15px;
  margin-bottom: 15px;
  margin-top: 15px;
  padding-right: 15px;
}
.practice_left_show {
  position: fixed;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 600px;
  width: 60px;
  margin-left: -75px;
  top: 86px;
  z-index: 2;
}

.svgcostClass {
  fill: currentColor;
  vertical-align: middle;
}
.tool_item,
.tool_crcle {
  display: flex;
  align-items: center;
}

.tool_item {
  position: relative;
  flex-direction: column;
  margin-bottom: 16px;
  cursor: pointer;
  color: #969696;
}
.tool_crcle {
  justify-content: center;
  width: 48px;
  height: 48px;
  font-size: 18px;
  border-radius: 50%;
  box-shadow: 0 2px 10px rgb(0 0 0 / 5%);
  background-color: #fff;
}
.tool_item_image {
  width: 23px;
  margin-top: 3px;
}
</style>

<script>
import showdown from "showdown";
import "~/assets/css/markdown.css";
import realPractice from "@/api/realpractice";
import useract from "@/api/useract";
import userApi from "@/api/user";

export default {
  data () {
    return {
      title: "开源实践网",
      goodslect: false,
      showComment:false,
      commentList: [],
      isLogin:false,
      loginInfo:{},
    };
  },
  head () {
    return {
       script: [
        { src: 'https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/velocity/1.5.2/velocity.js', async: true, defer: true }
      ],
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.pitem.descrb,
        },
        {
          hid: "og:description",
          content: this.pitem.descrb,
        },
      ],
    };
  },
  asyncData ({ params, error }) {
    return realPractice.getRealPraticeDetail(params.id).then((response) => {
      return {
        pitem: response.data.pitem,
        title: response.data.pitem.title,
      };
    });
  },
  mounted () {
    this.getUserPraticeGood();
    window.myVueComm = this;
    setTimeout(function () {
      myVueComm.initCommentEditor();
    }, 10)

    var token = localStorage.getItem("redclass_token");
    var userStr = localStorage.getItem("redclass_user");
    if (!(token && token != "undefined") || !(userStr && userStr != "undefined")) {
      this.isLogin = false;
    } else {
      this.loginInfo = JSON.parse(userStr)
      this.isLogin = true;
    };
  },
  methods: {
    cbeforeEnter: function (el) {
      el.style.height = '0px';
    },
    center: function (el, done) {
      var Velocity = $.Velocity;
      Velocity(el, { height: '34px' }, 300, function () { done() })
    },
     cleave: function (el, done) {
      var Velocity = $.Velocity;
      Velocity(el, { height: '0px' }, 300, function () { done() })
    },

    cancleCommentClick() {
      this.showComment = false;
    },

     getUploadImageToken(isForce) {
      if (!this.isLogin) {
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
      userApi.getUploadImageToken().then((response) => {
        this.uploadToken = response.data.token;
      });
    },

    initCommentEditor () {
      let editor = this.$wangeditor("#comment-editor");
      this.editor = editor;
      editor.config.uploadImgMaxLength = 1;
      editor.config.uploadImgServer = "/api/ucenter/uploadImage";
      editor.config.uploadFileName = "file";
      editor.config.placeholder = "写下你的评论...";
      editor.config.focus = false;
      editor.config.zIndex = 100;
      editor.config.height = 120;
      editor.config.showFullScreen = false;

      editor.config.menus = [
        'bold',
        'link',
        'emoticon',
        'image',
      ]

      editor.config.onfocus = function (newHtml) {
        window.console.log("ffffff");
        myVueComm.getUploadImageToken(true);
        myVueComm.showComment = true;
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
      // editor.config.onchange = function (newHtml) {};
      editor.create();
    },
    //分页切换的方法
    //参数是页码数
    handleClick (tab, event) {
      console.log(tab, event);
    },

    getUserPraticeGood () {
      useract.getUserPraticeGood(this.pitem.id).then((response) => {
        this.goodslect = response.data.good;
      });
    },

    addUserPraticeGood () {
      useract.addUserPraticeGood(this.pitem.id).then((response) => {
        this.pitem.good++;
        this.goodslect = true;
      });
    },

    cancleleUserPraticeGood () {
      useract.cancleleUserPraticeGood(this.pitem.id).then((response) => {
        this.pitem.good--;
        this.goodslect = false;
      });
    },

    goodBtnClick () {
      if (this.goodslect) {
        this.cancleleUserPraticeGood();
      } else {
        this.addUserPraticeGood();
      }
    },

    changeMarkToHtml (content) {
      var converter = new showdown.Converter();
      return converter.makeHtml(content);
    },
  },
  computed: {},
};
</script>
