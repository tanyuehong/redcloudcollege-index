<template>
  <div class="main_content_bg">
    <div class="container">
      <div class="sign">
        <!--标题-->
        <div class="logo fl">
               <h1 id="logo">
          <router-link to="/" title="开源实践网">
            <img
              src="~/assets/img/logo.png"
              class="logo_index"
              alt="开源实践网"
            />
            <img src="~/assets/img/logo_descrb.png" class="logo_decrb" alt="" />
          </router-link>
        </h1>
        <div class="app-xuan-down">
           <div class="sin-cover">
             <img height=450px; src="https://static.redskt.com/assets/img/appadimage.jpg"/>
           </div>
           <div class="sign-down-app">
              <el-button type="primary">下载开源实践app</el-button>
          </div>
        </div>
         </div>
        <!--表单-->
        <nuxt />
      </div>
    </div>
  </div>
</template>
