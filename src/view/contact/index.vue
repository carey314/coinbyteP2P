<template>
  <div class="contact-page">
    <Header />
    <div class="top-part part">
      <!-- <img :src="contact_img" /> -->
      <div class="top-part-box">
        <div class="top-part-title">{{ $t('messages.contact.contact_contact') }}</div>
        <div class="top-part-content">{{ $t('messages.contact.contact_enjoy') }}</div>
      </div>
      <div class="hand-left">
        <img src="../../assets/home/contactus_handleft.png" />
      </div>
      <div class="hand-right">
        <img src="../../assets/home/contactus_handright.png" />
      </div>
    </div>

    <div class="center-part part top-center">
      <el-row>
        <el-col :span="12">
          <div class="part-box left-box">
            <div class="part-title">{{ $t('messages.contact.contact_firstTitle') }}</div>
            <div class="part-content">
              {{ $t('messages.contact.contact_firstContent') }}
            </div>
            <div class="part-img">
              <img :src="contactus_icon01" />
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="part-box">
            <div class="part-title">{{ $t('messages.contact.contact_secondTitle') }}</div>
            <div class="part-content" v-if="$route.path.startsWith('/au')">
              {{ $t('messages.contact.contact_auContent') }}
            </div>
            <div class="part-content" v-if="$route.path.startsWith('/nz')">
              {{ $t('messages.contact.contact_nzContent') }}
            </div>
            <div class="part-img">
              <img :src="contactus_icon02" />
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="center-part part" style="padding-top:-20px;margin-bottom: 45px;">
      <el-row>
        <el-col :span="12">
          <div class="part-box follow" style="border:none;">
            <div class="part-title fix-line-height">{{ $t('messages.contact.contact_thirdTitle') }}</div>
            <div class="bottom-part-icon">
              <img src="../../assets/icons/icon_twitter.svg" alt="" />
              <img src="../../assets/icons/icon_telegram.svg" alt="" />
              <img src="../../assets/icons/icon_whatsapp.svg" alt="" />
              <img src="../../assets/home/downbar_icon10.png" alt="" />
            </div>
          </div>
        </el-col>
        <el-col :span="4" :offset="8">
          <div class="part-box" style="border:none">
            <div class="part-img">
              <img :src="contactus_icon03" />
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div style="position: absolute;bottom: 0;width: 100%">
      <Footer v-if="windowWidth > 769" />
      <FooterMobile v-if="windowWidth <= 769"></FooterMobile>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import Header from "../../layout/Header/Header.vue";
import FooterMobile from "../../layout/Footer/FooterMobile.vue";
import Footer from "../../layout/Footer/Footer.vue";
//img
import contactus_icon01 from "../../assets/home/contactus_icon01.png";
import contactus_icon02 from "../../assets/home/contactus_icon02.png";
import contactus_icon03 from "../../assets/home/contactus_icon03.png";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)


const windowWidth = ref(window.document.body.offsetWidth);
onMounted(() => {
  window.addEventListener("resize", resetWidth);

  gsap.from('.top-part-box', {
    opacity: 0,
    scale: 1.5, // Begin slightly larger to create a zoom effect
    duration: 2,
    ease: 'power4.out',
    stagger: 0.05,
    delay: 0.2
  });
  // 左边背景图的动画
  gsap.from('.hand-left img', {
    duration: 2.5, // 动画持续时间
    x: -100, // 从左侧开始移动
    opacity: 0, // 从完全透明开始
    ease: 'power2.out', // 平滑的缓动效果
    delay: 0.2 // 动画开始前的延迟
  });

  // 右边背景图的动画
  gsap.from('.hand-right img', {
    duration: 2.5, // 动画持续时间
    x: 100, // 从右侧开始移动
    opacity: 0, // 从完全透明开始
    ease: 'power2.out', // 平滑的缓动效果
    delay: 0.2 // 动画开始前的延迟
  });
  gsap.to('.back-center img', {
    scale: 1.5, // 略微放大到原始大小的105%
    duration: 2.5, // 动画持续时间
    ease: 'power1.inOut', // 平滑的进出缓动效果
    yoyo: true, // 动画在放大和缩小之间循环
    repeat: -1, // 无限重复动画
    transformOrigin: 'bottom center' 
  });
  gsap.from('.part-box', {
    opacity: 0,
    y: 80,
    duration: 1.6,
    scrollTrigger: {
      trigger: '.center-part',
      start: 'top bottom', // 当部分进入视图中央时开始动画
      toggleActions: 'play none reverse none'
    }
  });
  gsap.from('.bottom-part-icon img', {
    opacity: 0,
    y: 20, // 轻微向上移动
    stagger: 0.1, // 每个图标之间的时间间隔
    duration: 1.8, // 每个图标动画的持续时间
    scrollTrigger: {
      trigger: '.bottom-part-icon',
      start: 'top bottom', // 当图标进入视图中央时开始动画
      toggleActions: 'play none none none'
    }
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
.contact-page {
  background: #1d262f;
  position: relative;
  overflow: hidden;
  min-height: calc(100vh + 180px);
  @media (max-width: 768px) {
    min-height: calc(100vh + 70px);
  }

  .top-part {
    width: 100%;
    height: 440px;
    position: relative;
    display: flex;
    .top-part-box {
      margin: auto;
      text-align: center;
      .top-part-title {
        font-size: 55px;
        color: #3e4191;
        font-weight: 600;
        @media (max-width: 768px) {
          font-size: 42px;
        }
      }
      .top-part-content {
        font-size: 16px;
        color: #ffffff;
        margin-top: 30px;
      }
    }
    .hand-left {
      width: 36%;
      //height: 18%;
      position: absolute;
      top: 40%;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .hand-right {
      width: 36%;
      //height: 18%;
      position: absolute;
      top: 5%;
      right: 0;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  .top-center{
    padding-top: 46px;
    @media (max-width: 768px) {
      padding-top: 10px;
    }

  }
  .part-box {
    height: 340px;
    padding: 14% 8% 10% 8%;
    border: 1px solid #2f3f4e;
    border-left: 0px;
    border-right: 0px;

    position: relative;
    .part-title {
      font-size: 40px;
      color: #3e4191;
      font-weight: 600;

    }
    .part-content {
      font-size: 16px;
      color: #ffffff;
      margin-top: 30px;
      line-height: 19px;
      @media (max-width: 768px) {
        font-size: 14px !important;
      }
    }
  }
  .left-box {
    border-right: 1px solid #2f3f4e;
  }
  .bottom-part-icon {
    width: 100%;
    margin-top: 20px;
    img {
      cursor: pointer;
      width: 1rem;
      margin: 8px 12px 0 0;
      height: 1rem;
    }
  }
  .bottom-part {
    padding: 7% 4% 5% 3%;
    border-left: 0px;
    border-right: 0px;
    position: relative;
    .bottom-part-title {
      font-size: 40px;
      color: #3e4191;
      font-weight: 600;
    }
    .bottom-part-icon {
      width: 100%;
      margin-top: 20px;
      img {
        cursor: pointer;
        width: 1rem;
        margin: 8px 12px 0 0;
        height: 1rem;
      }
    }
  }
  .follow{
    @media(min-width:769px)  {
      // margin-left: -25px;
    }
  }
  .part-img {
    position: absolute;
    //right: 2%;
    right: 20px;
    bottom: 18%;
    width: 120px;
    //height: 35%;
    z-index: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
.part {
  max-width: 1290px;
  margin: 0 auto;
}

@media (min-width: 985px) and (max-width: 1400px) {
  .part {
    max-width: 940px;
  }
  .hand-left {
    width: 36%;
    //height: 18%;
    position: absolute;
    top: 55% !important;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
@media (max-width: 985px) {
  .contact-page .top-part {
    padding: 0px;
  }
  .contact-page .top-part .hand-left {
    top: 68%;
  }
  .contact-page .part-box {
    height: 300px;
  }
  .part-box {
    .part-title {
      font-size: 20px !important;
      line-height: 28px;
    }
  }
  .bottom-part-title {
    line-height: 50px;
  }
  .part-img {
    right: 10px !important;
    width: 60px !important;
  }
  .part {
    max-width: none;
  }
}
.fix-line-height{
  display: initial;
  line-height: 42px;
  @media (max-width: 985px) {
    line-height: 36px;
  }
}
</style>
