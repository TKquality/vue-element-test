<template>
	<transition name="el-zoom-in-center">
		<div id="modalGround" class="overlay" v-if="active">
			<div id="chapDetail" class="modal">
				<i	id="closeButton"
					class="el-icon-circle-close"
					:style="closeButtonStyle"
					:title="closeButtonTitle"
					@click="close()"
					@mouseenter="changeBackColor"
					@mouseleave="resetBackColor">
				</i>
				<img id="chapDetailImg" class="modal" :src="info.originImg">
				<div>Chapter:{{ info.chapterCount }} {{ info.title }}</div>
				<div id="rateBlock">
					<el-rate v-model="rateResult"></el-rate>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import EventBus from '../EventBus.js';
	export default {
		name:'Modal',
		data() {
			return {
				info: null,
				active: false,
				rateResult: null,
				closeButtonStyle: {
					backgroundColor: 'white',
				},
				closeButtonTitle:'',
			}
		},
		methods: {
			close: function(){
				this.resetBackColor();
				this.info = null;
				this.active = false;
				EventBus.$emit('closeModal');
			},
			changeBackColor: function () {
    			this.closeButtonTitle = 'close window';
    			this.closeButtonStyle.backgroundColor = 'gray';
    		},
    		resetBackColor: function () {
    			this.rateResult = null;
    			this.closeButtonTitle = '';
    			this.closeButtonStyle.backgroundColor = 'white';
    		},
		},
		mounted: function(){
			const self = this;
			self.$nextTick(function(){
				EventBus.$on('openModal', function(chapInfo) {
					self.info = chapInfo;
					self.active = true;
				});
			});
		},
	}
</script>

<style>
.overlay {
    background: rgba(69, 69, 69, .8);
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 500;
    /*transition: all .5s ease;*/
}
#closeButton {
	position: fixed;
	width: 20px;
    height: 20px;
	left: 82%;
    top: 15%;
    right: 0;
    bottom: 0;
	z-index: 700;
}
#chapDetail {
	background: rgb(255, 255, 255);
    position: fixed;
    width: 75%;
    height: 75%;
    left: 12.5%;
    top: 12.5%;
    right: 0;
    bottom: 0;
    z-index: 600;
}
#chapDetailImg {
	width: 75%;
	height: auto;
	margin-top: 10px;
	margin-left: 10px;
	margin-right: 10px;
	margin-bottom: 10px;
}
</style>