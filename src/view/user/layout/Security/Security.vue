<template>
  <div>
    <div class="security-features">
      <div class="security-features-head">
        <div class="head-img">
          <img :src="usercenter_security_pending_security" />
        </div>
        <div class="head-info">
          <div class="head-info-title">{{ $t('messages.user.security_title') }}</div>
          <div class="head-info-message">
            {{ $t('messages.user.security_con') }}
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
            <div class="content-item-icon"><img :src="item.icon" /></div>
            <div class="content-item-text">
              <div class="content-item-text-title">{{ item.title }}</div>
              <div class="content-item-text-msg">{{ item.msg }}</div>
            </div>
          </div>

          <div class="content-item-btn" v-if="index == 3">
            <router-link to="/user/verification"><el-button link>{{ $t('messages.user.turn_link') }}</el-button></router-link>
          </div>
          <div class="content-item-btn" v-else>
            <router-link to="/user/verification"><GetButton class="func-btn" :text="t('messages.user.set_btn')" /></router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="login-history" v-if="windowWidth > 820">
      <div class="login-history-head">
        <div class="head-img">
          <img :src="usercenter_security_login_history" />
        </div>
        <div class="head-info">
          <div class="head-info-title">{{ $t('messages.user.login_history') }}</div>
          <div class="head-info-message">{{ $t('messages.user.login_log') }}</div>
        </div>
      </div>
      <div class="login-history-table">
        <el-table :data="tableData">
          <el-table-column prop="date" :label="t('messages.user.label_time')" width="450" />
          <el-table-column prop="name" :label="t('messages.user.label_location')" width="148" />
          <el-table-column
            prop="address"
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
              <img :src="usercenter_security_login_history" />
            </div>
            <div class="head-info">
              <div class="head-info-title">{{ $t('messages.user.login_history') }}</div>
              <div class="head-info-message">{{ $t('messages.user.login_log') }}</div>
            </div>
          </div>
        </template>
        <div
          class="history-item"
          v-for="(item, index) in tableData"
          :key="index"
        >
          <div class="history-date"><span>{{ $t('messages.user.label_time') }}:</span> {{ item.date }}</div>
          <div class="history-name"><span>{{ $t('messages.user.label_location') }}:</span> {{ item.name }}</div>
          <div class="history-address">
            <span>{{ $t('messages.user.label_ip') }}:</span> {{ item.address }}
          </div>
          <el-divider style="margin-left: -30px; width: 200%"></el-divider>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onUnmounted, onMounted } from "vue";

import usercenter_security_pending_security from "../../../../assets/home/usercenter_security_pending_security.svg";
import usercenter_security_login_history from "../../../../assets/home/usercenter_security_login_history.svg";
import usercenter_security_login from "../../../../assets/home/usercenter_security_login.svg";
import usercenter_security_mobile from "../../../../assets/home/usercenter_security_mobile.svg";
import usercenter_security_email from "../../../../assets/home/usercenter_security_email.svg";
import usercenter_security_2factor from "../../../../assets/home/usercenter_security_2factor.svg";
import GetButton from "../../../../components/GetButton.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

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
    title: t('messages.user.login_password'),
    msg: t('messages.user.login_msg'),
  },
  {
    icon: usercenter_security_mobile,
    title: t('messages.user.mobile_title'),
    msg: t('messages.user.mobile_msg'),
  },
  {
    icon: usercenter_security_email,
    title: t('messages.user.email_title'),
    msg: t('messages.user.email_msg'),
  },
  {
    icon: usercenter_security_2factor,
    title: t('messages.user.factor_title'),
    msg: t('messages.user.factor_msg'),
  },
]);
const tableData = [
  {
    date: "Sep 12, 2022, 15:31:42",
    name: "AU",
    address: "136.175.177.145",
  },
  {
    date: "Sep 12, 2022, 15:31:42",
    name: "AU",
    address: "136.175.177.145",
  },
  {
    date: "Sep 12, 2022, 15:31:42",
    name: "AU",
    address: "136.175.177.145",
  },
  {
    date: "Sep 12, 2022, 15:31:42",
    name: "AU",
    address: "136.175.177.145",
  },
  {
    date: "Sep 12, 2022, 15:31:42",
    name: "AU",
    address: "136.175.177.145",
  },
];
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
            color: #3e4191;
          }
        }
      }
    }
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
  .el-table__inner-wrapper {
    // padding-left: 31px;
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
  }
  :deep() {
    .el-divider--horizontal {
      margin: 5px 0;
    }
  }
}
</style>
