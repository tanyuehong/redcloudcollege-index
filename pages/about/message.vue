<template>
  <div class="main_global_bg">
    <div class="container main-content">
      <div class="col-md-8 mess-content-lefte">
        <div class="message-top-rumb">
          <div class="ui breadcrumb red_breadcrumb">
            <nuxt-link to="/" class="section">
              首页
            </nuxt-link>
            <span class="glyphicon glyphicon glyphicon-menu-right" aria-hidden="true"></span>
            <div class="active section">消息通知</div>
          </div>
        </div>

        <div class="questions_tab_con">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">综合</el-menu-item>
            <el-menu-item index="2">公告</el-menu-item>
            <!-- <el-menu-item index="3">社区</el-menu-item> -->
          </el-menu>
        </div>

        <div class="message-list">
          <ul>
            <li v-for="message in messageList" :key="message.id">
              <nuxt-link :to="'/about/detail/' + message.id" v-if="message.type == 0">
                {{ message.title }}
                <span class="message-detail">查看详情</span>
                <span class="message-time">{{ message.gmtCreate }}</span>
              </nuxt-link>
              <span v-if="message.type == 1">{{ message.title }}<span class="message-time">{{ message.gmtCreate
              }}</span></span>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-4">
        <div class="wechatma-con js-wechatma-con">
          <div class="ma-con">
            <div class="ma"></div>
            <div class="desc">
              <div class="title">扫码关注开源实践网服务号</div>
              <div class="item-con">
                <div class="item">干货分享</div>
                <div class="item">定期活动</div>
                <div class="item">课程优惠</div>
                <div class="item">专栏福利</div>
              </div>
            </div>
          </div>
          <div class="text-con">
            官方优惠福利活动一手掌握，关注开源实践官网（ID：www.redskt.com），和1万+客户端程序员一起成长！
          </div>
        </div>
        <div class="download-app clearfix">
          <img src="~/assets/img/appLogo.png" alt="" class="logo-icon fl" />
          <div class="text fl">
            <h4>下载开源实践APP</h4>
            <p>更好的体验 学习随处可享</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import '~/assets/css/appdown.css'
import messageApi from "@/api/index";

export default {
  data () {
    return {
      activeIndex: "1",
      tagList: [],
      typeIndex: 0,
      title: "问答公告- 开源实践问答",
      descrb: "开源实践问答公告中心，用来发布官方通知公告的中心，欢迎反馈哈~"
    };
  },

  asyncData ({ params, error }) {
    return messageApi.getMessageList().then((response) => {
      return {
        messageList: response.data.messageList
      }
    })
  },

  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: "开源实践通知中心，问答公告，开源实践问答反馈",
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

  methods: {
    qustionTypeClick (typeId, index) {
      this.typeIndex = index;
      if (index == 0) {
        typeId = "";
      }
      askApi.getHomeAskQuestionList({ 'type': index, 'qtype': typeId }).then((response) => {
        this.list = response.data.list;
        this.qustionType = response.data.qustionType;
      });
    },
    handleSelect (key, keyPath) {
    },
    jumpStartQuestion () {
      var token = localStorage.getItem('redclass_token')
      if (!(token && token != 'undefined')) {
        this.$message({
          message: "提问需要登录，正在跳转登录界面中！", type: 'error', duration: 2000, onClose: () => {
            $nuxt.$router.push({
              name: "user-login"
            });
          }
        })
        return;
      }
      var item = window.localStorage.getItem('show_howto-ask');
      if (item) {
        this.$router.push({
          name: "faquestion-ask",
          query: {},
        });
      } else {
        window.localStorage.setItem('show_howto-ask', '1')
        this.$router.push({
          name: "faquestion-howtoask",
          query: {},
        });
      }
    },
  },
};
</script>


<style scoped>
.message-list {
  margin-top: 20px;
}

.message-list li:hover:before {
  display: block;
  content: '';
  width: 5px;
  height: 100%;
  background: #409eff;
  position: absolute;
  top: 0;
}

.message-list .message-time {
  margin-right: 80px;
  float: right;
}

.message-list .message-detail {
  margin-right: 30px;
  float: right;
}

.message-list li:hover a {
  color: #409eff;
}

.message-list li a {
  display: block;
  color: #666;
  position: relative;
  width: 100%;
  height: 100%;
  text-decoration: none;
  padding-left: 8px;
}

.message-list li {
  height: 44px;
  border-bottom: 1px solid #e6e6e6;
  line-height: 44px;
  font-size: 14px;
  position: relative;
}

.mess-content-lefte .questions_tab_con {
  margin-left: -15px;
}

.main-content {
  min-height: 800px;
  margin-top: 15px;
}

.mess-content-lefte {
  background: #fff;
  padding: 15px;
  min-height: 800px;
  margin-bottom: 15px;
}
</style>
