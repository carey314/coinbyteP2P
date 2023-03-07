<template>
  <div class="login-page">
    <Header />
    <div class="center-box" v-if="windowWidth > 769"> 
      <div class="login-box">
        <div class="login">
          <div class="login-title">Welcome to CoinByte</div>
          <div class="login-referral">
            <el-input v-model="optional" placeholder="Phone / Email " />
          </div>
          <div class="login-password">
            <el-input v-model="password" type="password" placeholder="Password">
              <template #prefix>
                <img :src="login_password" />
              </template>
              <template #suffix>
                <img :src="login_eye_off" />
              </template>
            </el-input>
          </div>

          <div class="login-agree clearfloat">
            <div class="agreement">
              <a href="password" style="color: #01c19a; text-decoration: none"
                >Forgot password?</a
              >
            </div>
          </div>
          <div class="login-button">
            <GetButton :text="text" style="margin-top: 31px;" />
          </div>
          <div class="login-with">
            <el-divider>
            <span>or sign up with</span>
            </el-divider>
          </div>
          <div class="login-other">
            <div class="other-login">
              <div class="other-login-icon"><img :src="login_telegram" /></div>
              <div class="other-login-name">Telegram</div>
            </div>
            <div class="other-login">
              <div class="other-login-icon"><img :src="login_google" /></div>
              <div class="other-login-name">Google</div>
            </div>
          </div>
          <div class="login-signup">
            <div>
              Don't have an account? &nbsp;&nbsp;
              <a href="/signup" style="color: #01c19a; text-decoration: none"
                >Sign up</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="scan clearfloat">
        <div class="scan-box">
          <div class="scan-title">Log in with QR code</div>
          <div class="scan-qr"><img :src="login_qrcode" /></div>
          <div class="scan-tip">Open the CoinByte app and scan this code</div>
          <div class="scan-download">
            <div class="other-sign">
              <div class="other-sign-icon"><img :src="login_download" /></div>
              <div class="other-sign-name">Download app</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="center-box" v-if="windowWidth <= 769">
      <div class="login-box">
        <div class="login">
          <div class="login-title">Welcome to CoinByte</div>
          <div class="login-referral">
            <el-input v-model="optional" placeholder="Phone / Email " />
          </div>
          <div class="login-password">
            <el-input v-model="password" type="password" placeholder="Password">
              <template #prefix>
                <img :src="login_password" />
              </template>
              <template #suffix>
                <img :src="login_eye_off" />
              </template>
            </el-input>
          </div>

          <div class="login-agree clearfloat">
            <div class="agreement">
              <a href="" style="color: #01c19a; text-decoration: none"
                >Forgot password?</a
              >
            </div>
          </div>
          <div class="login-button">
            <GetButton :text="text" style="margin-top: 31px" />
          </div>
          <div class="login-with">
            <el-divider>
              <span>or login up with</span>
            </el-divider>
          </div>
          <div class="login-other">
            <div class="other-login">
              <div class="other-login-icon"><img :src="login_telegram" /></div>
              <div class="other-login-name">Telegram</div>
            </div>
            <div class="other-login">
              <div class="other-login-icon"><img :src="login_google" /></div>
              <div class="other-login-name">Google</div>
            </div>
          </div>
          <div class="login-signup">
            <div>
              Don't have an account? &nbsp;&nbsp;
              <a href="" style="color: #01c19a; text-decoration: none"
                >Sign up</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="scan clearfloat">
        <div class="scan-box">
          <div class="scan-title">Log in with QR code</div>
          <div class="scan-qr"><img :src="login_qrcode" /></div>
          <div class="scan-tip">Open the CoinByte app and scan this code</div>
          <div class="scan-download">
            <div class="other-sign">
              <div class="other-sign-icon"><img :src="login_download" /></div>
              <div class="other-sign-name">Download app</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer v-if="windowWidth > 769" />
    <FooterMobile v-if="windowWidth <= 769" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onUnmounted, onMounted } from "vue";
import Header from "../../layout/Header/Header.vue";
import FooterMobile from "../../layout/Footer/FooterMobile.vue";
import Footer from "../../layout/Footer/Footer.vue";
import GetButton from "../../components/GetButton.vue";

import login_password from "../../assets/home/login_password.svg";
import login_eye_off from "../../assets/home/login_eye_off.svg";
import login_telegram from "../../assets/home/login_telegram.svg";
import login_google from "../../assets/home/login_google.svg";
import login_download from "../../assets/home/login_download.svg";
import login_qrcode from "../../assets/home/login_qrcode.png";

const password = ref("");
const optional = ref("");
const text = ref("Log in");

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
const options = ref([
  {
    value: "1",
    label: "Mobile number",
  },
  {
    value: "2",
    label: "Email",
  },
]);
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
.login-page {
  background: #1d262f;
}
.center-box {
  margin: auto;
  display: flex; 
  justify-content: center;
  min-height: calc(100vh - 394px);
  align-items: center;
  border-bottom: 1px solid #2e3945;

  @media (max-width: 769px){
    display: block !important;
  }

  .login-box {
    height: 100%;
    max-width: 439px;
    padding: 80px 0;
    @media (max-width: 769px) {
      padding: 0;
      margin: auto;
    }
    .login {
      background: #fff;
      box-shadow: 0 0 15px 0 rgba(95, 95, 95, 0.19);
      border-radius: 8px 0 0 8px;
      padding: 36px 43px 38px 43px;
      @media (max-width: 769px) {
        border-radius: 0px;
        padding: 36px 13px 38px 13px;

      }
      .login-title {
        font-size: $fontSizeMedPro;
        color: #000000;
        line-height: 34px;
        font-weight: 600;
        text-align: center;
      }
      .login-radio {
        margin-top: 28px;
        :deep() {
          .el-radio__inner {
            border-color: #dfdfe5;
            border-radius: 3px;
          }
          .el-radio__input.is-checked .el-radio__inner {
            background: #01c19a;
            border-radius: 4px;
          }
          .el-radio__input.is-checked + .el-radio__label {
            color: #000;
          }

          .el-radio-group {
            display: flex;
            justify-content: space-between;
          }
          .el-radio {
            width: 48%;
            margin-right: 0;
            --el-radio-text-color: #c4c9d0;
            // --el-radio-font-size:14px;
          }
        }
        .el-radio {
          height: 48px;
          border: 1px solid #dfdfe5;
          border-radius: 4px;
          padding: 15px;
        }
        .activeNumber {
          .input-with-select {
            :deep() {
              .el-input__inner {
                font-size: $fontSizeMinPro;
                color: #000;
                line-height: 16px;
              }
            }
          }
          :deep() {
            .el-input {
              --el-input-border-color: none;
            }
            .el-input-group__prepend {
              width: 73px;
              border-radius: 8px;
            }
            .el-input-group--prepend > .el-input__wrapper {
              margin-left: 16px;
            }
            .el-select {
              --el-select-input-focus-border-color: none;
            }

            //right input
            .el-input__wrapper {
              background: #fff;
              border: 1px solid #dfdfe5;
              height: 48px;
              border-radius: 4px;
              --el-input-focus-border-color: none;
              --el-input-hover-border-color: none;
              box-shadow: none;
              padding-left: 15px;
            }
            .el-input__inner {
              font-size: $fontSizeMinPro;
              color: #c4c9d0;
              line-height: 16px;
            }
          }
        }
        .activeEmail {
          margin-top: 18px;
          :deep() {
            .el-input__wrapper {
              background: #fff;
              border: 1px solid #dfdfe5;
              height: 48px;
              border-radius: 4px;
              --el-input-focus-border-color: none;
              --el-input-hover-border-color: none;
              box-shadow: none;
              padding-left: 15px;
            }
          }
        }
      }
      .login-password {
        margin-top: 19px;
        .password-condition {
          margin-top: 12px;
          .condition {
            margin-top: 9px;
            .satisfy-frame {
              float: left;
              width: 12px;
              height: 12px;
              border: 1px solid #dfdfe5;
              border-radius: 1px;
            }
            .satisfy {
              margin-top: -6px;
              float: left;
              margin-left: 10px;
              font-size: $fontSizeMin;
              color: #000000;
              line-height: 22px;
              font-weight: 500;
            }
          }
        }
        :deep() {
          .el-input__wrapper {
            height: 48px;
            padding: 15px;
          }
          .el-input .el-input__clear,
          .el-input .el-input__password {
            font-size: 20px;
          }
          .el-icon svg {
            height: 20px;
            width: 20px;
          }
          .el-input__wrapper {
            background: #fff;
            border: 1px solid #dfdfe5;
            height: 48px;
            border-radius: 4px;
            --el-input-focus-border-color: none;
            --el-input-hover-border-color: none;
            box-shadow: none;
            padding-left: 15px;
          }
        }
      }
      .login-referral {
        margin-top: 28px;
        :deep() {
          .el-input__wrapper {
            background: #fff;
            border: 1px solid #dfdfe5;
            height: 48px;
            border-radius: 4px;
            --el-input-focus-border-color: none;
            --el-input-hover-border-color: none;
            box-shadow: none;
            padding-left: 15px;
          }
        }
      }
      .login-agree {
        float: right;
        margin-top: 9px;
        .agree-frame {
          float: left;
          width: 12px;
          height: 12px;
          border: 1px solid #dfdfe5;
          border-radius: 1px;
        }
        .agreement {
          font-size: $fontSizeMin;
          color: #6e6e6e;
          line-height: 22px;
          float: left;
          margin-top: -6px;
          margin-left: 10px;
        }
      }
      .login-button {
        :deep(.button) {
          width: 100%;
          height: 100%;
          font-size: 20px;
          line-height: 25px;
          padding: 16px 0 14px 0px;
          border: 8px;
          @media (max-width: 769px) {
            padding: 16px 0;
          }
        }
      }
      .login-signup {
        margin-top: 18px;
        text-align: center;
        font-size: $fontSizeMinPro;
        line-height: 16px;
        color: #000;
        font-weight: 500;
      }
      .login-with {
        margin-top: 31px;
        span {
          font-size: $fontSizeMin;
          line-height: 14px;
          color: #6e6e6e;
        }
        :deep(.el-divider__text.is-center) {
          margin-top: -2px;
        }
      }
      .login-other {
        margin-top: 18px;
        display: flex;
        cursor: pointer;

        justify-content: space-between;

        .other-login {
          width: 48%;
          height: 48px;
          border: 1px solid #dfdfe5;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          float: left;
          .other-login-name {
            margin-left: 5px;
          }
        }
      }
    }
  }
  .scan {
    max-width: 357px;
    height: 100%;
    height: 100%;
    padding: 80px 0;
    text-align: center;
    @media (max-width: 769px) {
      padding: 0;
      margin: auto;
      max-width: 439px;
    }

    .scan-box {
      background: #f1f1f1;
      border-radius: 0 8px 8px 0;
      padding: 93px 43px 72px 43px;
      @media (max-width: 769px) {
        border-radius: 0px;
        padding: 94px 13px 72px 13px;
        
      }
      .scan-title {
        font-size: $fontSizeDefPro;
        color: #000;
        line-height: 22px;
      }
      .scan-qr {
        width: 142px;
        margin: 21px auto;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      .scan-tip {
        margin-top: 32px;
        color: #949494;
        font-size: $fontSizeMinPro;
        line-height: 16px;
      }
      .scan-download {
        margin-top: 36px;
        cursor: pointer;
        @media(max-width:769px){
          margin-top: 69px;
        }
        .other-sign {
          width: 142px;
          height: 48px;
          border: 1px solid #dfdfe5;
          border-radius: 4px;
          display: flex;
          margin: auto;
          align-items: center;
          justify-content: center;
          .other-sign-name {
            margin-left: 5px;
            font-size: $fontSizeMin;
            color: #000;
            line-height: 14px;
          }
        }
      }
    }
  }
}
</style>
