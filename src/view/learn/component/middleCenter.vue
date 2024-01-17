<template>
  <div>
    <div class="center-box" v-if="windowWidth > 769">
      <div class="center-part max1290">
        <div class="title-box clearfloat">
          <div class="title"><span>{{ $t("messages.learnMiddle.Beginners") }}</span>{{ $t("messages.learnMiddle.Tutorial")
          }}</div>
          <div class="more">
            <a href="/au/learnList?type=1" style="color: #878787; text-decoration: none">{{
              $t("messages.learnMiddle.learn_more") }} &gt;</a>
          </div>
        </div>
        <el-row :gutter="20" :style="minHeightStyle0">
          <template v-if="filterBlogs(0).length === 0">
            <el-col :span="6" class="blog-part-container" v-for="n in 4" :key="n">
              <el-skeleton style="width: 100%;margin-top: 20px;" animated :loading="loading">
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%;min-height: 140px;" />
                  <div style="padding: 14px 0">
                    <el-skeleton-item variant="h3" style="width: 50%" />
                    <el-skeleton-item variant="text" />
                  </div>
                </template>
              </el-skeleton>
            </el-col>
          </template>
          <!-- 否则显示数据 -->
          <template v-else>
            <el-col :span="6" class="blog-part-container" v-for="(item, index) in filterBlogs(0)" :key="index">
              <a class="to-article" :href="'/centerContent/' + item.id">
                <div class="content clearfloat">
                  <div class="image">
                    <img :src="item.banner_url" />
                  </div>
                  <div class="message">{{ item.title || "----" }}</div>
                </div>
              </a>
            </el-col>
          </template>

        </el-row>
      </div>
      <div class="center-part max1290">
        <div class="title-box clearfloat">
          <div class="title"><span>{{ $t("messages.learnMiddle.Trading") }}</span>{{ $t("messages.learnMiddle.Ideas") }}
          </div>
          <div class="more">
            <a href="/au/learnList?type=2" style="color: #878787; text-decoration: none">{{
              $t("messages.learnMiddle.learn_more") }} &gt;</a>
          </div>
        </div>

        <el-row :gutter="20" :style="minHeightStyle1">

          <template v-if="filterBlogs(1).length === 0">
            <el-col :span="6" class="blog-part-container" v-for="n in 4" :key="n">
              <el-skeleton style="width: 100%;margin-top: 20px;" animated :loading="loading">
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%;min-height: 140px;" />
                  <div style="padding: 14px 0">
                    <el-skeleton-item variant="h3" style="width: 50%" />
                    <el-skeleton-item variant="text" />
                  </div>
                </template>
              </el-skeleton>
            </el-col>
          </template>

          <template v-else>
            <el-col :span="6" class="blog-part-container" v-for="(item, index) in filterBlogs(1)" :key="index">
              <a class="to-article" :href="'/centerContent/' + item.id">
                <div class="content clearfloat">
                  <div class="image">
                    <img :src="item.banner_url" />
                  </div>
                  <div class="message">{{ item.title || "----" }}</div>
                </div>
              </a>
            </el-col>
          </template>
        </el-row>
      </div>
      <div class="center-part max1290">
        <div class="title-box clearfloat">
          <div class="title"><span>{{ $t("messages.learnMiddle.Industry") }}</span>{{ $t("messages.learnMiddle.Analysis")
          }}</div>
          <div class="more">
            <a href="/au/learnList?type=3" style="color: #878787; text-decoration: none">{{
              $t("messages.learnMiddle.learn_more") }} &gt;</a>
          </div>
        </div>
        <el-row :gutter="20" :style="minHeightStyle2">
          <template v-if="filterBlogs(2).length === 0">
            <el-col :span="6" class="blog-part-container" v-for="n in 4" :key="n">
              <el-skeleton style="width: 100%;margin-top: 20px;" animated :loading="loading">
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%;min-height: 140px;" />
                  <div style="padding: 14px 0">
                    <el-skeleton-item variant="h3" style="width: 50%" />
                    <el-skeleton-item variant="text" />
                  </div>
                </template>
              </el-skeleton>
            </el-col>
          </template>
          <!-- 否则显示数据 -->
          <template v-else>
            <el-col :span="6" class="blog-part-container" v-for="(item, index) in filterBlogs(2)" :key="index">
              <a class="to-article" :href="'/centerContent/' + item.id">
                <div class="content clearfloat">
                  <div class="image">
                    <img :src="item.banner_url" />
                  </div>
                  <div class="message">{{ item.title || "----" }}</div>
                </div>
              </a>
            </el-col>
          </template>
        </el-row>
      </div>
    </div>
    <div class="center-box max1290" v-if="windowWidth <= 769">
      <div class="center-part">
        <div class="title-box clearfloat">
          <div class="title"><span>{{ $t("messages.learnMiddle.Beginners") }}</span>{{ $t("messages.learnMiddle.Tutorial")
          }}</div>
          <div class="more">
            <a href="/au/learnList?type=1" style="color: #878787; text-decoration: none">{{
              $t("messages.learnMiddle.learn_more") }} &gt;</a>
          </div>
        </div>
        <el-row>
          <el-col class="blog-part-container-phone" :span="24" style="margin: auto"
            v-for="(item, index) in filterBlogs(0)" :key="index">
            <a class="to-article" :href="'/centerContent/' + item.id">
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
      <div class="center-part">
        <div class="title-box clearfloat">
          <div class="title"><span>{{ $t("messages.learnMiddle.Trading") }}</span>{{ $t("messages.learnMiddle.Ideas") }}
          </div>
          <div class="more">
            <a href="/au/learnList?type=2" style="color: #878787; text-decoration: none">{{
              $t("messages.learnMiddle.learn_more") }} &gt;</a>
          </div>
        </div>
        <el-row>
          <el-col class="blog-part-container-phone" :span="24" style="margin: auto"
            v-for="(item, index) in filterBlogs(1)" :key="index">
            <a class="to-article" :href="'/centerContent/' + item.id">
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
      <div class="center-part">
        <div class="title-box clearfloat">
          <div class="title"><span>{{ $t("messages.learnMiddle.Industry") }}</span>{{ $t("messages.learnMiddle.Analysis")
          }}</div>
          <div class="more">
            <a href="/au/learnList?type=3" style="color: #878787; text-decoration: none">{{
              $t("messages.learnMiddle.learn_more") }} &gt;</a>
          </div>
        </div>
        <el-row>
          <el-col class="blog-part-container-phone" :span="24" style="margin: auto"
            v-for="(item, index) in filterBlogs(2)" :key="index">
            <a class="to-article" :href="'/centerContent/' + item.id">
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted, onMounted, computed } from "vue";

import learn_image01 from "../../../assets/home/learn_image01.png";
import learn_image02 from "../../../assets/home/learn_image02.png";
import learn_image03 from "../../../assets/home/learn_image03.png";
import learn_image04 from "../../../assets/home/learn_image04.png";
import learn_image05 from "../../../assets/home/learn_image05.png";
import learn_image06 from "../../../assets/home/learn_image06.png";
import learn_image07 from "../../../assets/home/learn_image07.png";
import learn_image08 from "../../../assets/home/learn_image08.png";
import learn_image09 from "../../../assets/home/learn_image09.png";
import learn_image10 from "../../../assets/home/learn_image10.png";
import learn_image11 from "../../../assets/home/learn_image11.png";
import learn_image12 from "../../../assets/home/learn_image12.png";

import { Blog } from "../../../models/blog";
// gasp动画
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const props = defineProps<
  {
    filterBlogs: (id: number) => Blog[]
  }>();

const loading = ref<boolean>(true);

const minHeightStyle0 = computed(() => ({
  minHeight: props.filterBlogs(0).length === 0 ? '100px' : 'auto'
}));

const minHeightStyle1 = computed(() => ({
  minHeight: props.filterBlogs(1).length === 0 ? '100px' : 'auto'
}));

const minHeightStyle2 = computed(() => ({
  minHeight: props.filterBlogs(2).length === 0 ? '100px' : 'auto'
}));


const windowWidth = ref(window.document.body.offsetWidth);
onMounted(() => {
  window.addEventListener("resize", resetWidth);

  loading.value = true;

  gsap.from('.title-box .title', {
    duration: 1.5, // 动画持续时间
    x: -80, // 从右侧开始移动
    ease: 'power2.out', // 平滑的缓动效果
  });
  gsap.from('.title-box .more', {
    duration: 1.5, // 动画持续时间
    x: 80, // 从右侧开始移动
    ease: 'power2.out', // 平滑的缓动效果
  });

  gsap.from('.blog-part-container', {
    duration: 1.5, // 动画持续时间
    y: 80, // 从右侧开始移动
    ease: 'power5.out', // 平滑的缓动效果
  });


});
onUnmounted(() => {
  window.removeEventListener("resize", resetWidth);
});
function resetWidth() {
  windowWidth.value = window.document.body.offsetWidth;
}

const firstCenter = [
  {
    image: learn_image01,
    message: "How to buy and sell cryptocurrency on CoinByte",
  },
  {
    image: learn_image02,
    message: "How to create and manage your COINBYTE Wallet",
  },
  {
    image: learn_image03,
    message: "Start trading cryptocurrency on CoinByte",
  },
  {
    image: learn_image04,
    message: "Cryptocurrency technical analysis 101",
  },
];
const secondCenter = [
  {
    image: learn_image05,
    message: "Ethereum's Merge confusion affecting top-trader sentiment ",
  },
  {
    image: learn_image06,
    message: "Top-trader sentiment surges for ETH ahead of Ethereum's Merge",
  },
  {
    image: learn_image07,
    message: "BTC, ETH derivatives seeing fresh money amid sentiment shift",
  },
  {
    image: learn_image08,
    message: "TRX jumps with algo-stablecoin launch",
  },
];
const thirdCenter = [
  {
    image: learn_image09,
    message: "5 reasons why this crypto bear market is different",
  },
  {
    image: learn_image10,
    message: "7 common misconceptions about Ethereum's Merge",
  },
  {
    image: learn_image11,
    message:
      "Institutional adoption sparks excitement as new launches storm DeFi",
  },
  {
    image: learn_image12,
    message: "Markets stay range-bound, new launch rumors invade DeFi",
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
  padding: 0 100px;
  width: auto;
  // min-height: calc(100vh - 400px);

  @media (max-width: 769px) {
    & {
      padding: 8px 20px;
    }
  }

  .title-box {
    margin-top: 50px;

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
        font-weight: 400;
      }
    }
  }
}

.to-article {
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
}
</style>


