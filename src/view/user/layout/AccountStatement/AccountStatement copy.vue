<template>
  <div>
    <div class="prefer-title">{{ $t("messages.user.prefer_title") }}</div>

    <div class="prefpreferer-body" v-if="windowWidth > 820">
      <div class="prefer-item">
        <div class="item-title">{{ $t("messages.user.prefer_lan") }}</div>
        <el-select
          v-model="currentLanguage"
          class="selectLan"
          placeholder="Select"
          size="large"
          @change="changeLanguage"
          :popper-append-to-body="true"
        >
          <el-option
            v-for="item in optionsLan"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>

      <div class="prefer-item">
        <div class="item-title">{{ $t("messages.user.prefer_currency") }}</div>
        <el-select
          v-model="currentCurrency"
          class="selectLan"
          placeholder="Select"
          size="large"
          @change="changeCurrency"
          :popper-append-to-body="true"
        >
          <el-option
            v-for="item in optionsCurrency"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </div>
    <div class="prefer-mobile" v-else></div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  reactive,
  onUnmounted,
  onMounted,
  watch,
  getCurrentInstance,
} from "vue";

import { Right } from "@element-plus/icons-vue";
import GetButton from "../../../../components/GetButton.vue";
import Table from "../../component/Table.vue";
import usercenter_verification_person from "../../../../assets/home/usercenter_verification_person.png";
import usercenter_verification_cor from "../../../../assets/home/usercenter_verification_cor.png";
import {
  getStoredLanguage,
  saveStoredLanguage,
} from "../../../../languageStorage";

import { useI18n } from "vue-i18n";
const { t } = useI18n();

//切换语言
const currentLanguage = ref(getStoredLanguage() || "English/USD");
const currentCurrency = ref("USD"); // 初始货币设置为USD
const $this = getCurrentInstance()?.appContext.config.globalProperties as any;

const optionsLan = [
  {
    value: "English/USD",
    label: "English/USD",
  },
  {
    value: "简体中文",
    label: "简体中文",
  },
  {
    value: "zh-TW",
    label: "繁体中文",
  },
];

const optionsCurrency = [
  {
    value: "USD",
    label: "USD",
  },
  {
    value: "AUD",
    label: "AUD",
  },
  {
    value: "NZD",
    label: "NZD",
  },
];
const changeLanguage = (selectedLanguage: string) => {
  $this.$i18n.locale = selectedLanguage;
  saveStoredLanguage(selectedLanguage);
  location.reload();
};

const changeCurrency = (selectedCurrency: string) => {
  // 处理切换货币的逻辑
  console.log("Selected currency:", selectedCurrency);
};

watch(currentLanguage, (newLanguage) => {
  changeLanguage(newLanguage);
});

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
$fontSizeMed: 26px;
$fontSizeMinPro: 14px;
$fontSizeMin: 12px;

.prefer-title {
  margin-top: 39px;
  font-size: 26px;
  color: #000000;
  line-height: 32px;
  @media (max-width: 768px) {
    margin-top: 0px;
  }
}
.prefer-item {
  margin-top: 20px;
  position: relative;
  .item-title {
    font-size: 20px;
    color: #000000;
    line-height: 32px;
    position: absolute;
    z-index: 99;
    padding: 20px;
  }
}
.selectLan {
  width: 720px !important;

  :deep() {
    .el-select .el-input {
      height: 72px !important;
    }
  }
}
:deep() {
  .el-select .el-input__inner {
    padding-left: 585px;
    height: 72px;
  }
}
</style>
