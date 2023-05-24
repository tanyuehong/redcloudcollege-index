<template>
<div>
    <div class="blogInfo">
    <div class="blogTitle">
        <el-input
  placeholder="请输入文章标题"
  v-model="input"
  maxlength="10"
  show-word-limit>
</el-input>
</div>

<div class="funtion">
    <el-button type="primary" plain>草稿箱</el-button>
    <el-button>发布</el-button>

    <div data-v-151232ea="" class="toggle-btn"><svg data-v-151232ea="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-151232ea="" d="M4.7998 9.6001L19.1998 9.6001L15.1998 5.6001" stroke="#86909C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path data-v-151232ea="" d="M19.1997 14.3999L4.79971 14.3999L8.79971 18.3999" stroke="#86909C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
    <img class="vam user-head-image" :src="avatar" width="30" height="30" alt="用户头像"/>
  </div>

    </div>
    <div class="mavonEditor">
    <no-ssr>
      <mavon-editor ref=md @imgAdd="$imgAdd" @imgDel="$imgDel" v-model="handbook"/>
    </no-ssr>
  </div>
</div>
</template>

<script>

import request from '@/utils/request'

export default {
 layout: "content",
  data() {
    return {
      avatar:"",
      handbook: "#### how to use mavonEditor in nuxt.js"
    };
  },
  asyncData ({ params}) {
    this.avatar = params.avatar;
  },
  methods: {
    $imgAdd(pos, $file){
        window.console.log("======命中了文件添加！！！");
         // 第一步.将图片上传到服务器.
         var formdata = new FormData();
           formdata.append('file', $file);
           request({
               url: '/ucenter/uploadBlogImage',
               method: 'post',
               data: formdata,
               headers: { 'Content-Type': 'multipart/form-data' },
           }).then((response) => {
               // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
               // $vm.$img2Url 详情见本页末尾
               window.console.log(response);
               $vm.$img2Url(pos, response.imageUrl);
           }).catch(function (error) {
               console.log(error);
        });
    },
  }
};

</script>

<style>

.mavonEditor {
  width: 100%;
  min-height: 800px;
}

.blogInfo {
    margin-left: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
}

.blogInfo .blogTitle {
    display: inline-block;
    width: 300px;
}

.blogInfo .funtion {
    float: right;
    margin-right: 20px;
}

.toggle-btn {
    font-size: 2rem;
    line-height: 1;
    vertical-align: middle;
    color: #909090;
    cursor: pointer;
    border-radius: 2px;
    display: inline-block;
}

</style>