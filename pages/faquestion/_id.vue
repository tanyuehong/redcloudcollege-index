<template>
  <div class="main_global_bg">
    <div class="container">
      <div class="main_content_bg qustin_detall_content">
        <div class="row">
          <div class="col-md-8">
            <div class="ask_detail_content">
              <div class="ui breadcrumb red_breadcrumb">
                <a class="section" href="/faquestion">开源实践问答</a>
                <span
                  class="glyphicon glyphicon glyphicon-menu-right"
                  aria-hidden="true"
                ></span>
                <div class="active section">问题详情</div>
              </div>
              <div>
                <h2 class="title_header">多线程为什么比单线程快？</h2>
                <div class="ui red label horizontal" data-tooltip="置顶">
                  顶
                </div>
                <div class="ui orange label horizontal" data-tooltip="热门">
                  热
                </div>
                <div class="question_info">
                  <a href="#">缥缈飞飞</a>
                  <span>发布于 08/04 15:27</span>
                  <span>阅读 5K+</span>
                  <span
                    class="glyphicon glyphicon-star-empty"
                    aria-hidden="true"
                  >
                    收藏 30
                  </span>
                  <span class="glyphicon glyphicon-comment" aria-hidden="true">
                    答案 3
                  </span>
                </div>
                <div class="extra question-tags mt10">
                  <a
                    class="ui horizontal basic label popup-tag"
                    href="https://www.oschina.net/question/tag/ruby"
                    target="_blank"
                  >
                    <img src="https://static.oschina.net/img/logo/ruby.gif" />
                    Ruby
                  </a>

                  <a
                    class="ui horizontal basic label popup-tag"
                    href="https://www.oschina.net/question/tag/java"
                    target="_blank"
                  >
                    <img src="https://static.oschina.net/img/logo/java.png" />
                    Java
                  </a>
                </div>

                <div
                  class="qustion_content mt10 mb10"
                  v-html="qdetail.content"
                ></div>
                <div class="qustion_info">
                  <div class="ui_center_button mt10">
                    <div class="ui_group_button">
                      <a class="ui basic button collect-btn hover">
                        <i class="star outline icon"></i>
                        收藏 (
                        <span>0</span>
                        )
                      </a>
                    </div>
                    <div class="ui_group_button">
                      <i class="share icon"></i>

                      <el-dropdown class="sort">
                        <span class="el-dropdown-link sort_list_label">
                          分享
                          <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import askApi from '@/api/askqustion'
import { getUrlKey } from '@/utils/commonUtils'

export default {
  data() {
    return {
      qdetail: {},
    }
  },
  created() {
    var qId = this.$route.params.id
    this.getQustionDetail(qId)
  },

  methods: {
    getQustionDetail(qId) {
      askApi.getQuestionDetails(qId).then((response) => {
        this.qdetail = response.data.qdetail
      })
    },
  },
}
</script>

<style>
.qustin_detall_content {
  margin-top: 15px;
}

.title_header {
  display: inline;
}
.ask_detail_content {
  margin-top: 10px;
  margin-left: 20px;
}
.question_info {
  margin-top: 10px;
}

.extra .question-tags > a,
img {
  display: inline-block;
  vertical-align: baseline;
  height: 22px;
  border-radius: 0.14285714rem;
  padding: 2px 0;
  margin: -0.5833em 0.5em -0.5833em 0;
}

.ui_center_button {
  border: 1px solid rgba(34, 36, 38, 0.15);
  width: 130px;
  margin: 0 auto;
}

.ui_group_button {
  height: 30px;
  width: 60px;
  display: inline-block;
}
</style>
