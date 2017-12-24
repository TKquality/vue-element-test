<template>
  <div id="app">
    <el-container>
      <el-header id="titles">
        <el-menu :unique-opened="true" mode="horizontal">
          <el-menu-item index="index-item">Select Title</el-menu-item>
          <el-submenu v-for="item in jsonData" :key="item.series" :index="item.series">
            <template slot="title">
              {{ item.series }}
            </template>
            <el-menu-item-group>
              <el-menu-item class="header-entry" v-for="story in item.stories" :key="story.id" :index="story.id" @click="changeImgUrl(story.imgPath)">chapter{{ story.titleCount }}:{{ story.title }}</el-menu-item>
            </el-menu-item-group>
           </el-submenu>
        </el-menu>
      </el-header>
      <el-main>
        <el-button @click="changeStatus()">ClickMe</el-button>
        <div>
          <transition name="el-zoom-in-center">
            <img v-show="showStatus" :src="imgUrl">
          </transition>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import titleList from './assets/private/witches/list-dev.json'

export default {
  name: 'app',
  data() {
    return {
      showStatus: true,
      jsonData: titleList,
      imgUrl: '/src/assets/logo.png',
    }
  },
  components: {
  },
  methods: {
    changeStatus: function () {
      this.showStatus = !this.showStatus;
    },
    changeImgUrl: function (url) {
      this.imgUrl = url;
    }
  }
}
</script>

<style scope>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 15px;
}
.aside-entry {
  font-size: 0.75rem;
  text-align: left;
}
</style>
