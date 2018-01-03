<template>
	<div id="chapter" :style="topStyle" @mouseenter="changeBackColor" @mouseleave="resetBackColor">
		<img :src="info.thumbnailImg" @click="select()">
		<span>Chapter:{{ info.chapterCount }}</span>
	</div>
</template>

<script>
	import EventBus from '../EventBus.js';
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
			select: function () {
      			EventBus.$emit('chapterSelected', this.info);
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