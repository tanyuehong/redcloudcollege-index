<template>
  <div>
    <div class="blogInfo">
      <div class="blogTitle">
        <el-input placeholder="请输入文章标题" v-model="editblog.title" maxlength="100" show-word-limit>
        </el-input>
      </div>

      <div class="funtion">
        <span class="saveInfo">{{ tipsmessage }}</span>
        <el-button type="primary" size="medium" plain>草稿箱</el-button>
        <el-button @click="submitBtnClick" size="medium" type="primary">发布</el-button>

        <div data-v-151232ea="" class="toggle-btn"><svg data-v-151232ea="" width="24" height="24" viewBox="0 0 24 24"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <path data-v-151232ea="" d="M4.7998 9.6001L19.1998 9.6001L15.1998 5.6001" stroke="#86909C" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round"></path>
            <path data-v-151232ea="" d="M19.1997 14.3999L4.79971 14.3999L8.79971 18.3999" stroke="#86909C"
              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg></div>
        <img class="vam user-head-image" :src="this.loginInfo.avatar" width="30" height="30" alt="用户头像" />
      </div>

    </div>
    <div class="mavonEditor">
      <no-ssr>
        <mavon-editor ref=md :toolbars="toolbars" @save="clcikSaveBtn" @imgAdd="$imgAdd" @imgDel="$imgDel" v-model="editblog.content" placeholder="开始创作吧!" />
      </no-ssr>
    </div>
  </div>
</template>

<script>

import request from '@/utils/request'
import blogApi from "@/api/blog";

export default {
  layout: "content",
  data() {
    return {
      tipsmessage:"",
      handbook: "#### how to use mavonEditor in nuxt.js",
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: false, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true, // 预览
      }
    };
  },
  asyncData({ params }) {
    return {
      loginInfo: {},
      blogId: params.id,
      editblog:{}
    }
  },
  mounted() {
    if(this.blogId != undefined && this.blogId.length>0) {
      blogApi.getBlogDetail(this.blogId).then((response) => {  
        this.editblog = response.data.blog;
      });
    } 
		var userStr = localStorage.getItem("redclass_user");
		if (userStr != "undefined" && userStr.length>0) {
      this.loginInfo = JSON.parse(userStr);
    }
    window.console.log(this.loginInfo.avatar);
  },
  methods: {
    submitBtnClick() {
    },

    clcikSaveBtn() {
      this.tipsmessage = "保存中...";
      blogApi.addNewblog(this.editblog).then((response) => {
         this.editblog.id = response.data.blog.id; 
         this.setBrowserUrl(response.data.blog.id);
         this.tipsmessage = "保存成功";
      })
    },
    setBrowserUrl(blogId){
      var origin   = window.location.origin;   // 返回基础 URL (https://www.runoob.com/)
      var url = origin + "/practice/newblog/" + blogId;
      history.pushState({url: url}, '', url)
    },

    $imgAdd(pos, $file) {
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
    $imgDel() {

    }
  }
};

</script>

<style>

.saveInfo {
  color: #999;
  font-size: 14px;
  margin-right: 8px;
}
.mavonEditor {
  width: 100%;
  height: 100%;
}

.v-note-wrapper {
  min-height: 800px;
}

.blogInfo {
  margin-left: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
}

.blogInfo .blogTitle {
  display: inline-block;
  width: 460px;
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