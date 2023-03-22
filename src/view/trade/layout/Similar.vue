<template>
  <div>
    <div class="similar-title">
      Similar Cryptocurrencies
    </div>
    <div class="similar-card">
      <div class="card-item">
        
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref,reactive } from 'vue'

const cardItem = [
  {
    icon:'',
    name:'',
  },
]
</script>

<style scoped lang='scss'>

  .similar-title{
    margin-top: 42px;
    font-size: 20px;
    color: #000000;
    line-height: 24px;
  }
  .similar-card{
    border: 1px solid #DFDFE5;
  }
</style>