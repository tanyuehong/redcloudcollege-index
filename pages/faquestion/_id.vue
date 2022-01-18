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
                  <span>
                    {{qdetail.nickname}}</span></a>
                <span>发布于 08/04 15:27</span>
                <span>阅读 5K+</span>
                <span class="glyphicon glyphicon-star-empty"
                      aria-hidden="true">
                  收藏 30
                </span>
                <span class="glyphicon glyphicon-comment"
                      aria-hidden="true">
                  答案 3
                </span>
              </div>
              <div>
                <h2 class="title_header">{{qdetail.title}}</h2>
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
                   v-html="qdetail.content">
              </div>
              <div class="qustion_info">
                <div class="">
                  <span class="answer_span"><i class="icon ic_question_reply"></i>写回答</span>
                  <li class="up_down_wrap wrapdisLike"><span 
                          class="vote_span disLike"><i class="icon icon_vote_up"></i>好问题
                      <!---->
                    </span> <span class="vote_span2"><i class="icon icon_vote_down"></i>提建议
                    </span></li>
                </div>
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
              </div>
            </div>
          </div>
        </div>
        <div class="ask-detail-right">
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import askApi from '@/api/askqustion'
import { getUrlKey } from '@/utils/commonUtils'

export default {
  data () {
    return {
      qdetail: {},
    }
  },
  mounted () {
    var qId = this.$route.params.id
    this.getQustionDetail(qId)
  },

  methods: {
    getQustionDetail (qId) {
      askApi.getQuestionDetails(qId).then((response) => {
        this.qdetail = response.data.qdetail
      })
    },
  },
}
</script>

<style>
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
  background: #fc5531;
  border-radius: 16px;
  font-size: 14px;
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
  margin: 15px;
}

.title_header {
  display: inline;
}

.ask_detail_content {
  margin-left: 0px;
  width: 780px;
  float: left;
  background: #ffffff;
}

.ask-detail-right {
  float: right;
  height: 500px;
  width: 335px;
  background: #ffffff;
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
