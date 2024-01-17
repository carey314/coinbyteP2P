<template>
  <div>
    <div class="center-box" v-if="windowWidth > 769">
      <div class="center-part max1290">
        <div class="title-box clearfloat">
          <div class="title"><span>{{ $t('messages.learnBottom.Blockchain') }}</span>{{
            $t('messages.learnBottom.Glossary') }}</div>
          <div class="more">
            <a href="/au/learnList?type=4" style="color: #878787; text-decoration: none">{{
              $t("messages.learnBottom.learn_more") }} &gt;</a>
          </div>
        </div>
        <el-row :gutter="20">
          <el-col class="blog-part-container" :span="8" v-for="(item, index) in filterBlogsBottom(3)" :key="index">
            <a class="to-article" :href="'/centerContent/' + item.id">
              <div class="content clearfloat">
                <div class="image">
                  <img :src="item.icon_url" />
                </div>
                <div class="text-content">
                  <div class="tip">{{ item.title }}</div>
                  <div class="message">{{ item.sub_desc }}</div>
                  <!-- <div class="message" style="margin-top:0px">{{ item.subDesc }}</div> -->
                </div>
              </div>
            </a>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="center-box max1290" v-if="windowWidth <= 769">
      <!-- <el-card> -->
      <div class="center-part">
        <div class="title-box clearfloat">
          <div class="title"><span>{{ $t('messages.learnBottom.Blockchain') }}</span>{{
            $t('messages.learnBottom.Glossary') }}</div>
          <div class="more">
            <a href="/au/learnList?type=3" style="color: #878787; text-decoration: none">{{
              $t("messages.learnMiddle.learn_more") }} &gt;</a>
          </div>
        </div>
        <el-row>
          <el-col :span="20" style="margin: auto" v-for="(item, index) in filterBlogsBottom(3)" :key="index">
            <a class="to-article" :href="'/centerContent/' + item.id">
              <div class="content clearfloat">
                <div class="image">
                  <img :src="item.icon_url" />
                </div>
                <div class="text-content">
                  <div class="tip">{{ item.title }}</div>
                  <div class="message">{{ item.sub_desc }}</div>
                  <!-- <div class="message" style="margin-top:0px">{{ item.messageAdd }}</div> -->
                </div>
              </div>
            </a>
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

import { Blog } from "../../../models/blog";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const props = defineProps<
  {
    filterBlogsBottom: (id: number) => Blog[]
  }>();

const windowWidth = ref(window.document.body.offsetWidth);
onMounted(() => {
  window.addEventListener("resize", resetWidth);

  gsap.from(".blog-part-container", {
    scrollTrigger: {
      trigger: ".blog-part-container",
      start: "top bottom", // 当元素顶部进入视口底部时
      end: "bottom top", // 当元素底部离开视口顶部时
      toggleActions: "restart pause resume pause", // 滚动到视口时重启动画
      scrub: true, // 在滚动时重置动画
    },
    yPercent: -50,
    autoAlpha: 0,
    duration: 1.8,
    stagger: 0.2,
    ease: "back.out(1.7)",
    delay: 2
  });

});
onUnmounted(() => {
  window.removeEventListener("resize", resetWidth);
});
function resetWidth() {
  windowWidth.value = window.document.body.offsetWidth;
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
        padding: 15px 0;
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

.to-article {
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
}</style>
