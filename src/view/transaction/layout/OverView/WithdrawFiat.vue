<template>
  <div class="deposit-crypto">
    <el-row >
      <el-col :span="15" :xs="24" class="left-box">
        <div class="left-header">
          <div class="header-title">{{ $t('messages.user_verify.account') }}</div>
          <!-- <router-link
              to="/wallet/WithdrawCrypto"
              style="text-decoration: none"
            >
              <div class="header-toFiat">
                <div class="toFiat">
                  Withdraw Crypto
                  <el-icon>
                    <Right />
                  </el-icon>
                </div>
              </div>
            </router-link> -->
        </div>
        <div class="left-center">
          <div class="center-step-box">
            <div v-if="withdrawStatus === false">
              <el-steps :active="activeStep" direction="vertical">
                <el-step :title="t('messages.user_verify.sell')" class="select">
                  <template #icon>
                    <el-icon v-if="!(validKycSell || validKycBuy)" size="20"><CircleClose /></el-icon>
                    <el-icon v-else size="20"><CircleCheckFilled /></el-icon>
                  </template>
                  <template #description>
                    <!-- v-if="activeStep >= 1" -->
                    <div class="sell-box">
                      <div class="sell-title">{{ $t('messages.user_verify.sell_title') }}</div>
                      <div class="sell-verified">
                        <div class="verified-name">
                          <el-icon class="icon" :style="{ color: (validKycSell || validKycBuy) ? '#01c19a' : '#f35854' }">
                            <Select  v-if="(validKycSell || validKycBuy)"/>
                            <CloseBold  v-else/>
                          </el-icon>
                          <div class="whether">{{ $t('messages.user_verify.sell_sell') }}</div>
                        </div>
                        <div class="verified-info">{{ $t('messages.user_verify.sell_un') }}</div>
                      </div>
<!--                      <div class="sell-verified">-->
<!--                        <div class="verified-name">-->
<!--                          <el-icon class="icon" :style="{ color: (validKycSell || validKycBuy) ? '#01c19a' : '#f35854' }">-->
<!--                            <Select  v-if="(validKycSell || validKycBuy)"/>-->
<!--                            <CloseBold  v-else/>-->
<!--                          </el-icon>-->
<!--                          <div class="whether">Buy crypto</div>-->
<!--                        </div>-->
<!--                        <div class="verified-info">50K USD Daily</div>-->
<!--                      </div>-->
                      <div
                        style="
                          height: 2px;
                          width: 100%;
                          background-color: #ebebeb;
                          margin-top: 24px !important;
                        "
                      ></div>
                      <div class="sell-requirement">{{ $t('messages.user_verify.sell_require') }}</div>
                      <div class="require-box">
                        <div class="require-item">
                          <div class="pointer"></div>
                          <span>{{ $t('messages.user_verify.sell_id') }}</span>
                        </div>
                        <div class="require-item">
                          <div class="pointer"></div>
                          <span>{{ $t('messages.user_verify.sell_broof') }}</span>
                        </div>
                        <div class="require-item">
                          <div class="pointer"></div>
                          <span>{{ $t('messages.user_verify.sell_video') }}</span>
                        </div>
                      </div>
<!--                      <el-button class="continue-btn" type="primary" @click="goToKyc('buy')">-->
<!--                        Verify-->
<!--                      </el-button>-->
                      <el-button
                          class="continue-btn"
                          type="primary"
                          @click="goToKyc('sell')"
                          :disabled="(validKycSell || validKycBuy)"
                      >
                        {{ (validKycSell || validKycBuy) ? $t('messages.user.Verification_verified') : $t('messages.user.Verification_Verify') }}
                      </el-button>
                    </div>
                  </template>
                </el-step>
                <el-step
                    :title="t('messages.user_verify.buy')"
                  class="clearfloat"
                  style="margin-top: 25px"
                >
                  <template #icon>
                    <el-icon v-if="!validKycBuy || validKycSell" size="20"><CircleClose /></el-icon>
                    <el-icon v-else size="20"><CircleCheckFilled /></el-icon>
                  </template>
                  <template #description>
                    <!-- v-if="activeStep === 2 || activeStep === 3" -->
                    <div class="sell-box clearfloat">
                      <div class="sell-title">{{ $t('messages.user_verify.sell_title') }}</div>
                      <div class="sell-verified">
                        <div class="verified-name">
                          <el-icon class="icon" :style="{ color: validKycBuy ? '#01c19a' : '#f35854' }">
                            <Select  v-if="validKycBuy"/>
                            <CloseBold  v-else/>
                          </el-icon>
                          <div class="whether">{{ $t('messages.user_verify.sell_sell') }}</div>
                        </div>
                        <div class="verified-info">{{ $t('messages.user_verify.sell_un') }}</div>
                      </div>
                      <div class="sell-verified">
                        <div class="verified-name">
                          <el-icon class="icon" :style="{ color: validKycBuy ? '#01c19a' : '#f35854' }">
                            <Select  v-if="validKycBuy"/>
                            <CloseBold  v-else/>
                          </el-icon>
                          <div class="whether">{{ $t('messages.user_verify.buy_buy') }}</div>
                        </div>
                        <div class="verified-info">{{ $t('messages.user_verify.sell_un') }}</div>
                      </div>
                      <div
                        style="
                          height: 2px;
                          width: 100%;
                          background-color: #ebebeb;
                          margin-top: 24px !important;
                        "
                      ></div>
                      <div class="sell-requirement">{{ $t('messages.user_verify.sell_require') }}</div>
                      <div class="require-box">
                        <div class="require-item">
                          <div class="pointer"></div>
                          <span>{{ $t('messages.user_verify.sell_id') }}</span>
                        </div>
                        <div class="require-item">
                          <div class="pointer"></div>
                          <span>{{ $t('messages.user_verify.sell_broof') }}</span>
                        </div>
                        <div class="require-item">
                          <div class="pointer"></div>
                          <span>{{ $t('messages.user_verify.sell_video') }}</span>
                        </div>
<!--                        <div class="require-item">-->
<!--                          <div class="pointer"></div>-->
<!--                          <span>Video verification</span>-->
<!--                        </div>-->
                      </div>

                      <el-button
                          class="verify-btn"
                          type="primary"
                          @click="goToKyc('buy')"
                          :disabled="validKycBuy"
                      >
                        {{ validKycBuy ?  $t('messages.user.Verification_verified') : $t('messages.user.Verification_Verify') }}
                      </el-button>
                    </div>
                  </template>
                </el-step>
              </el-steps>
            </div>

            <div v-else>
              <div class="success-box">
                <img :src="success_img" />
                <div class="success-title">Withdraw Successful</div>
                <div class="success-tip">
                  Withdrawal request submitted.<br />
                  Visit History to view your order status.
                </div>
                <div class="success-people">Recipient amount</div>
                <div class="success-account">
                  <img src="" />
                  999.00 USDT
                </div>
                <div class="detail-rules">
                  <div class="rule-item">
                    <div class="title">Bank account</div>
                    <div class="require">462*125</div>
                  </div>
                  <div class="rule-item">
                    <div class="title">Type</div>
                    <div class="require">Bank Transfer</div>
                  </div>
                  <div class="rule-item">
                    <div class="title">Transaction fees</div>
                    <div class="require">0.00 AUD</div>
                  </div>
                </div>
              </div>
              <el-divider style="width: 65%" />
              <div class="rate">Rate your experience</div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="9" :xs="24" class="right-box">
        <div class="tips">
          <div class="tips-faq">
            <div class="faq-title">{{ $t('messages.user_verify.faq') }}</div>
            <div class="faq-content content">
              <el-collapse v-model="faqActiveName" >
                <el-collapse-item
                  :title="t('messages.user_verify.faq_title1')"
                  name="1"
                >
                  <div class="faq-text">
                    {{ $t('messages.user_verify.faq_content') }}
                  </div>
                </el-collapse-item>
                <el-collapse-item
                    :title="t('messages.user_verify.faq_title2')"
                  name="2"
                  style="border-bottom: 0 !important;"
                >
                  <div class="faq-text" style="text-decoration: underline;cursor: pointer">
                    {{ $t('messages.user_verify.faq_how1') }}
                  </div>
                  <div class="faq-text" style="text-decoration: underline;cursor: pointer">
                    {{ $t('messages.user_verify.faq_how2') }}
                  </div>
                  <div class="faq-text" style="text-decoration: underline;cursor: pointer">
                    {{ $t('messages.user_verify.faq_how3') }}
                  </div>
                </el-collapse-item>
              </el-collapse>
              <div
                style="
                  text-align: right;
                  font-size: 14px;

                  margin-top: 10px;
                  margin-right: 20px;
                "
              >
                <span style="  cursor: pointer;color: #7b8293;">{{ $t('messages.user_verify.more') }} &gt;</span>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onUnmounted, onMounted, computed, watch } from "vue";
import type { Ref } from "vue";
import {
  Select,
  Right,
  CloseBold,
  Upload,
  Opportunity,
  Warning,
  CircleClose,
  CircleCheck,
  CircleCheckFilled,
} from "@element-plus/icons-vue";
import GetButton from "../../../../components/GetButton.vue";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import success_img from "../../../..//assets/deposit/Successful.png";
import crypto_icon_usdt from "../../../../assets/home/crypto_icon_usdt.png";
import Table from "../component/Table.vue";
import { useI18n } from "vue-i18n";
import { ElMessageBox } from "element-plus";
import {useUserInfoStore} from "../../../../store/user";
import {getProfile} from "../../../../api/user";
import {storeToRefs} from "pinia";
import { ElMessage } from 'element-plus';
import {useRouter} from "vue-router";
const router = useRouter();

const userInfoStore = useUserInfoStore();
const {userInfo,validKycBuy, validKycSell} = storeToRefs(userInfoStore);
const goToKyc = (type: string) => {
  if (userInfoStore.isLogin) {
    // console.log(userInfoStore.isLogin, '是否登陆')
    router.push({name: 'kyc', query: {type}})
  } else {
    router.push(`/signup?type=${type}`)
    // ('/signup')
  }
}
const inputValue = ref("");
const buttonText = "按钮文字";
function handleClick() {
  // 处理按钮点击事件
  console.log("按钮被点击");
}
const dialogVisible = ref(false);
const editVisible = ref(false);
const continueVisible = ref(false);
const innerVisible = ref(false);

const { t } = useI18n();
const noFound = ref(false);

const windowWidth = useWindowSize().width;
const activeStep = ref(2);
const selectedOption1 = ref("");
const selectedOption2 = ref("");
const canContinue = ref(false);
let options1 = [
  { value: "option1", label: "AUD" },
  { value: "option2", label: "NZD" },
];
let options2 = [
  { value: "optionA", label: "Polygon" },
  { value: "optionB", label: "Solana" },
  { value: "optionC", label: "Tezos" },
  { value: "optionD", label: "Tron(TRC20)" },
];
const coinAmount = ref("");
const faqActiveName = ref("1");
const showStepThree = ref(false);
const showContinueBtn = ref(true);
const withdrawStatus = ref(false);
function handleSubmit() {
  withdrawStatus.value = true;
  innerVisible.value = false;
}
function handleContinue() {
  if (activeStep.value === 1 && selectedOption1.value !== "") {
    activeStep.value = 2;
    options1 = options1.filter((o) => o.value === selectedOption1.value);
  } else if (activeStep.value === 2 && canContinue.value) {
    activeStep.value = 3;
    showStepThree.value = true;
    continueVisible.value = true;
  }
}
onMounted(() => {
  if (userInfoStore.isLogin) {
    getProfile().then((res) => {
      console.log("user info here -----!!!----", res.data.data);
      userInfoStore.updateUserInfo(res.data.data);
      console.log("--a--a-111", userInfo.value)
    });
  }
});
function updateCanContinue() {
  canContinue.value = selectedOption2.value !== null;
}
const tableData = ref([
  {
    time: "2023-04-20 20:22",
    coin: "USDT",
    icon: "crypto_icon_usdt",
    amount: "33399.567 USDT",
    status: "Successful",
    payment_method: "PayID/Osko",
    indicated_amount: "3800.00",
    TxID: "TXRLV…aAjr7",
    order_ID: "PAC23212232112121211",
    key: "1",
    network: "Tron(TRC20)",
    address: "Cf9044…104a5f",
    wallet: "Trading Wallet",
  },
  {
    time: "2023-04-20 20:22",
    coin: "USDT",
    amount: "33399.567 USDT",
    status: "Successful",
    payment_method: "PayID/Osko",
    indicated_amount: "3800.00",
    TxID: "TXRLV…aAjr7",
    order_ID: "PAC23212232112121211",
    key: "2",
    network: "Tron(TRC20)",
    address: "Cf9044…104a5f",
    wallet: "Trading Wallet",
  },
  {
    time: "2023-04-20 20:22",
    coin: "USDT",
    amount: "33399.567 USDT",
    status: "Successful",
    payment_method: "PayID/Osko",
    indicated_amount: "3800.00",
    TxID: "TXRLV…aAjr7",
    order_ID: "PAC23212232112121211",
    key: "3",
    network: "Tron(TRC20)",
    address: "Cf9044…104a5f",
    wallet: "Trading Wallet",
  },
]);
const isFoldArr = ref<string[]>([]);
const getKey = (key: string) => {
  let index = isFoldArr.value.indexOf(key);
  if (index >= 0) {
    isFoldArr.value.splice(index, 1);
  } else {
    isFoldArr.value.push(key);
  }
};
</script>

<style scoped lang="scss">
$fontColor: #878787;
$fontSizeMed: 26px;
$fontSizeDefPro: 20px;
$fontSizeDef: 16px;
$fontSizeMinPro: 14px;
$fontSizeMin: 12px;
.deposit-crypto {
  margin-top: 20px;
  @media (max-width: 768px) {
    & {
      padding-bottom: 0;
      margin-right: 0px !important;
    }
  }
  :deep() {
    .el-button.is-disabled,
    .el-button.is-disabled:focus,
    .el-button.is-disabled:hover {
      background-color: #f1f1f1;
      color: #cbcccf;
      border: none;
      font-size: 20px;
    }
    .el-button--primary {
      --el-button-hover-bg-color: #01c19a;
    }
    .el-step.is-vertical .el-step__title {
      font-size: 20px;
    }
    .el-step__title.is-finish {
      color: #000;
    }
    .el-step__title.is-process {
      font-weight: 500;
      color: #000;
    }
    .el-dialog__body {
      padding: 0;
    }
  }
}
.left-box {
  padding-right: 160px !important;
  @media (max-width: 991px) {
    & {
      padding-right: 30px !important;
    }
  }
  .left-header {
    display: flex;
    justify-content: space-between;
    .header-title {
      line-height: 32px;
      //font-weight: bold;
      font-size: 22px;
      color: #060606;
    }
    .header-toFiat {
      // width: 128px;
      padding: 0px 13px 11px 10px;
      height: 36px;
      background-color: #f7f7f7;
      color: #01c19a;
      border-radius: 8px;
      .toFiat {
        cursor: pointer;
        height: 36px;
        font-size: $fontSizeMinPro;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .sell-box {
    background-color: #f9f9f9;
    border-radius: 5px;
    margin-top: 16px;
    padding: 18px 22px 33px 24px;
    .sell-title {
      font-size: 18px;
      line-height: 25px;
    }
    .sell-verified {
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      margin-top: 23px;
      .verified-name {
        display: flex;
        .icon {
          margin-top: 4px;
        }
        .whether {
          margin-left: 10px;
          color: #878787;
        }
        .verified-info {
          line-height: 40px;
        }
      }
    }
    .sell-requirement {
      font-size: 18px;
      margin-top: 28px;
    }
    .require-box {
      margin-top: 24px;
      .require-item {
        font-size: 16px;
        line-height: 40px;
        display: flex;
        align-items: center;
        .pointer {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: 2px solid #9b9b9b;
        }
        span {
          margin-left: 14px;
        }
      }
    }
  }
  :deep() {
    .el-step__description.is-finish {
      color: #000;
      padding-right: 0;
    }
  }
  .left-center {
    .center-step-box {
      margin-top: 37px;
      :deep() {
        .el-step__line {
          border-left: 2px dashed var(--el-text-color-placeholder);
          border-image: repeating-linear-gradient(
              359deg,
              var(--el-text-color-placeholder) 0,
              var(--el-text-color-placeholder) 5px,
              transparent 0,
              transparent 10px
            )
            30 12;
          background-color: transparent;
          bottom: -27px;
          .el-step__line-inner {
            display: none;
          }
        }
      }
      .select {
        position: relative;
        :deep() {
          .el-select .el-input__wrapper {
            width: 442px;
            height: 48px;
          }
        }

        .enter-amount-tips {
          cursor: pointer;
          font-size: 14px;
          color: #878787;
          position: absolute;
          left: 260px;
          top: -40px;
        }
        .dialog-box {
          .dialog-header {
            font-weight: 500;
            size: 20px;
            color: #000000;
            line-height: 25px;
          }

          .suggest {
            text-align: center;
            font-size: 14px;
            color: #878787;
            line-height: 16px;
            margin-top: 24px;
          }
          .count-range {
            font-size: 20px;
            text-align: center;
            color: #01c19a;
            margin-top: 12px;
            line-height: 25px;
          }
          .requirements {
            background: #f7f7f7;
            border-radius: 8px;
            width: 367px;
            height: 67px;
            margin: 23px auto;
            align-items: center;
            padding: 13px 14px 14px 14px;
            .limit-icon {
              float: left;

              margin-top: 16px;
            }
            .limit-title {
              font-size: 12px;
              color: #878787;
              line-height: 15px;
              margin-left: 30px;
            }
            .limit-count {
              font-size: 16px;
              color: #000000;
              line-height: 19px;
              margin-left: 30px;
              margin-top: 10px;
            }
            .limit-sign {
              float: right;
              font-size: 12px;
              color: #878787;
              margin-top: -12px;
            }
          }
        }
        .enter-amount-rule {
          .available {
            padding: 10px 0 20px 0;
            .title {
              font-size: 14px;
              color: #878787;

              span {
                color: #01c19a;
              }
            }
          }
          .fait-rule-item {
            width: 442px;
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            color: #878787;
            margin-top: 15px;
            span {
              color: #000000;
              font-weight: 500;
            }
            .require {
              .edit-info {
                float: right;
                padding-left: 5px;
                text-decoration: underline;
                cursor: pointer;
                color: #01c19a;
              }
              .edit-dialog {
                .iamge {
                  text-align: center;
                  margin-top: 10px;
                }
                .delete {
                  font-size: 18px;
                  color: #000000;
                  line-height: 23px;
                  text-align: center;
                  padding: 16px 0 20px 0;
                }
                .content {
                  text-align: center;
                  font-size: 14px;
                  overflow-wrap: break-word;
                  color: #9b9b9b;
                  line-height: 16px;
                  padding: 0 30px 32px 30px;
                }
                .dialog-footer {
                  text-align: center;
                  .dialog-footer button:first-child {
                    margin-right: 10px;
                  }
                }
              }
              .pay-img {
                width: 20px;
                height: 20px;
                display: flex;
                float: left;
                margin-top: -5px;
                margin-right: 4px;
                img {
                  width: 100%;
                  height: 100%;
                  object-fit: contain;
                }
              }
            }
          }
          .receive-box {
            .receive {
              font-size: 16px;
              color: #000000;
              line-height: 18px;
            }
            .receive-count {
              font-size: 14px;
              color: #000000;
              margin-top: 12px;
              span {
                font-size: 28px;
                color: #000000;
                line-height: 34px;
                font-weight: 600;
              }
            }
          }
        }
        .continue-btn {
          width: 100%;
          height: 60px;
          font-size: 20px;
          @media (max-width: 992px) {
            & {
              height: 40px;
              margin-top: 10px;
            }
          }
        }
      }
      .verify-btn {
        width: 100%;
        height: 60px;
        font-size: 20px;
        @media (max-width: 992px) {
          & {
            height: 40px;
            margin-top: 10px;
          }
        }
      }
      .continue-dialog-box {
        .dialog-header {
          font-weight: 600;
        }
        .receive {
          font-size: 14px;
          color: #878787;
          text-align: center;
          margin-top: 24px;
        }
        .confirm-count {
          color: #01c19a;
          font-size: 32px;
          font-weight: 600;
          text-align: center;
          margin-top: 10px;
          span {
            font-size: 14px;
          }
        }
        .detail-rules {
          margin-top: 23px;
          background: #f7f7f7;
          border-radius: 8px;
          padding: 10px 17px;
          margin-left: 23px;
          margin-right: 23px;
          .rule-item {
            display: flex;
            justify-content: space-between;
            .title {
              font-size: $fontSizeMinPro;
              color: #878787;
              line-height: 32px;
            }
            .require {
              font-size: $fontSizeMinPro;
              color: #000000;
              line-height: 32px;
            }
          }
        }
      }
      .deposit-details {
        // position: relative;
        .detail-box {
          margin-top: -90px;
          .detail-box-tips {
            margin-top: 10px;
            background: #fef9e0;
            border-radius: 4px;
            width: 443px;
            padding: 14px 4px 8px 13px;
            font-size: 12px;
            color: #878787;
            line-height: 16px;
            span {
              color: #01c19a;
              text-decoration-line: underline;
              cursor: pointer;
            }
          }

          .detail-card {
            margin-top: 23px;
            width: 443px;
            background: #f7f7f7;
            border-radius: 4px;
            padding: 10px 17px;
            .card-item {
              display: flex;
              justify-content: space-between;
              padding-bottom: 14px;
              .item-title {
                font-size: 14px;
                color: #000000;
                line-height: 17px;
                display: flex;
                align-items: center;
                span {
                  padding-left: 12px;
                  font-weight: 600;
                }
                .item-title-img {
                  width: 26px;
                  height: 26px;
                  img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                  }
                }
              }
              .item-count {
                font-size: 22px;
                color: #000000;
                line-height: 27px;
              }
            }
            .card-divider {
              width: 100%;
              height: 1px;
              background-color: #ebebeb;
            }
            .card-info {
              padding-top: 13px;
              .title {
                font-size: 12px;
                color: #878787;
              }
            }
            .indo-detail {
              padding: 13px 15px 17px 0px;
              .title {
                font-size: 14px;
                color: #000000;
                float: left;
              }
              .copy {
                font-size: 12px;
                color: #000000;
                float: right;
              }
            }
          }
        }
      }
    }
    .divider {
      height: 1px;
      width: 100%;
      background-color: #dfdfe5;
    }
  }
}
.recent-deposit {
  font-size: 26px;
  color: #000000;
  line-height: 32px;
  font-weight: 500;
  margin-top: 280px;
  .not-arrive {
    float: right;

    font-size: 14px;
    color: #9b9b9b;
    line-height: 16px;
    text-decoration: underline #9b9b9b;
  }
}
.right-box {
  margin-top: 75px;
  @media (max-width: 768px) {
    & {
      margin-top: 60px;
    }
  }
  :deep(.el-collapse-item__header){
    font-size: 18px;
    color: #000;
    line-height: 25px;
    margin-top: 12px;
  }
  .tips {
    .tips-faq {
      .faq-title {
        font-size: 20px;
        color: #000000;
        line-height: 25px;
        font-weight: 500;
      }
      :deep() {
        .el-divider--horizontal {
          margin: 18px 0;
        }
      }
      .faq-content {
        font-size: 16px;
        color: #878787;
        letter-spacing: 0;
        line-height: 18px;
        margin-top: 17px;
        span {
          color: #01c19a;
          font-size: 16px;

        }
        .faq-text {
          color: #878787;
          font-size: 16px;
          padding-right: 60px;
          margin-top: 10px;
        }
      }
    }
  }
}
.inner-dialog {
  .divider {
    width: 100%;
    height: 1px;
    background-color: #ebebeb;
    margin-top: -20px;
  }
  .receive {
    margin-top: 21px;
    font-size: 13px;
    color: #878787;
    line-height: 32px;
  }
  .identify-box {
    .func-text {
      font-size: 14px;
      color: #878787;
      line-height: 32px;
      margin-top: 14px;
    }
    .container {
      position: relative;
      .container-input {
        width: 100%;
        height: 48px;
        border-radius: 4px;
        border: 1px solid #dfdfe5;
        margin-top: 5px;
      }
      .send-btn {
        position: absolute;
        right: 15px;
        top: 20px;
        color: #01c19a;
      }
    }
  }
}
.security {
  font-size: 14px;
  color: #01c19a;
  text-align: center;
  margin-top: 18px;
}
.submit-btn {
  height: 48px;
  margin-top: 8px;
  width: 100%;
  background-color: #01c19a;
  font-size: 18px;
  color: #fff;
  line-height: 23px;
}
.step-input {
  position: relative;
  margin-top: 18px;
  .input {
    width: 442px;
    height: 48px;
  }
  .label {
    position: absolute;
    left: 400px;
    top: 15px;
    color: #9b9b9b;
  }
}
.success-box {
  width: 65%;
  text-align: center;
  .success-title {
    margin-top: 25px;
    font-size: 28px;
    color: #000000;
    font-weight: bold;
  }
  .success-tip {
    font-size: 16px;
    color: #878787;
    margin-top: 10px;
  }
  .success-people {
    font-size: 16px;
    color: #878787;
    margin-top: 17px;
  }
  .success-account {
    font-size: 22px;
    color: #000000;
    line-height: 27px;
    font-weight: bold;
    margin-top: 10px;
  }
  .rate {
    font-size: 18px;
    color: #000000;
    line-height: 23px;
    width: 65%;
    text-align: center;
  }
  .detail-rules {
    background: #f7f7f7;
    border-radius: 5px;
    padding: 12px 19px;
    margin-top: 18px;
    .rule-item {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      gap: 30px;
      .title {
        color: #878787;
      }
    }
  }
}
:deep(.el-step.is-vertical .el-step__icon.is-icon){
  color: #000 !important;
}
:deep(.el-step__line){
  border-left: none !important;
}
</style>
