<!--  -->
<template>
	<div class=''>
		<h1 class="home-title">
			HELLO CARD
		</h1>
	</div>
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
		name: '',
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
		background-color: #d2d0a3;
	}
	
	.home-title {
		color: #2f3262
	}
</style>
