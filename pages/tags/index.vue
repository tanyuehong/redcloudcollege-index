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
			<div class="message-spreate"></div>
			<div class="tags-content">
				<h2>
					标签是 开源实践网用来标识一个问题的关键字，使用标签可以快速定位同类知识。
				</h2>

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
	data () {
		return {}
	},

	asyncData ({ params, error }) {
		return tagServerApi.getAllTagList().then((response) => {
			return {
				tagsList: response.data.tagList,
			}
		})
	},

	head () {
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

	mounted () {
	},

	methods: {
	},
}
</script>

<style scoped>
.tags-content {
	margin-top: 15px;
	background: #fff;
	padding-top: 20px;
	padding-left: 20px;
}

.tags-content h2 {
	font-size: 14px;
	font-weight: 550;
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