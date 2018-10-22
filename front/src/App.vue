<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@font-face {
  src: url('./assets/fonts/SeoulHangangM.otf');
  font-family: 'SeoulHangang' !important;
}
div{
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
#app {
  font-family: 'SeoulHangang', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
  padding: 0;
}
</style>
