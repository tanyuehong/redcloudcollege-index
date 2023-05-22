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
      handbook: "#### how to use mavonEditor in nuxt.js"
    };
  },
  methods: {
    $imgAdd(pos, $file){
        window.console.log("======命中了文件添加！！！");
         // 第一步.将图片上传到服务器.
         var formdata = new FormData();
           formdata.append('image', $file);
           request({
               url: '/api/ucenter/uploadImage',
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

</style>