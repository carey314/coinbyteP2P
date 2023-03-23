<template>
  <div>
    <div class="title">BTC Market Information</div>
    <div class="market-infomation">
      <div class="market-infomation-part">
        <div class="part-top">
          <div class="top-title">Rank</div>
          <div><img :src="dropdown_help_support" /></div>
        </div>
        <div class="market">#1</div>
      </div>
      <el-divider class="divider" direction="vertical" />
      <div class="market-infomation-part">
        <div class="part-top">
          <div class="top-title">Typical hold-time</div>
          <div class="top-icon"><img :src="dropdown_help_support" /></div>
        </div>
        <div class="market">263 days</div>
      </div>
      <el-divider class="divider" direction="vertical" />
      <div class="market-infomation-part" style="width: 218%">
        <div class="part-top">
          <div class="top-title">Trading activity</div>
          <div class="top-icon"><img :src="dropdown_help_support" /></div>
        </div>

        <div class="market market-progress">
          <div class="progress-buy">74% Buy</div>
          <el-progress
            :percentage="74"
            :stroke-width="9"
            :show-text="false"
            class="progress-bar"
          />
          <div class="progress-sell">26% Sell</div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import dropdown_help_support from "../../../assets/home/dropdown_help_support.svg";
</script>

<style scoped lang="scss">
.title {
  margin-top: 42px;
  font-size: 20px;
  line-height: 24px;
}
.market-infomation {
  width: 100%;
  border: 1px solid #dfdfe5;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
  :deep(.el-divider--vertical) {
    height: 117px !important;
  }
  .market-infomation-part {
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
    }
    .market {
      margin-top: 24px;
      font-size: 22px;
      color: #010000;
      font-weight: 400;
      span {
        color: #878787;
      }
    }
    .market-progress {
      :deep(.el-progress-bar__inner){
        background-color: #01C19A;
      }
      .el-progress--line {
        display: block;
        align-items: center;
        width: 180px;
      }
      .progress-buy {
        display: flex;
        float: left;
        font-size: 22px;
        color: #010000;
        font-weight: 400;
      }
      .progress-bar {
        float: left;
        margin-left: 5%;
        margin-top: 5px;
        border-radius: 4.5px;
        :deep(.el-progress-bar__outer) {
          background-color: red !important;
        }
      }
      .progress-sell {
        display: flex;
        float: left;
        font-size: 22px;
        color: #010000;
        font-weight: 400;
        margin-left: 5%;
      }
    }
  }
}
</style>
