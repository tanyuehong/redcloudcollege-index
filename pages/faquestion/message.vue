<template>
  <div class="main_global_bg">
    <div class="container main-content">
      <div class="mess-content-lefte">
        <div class="message-top-rumb">
          <div class="ui breadcrumb red_breadcrumb">
            <nuxt-link :to="{name:'faquestion'}"
                       class="section">
              实践问答
            </nuxt-link>
            <span class="glyphicon glyphicon glyphicon-menu-right"
                  aria-hidden="true"></span>
            <div class="active section">消息通知</div>
          </div>
        </div>

        <div class="questions_tab_con">
          <el-menu :default-active="activeIndex"
                   class="el-menu-demo"
                   mode="horizontal"
                   @select="handleSelect">
            <el-menu-item index="1">综合</el-menu-item>
            <el-menu-item index="2">公告</el-menu-item>
            <el-menu-item index="3">社区</el-menu-item>
          </el-menu>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.mess-content-lefte .questions_tab_con{
  margin-left: -15px;
}
.main-content {
  min-height: 800px;
}
.mess-content-lefte {
  background: #fff;
  padding: 15px;
}

.mess-content-lefte .message-top-rumb {
}
</style>

<script>
import askApi from "@/api/askqustion";
import askServerApi from "@/api/askserver";

export default {
  data () {
    return {
      activeIndex: "1",
      tagList: [],
      typeIndex: 0,
      title: "问答公告-开源实践问答",
      descrb: "开源实践问答公告中心，用来发布官方通知公告的中心，欢迎反馈哈~"
    };
  },

  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: "问答公告，问答反馈中心，开源实践问答反馈",
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
    return askServerApi.getHomeAskQuestionList({ 'type': 1, 'qtype': '' }).then((response) => {
      return {
        list: response.data.list,
        qustionType: response.data.qustionType,
      }
    })
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
      var qtype = this.typeIndex == 0 ? "" : this.qustionType[this.typeIndex].id;
      askApi.getHomeAskQuestionList({ 'type': key, 'qtype': qtype }).then((response) => {
        this.list = response.data.list;
        this.qustionType = response.data.qustionType;
      });
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
