<template>
  <div id="app">
    <router-link to="/">首页</router-link>
    <router-link to="/report">舆情报表</router-link>
    <router-link to="/keyword">舆情关键词</router-link>
    <router-link to="/alarm">舆情报警设置</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'yuqing-monitor-electron'
  }
</script>

<style>
  /* CSS */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body { font-family: 'Source Sans Pro', sans-serif; }
</style>
