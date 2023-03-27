<template>
  <div class="history-view">
    <el-scrollbar>
      <div class="scrollbar-flex-content">
        <el-tabs
          v-model="activeName"
          class="demo-tabs"
          @tab-click="handleClick"
        >
          <el-tab-pane
            label="Deposit/Withdraw History"
            name="first"
          ></el-tab-pane>
          <el-tab-pane label="Buy/Sell History" name="second"> </el-tab-pane>
          <el-tab-pane label="Convert History" name="third"> </el-tab-pane>
          <el-tab-pane label="Spot History" name="fourth"> </el-tab-pane>
        </el-tabs>
      </div>
    </el-scrollbar>
    <div class="min-height" v-if="activeName === 'first'">
      <DepositWithdraw />
    </div>
    <div class="min-height" v-if="activeName === 'second'">
      <Security />
    </div>
    <div class="min-height" v-if="activeName === 'third'">
      <BuySell></BuySell>
    </div>
    <div class="min-height" v-if="activeName === 'fourth'">
      <Spot></Spot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";
import DepositWithdraw from "./modules/DepositWithdraw/DepositWithdraw.vue";
import Spot from "./modules/Spot/Spot.vue";
import BuySell from "./modules/BuySell/BuySell.vue";
import Convert from "./modules/Convert/Convert.vue";
const activeName = ref("first");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>

<style lang="scss" scoped>
.history-view {
  .scrollbar-flex-content {
    display: flex;
  }
  :deep() {
    .el-tabs__nav-wrap::after {
      height: 0;
    }
    .el-tabs__item {
      line-height: 38px;
      font-size: 15px;
    }
  }
}
</style>
