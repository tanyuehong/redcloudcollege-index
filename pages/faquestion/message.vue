<template>
     <div class="main_global_bg">
          <div class="container">
          <div class="mess-content-lefte">
     <div class="message-top-rumb">
           <div class="ui breadcrumb red_breadcrumb">
              <a class="section"
                 href="/faquestion">实践问答</a>
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
                <el-menu-item index="1">最新发布</el-menu-item>
                <el-menu-item index="2">最新回复</el-menu-item>
              </el-menu>
            </div>
     </div>
     </div>
    </div>
</template>

<style scoped>


.mess-content-lefte {
    background: #fff;
    padding: 15px;
}

.mess-content-lefte  .message-top-rumb {
}
</style>