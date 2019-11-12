<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			// this.$axios.get('http://127.0.0.1:7001/test?name=hyd')
			// 	.then(({ data }) => {
			// 		console.log(data);
			// 		this.title = data.name
			// 	})
			// 	.catch(function (error) {
			// 		console.log(error);
			// 	})
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
