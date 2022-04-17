<template>
  <div class="golobal_content">
    <section class="container">
      <div class="practice_detail">
        <div class="practice_content">
          <div class="practice_header">
            <div class="pratice-header">
              <h1>{{pitem.title}}</h1>
              <!-- <img class="vam user-head-image"
                           :src="loginInfo.avatar"
                           width="30"
                           height="30"
                           alt /> -->
            </div>
          </div>
          <div class="mark_content"
               v-html="changeMarkToHtml(pitem.content)"></div>
        </div>

        <div class="practice_left_show">
          <div class="tool_item">
            <div class="tool_crcle"
                 @click="goodBtnClick"
                 v-bind:class="{ toolactive: goodslect }"
                 role="button"
                 tabindex="-1"
                 aria-label="给文章点赞">
              <i aria-label="ic-like"
                 class="anticon">
                <svg width="1em"
                     height="1em"
                     fill="currentColor"
                     aria-hidden="true"
                     focusable="false"
                     class="">
                  <use xlink:href="#ic-like"></use>
                </svg>
              </i>
            </div>
            <div class="P63n6G">
              <div class="_2LKTFF">
                <span class="_1GPnWJ">
                  {{pitem.good}}
                  赞
                </span>
              </div>
            </div>
          </div>
          <div class="tool_item">
            <div class="tool_crcle"
                 role="button"
                 tabindex="-1"
                 aria-label="赞赏作者">
              <i aria-label="ic-shang"
                 class="anticon">
                <img src="~/assets/img/dashang.png"
                     class="tool_item_image" />
              </i>
            </div>
            <div class="P63n6G"
                 role="button"
                 tabindex="-1"
                 aria-label="查看赞赏列表">
              赞赏
            </div>
          </div>
          <div class="tool_item">
            <div class="tool_crcle _1fDw5l">
              <img src="~/assets/img/gengduo.png"
                   class="tool_item_image" />
            </div>

            <div class="P63n6G">更多好文</div>
          </div>
        </div>
      </div>
    </section>
    <svg class="svgcostClass"
         style="display: none; width: 0; height: 0;"
         width="0"
         height="0"
         focusable="false"
         aria-hidden="true">
      <symbol id="ic-like"
              viewBox="0 0 1084 1024">
        <path d="M728.064 343.943529c-17.648941-2.891294-23.552-20.239059-26.503529-28.912941V104.026353C701.560471 46.200471 654.396235 0 595.425882 0c-53.007059 0-97.28 40.478118-106.134588 89.569882-29.997176 184.862118-138.541176 255.457882-217.630118 280.937412a26.142118 26.142118 0 0 0-18.130823 24.877177v560.067764c0 19.817412 16.022588 35.84 35.84 35.84h535.973647c56.018824-11.565176 94.328471-31.804235 120.892235-86.738823l120.832-416.105412c23.552-75.173647-14.757647-147.395765-100.231529-144.564706h-238.772706z m-571.813647 31.744H76.619294C35.358118 375.687529 0 410.383059 0 450.861176v462.426353c0 43.369412 32.406588 78.004706 76.619294 78.004706h79.631059c27.708235 0 50.115765-22.407529 50.115765-50.115764V425.863529a50.115765 50.115765 0 0 0-50.115765-50.115764z"></path>
      </symbol>
    </svg>
  </div>
</template>

<style scoped>
.toolactive {
  color: #fff;
  background-color: #ec7259 !important;
}
.practice_content {
  background: white;
  padding-left: 15px;
  padding-top: 20px;
  padding-bottom: 15px;
  margin-bottom: 20px;
  margin-top: 15px;
  padding-right: 15px;
}
.practice_left_show {
  position: fixed;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 600px;
  width: 60px;
  margin-left: -75px;
  top: 86px;
  z-index: 2;
}

.svgcostClass {
  fill: currentColor;
  vertical-align: middle;
}
.tool_item,
.tool_crcle {
  display: flex;
  align-items: center;
}

.tool_item {
  position: relative;
  flex-direction: column;
  margin-bottom: 16px;
  cursor: pointer;
  color: #969696;
}
.tool_crcle {
  justify-content: center;
  width: 48px;
  height: 48px;
  font-size: 18px;
  border-radius: 50%;
  box-shadow: 0 2px 10px rgb(0 0 0 / 5%);
  background-color: #fff;
}
.tool_item_image {
  width: 23px;
  margin-top: 3px;
}
</style>

<script>
import showdown from 'showdown'
import '~/assets/css/markdown.css'
import realPractice from '@/api/realpractice'
import useract from '@/api/useract'

export default {
  data () {
    return {
      title: '开源实践网',
      goodslect: false,
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.pitem.descrb,
        },
        {
          hid: 'og:description',
          content: this.pitem.descrb,
        },
      ],
    }
  },
  asyncData ({ params, error }) {
    return realPractice.getRealPraticeDetail(params.id).then((response) => {
      return {
        pitem: response.data.pitem,
        title: response.data.pitem.title,
      }
    })
  },
  mounted () {
    this.getUserPraticeGood();
  },
  methods: {
    //分页切换的方法
    //参数是页码数
    handleClick (tab, event) {
      console.log(tab, event)
    },

    getUserPraticeGood () {
      useract.getUserPraticeGood(this.pitem.id).then((response) => {
        this.goodslect = response.data.good;
      })
    },

    addUserPraticeGood () {
      useract.addUserPraticeGood(this.pitem.id).then((response) => {
        this.pitem.good++;
        this.goodslect = true;
      })
    },

    cancleleUserPraticeGood () {
      useract.cancleleUserPraticeGood(this.pitem.id).then((response) => {
        this.pitem.good--;
        this.goodslect = false;
      })
    },

    goodBtnClick () {
      if (this.goodslect) {
        this.cancleleUserPraticeGood();
      } else {
        this.addUserPraticeGood();
      }
    },

    changeMarkToHtml (content) {
      var converter = new showdown.Converter()
      return converter.makeHtml(content)
    },
  },
  computed: {},
}
</script>
