<template>
  <div>
    <!-- 1. 轮播图区域 -->
    <swiper :lunbotu="lunbotuList" :isFull="isFull"></swiper>
    <!-- 2. 九宫格区域 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div> 
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodslist">
        <img src="../../images/menu3.png" alt="">
        <div class="mui-media-body">商品购买</div>
        </router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu4.png" alt="">
        <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu5.png" alt="">
        <div class="mui-media-body">视频专区</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu6.png" alt="">
        <div class="mui-media-body">联系我们</div></a></li>
    </ul> 
  </div>
</template>
<script>

import { Toast } from 'mint-ui'
import swiper from '../subcomponents/swiper.vue'

export default {
  data() {
    return {
      lunbotuList: [], // 保存轮播图的数组
      isFull: true,
    }
  },
  created() {
    this.getLunbotu()
  },
  methods: {
    getLunbotu() {
      this.$http.get('api/getlunbo')
        .then(result => {
          // console.log(result.body.message)
          if (result.body.status === 0) {
            this.lunbotuList = result.body.message
          } else {
            Toast('获取就轮播图失败。。。')
          }
        })
    }
  },
  components: {
    'swiper': swiper,
  }
}
</script>

<style lang="scss" scoped>
  // 轮播图
  .mint-swipe {
    height: 200px;
    .mint-swipe-item {
      &:nth-child(1) {
        background-color: #f00;
      }
      &:nth-child(2) {
        background-color: #00f;
      }
      &:nth-child(3) {
        background-color: #0f0;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }  
  }
  // 九宫格
  .mui-table-view.mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: 0;
    img {
      width: 60px;
      height: 60px;
    }
  }
  .mui-media-body {
    font-size: 12px;
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: 0;
  }
</style>
