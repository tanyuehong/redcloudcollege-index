<template>
	<div class="golobal_content">
		<div class="ucenter-home-header">
			<div class="header-backgroud">
				<div class="container">
					<div class="user-info">
						<div class="user-pic">
							<div class="user-pic-bg">
								<img class="user-header-img" :src="userInfo.avatar" />
							</div>
						</div>
					</div>
					<div class="user-info-right">
						<div class="user-info-detail">
							<div class="user-name">
								<span>{{ userInfo.nickname }}</span>
							</div>

							<div class="user-sign">
								<span>{{ userInfo.sign }}</span>
							</div>
						</div>
						<div class="user-info-setting">
							<el-button type="primary" plain icon="el-icon-plus" @click="focusUserClick" v-if="isSetting == false">{{
									focusString
							}}</el-button>
							<el-button @click="personSetting" v-if="isSetting == true" round>个人设置</el-button>
						</div>

					</div>
				</div>
			</div>
			<div class="message-spreate"></div>
		</div>
		<div class="container">
			<div class="col-md-8">
				<div class="ucenter-home-content">
					<div class="list-header">
						<div class="header-content">
							<nuxt-link :to="'/user/' + userInfo.id + '/blog'" class="nav-item"
								v-bind:class="{ active: parmType == 'blog' }">
								<div class="item-title">文章</div>
							</nuxt-link>
							<nuxt-link :to="'/user/' + userInfo.id + '/collect-blog'" class="nav-item"
								v-bind:class="{ active: parmType.substring(0, 7) == 'collect' }">
								<div class="item-title">收藏</div>
							</nuxt-link>
							<nuxt-link :to="'/user/' + userInfo.id + '/focus-mine'" class="nav-item"
								v-bind:class="{ active: parmType.substring(0, 5) == 'focus' }">
								<div class="item-title">关注</div>
							</nuxt-link>
							<a href="/user/43636194286093/collections" class="nav-item">
								<div class="item-title">收藏集</div>
								<div class="item-count only-in-scroll-mode">2</div>
							</a><a href="/user/43636194286093/tags" class="nav-item">
								<div class="item-title">关注</div>
							</a>

						</div>

					</div>
					<div class="list-body">
						<div class="user_article_content book_item" v-if="parmType == 'blog' || parmType == ''">
							<div class="nodata-warper" v-if="dataList.length == 0">
								<img class="nodata-image-tips" src="https://img.redskt.com/asset/img/nodata.png" />
								<div>
									<span>该用户暂时还没有发表文章哦</span>
								</div>
							</div>
							<ul class="article_list">
								<li v-for="bitem in dataList" :key="bitem.id">
									<div class="op_artie_content" v-if="bitem.ctype === 1">
										<nuxt-link class="article_title" :to="'/practice/' + bitem.id">
											{{ bitem.title }}
										</nuxt-link>
										<p class="op_pratice_describ">{{ bitem.descrb }}</p>
										<ul>
											<i class="pratice_icon_view"></i>
											<span class="icon_des">{{ bitem.viewCount }}</span>
											<i class="pratice_icon_zhan"></i>
											<span class="icon_des">{{ bitem.good }}</span>
											<i class="pratice_icon_comment"></i>
											<span class="icon_des">{{ bitem.ccount }}</span>
										</ul>
									</div>
									<div class="op_message_content" v-else>
										<div class="push-lf">
											<nuxt-link :to="'/about/detail/' + bitem.id">
												<img :src="bitem.cover" />
											</nuxt-link>
										</div>

										<div class="push-rt">
											<p class="message-title">
												<nuxt-link :to="'/about/detail/' + bitem.id" target="_blank">{{ bitem.title }}</nuxt-link>
											</p>
											<div class="message-info">
												<div class="info-item">
													<i class="el-icon-view"></i>
													<span class="read-tx">{{ bitem.viewCount }} 阅读</span>
												</div>
											</div>
										</div>
										<div class="clearfix">
										</div>
									</div>
								</li>
							</ul>
						</div>
						<div class="user-collect-content" v-if="parmType.substring(0, 7) == 'collect'">
							<div class="sub-header">
								<div class="sub-header-title">收藏</div>
								<div class="sub-type-box">
									<nuxt-link :to="'/user/' + userInfo.id + '/collect-blog'" class="sub-type"
										v-bind:class="{ active: parmType.substring(8, 12) == 'blog' }">
										文章
									</nuxt-link>
									<nuxt-link :to="'/user/' + userInfo.id + '/collect-ask'" class="sub-type"
										v-bind:class="{ active: parmType.substring(8, 11) == 'ask' }">
										问题
									</nuxt-link>
								</div>
							</div>
							<div class="collect-content-list book_item" v-if="parmType.substring(8, 12) == 'blog'">
								<div class="nodata-warper" v-if="dataList.length == 0">
									<img class="nodata-image-tips" src="https://img.redskt.com/asset/img/nodata.png" />
									<div>
										<span>该用户暂时还没有收藏文章哦</span>
									</div>
								</div>
								<ul class="article_list">
									<li v-for="bitem in dataList" :key="bitem.id">
										<div class="op_artie_content" v-if="bitem.ctype === 1">
											<nuxt-link class="article_title" :to="'/practice/' + bitem.id">
												{{ bitem.title }}
											</nuxt-link>
											<p class="op_pratice_describ">{{ bitem.descrb }}</p>
											<ul>
												<i class="pratice_icon_view"></i>
												<span class="icon_des">{{ bitem.viewCount }}</span>
												<i class="pratice_icon_zhan"></i>
												<span class="icon_des">{{ bitem.good }}</span>
												<i class="pratice_icon_comment"></i>
												<span class="icon_des">{{ bitem.ccount }}</span>
											</ul>
										</div>
										<div class="op_message_content" v-else>
											<div class="push-lf">
												<nuxt-link :to="'/about/detail/' + bitem.id">
													<img :src="bitem.cover" />
												</nuxt-link>
											</div>

											<div class="push-rt">
												<p class="message-title">
													<nuxt-link :to="'/about/detail/' + bitem.id" target="_blank">{{ bitem.title }}</nuxt-link>
												</p>
												<div class="message-info">
													<div class="info-item">
														<i class="el-icon-view"></i>
														<span class="read-tx">{{ bitem.viewCount }} 阅读</span>
													</div>
												</div>
											</div>
											<div class="clearfix">
											</div>
										</div>
									</li>
								</ul>
							</div>

							<div class="collect-content-list ask-item" v-if="parmType.substring(8, 11) == 'ask'">
								<div class="nodata-warper" v-if="dataList.length == 0">
									<img class="nodata-image-tips" src="https://img.redskt.com/asset/img/nodata.png" />
									<div>
										<span>该用户暂时还没有收藏问题哦</span>
									</div>
								</div>
								<div class="questions_collect_con">
									<div v-for="item in dataList" :key="item.qid" class="question_list">
										<div class="answer_title">
											<nuxt-link :to="'/faquestion/' + item.qid" class="header">
												{{ item.title }}
												<div class="ui red label horizontal" data-tooltip="置顶">顶</div>
												<div class="ui orange label horizontal" data-tooltip="热门">热</div>
											</nuxt-link>
										</div>

										<div class="description">
											<p class="line-clamp" v-html="item.content"></p>
										</div>
										<div class="extra question-tags">
											<a class="ui horizontal basic label popup-tag" href="https://www.oschina.net/question/tag/ruby"
												target="_blank">
												<img src="https://static.oschina.net/img/logo/ruby.gif" />Ruby
											</a>

											<a class="ui horizontal basic label popup-tag" href="https://www.oschina.net/question/tag/java"
												target="_blank">
												<img src="https://static.oschina.net/img/logo/java.png" />Java
											</a>
										</div>

										<div class="q_time">
											<span>{{ item.gmtCreate }}来自</span>
											<a class="user_name" href="https://my.csdn.net/dabocaiqq" target="_blank">{{ item.nickname }}</a>
											<b>
												悬赏
												<a href="javascript:;" title="个人悬赏">{{ item.price }}C</a>
											</b>
											<nuxt-link :to="'/faquestion/' + item.qid" class="answer_num" title="问题回答数量">
												<span>{{ item.reply }}</span>
												<p class="anser-lable">回答</p>
											</nuxt-link>
										</div>
									</div>
								</div>

							</div>
						</div>
						<div class="user-focus-content" v-if="parmType.substring(0, 5) == 'focus'">
							<div class="sub-header">
								<div class="sub-header-title">关注</div>
								<div class="sub-type-box">
									<nuxt-link :to="'/user/' + userInfo.id + '/focus-mine'" class="sub-type"
										v-bind:class="{ active: parmType.substring(6, 10) == 'mine' }">
										关注
									</nuxt-link>
									<nuxt-link :to="'/user/' + userInfo.id + '/focus-fans'" class="sub-type"
										v-bind:class="{ active: parmType.substring(6, 11) == 'fans' }">
										粉丝
									</nuxt-link>
								</div>
							</div>
							<div class="user-focus-list">
								<ul class="tag-list">
									<li class="item" v-for="item in dataList" :key="item.id">
										<div class="user">
											<meta itemprop="url" :content="'https://www.redskt.com/user/' + item.id">
											<meta itemprop="image" :content="item.avatar">
											<meta itemprop="name" :content="item.nickname">
											<!---->
											<!---->
											<div blank="true" class="link"><img :src="item.avatar" :alt="item.nickname + '的头像'"
													class="lazy avatar avatar" loading="lazy">
												<div class="info-box">
													<nuxt-link :to="'/user/' + item.id + '/blog'" target="_blank" class="username">
														<span class="name" style="max-width: 128px;">
															{{ item.nickname }}
														</span> <span blank="true" class="rank">
															<!-- <img
																src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e108c685147dfe1fb03d4a37257fb417.svg"
																alt="lv-3"> -->
														</span>
													</nuxt-link>
													<!---->
												</div> <button class="follow-btn">
													关注
												</button>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-4 ucenter-rightinfo">
				<div class="info-honor">
					<div class="block-title">个人成就</div>
					<div class="block-body">
						<!---->
						<!---->
						<!---->
						<!---->
						<div class="stat-item"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26"
								class="icon">
								<g fill="none" fill-rule="evenodd" transform="translate(0 .57)">
									<ellipse cx="12.5" cy="12.57" fill="#E1EFFF" rx="12.5" ry="12.57" data-v-4fa4e5da=""></ellipse>
									<path fill="#7BB9FF"
										d="M8.596 11.238V19H7.033C6.463 19 6 18.465 6 17.807v-5.282c0-.685.483-1.287 1.033-1.287h1.563zm4.275-4.156A1.284 1.284 0 0 1 14.156 6c.885.016 1.412.722 1.595 1.07.334.638.343 1.687.114 2.361-.207.61-.687 1.412-.687 1.412h3.596c.38 0 .733.178.969.488.239.317.318.728.21 1.102l-1.628 5.645a1.245 1.245 0 0 1-1.192.922h-7.068v-7.889c1.624-.336 2.623-2.866 2.806-4.029z">
									</path>
								</g>
							</svg> <span class="content">文章被点赞<span class="count">{{ userInfo.bgoodsum }}</span></span></div>
						<div class="stat-item"><svg width="25" height="25" viewBox="0 0 25 25" class="icon stat-view-icon">
								<g fill="none" fill-rule="evenodd">
									<circle cx="12.5" cy="12.5" r="12.5" fill="#E1EFFF"></circle>
									<path fill="#7BB9FF"
										d="M4 12.5S6.917 7 12.75 7s8.75 5.5 8.75 5.5-2.917 5.5-8.75 5.5S4 12.5 4 12.5zm8.75 2.292c1.208 0 2.188-1.026 2.188-2.292 0-1.266-.98-2.292-2.188-2.292-1.208 0-2.188 1.026-2.188 2.292 0 1.266.98 2.292 2.188 2.292z">
									</path>
								</g>
							</svg> <span class="content">文章被阅读<span class="count">{{ userInfo.viewsum }}</span></span></div>

						<nuxt-link :to="'/about/detail/1523552231247499264'" target="_blank" class="stat-item"><svg
								xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" class="icon stat-jp-icon">
								<g fill="none" fill-rule="evenodd">
									<circle cx="12.5" cy="12.5" r="12.5" fill="#E1EFFF"></circle>
									<path fill="#7BB9FF"
										d="M16.694 13.516l-3.719 3.055a1.1 1.1 0 0 1-1.412-.013l-2.77-2.362-3.597 2.437a.693.693 0 0 1-.895-.101.649.649 0 0 1-.008-.876l3.68-4.096a1.1 1.1 0 0 1 1.507-.122l2.653 2.135 2.248-2.4-1.34-1.358a.5.5 0 0 1 .327-.85l5.438-.313a.5.5 0 0 1 .528.533l-.368 5.449a.5.5 0 0 1-.855.317l-1.417-1.435z">
									</path>
								</g>
							</svg> <span class="content">源力值<span class="count">{{ userInfo.practice }}</span></span></nuxt-link>
						<!---->
					</div>
				</div>
				<!---->
				<div class="follow-block shadow"><a href="/user/1592558262169277/following" rel="nofollow" class="follow-item"
						data-v-4fa4e5da="">
						<div class="item-title">关注了</div>
						<div class="item-count">{{ userInfo.mfocus }}</div>
					</a><a href="/user/1592558262169277/followers" class="follow-item" data-v-4fa4e5da="">
						<div class="item-title">粉丝</div>
						<div class="item-count">{{ userInfo.focus }}</div>
					</a></div>
				<div class="more-block block"><a href="/user/1592558262169277/collections" class="more-item" data-v-4fa4e5da="">
						<div class="item-title">收藏集</div>
						<div class="item-count">2</div>
					</a><a href="/user/1592558262169277/tags" class="more-item" data-v-4fa4e5da="">
						<div class="item-title">关注标签</div>
						<div class="item-count">8</div>
					</a>
					<div class="more-item">
						<div class="item-title">加入于</div>
						<div class="item-count"><time datetime="2021-12-25T11:20:25.000Z" title="2021-12-25 19:20:25"
								class="time">{{ userCreateTime }}</time></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import '~/assets/css/appdown.css'
import '~/assets/css/contentlist.css'

import userApi from "@/api/user";
import userServerApi from "@/api/userServerReq";

export default {

	data () {
		return {
			isLogin: false,
			loginInfo: {},
			isFocus: false,
			isSetting: false,
		};
	},

	asyncData ({ params, error, query }) {
		return userServerApi.getShowUserInfo(params.id, params.type).then(response => {
			return {
				dataList: response.data.dataList,
				userInfo: response.data.userInfo,
				parmUid: params.id,
				parmType: params.type
			};
		});
	},
	mounted () {
		var token = localStorage.getItem("redclass_token");
		var userStr = localStorage.getItem("redclass_user");
		if (
			!(token && token != "undefined") ||
			!(userStr && userStr != "undefined")
		) {
			this.isLogin = false;
			this.isSetting = false;
		} else {
			this.loginInfo = JSON.parse(userStr);
			this.isLogin = true;
			if (this.loginInfo.id === this.parmUid) {
				this.isSetting = true;
			}
		}
	},

	methods: {
		// 获取文章列表的方法
		getUserArticleList () {
			userApi.getArticleList(this.parmUid).then(response => {
				this.articleList = response.data.articleList;
			});
		},

		getUserCollectArticleList () {
			userApi.getCollectArticleList(this.parmUid).then(response => {
				//this.articleList = response.data.articleList;
			});
		},
		focusUserClick () {

		},
		personSetting () {
			var loginToken = window.localStorage.getItem('redclass_token');
			this.$router.push({
				name: "user-setting",
				params: { "loginToken": loginToken },
			});
		},
		getCheckType (type) {
			if (type.substring(0, 7) == 'collect') {
				return true;
			}
			return false
		}
	},

	computed: {
		userCreateTime: function () {
			return this.userInfo.gmtCreate.substring(0, 10);
		},
		focusString: function () {
			return this.isFocus ? "已关注" : "关注Ta";
		}
	},
};
</script>

<style>
.user-focus-list .follow-btn {
	flex: 0 0 auto;
	margin: 6px 0 0 10px;
	padding: 0;
	width: 75px;
	height: 28px;
	font-size: 12px;
	color: #92c452;
	background-color: #fff;
	border: 1px solid #92c452;
	border-radius: 2px;
}

.user-focus-list .info-box .username {
	font-size: 16px;
	font-weight: 600;
	color: #2e3135;
	text-decoration: none;
}

.user-focus-list .info-box {
	flex: 1 1 auto;
	min-width: 0;
}

.user-focus-list .user {
	position: relative;
	box-sizing: border-box;
}

.user-focus-list .item:not(:last-child) {
	border-bottom: 1px solid rgba(230, 230, 231, .5);
}

.user-focus-list .link {
	cursor: pointer;
	display: flex;
	align-items: center;
	padding: 5px 24px;
	min-height: 70px;
}

.user-focus-list .avatar {
	flex: 0 0 auto;
	margin-right: 16px;
	width: 37px;
	height: 37px;
	border-radius: 50%;
}

.questions_collect_con {
	margin-top: 20px;
}

.answer_num .anser-lable {
	margin-top: 0px;
}

.questions_collect_con .q_time {
	margin-top: 10px;
	margin-bottom: 10px;
	position: relative;
}

.questions_collect_con .answer_num {
	width: 50px;
	height: 50px;
	background: #a0d56d;
	position: absolute;
	right: 0px;
	top: -30px;
	border-radius: 3px;
	font-size: 14px;
	color: #fff;
	text-align: center;
	cursor: pointer;
	padding-top: 5px;
}

.questions_collect_con .extra img {
	display: inline-block;
	vertical-align: baseline;
	height: 22px !important;
	border-radius: 0.14285714rem;
	padding: 2px 0;
	margin: -0.5833em 0.5em -0.5833em 0;
}

.questions_collect_con .extra {
	display: block;
	position: relative;
	background: 0 0;
	margin: 0.5rem 0 0;
	width: 100%;
	padding: 0 0 0;
	top: 0;
	left: 0;
	color: rgba(0, 0, 0, 0.4);
	box-shadow: none;
	transition: color 0.1s ease;
	border-top: none;
}

.questions_collect_con .description {
	font-size: 14px;
	margin-top: 10px;
	margin-bottom: 10px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	vertical-align: middle;
	max-height: 40px;
}

.questions_collect_con .header {
	display: inline-block;
	text-decoration: none;
	margin: -0.21425em 0 0;
	font-family: 'PingFang SC', 'Helvetica Neue', 'Microsoft YaHei UI', 'Microsoft YaHei', 'Noto Sans CJK SC', Sathu, EucrosiaUPC, Arial, Helvetica, sans-serif;
	font-weight: 700;
	color: rgba(0, 0, 0, 0.85);
}

.questions_collect_con .question_list {
	margin-bottom: 20px;
	border-bottom: 1px solid #f0f0f0;
	margin-right: 15px;
}

.questions_collect_con .question_list .answer_title {
	font-size: 14px;
}

.list-body .sub-header .sub-type-box .sub-type.active {
	color: #000;
}

.ucenter-home-content .list-body {
	margin-top: 0px;
}

.list-body .sub-header .sub-type-box .sub-type:not(:last-child) {
	margin-right: 26px;
}

.list-body .sub-header .sub-type-box .sub-type:not(:last-child):after {
	content: "";
	position: absolute;
	top: 50%;
	right: -1rem;
	margin-top: -0.5em;
	width: 1px;
	height: 1em;
	background-color: #b2bac2;
	opacity: .5;
}

.list-body .sub-header .sub-type-box .sub-type {
	position: relative;
	padding: 1rem 0;
	font-size: 16px;
	color: #72777b;
	text-decoration: none;
}

.list-body .sub-header .sub-type-box {
	margin-left: auto;
}

.list-body .sub-header .sub-header-title {
	margin-right: 1rem;
	font-size: 16px;
	font-weight: 550;
	color: #000;
}

.list-body .sub-header {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	padding: 0 24px;
	height: 56px;
	white-space: nowrap;
	border-bottom: 2px solid rgba(230, 230, 231, .5);
}

.list-header .nav-item {
	flex: 0 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	width: 70px;
	height: 100%;
	text-decoration: none;
}

.list-header .nav-item.active:after {
	content: "";
	position: absolute;
	width: 22px;
	height: 3px;
	border-radius: 50px;
	left: 50%;
	bottom: 0;
	transform: translateX(-50%);
	z-index: 10;
	background-color: #1e80ff;
}

.list-header .nav-item .item-title {
	font-size: 18px;
	font-weight: 400;
	color: #515767;
}

.list-header {
	position: relative;
	margin: 0;
	padding: 0;
	height: 60px;
	background-color: #fff;
	border-radius: 2px 2px 0 0;
	border-bottom: 1px solid #e4e6eb;
	z-index: 100;
}

.list-header .header-content {
	display: flex;
	align-items: center;
	height: 100%;
	max-width: 960px;
	white-space: nowrap;
	position: relative;
	margin: 0 auto;
}

.more-block .more-item .item-title {
	margin-right: auto;
}

.more-block .more-item {
	display: flex;
	padding: 20px 6px;
	font-size: 16px;
	color: #000;
	border-top: 1px solid rgba(230, 230, 231, .5);
}

.ucenter-rightinfo .more-block {
	flex: 0 0 auto;
	margin-left: 15px;
	width: 350px;
	line-height: 1.2;
	margin-top: 25px;
	margin-bottom: 15px;
}

.follow-block .follow-item .item-count {
	margin-top: 10px;
	font-size: 18px;
	font-weight: 600;
}

.follow-block .follow-item .item-title {
	font-size: 18px;
	font-weight: 500;
	text-align: center;
	color: #31445b;
}

.follow-block .follow-item {
	flex: 1 1 auto;
	padding: 10px 0px;
	text-align: center;
	color: #31445b;
	text-decoration: none;
}

.follow-block {
	margin-top: 15px;
	display: flex;
	position: relative;
	margin-bottom: 10px;
	background: #fff;
	border-radius: 2px;
	padding: 15px;
}

.info-item {
	font-size: 14px;
}

.op_message_content .push-rt {
	float: left;
}

.op_message_content .push-rt .message-title {
	margin-top: 3px;
	margin-bottom: 20px;
}

.op_message_content .push-rt p:first-child a {
	display: block;
	height: 36px;
	line-height: 18px;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
	text-overflow: ellipsis;
	color: #444;
	font-size: 16px;
	font-weight: 550;
}

.op_message_content .read-tx {
	margin-right: 15px;
	color: #999;
}

.op_message_content .push-lf {
	float: left;
	width: 180px;
	height: 110px;
	overflow: hidden;
	margin-right: 12px;
}

.op_message_content .push-lf img {
	display: block;
	width: 100%;
}

.user_article_content .article_list {
	padding-left: 0px;
}

.ucenter-rightinfo {
	margin-top: 15px;
	padding-right: 0px;
	padding-left: 0px;
}

.ucenter-rightinfo .info-honor {
	background: #fff;
	border-radius: 2px;
	padding: 15px;
	box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
}

.info-honor .block-title {
	font-size: 16px;
	margin-top: 5px;
	padding-bottom: 20px;
	font-weight: 600;
	color: #333;
	border-bottom: 1px solid rgba(230, 230, 231, .5);
	margin-bottom: 20px;
}

.info-honor .stat-item {
	display: flex;
	align-items: center;
	font-size: 14px;
	color: #333;
	font-weight: 500;
	margin-top: 14px;
	margin-bottom: 10px;
}

.info-honor .stat-item .icon {
	flex: 0 0 auto;
	margin-right: 12px;
}

.info-honor .stat-item .count {
	margin-left: 6px;
	font-weight: 500;
}

.ucenter-home-header .message-spreate {
	border: 0;
	height: 1px;
	background: #333;
	background-image: linear-gradient(90deg, #ccc, #333, #ccc);
	clear: both;
}

.header-backgroud {
	background-image: url(https://static.redskt.com/assets/img/usercover.jpg);
	background-position: center;
	height: 180px;
	background-size: 100% 100%;
}

.ucenter-home-content {
	background: white;
	margin-top: 16px;
	padding-top: 15px;
	padding-left: 20px;
	padding-bottom: 15px;
	margin-bottom: 20px;
}

.user-info {
	float: left;
	margin-top: 58px;
}

.user-info .user-pic {
	width: 124px;
	height: 124px;
}

.user-info .user-pic .user-pic-bg {
	box-shadow: 0 4px 8px 0 rgb(7 17 27 / 10%);
	width: 120px;
	height: 120px;
	border-radius: 50%;
	background: #fff;
}

.user-info .user-pic .user-pic-bg .user-header-img {
	text-align: center;
	width: 120px;
	height: 120px;
	border-radius: 50%;
}

.user-info-right {
	float: left;
	margin-right: 80px;
	width: 920px;
	margin-top: 93px;
}

.user-info-detail {
	width: 360px;
	float: left;
	margin-left: 6px;
}

.user-info-right .user-info-detail .user-name {
	font-weight: 600;
	text-align: left;
	font-size: 18px;
	line-height: 28px;
	margin-top: 6px;
	color: #333;
}

.user-info-right .user-info-detail .user-sign {
	color: #666;
	text-align: left;
	font-size: 12px;
	margin-top: 6px;
}

.user-about-item {
	display: flex;
	flex-wrap: wrap;
	height: auto;
	margin-top: 15px;
	margin-right: 20px;
	float: right;
}

.user-about-item .user-about-item-li {
	display: block;
	margin-right: 16px;
	height: 40px;
}

.user-about-item .user-about-item-li .user-about-count {
	width: 100%;
	font-size: 16px;
	font-weight: 600;
	text-align: center;
	color: #333;
}

.user-about-item .user-about-item-li .user-about-name {
	width: 100%;
	font-size: 14px;
	color: #666;
	text-align: center;
}

.user-info-right .user-info-setting {
	float: right;
	margin-top: 15px;
}
</style>
