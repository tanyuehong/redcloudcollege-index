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

        <el-popover placement="right" width="580" trigger="manual" v-model="submitVisible">
          <div class="submit-content">
              <div  class="title">发布文章</div>
              <div  class="form-item">
                <div  class="label required category-label"> 分类： </div>
                <div  class="form-item-content category-list">
                  <div  class="item"> 后端 </div>
                  <div  class="item"> 前端 </div>
                  <div  class="item"> Android </div>
                  <div  class="item"> iOS </div>
                  <div  class="item"> 人工智能 </div>
                  <div  class="item"> 开发工具 </div>
                  <div  class="item"> 代码人生 </div>
                  <div  class="item"> 阅读 </div>
               
               </div>
              </div>
              <div  class="form-item">
                <div  class="label required"> 添加标签： </div>
                <div  class="form-item-content">
                  <el-select v-model="value1" multiple placeholder="请搜索添加标签">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
                
                </div>
              </div>
              <div  class="form-item">
                <div  class="label">文章封面：</div>
                <div  class="form-item-content">
                  <div data-v-cfaa5564=""  class="coverselector_container">
                    <div data-v-cfaa5564=""><button data-v-cfaa5564="" class="select-btn">
                        <div data-v-cfaa5564="" class="button-slot"><img data-v-cfaa5564=""
                            src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web_editor/img/add.0e2d17b6.svg"
                            height="20" alt="add_cover">
                          <div data-v-cfaa5564="" class="upload">上传封面</div>
                        </div>
                      </button>
                      <div data-v-cfaa5564="" class="addvice">建议尺寸：1303*734px</div>
                    </div><input data-v-cfaa5564="" type="file" style="display: none;">
                  </div>
                </div>
              </div>
              <div  class="form-item column-line">
                <div  class="label"> 收录至专栏： </div>
                <div  class="form-item-content">
                  <el-select v-model="value1" multiple placeholder="请搜索添加专栏，同一篇文章最多添加三个专栏">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
                </div>
              </div>
              <div  class="form-item column-line">
                <div  class="label"> 创作话题： </div>
                <div  class="form-item-content">
                  <el-select v-model="value1" multiple placeholder="请搜索添加话题，最多添加1个话题">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
                </div>
              </div>
              <div  class="summary-box form-item">
                <div  class="label required">编辑摘要：</div>
                <div  class="summary form-item-content">
                  <el-input type="textarea" v-model="jubaoContent" placeholder=""
                            maxlength="100" :rows="4" show-word-limit resize="none">
                  </el-input>
                </div>
              </div>
              <div  class="footer"><!---->
                <div  class="btn-container">
                    <el-button size="medium" @click="submitVisible = !submitVisible">取消</el-button>
                    <el-button type="primary" size="medium">确定并发布</el-button>
                  </div>
              </div>
          
          </div>
          <el-button slot="reference" size="medium" type="primary" @click="clickSubmitBtn">发布</el-button>
        </el-popover>


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
        <mavon-editor ref=md :toolbars="toolbars" @save="clcikSaveBtn" @imgAdd="$imgAdd" @imgDel="$imgDel"
          v-model="editblog.content" placeholder="开始创作吧!" />
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
      blogTypeList:[],
      tipsmessage: "",
      submitVisible:false,
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
      editblog: {}
    }
  },
  mounted() {
    if (this.blogId != undefined && this.blogId.length > 0) {
      blogApi.getBlogDetail(this.blogId).then((response) => {
        this.editblog = response.data.blog;
      });
    }
    var userStr = localStorage.getItem("redclass_user");
    if (userStr != "undefined" && userStr.length > 0) {
      this.loginInfo = JSON.parse(userStr);
    }
    window.console.log(this.loginInfo.avatar);
  },
  methods: {
    clickSubmitBtn() {
      this.submitVisible = !submitVisible;
      if(this.submitVisible && ) {

      }
      clickSubmitBtn
    },

    clcikSaveBtn() {
      this.tipsmessage = "保存中...";
      blogApi.addNewblog(this.editblog).then((response) => {
        this.editblog.id = response.data.blog.id;
        this.setBrowserUrl(response.data.blog.id);
        this.tipsmessage = "保存成功";
      })
    },
    setBrowserUrl(blogId) {
      var origin = window.location.origin;   // 返回基础 URL (https://www.runoob.com/)
      var url = origin + "/practice/newblog/" + blogId;
      history.pushState({ url: url }, '', url)
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

.submit-content  .form-item .label.required:before {
    content: "*";
    color: #f53f3f;
    vertical-align: -2px;
}

.footer {
    border-top: 1px solid #e5e6eb;
    height: 72px;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0 20px;
}

.footer .btn-container {
    -webkit-box-flex: 1;
    -ms-flex: auto;
    flex: auto;
    text-align: right;
    padding-top:15px;
}

.form-item-content .el-select {
  width: 420px;
}
.form-item-content .el-textarea {
  width: 420px;
}

.coverselector_container .select-btn {
    width: 160px;
    height: 86px;
    background-color: #fafafa;
    border: 1px dashed #e5e6eb;
    margin-bottom: 16px;
}

.coverselector_container .select-btn .button-slot {
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column nowrap;
    flex-flow: column nowrap;
}

.coverselector_container .select-btn .button-slot .upload {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #86909c;
    margin-top: 10px;
}

.submit-content  {
    width: 560px;
    font-size: 14px;
    white-space: nowrap;
    color: #909090;
    background-color: #fff;
    cursor: default;
}

.submit-content .title {
    padding: 14px 20px 16px 20px;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #1d2129;
    border-bottom: 1px solid #e5e6eb;
}

.submit-content .form-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 15px 20px 22px;
}

.submit-content .form-item .label.category-label {
    line-height: 28px;
}

.submit-content .form-item .form-item-content {
  display: flex;
    flex-direction: row;
    align-content: flex-end;
    flex-wrap: wrap;
}

.submit-content .category-list {
    white-space: normal;
}
.submit-content .form-item .label {
    font-weight: 400;
    font-size: 14px;
    line-height: 32px;
    text-align: right;
    color: #1d2129;
    width: 85px;
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
}

.submit-content .category-list .item {
    display: inline-block;
    margin-right: 5px;
    margin-bottom: 10px;
    padding: 0 6px;
    font-size: 14px;
    line-height: 28px;
    width: 88px;
    height: 28px;
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    border-radius: 2px;
    cursor: pointer;
    color: #86909c;
    background-color: #f4f5f5;
}

.red-select__suffix {
  color: #c2c6cc;
  transition: transform .3s,-webkit-transform .3s;
  display: inline-block;
}
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
}</style>