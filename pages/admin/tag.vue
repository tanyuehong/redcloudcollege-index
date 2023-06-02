<template>
  <div class="golobal_content">
    <div class="container">
      <div class="ucenter-setting-header">
        <li class="ucenter-back-item">
          <nuxt-link :to="'/user/' + 'setting'">
            <span>返回个人设置</span>
            <i class="el-icon-arrow-right back_item"></i>
          </nuxt-link>
        </li>
      </div>
      <div class="setting-content">
        <div class="lefte_content">
          <div class="setting-lefte-menu">
            <div @click="personSettingClick" class="setting-menu-item" v-bind:class="{ active: settingtype == 1 }">
              <div class="nav-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M15.3331 14.1052V14.3207C15.3331 14.5048 15.1839 14.654 14.9998 14.654H14.3204C14.1413 14.654 13.9967 14.5122 13.9801 14.3339C13.9778 14.3097 13.9754 14.2872 13.9728 14.2679C13.8008 12.9838 12.8312 12 11.7742 12H9.88471C8.82066 12 7.8512 12.997 7.68991 14.2937C7.68842 14.3056 7.68699 14.3189 7.68563 14.333C7.66842 14.5116 7.52439 14.654 7.34498 14.654H6.66643C6.48233 14.654 6.33309 14.5048 6.33309 14.3207V14.1052C6.33309 12.5335 7.41668 11.2082 8.82833 10.7979C8.3268 10.2875 8.01744 9.58768 8.01744 8.81561C8.01744 7.25359 9.2837 5.98733 10.8457 5.98733C12.4077 5.98733 13.674 7.25359 13.674 8.81561C13.674 9.59004 13.3627 10.2918 12.8585 10.8025C14.2611 11.2181 15.3331 12.5395 15.3331 14.1052ZM1.99984 2.66665V12.6666H4.9165V14H1.33317C0.964981 14 0.666504 13.7015 0.666504 13.3333V1.99998C0.666504 1.63179 0.964981 1.33331 1.33317 1.33331H13.3332C13.7014 1.33331 13.9998 1.63179 13.9998 1.99998V5.82955C13.5945 5.49574 13.1466 5.21989 12.6665 5.01331V2.66665H1.99984ZM3.33309 5.99994C3.33309 5.81584 3.48233 5.66661 3.66642 5.66661H6.66642C6.85052 5.66661 6.99976 5.81584 6.99976 5.99994V6.6666C6.99976 6.8507 6.85052 6.99994 6.66642 6.99994H3.66642C3.48233 6.99994 3.33309 6.8507 3.33309 6.66661V5.99994ZM3.33309 8.66661C3.33309 8.48251 3.48233 8.33327 3.66642 8.33327H4.99976C5.18385 8.33327 5.33309 8.48251 5.33309 8.66661V9.33327C5.33309 9.51737 5.18385 9.66661 4.99976 9.66661H3.66642C3.48233 9.66661 3.33309 9.51737 3.33309 9.33327V8.66661ZM10.8457 7.32066C10.0201 7.32066 9.35075 7.98997 9.35075 8.81561C9.35075 9.64125 10.0201 10.3106 10.8457 10.3106C11.6713 10.3106 12.3406 9.64125 12.3406 8.81561C12.3406 7.98997 11.6713 7.32066 10.8457 7.32066Z"
                    class="close-path"></path>
                </svg>
                标签管理
              </div>
            </div>
          </div>
        </div>
        <div class="middle_content">
          <div class="sprate"></div>
        </div>
        <div class="right-content">
          <div v-if="settingtype === 1">
            <div class="person-setting">
              <div class="nav-header">
                <div class="nav-text">标签列表</div>
                <div class="add-item">
                  <el-button type="primary" size="small" plain @click="addNewTagClick">新建标签</el-button>
                </div>
              </div>
              <div class="admin-content">
                <el-table :data="tagList" height="860">
                  <el-table-column property="name" label="标签名" width="110"></el-table-column>
                  <el-table-column property="sort" label="排序" width="70"></el-table-column>
                  <el-table-column property="img" label="图标" width="240"></el-table-column>
                  <el-table-column property="describ" label="描述" width="280"
                    :show-overflow-tooltip="true"></el-table-column>
                  <el-table-column label="操作" width="260">
                    <template slot-scope="scope">
                      <el-button size="mini" @click="editTagClick(scope.$index, scope.row)">编辑</el-button>

                      <el-popconfirm cancel-button-text="取消" confirm-button-text="确定" icon="el-icon-info" icon-color="red"
                        title="确定要删除该标签吗，该操作不可撤回哦？" @confirm="deleteTagClick(scope.$index, scope.row)">
                        <el-button type="danger" size="mini" slot="reference">删除</el-button>
                      </el-popconfirm>
                    </template>
                  </el-table-column>
                </el-table>

                <el-dialog :title="functionTitle" width="140" :close-on-click-modal="false" :close-on-press-escape="false"
                  :show-close="true" :visible.sync="showTagPositionPage" :before-close="backClick" center>
                  <el-form ref="form" label-width="80px">
                    <el-form-item label="标签名">
                      <el-input v-model="editTag.name"></el-input>
                    </el-form-item>
                    <el-form-item label="图标">
                      <el-input v-model="editTag.img" class="img-input"></el-input>
                      <el-upload class="img-uploader" action="https://www.redskt.com/api/ucenter/uploadFuctionImage"
                         :headers="{ token: loginToken,fucPath:'tag' }"
                        :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                        <img v-if="editTag.img" :src="editTag.img" class="img-icon" />
                        <i v-else class="el-icon-plus uploader-img"></i>
                      </el-upload>
                    </el-form-item>

                    <el-form-item label="序号">
                      <el-input v-model="editTag.sort"></el-input>
                    </el-form-item>
                    <el-form-item label="描述">
                      <el-input type="textarea" v-model="editTag.describ" maxlength="3000" :rows="5"
                        show-word-limit></el-input>
                    </el-form-item>
                  </el-form>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="backClick" size="small">返 回</el-button>
                    <el-button type="primary" @click="onSubmitClick" size="small" v-if="submitTitle.length > 0">{{
                      submitTitle }}</el-button>
                  </span>
                </el-dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "~/assets/css/setting.css";
import tagApi from "@/api/tag";

export default {
  data() {
    return {
      tagList: [],
      loginToken:"",
      submitTitle: "",
      editTag: {},
      functionTitle: "",
      showTagPositionPage: false,
      settingtype: 1
    };
  },

  mounted() {
    this.getTagList();
    this.loginToken = window.localStorage.getItem('redclass_token');
  },
  methods: {
    backClick() {
      this.showTagPositionPage = false;
      this.getTagList();
    },
    addNewTagClick() {
      this.editTag = {};
      this.submitTitle = "新建";
      this.functionTitle = "新建标签";
      this.showTagPositionPage = true;
    },

    onSubmitClick() {
      tagApi.addTag(this.editTag).then(response => { });
    },

    editTagClick(index, row) {
      this.editTag = this.tagList[index];
      this.submitTitle = "修改";
      this.functionTitle = "修改标签";
      this.showTagPositionPage = true;
    },

    deleteTagClick(index, row) {
      tagApi.deleteTag(this.tagList[index].id).then(response => {
        this.getTagList();
      });
    },

    addEveryQuestionClick() {
      this.showEveryQuestionPage = true;
    },

    selectDateDidChange(date) {
      this.slectDate = date;
      window.console.log("=====" + date);
    },
    getTagList() {
      tagApi.getTagList().then(response => {
        this.tagList = response.data.tagList;
      });
    },
    handleAvatarSuccess(res, file) {
      this.editTag.img = res.data.imageUrl;
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
    personSettingClick() {
      this.settingtype = 1;
    }
  }
};
</script>

<style scoped>

.img-input {
  display: inline-block;
  width: 360px;
}

.img-uploader {
  display: inline-block;
  height: 40px;
}

.img-uploader .img-icon {

}

.uploader-img {
  font-size: 15px;
  color: #8c939d;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin-left: 3px;
  border: 1px dashed #d9d9d9;
}

.ucenter-setting-header {
  height: 45.98px;
  background: #fff;
  margin-top: 10px;
  margin-bottom: 10px;
}

.ucenter-back-item {
  padding-top: 13px;
  font-size: 14px;
  padding-left: 15px;
}

.ucenter-back-item a {
  color: #666;
}

.nav-item .svg {
  margin-right: 12px;
  margin-left: 24px;
}

</style>
