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
      <el-divider
        v-if="windowWidth > 976"
        class="divider"
        direction="vertical"
      />
      <el-divider v-else class="divider" />
      <div class="market-infomation-part">
        <div class="part-top">
          <div class="top-title">Typical hold-time</div>
          <div class="top-icon"><img :src="dropdown_help_support" /></div>
        </div>
        <div class="market">263 days</div>
      </div>
      <el-divider
        v-if="windowWidth > 976"
        class="divider"
        direction="vertical"
      />
      <el-divider v-else class="divider" />
      <div class="market-infomation-part market-third">
        <div class="part-top">
          <div class="top-title">Trading activity</div>
          <div class="top-icon"><img :src="dropdown_help_support" /></div>
        </div>

        <div class="market market-progress clearfloat">
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
import { ref, reactive, onUnmounted, onMounted, computed, provide } from "vue";

import dropdown_help_support from "../../../assets/home/dropdown_help_support.svg";

const windowWidth = ref(window.document.body.offsetWidth);
onMounted(() => {
  window.addEventListener("resize", resetWidth);
});
onUnmounted(() => {
  window.removeEventListener("resize", resetWidth);
});
function resetWidth() {
  windowWidth.value = window.document.body.offsetWidth;
}
</script>

<style scoped lang="scss">
.title {
  margin-top: 42px;
  font-size: 20px;
  line-height: 24px;
}
:deep(.el-divider--horizontal) {
  margin: 1px 0;
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
  @media (max-width: 992px) {
    display: block;
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
      :deep(.el-progress-bar__inner) {
        background-color: #01c19a;
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
        margin-left: 3%;
        margin-top: 5px;
        border-radius: 4.5px;
        :deep(.el-progress-bar__outer) {
          background-color: red !important;
        }
      }
      .progress-sell {
        display: flex;
        font-size: 22px;
        color: #010000;
        font-weight: 400;
        padding-left: 2%;
      }
    }
  }
  .market-third {
    width: 219%;
    @media (max-width: 992px) {
      width: 100%;
    }
  }
}
</style>
