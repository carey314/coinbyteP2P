<template>
  <div class="convert-page">
    <Header />
    <div class="content-box">
      <div class="top-part">
        <div class="top-part-box">
          <div class="top-part-title">Convert</div>
          <div class="top-part-content">
            Top stablecoins 1:1 convert with 0 slippage
          </div>
        </div>
      </div>
      <div class="center-part">
        <div class="sign">
          <div class="sign-radio">
            <el-radio-group v-model="activeSign">
              <el-radio
                :label="option.value"
                v-for="option in options"
                :key="option.value"
              >
                <el-row>
                  <el-col span="12">
                    <div class="label">
                      {{ option.label }}
                    </div>
                  </el-col>
                </el-row>
              </el-radio>
            </el-radio-group>
            <div
              v-if="activeSign === '1'"
              class="activeNumber"
              style="margin-top: 18px"
            >
              <div>
                <el-input
                  v-model="number"
                  placeholder="Mobile number"
                  class="input-with-select"
                >
                  <template #prepend>
                    <el-select
                      v-model="select"
                      placeholder="Select"
                      style="width: 115px"
                    >
                      <el-option label="+61" value="1" />
                      <el-option label="+86" value="2" />
                      <el-option label="+01" value="3" />
                    </el-select>
                  </template>
                </el-input>
              </div>
              <div class="radio-content">
                <div class="sign-password">
                  <el-input
                    v-model="password"
                    type="password"
                    placeholder="Password"
                  >
                    <template #prefix>
                      <img :src="login_password" />
                    </template>
                    <template #suffix>
                      <img :src="login_eye_off" />
                    </template>
                  </el-input>
                  <div class="password-condition">
                    <div class="condition clearfloat">
                      <div class="satisfy-frame"></div>
                      <div class="satisfy">8-32 characters long</div>
                    </div>
                    <div class="condition clearfloat">
                      <div class="satisfy-frame"></div>
                      <div class="satisfy">1 lowercase character</div>
                    </div>
                    <div class="condition clearfloat">
                      <div class="satisfy-frame"></div>
                      <div class="satisfy">1 uppercase character</div>
                    </div>
                    <div class="condition clearfloat">
                      <div class="satisfy-frame"></div>
                      <div class="satisfy">1 number</div>
                    </div>
                    <div class="condition clearfloat">
                      <div class="satisfy-frame"></div>
                      <div class="satisfy">1 symbol</div>
                    </div>
                  </div>
                </div>
                <div class="sign-referral">
                  <el-input
                    v-model="optional"
                    placeholder="Referral code (optional)"
                  />
                </div>
                <div class="sign-agree clearfloat">
                  <div class="agree-frame"></div>
                  <div class="agreement">
                    I agree to <a href="" style="color: #01c19a">Terms</a> and
                    <a href="" style="color: #01c19a">policies </a>
                  </div>
                </div>
                <div class="sign-button">
                  <GetButton :text="text" />
                </div>
              </div>
            </div>
            <div v-if="activeSign === '2'" class="activeEmail">
              <el-input v-model="email" placeholder="Email">
                <template #prefix>
                  <img :src="login_email" />
                </template>
              </el-input>
            </div>
          </div>
        </div>
      </div>
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
import GetButton from "../../components/GetButton.vue";

//img
import login_password from "../../assets/home/login_password.svg";
import login_eye_off from "../../assets/home/login_eye_off.svg";
import login_email from "../../assets/home/login_email.svg";
import login_telegram from "../../assets/home/login_telegram.svg";
import login_google from "../../assets/home/login_google.svg";

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

const activeSign = ref("1");
const number = ref("");
const select = ref("+61");
const email = ref("");
const password = ref("");
const optional = ref("");
const agree = ref("");
const text = ref("Sign up");
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

.part {
  max-width: 1290px;
  margin: auto;
}
.convert-page {
  position: relative;
  .content-box {
    min-height: calc(100vh - 394px);
    align-items: center;
    .top-part {
      background: #1d262f;
      width: 100%;
      padding: 46px 0 68px 0;
      position: relative;
      display: flex;
      .top-part-box {
        margin: auto;
        text-align: center;
        width: 654px;
        @media (max-width: 769px) {
          & {
            padding: 0 5%;
          }
        }
        .top-part-title {
          font-size: $fontSizeMax;
          color: #01c19a;
          font-weight: 600;
          line-height: 51px;
          // @media (max-width: 769px) {
          //   & {
          //     font-size: $fontSizeMed !important;
          //   }
          // }
        }
        .top-part-content {
          font-size: $fontSizeMed;
          color: #ffffff;
          margin-top: 12px;
          line-height: 29px;
          @media (max-width: 769px) {
            & {
              font-size: $fontSizeDef !important;
              width: 70%;
              margin: auto;
            }
          }
        }
      }
    }
    .sign {
      max-width: 438px;
      flex: 1;
      margin: auto;
      background: #fff;
      box-shadow: 0 0 15px 0 rgba(95, 95, 95, 0.19);
      border-radius: 8px;
      @media (max-width: 768px) {
        border-radius: 0px;
      }
      .sign-radio {
        :deep() {
          .el-radio__inner {
            border-color: #dfdfe5;
            border-radius: 3px;
          }
          .el-radio__input.is-checked .el-radio__inner {
            background: #01c19a;
            border-color: #01c19a;
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
          .el-radio__inner::after {
            border-radius: 0px;
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
      .radio-content {
        padding: 30px 40px 40px 40px;

        .sign-password {
          margin-top: 17px;
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
        .sign-referral {
          margin-top: 14px;
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
        .sign-agree {
          margin-top: 26px;
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
        .sign-button {
          margin-top: 7px;
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
      }
    }
  }
}
</style>
