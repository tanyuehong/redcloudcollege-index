<template>
  <div class="main_global_bg">
    <div class="container">
      <div class="qustin_detall_content">
        <div class="ask_detail_content">
          <div class="ask-detail-lefte">
            <div class="ui breadcrumb red_breadcrumb">
              <nuxt-link :to="{ name: 'faquestion' }" class="section">
                开源实践面试
              </nuxt-link>
              <span class="glyphicon glyphicon glyphicon-menu-right" aria-hidden="true"></span>
              <div class="active section">面试题详情</div>
            </div>
            <div>
              <div class="question-title-info">
                <div class="title-info-item right">
                  {{ qdetail.type }}
                </div>
                <div class="title-tag-item">
                  <div class="ui orange label horizontal" data-tooltip="热门">
                    {{ qdetail.deep }}
                  </div>
                  <div class="ui orange label horizontal" data-tooltip="热门">
                    热
                  </div>
                  <a class="ui horizontal basic label popup-tag" href="https://www.oschina.net/question/tag/ruby"
                    target="_blank" v-for="tag in qdetail.tags" :key="tag.id">
                    <img :src="tag.img" v-if="tag.img" />{{ tag.name }}
                  </a>
                </div>
              </div>
              <div class="qustion-content">
                <h2 class="title_header">{{ qdetail.title }}</h2>
              </div>



              <div class="qustion_content" v-html="qdetail.content"></div>
              <div class="qustion_info">
                <div class="ui_center_button">
                  <button>查看解析</button>
                </div>
                <ul class="ask-issue-tool fbselect">
                  <span class="answer_span" @click="answerBtnClick"><i class="icon ic_question_reply"></i>写题解</span>
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
                    <i class="icon el-icon-star-off"></i>收藏
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
                <transition v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter"
                  v-on:leave="leave" v-bind:css="false">
                  <div class="answer-qustion-editor" v-if="showAnswerditor">
                    <div id="answer-editor"></div>
                    <div class="interview-ediot-detail">
                      <span class="report-common-question" @click="showAnswerditor = !showAnswerditor">取消回答</span>
                      <el-checkbox v-model="checked" class="interview-btn-check">关注问题</el-checkbox>
                      <el-checkbox v-model="checked" class="answer-open-check">公开</el-checkbox>
                      <el-button type="primary" class="submit-btn-style" @click="submitAnserClick">提交</el-button>
                      <div class="clearfloat"></div>
                    </div>
                  </div>
                </transition>
              </div>

            </div>
          </div>

          <div class="interview-questions-con">
            <ul class="interview-subtypelist">
              <a :href="'/interview/detail/' + qdetail.qid + '?subtype=1'" class="faqustion-subtype-item"
                v-bind:class="{ comactive: subType == 1 }">
                <span title="题解">
                  题解
                </span>
              </a>
              <a :href="'/interview/detail/' + qdetail.qid + '?subtype=2'" class="faqustion-subtype-item"
                v-bind:class="{ comactive: subType == 2 }">
                <span title="评论">
                  评论
                </span>
              </a>
            </ul>
            <div id="answer-list" class="interview-answer-list" v-if="subType == 1">
              <div class="no-commet" v-if="dataList.length == 0">
                <img class="nocommet-image-tips" src="https://img.redskt.com/asset/img/nodata.png" />
                <div>
                  <span class="tips">暂时没有公开的题解哦，赶紧写一个公开给大家学习吧</span>
                </div>
              </div>

              <div class="qustion-answer-content">
                <ul class="qustion-anser-list">
                  <li class="answer-list-item" v-for="(item, index) in dataList" :key="item.id">
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

                    <div class="interview-reply-tool">

                      <div class="reply-tool-item">
                        <button class="tool-button">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="css-1rhb60f-Svg ea8ky5j0"><path fill-rule="evenodd" d="M11.997 21.5a9.5 9.5 0 01-8.49-5.251A9.38 9.38 0 012.5 11.997V11.5c.267-4.88 4.12-8.733 8.945-8.999L12 2.5a9.378 9.378 0 014.25 1.007A9.498 9.498 0 0121.5 12a9.378 9.378 0 01-.856 3.937l.838 4.376a1 1 0 01-1.17 1.17l-4.376-.838a9.381 9.381 0 01-3.939.856zm3.99-2.882l3.254.623-.623-3.253a1 1 0 01.09-.64 7.381 7.381 0 00.792-3.346 7.5 7.5 0 00-4.147-6.708 7.385 7.385 0 00-3.35-.794H11.5c-3.752.208-6.792 3.248-7.002 7.055L4.5 12a7.387 7.387 0 00.794 3.353A7.5 7.5 0 0012 19.5a7.384 7.384 0 003.349-.793 1 1 0 01.639-.09z" clip-rule="evenodd"></path></svg>
                          <span>304</span>
                        </button>
                      </div>

                      <div class="css-1fsoot-ReactionWraper e5ckeis0">
                        <div class="css-17xpmpg-FlexContainer e1o1eox60">
                        <div class="css-1o10tda-ReactionUpvoteBtnWrapper e5ckeis4">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="css-1rhb60f-Svg ea8ky5j0"><path fill-rule="evenodd" d="M7.04 9.11l3.297-7.419a1 1 0 01.914-.594 3.67 3.67 0 013.67 3.671V7.33h4.028a2.78 2.78 0 012.78 3.2l-1.228 8.01a2.778 2.778 0 01-2.769 2.363H5.019a2.78 2.78 0 01-2.78-2.78V11.89a2.78 2.78 0 012.78-2.78H7.04zm-2.02 2a.78.78 0 00-.781.78v6.232c0 .431.35.78.78.78H6.69V11.11H5.02zm12.723 7.793a.781.781 0 00.781-.666l1.228-8.01a.78.78 0 00-.791-.898h-5.04a1 1 0 01-1-1V4.77c0-.712-.444-1.32-1.07-1.56L8.69 10.322v8.58h9.053z" clip-rule="evenodd"></path></svg>
                          </div>
                          </div>
                          <div class="css-17xpmpg-FlexContainer e1o1eox60">
                            <div class="css-1lhs4fb-ReactionSummaryBtnWrapper e5ckeis5">
                              <div class="css-1vs9wz5-ReactionCountText e5ckeis6">4</div><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" class="css-1kuuymw-Svg ea8ky5j0" style="margin-left: 0px;"><defs><mask id="vote-unique-svg844-clip-mask" fill="#fff"><path d="m8.00128196 0c4.41827804 0 8.00000004 3.581722 8.00000004 8s-3.581722 8-8.00000004 8c-2.38959981 0-4.53449661-1.0476981-6.00039523-2.708799 1.24528193-1.4102108 2.00039523-3.2625228 2.00039523-5.291201s-.7551133-3.88099023-1.99960477-5.29120097c1.46510816-1.66110096 3.61000496-2.70879903 5.99960477-2.70879903z"></path></mask></defs><g fill="none" fill-rule="evenodd"><rect width="16" height="16" fill="#00c36c" rx="8"></rect><path fill="#fff" d="M5.152 6.918c.317 0 .574.257.574.574v3.363a.573.573 0 01-.507.57l-.067.004h-.689a.574.574 0 01-.573-.574V7.492c0-.317.257-.574.573-.574zm4.342-1.66v.979h1.54a1.064 1.064 0 011.064 1.223l-.47 3.064c-.08.525-.533.91-1.059.905H7.053a.574.574 0 01-.57-.507l-.003-.067V6.918L7.74 4.08a.382.382 0 01.35-.227c.776 0 1.404.629 1.404 1.404z"></path></g></svg>
                              </div>
                            </div>
                          </div>

                      <div class="reply-tool-item">
                        <span v-bind:class="{ like: item.goodreply }" @click="goodReplyClick(item)"
                          class="vote_span vote_spaned">
                          <i class="icon icon_vote_up"></i>解决<em class="qustion-good-num">{{ item.good }}</em></span>
                      </div>

                      <div class="reply-tool-item">
                        <button class="tool-button">
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="css-1rhb60f-Svg ea8ky5j0"><path fill-rule="evenodd" d="M1.104 12.444a1 1 0 010-.888c.13-.26.37-.693.722-1.241A18.85 18.85 0 013.88 7.652C6.184 5.176 8.896 3.667 12 3.667s5.816 1.509 8.119 3.985c.79.85 1.475 1.756 2.055 2.663.352.548.593.98.722 1.24a1 1 0 010 .89c-.13.26-.37.692-.722 1.24a18.848 18.848 0 01-2.055 2.663c-2.303 2.476-5.015 3.985-8.119 3.985s-5.816-1.509-8.119-3.985a18.846 18.846 0 01-2.055-2.663c-.352-.548-.593-.98-.722-1.24zm2.406.162a16.87 16.87 0 001.836 2.38c1.959 2.106 4.19 3.347 6.654 3.347 2.465 0 4.695-1.24 6.654-3.347A16.87 16.87 0 0020.86 12a16.871 16.871 0 00-2.206-2.986C16.695 6.908 14.464 5.667 12 5.667c-2.465 0-4.695 1.24-6.654 3.347A16.87 16.87 0 003.14 12c.108.188.232.391.37.607zM12 15.75c-2.06 0-3.727-1.68-3.727-3.75 0-2.07 1.667-3.75 3.727-3.75 2.06 0 3.727 1.68 3.727 3.75 0 2.07-1.667 3.75-3.727 3.75zm0-2c.952 0 1.727-.782 1.727-1.75s-.775-1.75-1.727-1.75c-.952 0-1.727.782-1.727 1.75s.775 1.75 1.727 1.75z" clip-rule="evenodd"></path></svg>
                             <span>482.4k</span>
                        </button>
                      </div>

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

                    <div class="reply-comment-tool" v-if="item.showeditor">
                      <span @click="repplaybtnclinck(item, index)">取消</span>
                      <div class="comment-btn" @click="replyCommntClick(item, index)">评论</div>
                    </div>

                    <div class="reply-comment-container" v-if="subType == 2">
                      <div class="reply-comment-item" v-for="(comment, cindex) in comments" :key="comment.id">
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
            <div class="interview-comment-list" v-if="subType == 2">
              <div class="interview-bottom-comment">
                <div class="comment-blog">
                  <a href="/teacher/1257316155061886977" class="article_title"><img
                      src="https://static.redskt.com/assets/img/yonghutouxiangnan.png" width="30" height="30" alt=""
                      class="vam user-head-image article-avatar"></a>
                </div>
                <div class="commet-editor-content">
                  <div id="comment-editor"></div>
                  <transition v-on:before-enter="cbeforeEnter" v-on:enter="center" v-on:leave="cleave"
                    v-bind:css="false">
                    <div class="interview-submit-tool" v-if="showComment">
                      <el-button type="primary" round size="small" @click="commentBtnSubmit">发表评论</el-button>
                      <el-button round size="small" @click="cancleCommentClick">取消</el-button>
                    </div>
                  </transition>
                </div>
                <div class="clearfloat"></div>
              </div>

              <div class="comment-header">
                <span> <em class="em1">全部评论 ( {{ dataList.length }} )</em></span>
                <span class="reply_wrap"><em class="em2 cur">按热度排序</em> <em class="em2">按时间排序</em></span>
              </div>

              <div class="no-commet" v-if="dataList.length == 0">
                <img class="nocommet-image-tips" src="https://img.redskt.com/asset/img/nodata.png" />
                <div>
                  <span class="tips">暂时没有评论哦，赶紧抢沙发吧</span>
                </div>
              </div>

              <div id="answer-list" class="interview-answer-list" v-if="dataList.length > 0">
                <div class="qustion-answer-content">
                  <ul class="qustion-anser-list">
                    <li class="answer-list-item" v-for="(item, index) in dataList" :key="item.id">
                      <div class="answer-item-userinfo">
                        <img class="vam user-head-image" :src="item.avatar" width="30" height="30" alt />
                        <span class="ml5"> {{ item.username }}</span>
                        <span class="qustion-top-item"> {{ item.gmtCreate }}</span>
                      </div>

                      <div class="answer-item-content" v-html="item.content"></div>

                      <div class="interview-reply-tool">
                        <div class="tool-item">
                          <span v-bind:class="{ like: item.goodreply }" @click="goodReplyClick(item, 1)">
                            <i class="icon icon_vote_up"></i><em class="qustion-good-num">{{ commentGood(item.good)
                            }}</em></span>
                        </div>
                        <div class="tool-item fbselect" @click="repplaybtnclinck(item, index)">
                          <svg data-v-d5fd42b8="" width="16" height="16" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg" class="">
                            <path data-v-d5fd42b8="" fill-rule="evenodd" clip-rule="evenodd"
                              d="M2.30136 10.1142L2.30019 3.45191C2.30024 2.6778 2.92779 2.05019 3.70191 2.05019H12.3989C13.1731 2.05019 13.8006 2.67785 13.8006 3.452L13.8018 10.1144C13.8017 10.8885 13.1742 11.516 12.4001 11.516H10.1322C9.97329 11.516 9.81862 11.5675 9.69142 11.6629L6.65162 13.9406C6.62173 13.9598 6.58148 13.9444 6.57209 13.91L6.15416 12.0869C6.07758 11.7528 5.78033 11.516 5.43761 11.516H3.70308C2.92893 11.516 2.30136 10.8884 2.30136 10.1142ZM3.70191 1C2.34776 1 1.25 2.09776 1.25 3.45191L1.25117 10.1144C1.25122 11.4685 2.34896 12.5662 3.70308 12.5662H5.18661L5.54953 14.1495L5.55107 14.1558C5.73515 14.9153 6.62879 15.248 7.26458 14.7937L10.2372 12.5662H12.4001C13.7542 12.5662 14.852 11.4684 14.852 10.1142L14.8508 3.45182C14.8508 2.09771 13.753 1 12.3989 1H3.70191ZM4.78612 7.91404C5.35027 7.91404 5.8076 7.45671 5.8076 6.89257C5.8076 6.32842 5.35027 5.87109 4.78612 5.87109C4.22198 5.87109 3.76465 6.32842 3.76465 6.89257C3.76465 7.45671 4.22198 7.91404 4.78612 7.91404ZM8.98631 6.89257C8.98631 7.45671 8.52898 7.91404 7.96483 7.91404C7.40069 7.91404 6.94336 7.45671 6.94336 6.89257C6.94336 6.32842 7.40069 5.87109 7.96483 5.87109C8.52898 5.87109 8.98631 6.32842 8.98631 6.89257ZM11.1484 7.91404C11.7126 7.91404 12.1699 7.45671 12.1699 6.89257C12.1699 6.32842 11.7126 5.87109 11.1484 5.87109C10.5843 5.87109 10.127 6.32842 10.127 6.89257C10.127 7.45671 10.5843 7.91404 11.1484 7.91404Z">
                            </path>
                          </svg>
                          回复
                        </div>
                        <div class="tool-item" @click="jubaoBtnClick(item.id, '回答')">
                          <i class="icon icon_ask_report"></i>
                          举报
                        </div>
                      </div>
                      <transition v-on:before-enter="rbeforeEnter" v-on:enter="renter" v-on:after-enter="rafterEnter"
                        v-on:leave="rleave" v-bind:css="false">
                        <div :id="'replayedtor' + index" class="replay-editor" v-if="item.showeditor" :key="item.id">
                        </div>
                      </transition>
                      <div class="editor-submit-tool" v-if="item.showeditor">
                        <el-button type="primary" round size="small" @click="commentReplySubmit(item, index)">提交
                        </el-button>
                        <el-button round size="small" @click="repplaybtnclinck(item, index)">取消</el-button>
                      </div>

                      <div class="comment-reply-container" v-if="item.comments.length > 0">
                        <div class="reply-comment-item" v-for="(comment, cindex) in item.comments" :key="comment.id">
                          <div class="answer-item-userinfo">
                            <img class="vam user-head-image" :src="comment.avatar" width="30" height="30" alt />
                            <span class="ml5"> {{ comment.name }}</span>
                            <span class="comment-replyment" v-if="comment.toname">回复</span>
                            <span v-if="comment.toname">{{ comment.toname }}</span>
                            <span class="qustion-top-item">{{ comment.gmtCreate }}</span>
                          </div>
                          <div class="answer-item-content" v-html="comment.content"></div>
                          <div class="interview-reply-tool">
                            <div class="tool-item">
                              <span class="comment-reply" v-bind:class="{ like: comment.goodreply }"
                                @click="goodReplyClick(comment, 2)">
                                <i class="icon icon_vote_up"></i><em class="qustion-good-num">{{
                                    commentGood(comment.good)
                                }}</em></span>
                            </div>
                            <div class="tool-item fbselect" @click="replyCommentbtnclick(comment, cindex)">
                              <svg data-v-d5fd42b8="" width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg" class="">
                                <path data-v-d5fd42b8="" fill-rule="evenodd" clip-rule="evenodd"
                                  d="M2.30136 10.1142L2.30019 3.45191C2.30024 2.6778 2.92779 2.05019 3.70191 2.05019H12.3989C13.1731 2.05019 13.8006 2.67785 13.8006 3.452L13.8018 10.1144C13.8017 10.8885 13.1742 11.516 12.4001 11.516H10.1322C9.97329 11.516 9.81862 11.5675 9.69142 11.6629L6.65162 13.9406C6.62173 13.9598 6.58148 13.9444 6.57209 13.91L6.15416 12.0869C6.07758 11.7528 5.78033 11.516 5.43761 11.516H3.70308C2.92893 11.516 2.30136 10.8884 2.30136 10.1142ZM3.70191 1C2.34776 1 1.25 2.09776 1.25 3.45191L1.25117 10.1144C1.25122 11.4685 2.34896 12.5662 3.70308 12.5662H5.18661L5.54953 14.1495L5.55107 14.1558C5.73515 14.9153 6.62879 15.248 7.26458 14.7937L10.2372 12.5662H12.4001C13.7542 12.5662 14.852 11.4684 14.852 10.1142L14.8508 3.45182C14.8508 2.09771 13.753 1 12.3989 1H3.70191ZM4.78612 7.91404C5.35027 7.91404 5.8076 7.45671 5.8076 6.89257C5.8076 6.32842 5.35027 5.87109 4.78612 5.87109C4.22198 5.87109 3.76465 6.32842 3.76465 6.89257C3.76465 7.45671 4.22198 7.91404 4.78612 7.91404ZM8.98631 6.89257C8.98631 7.45671 8.52898 7.91404 7.96483 7.91404C7.40069 7.91404 6.94336 7.45671 6.94336 6.89257C6.94336 6.32842 7.40069 5.87109 7.96483 5.87109C8.52898 5.87109 8.98631 6.32842 8.98631 6.89257ZM11.1484 7.91404C11.7126 7.91404 12.1699 7.45671 12.1699 6.89257C12.1699 6.32842 11.7126 5.87109 11.1484 5.87109C10.5843 5.87109 10.127 6.32842 10.127 6.89257C10.127 7.45671 10.5843 7.91404 11.1484 7.91404Z">
                                </path>
                              </svg>
                              回复
                            </div>
                            <div class="tool-item" @click="jubaoBtnClick(item.id, '回答')">
                              <i class="icon icon_ask_report"></i>
                              举报
                            </div>
                          </div>

                          <transition v-on:before-enter="rbeforeEnter" v-on:enter="renter"
                            v-on:after-enter="rafterEnter" v-on:leave="rleave" v-bind:css="false">
                            <div :id="'creplayedtor' + cindex" class="c-replay-editor" v-if="comment.showeditor"
                              :key="comment.id">
                            </div>
                          </transition>
                          <div class="editor-submit-tool" v-if="comment.showeditor">
                            <el-button type="primary" round size="small"
                              @click="commentReplyToSubmit(comment, item, comment.uid, cindex)">提交</el-button>
                            <el-button round size="small" @click="replyCommentbtnclick(comment, cindex)">取消</el-button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>


      </div>

      <div class="ask-detail-right">
        <div class="question-info">
          <div class="user_header">
            <span class="qTitle">题目信息</span>
          </div>
          <div class="question-info-list">
            <div class="info-item">
              浏览: <span>{{ qdetail.readcount }}</span>
            </div>
            <div class="info-item">
              发布时间: <span>{{ qdetail.gmtCreate }}</span>
            </div>

            <div class="info-item">
              上传者:<nuxt-link :to="'/user/' + qdetail.uid + '/blog'">
                <img class="vam user-head-image" :src="qdetail.avatar" width="30" height="30" alt />
                <span class="ml5">{{ qdetail.nickname }}</span>
              </nuxt-link>
            </div>

            <div class="info-item">
              遇到人数: <span>{{ qdetail.meet }}</span>
            </div>
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

import interviewApi from "@/api/interviewReq";
import interviewServerApi from "@/api/interviewServerReq";

const qiniu = require("qiniu-js");

export default {
  data () {
    return {
      checked: true,
      answertype: true,
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
      cgoodDialogVisible: false,
      answerEditor: undefined,
      showAnswerditor: false,
      showComment: false,
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

  asyncData ({ params, query, error }) {
    var type = query.subtype ? query.subtype : 1;
    return interviewServerApi.getQuestionDetail(params.id, type).then((response) => {
      return {
        qdetail: response.data.qdetail,
        dataList: response.data.dataList,
        subType: type,
        descrb: '开源实践问答为您找到 ' + response.data.qdetail.title + ' 等相关问题答案，如果想了解更多关于 ' + response.data.qdetail.title + ' 问题等相关问答，请访问开源实践问答。',
      }
    })
  },

  mounted () {
    window.console.log('====' + this.subType);
    var qId = this.$route.params.id;
    var token = localStorage.getItem("redclass_token");
    var userStr = localStorage.getItem("redclass_user");
    if (!(token && token != "undefined") || !(userStr && userStr != "undefined")) {
      this.isLogin = false;
    } else {
      this.loginTitle = "我的问答";
      this.loginInfo = JSON.parse(userStr)
      this.isLogin = true;
    };
    window.myVueComm = this;
    this.getUploadImageToken(false);
    this.getUserGoodQustionState(qId);
    this.getUserQustionCollectState(qId);
    this.getUserGoodReplyState();
    window.gotoPage = {
      path: '/interview/detail/' + qId,
    };
    if (this.subType == 2) {
      setTimeout(function () {
        myVueComm.initCommentEditor();
      }, 10)
    }
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
    commentReplySubmit (item, index) {
      if (!item.editor || item.editor.txt.html().length < 6) {
        this.$message({ message: "输入的内容太短了哦！", type: "error", duration: 2000 });
        return;
      }
      interviewApi
        .submitReply({
          content: item.editor.txt.html(),
          rid: item.id,
          uid: this.loginInfo.id
        })
        .then((response) => {
          item.editor.txt.html("");
          myVueComm.repplaybtnclinck(item, index);
          item.comments.unshift(response.data.reply);
          window.console.log(item.comments);
          this.$message({
            message: "评论回复成功哦",
            type: "success",
            duration: 2000,
          });
        });
    },
    cancleCommentClick () {
      this.showComment = false;
    },
    commentBtnSubmit () {
      var texxt = this.editor.txt.html();
      window.console.log(texxt);
      if (!this.editor || this.editor.txt.html().length < 6) {
        this.$message({ message: "输入的内容太短了哦！", type: "error", duration: 2000 });
        return;
      }
      interviewApi.submitComment({
        content: this.editor.txt.html(),
        bid: this.qdetail.qid,
        uid: this.loginInfo.id,
      })
        .then((response) => {
          this.editor.txt.html("");
          this.dataList.unshift(response.data.comment);
          this.$message({
            message: "问题评论成功哦",
            type: "success",
            duration: 2000,
          });
        });
    },

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
      if (qItem.state == 99 && this.dataList.length > 0) {
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
        this.dataList = this.dataList.filter(function (item) {
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
      if (!this.dataList) {
        return;
      }
      var list = [];
      for (var j = 0; j < this.dataList.length; j++) {
        list.push(this.dataList[j].id);
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
      el.style.width = '736px';
      el.style.height = '0px'
    },

    enter: function (el, done) {
      var Velocity = $.Velocity;
      Velocity(el, { height: '270px' }, 300, function () { done() })
      this.initAnswerEitor();
    },

    afterEnter: function (el) {
    },

    leave: function (el, done) {
      var Velocity = $.Velocity;
      Velocity(el, { height: '0px' }, 300, function () { done() })
    },

    rbeforeEnter: function (el) {
      el.style.width = '540px';
      el.style.height = '0px'
    },

    renter: function (el, done) {
      this.initReplyeditor();
      var Velocity = $.Velocity;
      Velocity(el, { height: '140px' }, 150, function () { done() })
    },

    rafterEnter: function (el) {
    },

    rleave: function (el, done) {
      var Velocity = $.Velocity;
      Velocity(el, { height: '0px' }, 150, function () { done() })
    },

    cbeforeEnter: function (el) {
      el.style.height = '0px';
    },
    center: function (el, done) {
      var Velocity = $.Velocity;
      Velocity(el, { height: '34px' }, 150, function () { done() })
    },
    cleave: function (el, done) {
      var Velocity = $.Velocity;
      Velocity(el, { height: '0px' }, 150, function () { done() })
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
      if (this.showAnswerditor) {
        this.showAnswerditor = false;
      } else {
        this.showAnswerditor = true;
      }
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
      if (this.answerEditor.txt.html().length <= 6) {
        this.$message({ message: "输入的内容太短了哦！", type: "error", duration: 2000 });
        return;
      }
      interviewApi
        .submitQuestionAnswer({
          content: this.answerEditor.txt.html(),
          qid: this.qdetail.qid,
          uid: this.loginInfo.id,
        })
        .then((response) => {
          this.answerEditor.txt.html("");
          this.dataList.unshift(response.data.reply);
          this.$message({
            message: "提交解答成功哦",
            type: "success",
            duration: 2000,
          });
        });
    },

    repplaybtnclinck (item, index) {
      item.replyId = "#replayedtor" + index;
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

    initAnswerEitor () {
      window.myVueComm = this;
      let editor = this.$wangeditor('#answer-editor');
      this.answerEditor = editor;
      editor.config.uploadImgMaxLength = 1;
      editor.config.uploadImgServer = "/api/ucenter/uploadImage";
      editor.config.uploadFileName = "file";
      editor.config.placeholder = "请用专业明晰的语言,写出您的解答";
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
      editor.config.onchange = function (newHtml) { };
      editor.create();
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
        'image'
      ]

      editor.config.onfocus = function (newHtml) {
        myVueComm.getUploadImageToken(true);
        myVueComm.showComment = true;
      };

      editor.config.onblur = function (newHtml) {
        myVueComm.cancleCommentClick();
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

    initReplyeditor () {
      var item = window.replyItem.replyId;
      let editor = this.$wangeditor(window.replyItem.replyId);
      this.editor = editor;
      window.replyItem.editor = editor;
      editor.config.uploadImgMaxLength = 1;
      editor.config.uploadImgServer = "/api/ucenter/uploadImage";
      editor.config.uploadFileName = "file";
      editor.config.placeholder = "写下你的评论...";
      editor.config.focus = false;
      editor.config.zIndex = 100;
      editor.config.height = 100;
      editor.config.showFullScreen = false;

      editor.config.menus = [
        'bold',
        'link',
        'emoticon',
        'image'
      ]

      editor.config.onfocus = function (newHtml) {
        myVueComm.getUploadImageToken(true);
      };

      editor.config.onblur = function (newHtml) {
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
    }
  },
};
</script>

<style scoped>

.reply-tool-item button {
  border: none;
  background: #fff;
  font-size: 14px;
  color: #666;
}
.interview-submit-tool {
  padding-top: 8px;
  overflow: hidden;
}

.interview-submit-tool .el-button {
  padding: 6px 12px;
  font-size: 10px;
  border-radius: 14px;
}

.comment-header {
  margin-left: 20px;
}

.comment-header .em1 {
  font-size: 16px;
  font-weight: 550;
}

.comment-header .em2 {
  font-size: 12px;
  margin-left: 12px;
  color: #999;
  cursor: pointer;
}

.comment-header .em2.cur {
  color: #409eff;
}

.comment-header .reply_wrap {
  margin-left: 495px;
}

.interview-bottom-comment {
  background: #fff;
  margin-bottom: 25px;
  width: 750px;
}

.interview-bottom-comment .comment-blog {
  width: 40px;
  height: 40px;
  float: left;
  margin-left: 15px;
  margin-top: 15px;
}

.interview-bottom-comment .commet-editor-content {
  width: 690px;
  padding-top: 20px;
  float: right;
  margin-right: 0px;
  font-size: 12px;
}

.interview-comment-list {
  background: #fff;
  padding-bottom: 10px;
}

.interview-ediot-detail {
  margin-top: 10px
}

.interview-ediot-detail .report-common-question {
  font-size: 14px;
  color: #666;
  margin-left: 3px;
  cursor: pointer;
  margin-top: 10px;
}

.interview-ediot-detail .interview-btn-check {
  margin-left: 390px;
  margin-top: 10px;
}

.interview-ediot-detail .answer-open-check {
  margin-top: 12px;
}

.submit-btn-style {
  height: 40px;
  width: 80px;
  float: right;
}

.no-commet {
  text-align: center;
  margin: 20px auto;
}

.no-commet .nocommet-image-tips {
  width: 230px;
  margin: 0 auto;
}

.no-commet .tips {
  font-size: 14px;
  color: #666;
}

.interview-questions-con {
  background: #fff;
}

.interview-subtypelist {
  border-bottom: 1px solid #e4e4e4;
}

.interview-subtypelist .faqustion-subtype-item.comactive {
  border-bottom: 2px solid #409eff;
  color: #303133;
}

.interview-subtypelist .faqustion-subtype-item {
  line-height: 60px;
  font-size: 14px;
  color: #666;
  padding: 20px 20px;
  text-decoration: none;
}

.element-icon {
  font-size: 16px;
  margin-right: 3px;
}

.question-title-info {
  display: flex;
  margin-top: 15px;
}

.question-title-info .title-info-item.right {
  border-right: 1px solid hsla(0, 0%, 59.2%, .2);
}

.question-title-info .title-info-item {
  margin-right: 12px;
  font-size: 16px;
  color: #666;
  padding-right: 6px;
  margin-top: 3px;
  margin-bottom: 3px;
}

.question-title-info a img {
  display: inline-block;
  vertical-align: baseline;
  height: 22px !important;
  border-radius: 0.14285714rem;
  padding: 2px 0;
  margin: -0.5833em 0.5em -0.5833em 0;
}

.question-info {}

.question-info .question-info-list {
  background: #fff;
  padding-left: 20px;
  padding-top: 15px;
  padding-bottom: 8px;
}

.question-info .question-info-list .info-item {
  color: #666;
  font-size: 14px;
  margin-bottom: 15px;
}

.question-info .question-info-list .info-item span {
  margin-left: 6px;
}

.question-info .question-info-list .info-item a {
  margin-left: 6px;
}

.question-info .question-info-list .info-item a span {
  margin-left: 3px;
}

.question-header-title {
  font-size: 16px;
  font-weight: 500;
  padding-left: 8px;
  border-left: 4px solid #409EFF;
}

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
  padding-bottom: 6px;
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

.interview-reply-tool .vote-box {
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

.interview-reply-tool .tool-item {
  margin-right: 16px;
  line-height: 22px;
  font-size: 12px;
  cursor: pointer;
  color: #8a919f;
}

.interview-reply-tool svg {
  fill: #8a919f;
  margin-right: 2px;
  vertical-align: middle;
}

.interview-reply-tool .vote-box span.vote_span {
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

.comment-reply-container {
  margin-left: 25px;
  padding: 10px;
  background: rgba(247, 248, 250, 0.7);
  border-radius: 8px;
}

.interview-reply-tool .mr20px {
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

.interview-reply-tool {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 0;
  margin-top: 16px;
  margin-bottom: 10px;
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

.interview-answer-list h4 .em2.cur {
  color: #222226;
  background: #fff;
}

.interview-answer-list h4 .em2 {
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

.interview-answer-list {
  background: #ffffff;
  padding: 15px;
  font-weight: 400;
  font-size: 14px;
}

.interview-answer-list h4 .reply_wrap {
  margin-top: 8px;
  display: inline-block;
  width: 92px;
  height: 32px;
  background: #f0f0f2;
  border-radius: 6px;
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

.user_header .qTitle {
  height: 48px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  line-height: 48px;
}

.answer-qustion-editor {
  margin-top: 10px;
  padding-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 15px;
  background: #ffffff;
  overflow: hidden;
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
  background: #fff;
  margin-bottom: 10px;
}

.qustion-content {
  margin-top: 15px;
}

.qustion-content .title_header {
  display: inline;
  font-size: 18px;
  font-weight: 500;
}

.ask_detail_content {
  margin-left: 0px;
  width: 780px;
  float: left;
  margin-bottom: 15px;
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
