<template>
  <div id="app">
    <div id="nav">
      <TheNavigation />
      <router-view :key="$route.path"/>
  </div>
  </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation';
export default {
  name: "App",
  components: {
    TheNavigation
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
}
</style>