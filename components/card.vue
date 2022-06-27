<!--  -->
<template>
	<view class="card">
		<view class="card-container">
			<view class="card-img">
				<!-- 展示图片 -->
			</view>
			<view class="card-text">
				<!-- 展示文字 -->
				4 : 3
			</view>
		</view>
	</view>
</template>

<script lang='ts'>
	import {
		reactive,
		toRefs,
		onBeforeMount,
		onMounted
	} from 'vue'
	interface DataProps {}
	export default {
		name: 'Card',
		setup() {
			const data: DataProps = reactive({

			})
			onBeforeMount(() => {})
			onMounted(() => {})
			const refData = toRefs(data);
			return {
				...refData,
			}

		}
	};
</script>
<style scoped>	
	.card {
		display: inline-block;
	}

	.card-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		
		padding: 12rpx;
		
		height: 400rpx;
		width: 300rpx;
		
		background-color: white;
	}
	
	.card-img {
		
	}
	
	.card-text {
		text-align: center;
		color: #2f3262;
		font-size: 12px;
	}
</style>
