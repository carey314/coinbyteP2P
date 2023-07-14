<template>
  <div>
    <div class="center-box" v-if="windowWidth > 769">
      <div class="center-part max1290">
        <div class="title-box clearfloat">
          <div class="title"><span>{{ $t("messages.learnMiddle.Beginners") }}</span>{{ $t("messages.learnMiddle.Tutorial") }}</div>
          <div class="more">
            <a href="/learnList" style="color: #878787; text-decoration: none"
              >{{ $t("messages.learnMiddle.learn_more") }} &gt;</a
            >
          </div>
        </div>
        <el-row :gutter="20">
          <el-col :span="6" v-for="(item, index) in filterBlogs(0)" :key="index">
            <a class="to-article"  :href="'/centerContent/' + item.id">
                <div class="content clearfloat">
                  <div class="image">
                    <img :src="item.icon" />
                  </div>
                  <div class="message">{{ item.subDesc || "----" }}</div>
                </div>
              </a>
            </el-col>
        </el-row>
      </div>
      <div class="center-part max1290">
        <div class="title-box clearfloat">
          <div class="title"><span>{{ $t("messages.learnMiddle.Trading") }}</span>{{ $t("messages.learnMiddle.Ideas") }}</div>
          <div class="more">
            <a href="/learnList" style="color: #878787; text-decoration: none"
              >{{ $t("messages.learnMiddle.learn_more") }} &gt;</a
            >
          </div>
        </div>
        <!-- <el-row :gutter="20">
          <el-col :span="6" v-for="(item, index) in secondCenter" :key="index">
            <div class="content clearfloat">
              <div class="image">
                <img :src="item.image" />
              </div>
              <div class="message">{{ item.message }}</div>
            </div>
          </el-col>
        </el-row> -->
        <el-row :gutter="20">
          <el-col :span="6" v-for="(item, index) in filterBlogs(1)" :key="index">
            <a class="to-article"  :href="'/centerContent/' + item.id">
              <div class="content clearfloat">
                <div class="image">
                  <img :src="item.icon" />
                </div>
                <div class="message">{{ item.subDesc || "----" }}</div>
              </div>
            </a>
          </el-col>
        </el-row>
      </div>
      <div class="center-part max1290">
        <div class="title-box clearfloat">
          <div class="title"><span>{{ $t("messages.learnMiddle.Industry") }}</span>{{ $t("messages.learnMiddle.Analysis") }}</div>
          <div class="more">
            <a href="/learnList" style="color: #878787; text-decoration: none"
              >{{ $t("messages.learnMiddle.learn_more") }} &gt;</a
            >
          </div>
        </div>
        <el-row :gutter="20">
          <!-- <el-col :span="6" v-for="(item, index) in thirdCenter" :key="index">
            <div class="content clearfloat">
              <div class="image">
                <img :src="item.image" />
              </div>
              <div class="message">{{ item.message }}</div>
            </div>
          </el-col> -->
          <el-row :gutter="20">
          <el-col :span="6" v-for="(item, index) in filterBlogs(2)" :key="index">
            <a class="to-article" :href="'/centerContent/' + item.id">
              <div class="content clearfloat">
                <div class="image">
                  <img :src="item.icon" />
                </div>
                <div class="message">{{ item.subDesc || "----" }}</div>
              </div>
            </a>
          </el-col>
        </el-row>
        </el-row>
      </div>
    </div>
    <div class="center-box max1290" v-if="windowWidth <= 769">
      <div class="center-part">
        <div class="title-box clearfloat">
          <div class="title"><span>{{ $t("messages.learnMiddle.Beginners") }}</span>{{ $t("messages.learnMiddle.Tutorial") }}</div>
          <div class="more">
            <a href="/learnList" style="color: #878787; text-decoration: none"
            >{{ $t("messages.learnMiddle.learn_more") }} &gt;</a
          >
          </div>
        </div>
        <el-row>
          <el-col
            :span="24"
            style="margin: auto"
            v-for="(item, index) in firstCenter"
            :key="index"
          >
            <div class="content clearfloat">
              <div class="image">
                <img :src="item.image" />
              </div>
              <div class="message">{{ item.message }}</div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="center-part">
        <div class="title-box clearfloat">
          <div class="title"><span>{{ $t("messages.learnMiddle.Trading") }}</span>{{ $t("messages.learnMiddle.Ideas") }}</div>
          <div class="more">
            <a href="/learnList" style="color: #878787; text-decoration: none"
              >{{ $t("messages.learnMiddle.learn_more") }} &gt;</a
            >
          </div>
        </div>
        <el-row>
          <el-col
            :span="24"
            style="margin: auto"
            v-for="(item, index) in secondCenter"
            :key="index"
          >
            <div class="content clearfloat">
              <div class="image">
                <img :src="item.image" />
              </div>
              <div class="message">{{ item.message }}</div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="center-part">
        <div class="title-box clearfloat">
          <div class="title"><span>{{ $t("messages.learnMiddle.Industry") }}</span>{{ $t("messages.learnMiddle.Analysis") }}</div>
          <div class="more">
            <a href="/learnList" style="color: #878787; text-decoration: none"
              >{{ $t("messages.learnMiddle.learn_more") }} &gt;</a
            >
          </div>
        </div>
        <el-row>
          <el-col
            :span="24"
            style="margin: auto"
            v-for="(item, index) in thirdCenter"
            :key="index"
          >
            <div class="content clearfloat">
              <div class="image">
                <img :src="item.image" />
              </div>
              <div class="message">{{ item.message }}</div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onUnmounted, onMounted, Ref } from "vue";

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

import { getBlogs } from "../../../api/blog";
import { Blog } from "../../../models/blog";

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


const blogs = ref<Blog[]>([]);

onMounted(async () => {
  try {
    const res: any = await getBlogs();
    const data: Blog[] = res.data.content;
    blogs.value = data;
    console.log(blogs.value)
  } catch(e) {
    console.log(e)
  }
})

const filterBlogs = (index: number) => {
  return blogs.value.filter((v: Blog) => v.typeOne === index);
}



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
