<template>
  <div>
    <div class="title">BTC Price Information</div>
    <div class="price-infomation">
      <div class="price-infomation-part">
        <div class="part-top">
          <div class="top-title">Market Cap</div>
          <div><img :src="dropdown_help_support" /></div>
        </div>
        <div class="price">A$ 33,525.96</div>
        <div class="rate">
          <el-icon><CaretTop /></el-icon>
          +0.05%
        </div>
      </div>
      <el-divider class="divider" direction="vertical" />
      <div class="price-infomation-part">
        <div class="part-top">
          <div class="top-title">Valume (24 hours)</div>
          <div class="top-icon"><img :src="dropdown_help_support" /></div>
        </div>
        <div class="price">A$ 37.46B</div>
        <div class="rate">
          <el-icon><CaretTop /></el-icon>
          +8.75%
        </div>
      </div>
      <el-divider class="divider" direction="vertical" />
      <div class="price-infomation-part">
        <div class="part-top">
          <div class="top-title">Circulating supply</div>
          <div class="top-icon"><img :src="dropdown_help_support" /></div>
        </div>
        <div class="price">19.12M <span>BTC</span></div>
        <div class="rate">
          <el-icon><CaretTop /></el-icon>
          +8.75%
        </div>
      </div>
      <el-divider class="divider" direction="vertical" />

      <div class="price-infomation-part">
        <div class="part-top">
          <div class="top-title">All-time high</div>
          <div class="top-icon"><img :src="dropdown_help_support" /></div>
        </div>
        <div class="price">A$ 93.48K</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { CaretTop } from "@element-plus/icons-vue";

import dropdown_help_support from "../../../assets/home/dropdown_help_support.svg";
</script>

<style scoped lang="scss">
.title {
  margin-top: 40px;
  font-size: 20px;
  line-height: 24px;
}
.price-infomation {
  width: 100%;
  border: 1px solid #dfdfe5;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
  :deep(.el-divider--vertical){
      height: 117px !important;
    }
  .price-infomation-part {
    padding: 15px 10px 12px 15px;
    width: 100%;
    .part-top {
      display: flex;
      justify-content: space-between;

      .top-title {
        font-size: 14px;
        color: #878787;
        line-height: 18px;
      }
      .top-icon {

      }
    }
    .price {
      margin-top: 16px;
      font-size: 22px;
      color: #010000;
      font-weight: 400;
      span{
        color: #878787;
      }
    }
    .rate {
      font-size: 14px;
      margin-top: 12px;
      color: #01c19a;
    }
  }
}
</style>
