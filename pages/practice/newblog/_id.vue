<template>
  <div>
    <div class="blogInfo">
      <div class="blogTitle">
        <el-input placeholder="请输入文章标题" v-model="editBlog.title" maxlength="100" show-word-limit>
        </el-input>
      </div>

      <div class="funtion">
        <span class="saveInfo">{{ tipsmessage }}</span>
        <el-button type="primary" size="medium" plain>草稿箱</el-button>

        <el-popover placement="right" width="580" trigger="manual" v-model="submitVisible">
          <div class="submit-content">
            <div class="title">发布文章</div>
            <div class="form-item">
              <div class="label required category-label"> 分类： </div>
              <div class="form-item-content category-list">
                <div class="item"  v-bind:class="{ active: selectBtype == btype.id }" @click="bTypeItemClick(btype)"  v-for="btype in blogTypeList" :key="btype.id"> {{ btype.name }} </div>
              </div>
            </div>
            <div class="form-item">
              <div class="label required"> 添加标签： </div>
              <div class="form-item-content">
                <el-select v-model="tags" multiple placeholder="请搜索添加标签(最多2个)" :multiple-limit="2">
                  <el-option v-for="item in tagList" :key="item.id" :label="item.name" :value="item.id">
                  </el-option>
                </el-select>
                <span class="tips_tag" @click="addNewTagClick">
                  <span class="span_add" style="color: rgb(39, 124, 204);">
                    <i class="icon icon_add icon_add_pos"></i>
                  </span> 没有合适的标签，添加新标签？</span>
              </div>
            </div>
            <div class="form-item">
              <div class="label">文章封面：</div>
              <div class="form-item-content">
                <div class="coverselector_container">
                    <img class="blog-cover" :src="editBlog.img" v-if="editBlog.img" />
                    <button class="select-btn">
                      <div class="button-slot">
                        <el-upload class="avatar-uploader" action="https://www.redskt.com/api/ucenter/uploadFuctionImage"
                        :headers="{ token: loginToken,fucPath:'tag' }" :show-file-list="false" :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <i class="el-icon-plus"></i>
                        <div class="upload">上传封面</div>
                  </el-upload>
                      </div>
                    </button>
                    <div class="addvice">建议尺寸：1303*734px</div>
                </div>
              </div>
            </div>
            <div class="form-item column-line">
              <div class="label"> 收录至专栏： </div>
              <div class="form-item-content">
                <el-select v-model="zhanlan" multiple placeholder="请搜索添加专栏，同一篇文章最多添加三个专栏">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="form-item column-line">
              <div class="label"> 创作话题： </div>
              <div class="form-item-content">
                <el-select v-model="huati" multiple placeholder="请搜索添加话题，最多添加1个话题">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="summary-box form-item">
              <div class="label required">编辑摘要：</div>
              <div class="summary form-item-content">
                <el-input type="textarea" v-model="editBlog.descrb" placeholder="" maxlength="100" :rows="4"
                  show-word-limit resize="none">
                </el-input>
              </div>
            </div>
            <div class="footer"><!---->
              <div class="btn-container">
                <el-button size="medium" @click="submitVisible = !submitVisible">取消</el-button>
                <el-button type="primary" size="medium" @click="submitBlog">确定并发布</el-button>
              </div>
            </div>

          </div>
          <el-button slot="reference" size="medium" type="primary" @click="clickSubmitBtn">发布</el-button>
        </el-popover>


        <div  class="toggle-btn"><svg  width="24" height="24" viewBox="0 0 24 24"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <path  d="M4.7998 9.6001L19.1998 9.6001L15.1998 5.6001" stroke="#86909C" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round"></path>
            <path  d="M19.1997 14.3999L4.79971 14.3999L8.79971 18.3999" stroke="#86909C"
              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg></div>
        <img class="vam user-head-image" :src="this.loginInfo.avatar" width="30" height="30" alt="用户头像" />
      </div>

    </div>
    <div class="mavonEditor">
      <no-ssr>
        <mavon-editor ref=md :toolbars="toolbars" @save="clcikSaveBtn" @imgAdd="$imgAdd" @imgDel="$imgDel"
          v-model="editBlog.content" placeholder="开始创作吧!" />
      </no-ssr>
    </div>
  </div>
</template>

<script>

import request from '@/utils/request'
import blogApi from "@/api/blog";
import tagApi from "@/api/tag";

export default {
  layout: "content",
  data() {
    return {
      huati: "",
      zhanlan: "",
      tags: "",
      selectBtype: "",
      options: [],
      tagList: [],
      blogTypeList: [],
      tipsmessage: "",
      submitVisible: false,
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
      loginToken:"",
      loginInfo: {},
      blogId: params.id,
      editBlog: {}
    }
  },
  mounted() {
    if (this.blogId != undefined && this.blogId.length > 0) {
      blogApi.getBlogDraftDetail(this.blogId).then((response) => {
        this.editBlog = response.data.blog;
      });
    }
    var userStr = localStorage.getItem("redclass_user");
    this.loginToken = window.localStorage.getItem('redclass_token');
    if (userStr != "undefined" && userStr.length > 0) {
      this.loginInfo = JSON.parse(userStr);
    }
  },
  methods: {
    submitBlog() {
      this.editBlog.id = undefined;
      blogApi.addNewBlog(this.editBlog).then((response) => {
      })
    },
    
    handleAvatarSuccess(res, file) {
      this.editBlog.img = res.data.imageUrl;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isPng = file.type === 'image/png';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!(isJPG || isPng)) {
        this.$message.error('上传头像图片只能是 JPG 和 PNG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return (isJPG || isPng) && isLt2M;
    },
    bTypeItemClick(item) {
      this.selectBtype = item.id;
      this.editBlog.tyid = item.id;
    },

    addNewTagClick() {
     
    },
    clickSubmitBtn() {
      this.submitVisible = !this.submitVisible;
      if (this.submitVisible && this.blogTypeList.length <= 0) { 
        blogApi.getBlogTypeList().then((response) => { //请求blog类型
          this.blogTypeList = response.data.typeList;
        });
      }

      if (this.submitVisible && this.tagList.length <= 0) { 
        tagApi.getTagList().then((response) => { //请求tag列表
          this.tagList = response.data.tagList;
        });
      }
    },

    clcikSaveBtn() {
      this.tipsmessage = "保存中...";
      blogApi.addNewBlogDraft(this.editBlog).then((response) => {
        this.editBlog.id = response.data.blog.id;
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
        this.$refs.md.$img2Url(pos, response.imageUrl);
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

.coverselector_container .blog-cover {
  display: inline-block;
  width: 135px;
  height: 75px;
  margin-right: 10px;
  background: red;
}

.submit-content .category-list .item.active {
    color: #1d7dfa;
    background-color: #e8f3ff;
}

.submit-content .category-list {
  white-space: normal;
}

.form-item-content .el-tag.el-tag--info {
  background-color: #ecf5ff;
    border-color: #d9ecff;
    display: inline-block;
    font-size: 12px;
    color: #409eff;
}
.submit-content .form-item .label.required:before {
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
  padding-top: 15px;
}

.form-item-content .el-select {
  width: 420px;
}

.form-item-content .el-textarea {
  width: 420px;
}

.form-item-content .tips_tag {
  height: 20px;
  font-size: 14px;
  font-weight: 400;
  color: #507999;
  line-height: 24px;
  cursor: pointer;
  margin-left: 0px;
  margin-top: 5px;
}

.form-item-content .icon_add_pos {
  margin-left: 0;
  position: relative;
  top: -1px;
}

.form-item-content .icon_add {
  width: 12px;
  height: 12px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAXElEQVRIS2NkoDFgpLH5DERbEFA58z+yYza0pxOllyhFIINHLSAY16NBRPsgQg9jgjYSUADLJ/B8MGoBeohhBBGhMB/NB4RCaLQ0JRhCwyCICPsRuwqi62RyLQAAilhQGRoPkngAAAAASUVORK5CYII=);
  cursor: pointer;
}

.form-item-content .span_add {
  display: inline-block !important;
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  background-color: #ebf2f7;
  border-radius: 2px;
  cursor: pointer;
}

.coverselector_container {
  display: flex;
}

.coverselector_container .select-btn {
  width: 135px;
  height: 75px;
  background-color: #fafafa;
  border: 1px dashed #e5e6eb;
  margin-bottom: 2px;
  display: inline-block;
}

.coverselector_container .addvice {
  padding-top: 30px;
  margin-left: 10px;
  display: inline-block;
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

.submit-content {
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

.submit-content .form-item .form-item-content {
  display: flex;
  flex-direction: row;
  align-content: flex-end;
  flex-wrap: wrap;
}



.submit-content .form-item .label {
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
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
  transition: transform .3s, -webkit-transform .3s;
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
}
</style>