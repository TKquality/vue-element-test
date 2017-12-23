<template>
  <div id="app">
    <el-button @click="changeStatus()">ClickMe</el-button>
    <div>
      <transition name="el-zoom-in-center">
        <img v-show="showStatus" src="./assets/logo.png">
      </transition>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      showStatus: true,
    }
  },
  components: {
  },
  methods: {
    changeStatus: function () {
      this.showStatus = !this.showStatus;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
