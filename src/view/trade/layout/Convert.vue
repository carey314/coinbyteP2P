<template>
  <div class="convert-page">
    <div class="convert-content">
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
              <div class="quick-amount">
                <div class="quick-amount-title">How much ?</div>
                <div class="quick-amount-part">
                  <div class="amount">$500</div>
                  <div class="amount">$1000</div>
                  <div class="amount">$5000</div>
                  <div class="amount">$10,000</div>
                </div>
              </div>
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
                    placeholder="receive"
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
              <div class="quick-amount">
                <div class="quick-amount-title">How much ?</div>
                <div class="quick-amount-part">
                  <div class="amount">$500</div>
                  <div class="amount">$1000</div>
                  <div class="amount">$5000</div>
                  <div class="amount">$10,000</div>
                </div>
              </div>
              <div class="radio-content">
                <div class="pre-input">
                  <div class="input-title">You pay</div>
                  <el-input
                    v-model="numberStable"
                    placeholder="pay"
                    class="change-count clearfloat"
                    type="number"
                  >
                    <template #append>
                      <div class="option-icon">
                        <img :src="crypto_icon_usdt" />
                      </div>
                      <el-select
                        v-model="secondSelect"
                        placeholder="Select"
                        style="width: 97px"
                        @change="handleCoinsChange"
                      >
                        <template v-for="item in stableCoinsOptions">
                          <el-option
                            :label="item.alphabeticCode"
                            :value="item.alphabeticCode"
                          >
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
                              {{ item.alphabeticCode }}
                            </div>
                          </el-option>
                        </template>
                      </el-select>
                    </template>
                  </el-input>
                  <div class="input-tip">
                    Max
                    <el-divider direction="vertical" style="height: 22px" />
                  </div>
                  <div class="convert-tip">
                    <div class="tip-left">
                      Available: {{ availableAmount }} {{ secondSelect }}
                      <span>Insufficient</span>
                    </div>
                    <div class="tip-right">
                      <a href="/" style="color: #01c19a">Deposit</a>
                    </div>
                  </div>
                </div>
                <template v-if="stableCoinsToOptions.length > 0">
                  <div class="exchange-icon">
                    <!-- 中间转换图片 -->
                    <img :src="crypto_buy" />
                  </div>
                  <div class="pro-input">
                    <div class="input-second-title">You Receive</div>
                    <el-input
                      v-model="countStable"
                      placeholder="Receive"
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
                          @change="handleSetRate"
                        >
                          <template v-for="item in stableCoinsToOptions">
                            <el-option
                              :label="item.alphabeticCode"
                              :value="item.alphabeticCode"
                            >
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
                                {{ item.alphabeticCode }}
                              </div>
                            </el-option>
                          </template>
                        </el-select>
                      </template>
                    </el-input>
                    <div class="input-split">
                      <el-divider direction="vertical" style="height: 22px" />
                    </div>
                    <div class="convert-tip">
                      <div class="tip-left" style="display: flex">
                        <template
                          v-if="currentPair && currentPair.rate && thirdSelect"
                        >
                          Estimated : 1 {{ secondSelect }} ≈
                          {{
                            parseFloat(currentPair.rate).toFixed(
                              currentPair ? currentPair.minorUnit : 0
                            )
                          }}
                          {{ thirdSelect }}
                        </template>
                        <template v-else>
                          Estimated : This is the exchange message !
                        </template>
                        <div style="margin-left: 8px">
                          <img :src="buy_info" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="convert-button">
                    <GetButton :text="text" @click="handleToConvert" />
                  </div>
                </template>
                <template v-else>
                  <div style="margin-top: 20px">
                    <h4 style="font-size: 18px; line-height: 35px">
                      Exchange is not available
                    </h4>
                    <p>Please, select another currency</p>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted, computed } from "vue";
import type { Ref } from "vue";
import GetButton from "../../../components/GetButton.vue";

//img
import convert_icon01 from "../../../assets/home/convert_icon01.png";
import convert_icon02 from "../../../assets/home/convert_icon02.png";
import convert_icon03 from "../../../assets/home/convert_icon03.png";
import part01_BTC from "../../../assets/home/part01_BTC.png";
import crypto_icon_usdt from "../../../assets/home/crypto_icon_usdt.png";
import crypto_icon_usdc from "../../../assets/home/crypto_icon_usdc.png";
import crypto_buy from "../../../assets/home/crypto_buy.png";
import buy_info from "../../../assets/home/buy_info.svg";

import { getMyAssets } from "../../../api/wallet";
import {
  getBaseCurrency,
  getExchangeRateForCurrencyPair,
  exchangeCurrencies,
} from "../../../api/converts";

import type {
  StableCoinsToOptions,
  CurrentPair,
} from "../../../models/convert";
import _ from "lodash";

import type { AssetsData } from "../../../models/assets";

const activeSign = ref("1");
const numberCrypto = ref("0.01");
const numberStable = ref();

const countCrypto = ref("214.2958");
// const countStable = ref("1.0002");
const firstSelect = ref("BTC");
const secondSelect = ref("");
const thirdSelect = ref("");
const text = ref("Buy Bitcoin");
const options = ref([
  {
    value: "1",
    label: "Buy",
  },
  {
    value: "2",
    label: "Sell",
  },
]);
//get rates

const assetsData = ref<AssetsData[]>([]);
onMounted(() => {
  getMyAssets().then((res) => {
    console.log(res.data.data);
    if (res.data.data) {
      assetsData.value = res.data.data.map((v: any) => {
        return {
          currency: v.currency.name,
          balance: v.statement.availableBalance,
          alphabeticCode: v.currency.alphabeticCode,
          caption: v.caption,
          accountNumber: v.accountNumber,
          accountId: v.accountId,
          group: v.group.name,
          minorUnit: v.currency.minorUnit,
        };
      });
      console.log(assetsData.value);
    }
  });
});
// witch fiat || crypto || stablecoins
const fiatOptions = computed(() => {
  if (assetsData.value.length > 0) {
    return assetsData.value.filter((v) => v.group === "Fiat");
  } else {
    return [];
  }
});
const cryptoOptions = computed(() => {
  if (assetsData.value.length > 0) {
    return assetsData.value.filter((v) => v.group === "Crypto");
  } else {
    return [];
  }
});
const stableCoinsOptions = computed(() => {
  if (assetsData.value.length > 0) {
    return assetsData.value.filter((v) => v.group === "Stablecoins");
  } else {
    return [];
  }
});
const stableCoinsToOptions = ref<StableCoinsToOptions[]>([]);
const handleCoinsChange = () => {
  console.log(secondSelect.value);
  getBaseCurrency(secondSelect.value).then((res) => {
    console.log(res.data);
    stableCoinsToOptions.value = res.data.data.map((v: any) => {
      return {
        currency: v.currency.name,
        alphabeticCode: v.currency.alphabeticCode,
        minorUnit: v.currency.minorUnit,
        maxAmount: v.maxAmount,
        quoteId: v.quoteId,
        rate: v.rate,
      };
    });
  });
};
const currentPair = ref<CurrentPair>();
const handleSetRate = () => {
  getExchangeRateForCurrencyPair(secondSelect.value, thirdSelect.value).then(
    (res) => {
      console.log(res.data);
      // currentPair.value = res.data.data;
      let newData = _.cloneDeep(res.data);
      let newObj = {
        currency: newData.currency.name,
        alphabeticCode: newData.currency.alphabeticCode,
        numericCode: newData.currency.numericCode,
        maxAmount: newData.maxAmount,
        quoteId: newData.quoteId,
        rate: newData.rate,
        minorUnit: newData.currency.minorUnit,
      };
      currentPair.value = newObj;
    }
  );
};
const countStable = computed(() => {
  if (numberStable.value && currentPair.value && currentPair.value.rate) {
    return parseFloat(numberStable.value) * parseFloat(currentPair.value.rate);
  } else {
    return null;
  }
});
const availableAmount = computed(() => {
  if (secondSelect.value && stableCoinsOptions.value.length > 0) {
    let selectOption = stableCoinsOptions.value.find(
      (v) => v.alphabeticCode === secondSelect.value
    );
    if (selectOption) {
      return parseFloat(selectOption.balance).toFixed(selectOption.minorUnit);
    } else {
      return null;
    }
  }
});
const handleToConvert = () => {
  if (numberStable.value) {
    let fromObj = stableCoinsOptions.value.find(
      (v) => v.alphabeticCode === secondSelect.value
    );
    let toObj = assetsData.value.find(
      (v) => v.alphabeticCode === thirdSelect.value
    );
    if (fromObj && toObj && currentPair.value) {
      let exchangeData = {
        amount: numberStable.value as string,
        destinationAccountId: parseInt(toObj.accountId),
        quoteId: currentPair.value.quoteId as string,
        sourceAccountId: parseInt(fromObj.accountId),
      };
      console.log(exchangeData);
      exchangeCurrencies(exchangeData).then((res) => {
        console.log(res.data);
      });
    }
  }
};
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

      @media (max-width: 769px) {
        padding-top: 10px;
      }
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
              background: #f1f4f5;
              border-radius: 8px 0;
            }
            .el-radio-button:last-child .el-radio-button__inner {
              border-radius: 0 0 0 8px;
            }
            .el-radio-button__original-radio:checked + .el-radio-button__inner {
              color: #000 !important;
              box-shadow: none;
              border-radius: 0 8px 0 0;
              background: #fff;
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
      .quick-amount{
        padding: 26px 25px 0px 25px;
        .quick-amount-title{
          font-size: $fontSizeMinPro;
          color: #878787;
          text-align: center;
        }
        .quick-amount-part{
          margin-top: 18px;
          display: flex;
          justify-content: space-between;
          .amount{
            padding: 8px 15px 7px 15px;
            height: 32px;
            background: #F1F4F5;
            border-radius: 6px;
            font-size: $fontSizeMinPro;
            color: #878787;
            display: flex;
            justify-content: center;
            align-items: center;
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
          right: 168px;
          z-index: 1;
          color: #f15958;
          font-size: $fontSizeMin;
          :deep(.el-divider--vertical) {
            margin: 0 10px;
          }
          @media (max-width: 769px) {
            & {
              right: 160px;
            }
          }
        }
        .input-split {
          position: absolute;
          top: 20px;
          right: 128px;
          z-index: 1;
          :deep(.el-divider--vertical) {
            margin: 0 10px;
          }
          @media (max-width: 769px) {
            & {
              right: 120px;
            }
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
              @media (max-width: 769px) {
                width: 63px;
              }
            }
          }

          .service-msg {
            line-height: 25px;
            font-size: 20px;
            color: #060606;
            margin-top: 12px;
            @media (max-width: 769px) {
              font-size: 16px;
            }
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
