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
              <div class="filter-btns row">

                <div class="filter-btn">
                  <svg t="1673596319193" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="2936" width="64" height="64">
                    <path d="M0 0h1024v1024H0V0z" fill="#202425" opacity=".01" p-id="2937"></path>
                    <path
                      d="M102.4 238.933333a136.533333 136.533333 0 0 1 136.533333-136.533333h102.4a136.533333 136.533333 0 0 1 136.533334 136.533333v102.4a136.533333 136.533333 0 0 1-136.533334 136.533334H238.933333a136.533333 136.533333 0 0 1-136.533333-136.533334V238.933333z m0 443.733334a136.533333 136.533333 0 0 1 136.533333-136.533334h102.4a136.533333 136.533333 0 0 1 136.533334 136.533334v102.4a136.533333 136.533333 0 0 1-136.533334 136.533333H238.933333a136.533333 136.533333 0 0 1-136.533333-136.533333v-102.4z m580.266667-136.533334a136.533333 136.533333 0 0 0-136.533334 136.533334v102.4a136.533333 136.533333 0 0 0 136.533334 136.533333h102.4a136.533333 136.533333 0 0 0 136.533333-136.533333v-102.4a136.533333 136.533333 0 0 0-136.533333-136.533334h-102.4z"
                      fill="#FF7744" p-id="2938"></path>
                    <path
                      d="M546.133333 238.933333a136.533333 136.533333 0 0 1 136.533334-136.533333h102.4a136.533333 136.533333 0 0 1 136.533333 136.533333v102.4a136.533333 136.533333 0 0 1-136.533333 136.533334h-102.4a136.533333 136.533333 0 0 1-136.533334-136.533334V238.933333z"
                      fill="#FFAA44" p-id="2939"></path>
                  </svg>
                  全部题目
                </div>
                <div class="filter-btn">
                  <svg t="1673605999758" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="11448" width="64" height="64">
                    <path
                      d="M775.111111 715.377778H311.466667c-52.622222 0-95.288889-42.666667-95.288889-95.288889V334.222222c0-52.622222 42.666667-95.288889 95.288889-95.288889h463.644444c52.622222 0 95.288889 42.666667 95.288889 95.288889v285.866667c0 52.622222-42.666667 95.288889-95.288889 95.288889zM311.466667 295.822222c-21.333333 0-38.4 17.066667-38.4 38.4v285.866667c0 21.333333 17.066667 38.4 38.4 38.4h463.644444c21.333333 0 38.4-17.066667 38.4-38.4V334.222222c0-21.333333-17.066667-38.4-38.4-38.4H311.466667z"
                      fill="#3FA6AD" p-id="11449"></path>
                    <path
                      d="M543.288889 856.177778c-15.644444 0-28.444444-12.8-28.444445-28.444445v-140.8c0-15.644444 12.8-28.444444 28.444445-28.444444s28.444444 12.8 28.444444 28.444444v140.8c0 15.644444-12.8 28.444444-28.444444 28.444445z"
                      fill="#3FA6AD" p-id="11450"></path>
                    <path
                      d="M732.444444 874.666667H354.133333c-15.644444 0-28.444444-12.8-28.444444-28.444445s12.8-28.444444 28.444444-28.444444h378.311111c15.644444 0 28.444444 12.8 28.444445 28.444444s-12.8 28.444444-28.444445 28.444445z"
                      fill="#3FA6AD" p-id="11451"></path>
                    <path
                      d="M466.488889 435.2h-81.066667c-15.644444 0-28.444444-12.8-28.444444-28.444444s12.8-28.444444 28.444444-28.444445h81.066667c15.644444 0 28.444444 12.8 28.444444 28.444445s-12.8 28.444444-28.444444 28.444444zM702.577778 576H385.422222c-15.644444 0-28.444444-12.8-28.444444-28.444444s12.8-28.444444 28.444444-28.444445h318.577778c15.644444 0 28.444444 12.8 28.444444 28.444445s-14.222222 28.444444-29.866666 28.444444z"
                      fill="#DC4569" p-id="11452"></path>
                  </svg>
                  计算机基础
                </div>
                <div class="filter-btn">
                  <svg t="1673606053385" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="13250" width="64" height="64">
                    <path
                      d="M628.01427 125.801171c-2.312672 26.25906-16.610306 47.514153-23.671119 56.564273-13.511735 17.336854-33.846876 30.103622-53.725622 34.441417 1.865487-26.391067 18.569938-48.873104 24.449855-56.018851C588.064396 145.086399 608.408747 131.955334 628.01427 125.801171L628.01427 125.801171zM680.887478 330.603627c40.271192 0 69.15094 8.970302 103.062284 41.282219-54.171784 41.389666-76.458369 114.270557-71.53729 184.253444 5.081739 72.621994 42.207287 147.851373 104.108103 181.330882-12.411681 26.452465-18.438954 36.84721-36.924981 64.883753-32.205493 49.197492-68.601424 99.272981-114.462938 99.740632l-0.801249 0c-18.379603 0-30.125111-5.39487-46.3834-12.836353-20.973684-9.616008-47.110971-21.594831-91.118254-21.594831l-1.334391 0c-44.268226 0.265036-70.862931 12.104689-92.234681 21.629623-16.72901 7.457856-28.822442 12.850679-47.409776 12.850679l-1.136893 0c-47.174416-0.356111-88.069825-53.506635-118.434389-99.785657-96.060823-146.272411-95.90835-305.381176-47.009663-380.786563 36.523845-56.087413 93.677543-90.909499 149.141762-90.909499 28.841885 0 52.252061 8.343015 77.054957 17.178241 24.484647 8.715499 49.803289 17.744129 79.434144 17.744129 28.110221 0 50.741661-8.555863 72.623018-16.826224 23.592324-8.924253 48.02069-18.154475 83.365686-18.154475L680.887478 330.603627zM680.893618 61.494563c-48.249911 3.269463-104.547101 34.014698-137.524167 73.884754-29.903054 36.346813-54.594409 90.173742-44.907793 142.480039 1.277086 0.045025 2.526543 0.057305 3.789303 0.057305 51.361785 0 103.963817-30.838356 134.830825-70.441329 29.589922-37.904285 51.965535-91.305519 43.812855-145.981792L680.893618 61.494563zM698.744171 272.016277c-81.283258 0-115.546619 38.566364-171.972746 38.566364-58.000995 0-102.195543-38.501896-172.520215-38.501896-69.034283 0-142.327566 41.900296-188.969862 113.541963-65.331961 100.752682-54.258765 290.248524 51.882648 451.871551 37.851073 57.70219 88.615247 122.713856 154.848741 123.230626 0.50142 0 0.984421 0 1.470491 0 57.815777 0 74.80573-37.546128 154.122193-38.019918 0.445138 0 0.858554 0 1.299599 0 78.304414 0 93.88732 37.95852 151.591557 37.95852 0.372483 0 0.74292 0 1.143033 0 66.288752-0.687662 119.788224-72.602551 157.581991-130.337487 27.28646-41.35385 37.419238-62.282508 58.57507-109.11207C744.366232 663.229307 719.613478 446.453145 871.499747 363.205139c-46.299489-57.778938-111.345947-91.189885-172.754552-91.189885L698.744171 272.016277"
                      fill="#d81e06" p-id="13251"></path>
                  </svg>
                  iOS平台
                </div>
                <div class="filter-btn">
                  Objective-C
                </div>
                <div class="filter-btn">
                  <svg t="1673606186910" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="13682" width="64" height="64">
                    <path
                      d="M729.045333 841.429333c-100.693333 58.026667-238.506667 64-378.026666 4.266667a589.098667 589.098667 0 0 1-265.813334-226.986667c28.586667 23.466667 62.293333 42.666667 98.133334 59.733334 143.786667 66.986667 287.146667 62.293333 388.266666 0-143.786667-110.506667-266.24-254.293333-357.12-371.626667-19.2-19.2-33.28-43.093333-47.786666-64.426667 353.28 258.133333 337.92 323.84 102.826666-43.093333 208.64 210.773333 402.346667 330.24 402.346667 330.24 6.826667 3.84 10.666667 6.826667 15.36 9.386667 4.266667-10.666667 8.106667-21.76 11.093333-33.28 33.706667-121.6-4.693333-261.12-88.746666-375.893334 194.133333 117.333333 309.333333 337.493333 261.12 522.24-1.28 4.693333-2.56 9.386667-2.133334 16.64 95.573333 120.746667 69.973333 246.613333 57.6 222.72-51.626667-101.973333-148.48-70.4-197.12-49.92z"
                      fill="#FE5E2F" p-id="13683"></path>
                  </svg>
                  Swift
                </div>
              </div>
              <div class="job-question-list">
                <div class="question-header">
                  <div class="question-header-title col5">
                    <div class="flex">
                      <div class="overflow-hidden text-ellipsis">题目</div>
                      <span v-html="sort0"></span>
                    </div>
                  </div>
                  <div class="question-header-title col2 marginl">
                    <div class="flex">
                      <div class="overflow-hidden text-ellipsis">题解</div>
                      <span v-html="sort1"></span>
                    </div>
                  </div>
                  <div class="question-header-title col2 ">
                    <div class="flex">
                      <div class="overflow-hidden text-ellipsis">通过率</div>
                      <span v-html="sort2"></span>
                    </div>
                  </div>
                  <div class="question-header-title col2">
                    <div class="flex">
                      <div class="overflow-hidden text-ellipsis">难度</div>
                      <span v-html="sort3"></span>
                    </div>
                  </div>
                  <div colspan="1" role="columnheader" class="question-header-title col-md-2"
                    style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px;">
                    <div class="flex  ">
                      <div class="overflow-hidden text-ellipsis">出现频率</div>
                      <span v-html="sort4"></span>
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
                      <span>42.5%</span>
                    </div>
                    <div role="cell" class="qustion-title col2"><span class="text-yellow dark:text-dark-yellow">{{
                      item.deep
                    }}</span></div>
                    <div role="cell" class="qustion-title col2">
                      <div class="showtimes-rate">
                        <span class="vale-rate"></span>
                        <span class="gray-all"></span>
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
      sort0:"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"1em\" height=\"1em\" fill=\"currentColor\"><path d=\"M18.695 9.378L12.83 3.769a1.137 1.137 0 00-.06-.054c-.489-.404-1.249-.377-1.7.06L5.303 9.381a.51.51 0 00-.16.366c0 .297.27.539.602.539h12.512a.64.64 0 00.411-.146.501.501 0 00.028-.762zM12.77 20.285c.021-.017.042-.035.062-.054l5.863-5.609a.5.5 0 00-.028-.762.64.64 0 00-.41-.146H5.743c-.332 0-.601.242-.601.54a.51.51 0 00.16.365l5.769 5.606c.45.437 1.21.464 1.698.06z\"></path></svg>",
      sort1:"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 14 14\" width=\"1em\" height=\"1em\" fill=\"currentColor\"><path d=\"M7.44926 11.8332C7.46161 11.8229 7.47354 11.8123 7.48504 11.8013L10.9052 8.52958C11.0376 8.4029 11.0305 8.20389 10.8893 8.08509C10.8243 8.03043 10.7385 8.00001 10.6495 8.00001H3.35053C3.15694 8.00001 3 8.1408 3 8.31447C3 8.39354 3.0332 8.46971 3.09299 8.5278L6.45859 11.7977C6.72125 12.0529 7.16479 12.0688 7.44926 11.8332Z\"></path></svg>",
      sort2:"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 14 14\" width=\"1em\" height=\"1em\" fill=\"currentColor\"><path d=\"M10.9052 5.47044L7.48504 2.19872C7.47354 2.18772 7.46161 2.1771 7.44926 2.16687C7.16479 1.93123 6.72125 1.94709 6.45859 2.20229L3.09299 5.47222C3.0332 5.53031 3 5.60648 3 5.68555C3 5.85922 3.15694 6.00001 3.35053 6.00001H10.6495C10.7385 6.00001 10.8243 5.96959 10.8893 5.91493C11.0305 5.79613 11.0376 5.59712 10.9052 5.47044Z\"></path></svg>"
    };
  },

  head() { },

  asyncData({ params, error }) {
    return interviewServerApi
      .getInterviewIndex({
        type: params.type ? params.type : "",
        sort: (params.tag == "latest" || params.tag == "hot") ? params.tag : (params.sort ? params.sort : "recommand"),
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

  computed: {},

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

.job-question-list .question-header .question-header-title svg {
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
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
}

.filter-btns .filter-btn:hover {
  background-color: rgba(0, 10, 32, .1);
}

.filter-btns .filter-btn svg {
  height: 23px;
  width: 23px;
  margin-top: -3px;
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
