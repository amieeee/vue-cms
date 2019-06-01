<template>
  <div class="setting-container">
    <!--页面主内容区开始-->
			<div class="mui-page-content">
				<div class="mui-scroll-wrapper">
					<div class="mui-scroll">
						<ul class="mui-table-view mui-table-view-chevron">
							<li class="mui-table-view-cell">
								<a id="rate" class="mui-navigate-right">评分鼓励</a>
							</li>
							<li class="mui-table-view-cell">
								<a id="share" class="mui-navigate-right">分享推荐</a>
							</li>
							<li class="mui-table-view-cell">
								<a id="tel" class="mui-navigate-right">客服电话</a>
							</li>
							<li class="mui-table-view-cell">
								<a id="feedback-btn" href="#" class="mui-navigate-right">问题反馈</a>
							</li>
						</ul>
						<ul class="mui-table-view mui-table-view-chevron">
							<li class="mui-table-view-cell">
								<a href="#" class="mui-navigate-right">设置锁屏图案</a>
							</li>
						</ul>
						<ul class="mui-table-view">
							<li class="mui-table-view-cell" style="text-align: center;">
								<a id='exit'>退出</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<!--页面主内容区结束-->
  </div>
</template>

<script>

  export default {
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="scss" scoped>
  .setting-container {
		font-size: 16px;
		.mui-scroll-wrapper {
			top: 40px;
		}
	}
</style>