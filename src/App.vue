<template>
	<div class="app-container">
		<!-- 第一部分 顶部 Header 区域 -->
		<!-- <mt-header fixed title="东北大学·Vue项目"></mt-header> -->
		<mt-header fixed title="东北大学·Vue项目">
			<router-link to="" slot="left" v-show="flag">
				<!-- @click.native="$router.back(-1) -->
				<mt-button icon="back" @click="goBack">返回</mt-button>
			</router-link>
		</mt-header>
		<!-- 第二部分 中间路由 router-view 区域 -->
		<transition>
			<router-view></router-view>
		</transition>
		<!-- 第三部分 Tabbar 区域 -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-llb" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">{{ $store.getters.getAllCount }}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/setting">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>
	</div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
	data() {
		return {
			flag: false,
		}
	},
	created() {
		// if (this.$route.path === '/home') {
		// 	this.flag = false
		// } else {
		// 	this.flag = true
		// }
		this.flag = this.$route.path === '/home' ? false : true
	},
	methods: {
		goBack() {
			this.$router.go(-1)
			// this.$router.back()
		},
	},
	watch: {
		'$route.path': function (newVal) {
			if (newVal === '/home') {
				this.flag = false
			} else {
				this.flag = true
			}
		}
	}
}
</script>

<style scoped>
	.app-container {
		padding-top: 40px;
		padding-bottom: 50px;
		overflow-x: hidden;
		height: 100%;
	}
	.v-enter {
		opacity: 0;
		transform: translateX(100%);
	}
	.v-leave-to {
		opacity: 0;
		transform: translateX(-100%);
		position: absolute;
	}
	.v-enter-active, 
	.v-leave-active {
		transition: all 0.5s ease;
	}
	.mui-bar-tab .mui-tab-item-llb.mui-active {
		color: #007aff;
	}
	.mui-bar-tab .mui-tab-item-llb {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
	}
	.mui-bar-tab .mui-tab-item-llb .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
	}
	.mui-bar-tab .mui-tab-item-llb .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
	}
</style>
