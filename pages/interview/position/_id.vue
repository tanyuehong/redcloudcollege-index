<template>
  <div class="main_global_bg">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="jon-content">
            <div class="position-header">
              <div class="ui breadcrumb red_breadcrumb">
                <nuxt-link :to="{ name: 'faquestion' }" class="section">
                  开源实践面试
                </nuxt-link>
                <span class="glyphicon glyphicon glyphicon-menu-right" aria-hidden="true"></span>
                <div class="active section">iOS工程师</div>
              </div>
            </div>
            <div class="command">
              <h3 class="positionTitle">推荐</h3>
              <div class="recommand-content">
                <a class="recommand-item">
                  <img src="https://pic.leetcode.cn/1671096669-dBFLhZ-题库.png"
                    class="object-cover md:h-full md:w-full h-[100px] w-[200px]" alt="动态规划基础模型">
                </a>
              </div>

              <h3 class="positionTitle">知识网络</h3>
              <div class="recommand-content">
                <a class="recommand-item">
                  <img src="https://pic.leetcode.cn/1671096669-dBFLhZ-题库.png"
                    class="object-cover md:h-full md:w-full h-[100px] w-[200px]" alt="动态规划基础模型">
                </a>
              </div>
            </div>

            <div class="question-content">
              <div class="filter-btns">
                <div class="filter-btn">
                  <div class="svg-img">
                  <svg t="1673596319193" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="2936">
                    <path d="M0 0h1024v1024H0V0z" fill="#202425" opacity=".01" p-id="2937"></path>
                    <path
                      d="M102.4 238.933333a136.533333 136.533333 0 0 1 136.533333-136.533333h102.4a136.533333 136.533333 0 0 1 136.533334 136.533333v102.4a136.533333 136.533333 0 0 1-136.533334 136.533334H238.933333a136.533333 136.533333 0 0 1-136.533333-136.533334V238.933333z m0 443.733334a136.533333 136.533333 0 0 1 136.533333-136.533334h102.4a136.533333 136.533333 0 0 1 136.533334 136.533334v102.4a136.533333 136.533333 0 0 1-136.533334 136.533333H238.933333a136.533333 136.533333 0 0 1-136.533333-136.533333v-102.4z m580.266667-136.533334a136.533333 136.533333 0 0 0-136.533334 136.533334v102.4a136.533333 136.533333 0 0 0 136.533334 136.533333h102.4a136.533333 136.533333 0 0 0 136.533333-136.533333v-102.4a136.533333 136.533333 0 0 0-136.533333-136.533334h-102.4z"
                      fill="#FF7744" p-id="2938"></path>
                    <path
                      d="M546.133333 238.933333a136.533333 136.533333 0 0 1 136.533334-136.533333h102.4a136.533333 136.533333 0 0 1 136.533333 136.533333v102.4a136.533333 136.533333 0 0 1-136.533333 136.533334h-102.4a136.533333 136.533333 0 0 1-136.533334-136.533334V238.933333z"
                      fill="#FFAA44" p-id="2939"></path>
                  </svg>
                  </div>
                  全部题目
                </div>         
              </div>
              <div class="job-question-list">
                <div class="question-header">
                  <div class="question-header-title col5">
                    <div class="flex fbselect" @click="sortTypeClick(0)">
                      <div class="overflow-hidden text-ellipsis">题目</div>
                      <span v-html="sortArr[0].htmlContent"></span>
                    </div>
                  </div>
                  <div class="question-header-title col2 marginl">
                    <div class="flex fbselect" @click="sortTypeClick(1)">
                      <div class="overflow-hidden text-ellipsis">题解</div>
                      <span v-html="sortArr[1].htmlContent"></span>
                    </div>
                  </div>
                  <div class="question-header-title col2 ">
                    <div class="flex fbselect" @click="sortTypeClick(2)">
                      <div class="overflow-hidden text-ellipsis">状态</div>
                      <span v-html="sortArr[2].htmlContent"></span>
                    </div>
                  </div>
                  <div class="question-header-title col2">
                    <div class="flex fbselect" @click="sortTypeClick(3)">
                      <div class="overflow-hidden text-ellipsis">难度</div>
                      <span v-html="sortArr[3].htmlContent"></span>
                    </div>
                  </div>
                  <div class="question-header-title col2">
                    <div class="flex fbselect" @click="sortTypeClick(4)">
                      <div class="overflow-hidden text-ellipsis">出现频率</div>
                      <span v-html="sortArr[4].htmlContent"></span>
                    </div>
                  </div>
                </div>

                <div class="row qustion-list">
                  <div class="qustion-list-item" v-for="item in list" :key="item.id">
                    <div role="cell" class="qustion-title col5">
                      <span class="truncate">
                        <nuxt-link :to="'/interview/detail/' + item.qid" target="_blank" class="item-title">
                          {{ item.title }}
                        </nuxt-link>
                      </span>
                    </div>
                    <div role="cell" class="qustion-title col2 marginl">
                      <span class="q-item-title">
                        <nuxt-link :to="'/interview/detail/' + item.qid" target="_blank">
                          {{ item.reply }}
                        </nuxt-link>
                      </span>
                    </div>
                    <div role="cell" class="qustion-title col2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="flex-0 -mt-1.5 h-5 w-5 text-gray-5 dark:text-gray-7"><path fill-rule="evenodd" d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z" clip-rule="evenodd"></path></svg>
                    </div>
                    <div role="cell" class="qustion-title col2"><span class="text-yellow dark:text-dark-yellow">{{
                      item.deep
                    }}</span></div>
                    <div role="cell" class="qustion-title col2">
                      <div class="showtimes-rate">
                        <span class="vale-rate" :style="frequency(item)"></span>
                        <span class="gray-all" :style="frequencyBack(item)"></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="page-content" v-if="page">
                  <div class="relative"><button class="flex page-numbers" type="button" aria-haspopup="true"
                      aria-expanded="false" data-headlessui-state="">50 条/页<svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"
                        class="pointer-events-none ml-3" aria-hidden="true">
                        <path fill-rule="evenodd"
                          d="M4.929 7.913l7.078 7.057 7.064-7.057a1 1 0 111.414 1.414l-7.77 7.764a1 1 0 01-1.415 0L3.515 9.328a1 1 0 011.414-1.414z"
                          clip-rule="evenodd"></path>
                      </svg></button></div>
                  <nav role="navigation" class="flex page-items">
                    <button class="flex page-button">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em"
                        fill="currentColor" class="text-label-2 dark:text-dark-label-2">
                        <path fill-rule="evenodd"
                          d="M16.091 4.929l-7.057 7.078 7.057 7.064a1 1 0 01-1.414 1.414l-7.764-7.77a1 1 0 010-1.415l7.764-7.785a1 1 0 111.415 1.414z"
                          clip-rule="evenodd"></path>
                      </svg></button>
                    <button class="flex page-button">1</button>
                    <button class="flex page-button">2</button>
                    <button class="flex page-button">3</button>
                    <button class="flex page-button">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em"
                        fill="currentColor" class="text-label-2 dark:text-dark-label-2">
                        <path fill-rule="evenodd"
                          d="M4.4 14a2 2 0 100-4 2 2 0 000 4zm9.6-2a2 2 0 11-4 0 2 2 0 014 0zm7.6 0a2 2 0 11-4 0 2 2 0 014 0z"
                          clip-rule="evenodd"></path>
                      </svg></button><button class="flex page-button">59</button><button class="flex page-button"
                      aria-label="next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em"
                        height="1em" fill="currentColor" class="text-label-2 dark:text-dark-label-2">
                        <path fill-rule="evenodd"
                          d="M7.913 19.071l7.057-7.078-7.057-7.064a1 1 0 011.414-1.414l7.764 7.77a1 1 0 010 1.415l-7.764 7.785a1 1 0 01-1.414-1.414z"
                          clip-rule="evenodd"></path>
                      </svg></button>
                  </nav>
                  <div class="clearfloat"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <client-only>
          <div class="user-sign">
            <Calendar ref="Calendar" :markDateMore="signArr" v-on:isToday="clickToday"
              agoDayHide="1530115221" v-on:choseDay="clickDay" v-on:changeMonth="changeDate"></Calendar>
          
            <div class="sin-desc">
              <span class="des-notice">注:</span>
              <span class="date-style cb-green"></span><span class="des-lable">已学习</span>
              <span class="date-style cb-blue"></span><span class="des-lable">补签</span>
              <span class="date-style cb-yellow"></span><span class="des-lable">今天</span>
            </div>

            <div class="sign-btn">
              <el-button type="success" size="medium" @click="signBtnClick">{{ signTitle }}</el-button>
            </div>
          </div>
          </client-only>
        </div>
      </div>
    </div>
    <div class="foot-menu">
      <!---导航具体内容-->
    </div>
  </div>
</template>

<script>

import interviewSudyApi from "@/api/interviewStudyReq";
import interviewServerApi from "@/api/interviewServerReq";

export default {
  data() {
    return {
      activeIndex: "1",
      isLogin:false,
      signTitle:"登录",
      signDate:"",
      tagList: [],
      signArr: [],
      sortArr:[],
    }
  },

  head() { },

  asyncData({ params, error }) {
    return interviewServerApi
      .getPositionQuestionList({
        type: params.type ? params.type : "",
        sort: 3,
        tag: (params.tag && params.tag != 'recommand' && params.tag != 'latest' && params.tag != 'hot')
          ? params.tag : "",
      })
      .then((response) => {
        return {
          list: response.data.list ? response.data.list : [],
          typeList: response.data.typeList,
          tagList: response.data.tagList,
          sort: (params.tag == "latest" || params.tag == "hot") ? params.tag : (params.sort ? params.sort : "recommand"),

          tag: (params.tag && params.tag != 'recommand' && params.tag != 'latest' && params.tag != 'hot')
            ? params.tag : "all",
          page:false
        };
      });
  },

  created() {
    var list = [];
    for (var j = 0; j < 5; j++) {
      list.push({type:1,htmlContent:this.getHtmlContent(1)});
    }
    this.sortArr = list;
},

  mounted() { 
    var token = localStorage.getItem("redclass_token");
    var userStr = localStorage.getItem("redclass_user");
    if (!(token && token != "undefined") || !(userStr && userStr != "undefined")) {
      this.isLogin = false;
    } else {
      this.signTitle = "今日签到";
      this.loginInfo = JSON.parse(userStr)
      this.isLogin = true;
      interviewSudyApi.getSignDateList()
          .then((response) => {
             window.console.log(response.data.dateList);
             var dateList = response.data.dateList;
             var list = [];
             for (var j = 0; j < dateList.length; j++) {
                list.push({date:dateList[j],className:"calendar_date"});
             }
             this.signArr = list;
             window.console.log(this.signArr);
           });
    };
  },

  computed: {
    frequency () {
      return function (item) {
        return "width:" + 70*0.9 + "px";
      }
    },

    frequencyBack (item) {
      return function (item) {
        return "width:" + (70-70*0.9) + "px";
      }
    },
  },

  methods: {
    clickToday(data) {
      this.signTitle = "今日签到";
      if(this.signDate.length ==0){
        this.signDate = data;
        window.console.log(this.signDate+"111")
      }
    },
    clickDay(data) {
      this.signDate = data;
      console.log(this.signDate+"222"); // 跳到了本月
    },
    changeDate() {
    },
    signBtnClick() {
      if(!this.isLogin) {
        $nuxt.$router.push({
              name: "user-login",
            });
      } else {
      var params = {date:this.signDate};
      window.console.log(params);
      interviewSudyApi.submitInterviewSign(params)
          .then((response) => {
           
           });
      }
    },
    sortTypeClick(index) {
      for (var i = 0; i < this.sortArr.length; i++) {
        if(i == index) {
          continue;
        }
        var otherParm = this.sortArr[i];
        if(otherParm.type == 1) {
          continue;
        } else {
          otherParm.type == 1
          otherParm.htmlContent = this.getHtmlContent(1);
        }
      }
      var sortParm = this.sortArr[index];
      if(sortParm.type == 1) {
        sortParm.type = 2;
        sortParm.htmlContent = this.getHtmlContent(2);
      } else if(sortParm.type == 2) {
        sortParm.type = 3;
        sortParm.htmlContent = this.getHtmlContent(3);
      } else {
        sortParm.type = 1;
        sortParm.htmlContent = this.getHtmlContent(1);
      }
    },
    getHtmlContent(type) {
      if(type == 1) {
        return "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"margin-left:8px;margin-top:3px;\" viewBox=\"0 0 24 24\" width=\"1em\" height=\"1em\" fill=\"currentColor\"><path d=\"M18.695 9.378L12.83 3.769a1.137 1.137 0 00-.06-.054c-.489-.404-1.249-.377-1.7.06L5.303 9.381a.51.51 0 00-.16.366c0 .297.27.539.602.539h12.512a.64.64 0 00.411-.146.501.501 0 00.028-.762zM12.77 20.285c.021-.017.042-.035.062-.054l5.863-5.609a.5.5 0 00-.028-.762.64.64 0 00-.41-.146H5.743c-.332 0-.601.242-.601.54a.51.51 0 00.16.365l5.769 5.606c.45.437 1.21.464 1.698.06z\"></path></svg>";
      } else if(type == 2) {
        return "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"margin-left:8px;margin-top:3px;\" viewBox=\"0 0 14 14\" width=\"1em\" height=\"1em\" fill=\"currentColor\"><path d=\"M7.44926 11.8332C7.46161 11.8229 7.47354 11.8123 7.48504 11.8013L10.9052 8.52958C11.0376 8.4029 11.0305 8.20389 10.8893 8.08509C10.8243 8.03043 10.7385 8.00001 10.6495 8.00001H3.35053C3.15694 8.00001 3 8.1408 3 8.31447C3 8.39354 3.0332 8.46971 3.09299 8.5278L6.45859 11.7977C6.72125 12.0529 7.16479 12.0688 7.44926 11.8332Z\"></path></svg>";
      } else {
        return "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"margin-left:8px;margin-top:3px;\" viewBox=\"0 0 14 14\" width=\"1em\" height=\"1em\" fill=\"currentColor\"><path d=\"M10.9052 5.47044L7.48504 2.19872C7.47354 2.18772 7.46161 2.1771 7.44926 2.16687C7.16479 1.93123 6.72125 1.94709 6.45859 2.20229L3.09299 5.47222C3.0332 5.53031 3 5.60648 3 5.68555C3 5.85922 3.15694 6.00001 3.35053 6.00001H10.6495C10.7385 6.00001 10.8243 5.96959 10.8893 5.91493C11.0305 5.79613 11.0376 5.59712 10.9052 5.47044Z\"></path></svg>";
      }
    }
  }
};
</script>

<style scoped>

.sin-desc {
  width: 225px;
  display: flex;
  margin: 0 auto;
}

.sin-desc .des-lable {
  display: inline-block;
  line-height: 20px;
  color: #333;
  margin-left: 6px;
}

.sin-desc .des-notice {
  display: inline-block;
  line-height: 20px;
  color: #333;
  font-weight: 600;
}

.sin-desc .date-style {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 12px;
  margin-left: 15px;
}

.foot-menu {
  width: 100%;
  height: 60px;
  background: #000;
  position: fixed;
  bottom: 0;
  /**距离底部为0*/
  left: 0;
  z-index: 1;
}

.job-question-list {
  margin-top: 20px;
  margin-left: 15px;
  margin-right: 15px;
}

.job-question-list .question-header {
  display: flex;
  flex: 1 0 auto;
  min-width: 0px;
}

.job-question-list .question-header .question-header-title {
  cursor: pointer;
  padding: 0px;
  font-size: 14px;
  color: #666;
  margin-left: 8px;
}

.job-question-list .question-header .question-header-title .flex span svg {
  margin-top: 2px;
  margin-left: 6px;
}

.job-question-list .col5 {
  width: 300px;
}

.job-question-list .col2 {
  width: 100px;
}

.job-question-list .qustion-list {
  margin-top: 10px;
}

.job-question-list .qustion-list-item {
  display: flex;
  flex: 1 0 auto;
  min-width: 0px;
  padding-left: 15px;
}

.job-question-list .qustion-list-item .qustion-title .item-title {
  display: inline-block;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  color: #333;
}

.job-question-list .qustion-list-item .qustion-title {
  box-sizing: border-box;
  min-width: 0px;
  padding-top: 9px;
  padding-bottom: 8px;
  font-size: 14px;
  margin-left: 8px;
  padding-left: 1px;
}

.job-question-list .question-header question-header-title.col2.marginl,
.job-question-list .qustion-list-item .qustion-title.marginl {
  margin-left: 12px;
}

.job-question-list .qustion-list-item .qustion-title .showtimes-rate {
  display: flex;
  padding-top: 8px;
}

.job-question-list .qustion-list-item .qustion-title .showtimes-rate .vale-rate {
  background: rgba(0, 122, 255, 0.6);
  width: 35px;
  display: block;
  height: 8px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.job-question-list .qustion-list-item .qustion-title .showtimes-rate .gray-all {
  background: rgba(0, 10, 32, .05);
  width: 35px;
  display: block;
  height: 8px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  margin-left: 0px;
}


.job-question-list .qustion-list-item:nth-child(even) {
  background: rgba(247, 248, 250, 1);
}

.job-question-list .qustion-list-item .qustion-title .q-item-title {
  text-align: center;
}

.job-question-list .qustion-list-item .qustion-title .q-item-title a {
  text-align: center;
}

.job-question-list .qustion-list-item .qustion-title a {
  color: #333;
  text-decoration: none;
}

.job-question-list .qustion-list-item .qustion-title a:hover {
  color: rgba(0, 122, 255, 1);
}

.page-content {
  margin-top: 15px;
  padding-bottom: 15px;
}

.page-content .page-items {
  margin-right: 20px;
  float: right;
}

.page-content .page-numbers {
  float: left;
  font-size: 12px;
}

.page-content .page-numbers svg,
.page-content .page-button svg {
  margin-top: 4px;
  margin-left: 2px;
}

.page-content .page-button {
  margin-left: 6px;
}

.sub-question-list {
  margin-top: 15px;
}

.overflow-hidden.text-ellipsis {
  font-size: 14px;
  color: #666;
}

.question-content {
  margin-top: 20px;
  max-width: 773px;
}

.filter-btns {
  display: flex;
  margin-left: 15px;
}

.filter-btns .filter-btn {
  background-color: rgba(0, 10, 32, .05);
  height: 36px;
  margin-right: 25px;
  border-radius: 12px;
  color: #666;
  font-size: 14px;
  line-height: 36px;
  padding-left: 12px;
  padding-right: 12px;
  cursor: pointer;
  display: flex;
}

.filter-btns .filter-btn:hover {
  background-color: rgba(0, 10, 32, .1);
}

.filter-btns .filter-btn svg {
  height: 23px;
  width: 23px;
  margin-top: 6px;
  margin-right: 3px;
}

.jon-content {
  background: #fff;
  margin-left: -15px;
  margin-right: -15px;
  border-radius: 10px;
}

.command {
  padding-left: 15px;
}

.command .positionTitle {
  font-weight: 500;
  color: #666;

}

.command .recommand-content .recommand-item img {
  width: 270px;
  height: 135px;
  border-radius: 6px;
}

.user-sign {
  margin-top: 10px;
  background: #fff;
  padding-bottom: 15px;
  max-width: 620px;
}

.user-sign .sign-btn {
  margin: 0 auto;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 10px;
}

.user-sign .wh_container {
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
}

.position-header {
  margin-top: 10px;
  padding-top: 15px;
  padding-left: 15px;
  background: #fff;
}

.position-header .positionTitle {
  text-align: center;
  padding-top: 15px;
}

.position-decrib {
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  padding-bottom: 50px;
}

.position-decrib dl {
  width: 228px;
  height: 260px;
  margin-right: 10px;
  margin-top: 30px;
}

.position-decrib dl img {
  width: 228px;
}

.position-decrib dd {
  color: #8c8c8c;
  font: 18px/28px "Microsoft YaHei";
  padding-top: 15px;
  font-size: 14px;
  text-align: center;
}

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
</style>
