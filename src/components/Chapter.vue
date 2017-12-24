<template>
	<div id="top" :style="topStyle" @mouseenter="changeBackColor" @mouseleave="resetBackColor">
		<img :src="info.imgPath" @click="showInfo()">
		<span>Chapter:{{ info.chapterCount }}</span>
	</div>
</template>

<script>
	export default {
		name:'chapter',
		props: ['info'],
		data() {
			return {
				topStyle:{
					display: 'inline-block',
					width: '210px',
					backgroundColor: 'white',
				},
			}
		},
		methods: {
			showInfo: function () {
      		console.log(this.info.title);
    		},
    		changeBackColor: function () {
    			this.topStyle.backgroundColor = 'aquamarine';
    		},
    		resetBackColor: function () {
    			this.topStyle.backgroundColor = 'white';
    		},
		}
	}
</script>

<style scoped>
img {
	margin-top: 5px;
	margin-left: 5px;
	margin-right: 5px;
}
</style>