<template>
  <div>
    <div class="security-features">
      <div class="security-features-head">
        <div class="head-img">
          <img :src="usercenter_security_pending_security"/>
        </div>
        <div class="head-info">
          <div class="head-info-title">
            {{ $t("messages.user.security_title") }}
          </div>
          <div class="head-info-message">
            {{ $t("messages.user.security_con") }}
          </div>
        </div>
      </div>
      <div class="security-features-content">
        <div
            class="content-item"
            v-for="(item, index) in securityDate"
            :key="index"
        >
          <div class="content-item-box">
            <div class="content-item-icon"><img :src="item.icon"/></div>
            <div class="content-item-text">
              <div class="content-item-text-title">{{ item.title }}</div>
              <div class="content-item-text-msg">{{ item.msg }}</div>
            </div>
          </div>

          <div class="content-item-btn" v-if="index == 3">
            <router-link to="/user/verification" style="text-decoration: none"
            >
              <el-button link>{{
                  $t("messages.user.turn_link")
                }}
              </el-button>
            </router-link
            >
          </div>
          <div class="content-item-btn" v-if="index == 0">
<!--              <GetButton class="func-btn" :text="t('messages.user.set_btn')"/>-->
            <div class="info-count">
              <!-- {{ userInfo && userInfo.phone.maskedPhone }} -->
              <img class="verify-img" :src="registered_icon"/><span style="margin-left: 5px;margin-top: 6px;font-size: 14px">Verify</span>
            </div>
          </div>
          <div class="content-item-btn" v-if="index == 1">
<!--              <GetButton class="func-btn" :text="t('messages.user.set_btn')"/>-->
            <div class="info-count">
              <!-- {{ userInfo && userInfo.phone.maskedPhone }} -->
              <img class="verify-img" :src="registered_icon"/><span style="margin-left: 5px;margin-top: 6px;font-size: 14px">Verify</span>
            </div>
          </div>
          <div class="content-item-btn" v-if="index == 2">
<!--              <GetButton class="func-btn" :text="t('messages.user.set_btn')"/>-->
            <div class="info-count">
              <!-- {{ userInfo && userInfo.phone.maskedPhone }} -->
              <img class="verify-img" :src="registered_icon"/><span style="margin-left: 5px;margin-top: 6px;font-size: 14px">Verify</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Preferences -->
    <div>
      <div class="prefer-box">
        <div class="prefer-img">
          <img :src="world" class="world-img"/>
        </div>
        <div class="prefer-info">
          <div class="prefer-title">{{ $t("messages.user.prefer_title") }}</div>
          <div class="prefer-tip">{{ $t("messages.user.prefer_tip") }}</div>
        </div>
      </div>

      <div class="prefpreferer-body" v-if="windowWidth > 820">
        <div class="prefer-item">
          <div class="prefer-item-title">
            <img class="prefer-icon" :src="language"/>
            {{ $t("messages.user.prefer_lan") }}
          </div>

          <div
              @mouseover="languageShow"
              @mouseleave="languageHide"
              class="right-dropdown-box"
          >
            <el-dropdown class="language-dropdown align-icon" ref="navLanguage">
              <div class="language-dropdown-trigger">
                <span style="padding-right: 2px; color: #000">{{
                    currentLanguage
                  }}</span>
                <el-icon>
                  <ArrowDown/>
                </el-icon>
              </div>
              <template #dropdown>
                <el-dropdown-menu
                    class="language-dropdown-menu"
                    style="width: 200px;"
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

<!--        <div class="prefer-item">-->
<!--          <div class="prefer-item-title">-->
<!--            <img class="prefer-icon" :src="currency"/>-->
<!--            {{ $t("messages.user.prefer_currency") }}-->
<!--          </div>-->

<!--          <div-->
<!--              @mouseover="cryptoShow"-->
<!--              @mouseleave="cryptoHide"-->
<!--              class="right-dropdown-box"-->
<!--          >-->
<!--            <el-dropdown class="currency-dropdown align-icon" ref="navCurrency">-->
<!--              <div class="currency-dropdown-trigger">-->
<!--                <span style="padding-right: 10px; color: #000">{{-->
<!--                    currencies[selectedIndex].label-->
<!--                  }}</span>-->
<!--                <el-icon>-->
<!--                  <ArrowDown/>-->
<!--                </el-icon>-->
<!--              </div>-->
<!--              <template #dropdown>-->
<!--                <el-dropdown-menu-->
<!--                    class="currency-dropdown-menu"-->
<!--                    style="width: 200px"-->
<!--                >-->
<!--                  <el-dropdown-item-->
<!--                      v-for="(currency, index) in currencies"-->
<!--                      :key="currency.value"-->
<!--                      :class="{ highlight: index === selectedIndex }"-->
<!--                      @click="handleItemClick(index)"-->
<!--                  >-->
<!--                    <div class="alert-cont">{{ currency.label }}</div>-->
<!--                  </el-dropdown-item>-->
<!--                </el-dropdown-menu>-->
<!--              </template>-->
<!--            </el-dropdown>-->
<!--          </div>-->
<!--        </div>-->
      </div>
      <div class="prefer-mobile" v-else>
        <div class="prefer-item">
          <div class="prefer-item-title">
            <img class="prefer-icon" :src="language"/>

            {{ $t("messages.user.prefer_lan") }}
          </div>

          <div
              @mouseover="languageShow"
              @mouseleave="languageHide"
              class="right-dropdown-box"
          >
            <el-dropdown class="language-dropdown align-icon" ref="navLanguage">
              <div class="language-dropdown-trigger">
                <span style="padding-right: 2px; color: #000">{{
                    currentLanguage
                  }}</span>
                <el-icon>
                  <ArrowDown/>
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
            <img class="prefer-icon" :src="currency"/>
            {{ $t("messages.user.prefer_currency") }}
          </div>

          <div
              @mouseover="cryptoShow"
              @mouseleave="cryptoHide"
              class="right-dropdown-box"
          >
            <el-dropdown class="currency-dropdown align-icon" ref="navCurrency">
              <div class="currency-dropdown-trigger">
                <span style="padding-right: 10px; color: #000">{{
                    currencies[selectedIndex].label
                  }}</span>
                <el-icon>
                  <ArrowDown/>
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
    </div>

    <div class="login-history" v-if="windowWidth > 820">
      <div class="login-history-head">
        <div class="head-img">
          <img :src="usercenter_security_login_history"/>
        </div>
        <div class="head-info">
          <div class="head-info-title">
            {{ $t("messages.user.login_history") }}
          </div>
          <div class="head-info-message">
            {{ $t("messages.user.login_log") }}
          </div>
        </div>
      </div>
      <div class="login-history-table">
        <el-table :data="tableData">
          <el-table-column
            prop="CreatedAt"
            :label="t('messages.user.label_time')"
            width="450"
          >
            <template #default="scope">
              <div>
                {{ format(scope.row.CreatedAt) }}
              </div>
            </template>
          </el-table-column>
<!--          <el-table-column-->
<!--              prop="name"-->
<!--              :label="t('messages.user.label_location')"-->
<!--              width="148"-->
<!--          >-->
<!--            <template #default>-->
<!--              <div>-->
<!--                {{ 'AU' }}-->
<!--              </div>-->
<!--            </template>-->
<!--          </el-table-column>-->
          <el-table-column
            prop="country"
            :label="t('messages.user.label_ip')"
            width="190"
            align="right"
          />
        </el-table>
      </div>
    </div>
    <div class="min-login-history" v-else>
      <el-card class="box-card">
        <template #header>
          <div class="login-history-head">
            <div class="head-img">
              <img :src="usercenter_security_login_history"/>
            </div>
            <div class="head-info">
              <div class="head-info-title">
                {{ $t("messages.user.login_history") }}
              </div>
              <div class="head-info-message">
                {{ $t("messages.user.login_log") }}
              </div>
            </div>
          </div>
        </template>
        <div
            class="history-item"
            v-for="(item, index) in tableData"
            :key="index"
        >
          <div class="history-date flex">
            <span>{{ $t("messages.user.label_time") }}:</span> <div>{{ format(item.CreatedAt) }}</div>
          </div>
<!--          <div class="history-name flex">-->
<!--            <span>{{ $t("messages.user.label_location") }}:</span>-->
<!--            &lt;!&ndash; <div>{{ item.name }}</div> &ndash;&gt;-->
<!--            <div>AU</div>-->
<!--          </div>-->
          <div class="history-address flex">
            <span>{{ $t("messages.user.label_ip") }}:</span> <div>{{ item.country }}</div>
          </div>
          <el-divider style="margin-left: -30px; width: 200%"></el-divider>
        </div>
      </el-card>
    </div>
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
import {Right, ArrowDown, ArrowUp} from "@element-plus/icons-vue";
import Table from "../../component/Table.vue";
import usercenter_verification_person from "../../../../assets/home/usercenter_verification_person.png";
import usercenter_verification_cor from "../../../../assets/home/usercenter_verification_cor.png";
import {saveStoredLanguage} from "../../../../languageStorage";
import {useUserInfoStore} from "../../../../store/user";
import {storeToRefs} from "pinia";
import {useRoute, useRouter} from "vue-router";
import usercenter_security_pending_security from "../../../../assets/home/usercenter_security_pending_security.svg";
import usercenter_security_login_history from "../../../../assets/home/usercenter_security_login_history.svg";
import usercenter_security_login from "../../../../assets/home/usercenter_security_login.svg";
import usercenter_security_mobile from "../../../../assets/home/usercenter_security_mobile.svg";
import usercenter_security_email from "../../../../assets/home/usercenter_security_email.svg";
import usercenter_security_2factor from "../../../../assets/home/usercenter_security_2factor.svg";
import registered_icon from "../../../../assets/image/registered_icon.png";
import language from "../../../../assets/image/language.svg";
import currency from "../../../../assets/image/currency.svg";
import world from "../../../../assets/image/world.png";
import GetButton from "../../../../components/GetButton.vue";
import { useI18n } from "vue-i18n";
import { getLoginHistory } from "../../../../api/login";
import { LoginHistory } from '../../../../models/user';
import dayjs from 'dayjs';
import { formatNumber } from "../../../../utils/formatNumber";

const { t } = useI18n();

const isActive = ref(false);
const currencies = [
  // {
  //   value: "USD",
  //   label: "USD",
  // },
  {
    value: "AUD",
    label: "AUD",
  },
  // {
  //   value: "NZD",
  //   label: "NZD",
  // },
];

const selectedIndex = ref(0);

function handleItemClick(index: number): void {
  selectedIndex.value = index; // 更新 selectedIndex 的值
}

const $this = getCurrentInstance()?.appContext.config.globalProperties as any;
const currentLanguage = ref(getStoredLanguage() || "English"); // 将初始值设置为存储的语言设置
const languageOptions = [
  {
    value: "en-US",
    label: "English",
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

const set = ref("Set");
const securityDate = reactive([
  {
    icon: usercenter_security_login,
    title: t("messages.user.login_password"),
    msg: t("messages.user.login_msg"),
  },
  {
    icon: usercenter_security_mobile,
    title: t("messages.user.mobile_title"),
    msg: t("messages.user.mobile_msg"),
  },
  {
    icon: usercenter_security_email,
    title: t("messages.user.email_title"),
    msg: t("messages.user.email_msg"),
  },
  // {
  //   icon: usercenter_security_2factor,
  //   title: t("messages.user.factor_title"),
  //   msg: t("messages.user.factor_msg"),
  // },
]);
const tableData = ref<LoginHistory[]>([
  // {
  //   date: "Sep 12, 2022, 15:31:42",
  //   name: "AU",
  //   address: "136.175.177.145",
  // },
  // {
  //   date: "Sep 12, 2022, 15:31:42",
  //   name: "AU",
  //   address: "136.175.177.145",
  // },
  // {
  //   date: "Sep 12, 2022, 15:31:42",
  //   name: "AU",
  //   address: "136.175.177.145",
  // },
  // {
  //   date: "Sep 12, 2022, 15:31:42",
  //   name: "AU",
  //   address: "136.175.177.145",
  // },
  // {
  //   date: "Sep 12, 2022, 15:31:42",
  //   name: "AU",
  //   address: "136.175.177.145",
  // },
]);
const toGetLoginHistory = () => {
  getLoginHistory({page: 1, page_size: 10}).then(res => {
    console.log(res);
    tableData.value = res.data.data.Data;
  })
}
onMounted(() => {
  toGetLoginHistory();
})

const format = (date: Date) => {
  return dayjs(date).format("MMM DD, YYYY, HH:mm:ss");
}
</script>

<style scoped lang="scss">
$fontSizeMed: 26px;
$fontSizeMinPro: 14px;
$fontSizeMin: 12px;

.security-features {
  border-radius: 5px;

  .security-features-head {
    display: flex;
    background: #fffaf6;
    padding: 29px 31px 33px 31px;
    border: 1px solid #ebebeb;

    .head-img {
      width: 39px;
      height: 49px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .head-info {
      margin-left: 20px;

      .head-info-title {
        font-size: $fontSizeMed;
        color: #000000;
        line-height: 32px;
      }

      .head-info-message {
        margin-top: 6px;
        font-size: 14px;
        color: #878787;
        line-height: 16px;
      }
    }
  }

  .security-features-content {
    .content-item {
      display: flex;
      justify-content: space-between;
      padding: 20px 32px 18px 32px;
      border: 1px solid #ebebeb;
      border-top: none;

      .content-item-box {
        display: flex;

        .content-item-text {
          margin-left: 13px;

          .content-item-text-title {
            font-size: $fontSizeMinPro;
            color: #000000;
            line-height: 17px;
          }

          .content-item-text-msg {
            margin-top: 6px;
            font-size: $fontSizeMin;
            color: #878787;
            line-height: 14px;
          }
        }
      }

      .content-item-btn {
        display: flex;
        align-items: center;
        .info-count{
          display: flex;
          align-items: center;
        }
        :deep() {
          .button {
            width: 57px !important;
            height: 34px !important;
            font-size: 14px !important;
            font-weight: 400 !important;
            padding: 0;
          }

          .el-button > span {
            height: 34px;
            color: #01c19a;
          }
        }
      }
    }
  }
}
.verify-img {
  width: 16px;
  height: 18px;
  margin-top: 4px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.login-history {
  .login-history-head {
    display: flex;
    margin-top: 30px;
    padding: 29px 31px 33px 31px;
    border: 1px solid #ebebeb;

    .head-img {
      width: 39px;
      height: 49px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .head-info {
      margin-left: 20px;

      .head-info-title {
        font-size: $fontSizeMed;
        color: #000000;
        line-height: 32px;
      }

      .head-info-message {
        margin-top: 6px;
        font-size: 14px;
        color: #878787;
        line-height: 16px;
      }
    }
  }

  .login-history-table {
    border: 1px solid #ebebeb;
    border-top: none;

    :deep() {
      .el-table .cell {
        width: 100%;
        padding: 1px 42px;
        font-size: 12px;
      }
    }
  }
}

:deep() {
  .el-table__header {
    width: 100% !important;
  }

  .el-table__body,
  .el-table__footer,
  .el-table__header {
    width: 100% !important;
  }



  .el-card__body {
    padding: 5px 30px 0 30px !important;
  }
}

.min-login-history {
  margin-top: 30px;

  .login-history-head {
    display: flex;
    padding: 11px 11px 15px 11px;

    .head-img {
      width: 39px;
      height: 49px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .head-info {
      margin-left: 20px;

      .head-info-title {
        font-size: $fontSizeMed;
        color: #000000;
        line-height: 32px;
      }

      .head-info-message {
        margin-top: 6px;
        font-size: 14px;
        color: #878787;
        line-height: 16px;
      }
    }
  }

  .history-item {
    font-size: $fontSizeMinPro;
    color: #000000;
    line-height: 20px;
    text-align: left;

    span {
      font-size: $fontSizeMinPro;
      color: #878787;
    }

    .flex {
      display: flex;
      justify-content: space-between;
    }
  }

  :deep() {
    .el-divider--horizontal {
      margin: 5px 0;
    }
  }
}
</style>
<style scoped lang="scss">
$fontSizeMed: 26px;
$fontSizeMinPro: 14px;
$fontSizeMin: 12px;

.prefer-box {
  display: flex;
  justify-content: start;
  align-items: center;
  border: 1px solid #ebebeb;
  border-radius: 5px 5px 0 0;
  margin-top: 33px;
  padding: 30px 0 33px 24px;
}

.prefer-img {
  width: 56px;
  height: 50px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.prefer-info {
  margin-left: 16px;
}

.prefer-title {
  font-size: 26px;
  color: #000000;
  line-height: 32px;
}

.prefer-tip {
  font-size: 14px;
  color: #878787;
  line-height: 19px;
}

.prefer-item {
  border: 1px solid #ebebeb;
  border-top: none;
  width: 100%;
  height: 74px;
  position: relative;
  @media (max-width: 985px) {
    & {
      height: 64px;
    }
  }

  .right-dropdown-box {
    position: absolute;
    right: 20px;
    top: 30px;
    cursor: pointer;
  }

  .prefer-item-title {
    position: absolute;
    left: 20px;
    top: 20px;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    gap: 13px;

    .prefer-icon {
      width: 40px;
      height: 40px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
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
