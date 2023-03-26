<template>
  <div class="seventh-part max1290" v-if="windowWidth > 768">
    <div class="first-level-title">
      Explore endless possibilities with <span>Coinbyte</span>
    </div>
    <el-row
      class="seventh-part-list clearfloat"
      type="flex"
      justify="space-between"
      :gutter="40"
    >
      <el-col :span="7" class="listItem clearfloat">
        <div class="seventh-part-img">
          <img :src="part07_pic01" alt="" />
        </div>
        <div class="item-title">
          How to buy and sell cryptocurrency on CoinByte
        </div>
      </el-col>
      <el-col :span="7" class="listItem">
        <div class="seventh-part-img">
          <img :src="part07_pic02" alt="" />
        </div>
        <div class="item-title">Start trading cryptocurrency on CoinByte</div>
      </el-col>
      <el-col :span="7" class="listItem">
        <div class="seventh-part-img">
          <img :src="part07_pic03" alt="" />
        </div>
        <div class="item-title">
          CoinByte Earn: Use your crypto assets to earn passive income on
          CoinByte
        </div>
      </el-col>
    </el-row>
    <div class="view-more" style="text-align: center;">
      <router-link to="/" style="text-decoration: none;"><span>Learn more &gt;</span></router-link>
    </div>
  </div>

  <div class="seventh-part max1290" v-if="windowWidth <= 768">
    <div class="first-level-title">
      Explore endless possibilities with <span>Coinbyte</span>
    </div>
    <el-row
      class="seventh-part-list"
      type="flex"
      justify="space-between"
      :gutter="40"
    >
      <el-col :span="24" class="listItem">
        <div class="seventh-part-img">
          <img :src="part07_pic01" alt="" />
        </div>
        <div class="item-title">
          How to buy and sell cryptocurrency on CoinByte
        </div>
      </el-col>
      <el-col :span="24" class="listItem">
        <div class="seventh-part-img">
          <img :src="part07_pic02" alt="" />
        </div>
        <div class="item-title">Start trading cryptocurrency on CoinByte</div>
      </el-col>
      <el-col :span="24" class="listItem">
        <div class="seventh-part-img">
          <img :src="part07_pic03" alt="" />
        </div>
        <div class="item-title">
          CoinByte Earn: Use your crypto assets to earn passive income on
          CoinByte
        </div>
      </el-col>
    </el-row>
    <div class="view-more" style="text-align: center;">
      <router-link to="/" style="text-decoration: none;"><span>Learn more &gt;</span></router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onUnmounted, onMounted } from "vue";
import part07_pic01 from "../../../assets/home/part07_pic01.png";
import part07_pic02 from "../../../assets/home/part07_pic02.png";
import part07_pic03 from "../../../assets/home/part07_pic03.png";
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
$headerBackGround: #161719;
$bg-color: #fff;
$main-color: #01c19a;
$fontSizeMax: 42px;
$fontSizeMed: 24px;
$fontSizeDefPro: 18px;
$fontSizeDef: 16px;
$fontSizeMinPro: 14px;
$fontSizeMin: 12px;

.first-level-title {
  font-size: 32px;
  color: #060606;
  font-weight: bold;
  line-height: 35px;
  @media (max-width: 768px) {
    & {
      font-size: 28px;
    }
  }
  span {
    color: $main-color;
  }
}
.seventh-part {
    background-color: #fff;
    padding: 66px 0 36px 0;

    @media (min-width: 768px) {
      .listItem:hover {
        & .seventh-part-img {
          transform: scale(1.15);
        }
        & .item-title {
          text-decoration: underline;
          color: #1551f5;
        }
      }
    }

    .seventh-part-img {
      width: 100%;
      cursor: pointer;
      transition: all 0.5s;
      img{
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .seventh-part-list {
      padding-top: 5%;
      margin-bottom: 2%;

      img {
        display: block;
        //width: 288px;
        margin: 0 auto;
        border-radius: 5%;
        // height: 45%;
        // width:auto;
      }

      .item-title {
        margin-top: 10%;
        font-size: $fontSizeDefPro;
        line-height: 27px;
        color: #060606;
        text-align: center;
        cursor: pointer;
        @media (max-width: 985px) {
          & {
            margin-top: 5%;
            margin-bottom: 5%;
          }
        }
      }
    }
  }
</style>
