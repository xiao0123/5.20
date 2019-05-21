<template>
	<ul class="nav-bar">
		<li class="left" v-for="(item,index) in nav" v-bind:key="index">
			<Router-Link :to="item.url">
				<img :src="(item.url==current)?item.active_icon:item.icon" />
			</Router-Link>
		</li>
	</ul>
</template>

<script>
	export default{
		data(){
			return {
				current: '/',
				nav:[{url:"/",icon:require("@/assets/icons/home.png"),active_icon:require('@/assets/icons/home_active.png')},
					{url:"/category",icon:require("@/assets/icons/category.png"),active_icon:require('@/assets/icons/category_active.png')},
					{url:"/pin",icon:require("@/assets/icons/pin.png"),active_icon:require('@/assets/icons/pin_active.png')},
					{url:"/cart",icon:require("@/assets/icons/cart.png"),active_icon:require('@/assets/icons/cart.png')},
					{url:"/user",icon:require("@/assets/icons/user.png"),active_icon:require('@/assets/icons/user_active.png')}
				
				]
			};
		},
		mounted() {
			this.current = this.$route.path;
		}
	}
</script>

<style lang="less">
	.nav-bar {
		position: fixed;
		z-index: 9999;
		bottom: 0;
		width: 100%;
		background-color: #FFFFFF;
		box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6);
		li {
			
			width: 20%;
			text-align: center;
		}
		img {
			width: 1.2rem;
		}
	}
</style>