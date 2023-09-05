<template>
  <div>
    <div class="center-box" v-if="windowWidth > 769">
      <div class="center-part max1440">
        <el-row :gutter="20">
          <el-col :span="8" v-for="(item, index) in props.blogList" :key="index">
            <a :href="'/centerContent/' + item.id" style="text-decoration: none">
              <div class="content clearfloat">
                <div class="image">
                  <img :src="item.banner_url" />
                </div>
                <div class="message">{{ item.title }}</div>
              </div>
            </a>
          </el-col>
        </el-row>
      </div>
<!--      <div class="center-part max1440">-->
<!--        <el-row :gutter="20">-->
<!--          <el-col :span="8" v-for="(item, index) in secondCenter" :key="index">-->
<!--            <div class="content clearfloat">-->
<!--              <div class="image">-->
<!--                <img :src="item.image" />-->
<!--              </div>-->
<!--              <div class="message">{{ item.message }}</div>-->
<!--            </div>-->
<!--          </el-col>-->
<!--        </el-row>-->
<!--      </div>-->
    </div>
    <div class="center-box max1440" v-if="windowWidth <= 769">
      <div class="center-part">
        <el-row>
          <el-col
            :span="24"
            style="margin: auto"
            v-for="(item, index) in props.blogList"
            :key="index"
          >
            <a :href="'/centerContent/' + item.id" style="text-decoration: none">

              <div class="content clearfloat">
                <div class="image">
                  <img :src="item.banner_url" />
                </div>
                <div class="message">{{ item.title }}</div>
              </div>
            </a>
          </el-col>
        </el-row>
      </div>
<!--      <div class="center-part">-->
<!--        <el-row>-->
<!--          <el-col-->
<!--            :span="24"-->
<!--            style="margin: auto"-->
<!--            v-for="(item, index) in secondCenter"-->
<!--            :key="index"-->
<!--          >-->
<!--            <div class="content clearfloat">-->
<!--              <div class="image">-->
<!--                <img :src="item.image" />-->
<!--              </div>-->
<!--              <div class="message">{{ item.message }}</div>-->
<!--            </div>-->
<!--          </el-col>-->
<!--        </el-row>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted, onMounted } from "vue";

import learn_image01 from "../../../assets/home/learn_image01.png";
import learn_image02 from "../../../assets/home/learn_image02.png";
import learn_image03 from "../../../assets/home/learn_image03.png";
import learn_image04 from "../../../assets/home/learn_image04.png";
import learn_image14 from "../../../assets/home/learn_image14.png";
import learn_image15 from "../../../assets/home/learn_image15.png";
import { getBlogs } from "../../../api/blog";
const props = defineProps<
    {
      type: string;
      index: number;
      blogList: any[];
    }
>();
console.log(props.blogList)
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

const firstCenter = [
  {
    image: learn_image03,
    message: "How to create and manage your COINBYTE Wallet",
  },
  {
    image: learn_image01,
    message: "Start trading cryptocurrency on CoinByte",
  },
  {
    image: learn_image02,
    message: "Cryptocurrency technical analysis 101",
  }
];
const secondCenter = [
  {
    image: learn_image14,
    message: "7 common misconceptions about Ethereum's Merge",
  },
  {
    image: learn_image15,
    message: "Institutional adoption sparks excitement as new launches storm DeFi",
  },
  {
    image: learn_image04,
    message: "Markets stay range-bound, new launch rumors invade DeFi",
  }
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
.max1440 {
  max-width: 1440px;
  margin: 0 auto;
}
.center-box {

  @media (max-width: 769px) {
    & {
      padding: 0px;
    }
  }

  .content {
    margin-top: 40px;
    .image {
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .message {
      margin-top: 9px;
      color: #000000;
      line-height: 20px;
      font-weight: 500;
      @media (max-width: 769px) {
        text-align: center;
      }
    }
  }
}

</style>
