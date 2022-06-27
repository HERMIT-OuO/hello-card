<!--  -->
<template>
	<view class='home'>
		<view class="status_bar">
			<!-- 占用一个状态栏的空间 -->
		</view>
		<view class="home-title">
			<text class="home-title-blank">HELLO</text> CARD
		</view>
		<view class="card-row">
			<!-- 类别栏 -->
			<view class="card-row-title">
				简约
			</view>
			<view>
				<scroll-view class="card-row-list" scroll-x="true" show-scrollbar="false">
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
				<scroll-view class="card-row-list" scroll-x="true" show-scrollbar="false">
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
				<scroll-view class="card-row-list" scroll-x="true" show-scrollbar="false">
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
		
		<view class="home-bottom">
			
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
<style>	
	page {
		padding-right: 32rpx;
		padding-left: 32rpx;
		background-color: #d2d0a3;
		
		width: 100%;
		height: auto;
		
		overflow-y: hidden;	
	}
	
/* 	.home {
		width: 100%;
		height: auto;
	} */
	
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}

	.home-title {
		margin-top: 56rpx;
		margin-bottom: 40rpx;

		color: #2f3262;
		font-weight: bold;
		font-size: 24px;
	}

	.home-title-blank {
		padding-top: 12rpx;
		padding-right: 18rpx;
		padding-bottom: 16rpx;
		padding-left: 18rpx;

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
	
	.home-bottom {
		height: 1000rpx;
	}
</style>
