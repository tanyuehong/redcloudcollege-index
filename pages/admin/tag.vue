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
      <div class="setting-lefte-menu">
        <div @click="personSettingClick" class="setting-menu-item">
          <div class="nav-item" v-bind:class="{ active: settingtype == 1 }">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M15.3331 14.1052V14.3207C15.3331 14.5048 15.1839 14.654 14.9998 14.654H14.3204C14.1413 14.654 13.9967 14.5122 13.9801 14.3339C13.9778 14.3097 13.9754 14.2872 13.9728 14.2679C13.8008 12.9838 12.8312 12 11.7742 12H9.88471C8.82066 12 7.8512 12.997 7.68991 14.2937C7.68842 14.3056 7.68699 14.3189 7.68563 14.333C7.66842 14.5116 7.52439 14.654 7.34498 14.654H6.66643C6.48233 14.654 6.33309 14.5048 6.33309 14.3207V14.1052C6.33309 12.5335 7.41668 11.2082 8.82833 10.7979C8.3268 10.2875 8.01744 9.58768 8.01744 8.81561C8.01744 7.25359 9.2837 5.98733 10.8457 5.98733C12.4077 5.98733 13.674 7.25359 13.674 8.81561C13.674 9.59004 13.3627 10.2918 12.8585 10.8025C14.2611 11.2181 15.3331 12.5395 15.3331 14.1052ZM1.99984 2.66665V12.6666H4.9165V14H1.33317C0.964981 14 0.666504 13.7015 0.666504 13.3333V1.99998C0.666504 1.63179 0.964981 1.33331 1.33317 1.33331H13.3332C13.7014 1.33331 13.9998 1.63179 13.9998 1.99998V5.82955C13.5945 5.49574 13.1466 5.21989 12.6665 5.01331V2.66665H1.99984ZM3.33309 5.99994C3.33309 5.81584 3.48233 5.66661 3.66642 5.66661H6.66642C6.85052 5.66661 6.99976 5.81584 6.99976 5.99994V6.6666C6.99976 6.8507 6.85052 6.99994 6.66642 6.99994H3.66642C3.48233 6.99994 3.33309 6.8507 3.33309 6.66661V5.99994ZM3.33309 8.66661C3.33309 8.48251 3.48233 8.33327 3.66642 8.33327H4.99976C5.18385 8.33327 5.33309 8.48251 5.33309 8.66661V9.33327C5.33309 9.51737 5.18385 9.66661 4.99976 9.66661H3.66642C3.48233 9.66661 3.33309 9.51737 3.33309 9.33327V8.66661ZM10.8457 7.32066C10.0201 7.32066 9.35075 7.98997 9.35075 8.81561C9.35075 9.64125 10.0201 10.3106 10.8457 10.3106C11.6713 10.3106 12.3406 9.64125 12.3406 8.81561C12.3406 7.98997 11.6713 7.32066 10.8457 7.32066Z"
                class="close-path"></path>
            </svg>
            标签管理
          </div>
        </div>
      </div>
      <div v-if="settingtype === 1">
        <div class="person-setting shadow">
          <div class="nav-text">标签列表</div>
          <div class="admin-content">
            <el-table :data="tagList" height="860">
              <el-table-column property="name" label="标签名" width="80"></el-table-column>
              <el-table-column property="img" label="图标" width="420"></el-table-column>
              <el-table-column label="操作" width="260">
                <template slot-scope="scope">
                  <el-button size="mini" @click="editQuestionClick(scope.$index, scope.row)">编辑</el-button>
                  <el-button size="mini" @click="editTagPositionClick(scope.$index, scope.row)">职位</el-button>
                  <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>

            <el-dialog :title="functionTitle" width="140" :close-on-click-modal="false" :close-on-press-escape="false"
              :show-close="true" :visible.sync="showTagPositionPage" center>
              <el-table :data="tagPositionList" height="360" v-if="classifyType == 1">
                <el-table-column property="name" label="标签名" width="130" height="60"></el-table-column>
                <el-table-column property="pname" label="职位" width="130" height="60"></el-table-column>
                <el-table-column label="操作" width="220">
                  <template slot-scope="scope">
                    <el-button size="mini" @click="editPositionClassifyClick(scope.$index, scope.row)">编辑</el-button>
                    <el-popconfirm confirm-button-text="好的" cancel-button-text="不用了" icon="el-icon-info" icon-color="red"
                      title="您确定要删除该分类吗，该操作不可撤回？" @confirm="deleteClassify(scope.$index, scope.row)">
                      <el-button type="danger" size="mini" slot="reference">删除</el-button>
                    </el-popconfirm>
                  </template>
                </el-table-column>
              </el-table>

              <el-form ref="form" label-width="80px" v-if="classifyType == 2">
                <el-form-item label="标签名">
                  <span>{{ editTag.name }}</span>
                </el-form-item>
                <el-form-item label="职位名称">
                  <el-select v-model="editTagPostion.pid" placeholder="请选择" @change="selectPositionChanged">
                    <el-option v-for="position in positionList" :key="position.id" :label="position.name"
                      :value="position.id">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-form>
              <span slot="footer" class="dialog-footer">
                <el-button @click="positionBackClick" size="small">返 回</el-button>
                <el-button type="primary" @click="onSubmitClick" size="small" v-if="submitTitle.length > 0">{{ submitTitle
                }}</el-button>
              </span>
            </el-dialog>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>
  
<script>

import '~/assets/css/setting.css'
import interviewAdmin from "@/api/interviewAdminReq";
import tagApi from "@/api/tag";

export default {
  data() {
    return {
      editTag: {},
      showTagPositionPage: false,
      tagPositionList: [],
      positionList: [],
      editTagPostion: {},

      editQuestion: {},
      
      tagList: [],
 
      classifyList: [],
      positionClassifyList: [],
      submitTitle: "",
      classifyType: 1,
      selectPosition: "",

      slectDate: '',                // 当前显示的日期
      everyDayquestionList: [],     // 每日一题的列表
      showEveryQuestionPage: false,
      functionTitle: "",
      settingtype: 1,
    };
  },

  mounted() {
    this.getTagList();
  },
  methods: {
    addEveryQuestionClick() {
      this.showEveryQuestionPage = true;

    },
    selectDateDidChange(date) {
      this.slectDate = date;
      window.console.log('=====' + date);
    },

    getTagList() {
      tagApi.getTagList().then(response => {
        this.tagList = response.data.tagList;
      });
    },

    onSubmitClick() {
      if (this.classifyType == 1) {
        this.classifyType = 2;
        this.editTagPostion = {};
        interviewAdmin.getPositionList().then((response) => {
          this.positionList = response.data.positionList;
        })
        return
      }
      if (this.classifyType == 2) {
        if (this.editTagPostion.pid == undefined || this.editTagPostion.pid.length == 0) {
          this.$message.error("没有选择绑定的职位哦~");
          return;
        }
        tagApi.addTagPosition({ tid: this.editTag.id, pid: this.editTagPostion.pid }).then(response => {
        });
      }
    },

    editPositionClassifyClick(index, row) {
      this.editTagPostion = this.tagPositionList[index];
      interviewAdmin.getPositionList().then((response) => {
        this.positionList = response.data.positionList;
      });
      interviewAdmin
        .getPositionClassifyList(this.editTagPostion.pid)
        .then(response => {
          this.classifyList = response.data.positionClassifyList;
        });
      this.classifyType = 2;
    },

    positionBackClick() {
      if (this.classifyType == 1) {
        this.showTagPositionPage = false;
      } else if (this.classifyType == 2) {
        this.classifyType = 1;
        this.submitTitle = "新 建"
        tagApi
          .getTagPositionList(this.editQuestion.id)
          .then(response => {
            this.tagPositionList = response.data.tagPositionList;
          });
      }
    },

    editTagPositionClick(index, row) {
      this.editTag = this.tagList[index];
      this.submitTitle = "新 建"
      this.showTagPositionPage = true;
      this.classifyType = 1;
      tagApi
        .getTagPositionList(this.editTag.id)
        .then(response => {
          this.tagPositionList = response.data.tagPositionList;
        });
    },

    selectPositionChanged(item) {
      interviewAdmin
        .getPositionClassifyList(item)
        .then(response => {
          this.classifyList = response.data.positionClassifyList;
        });
    },
    everyDayQuestionClick() {
      this.settingtype = 2;
      if (this.slectDate.length == 0) {
        var date = new Date();
        this.slectDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate());
      }
      interviewAdmin
        .getEveryDayQuestionList(this.slectDate)
        .then(response => {
          this.everyDayquestionList = response.data.everydayList;
        });
    },
    personSettingClick() {
      this.settingtype = 1;
    },
    authoritySettingClick() {
      this.settingtype = 3;
    }
  }
};
</script>
  
<style scoped>
.add-every-day-quesion {
  display: flex;
}

.add-every-day-quesion button {
  margin: 0 auto;
  margin-top: 10px;
}

.admin-setting-chang .el-dialog__wrapper .el-dialog {
  width: 960px;
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
.byte-form-item__content {
  zoom: 1;
  position: relative;
  font-size: 14px;
  line-height: 32px;
}


.byte-input,
.byte-input__input {
  position: relative;
  width: 100%;
  display: inline-block;
  font-size: 14px;
  line-height: 1.5;
}

.byte-input {
  vertical-align: middle;
  border-collapse: separate;
  border-spacing: 0;
}

.setting-profile-view .user-infos .avatar-input {
  padding-left: 74px;
}

.setting-profile-view .user-infos .info-input .input {
  max-width: 440px;
  min-width: 100px;
}

.avatar-info {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 112px;
}

.avatar-info .uploader {
  width: 90px;
  height: 90px;
  position: relative;
  border-radius: 50%;
  width: 90px;
  height: 90px;
  background-size: 100% 100%;
}

.avatar-info .title {
  color: #1d2129;
  font-weight: 500;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 8px;
}

.avatar-info .description {
  color: #86909c;
  font-size: 12px;
  line-height: 17px;
  font-weight: 400;
}

.avatar-uploader .click-cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: rgba(29, 33, 41, 0.5);
  z-index: 2;
  pointer-events: none;
}

.byte-icon {
  width: 19px;
  height: 19px;
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
}

.editable,
input[type="password"],
input[type="text"],
input[type="url"],
textarea {
  resize: none;
  outline: none;
  width: 100%;
  display: block;
  box-shadow: none;
  border: 1px solid #ddd;
  border-radius: 2px;
  transition: border 0.3s;
  background-color: #fff;
  box-sizing: border-box;
}

.byte-input__input {
  border: 1px solid #e6e8eb;
  border-radius: 2px;
  color: #282f38;
  background-color: #fff;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  height: 32px;
  padding: 0 12px;
  font-size: 12px;
}

.byte-input__textarea {
  border: 1px solid #e6e8eb;
  border-radius: 2px;
  position: relative;
  width: 100%;
  display: inline-block;
  color: #282f38;
  line-height: 1.5;
  background-color: #fff;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  height: 32px;
  padding: 0 12px;
  font-size: 14px;
  height: auto;
  padding: 6px 10px;
  vertical-align: top;
  -webkit-transition: all 0.3s, height 0s;
  transition: all 0.3s, height 0s;
  resize: vertical;
}

.avatar-uploader .avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

input[type="file" i] {
  appearance: none;
  background-color: initial;
  cursor: default;
  align-items: baseline;
  color: inherit;
  text-overflow: ellipsis;
  white-space: pre;
  text-align: start !important;
  padding: initial;
  border: initial;
  overflow: hidden !important;
}

.avatar-uploader .input {
  /* display: none; */
  /* opacity: 0; */
  height: 90px;
  background: red;
  margin-top: -95px;
  width: 95px;
}

.avatar-uploader .el-upload {
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  width: 90px;
  height: 90px;
  background-size: 100% 100%;
}

.avatar-uploader .click-cover:hover {
  visibility: visible;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.byte-icon svg {
  width: 100%;
  height: 100%;
  fill: currentColor;
  pointer-events: none;
}

.isShow {
  visibility: hidden !important;
}

.zhanghu-form-item {
  height: 30px;
}

.setting-btn {
  padding: 0;
  font-size: 1.2rem;
  color: #007fff;
  background-color: transparent;
  white-space: nowrap;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 2px;
  border: none;
  padding: 0.5rem 1.3rem;
  outline: none;
  transition: background-color 0.3s, color 0.3s;
  cursor: pointer;
}

.zhanghu-form-item .zhanghu-setting-chang {
  float: right;
}

.el-dialog__footer {
  text-align: center;
}

.el-dialog__title {
  font-weight: 600;
}

.pwchang-form .el-form-item .el-form-item__content {
  float: right;
  margin-right: 102px;
  position: relative;
}

.el-form-item__label {
  font-size: 12px;
}

.pwchang-form {
  margin-left: 45px;
}

.el-dialog__footer {
  position: relative;
  padding: 0px 20px 40px;
}

.chang-pwd-btn {
  width: 120px;
}

.pwd-change-errtiops {
  position: absolute;
  color: #f56c6c;
  left: 208px;
  width: 96px;
  font-size: 12px;
}

.pwd-confim-errtiops {
  position: absolute;
  color: #f56c6c;
  left: 130px;
  width: 186px;
  font-size: 14px;
  top: -45px;
}

.el-textarea__inner {
  resize: none;
}
</style>
  