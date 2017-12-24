<template>
	<img :src="data.imgPath" @click="showInfo()">
</template>

<script>
	export default {
		name:'chapter',
		props: ['data'],
		data () {
			return {
			}
		},
		methods: {
			showInfo: function () {
      		console.log(this.data.title);
    		},
		}
	}
</script>