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
                <span class="qustion-top-item">发布于 08/04 15:27</span>
                <span class="glyphicon glyphicon-star-empty qustion-top-item"
                      aria-hidden="true">
                </span>
                <span>
                  收藏30
                </span>

                <span class="qustion-top-item">
                  已解决
                </span>
                <div class="qustion-right-view">
                  已阅读 322
                </div>
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
                  <span class="answer_span"><i class="icon ic_question_reply"></i>写回答</span>
                  <li class="up_down_wrap wrapdisLike ask-info-item">
                    <span class="vote_span disLike">
                    <i class="icon icon_vote_up"></i>好问题
                      <!---->
                    </span> 
                    <span class="vote_span2"><i class="icon icon_vote_down"></i>提建议
                    </span>
                 </li>
                  <li class="ask-info-item">
                      <i class="el-icon-view"></i>
                      123
                  </li>
                  <li class="ask-info-item">
                      <i class="icon icon_vote_jubao"></i>举报
                  </li>
                </ul>
              </div>
            </div>
            <div class="answer-qustion-editor">
              
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
.qustion-top-item {
  margin-left: 8px;
}
.qustion-right-view {
  float: right;
}

.ask-info-item {
  margin-left: 16px;
  color: #777888;
  font-size: 14px;
}

.icon_vote_down, .icon_vote_up {
    width: 16px;
    height: 16px;
    position: relative;
    left: -2px;
}

.icon_vote_jubao {
    background-image: url("https://img.redskt.com/asset/img/icon-ask-jubao.png");
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
}
.vote_span2 {
  padding: 0 16px;
  text-align: center;
  border-radius: 16px;
  display: inline-block;
  border: 1px solid transparent;
  height: 32px;
  line-height: 30px;
  font-size: 14px;
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
  padding: 0 16px;
  font-size: 14px;
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
