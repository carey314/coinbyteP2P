<template>
  <div>
    <div class="prefer-title">{{ $t("messages.user.prefer_title") }}</div>

    <div class="prefpreferer-body" v-if="windowWidth > 820">
      <div class="prefer-item">
        <div class="prefer-item-title">
          {{ $t("messages.user.prefer_lan") }}
        </div>

        <div
          @mouseover="languageShow"
          @mouseleave="languageHide"
          class="right-dropdown-box"
        >
          <el-dropdown class="language-dropdown align-icon" ref="navLanguage">
            <div class="language-dropdown-trigger">
              <span style="padding-right: 2px">{{ currentLanguage }}</span>
              <el-icon>
                <ArrowDown />
              </el-icon>
            </div>
            <template #dropdown>
              <el-dropdown-menu
                class="language-dropdown-menu"
                style="width: 340px"
              >
                <el-dropdown-item
                  v-for="option in languageOptions"
                  :key="option.value"
                  @click="changeLanguage(option.label)"
                >
                  <div
                    class="alert-cont"
                    :class="{
                      selected: currentLanguage === option.label,
                    }"
                  >
                    {{ option.label }}
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>

      <div class="prefer-item">
        <div class="prefer-item-title">
          {{ $t("messages.user.prefer_currency") }}
        </div>

        <div
          @mouseover="cryptoShow"
          @mouseleave="cryptoHide"
          class="right-dropdown-box"
        >
          <el-dropdown class="currency-dropdown align-icon" ref="navCurrency">
            <div class="currency-dropdown-trigger">
              <span style="padding-right: 10px">{{
                currencies[selectedIndex].label
              }}</span>
              <el-icon>
                <ArrowDown />
              </el-icon>
            </div>
            <template #dropdown>
              <el-dropdown-menu
                class="currency-dropdown-menu"
                style="width: 200px"
              >
                <el-dropdown-item
                  v-for="(currency, index) in currencies"
                  :key="currency.value"
                  :class="{ highlight: index === selectedIndex }"
                  @click="handleItemClick(index)"
                >
                  <div class="alert-cont">{{ currency.label }}</div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
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

import { Right, ArrowDown, ArrowUp } from "@element-plus/icons-vue";
import GetButton from "../../../../components/GetButton.vue";
import Table from "../../component/Table.vue";
import usercenter_verification_person from "../../../../assets/home/usercenter_verification_person.png";
import usercenter_verification_cor from "../../../../assets/home/usercenter_verification_cor.png";
import { saveStoredLanguage } from "../../../../languageStorage";
import { useUserInfoStore } from "../../../../store/user";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";

const i18n = useI18n();
const { t } = useI18n({});

const isActive = ref(false);
const currencies = [
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

const selectedIndex = ref(0);

function handleItemClick(index: number): void {
  selectedIndex.value = index; // 更新 selectedIndex 的值
}
const $this = getCurrentInstance()?.appContext.config.globalProperties as any;
const currentLanguage = ref(getStoredLanguage() || ""); // 将初始值设置为存储的语言设置
const languageOptions = [
  {
    value: "en-US",
    label: "English/USD",
  },
  {
    value: "zh-CN",
    label: "简体中文",
  },
  {
    value: "zh-TW",
    label: "繁體中文",
  },
];
// 保存当前语言,高亮显示
function getStoredLanguage(): string | null {
  return localStorage.getItem("selectedLanguage");
}
const changeLanguage = (selectedLanguage: string) => {
  const storedLanguage = getStoredLanguage();
  if (selectedLanguage !== storedLanguage) {
    // 仅在语言发生更改时刷新页面
    $this.$i18n.locale = selectedLanguage;
    saveStoredLanguage(selectedLanguage);
    currentLanguage.value = selectedLanguage;
    location.reload();
  }
};

const userInfoStore = useUserInfoStore();
const navCurrency = ref();
const navLanguage = ref();


const cryptoShow = () => {
  navCurrency.value.handleOpen();
};
const cryptoHide = () => {
  navCurrency.value.handleClose();
};

const languageShow = () => {
  navLanguage.value.handleOpen();
};
const languageHide = () => {
  navLanguage.value.handleClose();
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
// .prefer-item {
//   margin-top: 20px;
//   position: relative;
//   .item-title {
//     font-size: 20px;
//     color: #000000;
//     line-height: 32px;
//     position: absolute;
//     z-index: 99;
//     padding: 20px;
//   }
// }
// .selectLan {
//   width: 720px !important;

//   :deep() {
//     .el-select .el-input {
//       height: 72px !important;
//     }
//   }
// }
// :deep() {
//   .el-select .el-input__inner {
//     padding-left: 585px;
//     height: 72px;
//   }
// }

.prefer-item {
  margin-top: 20px;
  border: 1px solid;
  width: 720px;
  height: 74px;
  border-radius: 10px;
  position: relative;
  .right-dropdown-box {
    position: absolute;
    right: 20px;
    top: 30px;
  }
  .prefer-item-title {
    position: absolute;
    left: 20px;
    top: 24px;
    font-size: 20px;
  }
}
.language-dropdown-trigger {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.language-dropdown-trigger span {
  margin-right: 5px;
}
.language-dropdown-trigger i {
  transition: transform 0.3s ease;
}
.language-dropdown-trigger .el-icon-arrow-up {
  transform: rotate(180deg);
}
</style>
