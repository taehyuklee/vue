<template>
  <div id="app">
    <HeaderModule></HeaderModule>
    <SimpleComp></SimpleComp>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <router-view></router-view>
  </div>
</template>



<script>
import HelloWorld from './components/HelloWorld.vue'
import SimpleComp from './components/SimpleComp2.vue'
import HeaderModule from './components/HeaderModule.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    SimpleComp,
    HeaderModule
}
}
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
