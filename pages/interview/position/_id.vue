<template>
  <div class="main_global_bg">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="position-header">
            <h1 class="positionTitle">iOS工程师</h1>
            <div class="position-decrib">
              <dl
                class="wow fadeInLeft  animated"
                data-wow-delay="0.5s"
                style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;"
              >
                <dt>
                  <img
                    src="https://static.redskt.com/assets/img/iOS_03_02.jpg"
                  />
                </dt>
                <dd>紧跟苹果公司技术的脚步,技术新、人时尚的iOS工程师</dd>
              </dl>

              <dl
                class="wow fadeInUp  animated"
                data-wow-delay="0.6s"
                style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp;"
              >
                <dt>
                  <img
                    src="https://static.redskt.com/assets/img/iOS_03_03.jpg"
                  />
                </dt>
                <dd>自己编写核心架构代码,让其他人编写“外围”代码,的iOS工程师</dd>
              </dl>

              <dl
                class="wow fadeInRight  animated"
                data-wow-delay="0.5s"
                style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInRight;"
              >
                <dt>
                  <img
                    src="https://static.redskt.com/assets/img/iOS_03_04.jpg"
                  />
                </dt>
                <dd>微信小程序目前比较火爆，会微信小程序的程序员更抢手</dd>
              </dl>
              <div class="clearfloat"></div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="user-sign">
            <Calendar
              ref="Calendar"
              :markDateMore="arr"
              :markDate="arr2"
              v-on:isToday="clickToday"
              agoDayHide="1530115221"
              v-on:choseDay="clickDay"
              v-on:changeMonth="changeDate"
            ></Calendar>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      tagList: []
    };
  },

  head() {},

  asyncData({ params, error }) {},

  mounted() {},

  computed: {},

  methods: {}
};
</script>

<style scoped>

.user-sign {
  margin-top: 15px;
  background:#fff;
}

.user-sign .wh_container {
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
}

.position-header {
  margin-top: 15px;
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
