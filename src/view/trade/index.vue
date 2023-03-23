<template>
  <div class="market-trade-page">
    <Header></Header>
    <div class="box-header">
      <div class="header-nav" style="color: #fff">
        <span>Home&nbsp; &gt;</span>&nbsp; <span>Bitcoin&nbsp; &gt;</span>&nbsp;
        <span>Buy</span>
      </div>
      <div class="header-name">Buy <span>BTC Bitcoin</span></div>
    </div>

    <div class="trade-page-box">
      <el-row :gutter="50">
        <el-col :span="16">
          <div class="box-left">
            <div style="background-color: pink; height: 484px"></div>
            <div class="crypto-info">
              <div><PriceInfo /></div>
              <div><MarketInfo /></div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="box-right">
            <div><Convert /></div>
            <div><Similar /></div>
          </div>
        </el-col>
      </el-row>
    </div>

    <Footer v-if="windowWidth > 769" />
    <FooterMobile v-else></FooterMobile>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onUnmounted, onMounted, computed, provide } from "vue";
import Header from "../../layout/Header/Header.vue";
import Footer from "../../layout/Footer/Footer.vue";
import FooterMobile from "../../layout/Footer/FooterMobile.vue";
import Convert from "../trade/layout/Convert.vue";
import Similar from "../trade/layout/Similar.vue";
import PriceInfo from "../trade/layout/PriceInfo.vue";
import MarketInfo from "../trade/layout/MarketInfo.vue";

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
$fontMax: 40px;
$fontMain: 14px;
.box-header {
  background: #1c242c;
  padding: 46px 0px 21px 31px;

  .header-nav {
    cursor: pointer;
    font-size: $fontMain;
    line-height: 17px;
    max-width: 1400px;
    margin: auto;
  }
  .header-name {
    font-size: $fontMax;
    color: #fff;
    line-height: 49px;
    font-weight: 600;
    margin-top: 6px;
    max-width: 1400px;
    margin: auto;
    span {
      color: #01c19a;
    }
  }
}
.trade-page-box {
  max-width: 1400px;
  min-height: 985px;
  margin: auto;
  padding: 46px 6px 141px 6px;
  position: relative;
  @media (max-width: 1440px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  .box-left{
    padding-left: 15px;
  }
}
</style>
