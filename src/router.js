import VueRouter from 'vue-router'

// 导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContaineror from './components/tabbar/ShopcarContainer.vue'
import SettingContainer from './components/tabbar/SettingContainer.vue'

import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components//photo/PhotoList.vue'
import PhotoInfo from './components/photo/PhotoInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComment from './components/goods/GoodsComment.vue'

let router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContainer},
    { path: '/member', component: MemberContainer},
    { path: '/shopcar', component: ShopcarContaineror},
    { path: '/setting', component: SettingContainer},
    { path: '/home/newslist', component: NewsList},
    { path: '/home/newsinfo/:id', component: NewsInfo},
    { path: '/home/photolist', component: PhotoList},
    { path: '/home/photoinfo/:id', component: PhotoInfo},
    { path: '/home/goodslist', component: GoodsList},
    { path: '/home/goodsinfo/:id', component: GoodsInfo, name: 'goodsinfo'},
    { path: '/home/goodsdesc/:id', component: GoodsDesc, name: 'goodsdesc'},
    { path: '/home/goodscomment/:id', component: GoodsComment, name: 'goodscomment'},
  ],
  linkActiveClass: 'mui-active', // 覆盖默认的路由高亮的类，默认的类叫作 router-link-active
})
export default router