<template>
  <div id="app">
    <router-view name="content"/>
    <router-view name="footernavs"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data(){
    return {
      current:"Home",
    }
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
