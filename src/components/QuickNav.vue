<template>
	<ul class="quick-nav clear">
		<li class="left" v-for="(item,index) in nav" v-bind:key="index">
			<a v-bind:href="item.url">
				<img v-bind:src="item.image" />
				<p v-text="item.title"></p>
			</a>
		</li>
	</ul>
	
	
</template>

<script>
	export default{
		data(){
			return {
				nav:[{title:"京东超市",url:"#",image:require("@/assets/icons/1.png")},
					{title:"京东超市",url:"#",image:require("@/assets/icons/2.png")},
					{title:"京东超市",url:"#",image:require("@/assets/icons/3.png")},
					{title:"京东超市",url:"#",image:require("@/assets/icons/4.png")},
					{title:"京东超市",url:"#",image:require("@/assets/icons/5.png")},
					{title:"京东超市",url:"#",image:require("@/assets/icons/6.png")},
					{title:"京东超市",url:"#",image:require("@/assets/icons/7.png")},
					{title:"京东超市",url:"#",image:require("@/assets/icons/8.png")},
					{title:"京东超市",url:"#",image:require("@/assets/icons/9.png")},
					{title:"京东超市",url:"#",image:require("@/assets/icons/10.png")}
				]
			}
		}
	}
</script>

<style lang="less">
	.quick-nav{
		text-align: center;
		background-color: #FFFFFF;
		padding-bottom: 0.2rem;
		
		li{
			width:20%;
			}
		
		img{
			width:0.8rem;
			height: 0.8rem;
			margin-top:0.2rem ;
		}
		p{
			margin: 0.12rem 0 0;
			font-size: 0.24rem;
			color: #666;
		}
	}
	
	
	
	
</style>