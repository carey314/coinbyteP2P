<template>
  <div class="deposit-crypto">
    <div v-if="windowWidth > 985">
      <el-row :gutter="80">
        <el-col :span="15" class="left-box">
          <div class="left-header">
            <div class="header-title">Deposit Crypto</div>
            <router-link to="/wallet/DepositFiat" style="text-decoration: none">
              <div class="header-toFiat">
                <div class="toFiat">
                  Deposit Fiat
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
                  align-center
                >
                  <el-step title="Select crypto">
                    <template #description>
                      <div v-if="activeStep >= 1" class="select">
                        <el-select
                          v-model="selectedOption1"
                          placeholder="Select crypto"
                          @change="handleContinue"
                        >
                          <el-option
                            v-for="item in options1"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          >
                            <div
                              style="
                                display: flex;
                                align-items: center;
                                gap: 8px;
                              "
                            >
                              <el-avatar
                                :size="26"
                                src="asdfasdf"
                                style="margin-right: 8px"
                              />
                              {{ item.label }}
                            </div>
                          </el-option>
                        </el-select>
                        <div class="step-options">
                          <div
                            class="step-option"
                            @click="selectedOption1 = 'BTC'"
                          >
                            <el-avatar
                              :size="26"
                              src="asdfasdf"
                              style="margin-right: 8px"
                            />
                            BTC
                          </div>
                          <div
                            class="step-option"
                            @click="selectedOption1 = 'ETH'"
                          >
                            <el-avatar
                              :size="26"
                              src="asdfasdf"
                              style="margin-right: 8px"
                            />
                            ETH
                          </div>
                          <div
                            class="step-option"
                            @click="selectedOption1 = 'USDT'"
                          >
                            <el-avatar
                              :size="26"
                              src="asdfasdf"
                              style="margin-right: 8px"
                            />
                            USDT
                          </div>
                          <div
                            class="step-option"
                            @click="selectedOption1 = 'XRP'"
                          >
                            <el-avatar
                              :size="26"
                              src="asdfasdf"
                              style="margin-right: 8px"
                            />
                            XRP
                          </div>
                          <div
                            class="step-option"
                            @click="selectedOption1 = 'ADA'"
                          >
                            <el-avatar
                              :size="26"
                              src="asdfasdf"
                              style="margin-right: 8px"
                            />
                            ADA
                          </div>
                        </div>
                      </div>
                      <div></div>
                    </template>
                  </el-step>
                  <el-step title="Deposit to">
                    <template #description>
                      <div v-if="activeStep === 2"
                        class="select clearfloat"
                        style="position: relative"
                      >
                        <el-select
                          class="select-second"
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
                      <div v-if="activeStep === 3 && showStepThree"
                        class="select"
                      >
                        <el-select
                          class="select-second"
                          style="margin-bottom: 20px"
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
                      </div>
                    </template>
                  </el-step>
                  <el-step v-if="showStepThree" title="Deposit details">
                    <template #description>
                      <div
                        v-if="activeStep === 3 && showStepThree"
                        class="deposit-details clearfloat"
                      >
                        <div class="select clearfloat">
                          <div class="detail-box clearfloat">
                            <div class="detail-box-title">
                              Scan the QR code or copy the Link below to your
                              sending platform
                            </div>
                            <div class="detail-box-tips">
                              Send only USDT to this deposit address.<br />
                              This address does not support deposit of
                              non-fungible token,<br />
                              Please go to NFT page to deposit NFT.
                            </div>
                            <div class="detail-box-address">
                              <div class="address-left">
                                <div class="address-title">USDT address</div>
                                <div class="address-code clearfloat">
                                  <div class="code">
                                    TTXKTYFSSDWjkjdsJTWEWEWEWjosdw122223EEWwr
                                  </div>
                                  <div class="copy">
                                    <el-icon>
                                      <CopyDocument />
                                    </el-icon>
                                    Copy
                                  </div>
                                </div>
                              </div>
                              <div class="address-right">
                                <img :src="login_qrcode" alt="" />
                              </div>
                            </div>
                            <div class="detail-rules">
                              <div class="rule-item">
                                <div class="title">Minimum deposit</div>
                                <div class="require">0.00000001 USDT</div>
                              </div>
                              <div class="rule-item">
                                <div class="title">Expected arrival</div>
                                <div class="require">
                                  1 network confirmation
                                </div>
                              </div>
                              <div class="rule-item">
                                <div class="title">Expected unlock</div>
                                <div class="require">
                                  1 network confirmation
                                </div>
                              </div>
                              <div class="rule-item">
                                <div class="title">Slected wallet</div>
                                <div class="require">Trading Wallet</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </template>
                  </el-step>
                </el-steps>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="9" class="right-box">
          <div class="tips">
            <div class="tips-question">
              <div class="question-title title">Deposit hasn't arrived?</div>
              <div class="question-content content">
                <div class="description">
                  If you encounter the follwing problems during the deposit
                  process, you can go to Deposit Status Wuery to search for your
                  current deposit status or retrieve your assets via
                  self-service application.
                </div>
                <br />
                <div class="first">
                  1. Deposit has not arrived after a long while.
                </div>
                <div class="second">2. Didn't enter Memo/Tag correctly</div>
                <div class="third">3. Deposited unlisted coins</div>
                <br />
                <div class="more">View more &gt;</div>
              </div>
            </div>
            <div class="tips-faq">
              <div class="faq-title title">FAQ</div>
              <el-divider />
              <div class="faq-content content">
                <div>How to Deposit Crypto Step-by Step Guide</div>
                <br />
                <div>Why has my Deposit not been credited yet?</div>
                <br />
                <div>Why has my Deposit not been credited yet?</div>
                <br />
                <div class="more">View more &gt;</div>
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
                width="180"
              />
              <el-table-column
                prop="coin"
                :label="t('messages.wallet.fiat_Asset')"
                width="120"
              >
                <template #default="scope">
                  <img :src="crypto_icon_usdt" style="width: 21px" />
                  {{ scope.row.coin }}
                </template>
              </el-table-column>
              <el-table-column
                prop="amount"
                :label="t('messages.wallet.fiat_Amount')"
                width="160"
              />
              <el-table-column prop="network" label="Network" width="160" />
              <el-table-column label="Address" width="190">
                <template #default="scope">
                  {{ scope.row.address }}
                  <el-icon>
                    <Link />
                  </el-icon>
                  <el-icon>
                    <CopyDocument />
                  </el-icon>
                </template>
              </el-table-column>

              <el-table-column prop="network" label="TxID" width="180">
                <template #default="scope">
                  {{ scope.row.TxID }}
                  <el-icon>
                    <Link />
                  </el-icon>
                  <el-icon>
                    <CopyDocument />
                  </el-icon>
                </template>
              </el-table-column>
              <el-table-column
                prop="wallet"
                label="Deposit wallet"
                width="120"
              />
              <el-table-column label="">
                <template #default="scope">
                  <el-button
                    type="text"
                    :class="{
                      icon_button: true,
                      isRotate: isFoldArr.includes(scope.row.key),
                    }"
                    @click="getKey(scope.row.key)"
                    ><el-icon style="color: #9b9b9b">
                      <CaretBottom /> </el-icon
                  ></el-button>
                </template>
              </el-table-column>
              <el-table-column
                :label="t('messages.wallet.fiat_Status')"
                width="100"
              >
                <template #default="scope">
                  <div
                    v-if="scope.row.status === 'Successful'"
                    style="color: #01c19a; cursor: pointer"
                  >
                    Completed
                  </div>
                  <div v-else-if="scope.row.status === 'Faild'">Faild</div>
                </template>
              </el-table-column>
            </template>
          </Table>
        </div>
      </div>
    </div>
    <div v-else>
      <el-row>
        <el-col :span="24" class="left-box">
          <div class="left-header">
            <div class="header-title">Deposit Crypto</div>
            <router-link
              to="/wallet/DepositCrypto"
              style="text-decoration: none"
            >
              <div class="header-toFiat">
                <div class="toFiat">
                  Deposit Fiat
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
                  <el-step title="Select crypto"></el-step>
                  <el-step title="Deposit to"></el-step>
                  <el-step
                    v-if="showStepThree"
                    title="Deposit details"
                  ></el-step>
                </el-steps>
              </div>
              <div v-if="activeStep >= 1" class="select">
                <el-select
                  class="select-first"
                  v-model="selectedOption1"
                  placeholder="Select crypto"
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
                <el-select
                  class="select-second"
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
                    <div class="detail-box-title">
                      Scan the QR code or copy the Link below to your sending
                      platform
                    </div>
                    <div class="detail-box-tips">
                      Send only USDT to this deposit address.<br />
                      This address does not support deposit of non-fungible
                      token,<br />
                      Please go to NFT page to deposit NFT.
                    </div>
                    <div class="detail-box-address">
                      <div class="address-left">
                        <div class="address-title">USDT address</div>
                        <div class="address-code clearfloat">
                          <div class="code">
                            TTXKTYFSSDWjkjdsJTWEWEWEWjosdw122223EEWwr
                          </div>
                          <div class="copy">
                            <el-icon>
                              <CopyDocument />
                            </el-icon>
                            Copy
                          </div>
                        </div>
                      </div>
                      <div class="address-right">
                        <img :src="login_qrcode" alt="" />
                      </div>
                    </div>
                    <div class="detail-rules">
                      <div class="rule-item">
                        <div class="title">Minimum deposit</div>
                        <div class="require">0.00000001 USDT</div>
                      </div>
                      <div class="rule-item">
                        <div class="title">Expected arrival</div>
                        <div class="require">1 network confirmation</div>
                      </div>
                      <div class="rule-item">
                        <div class="title">Expected unlock</div>
                        <div class="require">1 network confirmation</div>
                      </div>
                      <div class="rule-item">
                        <div class="title">Slected wallet</div>
                        <div class="require">Trading Wallet</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="24" class="right-box">
          <div class="tips">
            <div class="tips-question">
              <div class="question-title title">Deposit hasn't arrived?</div>
              <div class="question-content content">
                <div class="description">
                  If you encounter the follwing problems during the deposit
                  process, you can go to Deposit Status Wuery to search for your
                  current deposit status or retrieve your assets via
                  self-service application.
                </div>
                <br />
                <div class="first">
                  1. Deposit has not arrived after a long while.
                </div>
                <div class="second">2. Didn't enter Memo/Tag correctly</div>
                <div class="third">3. Deposited unlisted coins</div>
                <br />
                <div class="more">View more &gt;</div>
              </div>
            </div>
            <div class="tips-faq">
              <div class="faq-title title">FAQ</div>
              <el-divider />
              <div class="faq-content content">
                <div>How to Deposit Crypto Step-by Step Guide</div>
                <br />
                <div>Why has my Deposit not been credited yet?</div>
                <br />
                <div>Why has my Deposit not been credited yet?</div>
                <br />
                <div class="more">View more &gt;</div>
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
                width="180"
              />
              <el-table-column
                prop="coin"
                :label="t('messages.wallet.fiat_Asset')"
                width="120"
              >
                <template #default="scope">
                  <img :src="crypto_icon_usdt" style="width: 21px" />
                  {{ scope.row.coin }}
                </template>
              </el-table-column>
              <el-table-column
                prop="amount"
                :label="t('messages.wallet.fiat_Amount')"
                width="160"
              />
              <el-table-column prop="network" label="Network" width="160" />
              <el-table-column label="Address" width="190">
                <template #default="scope">
                  {{ scope.row.address }}
                  <el-icon>
                    <Link />
                  </el-icon>
                  <el-icon>
                    <CopyDocument />
                  </el-icon>
                </template>
              </el-table-column>

              <el-table-column prop="network" label="TxID" width="180">
                <template #default="scope">
                  {{ scope.row.TxID }}
                  <el-icon>
                    <Link />
                  </el-icon>
                  <el-icon>
                    <CopyDocument />
                  </el-icon>
                </template>
              </el-table-column>
              <el-table-column
                prop="wallet"
                label="Deposit wallet"
                width="120"
              />
              <!-- <el-table-column :label="t('messages.wallet.fiat_Information')">
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
              </el-table-column> -->
              <el-table-column label="">
                <template #default="scope">
                  <el-button
                    type="text"
                    :class="{
                      icon_button: true,
                      isRotate: isFoldArr.includes(scope.row.key),
                    }"
                    @click="getKey(scope.row.key)"
                    ><el-icon style="color: #9b9b9b">
                      <CaretBottom /> </el-icon
                  ></el-button>
                </template>
              </el-table-column>
              <el-table-column
                :label="t('messages.wallet.fiat_Status')"
                width="100"
              >
                <template #default="scope">
                  <div
                    v-if="scope.row.status === 'Successful'"
                    style="color: #01c19a; cursor: pointer"
                  >
                    Completed
                  </div>
                  <div v-else-if="scope.row.status === 'Faild'">Faild</div>
                </template>
              </el-table-column>
            </template>
          </Table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onUnmounted, onMounted, computed, watch } from "vue";
import type { Ref } from "vue";
import { Link, Right, CopyDocument } from "@element-plus/icons-vue";
import GetButton from "../../../../components/GetButton.vue";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import login_qrcode from "../../../../assets/home/download_qrcode.png";
import crypto_icon_usdt from "../../../../assets/home/crypto_icon_usdt.png";
import Table from "../component/Table.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const noFound = ref(false);

const windowWidth = useWindowSize().width;
const activeStep = ref(1);
const selectedOption1 = ref("");
const selectedOption2 = ref("");
const canContinue = ref(false);
let options1 = [
  { value: "option1", label: "BTC", icon: "crypto_icon_btc" },
  { value: "option2", label: "ETH" },
  { value: "option3", label: "USDT" },
  { value: "option4", label: "XRP" },
  { value: "option5", label: "ADA" },
];
let options2 = [
  { value: "optionA", label: "Polygon" },
  { value: "optionB", label: "Solana" },
  { value: "optionC", label: "Tezos" },
  { value: "optionD", label: "Tron(TRC20)" },
];

const showStepThree = ref(false);
const showContinueBtn = ref(true);

function handleContinue() {
  if (activeStep.value === 1 && selectedOption1.value !== "") {
    activeStep.value = 2;
    // options1 = options1.filter((o) => o.value === selectedOption1.value);
    options1 = options1.filter((o) => o.value === selectedOption1.value);
  } else if (activeStep.value === 2 && canContinue.value) {
    activeStep.value = 3;
    showStepThree.value = true;
    showContinueBtn.value = false; // 只隐藏继续按钮,不隐藏步骤二的选择框
  }
}
const selectOption = (option: string) => {
  selectedOption1.value = option;
  handleContinue();
};

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
  padding-bottom: 50px;

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
  }
}

.left-box {
  padding-left: 60px !important;

  @media (max-width: 769px) {
    & {
      padding-left: 0 !important;
    }
  }

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
      width: 128px;
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
    @media (max-width: 769px) {
      & {
        padding-bottom: 100px !important;
      }
    }

    .center-step-box {
      margin-top: 23px;
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
          .el-step__line-inner {
            display: none;
          }
        }
      }
      .continue-btn {
        width: 442px;
        height: 60px;
        font-size: 20px;
        margin-top: 20px;
        border-radius: 8px;

        @media (max-width: 769px) {
          & {
            width: 300px;
          }
        }
      }

      .select {
        position: relative;
        margin-top: 24px;

        :deep() {
          .el-select .el-input__wrapper {
            width: 442px;
            height: 48px;

            @media (max-width: 769px) {
              & {
                width: 300px;
              }
            }
          }
        }

        .select-first {
          position: absolute;
          top: -355px;
          left: 35px;
        }
      }

      .deposit-details {
        // position: relative;
        .detail-box {
          // margin-top: -90px;
          // margin-left: 35px;

          .detail-box-title {
            font-size: 14px;
            color: #020202;
            line-height: 16px;
          }

          .detail-box-tips {
            margin-top: 10px;
            background: #f7f7f7;
            border-radius: 4px;
            width: 443px;
            padding: 9px 0;
            font-size: 12px;
            color: #878787;
            display: flex;
            align-items: center;
            line-height: 16px;
            padding-left: 9px;
          }

          .detail-box-address {
            margin-top: 30px;
            width: 443px;
            display: flex;
            justify-content: space-between;

            .address-left {
              .address-title {
                font-size: 20px;
                color: #000000;
                line-height: 25px;
              }

              .address-code {
                background: #f7f7f7;
                border-radius: 4px;
                width: 307px;
                padding-bottom: 9px;

                .code {
                  font-size: 14px;
                  color: #000000;
                  line-height: 20px;
                  width: 281px;
                  word-wrap: break-word;
                  padding-left: 14px;
                  padding-top: 12px;
                }

                .copy {
                  float: right;
                  margin-top: 5px;
                  margin-right: 12px;
                  font-size: 12px;
                }
              }
            }

            .address-right {
              width: 109px;
              height: 108px;

              img {
                width: 100%;
                height: 100%;
                object-fit: contain;
              }
            }
          }

          .detail-rules {
            margin-top: 23px;
            width: 443px;
            background: #f7f7f7;
            border-radius: 4px;
            padding: 10px 17px;

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
      }
    }
  }
}

.recent-deposit {
  font-size: 26px;
  color: #000000;
  line-height: 32px;
  font-weight: 500;
  margin-top: 420px;

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
    .title {
      font-size: $fontSizeDefPro;
      line-height: 25px;
      color: #000;
    }

    .content {
      font-size: $fontSizeDef;
      color: $fontColor;
      line-height: 18px;
    }

    .more {
      color: #7b8293;
      float: right;
      cursor: pointer;
    }

    .question-content {
      margin-top: 9px;
    }

    .tips-faq {
      margin-top: 60px;

      :deep() {
        .el-divider--horizontal {
          margin: 18px 0;
        }
      }

      .faq-content {
        text-decoration: underline;

        span {
          padding: 5px 0;
        }
      }
    }
  }
}

.step-options {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  width: 442px;
}

.step-option {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  // width: 40px;
  // height: 40px;
  // background-color: #eee;
  // border-radius: 50%;
  font-size: 18px;
  color: #020202;
  cursor: pointer;
  transition: all 0.2s;
}

.step-option:hover {
  color: blue;
}
</style>
