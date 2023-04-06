<template>
  <div class="main_global_bg">
    <div class="container main_content">
      <div class="message-top-rumb">
        <div class="ui breadcrumb red_breadcrumb">
          <nuxt-link to="/" class="section"> 首页 </nuxt-link>
          <span class="glyphicon glyphicon glyphicon-menu-right" aria-hidden="true"></span>
          <nuxt-link to="/tags" class="section"> 所有标签 </nuxt-link>
          <span class="glyphicon glyphicon glyphicon-menu-right" aria-hidden="true"></span>
          <div class="active section">{{ tag.name }}</div>
        </div>
      </div>
      <div class="tags-content">
        <div class="ui basic segment tag-card">
          <div class="ui items">
            <div class="item">
              <div class="ui image">
                <img :src="tag.img" alt="标签图片"/>
              </div>
              <div class="content">
                <div class="header-wrap clearfix">
                  <h2 class="ui header green">{{ tag.name }}</h2>
                </div>
                <div class="description">
                  {{ tag.describ }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tag-list-container">
          <div class="question-tab-wrap">
            <a href="?show=updated" class="item active">问题列表</a>
            
            <!-- <a href="?show=my_reply" class="item">文章列表</a>
            <a href="?show=my_reply" class="item">专题列表</a>
            <a href="?show=my_reply" class="item">视频列表</a>
            <a href="?show=my_reply" class="item">书籍列表</a> -->
          </div>


          <div class="content-list">
            <div class="questions_detail_con" v-if="parmType == 'ask' || !parmType">
              <div class="nodata-warper" v-if="qustionList.length == 0">
                <img class="nodata-image-tips" src="https://img.redskt.com/asset/img/nodata.png" alt="空数据提示"/>
                <div>
                  <span>暂时没有数据哦，赶紧抢沙发吧</span>
                </div>
              </div>
              <div v-for="item in qustionList" :key="item.qid" class="question_list">
                <div class="answer_title">
                  <nuxt-link :to="'/faquestion/' + item.qid" class="header">
                    {{ item.title }}
                    <div class="ui red label horizontal">顶</div>
                    <div class="ui orange label horizontal" v-if="item.readcount > 300">热</div>
                    <div class="ui red label horizontal fix" v-if="item.state == 9">已解决</div>
                  </nuxt-link>
                </div>

                <div class="description" v-html="item.content">
                </div>
                <div class="extra question-tags" v-if="item.tags">
                 <nuxt-link :to="'/tags/' + tag.id" class="ui horizontal basic label popup-tag" 
                    target="_blank" v-for="tag in item.tags" :key="tag.id">
                    <img :src="tag.img" v-if="tag.img" alt="图片标签"/>{{ tag.name }}
                  </nuxt-link>
                </div>

                <div class="q_time">
                  <span>{{ item.gmtCreate }}来自</span>
                  <nuxt-link :to="'/user/' + item.uid + '/blog'" class="user_name" target="_blank">
                    {{ item.nickname }}
                  </nuxt-link>
                  <b v-if="item.price > 0">
                    悬赏
                    <a href="javascript:;" title="个人悬赏">¥{{ item.price }}</a>
                  </b>
                  <nuxt-link :to="'/faquestion/' + item.qid" class="answer_num" title="问题回答数量">
                    <span>{{ item.reply }}</span>
                    <p class="anser-lable">回答</p>
                  </nuxt-link>
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

import '~/assets/css/askindex.css'
import tagServerApi from "@/api/tagServerReq";

export default {
  data () {
    return {
      tagsList: []
    };
  },

  asyncData ({ params, error }) {
    return tagServerApi.getTagDetail(params.id).then(response => {
      return {
        tag: response.data.tag,
        qustionList: response.data.qustionList,
        parmType: params.type
      };
    });
  },

  head () {
    return {
      title: this.tag.name + "详情 - 开源实践网",
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content: this.tag.name
        },
        {
          hid: "description",
          name: "description",
          content: this.tag.describ
        },
        {
          hid: "og:description",
          content: this.tag.describ
        }
      ]
    };
  },

  mounted () { },

  methods: {}
};
</script>

<style>

.content-list {
  margin-top: 15px;
}

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
  margin-top: 50px;
}

.question-tab-wrap .item {
  font-weight: 500;
  color: #333;
  font-size: 18px;
  margin-right: 30px;
  padding-left: 6px;
  padding-right: 6px;

  padding-bottom: 12px;
  text-decoration: none;
}

.question-tab-wrap .item.active {
  border-bottom: 2px solid #409EFF;
}

.item .content .description {
  margin-top: 8px;
  max-width: auto;
  font-size: 14px;
  line-height: 1.4285em;
  color: rgba(0, 0, 0, 0.87);
}

.ui.items>.item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin:0px;
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

.ui.items>.item>.image+.content {
  min-width: 0;
  width: auto;
  display: block;
  margin-left: 0;
  -ms-flex-item-align: top;
  align-self: top;
  padding-left: 1.5em;
}

.tag-card .header-wrap>.header {
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
  background: #fff;
  padding-top: 10px;
  padding-left: 20px;
}

.message-top-rumb .breadcrumb {
  margin-bottom: 0px;
  padding-bottom: 6px;
}

.message-top-rumb {
  padding-top: 20px;
  padding-left: 20px;
  background: #fff;
  padding-bottom: 15px;
}
</style>
