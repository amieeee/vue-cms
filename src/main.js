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
Vue.http.options.root = 'http://www.liulongbin.top:3005'
// 全局设置 post 时候表单数据格式组织形式   application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true

// 3.1 定义全局过滤器
// 导入格式化时间的插件
import moment from 'moment'
// 3.2定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern="YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
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
})