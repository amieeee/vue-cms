// 入口文件
import Vue from 'vue'
// 导入 MUI 的样式 
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import app from './App.vue'
// 按需导入 Mint-UI 中的组件
// import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
import Mint from "mint-ui"
import 'mint-ui/lib/style.css'
Vue.use(Mint)

// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)
// 1.3 导入自己的 router.js 路由模块
import router from './router.js'

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)
// 2.3 设置请求根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005/'
// 
// 全局设置 post 时候表单数据格式组织形式   application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true


// 3.1 定义全局过滤器
// 导入格式化时间的插件
import moment from 'moment'
// 3.2定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern="YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

// 4.1 注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)
let car = JSON.parse(localStorage.getItem('car') || '[]')
let store = new Vuex.Store({
  state: { // this.$store.state.***
    car: car, // 将 购物车中的商品的数据，用一个数组存储起来，在 car 数组中，
    // 存储一些商品的对象， 咱们可以暂时将这个商品对象，设计成这个样子   
    // { id:商品的id, count: 要购买的数量, price: 商品的单价，selected: false 
  },
  mutations: { // this.$store.commit(方法名，唯一参数)
    addToCar(state, goodsinfo) {
      // 点击加入购物车 把商品信息 保存到 store 中的 car 上
      let flag = false
      state.car.some(item => {
        if (item.id === goodsinfo.id) {
          item.count += Number.parseInt(goodsinfo.count)
          flag = true
          return true
        }
      })
      if (!flag) {
        state.car.push(goodsinfo)
      }
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateGoodsInfo(state, goodsinfo) {
      // 修改商品数量值
      state.car.some(item => {
        if (item.id === goodsinfo.id) {
          item.count = Number.parseInt(goodsinfo.count)
          return true
        }
      })
      // 当 更新 car 之后，把 car 数组，存储到 本地的 localStorage 中
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    removeFormCar(state, id) {
      // 根据Id，从store 中的购物车中删除对应的那条商品数据
      state.car.some((item, i) => {
        if (item.id === id) {
          state.car.splice(i, 1)
          return true
        }
      })
      // 将删除完毕后的，最新的购物车数据，同步到 本地存储中
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateGoodsSelected(state, info) {
      state.car.some(item => {
        if (item.id === info.id) {
          item.selected = info.selected
          return true
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    }
  },
  getters: { // this.$store.getters.***
    // 相当于计算属性 也相当于 filters
    getAllCount(state) {
      let c = 0
      state.car.forEach(item =>{
        c += item.count
      })
      return c
    },
    getGoodsCount(state) {
      let o = {}
      state.car.forEach(item => {
        o[item.id] = item.count
      })
      return o
    },
    getGoodsSelected(state) {
      let o = {}
      state.car.forEach(item => {
        o[item.id] = item.selected
      })
      return o
    },
    getGoodsCountAndAmount(state) {
      let o = {
        count: 0,
        amount: 0
      }
      state.car.forEach(item => {
        if (item.selected) {
          o.count += item.count
          o.amount += item.price * item.count
        }
      })
      return o
    }
  },
})

// 安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

let vm = new Vue({
  el: '#app',
  data: {

  },
  render: c => c(app),
  router: router, // 1.4 挂在路由对象到我们的 vm 实例上
  store: store, // 挂载 store 
})