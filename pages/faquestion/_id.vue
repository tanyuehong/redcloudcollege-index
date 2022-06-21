<template>
  <div class="main_global_bg">
    <div class="container">
      <div class="qustin_detall_content">
        <div class="ask_detail_content">
          <div class="ask-detail-lefte">
            <div class="ui breadcrumb red_breadcrumb">
              <nuxt-link :to="{ name: 'faquestion' }" class="section">
                实践问答
              </nuxt-link>
              <span class="glyphicon glyphicon glyphicon-menu-right" aria-hidden="true"></span>
              <div class="active section">问题详情</div>
            </div>
            <div>
              <div class="question_info">
                <nuxt-link :to="'/user/' + qdetail.uid + '/blog'">
                  <img class="vam user-head-image" :src="qdetail.avatar" width="30" height="30" alt />
                  <span class="ml5">{{ qdetail.nickname }}</span>
                </nuxt-link>
                <span class="qustion-top-item">发布于 {{ qdetail.gmtCreate }}</span>
                <span class="glyphicon glyphicon-star-empty qustion-top-item" aria-hidden="true">
                </span>
                <span class="qustion-good-num">收藏 {{ qdetail.collect }} </span>

                <span class="top-tips" v-if="qdetail.state == 9">已解决</span>
                <div class="qustion-right-view">
                  浏览 {{ qdetail.readcount }}
                </div>
              </div>
              <div>
                <h2 class="title_header">{{ qdetail.title }}</h2>
                <div class="ui red label horizontal" data-tooltip="置顶">
                  顶
                </div>
                <div class="ui orange label horizontal" data-tooltip="热门">
                  热
                </div>
              </div>

              <div class="extra question-tags mt10" v-if="qdetail.tags">
                <a class="ui horizontal basic label popup-tag" href="https://www.oschina.net/question/tag/ruby"
                  target="_blank" v-for="tag in qdetail.tags" :key="tag.id">
                  <img :src="tag.img" v-if="tag.img" />{{ tag.name }}
                </a>
              </div>

              <div class="qustion_content" v-html="qdetail.content"></div>
              <div class="qustion_info">
                <div class="ui_center_button">
                  <el-button plain type="primary" :icon="collectIcon" @click="collectBtnClick">{{ collectString }}
                  </el-button>
                  <div class="ui_group_button">
                    <el-dropdown class="sort">
                      <el-button plain type="primary" icon="el-icon-share">分享</el-button>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>微博</el-dropdown-item>
                        <el-dropdown-item>QQ</el-dropdown-item>
                        <el-dropdown-item>微信</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </div>
                </div>
                <ul class="ask-issue-tool fbselect">
                  <span class="answer_span" @click="answerBtnClick"><i class="icon ic_question_reply"></i>写回答</span>
                  <li class="up_down_wrap wrapdisLike ask-info-item">
                    <span class="vote_span disLike" @click="goodQustionClick" v-bind:class="{ like: goodqustion }">

                      <i class="icon icon_vote_up"></i>好问题<em class="qustion-good-num" v-if="qdetail.good > 0">{{
                          qdetail.good
                      }}</em>
                      <!---->
                    </span>
                    <span class="vote_span2" @click="jianyiDlog = true"><i class="icon icon_vote_down"></i>提建议
                    </span>
                    <el-dialog title="哪些方面需要改进" :visible.sync="jianyiDlog" :close-on-click-modal="false" center>
                      <div class="jubao-content">
                        <el-radio-group v-model="jianyilable">
                          <div class="jubao-radio-content">
                            <div class="jubao-lefte-items">
                              <el-radio :label="1" class="jubao-radio-item">提问应符合社区要求</el-radio>
                              <el-radio :label="2" class="jubao-radio-item">请选择合适的标签</el-radio>
                              <el-radio :label="3" class="jubao-radio-item">请详细说明问题背景</el-radio>
                            </div>

                            <div class="jubao-right-items">
                              <el-radio :label="4" class="jubao-radio-item">请采纳用户回复</el-radio>
                              <el-radio :label="5" class="jubao-radio-item">请回答用户的提问</el-radio>
                              <el-radio :label="6" class="jubao-radio-item">请提交代码</el-radio>
                            </div>
                          </div>
                        </el-radio-group>
                        <div class="accusation-reason mb15">
                          <h2 class="accusation-secondary-title">建议详情（选填）</h2>
                          <div class="accusation-input mt10">
                            <el-input type="textarea" v-model="jianyiContent" placeholder="请详细描述您的建议，以便帮助更多的人"
                              maxlength="200" :rows="6" show-word-limit>
                            </el-input>
                          </div>
                        </div>
                      </div>
                      <div slot="footer" class="dialog-footer">
                        <el-button @click="jianyiDlog = false">取 消</el-button>
                        <el-button type="primary" @click="qustionJianYiConfirm">确 定</el-button>
                      </div>
                    </el-dialog>
                  </li>
                  <li class="ask-info-item" @click="jubaoBtnClick(qdetail.qid, '问题')">
                    <i class="icon icon_vote_jubao"></i>举报
                  </li>
                  <li class="ask-info-item" v-if="qdetail.uid == loginInfo.id">
                    <el-dropdown szie="mini" @command="questionClickCommend">
                      <span class="el-dropdown-link drop-menu">
                        <i class="icon icon_more"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item :command="beforeHandleCommand('d', qdetail)">删除</el-dropdown-item>
                        <el-dropdown-item :command="beforeHandleCommand('c', qdetail)">已解决</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </li>
                  <el-dialog title="确认删除问题吗？" :visible.sync="questionDialogVisible" width="30%" center>
                    <div class="tac">
                      <span>删除后您的问题将不会出现在问题列表中，你将不能获得别人的帮助，请三思哦~</span>
                    </div>
                    <span slot="footer" class="dialog-footer">
                      <el-button @click="deleteQuestion(qdetail)">删 除</el-button>
                      <el-button type="primary" @click="questionDialogVisible = false">再等等</el-button>
                    </span>
                  </el-dialog>

                  <el-dialog title="确认将问题设为已解决吗？" :visible.sync="fixDialogVisible" width="30%" center>
                    <div class="tac">
                      <span>为了你的问题能帮助更多的人，请设置或者编写最佳答案，没有最佳答案的问题，将不能设置为已解决哦~</span>
                    </div>
                    <span slot="footer" class="dialog-footer">
                      <el-button @click="fixDialogVisible = false">再等等</el-button>
                      <el-button type="primary" @click="fixQuestion(qdetail)">设为已解决</el-button>
                    </span>
                  </el-dialog>

                  <el-dialog title="举报反馈" :visible.sync="jubiaoDlog" :close-on-click-modal="false" center>
                    <div class="jubao-content">
                      <div class="accusation-type">
                        <h2 class="accusation-secondary-title mb10">举报类型（必选）</h2>
                        <ul>
                          <li class="accusation-item" v-bind:class="{ jubaoSlect: jubaoTypeIndex == 1 }"
                            @click="jubaoTypeIndex = 1">诱导点赞、关注</li>
                          <li class="accusation-item" v-bind:class="{ jubaoSlect: jubaoTypeIndex == 2 }"
                            @click="jubaoTypeIndex = 2">抄袭、刷量作弊</li>
                          <li class="accusation-item" v-bind:class="{ jubaoSlect: jubaoTypeIndex == 3 }"
                            @click="jubaoTypeIndex = 3">有害信息</li>
                          <li class="accusation-item" v-bind:class="{ jubaoSlect: jubaoTypeIndex == 4 }"
                            @click="jubaoTypeIndex = 4">不友善内容</li>
                          <li class="accusation-item" v-bind:class="{ jubaoSlect: jubaoTypeIndex == 5 }"
                            @click="jubaoTypeIndex = 5">垃圾广告信息</li>
                          <li class="accusation-item" v-bind:class="{ jubaoSlect: jubaoTypeIndex == 6 }"
                            @click="jubaoTypeIndex = 6">低质内容</li>
                        </ul>
                      </div>
                      <div class="accusation-reason">
                        <h2 class="accusation-secondary-title mb10">举报详情（选填）</h2>
                        <div class="accusation-input">
                          <el-input type="textarea" v-model="jubaoContent" placeholder="请详细描述举报原因，我们将第一时间核实处理"
                            maxlength="200" :rows="6" show-word-limit>
                          </el-input>
                        </div>
                      </div>
                    </div>
                    <div slot="footer" class="dialog-footer">
                      <el-button @click="jubiaoDlog = false">取 消</el-button>
                      <el-button type="primary" @click="jubaoCommitBtnClick">确 定</el-button>
                    </div>
                  </el-dialog>
                </ul>
              </div>
            </div>
          </div>

          <div id="answer-list" class="qustion-answer-list" v-if="replyList.length">
            <h4 class="reply-title">
              <span><em class="em1">{{ replyList.length }}</em>条回答</span>
              <span class="reply_wrap">
                <em class="em2" :class="{ cur: answertype }" @click="clickAnserType(true)">默认</em>
                <em class="em2" :class="{ cur: answertype == false }" @click="clickAnserType(false)">最新</em>
              </span>
            </h4>

            <div class="qustion-answer-content">
              <ul class="qustion-anser-list">
                <li class="answer-list-item" v-for="(item, index) in replyList" :key="item.id">
                  <div class="answer-item-userinfo">
                    <nuxt-link :to="'/user/' + item.uid + '/blog'" class="anser-info">
                      <img class="vam user-head-image" :src="item.avatar" width="30" height="30" alt />
                      <span class="ml5"> {{ item.username }}</span>
                      <span class="qustion-top-item anser-time"> {{ item.gmtCreate }}</span>
                    </nuxt-link>

                    <span class="good_answer" v-if="item.state == 9">
                      <span class="glyphicon glyphicon-heart"></span>
                      最佳回答
                    </span>

                  </div>

                  <div class="answer-item-content" v-html="item.content"></div>

                  <div class="reply_content_tool">
                    <span class="mr20px fbselect" @click="repplaybtnclinck(item, index)">
                      <i class="icon icon_comment"></i>
                      评论
                    </span>
                    <div class="vote-box vote_like">
                      <span v-bind:class="{ like: item.goodreply }" @click="goodReplyClick(item)"
                        class="vote_span vote_spaned">
                        <i class="icon icon_vote_up"></i>解决<em class="qustion-good-num">{{ item.good }}</em></span>
                      <span class="vote_span2" @click="badReplyClick(item)" v-bind:class="{ like: item.badreply }"><i
                          class="icon icon_vote_down"></i>无用<em class="qustion-good-num" v-if="item.bad > 0">{{ item.bad
                          }}</em>
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

                    <span class="li_more" @click="jubaoBtnClick(item.id, '回答')">
                      <i class="icon icon_ask_report"></i>
                      举报
                    </span>

                    <span v-if="item.uid == loginInfo.id">
                      <el-dropdown szie="mini" @command="replyClickCommend">
                        <span class="el-dropdown-link drop-menu">
                          <i class="icon icon_more"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item :command="beforeHandleCommand('d', item)">删除</el-dropdown-item>
                          <el-dropdown-item :command="beforeHandleCommand('g', item)">{{ goodReplyString(item) }}
                          </el-dropdown-item>
                        </el-dropdown-menu>
                      </el-dropdown>
                    </span>
                  </div>
                  <el-dialog title="确认取消最佳回答吗？" :visible.sync="cgoodDialogVisible" width="30%" center>
                    <div class="tac">
                      <span>最佳答案能够有更明确的提示，正确的回答将帮助其他有同样问题的同学，并且最佳答案会奖励该问题回答者，请尽量选择正确的回答哈~</span>
                    </div>
                    <span slot="footer" class="dialog-footer">
                      <el-button type="primary" @click="questionGoodReply(item, 2)">确 认</el-button>
                      <el-button @click="cgoodDialogVisible = false">再等等</el-button>
                    </span>
                  </el-dialog>
                  <el-dialog title="确认设为最佳回答吗？" :visible.sync="goodDialogVisible" width="30%" center>
                    <div class="tac">
                      <span>最佳答案能够有更明确的提示，正确的回答将帮助其他有同样问题的同学，并且最佳答案会奖励该问题回答者，请尽量选择正确的回答哈~</span>
                    </div>
                    <span slot="footer" class="dialog-footer">
                      <el-button @click="goodDialogVisible = false">再等等</el-button>
                      <el-button type="primary" @click="questionGoodReply(item)">确 认</el-button>
                    </span>
                  </el-dialog>
                  <el-dialog title="确认删除回答吗？" :visible.sync="deleteDialogVisible" width="30%" center>
                    <div class="tac">
                      <span>删除后您的回答将不会出现在该问题下,请三思哦~</span>
                    </div>
                    <span slot="footer" class="dialog-footer">
                      <el-button @click="deleteQuestionReply(item, 1)">删 除</el-button>
                      <el-button type="primary" @click="deleteDialogVisible = false">再等等</el-button>
                    </span>
                  </el-dialog>

                  <transition v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter"
                    v-on:leave="leave" v-bind:css="false">
                    <div :id="'replayedtor' + index" class="replay-editor" v-if="item.showeditor" :key="item.id">
                    </div>
                  </transition>

                  <div class="reply-comment-tool" v-if="item.showeditor">
                    <span @click="repplaybtnclinck(item, index)">取消</span>
                    <div class="comment-btn" @click="replyCommntClick(item, index)">评论</div>
                  </div>

                  <div class="reply-comment-container" v-if="item.comments">
                    <div class="reply-comment-item" v-for="(comment, cindex) in item.comments" :key="comment.id">
                      <div class="answer-item-userinfo">
                        <img class="vam user-head-image" :src="comment.avatar" width="30" height="30" alt />
                        <span class="ml5"> {{ comment.name }}</span>
                        <span class="comment-replyment" v-if="comment.toname">回复</span>
                        <span v-if="comment.toname">{{ comment.toname }}</span>
                        <span class="qustion-top-item">{{ comment.gmtCreate }}</span>
                      </div>
                      <div class="answer-item-content" v-html="comment.content"></div>
                      <div class="comment-tool-bar fbselect">
                        <span class="mr15" v-bind:class="{ goodcomment: comment.goodcomment }"
                          @click="goodCommentClick(comment)"><i class="icon icon_vote_up"></i>{{
                              commentGood(comment.good)
                          }}</span>
                        <span class="mr15" @click="commentbtnclinck(comment, cindex)">回复</span>
                        <span class="mr15" @click="jubaoBtnClick(comment.id, '评论')">
                          <i class="icon icon_ask_report"></i>举报
                        </span>
                        <span v-if="comment.uid == loginInfo.id">
                          <el-dropdown szie="mini" @command="commentClickCommend">
                            <span class="el-dropdown-link drop-menu">
                              <i class="icon icon_more"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                              <el-dropdown-item :command="beforeHandleCommand('d', comment)">删除</el-dropdown-item>
                            </el-dropdown-menu>
                          </el-dropdown>
                        </span>
                      </div>
                      <el-dialog title="确认删除评论吗？" :visible.sync="deleteCommentVisible" width="30%" center>
                        <div class="tac">
                          <span>删除后您的评论将不会出现在该回答下,请三思哦~</span>
                        </div>
                        <span slot="footer" class="dialog-footer">
                          <el-button @click="deleteCommentReply(comment, item)">删 除</el-button>
                          <el-button type="primary" @click="deleteCommentVisible = false">再等等</el-button>
                        </span>
                      </el-dialog>

                      <transition v-on:before-enter="cbeforeEnter" v-on:enter="center" v-on:after-enter="cafterEnter"
                        v-on:leave="cleave" v-bind:css="false">
                        <div :id="'creplayedtor' + cindex" class="c-replay-editor" v-if="comment.showeditor"
                          :key="comment.id">
                        </div>
                      </transition>
                      <div class="reply-comment-tool r-comment" v-if="comment.showeditor">
                        <span @click="commentbtnclinck(comment, cindex)">取消</span>
                        <div class="comment-btn" @click="creplyCommntClick(comment, item, cindex)">提交</div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="answer-qustion-editor">
            <div id="answer-editor"></div>
            <div class="answer-ediot-detail">
              <span class="report-common-question">报告相同问题？</span>
              <el-checkbox v-model="checked" class="answer-btn-check">关注问题</el-checkbox>
              <el-button type="primary" class="answer-btn-style" @click="submitAnserClick">提交</el-button>
            </div>
          </div>
        </div>

        <div class="ask-detail-right">
          <div>
            <div class="user_header">
              <span class="addTitle"><i class="icon icon_info"></i>{{ loginTitle }}</span>
              <nuxt-link :to="{ name: 'faquestion-ask' }" class="addQuestion">
                提问题
              </nuxt-link>
            </div>

            <div class="user-center-info" v-if="this.isLogin">
              <ul class="fa-info-list">
                <li class="fa-infolist-item">
                  <span>收益(元)</span>
                  <em class="fa-num">{{ NumFormat }}</em>
                </li>
                <li class="fa-infolist-item">
                  <span>被采纳</span>
                  <em class="fa-num">{{ userAskInfo.adopt }}</em>
                </li>
                <li class="fa-infolist-item">
                  <span>提问</span>
                  <em class="fa-num">{{ userAskInfo.qcount }}</em>
                </li>
                <li class="fa-infolist-item">
                  <span>被点赞</span>
                  <em class="fa-num">{{ userAskInfo.qgood + userAskInfo.rgood + userAskInfo.cgood }}</em>
                </li>
                <li class="fa-infolist-item">
                  <span>回答</span>
                  <em class="fa-num">{{ userAskInfo.qanswer }}</em>
                </li>
                <li class="fa-infolist-item">
                  <span>被回复</span>
                  <em class="fa-num">{{ userAskInfo.ccomment + userAskInfo.crComment }}</em>
                </li>
              </ul>
            </div>

            <div class="ask-top-wrap">
              <div class="user_header">
                <span class="ask-message-tips">问答通知</span>
                <nuxt-link :to="{ name: 'about-message' }" class="ask-message-more">
                  查看更多
                </nuxt-link>
              </div>
              <nuxt-link :to="'/faquestion/1481862372760240130'" class="ask-top-warper-item" target="_blank"
                rel="nofollow noopener noreferrer">◇ 欢迎大家的建议和反馈</nuxt-link>
              <nuxt-link :to="'/about/detail/1523552231247499265'" class="ask-top-warper-item">◇ 开源实践问答上线</nuxt-link>
            </div>
          </div>

          <div class="qustion-type-warper">
            <div class="qustion-tag-header">
              <span> {{ qdetail.typeString }}</span>
              <span> > 前端 </span>
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
import userApi from "@/api/user";
import askApi from "@/api/ask";
import askServerApi from "@/api/askServerReq";

const qiniu = require("qiniu-js");

export default {
  data () {
    return {
      checked: true,
      answertype: true,
      editor: {},
      loginInfo: {},
      userAskInfo: {},
      uploadToken: "",
      loginTitle: "点击登录",
      goodqustion: false,
      collectState: false,
      forbiden: true,
      isLogin: false,
      collectIcon: "el-icon-star-off",
      collectString: "收藏",
      jianyilable: "",
      jubiaoDlog: false,
      jianyiDlog: false,
      jianyiContent: "",
      jubaoContent: "",
      jubaoTypeIndex: 0,
      jubaoId: "",
      jubaotype: "",
      deleteDialogVisible: false,
      deleteCommentVisible: false,
      questionDialogVisible: false,
      fixDialogVisible: false,
      goodDialogVisible: false,
    };
  },

  head () {
    return {
      script: [
        { src: 'https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/velocity/1.5.2/velocity.js', async: true, defer: true }
      ],
      title: this.qdetail.title + "-开源实践问答",
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: "技术问答,技术答疑,生活问题,我问你答，开源实践问答",
        },
        {
          hid: 'description',
          name: 'description',
          content: this.descrb,
        },
        {
          hid: 'og:description',
          content: this.descrb,
        },
      ],
    }
  },

  asyncData ({ params, error }) {
    return askServerApi.getQuestionDetails(params.id).then((response) => {
      return {
        qdetail: response.data.qdetail,
        replyList: response.data.replyList,
        descrb: '开源实践问答为您找到 ' + response.data.qdetail.title + ' 等相关问题答案，如果想了解更多关于 ' + response.data.qdetail.title + ' 问题等相关问答，请访问开源实践问答。',
      }
    })
  },

  mounted () {
    var qId = this.$route.params.id;
    var token = localStorage.getItem("redclass_token");
    var userStr = localStorage.getItem("redclass_user");
    if (!(token && token != "undefined") || !(userStr && userStr != "undefined")) {
      this.isLogin = false;
    } else {
      this.loginTitle = "我的问答";
      this.loginInfo = JSON.parse(userStr)
      this.isLogin = true;
      this.getUserAskInfo();
    };
    window.myVueComm = this;
    setTimeout(function () {
      myVueComm.init_wangeditor();
    }, 10)
    this.getUploadImageToken(false);
    this.getUserGoodQustionState(qId);
    this.getUserQustionCollectState(qId);
    this.getUserGoodReplyState();
    window.gotoPage = {
      path: `/faquestion/` + qId,
    };
  },

  computed: {
    // 计算属性的 getter
    commentGood () {
      return function (goodCount) {
        if (goodCount > 0) {
          return goodCount;
        } else {
          return "赞";
        }
      }
    },

    goodReplyString () {
      return function (item) {
        if (item.state == 9) {
          return "取消最佳";
        } else {
          return "最佳";
        }
      }
    },

    // 金额显示.00格式
    NumFormat () {
      var value = this.userAskInfo.qmoney
      if (!value) return '0.00'
      value = value.toFixed(2)
      var intPart = Math.trunc(value)// 获取整数部分
      var intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') // 将整数部分逢三一断
      var floatPart = '.00' // 预定义小数部分
      var value2Array = value.split('.')
      // =2表示数据有小数位
      if (value2Array.length === 2) {
        floatPart = value2Array[1].toString() // 拿到小数部分
        if (floatPart.length === 1) { // 补0,实际上用不着
          return intPartFormat + '.' + floatPart + '0'
        } else {
          return intPartFormat + '.' + floatPart
        }
      } else {
        return intPartFormat + floatPart
      }
    }
  },

  methods: {
    beforeHandleCommand (commd, item) {
      return {
        'command': commd,
        'item': item
      }
    },

    questionClickCommend (command) {
      if (command.command == 'd') {
        this.questionDialogVisible = true;
      }
      if (command.command == 'c') {
        this.fixDialogVisible = true;
      }

    },

    replyClickCommend (command) {
      if (command.command == 'd') {
        this.deleteDialogVisible = true;
      }
      if (command.command == 'g') {
        this.goodDialogVisible = true;
      }
    },

    commentClickCommend (command) {
      if (command.command == 'd') {
        this.deleteCommentVisible = true;
      }
    },

    fixQuestion (qItem) {
      this.fixDialogVisible = false;
      askApi.fixQuestion(qItem.qid).then((response) => {
        if (response.data.sucess) {
          this.qdetail.state = response.data.state;
          this.$message({
            message: response.data.tips,
            type: "success",
            duration: 2000,
          });
        } else {
          this.$message({
            message: response.data.tips,
            type: "info",
            duration: 2000,
          });
        }

      });

    },

    deleteQuestion (qItem) {
      this.questionDialogVisible = false;
      if (qItem.state == 99 && this.replyList.length > 0) {
        this.$message({
          message: "已经提交删除申请，无需反复提交哈",
          type: "success",
          duration: 2000,
        });
        return;
      }
      askApi.deleteQuestion(qItem.qid).then((response) => {
        if (!response.data.sucess) {
          qItem.state = 99;
          this.$message({
            message: response.data.tips,
            type: "success",
            duration: 2000,
          });
          return;
        }

        this.$message({
          message: "删除问题成功, 即将跳转问题列表页面", type: "success", duration: 2000,
          onClose: () => {
            $nuxt.$router.push({ name: "faquestion" });
          }
        });
      });
    },

    questionGoodReply (reply) {
      this.goodDialogVisible = false;
      askApi.questionGoodReply(reply.id).then((response) => {
        this.$message({
          message: "设置最佳回答成功哈！",
          type: "success",
          duration: 2000,
        });
      });
    },

    deleteQuestionReply (reply) {
      this.deleteDialogVisible = false;
      askApi.deleteQuestionReply(reply.id).then((response) => {
        this.replyList = this.replyList.filter(function (item) {
          return item.id != response.data.rId;
        });
        this.$message({
          message: "删除回答成功哈！",
          type: "success",
          duration: 2000,
        });
      });
    },

    deleteCommentReply (comment, citem) {
      this.deleteCommentReply = false;
      askApi.deleteReplyComment(comment.id).then((response) => {
        citem.comments = citem.comments.filter(function (item) {
          return item.id != response.data.cId;
        });
        this.$message({
          message: "删除评论成功哈！",
          type: "success",
          duration: 2000,
        });
      });
    },
    getUserAskInfo () {
      askApi.getUserAskInfo().then((response) => {
        this.userAskInfo = response.data.askInfo;
      });
    },
    jubaoBtnClick (wId, jubaotype) {
      window.console.log(wId);
      this.jubaotype = jubaotype;
      this.jubaoId = wId;
      this.jubiaoDlog = true;
    },
    jubaoCommitBtnClick () {
      askApi.submitUserWaring({ "wid": this.jubaoId, "uid": this.loginInfo.id, "type": this.jubaoTypeIndex, "content": this.jubaoContent, "jubaotype": this.jubaotype }).then((response) => {
        this.$message({
          message: "举报成功！我们将尽快处理哈",
          type: "success",
          duration: 2000,
        });
      });
      this.jubiaoDlog = false;

    },
    qustionJianYiConfirm () {
      askApi.submitQuestionAdvise({ "qid": this.qdetail.qid, "uid": this.loginInfo.id, "type": this.jianyilable, "content": this.jianyiContent }).then((response) => {
        this.$message({
          message: "提交成功！",
          type: "success",
          duration: 2000,
        });
      });
      this.jianyiDlog = false;
    },
    updateRelpyState (rId, type) {
      askApi.updateRelpyState(rId, type).then((response) => {
      })
    },
    goodReplyClick (item) {
      if (this.forbiden) {
        this.forbiden = false;
        if (item.goodreply) {
          item.goodreply = false;
          item.good = item.good - 1;
          this.updateRelpyState(item.id, 3);
        } else {
          item.good = item.good + 1;
          item.goodreply = true;
          if (item.badreply) {
            item.badreply = false;
            item.bad = item.bad - 1;
            this.updateRelpyState(item.id, 6);
          } else {
            this.updateRelpyState(item.id, 1);
          }
        }
      }
      setTimeout(function () {
        window.myVueComm.forbiden = true;
      }, 500)
    },

    goodCommentClick (comment) {
      window.console.log("ffffffffff");
      if (this.forbiden) {
        this.forbiden = false;
        if (comment.goodcomment == 0) {
          comment.goodcomment = 1;
          comment.good++;
          askApi.addQcommentGood(comment.id).then((response) => { });
        } else {
          comment.goodcomment = 0;
          comment.good--;
          askApi.cancleQcommentGood(comment.id).then((response) => { });
        }
      }
      setTimeout(function () {
        window.myVueComm.forbiden = true;
      }, 500)
    },

    badReplyClick (item) {
      if (this.forbiden) {
        this.forbiden = false;
        if (item.badreply) {
          item.badreply = false;
          item.bad = item.bad - 1;
          this.updateRelpyState(item.id, 4);
        } else {
          item.bad = item.bad + 1;
          item.badreply = true;
          if (item.good) {
            item.good = item.good--;
            item.goodreply = false;
            this.updateRelpyState(item.id, 5);
          } else {
            this.updateRelpyState(item.id, 2);
          }
        }
      }
      setTimeout(function () {
        window.myVueComm.forbiden = true
      }, 500)
    },
    collectBtnClick () {
      if (this.collectState) {
        this.cancleUserQustionCollect();
      } else {
        this.addUserQustionCollect();
      }
      this.collectState = !this.collectState;
      this.collectIcon = this.collectState ? "el-icon-star-on" : "el-icon-star-off";
      this.collectString = this.collectState ? "已收藏" : "收藏";
    },
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

    getUserQustionCollectState (qId) {
      askApi.getUserQustionCollectState(qId).then((response) => {
        this.collectState = response.data.collectState;
        this.collectIcon = this.collectState ? "el-icon-star-on" : "el-icon-star-off";
        this.collectString = this.collectState ? "已收藏" : "收藏";
      })
    },

    getUserGoodReplyState () {
      if (!this.replyList) {
        return;
      }
      var list = [];
      for (var j = 0; j < this.replyList.length; j++) {
        list.push(this.replyList[j].id);
      }
      askApi.getUserGoodReplyState(list).then((response) => {
        var goodList = response.data.goodList;
        if (!goodList) {
          return;
        }
        for (var j = 0; j < this.replyList.length; j++) {
          var rItem = this.replyList[j];
          for (var i = 0; i < goodList.length; i++) {
            if (goodList[i].rid == rItem.id) {
              if (goodList[i].type == 1) {
                rItem.goodreply = true;
              }
              if (goodList[i].type == 2) {
                rItem.badreply = true;
              }
              break;
            }
          }
        }
      })
    },

    addUserQustionCollect () {
      askApi.addUserQustionCollect(this.qdetail.qid).then((response) => {
        this.qdetail.collect++;
        this.$message({
          message: "问题收藏成功！",
          type: "success",
          duration: 2000,
        });
      })
    },

    cancleUserQustionCollect () {
      askApi.cancleUserQustionCollect(this.qdetail.qid).then((response) => {
        this.qdetail.collect--;
        window.console.log("ddd");
        this.$message({
          message: "取消收藏成功！",
          type: "success",
          duration: 2000,
        });
      })
    },

    getUserGoodQustionState (qId) {
      askApi.getUserGoodQustionState(qId).then((response) => {
        this.goodqustion = response.data.goodqustion;
      })
    },

    addUserGoodQustion () {
      askApi.addUserGoodQustion(this.qdetail.qid).then((response) => {
      })
    },

    cancleUserGoodQustion () {
      askApi.cancleUserGoodQustion(this.qdetail.qid).then((response) => {
      })
    },

    beforeEnter: function (el) {
      el.style.width = '706px';
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
      Velocity(el, { height: '0px' }, 300, function () { done() })
    },

    cbeforeEnter: function (el) {
      el.style.width = '666px';
      el.style.height = '0px';
    },

    center: function (el, done) {
      var Velocity = $.Velocity;
      Velocity(el, { height: '180px' }, 300, function () { done() })
    },

    cafterEnter: function (el) {
      this.init_commenteditor();
    },

    cleave: function (el, done) {
      var Velocity = $.Velocity;
      Velocity(el, { height: '0px' }, 300, function () { done() })
    },

    clickAnserType (type) {
      if (type == this.answertype) {
        return;
      }
      this.answertype = type;
      for (var j = 0; j < this.replyList.length; j++) {
        var item = this.replyList[j];
        item.showeditor = false;
        if (item.editor) {
          item.editor.destroy();
          item.editor = null;
        }
        if (item.comments) {
          for (var i = 0; i < item.comments.length; i++) {
            var citem = item.comments[i];
            citem.showeditor = false;
            if (citem.editor) {
              citem.editor.destroy();
              citem.editor = null;
            }
          }
        }
      }

      if (this.answertype) {
        askApi.getQustionReplyList(this.qdetail.qid, 1).then((response) => {
          this.replyList = response.data.replyList;
          this.getUserGoodReplyState();
        })
      } else {
        askApi.getQustionReplyList(this.qdetail.qid, 2).then((response) => {
          this.replyList = response.data.replyList;
          this.getUserGoodReplyState();
        })
      }
    },

    getUploadImageToken (isForce) {
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

    answerBtnClick () {
      document.getElementById("answer-editor").scrollIntoView();
      this.editor.config.focus = true;
      this.editor.txt.html("");
      this.getUploadImageToken(true);
    },

    creplyCommntClick (item, rItem, cindex) {
      if (!item.editor || item.editor.txt.html().length < 6) {
        this.$message({ message: "输入的内容太短了哦！", type: "error", duration: 2000 });
        return;
      }
      askApi
        .submitQuestionReplyComment({
          content: item.editor.txt.html(),
          rid: rItem.id,
          uid: this.loginInfo.id,
          touid: item.uid,
        })
        .then((response) => {
          rItem.comments.unshift(response.data.comment);
          this.$message({
            message: "问题回答成功哦",
            type: "success",
            duration: 2000,
          });
        });
      this.commentbtnclinck(item, cindex);
    },

    replyCommntClick (item, index) {
      if (!item.editor || item.editor.txt.html().length < 6) {
        this.$message({ message: "输入的内容太短了哦！", type: "error", duration: 2000 });
        return;
      }
      askApi
        .submitQuestionReplyComment({
          content: item.editor.txt.html(),
          rid: item.id,
          uid: this.loginInfo.id,
        })
        .then((response) => {
          item.comments.unshift(response.data.comment);
          item.editor.txt.html("");
          this.$message({
            message: "问题回答成功哦",
            type: "success",
            duration: 2000,
          });
        });
      this.repplaybtnclinck(item, index);
    },

    submitAnserClick () {
      if (this.editor.txt.html().length <= 6) {
        this.answerBtnClick();
        this.$message({ message: "输入的内容太短了哦！", type: "error", duration: 2000 });
        return;
      }
      askApi
        .submitQuestionReply({
          content: this.editor.txt.html(),
          qid: this.qdetail.qid,
          uid: this.loginInfo.id,
        })
        .then((response) => {
          this.editor.txt.html("");
          this.replyList.unshift(response.data.reply);
          this.$message({
            message: "问题回答成功哦",
            type: "success",
            duration: 2000,
          });
        });
    },

    init_wangeditor () {
      let editor = this.$wangeditor("#answer-editor");
      this.editor = editor;
      editor.config.uploadImgMaxLength = 1;
      editor.config.uploadImgServer = "/api/ucenter/uploadImage";
      editor.config.uploadFileName = "file";
      editor.config.placeholder = "请用专业明晰的语言写出您的回答";
      editor.config.focus = false;
      editor.config.zIndex = 100;
      editor.config.height = 210;

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
      // editor.config.onchange = function (newHtml) {};
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

    commentbtnclinck (item, index) {
      item.commnetId = "#creplayedtor" + index;
      window.commentItem = item;
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
      let editor = this.$wangeditor(item.commnetId);
      item.editor = editor;
      editor.config.uploadImgMaxLength = 1;
      editor.config.uploadImgServer = "/api/ucenter/uploadImage";
      editor.config.uploadFileName = "file";
      editor.config.placeholder = "请用专业明晰的语言，指出问题，提出建议";
      editor.config.height = 150;
      editor.config.zIndex = 100;

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
      };
      editor.create();
    },

    init_commenteditor () {
      window.myVueComm = this;
      var item = window.commentItem;
      let editor = this.$wangeditor(item.commnetId);
      item.editor = editor;
      editor.config.uploadImgMaxLength = 1;
      editor.config.uploadImgServer = "/api/ucenter/uploadImage";
      editor.config.uploadFileName = "file";
      editor.config.placeholder = "请用专业明晰的语言，指出问题，提出建议";
      editor.config.height = 150;
      editor.config.zIndex = 100

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
      //editor.config.onchange = function (newHtml) {}};
      editor.create();
    },
  },
};
</script>

<style>
.extra.question-tags img {
  display: inline-block;
  vertical-align: baseline;
  height: 22px !important;
  border-radius: 0.14285714rem;
  padding: 2px 0;
  margin: -0.5833em 0.5em -0.5833em 0;
}

.good_answer {
  color: white;
  background: #fc5533;
  padding: 4px 6px;
  border-color: red;
  border-radius: 4px;
  float: right;
  margin-right: 20px;
}

.li_more.li_delete {
  color: red;
  font-size: 12px;
}

.answer-item-userinfo .anser-info {
  text-decoration: none;
}

.answer-item-userinfo .anser-time {
  color: #333;
  text-decoration: none;
}

.ask-top-wrap .ask-message-tips {
  font-weight: 500;
  color: #222226;
  font-size: 14px;
}

.ask-top-wrap .ask-message-more {
  font-size: 14px;
  margin-right: 0px;
  text-decoration: none;
}

.el-dialog {
  width: 480px;
}

.el-dropdown-menu {
  padding-top: 0px;
  padding-bottom: 0px;
}

.jubaoSlect {
  color: #fc5531 !important;
}

.jubao-radio-content {
  width: 410px;
  height: 100px;
  padding-left: 20px;
}

.jubao-lefte-items {
  float: left;
  width: 160px;
}

.jubao-right-items {
  float: right;
  width: 160px;
}

.jubao-radio-item {
  margin-bottom: 10px;
}

.jubao-lefte-item {
  margin-top: 10px;
}

div.accusation-type ul>li {
  display: inline-block;
  width: 110px;
  height: 32px;
  background: #f0f0f5;
  border-radius: 2px;
  text-align: center;
  color: #999aaa;
  font-size: 14px;
  line-height: 32px;
  margin-bottom: 8px;
  margin-right: 8px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
}

h2.accusation-secondary-title {
  color: #555666;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
}

.comment-replyment {
  color: #999;
  margin-left: 0px;
}

.comment-tool-bar span {
  cursor: pointer;
}

.c-replay-editor {
  margin-left: 38px;
  margin-bottom: 12px;
}

.comment-tool-bar {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 20px;
  line-height: 20px;
  margin: 12px 0 14px;
  font-size: 14px;
  margin-left: 38px;
}

.reply-comment-container {
  margin-left: 36px;
  padding-bottom: 12px;
  margin-top: 18px;
}

.reply-comment-tool {
  height: 30px;
  padding-left: 646px;
  margin-bottom: 18px;
}

.reply-comment-tool.r-comment {
  height: 30px;
  padding-left: 606px;
  margin-bottom: 0px;
  margin-top: 18px;
}

.reply-comment-item {
  margin-bottom: 6px;
}

.reply-comment-tool span {
  color: #666;
  margin-right: 12px;
  font-size: 12px;
  cursor: pointer;
}

.reply-comment-tool .comment-btn {
  bottom: 6px;
  right: 12px;
  z-index: 2;
  display: inline-block;
  width: 56px;
  height: 28px;
  border-radius: 4px;
  padding: 0;
  background: #fc5531;
  font-size: 12px;
  font-weight: 400;
  color: #fff;
  line-height: 28px;
  cursor: pointer;
  text-align: center;
}

.user-center-info {
  background: #fff;
  padding-left: 20px;
  padding-top: 15px;
  border-bottom: 1px solid #f0f0f2;
}

.user-center-info .fa-info-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.user-center-info .fa-info-list .fa-infolist-item {
  margin-right: 56px;
  margin-bottom: 16px;
  width: 98px;
  height: 22px;
  font-size: 14px;
  font-weight: 400;
  color: #222226;
  line-height: 22px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.user-center-info .fa-info-list .fa-infolist-item .fa-num {
  padding: 0 4px;
  background-color: #f5f6f7;
  font-size: 15px;
  color: #777888;
}

.vote_span.vote_span.like i,
.goodcomment i {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAhBJREFUWEfFlr1rFFEUxc/Jexs1rGgQ0TIgIgiCOrEQsm3AxmoniKCIiFhZ2Cls4weWYiXEBIsI0XmRNPoP6DZK3kQlINhYCIJiiihB4nxc2aDLZI2ZGcnum2qYOe+e35t3595LOL7o2B//BSD+wWosA1cJqYH4TuBp3yAmOG6jshsqDSD+8W0Jfr4A4GXN+oCQsRrl7KvFMhClAZK6d0+IS+ubyJQ24dmuAUh9+ERKeSZY/+gI/FDGDnQFQM4NbU2Xdy0IsO9fBgSWlLE7uwIQ1b0GiesbB5c5bcJjmw4gpw8NJlH/BwA7NgpOYFIZe2HTAZL68C2hXMsNTLmog/B+ri4jyP0L5OSB7cmW6se83eeZthKUQDNO0eh/Yl/+0ecCJGPeZRHczTMo+p6QlZQyWgnmn7fWtAFi32sVl5HfgZra2FrrPvGPvhdwf1GDIjoCb5SxhzsBJLtYG7sKF/vemudFDIpolMZuTtuv2S/QW4A42sPZt19cASxrY6vOjoDAa2XsEZcARhk75gxAiNuVwK4WNjc5IHJez4QPnAEIUKsY23QGoPTKXk4vfHYCQOCbMrbdVXueAwRCZWx7nuw5ACCPtQlP/dUNO2t+t3oBiZsqsA1nAKCc0UH40BVApFQ6xEfzn5wAKPIKg7k72XadO5B0DCpFWv1ajSAm8U4EN/SMNZ0Bckey8o7lVjgH+AVoSwkwj5cq7AAAAABJRU5ErkJggg==);
}

.vote_span.vote_span.like {
  color: #fc5533 !important;
  background: #fff !important;
  border: 1px solid #fc5533 !important;
}

.vote_span2.like {
  color: #fc5533 !important;
  background: #fff !important;
  border: 1px solid #fc5533 !important;
}

.vote_span2.like i {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAltJREFUWEfFlj9oE1Ecx7/f9y5i0Q61otWl4KRzkqoBxVHdBJOhWhdxcXAUREStm4NDxUUcBDXQeyhCoYiTgiBt7nBQ0CgobnEQK1RDbO5+ksufXpO2SazJ3XS897vv9/Peu9/7/YiIH0bsjwaAl07cBHC8BjSrjXOx8t403jWvAEVC3ingFo37tlkgBBD3BVUgAqKNq6oAy+Ndu4c+IOgpykna7tOwTgOgnI5LeMIybjDXPL4xCPxU2LSL5nWxrtNXgIqpJk6Ed6HvAIS6qk1uMrIdIPlQ285EZAAA5izjHogMgOB3bZztkQEEP2JsYBuzr37UUr7K0o80rK9ag/tpnPnIAKDUaWs69ygyAJLXte1ciw4AyGrjnooMAGTOsp2xyAAILGjjDkUGEKTilsEh3n+x0Pda0EjFzcNb+eD5r3A/8F6AvbVt+aCNuy/oBzKJgojs3EgZbm1CmNfGqXtVpyV9cABWeU/1VrI+12u2l4lPiuDK/wIg4SuqNKdzT1b8A2sZSDo54sP/CkFMuNzC/QsQwbwiLtN2HrfUgvUEvXTinkDOtjMlcElZambVuDJ/08x/aT2OdqqV4xlPjfpLpY/tdoHkbW07FzqQbIR03JZ7mfgdEZxfX5wvLeMc6QmAnBkb9ot+XiDDaxmQ/KZtZ6QnAEFyZJLnIP7dStteb+HDZgQWtXEHewYgIvQyyVlAjq5uwmeWcY71DCC4LyZSO/xS6Y0Idq9cPQsqpg8zO/eppwABxHhq1Fv6M0XKIYCLgMwoUTdocoVuzDu6iLoV7Da+4zTsVrjT+L9M+xoweNULvAAAAABJRU5ErkJggg==);
}

.qustion-good-num {
  margin-left: 0px;
}

.answer-list-item {
  margin-bottom: 16px;
  border-bottom: 1px solid rgba(28, 31, 33, 0.1);
}

.fade-enter-active,
.fade-leave-active {
  transition: height 1s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active, 2.1.8 版本以下 */
  {
  height: 10px;
}

.replay-editor {
  margin-left: 38px;
  margin-bottom: 12px;
  position: relative;
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
  line-height: 30px;
  height: 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 16px;
  border: 1px solid #e8e8ed;
  margin-right: 16px;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.reply_content_tool .vote-box span.vote_span {
  text-align: center;
  border: 1px solid #e8e8ed;
  border-left: 0;
  border-radius: 16px;
  position: relative;
  display: inline-block;
  height: 30px;
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

.ask-info-item .drop-menu {
  color: red;
}

.icon_more {
  width: 16px;
  height: 16px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAcUlEQVRYR2NkGGDAOMD2M4w6YDQERkNgNARGQ2A0BDBCoLyqw5PxP+NMUCX1n/F/emdbxXZsFRa11GE4oKKy89H///9lQZYyMjI+7mgvl8PmAGqpG3wOoFbQwkKNkHmjuWA0BEZDYDQERkNgNARGQwAAtIpgIVBMgJ0AAAAASUVORK5CYII=);
}

.reply_content_tool .mr20px {
  padding: 0 16px;
  text-align: center;
  height: 30px;
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
  margin-top: 16px;
  margin-bottom: 16px;
  margin-right: 16px;
  margin-left: 36px;
}

.answer-item-userinfo {
  font-size: 12px;
  color: #666;
}

.answer-item-content {
  margin-top: 8px;
  margin-left: 38px;
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

.ask-top-wrap .ask-top-warper-item {
  display: block;
  margin-top: 12px;
  text-decoration: none;
  margin-left: 20px;
}

.ask-top-wrap {
  padding: 10px 20px 20px 0px;
  color: #507999;
  background: #ffffff;
  font-size: 14px;
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
  width: 82px;
  height: 28px;
  background: #fc5531;
  border-radius: 16px;
  font-size: 12px;
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
  font-size: 14px;
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

.top-tips {
  color: red;
  font-size: 14px;
  margin-left: 12px;
}

.qustion-top-item {
  margin-left: 6px;
}

.qustion-right-view {
  float: right;
}

.ask-info-item {
  margin-left: 16px;
  color: #777888;
  font-size: 12px;
  cursor: pointer;
}

.icon_vote_down,
.icon_vote_up {
  width: 16px;
  height: 16px;
  position: relative;
  left: -2px;
  margin-right: 2px;
}

.icon_vote_jubao {
  width: 16px;
  height: 16px;
  margin-right: 4px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAy5JREFUWEftl01oVFcUx//nTsyHNZHM0oWbUtRWaBdCXehGceHKilQodiONSmuhNZ2Ze964GGbhvHNnprEFbVEjbiyCUtquXEjd2EULLlqwtaW4cdFlQhM1iSb3yA1JGGLem48sBMmsz//c3/2fj3eHsIqfZbkT5E54d6dpKE1YKo1kJyaAs2eHx1aKsyy6ALBinlOnRrIDA0C5vLI+aFMBmN1DhXZBsc05/n85RBqAtbIRhPsEmhWxm5MumgpgWX4GsIdAX4rYXDsAzK6u0C8A3HbCezsCyBer7xivdwGd83Nme61W+LcxUVIP5PPVN0zG3wMo4w3tqFUKv3cEEEQFdpcIOgRC1cVsW2k2G4mDoqCg0arYY2ma1BIEIXM8qERs4K/EcfHvVgCiqLLVwxwlVRGJxpsCRJE7Oud1xJCeFom+SRIcP35hXTY79h5gDih0B4BNC7H/Eegu4H8aG8v+ePHiiWdJOZjjT7zSmYyh4Ti2V+YdKETuI1JcApQI9N3srDlRr+cfNyZhjg+qUg2E11NdUDwg0rxI9ENjXC5Xe62ry19Q6BGAVAnHqrG9vFSCYlEOz3mMAugH8JsT3hkSlEolMzOzPgx8LgAq6B4ZGjVqbnV39z0MMU+fTm325Pep1yGCbg8HEFDv6XnC5XLZhxjL8iuAdwFMZgyGKhW+/sIemK+dN9dAeLS43ZhdVaH5cA4Uw729U98uJl3uRICdnu77GIQRAN0EqonYwgLAHVVsyBj/QWMvNVlE8UGF+R7QZwTdLxLdbqUJmeM9CroJ0DqCP7S8HI05EgFCww0Ojt+fr7niU+f4fCuHL8ZYKydBOAfFg/HxwW1JjZkIwBy/r6DroeZ9PU/eTrI9CSqUY2pm/R+hJwh6WCS6sVJsCoC7Ot+xxnzuKoWv27n9kgvF6mfw/qswWSL2w7YALEtYOlsMdb0Vx7m/OgGIovqbXmf/BPCPE97aLsBEGMnenv7+cvnko04ASqXzG6ZnJifD6DnhgXYBUr/1rQI1ezMk9kAz4RrAmgNrDqw58Oo5sPDG39XqzVYZ98vii2tpFb90gFXeqGN50z8mHWduUfgc77mmMHr1wngAAAAASUVORK5CYII=);
  margin-top: -4px;
}

.icon_vote_up {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAxZJREFUWEfFl99LVEEUx7/n3iVXUEODfkAP5l9QFkmERQ9FPyGIpEiCohAiKCqduUpd19qdmTWWkIoCoQch6MdLRUVvFVFSUFT0FhQUiZgpmbWr7T2xwZrtZrrLer1Pl3tn5vM5M3PumUuY4YtmmI+8BFz3XMnIyJDDoFpmfAPxrarK8s6GhobRXAPKWSAWixX39o0+AnP1eBgBL4hK1ip1sD8XiZwFhBO9APYaiPAWlt1EnlfGzK0MVBJRl1Zi97QJOE50o8febSLEOYDl5qR8nYK5rlkYT/AHEA0aJcqnRcB1LwUTid43DFRZhKNKyVga1NraPvdHPNlLwIDWsmJaBKQ0xxncRkSvqpcsqq6rq0umQaLl9Cokfz4AqNtosaLgAlKeLwd9fc+MMtiB1SZ87OF4iGiOHoLnnSFQp9Zif+EFmk2EPXZAdM8osT4TIKW+zsA2i2ivUuJSQQWMMaUDg/wxFX3ApppwWDzNBAhpegCe/38w/QDhLgUCp/TJoy/SbSdNwz/Ti/tayzX/gghp7gC8YSqRE+EbwV6nVOOTVPsxAde9OiuReNcG4t3MWJA1mG1vNeHGG1OB/KuN45ydwzysGbwPoMdGi5V/CUhpUi/FRIBgkbBDIfLyFUj16+joKPrU8/0zM0qCRfOKQ6E98bEZkI7+lIrcImuTUk13xlJMak7dGy0nXa6pyAnH9IO5Ilg0a04odOTL2KBiAtBEz6cCy9qsWs/GIAYBGjZalPy1BH4ItLSYZT+T/IyAl1rLxb4LSBndyfAug+i6UWK77wLCiZ4AeyGySOmIaPZdQErdxUD9+C+mr5tQOrqbGTWwUWvC8pHvM5BOQdsKzo9EDvf6KuC6sYp4YqQfoCGjRVlWLZjuNHSc9hqPk90gem6UWOq7gGhur4eX7CKiK1qJHb4LOI4OeYwTFuGUUvK47wJS6psMbIGFXSYiL2cJpIsRLGw2EXm7UMXo92F2tK8e7F1kpiShdJ7WBwayBSYpx/kUn8w+mafp3A4keRqk/iEAvAZb7Vo3XcscpiA1Pk+3391mXOAXqa2wMC1BU08AAAAASUVORK5CYII=);
  vertical-align: middle;
  top: -2px;
}

.icon_vote_down {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAyFJREFUWEfFl9tvDFEcx7+/2Y1dSRVtoiQe1F9AI0TE5YW4JhJRESJxSZqIkLjsOdPFdNTuOWfJhgYhggfiAS/EJR5d4vrQ0HiTkJBWQ7Vx3W2785NBF0WzW90xT5Mzv/l+P3POnPn+hvCfD/rP/sgDOM65Ydnssz0gXsOMcUMFRoQMgBawtU/r2Pn+unkAKY1msBgq4z/pWIRtSsn0z9d+ANi61X9yi6xFSsWu9hUJqdk/N1oOarkc51Q02/N6Ndg7xkw5wogqrTd29unnRf9m9K8AfUZS6ksMLIGFVSYpzwYPUG8a2GOHLEropNgZPIA0qxh8BkTnjBIrAgeIx83U3hzfJ6BZa1kTOIDjpCsy2e4OgN4bLcoDB/ANhW06wFwRjVjjXDf2yh8LbBf4ZtLW95gxzSJrllKxW8EDSH2agdVkWet1MnYycABhp3aDPRcEbZS0AweQMrWS4Z0F0QWjxPLAAeJxM6U3xw8JeKS1nBQ4gNB6JLrQBdBHo0XZLwDyexjBwmKTlFeGKoz6p6K09RtmVEYjwypdd+vbguM4GhEh1yXvX+K6qakp0tr2yQcoi0aqhrvu2kzhDUkotNQkdlwcLIBtH6pk/uj3HBsAumO0mPHLEvxN2LbNZo/5IBHd0ErM+VOdkOYqwAsKgSPCB0JonlI77hYEYIwZ0dnFL5lRHg7RtERCPOhvJKRpA3jswAD0GYRrFA7v1Y3bmn/LgoFulvUmyR7bILpulJj/24sl9QUGlllE65QSpwqZieIA5JHRoHfP/VlAKDzbJLbf/NlE1Ke2wPMOgOiEUWLDkAN8DRJpdjF4DxE9rplcXVNbW5vLb9X4/lnI9d4A6J7RYnpJAL42l9n2JwxM7N/dNjTsG/M5k2snoFNrWVESAF/UtlMLPfau+L0+hzHVNMoWf9xxzPhMll+AqMsoMbpkAL6wsFNHwV4dEZ7CCsXI88qZuYGBCUR0WiuxpqQA6XR6ePvrnttgzvd13/dzM1HZXKU2dZQU4NuUHy7r7n5vM2gms/9hweXq6lHH6+rqeooxL+hDVKxgsfWD+t0q1mSg+i/B+LEwffaI4AAAAABJRU5ErkJggg==);
  vertical-align: middle;
  top: -1px;
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
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;
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
  cursor: pointer;
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
  cursor: pointer;
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
  margin-top: 20px;
  margin-bottom: 25px;
  font-size: 14px;
}

.qustion_content p {
  line-height: 1.6;
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
  font-size: 14px;
  color: #666;
}

.question_info a {
  text-decoration: none;
}

.ui_center_button {
  width: 170px;
  margin: 0 auto;
}

.ui_group_button {
  height: 30px;
  width: 60px;
  display: inline-block;
}
</style>
