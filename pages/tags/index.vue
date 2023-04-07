<template>
	<div class="main_global_bg">
		<div class="container main-content">
			<div class="message-top-rumb">
				<div class="ui breadcrumb red_breadcrumb">
					<nuxt-link to="/" class="section">
						首页
					</nuxt-link>
					<span class="glyphicon glyphicon glyphicon-menu-right" aria-hidden="true"></span>
					<div class="active section">所有标签</div>
				</div>
			</div>
			<div class="tags-all-content">
				<h2>
					标签是 开源实践网用来标识一个问题的关键字，使用标签可以快速定位同类知识。
				</h2>
				<div class="search-input">
					<el-input placeholder="请输入关键词" v-model="searchKey" class="search-btn">
						<el-button slot="append" icon="el-icon-search"></el-button>
					</el-input>

					<span class="tips_tag" @click="addTagClick">
						<span class="span_add" style="color: rgb(39, 124, 204);">
							<i class="icon icon_add icon_add_pos"></i>
						</span> 没有找到标签，添加新标签？</span>
					<el-dialog title="添加标签" :visible.sync="addTagPageShow" :close-on-click-modal="false"
						:before-close="changePwdClose" width="650px" :show-close="false" center>
						<el-form ref="form" label-width="80px">
							<el-form-item label="标签名">
								<el-input v-model="editClassify"></el-input>
							</el-form-item>
							<el-form-item label="标签描述">
								<el-input type="textarea" placeholder="填写该标签的由来,优点，缺点等等" v-model="userInfo" maxlength="200"
									:rows="6" show-word-limit resize="none">
								</el-input>
							</el-form-item>
							<el-form-item label="图片src">
								<el-input v-model="editClassify"></el-input>
							</el-form-item>

						</el-form>
						<span slot="footer" class="dialog-footer">
							<el-button size="small" @click="addTagPageShow = false">取 消</el-button>
							<el-button type="primary" size="small" :loading="submitChangePwd" class="chang-pwd-btn"
								@click="changePwdClick" center>创 建</el-button>
						</span>
					</el-dialog>
				</div>

				<div class="tags-warper">
					<div class="cards">
						<div class="card tag-card" v-for="tag in tagsList" :key="tag.id">
							<div class="content">
								<nuxt-link :to="'/tags/' + tag.id" class="header" target="_blank">{{ tag.name
								}}</nuxt-link>
								<nuxt-link :to="'/tags/' + tag.id" class="meta">{{ tag.askcount }} 个问答</nuxt-link>
								<nuxt-link :to="'/tags/' + tag.id" class="description">{{ tag.describ }}
								</nuxt-link>
								<!-- </nuxt-link> -->
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import tagServerApi from "@/api/tagServerReq";

export default {

	asyncData({ params, error }) {
		return tagServerApi.getAllTagList().then((response) => {
			return {
				tagsList: response.data.tagList,
				addTagPageShow: false,
				searchKey: '',
			}
		})
	},

	head() {
		return {
			title: "所有标签列表 - 开源实践网",
			meta: [
				{
					hid: 'keywords',
					name: 'keywords',
					content: "标签列表",
				},
				{
					hid: 'description',
					name: 'description',
					content: "标签列表",
				},
				{
					hid: 'og:description',
					content: "标签列表",
				},
			],
		}
	},

	mounted() {
	},

	methods: {
		addTagClick() {
			this.addTagPageShow = true;
		}
	},
}

</script>

<style scoped>
.search-input .tips_tag {
	margin-left: 20px;
	font-size: 14px;
	color: #507999;
	cursor: pointer;
}

.search-input .icon {
	display: inline-block;
	background-position: 50%;
	background-repeat: no-repeat;
	background-size: 100% 100%;
	vertical-align: middle;
}

.search-input .span_add {
	display: inline-block !important;
	width: 24px;
	height: 24px;
	text-align: center;
	line-height: 24px;
	background-color: #ebf2f7;
	border-radius: 2px;
	cursor: pointer;
}

.search-input .icon_add {
	width: 12px;
	height: 12px;
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAXElEQVRIS2NkoDFgpLH5DERbEFA58z+yYza0pxOllyhFIINHLSAY16NBRPsgQg9jgjYSUADLJ/B8MGoBeohhBBGhMB/NB4RCaLQ0JRhCwyCICPsRuwqi62RyLQAAilhQGRoPkngAAAAASUVORK5CYII=);
	cursor: pointer;
}

.tags-all-content {
	background: #fff;
	padding-top: 0px;
	padding-left: 20px;
}

.tags-all-content .search-input {
	margin-top: 10px;
	margin-bottom: 10px;
}

.tags-all-content .search-input .add-tag {
	margin-right: 10px;
	float: right;
}

.tags-all-content .search-input .search-btn {
	width: 360px
}

.tags-all-content h2 {
	font-size: 14px;
	font-weight: 510;
	margin-top: 0px;
}

.message-top-rumb .breadcrumb {
	margin-bottom: 0px;
	padding-bottom: 6px;
}

.tags-warper .cards {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	margin-top: 20px;
	margin-bottom: 20px;
	padding-bottom: 20px;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
}

.tags-warper .cards .content .header {
	font-size: 14px;
	text-decoration: none;
	color: #409EFF;
	font-weight: 550;
}

.tags-warper .cards .content .meta {
	color: #999;
	margin-top: 6px;
	display: block;
	text-decoration: none;
}

.tags-warper .cards .content .description {
	font-size: 14px;
	color: #666;
	overflow: hidden;
	text-overflow: ellipsis;
	vertical-align: middle;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	display: -webkit-box;
	text-decoration: none;
	margin-top: 6px;
}

.tags-warper .cards .content {
	-webkit-box-flex: 1;
	-ms-flex-positive: 1;
	flex-grow: 1;
	border: none;
	border-top: 1px solid rgba(34, 36, 38, .1);
	background: 0 0;
	margin: 0;
	padding: 15px 15px;
	-webkit-box-shadow: none;
	box-shadow: none;
	font-size: 14px;
	border-radius: 0;
}

.tags-warper .cards .card {
	max-width: 100%;
	position: relative;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	width: 290px;
	min-height: 0;
	background: #fff;
	padding: 0;
	border: none;
	margin-right: 50px;
	margin-bottom: 35px;
	border-radius: 0.14285714rem;
	-webkit-box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
	box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
	-webkit-transition: -webkit-box-shadow .1s ease, -webkit-transform .1s ease;
	transition: -webkit-box-shadow .1s ease, -webkit-transform .1s ease;
	transition: box-shadow .1s ease, transform .1s ease;
	transition: box-shadow .1s ease, transform .1s ease, -webkit-box-shadow .1s ease, -webkit-transform .1s ease;
}

.message-top-rumb {
	padding-top: 20px;
	padding-left: 20px;
	background: #fff;
	padding-bottom: 15px;
}
</style>