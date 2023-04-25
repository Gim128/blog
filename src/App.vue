<template>
  <div id="app">
    <h1>beforeDestroy & Destroyed life-cycle Hooks</h1>
    <div v-if="display">
      <Home />
    </div>
    <button v-on:click="toggle">Toggle Me!</button>
  </div>
</template>

<script>
import Home from './components/Home.vue';


export default {
  name: 'App',

  data(){
    return{
      display: true
    }
  },

  components: {
    Home
  },

  methods: {
    toggle(){
      this.display = !this.display
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
