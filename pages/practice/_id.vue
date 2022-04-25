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

              <transition v-on:before-enter="cbeforeEnter"
                          v-on:enter="center"
                          v-on:leave="cleave"
                          v-bind:css="false">
                <div class="editor-submit-tool"
                     v-if="showComment">
                  <el-button type="primary"
                             round
                             size="small"
                             @click="commentBtnSubmit">发布</el-button>
                  <el-button round
                             size="small"
                             @click="cancleCommentClick">取消</el-button>
                </div>
              </transition>

            </div>
            <div class="purclearfix"></div>
          </div>

          <div class="comment-list-content">
            <div class="reply-title">
              <span><em class="em1">全部评论 {{commentList.length}}</em></span>
              <span class="reply_wrap">
                <em class="em2"
                    :class="{ cur: answertype }"
                    @click="clickAnserType(true)">按时间倒序</em>
                <em class="em2"
                    :class="{ cur: answertype == false }"
                    @click="clickAnserType(false)">按时间正序</em>
              </span>

              <div class="no-commet" v-if="commentList.length==0">
                <img class="nocommet-image-tips"
                     src="https://img.redskt.com/asset/img/nodata.png" />
                <div>
                  <span class="tips">暂时没有评论哦，赶紧抢沙发吧</span>
                </div>
              </div>
            </div>

            <div id="answer-list"
                 class="qustion-answer-list"
                 v-if="commentList.length>0">

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
                     <div class="tool-item">
                        <span v-bind:class="{ like: item.goodreply }"
                              @click="goodReplyClick(item)">
                          <i class="icon icon_vote_up"></i><em class="qustion-good-num">{{commentGood(item.good)}}</em></span>
                      </div>
                      <div class="tool-item fbselect"
                            @click="repplaybtnclinck(item,index)">
                        <svg data-v-d5fd42b8="" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path data-v-d5fd42b8="" fill-rule="evenodd" clip-rule="evenodd" d="M2.30136 10.1142L2.30019 3.45191C2.30024 2.6778 2.92779 2.05019 3.70191 2.05019H12.3989C13.1731 2.05019 13.8006 2.67785 13.8006 3.452L13.8018 10.1144C13.8017 10.8885 13.1742 11.516 12.4001 11.516H10.1322C9.97329 11.516 9.81862 11.5675 9.69142 11.6629L6.65162 13.9406C6.62173 13.9598 6.58148 13.9444 6.57209 13.91L6.15416 12.0869C6.07758 11.7528 5.78033 11.516 5.43761 11.516H3.70308C2.92893 11.516 2.30136 10.8884 2.30136 10.1142ZM3.70191 1C2.34776 1 1.25 2.09776 1.25 3.45191L1.25117 10.1144C1.25122 11.4685 2.34896 12.5662 3.70308 12.5662H5.18661L5.54953 14.1495L5.55107 14.1558C5.73515 14.9153 6.62879 15.248 7.26458 14.7937L10.2372 12.5662H12.4001C13.7542 12.5662 14.852 11.4684 14.852 10.1142L14.8508 3.45182C14.8508 2.09771 13.753 1 12.3989 1H3.70191ZM4.78612 7.91404C5.35027 7.91404 5.8076 7.45671 5.8076 6.89257C5.8076 6.32842 5.35027 5.87109 4.78612 5.87109C4.22198 5.87109 3.76465 6.32842 3.76465 6.89257C3.76465 7.45671 4.22198 7.91404 4.78612 7.91404ZM8.98631 6.89257C8.98631 7.45671 8.52898 7.91404 7.96483 7.91404C7.40069 7.91404 6.94336 7.45671 6.94336 6.89257C6.94336 6.32842 7.40069 5.87109 7.96483 5.87109C8.52898 5.87109 8.98631 6.32842 8.98631 6.89257ZM11.1484 7.91404C11.7126 7.91404 12.1699 7.45671 12.1699 6.89257C12.1699 6.32842 11.7126 5.87109 11.1484 5.87109C10.5843 5.87109 10.127 6.32842 10.127 6.89257C10.127 7.45671 10.5843 7.91404 11.1484 7.91404Z"></path></svg>
                        回复
                      </div>
                      <div class="tool-item"
                            @click="jubaoBtnClick(item.id,'回答')">
                        <i class="icon icon_ask_report"></i>
                        举报
                      </div>

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
                         v-if="item.comments.length>0">
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

<style>

.icon {
  display: inline-block;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  vertical-align: middle;
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
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 16px;
  margin-left: 36px;
}

.reply_content_tool svg {
    fill: #8a919f;
    margin-right: 2px;
    vertical-align: middle;
}

.reply_content_tool  .tool-item {
    margin-right: 16px;
    line-height: 22px;
    font-size: 12px;
    cursor: pointer;
    color: #8a919f;
}

.icon_ask_report {
     width: 16px;
    height: 16px;
    margin-right: 4px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAy5JREFUWEftl01oVFcUx//nTsyHNZHM0oWbUtRWaBdCXehGceHKilQodiONSmuhNZ2Ze964GGbhvHNnprEFbVEjbiyCUtquXEjd2EULLlqwtaW4cdFlQhM1iSb3yA1JGGLem48sBMmsz//c3/2fj3eHsIqfZbkT5E54d6dpKE1YKo1kJyaAs2eHx1aKsyy6ALBinlOnRrIDA0C5vLI+aFMBmN1DhXZBsc05/n85RBqAtbIRhPsEmhWxm5MumgpgWX4GsIdAX4rYXDsAzK6u0C8A3HbCezsCyBer7xivdwGd83Nme61W+LcxUVIP5PPVN0zG3wMo4w3tqFUKv3cEEEQFdpcIOgRC1cVsW2k2G4mDoqCg0arYY2ma1BIEIXM8qERs4K/EcfHvVgCiqLLVwxwlVRGJxpsCRJE7Oud1xJCeFom+SRIcP35hXTY79h5gDih0B4BNC7H/Eegu4H8aG8v+ePHiiWdJOZjjT7zSmYyh4Ti2V+YdKETuI1JcApQI9N3srDlRr+cfNyZhjg+qUg2E11NdUDwg0rxI9ENjXC5Xe62ry19Q6BGAVAnHqrG9vFSCYlEOz3mMAugH8JsT3hkSlEolMzOzPgx8LgAq6B4ZGjVqbnV39z0MMU+fTm325Pep1yGCbg8HEFDv6XnC5XLZhxjL8iuAdwFMZgyGKhW+/sIemK+dN9dAeLS43ZhdVaH5cA4Uw729U98uJl3uRICdnu77GIQRAN0EqonYwgLAHVVsyBj/QWMvNVlE8UGF+R7QZwTdLxLdbqUJmeM9CroJ0DqCP7S8HI05EgFCww0Ojt+fr7niU+f4fCuHL8ZYKydBOAfFg/HxwW1JjZkIwBy/r6DroeZ9PU/eTrI9CSqUY2pm/R+hJwh6WCS6sVJsCoC7Ot+xxnzuKoWv27n9kgvF6mfw/qswWSL2w7YALEtYOlsMdb0Vx7m/OgGIovqbXmf/BPCPE97aLsBEGMnenv7+cvnko04ASqXzG6ZnJifD6DnhgXYBUr/1rQI1ezMk9kAz4RrAmgNrDqw58Oo5sPDG39XqzVYZ98vii2tpFb90gFXeqGN50z8mHWduUfgc77mmMHr1wngAAAAASUVORK5CYII=);
}

.icon_vote_up {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAxZJREFUWEfFl99LVEEUx7/n3iVXUEODfkAP5l9QFkmERQ9FPyGIpEiCohAiKCqduUpd19qdmTWWkIoCoQch6MdLRUVvFVFSUFT0FhQUiZgpmbWr7T2xwZrtZrrLer1Pl3tn5vM5M3PumUuY4YtmmI+8BFz3XMnIyJDDoFpmfAPxrarK8s6GhobRXAPKWSAWixX39o0+AnP1eBgBL4hK1ip1sD8XiZwFhBO9APYaiPAWlt1EnlfGzK0MVBJRl1Zi97QJOE50o8febSLEOYDl5qR8nYK5rlkYT/AHEA0aJcqnRcB1LwUTid43DFRZhKNKyVga1NraPvdHPNlLwIDWsmJaBKQ0xxncRkSvqpcsqq6rq0umQaLl9Cokfz4AqNtosaLgAlKeLwd9fc+MMtiB1SZ87OF4iGiOHoLnnSFQp9Zif+EFmk2EPXZAdM8osT4TIKW+zsA2i2ivUuJSQQWMMaUDg/wxFX3ApppwWDzNBAhpegCe/38w/QDhLgUCp/TJoy/SbSdNwz/Ti/tayzX/gghp7gC8YSqRE+EbwV6nVOOTVPsxAde9OiuReNcG4t3MWJA1mG1vNeHGG1OB/KuN45ydwzysGbwPoMdGi5V/CUhpUi/FRIBgkbBDIfLyFUj16+joKPrU8/0zM0qCRfOKQ6E98bEZkI7+lIrcImuTUk13xlJMak7dGy0nXa6pyAnH9IO5Ilg0a04odOTL2KBiAtBEz6cCy9qsWs/GIAYBGjZalPy1BH4ItLSYZT+T/IyAl1rLxb4LSBndyfAug+i6UWK77wLCiZ4AeyGySOmIaPZdQErdxUD9+C+mr5tQOrqbGTWwUWvC8pHvM5BOQdsKzo9EDvf6KuC6sYp4YqQfoCGjRVlWLZjuNHSc9hqPk90gem6UWOq7gGhur4eX7CKiK1qJHb4LOI4OeYwTFuGUUvK47wJS6psMbIGFXSYiL2cJpIsRLGw2EXm7UMXo92F2tK8e7F1kpiShdJ7WBwayBSYpx/kUn8w+mafp3A4keRqk/iEAvAZb7Vo3XcscpiA1Pk+3391mXOAXqa2wMC1BU08AAAAASUVORK5CYII=);
  vertical-align: middle;
  width: 16px;
  height: 16px;
  top: -2px;
  margin-right: 4px;
}

.qustion-answer-list {
  margin-top: 10px;
  background: #ffffff;
  padding: 15px;
  font-weight: 400;
  font-size: 14px;
}

.answer-item-userinfo {
  font-size: 12px;
  color: #666;
}

.answer-item-content {
  margin-top: 3px;
  margin-left: 38px;
  margin-right: 12px;
  font-size: 14px;
}

.reply-title .no-commet .nocommet-image-tips {
  width: 120px;
  margin: 0 auto;
}

.reply-title .no-commet {
  text-align: center;
  margin: 10px auto;
}

.reply-title .no-commet .tips {
  font-size: 12px;
  color: #666;
}
.comment-list-content {
  padding-left: 15px;
  padding-bottom: 25px;
  width: 605px;
}
.comment-list-content .reply-title {
  font-size: 14px;
}

.comment-list-content .reply-title .reply_wrap {
  margin-left: 350px;
}
.comment-list-content .reply-title .em1 {
  font-size: 16px;
  font-weight: 550;
}

.comment-list-content .reply-title .em2 {
  font-size: 12px;
  margin-left: 12px;
}
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
  margin-bottom: 15px;
}

.commet-editor-content {
  width: 540px;
  padding-top: 20px;
  float: right;
  margin-right: 20px;
  font-size: 12px;
}

.bottom-comment {
  background: #fff;
  padding-bottom: 20px;
  margin-bottom: 15px;
  width: 620px;
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
.w-e-toolbar p,
.w-e-text-container p,
.w-e-menu-panel p {
  font-size: 14px !important;
}
</style>

<script>
import showdown from "showdown";
import "~/assets/css/markdown.css";
import realPractice from "@/api/practiceblogReq";
import blogPractice from '@/api/practiceblog'
import useract from "@/api/useract";
import userApi from "@/api/user";

export default {
  data () {
    return {
      title: "开源实践网",
      goodslect: false,
      showComment: false,
      commentList: [],
      isLogin: false,
      loginInfo: {},
      editor: {},
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

    this.getCommentList();
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
  },

  methods: {
    getCommentList () {
      realPractice.getPraticeBlogCommentLists(this.pitem.id).then((response) => {
        this.commentList = response.data.comments;

      });
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

    cancleCommentClick () {
      this.showComment = false;
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

    commentBtnSubmit () {
      if (!this.editor || this.editor.txt.html().length < 6) {
        this.$message({ message: "输入的内容太短了哦！", type: "error", duration: 2000 });
        return;
      }
      blogPractice
        .submitBlogComment({
          content: this.editor.txt.html(),
          rid: this.pitem.id,
          uid: this.loginInfo.id,
        })
        .then((response) => {
          this.editor.txt.html("");
          // this.commentList.unshift(response.data.comment);
          this.$message({
            message: "问题回答成功哦",
            type: "success",
            duration: 2000,
          });
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
  }
}
</script>
