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
                <el-input
                  v-model="number"
                  placeholder="Mobile number"
                  class="input-with-select"
                >
                  <template #append>
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

                <div class="convert-button">
                  <GetButton :text="text" />
                </div>
              </div>
            </div>
            <div v-if="activeSign === '2'" class="convert-stable">
              <el-input v-model="email" placeholder="Email">
                <template #prefix>
                  <img :src="login_email" />
                </template>
              </el-input>
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
import login_email from "../../assets/home/login_email.svg";

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
      padding-bottom: 50px;
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
            .el-radio-group{
              width: 618px;
            }
            .el-radio-button{
              width: 50%;
            }
            .el-radio-button__inner {
              font-size: 18px;
              line-height: 23px;
              color: #878787;
              background-color: #f1f4f5;
              border: none;
              height: 50px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .el-radio-button:first-child .el-radio-button__inner{
              background: #fff;
            }
            .el-radio-button:last-child .el-radio-button__inner{
              border-radius: 0 8px 0 8px;
            }
            .el-radio-button__original-radio:checked+.el-radio-button__inner{
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
          .convert-crypto {
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
                height: 60px;
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
          .convert-stable {
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

          .convert-button {
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
