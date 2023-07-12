<template>
  <div class="deposit-crypto">
    <div v-if="windowWidth > 985">
      <el-row :gutter="80">
        <el-col :span="15" class="left-box">
          <div class="left-header">
            <div class="header-title">Withdraw Fiat</div>
            <router-link
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
            </router-link>
          </div>
          <div class="left-center">
            <div class="center-step-box" style="height: 300px">
              <div>
                <el-steps
                  :active="activeStep"
                  direction="vertical"
                  style="height: 400px"
                  align-center
                  space="100%"
                >
                  <el-step title="Select currency"></el-step>
                  <el-step title="Enter Amount"></el-step>
                  <el-step
                    v-if="showStepThree"
                    title="Transfer Money to Proceed With the Order"
                  ></el-step>
                </el-steps>
              </div>
              <div v-if="activeStep >= 1" class="select">
                <el-select
                  class="select-first"
                  v-model="selectedOption1"
                  placeholder="Select currency"
                  @change="handleContinue"
                >
                  <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
              <div
                v-if="activeStep === 2"
                class="select clearfloat"
                style="position: relative"
              >
                <div class="enter-amount-tips" @click="dialogVisible = true">
                  <el-icon><Warning /></el-icon> Transaction requirements
                </div>
                <el-dialog
                  v-model="dialogVisible"
                  class="dialog-box"
                  width="30%"
                  style="padding-bottom: 36px"
                >
                  <template #header>
                    <div class="dialog-header">Transaction requirements</div>
                  </template>
                  <div class="divider"></div>
                  <div class="suggest">Suggested Amount</div>

                  <div class="count-range">A$50-2,000,000</div>
                  <div class="limit requirements">
                    <div class="limit-icon">
                      <el-icon><Switch /></el-icon>
                    </div>
                    <div class="limit-title">Limit per transaction</div>
                    <div class="limit-count">A$50-1,000,000,000</div>
                  </div>
                  <div class="remain requirements clearfloat">
                    <div class="limit-icon">
                      <el-icon><Clock /></el-icon>
                    </div>
                    <div class="limit-title">Remaining daily limit</div>
                    <div class="limit-count">A$2,000,000</div>
                    <div class="limit-sign">/A$2M</div>
                  </div>
                </el-dialog>
                <el-select
                  class="select-second"
                  v-model="selectedOption2"
                  placeholder="0"
                  @change="updateCanContinue"
                >
                  <el-option
                    v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <div class="enter-amount-rule">
                  <div class="available">
                    <div class="title">
                      Available: <span>531.6517381 AUD</span>
                    </div>
                  </div>
                  <div
                    class="divider"
                    style="margin-left: 35px; width: 92%"
                  ></div>
                  <div class="fait-rule-item">
                    <div class="title">Account Number:</div>
                    <div class="require">
                      <span>436*213</span>
                      <div class="edit-info" @click="editVisible = true">
                        Edit
                      </div>
                      <el-dialog
                        v-model="editVisible"
                        class="edit-dialog"
                        width="30%"
                        style="padding-bottom: 14px"
                      >
                        <div class="iamge">
                          <img :src="crypto_icon_usdt" />
                        </div>
                        <div class="delete">Delete Bank Account</div>

                        <div class="content">
                          To add a new account, you need to delete this account
                          first. Please note that you can only Add one new
                          account within 24 hours. Are you sure you want to
                          delete this bank account (462**215)?
                        </div>
                        <template #footer>
                          <span class="dialog-footer">
                            <el-button @click="editVisible = false"
                              >Cancel</el-button
                            >
                            <el-button
                              type="primary"
                              @click="editVisible = false"
                            >
                              Confirm
                            </el-button>
                          </span>
                        </template>
                      </el-dialog>
                    </div>
                  </div>
                  <div class="fait-rule-item">
                    <div class="title">Transaction Method:</div>
                    <div class="require">
                      <div class="pay-img">
                        <img :src="crypto_icon_usdt" />
                      </div>
                      <span>PayID/Osko</span>
                    </div>
                  </div>
                  <div class="fait-rule-item">
                    <div class="title">Transaction Fee:</div>
                    <div class="require">0.00 AUD</div>
                  </div>
                  <el-divider
                    style="margin-left: 35px; width: 92%"
                  ></el-divider>
                  <div class="receive-box">
                    <div class="receive">You Receive:</div>
                    <div class="receive-count"><span>0.00</span> AUD</div>
                  </div>
                </div>
                <el-button
                  v-if="showContinueBtn"
                  class="continue-btn"
                  type="primary"
                  :disabled="!canContinue"
                  @click="handleContinue"
                >
                  Continue
                </el-button>
              </div>
              <el-dialog
                v-model="continueVisible"
                class="continue-dialog-box"
                width="30%"
              >
                <template #header>
                  <div class="dialog-header">Withdrawal Confirmation</div>
                </template>

                <div class="divider"></div>
                <div class="receive">Your receive</div>
                <div class="confirm-count">1000.00 <span>AUD</span></div>
                <div class="detail-rules">
                  <div class="rule-item">
                    <div class="title">Receiver's Name</div>
                    <div class="require">Ausun Overseas Pty Ltd</div>
                  </div>
                  <div class="rule-item">
                    <div class="title">Bank Name</div>
                    <div class="require">Others</div>
                  </div>
                  <div class="rule-item">
                    <div class="title">BSB</div>
                    <div class="require">123-123</div>
                  </div>
                  <div class="rule-item">
                    <div class="title">Account Number</div>
                    <div class="require">436*123</div>
                  </div>
                  <div class="rule-item">
                    <div class="title">Fee</div>
                    <div class="require">0.00 AUD</div>
                  </div>
                  <div class="rule-item">
                    <div class="title">Indicated Amount</div>
                    <div class="require">1000 AUD</div>
                  </div>
                </div>
                <template #footer>
                  <div class="dialog-footer">
                    <el-button @click="continueVisible = false"
                      >Cancel</el-button
                    >
                    <el-button type="primary" @click="innerVisible = true">
                      Confirm
                    </el-button>
                    <el-dialog
                      class="inner-dialog"
                      v-model="innerVisible"
                      width="30%"
                      title="Inner Dialog"
                      append-to-body
                    >
                      <template #header>
                        <div style="font-weight: 600">
                          Security Verification
                        </div>
                      </template>

                      <div class="divider"></div>
                      <div class="receive">
                        To secure your account. please complete the following
                        Verificatio.
                      </div>
                      <div class="identify-box">
                        <div class="func-text">
                          Enter the 6-digit code sent to 481***1234
                        </div>
                        <div class="container">
                          <input
                            class="container-input"
                            v-model="inputValue"
                            type="text"
                            placeholder="Phone Number Verification Code"
                          />
                          <el-button
                            class="send-btn"
                            key="button.text"
                            type="success"
                            link
                            >Send</el-button
                          >
                        </div>
                      </div>

                      <div class="identify-box">
                        <div class="func-text">
                          Enter the 6-gigit code sent to aar***@bitu.co
                        </div>
                        <div class="container">
                          <input
                            class="container-input"
                            v-model="inputValue"
                            type="text"
                            placeholder="Email Verification Code"
                          />
                          <el-button
                            class="send-btn"
                            key="button.text"
                            type="success"
                            link
                            >Send</el-button
                          >
                        </div>
                      </div>

                      <div class="identify-box">
                        <div class="func-text">
                          Enter the 6-digit code form authenticator
                        </div>
                        <div class="container">
                          <input
                            class="container-input"
                            v-model="inputValue"
                            type="text"
                            placeholder="Google verification code"
                          />
                          <el-button
                            class="send-btn"
                            key="button.text"
                            type="success"
                            link
                            >Send</el-button
                          >
                        </div>
                      </div>

                      <div class="security">
                        Security verification unavailable?
                      </div>
                      <el-button
                        v-if="!showContinueBtn"
                        class="submit-btn"
                        :disabled="!canContinue"
                        @click="handleSubmit"
                      >
                        Submit
                      </el-button>
                    </el-dialog>
                  </div>
                </template>
              </el-dialog>
              <div
                v-if="activeStep === 3 && showStepThree"
                class="deposit-details clearfloat"
              >
                <div class="select clearfloat">
                  <el-select
                    class="select-second"
                    style="margin-top: 20px"
                    v-model="selectedOption2"
                    placeholder="Select Network"
                    @change="updateCanContinue"
                  >
                    <el-option
                      v-for="item in options2"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>

                  <div class="detail-box clearfloat">
                    <div class="detail-box-tips">
                      Please use the PayID detail below to make the transfer and
                      <span
                        >Select the email option, and NOT organisation ID</span
                      >
                      when depositing from online banking or mobile app. How to
                      deposit AUD via PayID/Osko?
                      <span style="text-decoration: underline">Click Here</span>
                    </div>

                    <div class="detail-card">
                      <div class="card-item">
                        <div class="item-title">
                          <div class="item-title-img">
                            <img :src="crypto_icon_usdt" />
                          </div>
                          <span>AUD</span>
                        </div>
                        <div class="item-count">10,000.00</div>
                      </div>
                      <div class="card-divider"></div>
                      <div class="card-info">
                        <div class="title">PayID Information</div>
                      </div>
                      <div class="indo-detail">
                        <div class="title">user2022@au.coinbyte.com</div>
                        <div class="copy">
                          <el-icon><CopyDocument /></el-icon> Copy
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="9" class="right-box">
          <div class="tips">
            <div class="tips-faq">
              <div class="faq-title">
                <el-icon><Opportunity /></el-icon> Notice
              </div>
              <el-divider />
              <div class="faq-content content">
                <div>
                  We Only Accept withdrawals to your personal bank account.
                </div>
                <br />
                <div>
                  If your bank account is registered with PayID. your first
                  withdrawal may take up to 24 hours to clear subjected to the
                  bank's policy. Subsequent withdrawal to the same account will
                  be proceessed instantly.
                </div>
                <br />

                <div>
                  This service is supported by CoinByte Australia, in accordance
                  to CoinByte Australia's <span>terms of Use</span> and
                  <span>Privacy Policy</span>.
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <div
        class="deposit-details clearfloat"
        v-if="activeStep === 3 && showStepThree"
      >
        <div class="recent-deposit">
          <div class="table-name">Recent Deposits</div>
          <div class="not-arrive">Hasn't arrived?</div>
          <Table :sourceData="tableData">
            <template v-slot:columns>
              <el-table-column
                prop="time"
                :label="t('messages.wallet.fiat_Time')"
                width="210"
              />
              <el-table-column
                prop="coin"
                :label="t('messages.wallet.fiat_Coin')"
                width="210"
              />
              <el-table-column
                prop="amount"
                :label="t('messages.wallet.fiat_Amount')"
                width="240"
              />
              <el-table-column
                :label="t('messages.wallet.fiat_Status')"
                width="230"
              >
                <template #default="scope">
                  <div
                    v-if="scope.row.status === 'Successful'"
                    style="color: #01c19a"
                  >
                    Successful
                  </div>
                  <div v-else-if="scope.row.status === 'Faild'">Faild</div>
                </template>
              </el-table-column>
              <el-table-column :label="t('messages.wallet.fiat_Information')">
                <template #default="scope">
                  <template v-if="!isFoldArr.includes(scope.row.key)">
                    <div class="info">
                      <p>Payment Method:</p>
                      <p>{{ scope.row.payment_method }}</p>
                    </div>
                  </template>
                  <template v-else>
                    <div class="info">
                      <p>Payment Method:</p>
                      <p>{{ scope.row.payment_method }}</p>
                    </div>
                    <div class="info">
                      <p>indicated Amount:</p>
                      <p>{{ scope.row.indicated_amount }}</p>
                    </div>
                    <div class="info">
                      <p>Fee:</p>
                      <p>{{ scope.row.fee }}</p>
                    </div>
                    <div class="info">
                      <p>Order ID:</p>
                      <p>{{ scope.row.order_ID }}</p>
                    </div>
                  </template>
                </template>
              </el-table-column>
              <el-table-column label="">
                <template #default="scope">
                  <el-button
                    type="text"
                    :class="{
                      icon_button: true,
                      isRotate: isFoldArr.includes(scope.row.key),
                    }"
                    @click="getKey(scope.row.key)"
                    ><el-icon style="color: #9b9b9b"><CaretBottom /></el-icon
                  ></el-button>
                </template>
              </el-table-column>
            </template>
          </Table>
        </div>
      </div>
    </div>
    <div v-else></div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onUnmounted, onMounted, computed, watch } from "vue";
import type { Ref } from "vue";
import {
  Link,
  Right,
  CopyDocument,
  Upload,
  Opportunity,
  Warning,
  Switch,
  Clock,
  CaretBottom,
} from "@element-plus/icons-vue";
import GetButton from "../../../../components/GetButton.vue";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import login_qrcode from "../../../../assets/home/download_qrcode.png";
import crypto_icon_usdt from "../../../../assets/home/crypto_icon_usdt.png";
import Table from "../component/Table.vue";
import { useI18n } from "vue-i18n";
import { ElMessageBox } from "element-plus";
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
const activeStep = ref(1);
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

const showStepThree = ref(false);
const showContinueBtn = ref(true);
const withdrawStatus = ref(false);
function handleSubmit() {
  withdrawStatus.value = true;
}
function handleContinue() {
  if (activeStep.value === 1 && selectedOption1.value !== "") {
    activeStep.value = 2;
    options1 = options1.filter((o) => o.value === selectedOption1.value);
  } else if (activeStep.value === 2 && canContinue.value) {
    activeStep.value = 3;

    showStepThree.value = true;
    showContinueBtn.value = false; // 只隐藏继续按钮,不隐藏步骤二的选择框
    continueVisible.value = true;
  }
}

function updateCanContinue() {
  canContinue.value = selectedOption2.value !== "";
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
  padding-bottom: 250px;
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
      font-weight: 500;
    }
    .el-step__title.is-process {
      font-weight: 500;
      color: #9b9b9b;
    }
    .el-dialog__body {
      padding: 0;
    }
  }
}
.left-box {
  padding-left: 60px !important;
  .left-header {
    display: flex;
    justify-content: space-between;
    .header-title {
      font-size: $fontSizeMed;
      color: #000;
      line-height: 32px;
      font-weight: 500;
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
  .left-center {
    .center-step-box {
      margin-top: 23px;
      .select {
        position: relative;
        :deep() {
          .el-select .el-input__wrapper {
            width: 442px;
            height: 48px;
          }
        }
        .select-first {
          position: absolute;
          top: -355px;
          left: 35px;
        }
        .select-second {
          position: absolute;
          top: -160px;
          left: 35px;
        }
        .enter-amount-tips {
          cursor: pointer;
          position: absolute;
          top: -198px;
          left: 36%;
          font-size: 14px;
          color: #878787;
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
          position: absolute;
          top: -100px;
          .available {
            margin-left: 35px;
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
            margin-left: 35px;
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
            margin-left: 35px;
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
          width: 442px;
          height: 60px;
          position: absolute;
          top: 160px;
          left: 35px;
          font-size: 20px;
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
          margin-left: 35px;
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
  margin-top: 100px;
  .not-arrive {
    float: right;

    font-size: 14px;
    color: #9b9b9b;
    line-height: 16px;
    text-decoration: underline #9b9b9b;
  }
}
.right-box {
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

        span {
          color: #01c19a;
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
  background-color: #dfdfe5;
  font-size: 18px;
  color: #bdbdbd;
  line-height: 23px;
}
</style>
