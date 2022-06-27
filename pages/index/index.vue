<!--  -->
<template>
	<view class='home'>
		<view class="status_bar">
			<!-- 占用一个状态栏的空间 -->
		</view>
		<h1 class="home-title">
			<span class="home-title-blank">HELLO</span> CARD
		</h1>
		<view class="card-row">
			<!-- 类别栏 -->
			<view class="card-row-title">
				简约
			</view>
			<view>
				<scroll-view class="card-row-list" scroll-x="true" show-scrollbar="false" enable-flex="true">
					<view class="card-row-item">
						<Card />
					</view>
					<view class="card-row-item">
						<Card />
					</view>
					<view class="card-row-item">
						<Card />
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="card-row">
			<!-- 类别栏 -->
			<view class="card-row-title">
				经典
			</view>
			<view>
				<scroll-view class="card-row-list" scroll-x="true" show-scrollbar="false" enable-flex="true">
					<view class="card-row-item">
						<Card />
					</view>
					<view class="card-row-item">
						<Card />
					</view>
					<view class="card-row-item">
						<Card />
					</view>
				</scroll-view>
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
	import Card from '../../components/card.vue'
	interface DataProps {}
	export default {
		name: '',
		components: {
			Card
		},
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
	page {
		padding-right: 32rpx;
		padding-left: 32rpx;
		background-color: #d2d0a3;
	}

	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}

	.home-title {
		margin-top: 48rpx;
		margin-bottom: 32rpx;

		color: #2f3262;
		font-weight: bold;
	}

	.home-title-blank {
		padding: 12rpx;

		color: #d2d0a3;
		background-color: #2f3262;
	}
	
	.card-row {
		margin-bottom: 24rpx;
	}
	
	.card-row-title {
		margin-bottom: 4rpx;
		
		color: #2f3262;
		font-weight: 500;
	}
	
	.card-row-list {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		
		white-space: nowrap;
		width: 100%;
	}
	
	.card-row-item {
		display: inline-block;
		
		margin-right: 24rpx;
	}
</style>
