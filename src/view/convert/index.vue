<template>
  <div class="convert-page">
    <Header />
    <div class="convert-content">
      <div class="top-part">
        <div class="top-part-box">
          <div class="top-part-title">Convert</div>
          <div class="top-part-content">
            Top stablecoins 1:1 convert with 0 slippage
          </div>
        </div>
      </div>
      <div class="center-part">
        <div class="center-convert">
          <div class="convert-radio">
            <el-radio-group v-model="activeSign">
              <el-radio-button
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
              </el-radio-button>
            </el-radio-group>
            <div v-if="activeSign === '1'" class="convert-crypto">
              <div class="radio-content">
                <div class="pre-input">
                  <div class="input-title">You pay</div>
                  <el-input
                    v-model="numberCrypto"
                    placeholder="pay"
                    class="change-count clearfloat"
                  >
                    <template #append>
                      <div class="option-icon">
                        <img :src="part01_BTC" />
                      </div>
                      <el-select
                        v-model="firstSelect"
                        placeholder="Select"
                        style="width: 97px"
                      >
                        <el-option label="BTC" value="3">
                          <div
                            style="
                              width: 20px;
                              display: flex;
                              align-items: center;
                              font-size: 14px !important;
                              color: #000;
                              margin-left: -5px;
                            "
                          >
                            <img
                              :src="part01_BTC"
                              style="
                                width: 100%;
                                height: 100%;
                                margin-right: 5px;
                              "
                            />
                            BTC
                          </div>
                        </el-option>
                        <el-option label="BTC" value="3">
                          <div
                            style="
                              width: 20px;
                              display: flex;
                              align-items: center;
                              font-size: 14px !important;
                              color: #000;
                              margin-left: -5px;
                            "
                          >
                            <img
                              :src="part01_BTC"
                              style="
                                width: 100%;
                                height: 100%;
                                margin-right: 5px;
                              "
                            />
                            BTC
                          </div>
                        </el-option>
                      </el-select>
                    </template>
                  </el-input>
                  <div class="input-tip">
                    Max
                    <el-divider direction="vertical" style="height: 22px" />
                  </div>
                  <div class="convert-tip">
                    <div class="tip-left">
                      Available: 0.01 BTC <span>Insufficient</span>
                    </div>
                    <div class="tip-right">
                      <a href="/" style="color: #01c19a">Deposit</a>
                    </div>
                  </div>
                </div>
                <div class="exchange-icon">
                  <!-- 中间转换图片 -->
                  <img :src="crypto_buy" />
                </div>
                <div class="pro-input">
                  <div class="input-second-title">You Receive</div>
                  <el-input
                    v-model="countCrypto"
                    placeholder="pay"
                    class="change-count clearfloat"
                  >
                    <template #append>
                      <div class="option-icon">
                        <img :src="crypto_icon_usdt" />
                      </div>
                      <el-select
                        v-model="secondSelect"
                        placeholder="Select"
                        style="width: 97px"
                      >
                        <el-option label="USDT" value="3">
                          <div
                            style="
                              width: 20px;
                              display: flex;
                              align-items: center;
                              font-size: 14px !important;
                              color: #000;
                              margin-left: -5px;
                            "
                          >
                            <img
                              :src="part01_BTC"
                              style="
                                width: 100%;
                                height: 100%;
                                margin-right: 5px;
                              "
                            />
                            BTC
                          </div>
                        </el-option>
                        <el-option label="BTC" value="3">
                          <div
                            style="
                              width: 20px;
                              display: flex;
                              align-items: center;
                              font-size: 14px !important;
                              color: #000;
                              margin-left: -5px;
                            "
                          >
                            <img
                              :src="part01_BTC"
                              style="
                                width: 100%;
                                height: 100%;
                                margin-right: 5px;
                              "
                            />
                            BTC
                          </div>
                        </el-option>
                      </el-select>
                    </template>
                  </el-input>
                  <div class="input-split">
                    <el-divider direction="vertical" style="height: 22px" />
                  </div>
                  <div class="convert-tip">
                    <div class="tip-left" style="display: flex">
                      Estimated : 1 USDT ≈ 0.00004646 BTC
                      <div style="margin-left: 8px">
                        <img :src="buy_info" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="convert-button">
                  <GetButton :text="text" />
                </div>
              </div>
            </div>
            <div v-if="activeSign === '2'" class="convert-stable">
              <div class="radio-content">
                <div class="pre-input">
                  <div class="input-title">You pay</div>
                  <el-input
                    v-model="numberStable"
                    placeholder="pay"
                    class="change-count clearfloat"
                  >
                    <template #append>
                      <div class="option-icon">
                        <img :src="crypto_icon_usdt" />
                      </div>
                      <el-select
                        v-model="secondSelect"
                        placeholder="Select"
                        style="width: 97px"
                      >
                        <el-option label="BTC" value="3">
                          <div
                            style="
                              width: 20px;
                              display: flex;
                              align-items: center;
                              font-size: 14px !important;
                              color: #000;
                              margin-left: -5px;
                            "
                          >
                            <img
                              :src="part01_BTC"
                              style="
                                width: 100%;
                                height: 100%;
                                margin-right: 5px;
                              "
                            />
                            BTC
                          </div>
                        </el-option>
                        <el-option label="BTC" value="3">
                          <div
                            style="
                              width: 20px;
                              display: flex;
                              align-items: center;
                              font-size: 14px !important;
                              color: #000;
                              margin-left: -5px;
                            "
                          >
                            <img
                              :src="part01_BTC"
                              style="
                                width: 100%;
                                height: 100%;
                                margin-right: 5px;
                              "
                            />
                            BTC
                          </div>
                        </el-option>
                      </el-select>
                    </template>
                  </el-input>
                  <div class="input-tip">
                    Max
                    <el-divider direction="vertical" style="height: 22px" />
                  </div>
                  <div class="convert-tip">
                    <div class="tip-left">
                      Available: 2 USDT <span>Insufficient</span>
                    </div>
                    <div class="tip-right">
                      <a href="/" style="color: #01c19a">Deposit</a>
                    </div>
                  </div>
                </div>
                <div class="exchange-icon">
                  <!-- 中间转换图片 -->
                  <img :src="crypto_buy" />
                </div>
                <div class="pro-input">
                  <div class="input-second-title">You Receive</div>
                  <el-input
                    v-model="countStable"
                    placeholder="pay"
                    class="change-count clearfloat"
                  >
                    <template #append>
                      <div class="option-icon">
                        <img :src="crypto_icon_usdc" />
                      </div>
                      <el-select
                        v-model="thirdSelect"
                        placeholder="Select"
                        style="width: 97px"
                      >
                        <el-option label="USDT" value="3">
                          <div
                            style="
                              width: 20px;
                              display: flex;
                              align-items: center;
                              font-size: 14px !important;
                              color: #000;
                              margin-left: -5px;
                            "
                          >
                            <img
                              :src="part01_BTC"
                              style="
                                width: 100%;
                                height: 100%;
                                margin-right: 5px;
                              "
                            />
                            BTC
                          </div>
                        </el-option>
                        <el-option label="BTC" value="3">
                          <div
                            style="
                              width: 20px;
                              display: flex;
                              align-items: center;
                              font-size: 14px !important;
                              color: #000;
                              margin-left: -5px;
                            "
                          >
                            <img
                              :src="part01_BTC"
                              style="
                                width: 100%;
                                height: 100%;
                                margin-right: 5px;
                              "
                            />
                            BTC
                          </div>
                        </el-option>
                      </el-select>
                    </template>
                  </el-input>
                  <div class="input-split">
                    <el-divider direction="vertical" style="height: 22px" />
                  </div>
                  <div class="convert-tip">
                    <div class="tip-left" style="display: flex">
                      Estimated : 1 USDC ≈ 0.9998 USDT
                      <div style="margin-left: 8px">
                        <img :src="buy_info" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="convert-button">
                  <GetButton :text="text" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="center-service">
          <div class="service">
            <div class="service-icon">
              <img :src="convert_icon01" />
            </div>
            <div class="service-msg">Zero fees</div>
          </div>
          <div class="service">
            <div class="service-icon">
              <img :src="convert_icon02" />
            </div>
            <div class="service-msg">No slippage</div>
          </div>
          <div class="service">
            <div class="service-icon">
              <img :src="convert_icon03" />
            </div>
            <div class="service-msg">More pairs</div>
          </div>
        </div>
        <div class="center-faq">
          <faq></faq>
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
import faq from "../../layout/FAQ/faq.vue";

//img
import convert_icon01 from "../../assets/home/convert_icon01.png";
import convert_icon02 from "../../assets/home/convert_icon02.png";
import convert_icon03 from "../../assets/home/convert_icon03.png";
import part01_BTC from "../../assets/home/part01_BTC.png";
import crypto_icon_usdt from "../../assets/home/crypto_icon_usdt.png";
import crypto_icon_usdc from "../../assets/home/crypto_icon_usdc.png";
import crypto_buy from "../../assets/home/crypto_buy.png";
import buy_info from "../../assets/home/buy_info.svg";

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
const numberCrypto = ref("0.01");
const numberStable = ref("1");
const countCrypto = ref("214.2958");
const countStable = ref("1.0002");
const firstSelect = ref("BTC");
const secondSelect = ref("USDT");
const thirdSelect = ref("USDC");
const select = ref("BTC");
const text = ref("Convert");
const options = ref([
  {
    value: "1",
    label: "Crypto",
  },
  {
    value: "2",
    label: "Stablecoins",
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
  .convert-content {
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
            }
          }
        }
      }
    }
    .center-part {
      padding-top: 48px;
      padding-bottom: 90px;
      .center-convert {
        max-width: 618px;
        flex: 1;
        margin: auto;
        background: #fff;
        box-shadow: 0 0 15px 0 rgba(95, 95, 95, 0.19);
        border-radius: 8px;
        @media (max-width: 768px) {
          border-radius: 0px;
        }
        .convert-radio {
          :deep() {
            .el-radio-group {
              width: 100%;
            }
            .el-radio-button {
              width: 50%;
            }
            .el-radio-button__inner {
              font-size: 18px;
              line-height: 23px;
              color: #878787;
              font-weight: 600;
              background-color: #f1f4f5;
              border: none;
              height: 50px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .el-radio-button:first-child .el-radio-button__inner {
              background: #fff;
            }
            .el-radio-button:last-child .el-radio-button__inner {
              border-radius: 0 0 0 8px;
            }
            .el-radio-button__original-radio:checked + .el-radio-button__inner {
              color: #000 !important;
              box-shadow: none;
              // background: #fff;
            }
          }
          .el-radio {
            height: 50px;
            border-radius: 4px;
            padding: 15px;
            background: #f1f4f5;
          }

          .change-count {
            position: relative;
            // border: 1px solid #DFDFE5;
            // border-radius: 8px;
            .option-icon {
              position: absolute;
              left: -18px;
              top: 18px;
              width: 24px;
              z-index: 999;
              img {
                width: 100%;
                height: 100%;
                object-fit: contain;
              }
            }
            :deep() {
              .el-input__inner {
                font-size: 22px;
                line-height: 27px;
                color: #000;
                font-weight: 600;
              }
              .el-select .el-input__inner {
                font-size: 18px !important;
                line-height: 23px !important;
                margin-top: 0;
                font-weight: 500 !important;
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
              height: 60px;
              border-radius: 4px;
              --el-input-focus-border-color: none;
              --el-input-hover-border-color: none;
              box-shadow: none;
              padding-left: 12px !important;
            }
            .el-input__inner {
              font-size: $fontSizeMinPro;
              color: #c4c9d0;
              line-height: 16px;
            }
          }

          .convert-tip {
            display: flex;
            justify-content: space-between;
            margin-top: 9px;

            .tip-left {
              font-size: $fontSizeMin;
              color: #878787;
              line-height: 14px;
              span {
                color: #f15958;
              }
            }
            .tip-right {
              font-size: $fontSizeMin;
            }
          }
        }
      }
      .convert-stable {
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
      .radio-content {
        padding: 32px 40px 40px 40px;
        position: relative;

        :deep() {
          .el-input__inner {
            margin-top: 18px;
          }
          .el-select .el-input .el-select__caret {
            color: #1f2832;
          }
          .el-input-group--append > .el-input__wrapper {
            border-radius: 8px 0 0 8px !important;
            border-right: none !important;
          }
          .el-input-group__append,
          .el-input-group__prepend {
            background-color: none;
          }
          .el-input-group--append
            .el-input-group__append
            .el-select
            .el-input
            .el-input__wrapper {
            border-left: none !important;
            border-radius: 0 8px 8px 0 !important;
          }
        }

        .input-title {
          position: absolute;
          top: 40px;
          left: 52px;
          z-index: 1;
          color: #878787;
          font-size: $fontSizeMin;
        }
        .input-tip {
          position: absolute;
          top: 50px;
          right: 178px;
          z-index: 1;
          color: #f15958;
          font-size: $fontSizeMin;
          :deep(.el-divider--vertical) {
            margin: 0 10px;
          }
        }
        .input-split {
          position: absolute;
          top: 20px;
          right: 138px;
          z-index: 1;
          :deep(.el-divider--vertical) {
            margin: 0 10px;
          }
        }
        .exchange-icon {
          margin-top: 6px !important;
          margin: auto;
          width: 16px;
          height: 16px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .pro-input {
          margin-top: 12px;
          position: relative;

          .input-second-title {
            position: absolute;
            top: 8px;
            left: 12px;
            z-index: 1;
            color: #878787;
            font-size: $fontSizeMin;
          }
        }

        .convert-button {
          margin-top: 20px;
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
      .center-service {
        max-width: 618px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        margin-top: 83px;
        padding: 0 20px;
        .service {
          .service-icon {
            text-align: center;
            img {
              width: 73px;
              height: auto;
              object-fit: contain;
            }
          }

          .service-msg {
            line-height: 25px;
            font-size: 20px;
            color: #060606;
            margin-top: 12px;
          }
        }
      }
      .center-faq {
        margin-top: 102px;
        @media (max-width: 1000px) {
          margin-top: 60px;
        }
      }
    }
  }
}
</style>
