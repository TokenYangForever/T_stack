<template>
  <div id="app">
  <router-link to="/">首页</router-link>
    <ul class="navul">
      <li><router-link to="/alert">alert消息</router-link></li>
      <li>loading加载</li>
      <li><router-link to="/carousel">carousel走马灯</router-link></li>
      <li>progress进度条</li>
      <li>progress进度条</li>
      <li>progress进度条</li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navul{
  padding: 10px;
  background-color: #58B7FF;
  color: white;
}
.navul li a{
  color: white;
}
.navul li {  
    display: inline;  
    line-height: 40px;  
    margin: 10px;
}  
a{
  text-decoration: none;
}
</style>
