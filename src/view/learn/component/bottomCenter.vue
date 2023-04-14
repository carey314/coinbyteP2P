<template>
  <div>
    <div class="center-box" v-if="windowWidth > 769">
      <div class="center-part max1290">
        <div class="title-box clearfloat">
          <div class="title"><span>{{ $t('messages.learnBottom.Blockchain') }}</span>{{ $t('messages.learnBottom.Glossary') }}</div>
          <div class="more">
            <a href="/learnList" style="color: #878787; text-decoration: none"
              >{{ $t("messages.learnBottom.learn_more") }} &gt;</a
            >
          </div>
        </div>
        <el-row :gutter="20">
          <el-col :span="8" v-for="(item, index) in bottomCenter" :key="index">
            <div class="content clearfloat">
              <div class="image">
                <img :src="item.image" />
              </div>
              <div class="text-content">
                <div class="tip">{{ item.tip }}</div>
                <div class="message">{{ item.message }}</div>
                <div class="message" style="margin-top:0px">{{ item.messageAdd }}</div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="center-box max1290" v-if="windowWidth <= 769">
      <!-- <el-card> -->
        <div class="center-part">
          <div class="title-box clearfloat">
            <div class="title"><span>{{ $t('messages.learnBottom.Blockchain') }}</span>{{ $t('messages.learnBottom.Glossary') }}</div>
            <div class="more">
              <a href="/learnList" style="color: #878787; text-decoration: none"
              >{{ $t("messages.learnMiddle.learn_more") }} &gt;</a
            >
            </div>
          </div>
          <el-row>
            <el-col
              :span="20"
              style="margin: auto"
              v-for="(item, index) in bottomCenter"
              :key="index"
            >
              <div class="content clearfloat">
                <div class="image">
                  <img :src="item.image" />
                </div>
                <div class="text-content">
                  <div class="tip">{{ item.tip }}</div>
                  <div class="message">{{ item.message }}</div>
                  <div class="message" style="margin-top:0px">{{ item.messageAdd }}</div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      <!-- </el-card> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onUnmounted, onMounted } from "vue";

import learn_icon01 from "../../../assets/home/learn_icon01.png";
import learn_icon02 from "../../../assets/home/learn_icon02.png";
import learn_icon03 from "../../../assets/home/learn_icon03.png";
import learn_icon04 from "../../../assets/home/learn_icon04.png";
import learn_icon05 from "../../../assets/home/learn_icon05.png";
import learn_icon06 from "../../../assets/home/learn_icon06.png";

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
const bottomCenter = [
  {
    image: learn_icon01,
    tip: "Bitcoin",
    message:
      "The decentralized network that operates the first viable, purely digital currency Bitcoin is the world's first decentralized blockchain network that...",
  },
  {
    image: learn_icon02,
    tip: "Distributed ledger technology",
    message:
      "A type of database shared among scattered network participants that lacks a central point of failure. Distributed ledgers can represent an...",
  },
  {
    image: learn_icon03,
    tip: "Ethereum",
    message:
      "A public blockchain network that supports the deployment of smart contracts to create decentralized applications. Ethereum is one of the",
  },
  {
    image: learn_icon04,
    tip: "Governance token",
    message:
      "A cryptocurrency used by a protocol's community to vote on the direction of future development.",
    messageAdd: "As a cryptocurrency used by a protocol's",
  },
  {
    image: learn_icon05,
    tip: "Liquidity",
    message:
      "The amount of a currency or asset available to buy or sell in a market, Liquidity refers to how easy it is to buy or sell an asset in a market. A market with",
  },
  {
    image: learn_icon06,
    tip: "Open interest",
    message:
      "The number or value of unsettled — or open — positions in a derivatives market. Open interest, or OI, is a metric in derivatives markets that indicates",
  },
];
</script>

<style scoped lang="scss">
$headerBackGround: #1d262f;
$bg-color: #fff;
$main-color: #01c19a;
$fontSizeMax: 42px;
$fontSizeMedPro: 28px;
$fontSizeMed: 24px;
$fontSizeDefPro: 18px;
$fontSizeDef: 16px;
$fontSizeMinPro: 14px;
$fontSizeMin: 12px;
.max1290 {
  max-width: 1290px;
  margin: 0 auto;
}
.center-box {
  padding: 100px;
  width: auto;
  // @media (max-width: 1440px) {
  //   & {
  //     padding: 100px 20px;

  //   }
  // }
  @media (max-width: 769px) {
    & {
      padding: 8px 16px 30px 16px;
    }
  }

  .title-box {
    // margin-top: 50px;
    .title {
      font-size: $fontSizeMedPro;
      line-height: 34px;
      font-weight: 600;
      float: left;
      span {
        color: $main-color;
      }
      @media (max-width: 769px) {
        float: none;
        text-align: center;
        margin-top: 50px;
      }
    }
    .more {
      font-size: $fontSizeDef;
      color: #878787;
      line-height: 26px;
      float: right;
      @media (max-width: 769px) {
        margin-top: 5px;
        float: none;
        text-align: center;
      }
    }
  }
  .content {
    margin-top: 23px;
    .image {
      width: 53px;
      height: 58px;
      float: left;
      @media (max-width: 769px) {
        float: none;
        margin: auto;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .text-content {
      margin-left: 50px;
      padding: 0 15px;

      @media (max-width: 769px) {
        margin-left: 0;
        text-align: center;
        padding:15px 0;
      }
      .tip {
        font-size: $fontSizeDefPro;
        line-height: 23px;
        font-weight: 600;
      }
      .message {
        font-size: $fontSizeMinPro;
        color: #878787;
        margin-top: 9px;
        line-height: 16px;
        @media (max-width: 769px) {
          // text-align: center;
        }
      }
    }
  }
}
</style>
