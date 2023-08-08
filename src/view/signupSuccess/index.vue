<template>
  <div>
    <Header />
    <div class="signup-success">
      <div class="created-title">{{ t("messages.created.title") }}</div>
      <div class="continue">{{ t("messages.created.continue") }}</div>
      <div style="margin-top: 51px">
        <img class="display-img" :src="verification_icon" />
      </div>
      <div class="account-created">
        <div
          style="
            display: flex;
            justify-content: start;
            gap: 30px;
            align-items: center;
          "
        >
          <div class="account-created-img">
            <img class="image" :src="create_account" />
          </div>
          <div class="account-created-text">
            <div class="name">{{ t("messages.created.account") }}</div>
            <div class="info">{{ t("messages.created.complete") }}</div>
          </div>
        </div>
      </div>
      <div class="account-created">
        <div style="display: flex; justify-content: start; gap: 30px">
          <div class="account-created-img">
            <img class="image" :src="account_veri" />
          </div>
          <div class="account-created-text">
            <div class="name">{{ t("messages.created.verification") }}</div>
            <div class="info">{{ t("messages.created.vrify") }}</div>
          </div>
        </div>
      </div>
      <GetButton
        type="success"
        :text="t('messages.created.now')"
        class="verify-btn"
        @click="toVerify()"
      ></GetButton>
    </div>

    <Footer v-if="windowWidth > 769" />
    <FooterMobile v-if="windowWidth <= 769"></FooterMobile>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from "vue";

import Header from "../../layout/Header/Header.vue";
import FooterMobile from "../../layout/Footer/FooterMobile.vue";
import Footer from "../../layout/Footer/Footer.vue";
import joinCrypto from "../../layout/joinStarted/joinCrypto.vue";
import joinEmail from "../../layout/joinStarted/joinEmail.vue";
import GetButton from "../../components/GetButton.vue";

//img
import fees_icon01 from "../../assets/home/fees_icon01.png";
import fees_icon02 from "../../assets/home/fees_icon02.png";
import fees_icon03 from "../../assets/home/fees_icon03.png";
import verification_icon from "../../assets/image/verification_icon.png";
import create_account from "../../assets/image/create_account.png";
import account_veri from "../../assets/image/account_veri.png";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const router = useRouter();

const toVerify = () => {
  router.push("/user/verification");
};
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

const feeTable = [
  {
    icon: fees_icon01,
    title: t("messages.fees.firstTitle"),
    tips: t("messages.fees.firstTips"),
    currency: "$",
    number: "0",
    message: t("messages.fees.firstMessage"),
  },
  {
    icon: fees_icon02,
    title: t("messages.fees.secondTitle"),
    tips: t("messages.fees.secondTips"),
    currency: "%",
    number: "0.5",
    message: t("messages.fees.secondMessage"),
  },
  {
    icon: fees_icon03,
    title: t("messages.fees.thirdTitle"),
    tips: t("messages.fees.thirdTips"),
    currency: "%",
    number: "0.1",
    message: t("messages.fees.thirdMessage"),
  },
];
</script>

<style scoped lang="scss">
$fontSizeMax: 42px;
$fontSizeMed: 24px;
$fontSizeDefPro: 18px;
$fontSizeDef: 14px;
$fontSizeMin: 12px;
$colorWigth: #000000;
$colorinfo: #878787;
.signup-success {
  min-height: calc(100vh - 160px);
  text-align: center;
  @media (max-width: 768px) {
    min-height: calc(100vh - 135px);
  }
  .created-title {
    color: $colorWigth;
    margin-top: 51px;
    font-size: 36px;
    line-height: 44px;
  }
  .continue {
    color: $colorinfo;
    margin-top: 15px;
    font-size: $fontSizeDef;
    line-height: 23px;
  }
  .display-img {
    width: 161px;
    height: 159px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .verify-btn {
    margin-top: 40px;
    width: 427px;
    @media (max-width: 768px) {
      width: 80%;
    }
  }
  .account-created {
    margin: auto;
    padding: 21px 29px;
    margin-top: 20px;
    width: 427px;
    border: 1px solid #ebebeb;
    border-radius: 5px;
    cursor: pointer;
    @media (max-width: 768px) {
      width: 80%;
      height: 90px;
    }
    .account-created-img {
      .image {
        width: auto;
        height: 35px;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
    .account-created-text {
      text-align: left;
      .name {
        font-size: $fontSizeDefPro;
      }
      .info {
        font-size: $fontSizeDef;
        color: $colorinfo;
        margin-top: 2px;
      }
    }
  }
}
</style>
