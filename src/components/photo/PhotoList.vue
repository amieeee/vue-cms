<template>
  <div>
    <!-- 顶部滑动条 -->
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <!-- tap 事件 只有 mui 可以用 -->
          <a :class="['mui-control-item', item.id === 0 ? 'mui-active' : '' ]" v-for="item in cates" :key="item.id"
            @tap="getPhotoListByCateId(item.id)">
            {{ item.title }}
          </a>
        </div>
      </div>
		</div>
    <!-- 图片列表区域 -->
    <ul class="photo-list">
      <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/' + item.id" tag="li">
        <img v-lazy="item.img_url">
        <div class="info">
          <h1 class="info-title">{{ item.title }}</h1>
          <div class="info-body">{{ item.zhaiyao }}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
// 1.1 导入 mui
import mui from '../../lib/mui/js/mui.min.js'
import { Toast } from "mint-ui"
export default {
  data() {
    return {
      cates: [], // 所有分类数组
      list: [], // 图片列表
    }
  },
  created() {
    this.getAllCategory()
    this.getPhotoListByCateId(0)
  },
  mounted() {
    // 1,2 初始化 mui scroll 组件
     // 当 组件中的DOM结构被渲染好并放到页面中后，会执行这个 钩子函数
    // 如果要操作元素了，最好在 mounted 里面，因为，这里时候的 DOM 元素 是最新的
    mui(".mui-scroll-wrapper").scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    })
  },
  methods: {
    getAllCategory() {
      this.$http.get('api/getimgcategory').then(result => {
        if (result.body.status === 0) {
          result.body.message.unshift({title: "全部", id: 0})
          this.cates = result.body.message
        } else {
          Toast('获取内容失败')
        }
      })
    },
    getPhotoListByCateId(cateId) {
      this.$http.get('api/getimages/' + cateId).then(result => {
        if (result.body.status === 0) {
          this.list = result.body.message
        } else {
          Toast('获取数据失败')
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>
  * {
    touch-action: pan-y;
  }  
  .mint-header {
    z-index: 999;
  }
  .photo-list {
    margin: 0;
    padding: 10px;
    list-style: none;
    padding-bottom: 0;
    li {
      text-align: center;
      background-color: #ccc;
      box-shadow: 0 0 6px #999;
      position: relative;
      img {
        width: 100%;
        vertical-align: middle;
      }
      img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
      }
      .info {
        position: absolute;
        color: #fff;
        text-align: left;
        bottom: 0;
        left: 0;
        // max-height: 84px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        .info-title {
          font-size: 14px;
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
        .info-body {
          font-size: 12px;
        }
      }
    }
  }
</style>
