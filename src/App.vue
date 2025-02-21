<template>
  <div class="coin-byte">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

 onMounted(() => {
   document.body.style.setProperty('--el-color-primary', '#3e4191');
 })

</script>

<style scoped lang="scss">
  @import './assets/font/font.css';
  // @import url('./assets/font/font.css');
  // @import './assets/font/HarmonyOS_Sans_Bold.woff2';
  // @import './assets/font/HarmonyOS_Sans_Medium.woff2';
  // @import './assets/font/HarmonyOS_Sans_Regular.woff2';
  #app {
    font-family: "HarmonyOS Sans",Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
    // font-weight: 400;
  }
  .coin-byte{
    font-family: "HarmonyOS Sans", PingFang SC, Microsoft Yahei, Heiti SC, WenQuanYi Micro Hei, Helvetica Neue, Helvetica, Arial, sans-serif !important
  }
</style>
