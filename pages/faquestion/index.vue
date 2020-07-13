<template>
  <section class="my_gogal">
    <div class="header_xuanchuan">
      <div class="container">
        <div class="header_annation">
          <h1 class="answer_title">红云问答，更专业的技术问答社区</h1>
          <p class="desc">您的每一个问题，我们都会为您选择最优的答案。并且通过人工智能和技术专家维护问题列表，方便查找，为大家在学习路上解疑答惑。</p>
        </div>
       
        <img
          src="https://image.boxueio.com/swift-wtf-to-omg-avatar@2x.jpg"
          alt="Image Description"
          class="rounded-circle"
        />
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
              <li><span></span>
                <a href="https://blog.csdn.net/askdevteam/article/details/84139790" target="_blank">问答WAP版改版上线</a>
              </li>
              <li><span></span>
                <a href="https://blog.csdn.net/askdevteam/article/details/82625033" target="_blank">【新手提问导读】提问的艺术</a>
              </li>
              <li><span></span>
                <a href="https://blog.csdn.net/csdn_bbs/article/details/94432624" target="_blank">欢迎加入CSDN问答用户群</a>
              </li>
        </ul>
      </div>
    </div>
          </div>
          <div class="content_left">
            <div class="questions_tab_con">

               <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">最新回答</el-menu-item>
   <el-menu-item index="2">最新提问</el-menu-item>
    <el-menu-item index="3">等待回答</el-menu-item>
    <el-menu-item index="4">付费问答</el-menu-item>
     <el-dropdown class="sort">
                  <span class="el-dropdown-link sort_list_label">
                    按时间排序
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>时间</el-dropdown-item>
                    <el-dropdown-item>回答数</el-dropdown-item>
                    <el-dropdown-item>热度</el-dropdown-item>
                  </el-dropdown-menu>
              </el-dropdown>
  
</el-menu>

              
            </div>
            <div class="questions_detail_con">
              <div class="answer_title">
                <a
                  class="header"
                  href="https://www.oschina.net/question/3799215_2314872"
                  target="_blank"
                >
                  招贤纳士，开源中国期待有梦想的你加入～
                  <div class="ui red label horizontal" data-tooltip="置顶">顶</div>
                  <div class="ui orange label horizontal" data-tooltip="热门">热</div>
                </a>
              </div>
              <div class="answer_count">
                <a
                  class="answer_num"
                  title="暂无满意答案"
                  target="_blank"
                  href="/questions/1087364#answer_form"
                >
                  <span>0</span>
                  <p>回答</p>
                </a>
              </div>

              <div class="description">
                <p
                  class="line-clamp"
                >公司介绍： 开源中国（www.oschina.net）是国内最大的开源技术社区，拥有超过 600 万活跃会员，形成了由开源软件库、代码分享、资讯、协作翻译...</p>
              </div>
              <div class="extra question-tags">
                <a class="ui horizontal basic label popup-tag"
                  href="https://www.oschina.net/question/tag/ruby"
                  target="_blank"
                >
                  <img src="https://static.oschina.net/img/logo/ruby.gif" />Ruby
                </a>

                <a class="ui horizontal basic label popup-tag"
                  href="https://www.oschina.net/question/tag/java"
                  target="_blank"
                >
                <img src="https://static.oschina.net/img/logo/java.png" />Java
                </a>
              </div>

              <div class="q_time">
                <span>2018.06.16 04:30来自</span>
                <a class="user_name" href="https://my.csdn.net/dabocaiqq" target="_blank">dabocaiqq</a>
                <b>
                  悬赏
                  <a href="javascript:;" title="个人悬赏">5C</a>
                </b>
              </div>
            </div>
          </div>

        
          <div class="clearnfloat"></div>
        </div>
      </section>
    </div>
  </section>
</template>
</script>

<style>
.header_xuanchuan {
  height: 300px;
  width: 100%;
  background-repeat: repeat-x;
  background-image: linear-gradient(225deg, #3ec2e3, #5b85df);
}

.header_annation .answer_title {
  color: white;
}
.header_annation   .desc {
  color: white;
  font-size: 16px;
  margin-top: 15px;
}
.header_annation  {
  width: 600px;
  float: left;
  margin-top: 80px;
  margin-left: 80px;
}

.main_content {
  position: relative;
}

.header_xuanchuan img {
  vertical-align: middle;
  border-style: none;
  width: 200px;
  height: 200px;
  margin-left: 120px;
  margin-top: 50px;
}

.questions_tab_con {
  border-bottom: 1px solid #eee;
}

.questions_tab_con .sort {
  float: right;
  margin-right: 20px;
  margin-top: 13px;
}
.questions_tab_con .sort .sort_list_label {
  height: 37px;
  line-height: 37px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}

.main_content .content_left {
  background: white;
  margin-right: 8px;
  width: 842px;
  border: none;
  float: left;
}

.main_content .questions_detail_con {
  margin: 20px 40px 20px 20px;
  position: relative;
}

.main_content .questions_detail_con .content {
  display: block;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  background: 0 0;
  margin: 0;
  padding: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: 1em;
  border: none;
  border-radius: 0;
}

.main_content .questions_detail_con .header {
  display: inline-block;
  margin: -0.21425em 0 0;
  font-family: "PingFang SC", "Helvetica Neue", "Microsoft YaHei UI",
    "Microsoft YaHei", "Noto Sans CJK SC", Sathu, EucrosiaUPC, Arial, Helvetica,
    sans-serif;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.85);
}

.questions_detail_con .header .horizontal.label {
  vertical-align: middle !important;
  margin-top: -2px;
}

.questions_detail_con .header .horizontal.label {
  padding: 0.4em;
  min-width: 0;
  margin-right: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.ui.red.label,
.ui.red.labels .label {
  background-color: #db2828 !important;
  border-color: #db2828 !important;
  color: #fff !important;
}

.ui.label {
  display: inline-block;
  line-height: 1;
  vertical-align: baseline;
  margin: 0 0.14285714em;
  background-color: #e8e8e8;
  background-image: none;
  padding: 0.5833em 0.833em;
  color: rgba(0, 0, 0, 0.6);
  text-transform: none;
  font-weight: 400;
  border: 0 solid transparent;
  border-radius: 0.14285714rem;
  -webkit-transition: background 0.1s ease;
  transition: background 0.1s ease;
}

.ui.basic.label {
    background: none #fff;
    border: 1px solid rgba(34,36,38,.15);
    color: rgba(0,0,0,.87);
    -webkit-box-shadow: none;
    box-shadow: none;
}

a.ui.basic.label:hover {
    text-decoration: none;
    background: none #fff;
    color: #1e70bf;
    -webkit-box-shadow: 1px solid rgba(34,36,38,.15);
    box-shadow: 1px solid rgba(34,36,38,.15);
    -webkit-box-shadow: none;
    box-shadow: none;
}

.questions_detail_con .answer_num {
  width: 50px;
  height: 50px;
  background: #a0d56d;
  position: absolute;
  right: 0px;
  top: 80px;
  border-radius: 3px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  cursor: pointer;
}

.questions_detail_con .extra  img {
    display: inline-block;
    vertical-align: baseline;
    height: 22px!important;
    border-radius: .14285714rem;
    padding: 2px 0;
    margin: -.5833em .5em -.5833em 0;
}

.questions_detail_con .extra {
    display: block;
    position: relative;
    background: 0 0;
    margin: .5rem 0 0;
    width: 100%;
    padding: 0 0 0;
    top: 0;
    left: 0;
    color: rgba(0,0,0,.4);
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-transition: color .1s ease;
    transition: color .1s ease;
    border-top: none;
}
.questions_detail_con .q_time {
  margin-top: 10px;
  margin-bottom: 10px;
}

.questions_detail_con .description {
  margin-top: 10px;
}

.questions_detail_con .answer_count {
  margin-top: 10px;
}

.questions_tab_con a {
   line-height: 20px;
} 


.question_right_con {
  width: 280px;
  float: right;
  background: white;
}

.main_content  .clearnfloat {
   clear: both;
}

.question_right_con .startqustionbtn {
  margin: 10px;
  width: 93%;
}

.question_right_con .mod_about_teacher h3 {
    position: relative;
    margin: 0;
    padding: 0;
    height: 44px;
    line-height: 44px;
    border-bottom: 1px solid #f0f0f0;
    text-indent: 20px;
    font-size: 18px;
    font-weight: normal;
    color: #333;
}

.question_right_con  .mod_about_teacher .answer_list {
    padding: 0 20px;
}

.question_right_con  .mod_about_teacher {
    margin-bottom: 10px;
    background: #fff;
    border: 1px solid #f0f0f0;
}

.question_right_con .mod_about_teacher .answer_list ul li {
    border-bottom: 1px solid #f0f0f0;
    line-height: 45px;
}

.question_right_con  .mod_about_teacher .answer_list ul li span {
    margin-right: 8px;
    margin-top: 23px;
    width: 3px;
    height: 3px;
    background: #cfcfcf;
    display: block;
    float: left;
}

.question_right_con .mod_about_teacher .answer_list ul li a {
    font-size: 14px;
    color: #666;
}

</style>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      jumpStartQuestion() {
        this.$router.push({
          name: 'faquestion-howtoask',
          query: {} 
        })
      }
    }
  }
</script>