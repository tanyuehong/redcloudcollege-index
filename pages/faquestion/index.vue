<template>
  <section class="my_gogal">
    <div class="header_xuanchuan">
      <div class="container">
        <div class="header_annation">
          <h1 class="answer_title">开源实践问答，有问必答的社区</h1>
          <p class="desc">每一个问题，我们都会选择一个最优的答案。并且通过人工分类和技术专家维护问题列表，方便查找，为大家在学习路上解疑答惑。</p>
        </div>

        <img src="https://image.boxueio.com/swift-wtf-to-omg-avatar@2x.jpg" alt="问题描述"
          class="rounded-circle" />
        <div class="clear"></div>
      </div>
    </div>
    <div class="main_global_bg">
      <section class="container">
        <div class="main_content">
          <div class="question_right_con">
            <el-button type="danger" class="startqustionbtn" @click="jumpStartQuestion">我要提问</el-button>

            <div class="mod_about_teacher">
              <h3>最新公告</h3>
              <div class="answer_list">
                <ul>
                  <li>
                    <span></span>
                    <nuxt-link :to="'/about/detail/1523552231247499265'" target="_blank">开源实践问答上线</nuxt-link>
                  </li>
                  <li>
                    <span></span>
                    <nuxt-link :to="{ name: 'faquestion-howtoask' }" target="_blank">【新手提问导读】提问的艺术</nuxt-link>
                  </li>
                  <li>
                    <span></span>
                    <nuxt-link :to="'/faquestion/1481862372760240130'" target="_blank"
                      rel="nofollow noopener noreferrer">欢迎大家的建议和反馈</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="content_left">
            <div class="faqustion-top-group">
              <ul class="faqustion-typeList">
                <nuxt-link :to="typePath(item, index)" :title="item.name" v-for="(item, index) in qustionType"
                  :class="{ comactive: typeIndex == index }" :key="item.id" class="faqustion-type-item">
                  {{ item.name }}
                </nuxt-link>
              </ul>
            </div>
            <div class="faqustion-subTags" v-if="tagList.length > 0">
            </div>
            <div class="questions_tab_con">
              <ul class="faqustion-subtypelist">
                <nuxt-link :to="sortPath(item)" v-for="(item, index) in sortList" :key="item.path"
                  :class="{ comactive: typeIndex == index }" class="faqustion-subtype-item">
                  <span :title="item.name">
                    {{ item.name }}
                  </span>
                </nuxt-link>
              </ul>
            </div>
            <div class="questions_detail_con">
              <div class="nodata-warper" v-if="list.length == 0">
                <img class="nodata-image-tips" src="https://img.redskt.com/asset/img/nodata.png" alt="空数据提示"/>
                <div>
                  <span>暂时没有数据哦，赶紧抢沙发吧</span>
                </div>
              </div>
              <div v-for="item in list" :key="item.qid" class="question_list">
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
                  <nuxt-link :to="'/tags/' + tag.id" class="ui horizontal basic label popup-tag" target="_blank"
                    v-for="tag in item.tags" :key="tag.id">
                    <img :src="tag.img" v-if="tag.img" alt="标签图标"/>{{ tag.name }}
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
          <div class="clearnfloat"></div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>

import '~/assets/css/askindex.css'
import askServerApi from "@/api/askServerReq";

export default {
  data () {
    return {
      activeIndex: "1",
      tagList: [],
      typeIndex: 0,
      title: "开源实践问答 - 有问必答的务实问答社区",
      descrb: "开源实践问答，秉承有问必答的理念。对每一个问题细心维护，让您能用最短的时间获取最好的答案,是一个真正务实，能解决问题的社区。"
    };
  },

  head () {
    return {
      title: this.title,
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
    return askServerApi.getHomeAskQuestionList({ 'type': '', 'sort': '', 'tag': '' }).then((response) => {
      return {
        list: response.data.list ? response.data.list : [],
        qustionType: response.data.qustionType,
        sortList: response.data.sortList,
        type: response.data.qustionType[0].type,
      }
    })
  },

  mounted () {
  },

  computed: {
    // 计算属性的 getter
    typePath () {
      return function (item, index) {
        if (index == 0) {
          return "/faquestion";
        }
        return "/faquestion/category/" + item.type;
      }
    },

    sortPath () {
      return function (item) {
        return "/faquestion/category/" + this.type + "/" + item.path;
      }
    }
  },

  methods: {
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
