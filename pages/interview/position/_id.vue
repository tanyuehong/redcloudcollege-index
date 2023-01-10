<template>
  <div class="main_global_bg">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="position-header">
            <div class="ui breadcrumb red_breadcrumb">
              <nuxt-link :to="{ name: 'faquestion' }" class="section">
              开源实践面试
              </nuxt-link>
              <span class="glyphicon glyphicon glyphicon-menu-right" aria-hidden="true"></span>
              <div class="active section">iOS工程师</div>
            </div>
            <h1 class="positionTitle">iOS工程师</h1>
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
  margin-top: 10px;
  background:#fff;
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
