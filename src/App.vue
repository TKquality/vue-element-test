<template>
  <div id="app">
    <el-container>
      <el-header>
        <span>Show eye catch images of</span>
        <el-cascader id="selector" expand-trigger="hover" :options="items" v-model="selected"></el-cascader>
      </el-header>
      <el-main>
        <modal></modal>
        <div v-if="selected.length>0">
          <chapter v-for="chapter in selected[0].chapters" :key="chapter.id" :info="chapter"></chapter>
        </div>
        <div v-else>No Series is selected</div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Vue from 'vue';
import titleList from './assets/private/witches/list-dev.json';
import Chapter from './components/Chapter.vue';
import Modal from './components/Modal.vue';
import EventBus from './EventBus.js';

new Vue({
  components: { Chapter },
  template: '<chapter>',
});

new Vue({
  components: { Modal },
  template: '<modal>',
});

const cascaderItems = [];
for(let i = 0, numSeries = titleList.length; i < numSeries ; i++){

  const item = {
    value: titleList[i],
    label: titleList[i].series,
  }
  cascaderItems.push(item);

}

export default {
  name: 'app',
  data() {
    return {
      items: cascaderItems,
      selected: [],
    }
  },
  components: {
    Chapter,
    Modal,
  },
  methods: {
  },
  created() {
    const self = this;
    EventBus.$on('chapterSelected', function(chap) {
      self.showModal = true;
      EventBus.$emit('openModal', chap);
      // console.log(chap);
    });
    EventBus.$on('closeModal', function() {
      self.showModal = false;
    });
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 15px;
}
#selector {
  width: 300px;
}
.header-entry {
  font-size: 0.75rem;
  text-align: left;
}
</style>
