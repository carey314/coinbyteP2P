<template>
  <div>
    <div class="title">{{ currencySlug }} Price Information</div>
    <div class="price-infomation">
      <div class="price-infomation-part">
        <div class="part-top">
          <div class="top-title">Market Cap</div>
          <div><img :src="icon_question" /></div>
        </div>
        <div class="price">A$ {{ info.market_cap }}</div>
        <div class="rate">
          <el-icon>
            <CaretTop />
          </el-icon>
          {{ info.market_cap_change_percentage_24h }}%
        </div>
      </div>
      <el-divider v-if="windowWidth > 976" class="divider" direction="vertical" />
      <el-divider v-else class="divider" />
      <div class="price-infomation-part">
        <div class="part-top">
          <div class="top-title">Valume (24 hours)</div>
          <div class="top-icon"><img :src="icon_question" /></div>
        </div>
        <div class="price">A${{ info.total_volume }}</div>
        <div class="rate">
          <!-- <el-icon>
            <CaretTop />
          </el-icon>
          +8.75% -->
        </div>
      </div>
      <el-divider v-if="windowWidth > 976" class="divider" direction="vertical" />
      <el-divider v-else class="divider" />
      <div class="price-infomation-part">
        <div class="part-top">
          <div class="top-title">Circulating supply</div>
          <div class="top-icon"><img :src="icon_question" /></div>
        </div>
        <div class="price">{{ info.circulating_supply }} <span>BTC</span></div>
        <div class="rate">
          <!-- <el-icon>
            <CaretTop />
          </el-icon>
          +8.75% -->
        </div>
      </div>
      <el-divider v-if="windowWidth > 976" class="divider" direction="vertical" />
      <el-divider v-else class="divider" />

      <div class="price-infomation-part">
        <div class="part-top">
          <div class="top-title">All-time high</div>
          <div class="top-icon"><img :src="icon_question" /></div>
        </div>
        <div class="price">A$ {{ info.ath }}</div>
        <div class="rate clearfloat">&nbsp;</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onUnmounted, onMounted, computed, provide, toRef,toRefs,defineProps } from "vue";

import { CaretTop } from "@element-plus/icons-vue";

import icon_question from "../../../assets/home/icon_question.svg";
import { CurrencyInformation } from "../../../models/currencyInformation";
import { storeToRefs } from "pinia";
import { tradeStore } from "../../../store/trade";

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

const props = defineProps<{
  info: CurrencyInformation
}>()
const {info} = toRefs(props);
const useTradeStore = tradeStore()
const {currencySlug, currencyName, currencyIcon} = storeToRefs(useTradeStore)

</script>

<style scoped lang="scss">
.title {
  margin-top: 40px;
  font-size: 20px;
  line-height: 24px;
}

:deep(.el-divider--horizontal) {
  margin: 1px 0;
}

.price-infomation {
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
    }

    .price {
      margin-top: 16px;
      font-size: 22px;
      color: #010000;
      font-weight: 400;

      span {
        color: #878787;
      }
    }

    .rate {
      font-size: 14px;
      margin-top: 12px;
      color: #3e4191;
    }
  }
}
</style>
