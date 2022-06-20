<template>
  <div class="main_global_bg">
    <div class="container main-content">
      <div class="message-top-rumb">
        <div class="ui breadcrumb red_breadcrumb">
          <nuxt-link to="/" class="section"> 首页 </nuxt-link>
          <span
            class="glyphicon glyphicon glyphicon-menu-right"
            aria-hidden="true"
          ></span>
          <nuxt-link to="/tags" class="section"> 所有标签 </nuxt-link>
          <span
            class="glyphicon glyphicon glyphicon-menu-right"
            aria-hidden="true"
          ></span>
          <div class="active section">{{ tag.name }}</div>
        </div>
      </div>
      <div class="message-spreate"></div>
      <div class="tags-content">
        <div class="ui basic segment tag-card">
          <div class="ui items">
            <div class="item">
              <div class="ui image">
                <img
                  src="https://static.oschina.net/uploads/logo/spring_bKe1l.png"
                />
              </div>
              <div class="content">
                <div class="header-wrap clearfix">
                  <h2 class="ui header green">Spring</h2>
                </div>
                <div class="description">
                  Spring Framework 是一个开源的 Java/Java EE
                  全功能栈（full-stack）的应用程序框架，以 Apache
                  许可证形式发布，也有 .NET 平台上的移植版本。该框架基于 Expert
                  One...
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="tags-warper">
          <div class="cards">
            <div class="card tag-card" v-for="tag in tagsList" :key="tag.id">
              <div class="content">
                <a
                  class="header"
                  href="https://www.oschina.net/question/tag/yunweiw"
                  target="_blank"
                  >{{ tag.name }}</a
                >
                <div class="meta">{{ tag.askcount }} 个问答</div>
                <div class="description">{{ tag.describ }}</div>
              </div>
            </div>
          </div>

          <div class="tag-list-container">
              <div class="question-tab-wrap">
                <a href="?show=updated" class="item active">问题列表</a>
                <a href="?show=my_reply" class="item">文章列表</a>
				<a href="?show=my_reply" class="item">专题列表</a>
				<a href="?show=my_reply" class="item">视频列表</a>
				<a href="?show=my_reply" class="item">书籍列表</a>
              </div>
           

            <div class="ui basic segment article-list" id="questionList">
              <div
                class="
                  ui
                  relaxed
                  divided
                  items
                  list-container
                  questions-list-container questions-tag-list-container
                "
              >
                <div class="item question-item top">
                  <div class="statistics-wrap">
                    <div class="ui mini statistics">
                      <div class="ui statistic">
                        <div class="value">53</div>
                        <div class="label">回答</div>
                      </div>
                    </div>
                  </div>
                  <div class="content">
                    <a
                      class="header"
                      href="https://www.oschina.net/question/2918182_2319406"
                      target="_blank"
                    >
                      如何在 OSC 社区运营你的开源项目？
                      <div class="ui red label horizontal" data-tooltip="置顶">
                        顶
                      </div>
                      <div
                        class="ui orange label horizontal"
                        data-tooltip="热门"
                      >
                        热
                      </div>
                    </a>
                    <div class="description">
                      <p class="line-clamp">
                        在 OSCHINA
                        社区，拥有着围绕每一款开源软件展开的完整宣发链条。如果你或你的团队拥有一款开源软件，并且想要让更多的人了解和使用它，那么你可以：
                        在 ...
                      </p>
                    </div>

                    <div class="extra question-tags">
                      <a
                        class="ui horizontal basic label popup-tag"
                        href="https://www.oschina.net/question/tag/flashdb"
                        target="_blank"
                        ><img src="" />FlashDB</a
                      >

                      <a
                        class="ui horizontal basic label popup-tag"
                        href="https://www.oschina.net/question/tag/flashdb-iot"
                        target="_blank"
                        ><img src="" />FlashDB IoT</a
                      >

                      <a
                        class="ui horizontal basic label popup-tag"
                        href="https://www.oschina.net/question/tag/jd-hotkey"
                        target="_blank"
                        ><img src="" />JD-hotkey</a
                      >

                      <a
                        class="ui horizontal basic label popup-tag"
                        href="https://www.oschina.net/question/tag/sogou-cpp-workflow"
                        target="_blank"
                        ><img src="" />Sogou C++ Workflow</a
                      >

                      <a
                        class="ui horizontal basic label popup-tag"
                        href="https://www.oschina.net/question/tag/thanos"
                        target="_blank"
                        ><img
                          src="https://static.oschina.net/uploads/logo/thanos_x5jXV.png"
                        />Thanos</a
                      >
                    </div>

                    <div class="extra question-meta">
                      <div class="ui horizontal list">
                        <div class="item">
                          <a
                            href="https://my.oschina.net/oscpyaqxylk"
                            target="_blank"
                            >OSCHINA编辑部</a
                          >
                        </div>
                        <div class="item">2020/10/19 22:04</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="page-load-status">
                <p class="infinite-scroll-request">
                  <i class="ui active small inline loader"></i>
                </p>
                <p class="infinite-scroll-last">没有更多内容</p>
                <p class="infinite-scroll-error">加载失败，请刷新页面</p>
              </div>
              <a class="ui fluid button load-more-button" style="display: none"
                >加载更多</a
              >
              <div class="list-container-last-tips">
                <p>没有更多内容</p>
              </div>
            </div>

            <!-- Generated by oschina (init:1[ms],page:29[ms],ip:118.193.106.19) //-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tagServerApi from "@/api/tagServerReq";

export default {
  data() {
    return {
      tagsList: []
    };
  },

  asyncData({ params, error }) {
    return tagServerApi.getTagDetail(params.id).then(response => {
      return {
        tag: response.data.tag,
        qustionList: response.data.qustionList
      };
    });
  },

  head() {
    return {
      title: "所有标签列表 - 开源实践网",
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content: "标签列表"
        },
        {
          hid: "description",
          name: "description",
          content: "标签列表"
        },
        {
          hid: "og:description",
          content: "标签列表"
        }
      ]
    };
  },

  mounted() {},

  methods: {}
};
</script>

<style scoped>

.tag-list-container {
	min-height: 440px;
	margin-bottom: 15px;
}

.tag-list-container .question-tab-wrap {
	display: flex;
	flex-direction: row;
	-webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
	-ms-flex-wrap: wrap;
    flex-wrap: wrap;
	border-bottom: 2px solid #efefef;
}
 .question-tab-wrap .item {
	font-weight: 500;
	color: #333;
	font-size: 18px;
	margin-right: 30px;
	padding-left: 6px;
	padding-right: 6px;
	border-bottom: 2px solid #c74444;
	padding-bottom: 12px;
}

 .question-tab-wrap .item.av

.ui.items > .item > .content > .description {
  margin-top: 8px;
  max-width: auto;
  font-size: 14px;
  line-height: 1.4285em;
  color: rgba(0, 0, 0, 0.87);
}

.ui.items > .item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 1em 0;
  width: 100%;
  min-height: 0;
  background: 0 0;
  padding: 0;
  border: none;
  border-radius: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-transition: -webkit-box-shadow 0.1s ease;
  transition: -webkit-box-shadow 0.1s ease;
  transition: box-shadow 0.1s ease;
  transition: box-shadow 0.1s ease, -webkit-box-shadow 0.1s ease;
}

.ui.items > .item > .image + .content {
  min-width: 0;
  width: auto;
  display: block;
  margin-left: 0;
  -ms-flex-item-align: top;
  align-self: top;
  padding-left: 1.5em;
}

.tag-card .header-wrap > .header {
  margin-top: 0;
  margin-bottom: 0;
  float: left;
  font-size: 18px;
  font-weight: 550;
  color: #32aa66 !important;
}

.ui.image img {
  position: relative;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  display: block;
  float: none;
  margin: 0;
  padding: 0;
  -ms-flex-item-align: top;
}
.tags-content {
  margin-top: 15px;
  background: #fff;
  padding-top: 20px;
  padding-left: 20px;
}

.tags-content h2 {
  font-size: 14px;
  font-weight: 550;
  margin-top: 0px;
}

.message-top-rumb .breadcrumb {
  margin-bottom: 0px;
  padding-bottom: 6px;
}

.tags-warper .cards {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.tags-warper .cards .content .header {
  font-size: 14px;
  text-decoration: none;
  color: #409eff;
  font-weight: 550;
}

.tags-warper .cards .content .meta {
  color: #999;
  margin-top: 3px;
  margin-bottom: 3px;
}

.tags-warper .cards .content .description {
  font-size: 14px;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
}

.tags-warper .cards .content {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  border: none;
  border-top: 1px solid rgba(34, 36, 38, 0.1);
  background: 0 0;
  margin: 0;
  padding: 15px 15px;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: 14px;
  border-radius: 0;
}

.tags-warper .cards .card {
  max-width: 100%;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 290px;
  min-height: 0;
  background: #fff;
  padding: 0;
  border: none;
  margin-right: 50px;
  margin-bottom: 35px;
  border-radius: 0.14285714rem;
  -webkit-box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  -webkit-transition: -webkit-box-shadow 0.1s ease, -webkit-transform 0.1s ease;
  transition: -webkit-box-shadow 0.1s ease, -webkit-transform 0.1s ease;
  transition: box-shadow 0.1s ease, transform 0.1s ease;
  transition: box-shadow 0.1s ease, transform 0.1s ease,
    -webkit-box-shadow 0.1s ease, -webkit-transform 0.1s ease;
}

.message-top-rumb {
  padding-top: 20px;
  padding-left: 20px;
  background: #fff;
  padding-bottom: 15px;
}
</style>
