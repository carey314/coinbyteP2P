<template>
  <div class="overview-none-page" v-if="!noneOverView">
    <div v-if="windowWidth > 985">
      <el-row :gutter="15">
        <el-col :span="16" class="left-box">
          <div class="left-value">
            <div class="value-top">
              Est. total value
              <img :src="overview_eye" />
            </div>
            <div class="value-center">
              <div>₮0.00</div>
              <div>
                <button class="language-chose">
                  <img :src="wallet_select_usdt_off" alt="" />
                  USDT
                  <el-icon style="width: 18px; color: #cbcccf"
                    ><ArrowDown
                  /></el-icon>
                </button>
              </div>
            </div>
            <div class="value-bottom">
              <div class="bottom-image"><img :src="icon_wallet" /></div>
              <div class="bottom-title minMainFont">
                Your current equity is zero
              </div>
              <div class="bottom-btn">
                <GetButton class="deposit-btn" type="success" :text="deposit" />
                <GetButton class="buy-btn" :text="buy" />
              </div>
            </div>
          </div>
          <div class="left-assets">
            <el-card class="box-card">
              <template #header>
                <div class="card-header">
                  <span>My assets</span>
                </div>
              </template>
              <!-- <el-table
                :data="tableData"
                style="width: 100%;"
                :show-header="false"
              >
                <el-table-column width="200">
                  <template #default="scope">
                    <div
                      style="
                        display: flex;
                        align-items: center;
                        font-size: 16px;
                        color: #000000;
                      "
                    >
                      <el-icon><timer /></el-icon>
                      <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </div>
                  </template>
                </el-table-column>

                <el-table-column width="180">
                  <div style="font-size: 16px; color: #000000">₮0.00</div>
                </el-table-column>
                <el-table-column>
                  <div class="demo-progress">
                    <div class="progress-count">0.00%</div>
                    <el-progress
                      :percentage="0"
                      stroke-width="9"
                      :show-text="false"
                      class="progress-bar"
                    />
                  </div>
                </el-table-column>
                <el-table-column
                  align="right"
                  style="display: flex"
                >
                  <template #default="scope">
                    <el-button
                      type="success"
                      @click="handleEdit(scope.$index, scope.row)"
                      >Deposit</el-button
                    >
                    <el-button @click="handleDelete(scope.$index, scope.row)"
                      >More</el-button
                    >
                  </template>
                </el-table-column>
              </el-table> -->
              <div class="assets-body">
                <div class="assets-item">
                  <div class="assets-icon"><img :src="icon_trading" /></div>
                  <div class="item-title">Trading</div>
                </div>
                <div>₮0.00</div>
                <div class="demo-progress">
                  <div class="progress-count">0.00%</div>
                  <el-progress
                    :percentage="0"
                    stroke-width="9"
                    :show-text="false"
                    class="progress-bar"
                  />
                </div>
                <div class="assets-btn">
                  <el-button type="success">Deposit</el-button>
                  <el-button class="more">More</el-button>
                </div>
              </div>
              <el-divider style="margin-left: -20px; width: 200%" />
              <div class="assets-body">
                <div class="assets-item">
                  <div class="assets-icon"><img :src="icon_trading" /></div>
                  <div class="item-title">Earning</div>
                </div>
                <div>₮0.00</div>
                <div class="demo-progress">
                  <div class="progress-count">0.00%</div>
                  <el-progress
                    :percentage="0"
                    stroke-width="9"
                    :show-text="false"
                    class="progress-bar"
                  />
                </div>
                <div class="assets-btn">
                  <el-button type="success">Earn</el-button>
                  <el-button class="more">Transfer</el-button>
                </div>
              </div>
            </el-card>
          </div>
          <div class="left-recent">
            <el-card class="box-card">
              <template #header>
                <div class="card-header">
                  <span>Recent transactions</span>
                </div>
              </template>
              <div class="value-bottom">
                <div class="bottom-image">
                  <img :src="wallet_search_none" />
                </div>
                <div class="bottom-title minMainFont">
                  You don't have any transactions yet
                </div>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="8" class="right-box">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span>Assets</span>
              </div>
            </template>
            <div class="value-bottom">
              <div class="bottom-image"><img :src="icon_wallet" /></div>
              <div class="bottom-title minMainFont">
                You don't have any assets yet
              </div>
              <div class="bottom-btn">
                <GetButton class="deposit-btn" type="success" :text="deposit" />
                <GetButton class="buy-btn" :text="buy" />
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div v-else>
      <el-row :gutter="15">
        <el-col :span="24" class="left-box">
          <div class="left-value">
            <div class="value-top">
              Est. total value
              <img :src="overview_eye" />
            </div>
            <div class="value-center">
              <div>₮0.00</div>
              <div>
                <button class="language-chose">
                  <img :src="wallet_select_usdt_off" alt="" />
                  USDT
                  <el-icon style="width: 18px; color: #cbcccf"
                    ><ArrowDown
                  /></el-icon>
                </button>
              </div>
            </div>
            <div class="value-bottom">
              <div class="bottom-image"><img :src="icon_wallet" /></div>
              <div class="bottom-title minMainFont">
                Your current equity is zero
              </div>
              <div class="bottom-btn">
                <GetButton class="deposit-btn" type="success" :text="deposit" />
                <GetButton class="buy-btn" :text="buy" />
              </div>
            </div>
          </div>
          <div class="left-assets">
            <el-card class="box-card">
              <template #header>
                <div class="card-header">
                  <span>My assets</span>
                </div>
              </template>
              <el-scrollbar>
                <div class="scrollbar-flex-content">
                  <div class="assets-body">
                    <div class="assets-item">
                      <div class="assets-icon"><img :src="icon_trading" /></div>
                      <div class="item-title">Trading</div>
                    </div>
                    <div>₮0.00</div>
                    <div class="demo-progress">
                      <div class="progress-count">0.00%</div>
                      <el-progress
                        :percentage="0"
                        stroke-width="9"
                        :show-text="false"
                        class="progress-bar"
                      />
                    </div>
                    <div class="assets-btn">
                      <el-button type="success">Deposit</el-button>
                      <el-button class="more">More</el-button>
                    </div>
                  </div>
                </div>
              </el-scrollbar>
              <el-divider style="margin-left: -20px; width: 200%" />
              <el-scrollbar>
                <div class="scrollbar-flex-content">
                  <div class="assets-body">
                    <div class="assets-item">
                      <div class="assets-icon"><img :src="icon_trading" /></div>
                      <div class="item-title">Earning</div>
                    </div>
                    <div>₮0.00</div>
                    <div class="demo-progress">
                      <div class="progress-count">0.00%</div>
                      <el-progress
                        :percentage="0"
                        stroke-width="9"
                        :show-text="false"
                        class="progress-bar"
                      />
                    </div>
                    <div class="assets-btn">
                      <el-button type="success">Earn</el-button>
                      <el-button class="more">Transfer</el-button>
                    </div>
                  </div>
                </div>
              </el-scrollbar>
            </el-card>
          </div>
          <div class="left-recent">
            <el-card class="box-card">
              <template #header>
                <div class="card-header">
                  <span>Recent transactions</span>
                </div>
              </template>
              <div class="value-bottom">
                <div class="bottom-image">
                  <img :src="wallet_search_none" />
                </div>
                <div class="bottom-title minMainFont">
                  You don't have any transactions yet
                </div>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="24" class="right-box">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span>Assets</span>
              </div>
            </template>
            <div class="value-bottom">
              <div class="bottom-image"><img :src="icon_wallet" /></div>
              <div class="bottom-title minMainFont">
                You don't have any assets yet
              </div>
              <div class="bottom-btn">
                <GetButton class="deposit-btn" type="success" :text="deposit" />
                <GetButton class="buy-btn" :text="buy" />
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
  <div class="overview-date-page" v-else>
    <div v-if="windowWidth > 985">
      <el-row :gutter="15">
        <el-col :span="16" class="left-box">
          <div class="left-value clearfloat">
            <div class="value-top">
              Est. total value
              <img :src="overview_eye" />
            </div>
            <div class="value-center">
              <div>₮980.98</div>
              <div>
                <button class="language-chose">
                  <img :src="wallet_select_usdt_on" alt="" />
                  USDT
                  <el-icon style="width: 18px; color: #cbcccf"
                    ><ArrowDown
                  /></el-icon>
                </button>
              </div>
            </div>
            <div class="value-bottom">
              <div class="bottom-btn">
                <GetButton class="deposit-btn" type="success" :text="deposit" />
                <GetButton class="func-btn" :text="convert" />
                <GetButton class="func-btn" :text="withdraw" />
                <GetButton class="func-btn" :text="transfer" />
              </div>
            </div>
          </div>
          <div class="left-assets">
            <el-card class="box-card">
              <template #header>
                <div class="card-header">
                  <span>My assets</span>
                </div>
              </template>
              <div class="assets-body">
                <div class="assets-item">
                  <div class="assets-icon"><img :src="icon_trading" /></div>
                  <div class="item-title">Trading</div>
                </div>
                <div class="assets-price">₮980.00</div>
                <div class="demo-progress">
                  <div class="progress-count">100.00%</div>
                  <el-progress
                    :percentage="100"
                    stroke-width="9"
                    :show-text="false"
                    class="progress-bar"
                  />
                </div>
                <div class="assets-btn">
                  <el-button type="success">Deposit</el-button>
                  <el-button class="more">More</el-button>
                </div>
              </div>
              <el-divider style="margin-left: -20px; width: 200%" />
              <div class="assets-body">
                <div class="assets-item">
                  <div class="assets-icon"><img :src="icon_trading" /></div>
                  <div class="item-title">Earning</div>
                </div>
                <div class="assets-price">₮0.00</div>
                <div class="demo-progress">
                  <div class="progress-count">0.00%</div>
                  <el-progress
                    :percentage="0"
                    stroke-width="9"
                    :show-text="false"
                    class="progress-bar"
                  />
                </div>
                <div class="assets-btn">
                  <el-button type="success">Earn</el-button>
                  <el-button class="more">Transfer</el-button>
                </div>
              </div>
            </el-card>
          </div>
          <div class="left-recent">
            <el-card class="recent-card">
              <template #header>
                <div class="card-header">
                  <span>Recent transactions</span>
                </div>
              </template>
              <div class="recent-box">
                <div class="box-left clearfloat">
                  <div class="rencent-image"><img :src="icon_convert" /></div>
                  <div class="recent-title">Convert USDT</div>
                  <div class="recent-date">09/30/2022, 18:00:00</div>
                </div>
                <div class="recent-count down">-100 USDT</div>
              </div>
              <el-divider style="margin-left: -20px; width: 200%" />
              <div class="recent-box">
                <div class="box-left clearfloat">
                  <div class="rencent-image"><img :src="icon_convert" /></div>
                  <div class="recent-title">Convert ETH</div>
                  <div class="recent-date">09/30/2022, 18:00:00</div>
                </div>
                <div class="recent-count up">+0.0776 ETH</div>
              </div>
              <el-divider style="margin-left: -20px; width: 200%" />
              <div class="recent-box">
                <div class="box-left clearfloat">
                  <div class="rencent-image"><img :src="icon_deposit" /></div>
                  <div class="recent-title">Deposit USDT</div>
                  <div class="recent-date">09/30/2022, 18:00:00</div>
                </div>
                <div class="recent-count up">+3,499 USDT</div>
              </div>
              <el-divider style="margin-left: -20px; width: 200%" />
              <div class="recent-box">
                <div class="box-left clearfloat">
                  <div class="rencent-image">
                    <img :src="icon_withdrawal" />
                  </div>
                  <div class="recent-title">Withdrawal USDT</div>
                  <div class="recent-date">09/30/2022, 18:00:00</div>
                </div>
                <div class="recent-count down">-3,431 USDT</div>
              </div>
              <el-divider style="margin-left: -20px; width: 200%" />
              <div class="recent-box">
                <div class="box-left clearfloat">
                  <div class="rencent-image"><img :src="icon_gift" /></div>
                  <div class="recent-title">Get From Activity ETHW</div>
                  <div class="recent-date">09/30/2022, 18:00:00</div>
                </div>
                <div class="recent-count up">+0.01 ETHW</div>
              </div>
              <el-divider style="margin-left: -20px; width: 200%" />
              <div class="view-more">View more ></div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="8" class="right-box">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span>Assets</span>
              </div>
            </template>
            <div class="value-bottom">
              <div class="recent-box">
                <div class="box-left clearfloat">
                  <div class="rencent-image">
                    <img :src="wallet_select_usdt_on" />
                  </div>
                  <div style="margin-left: 43px">
                    <div class="recent-title">USDT</div>
                    <div class="recent-date">968.0000 USDT</div>
                  </div>
                </div>
                <div class="recent-count">₮960.98</div>
              </div>
              <el-divider style="margin-left: -20px; width: 200%" />
              <div class="recent-box">
                <div class="box-left clearfloat">
                  <div class="rencent-image">
                    <img :src="crypto_icon_eth" />
                  </div>
                  <div style="margin-left: 43px">
                    <div class="recent-title">ETH</div>
                    <div class="recent-date">0.0100 ETH</div>
                  </div>
                </div>
                <div class="recent-count">₮10.00</div>
              </div>
              <el-divider style="margin-left: -20px; width: 200%" />
              <div class="recent-box">
                <div class="box-left clearfloat">
                  <div class="rencent-image">
                    <img :src="crypto_icon_btc" />
                  </div>
                  <div style="margin-left: 43px">
                    <div class="recent-title">BTC</div>
                    <div class="recent-date">0.00049350 BTC</div>
                  </div>
                </div>
                <div class="recent-count">₮10.00</div>
              </div>
              <el-divider style="margin-left: -20px; width: 200%" />
              <div class="view-more">View more ></div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div v-if="windowWidth <= 985">
      <el-row>
        <el-col :span="24" class="left-box">
          <div class="left-value clearfloat">
            <div class="value-top">
              Est. total value
              <img :src="overview_eye" />
            </div>
            <div class="value-center">
              <div>₮980.98</div>
              <div>
                <button class="language-chose">
                  <img :src="wallet_select_usdt_on" alt="" />
                  USDT
                  <el-icon style="width: 18px; color: #cbcccf"
                    ><ArrowDown
                  /></el-icon>
                </button>
              </div>
            </div>
            <div class="value-bottom clearfloat">
              <div class="bottom-btn">
                <GetButton class="deposit-btn" type="success" :text="deposit" />
                <GetButton class="func-btn" :text="convert" />
                <GetButton class="func-btn" :text="withdraw" />
                <GetButton class="func-btn" :text="transfer" />
              </div>
            </div>
          </div>
          <div class="left-assets">
            <el-card class="box-card">
              <template #header>
                <div class="card-header">
                  <span>My assets</span>
                </div>
              </template>
              <el-scrollbar>
                <div class="scrollbar-flex-content">
                  <div class="assets-body">
                    <div class="assets-item">
                      <div class="assets-icon"><img :src="icon_trading" /></div>
                      <div class="item-title">Trading</div>
                    </div>
                    <div class="assets-price">₮980.00</div>
                    <div class="demo-progress">
                      <div class="progress-count">100.00%</div>
                      <el-progress
                        :percentage="100"
                        stroke-width="9"
                        :show-text="false"
                        class="progress-bar"
                      />
                    </div>
                    <div class="assets-btn">
                      <el-button type="success">Deposit</el-button>
                      <el-button class="more">More</el-button>
                    </div>
                  </div>
                </div>
              </el-scrollbar>
              <el-divider style="margin-left: -20px; width: 200%" />
              <el-scrollbar>
                <div class="scrollbar-flex-content">
                  <div class="assets-body">
                    <div class="assets-item">
                      <div class="assets-icon"><img :src="icon_trading" /></div>
                      <div class="item-title">Earning</div>
                    </div>
                    <div class="assets-price">₮0.00</div>
                    <div class="demo-progress">
                      <div class="progress-count">0.00%</div>
                      <el-progress
                        :percentage="0"
                        stroke-width="9"
                        :show-text="false"
                        class="progress-bar"
                      />
                    </div>
                    <div class="assets-btn">
                      <el-button type="success">Earn</el-button>
                      <el-button class="more">Transfer</el-button>
                    </div>
                  </div>
                </div>
              </el-scrollbar>
            </el-card>
          </div>
          <div class="left-recent">
            <el-card class="recent-card">
              <template #header>
                <div class="card-header">
                  <span>Recent transactions</span>
                </div>
              </template>
              <div class="recent-box">
                <div class="box-left clearfloat">
                  <div class="rencent-image"><img :src="icon_convert" /></div>
                  <div class="recent-title">Convert USDT</div>
                  <div class="recent-date">09/30/2022, 18:00:00</div>
                </div>
                <div class="recent-count down">-100 USDT</div>
              </div>
              <el-divider style="margin-left: -20px; width: 200%" />
              <div class="recent-box">
                <div class="box-left clearfloat">
                  <div class="rencent-image"><img :src="icon_convert" /></div>
                  <div class="recent-title">Convert ETH</div>
                  <div class="recent-date">09/30/2022, 18:00:00</div>
                </div>
                <div class="recent-count up">+0.0776 ETH</div>
              </div>
              <el-divider style="margin-left: -20px; width: 200%" />
              <div class="recent-box">
                <div class="box-left clearfloat">
                  <div class="rencent-image"><img :src="icon_deposit" /></div>
                  <div class="recent-title">Deposit USDT</div>
                  <div class="recent-date">09/30/2022, 18:00:00</div>
                </div>
                <div class="recent-count up">+3,499 USDT</div>
              </div>
              <el-divider style="margin-left: -20px; width: 200%" />
              <div class="recent-box">
                <div class="box-left clearfloat">
                  <div class="rencent-image">
                    <img :src="icon_withdrawal" />
                  </div>
                  <div class="recent-title">Withdrawal USDT</div>
                  <div class="recent-date">09/30/2022, 18:00:00</div>
                </div>
                <div class="recent-count down">-3,431 USDT</div>
              </div>
              <el-divider style="margin-left: -20px; width: 200%" />
              <div class="recent-box">
                <div class="box-left clearfloat">
                  <div class="rencent-image"><img :src="icon_gift" /></div>
                  <div class="recent-title">Get From Activity ETHW</div>
                  <div class="recent-date">09/30/2022, 18:00:00</div>
                </div>
                <div class="recent-count up">+0.01 ETHW</div>
              </div>
              <el-divider style="margin-left: -20px; width: 200%" />
              <div class="view-more">View more ></div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="24" class="right-box">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span>Assets</span>
              </div>
            </template>
            <div class="value-bottom">
              <div class="recent-box">
                <div class="box-left clearfloat">
                  <div class="rencent-image">
                    <img :src="wallet_select_usdt_on" />
                  </div>
                  <div style="margin-left: 43px">
                    <div class="recent-title">USDT</div>
                    <div class="recent-date">968.0000 USDT</div>
                  </div>
                </div>
                <div class="recent-count">₮960.98</div>
              </div>
              <el-divider style="margin-left: -20px; width: 200%" />
              <div class="recent-box">
                <div class="box-left clearfloat">
                  <div class="rencent-image">
                    <img :src="crypto_icon_eth" />
                  </div>
                  <div style="margin-left: 43px">
                    <div class="recent-title">ETH</div>
                    <div class="recent-date">0.0100 ETH</div>
                  </div>
                </div>
                <div class="recent-count">₮10.00</div>
              </div>
              <el-divider style="margin-left: -20px; width: 200%" />
              <div class="recent-box">
                <div class="box-left clearfloat">
                  <div class="rencent-image">
                    <img :src="crypto_icon_btc" />
                  </div>
                  <div style="margin-left: 43px">
                    <div class="recent-title">BTC</div>
                    <div class="recent-date">0.00049350 BTC</div>
                  </div>
                </div>
                <div class="recent-count">₮10.00</div>
              </div>
              <el-divider style="margin-left: -20px; width: 200%" />
              <div class="view-more">View more ></div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onUnmounted, onMounted, computed } from "vue";
import { ArrowDown, Timer } from "@element-plus/icons-vue";
import GetButton from "../../../../components/GetButton.vue";

import overview_eye from "../../../../assets/wallet/overview_eye.png";
import wallet_select_usdt_off from "../../../../assets/wallet/wallet_select_usdt_off.png";
import wallet_select_usdt_on from "../../../../assets/wallet/wallet_select_usdt_on.png";
import icon_wallet from "../../../../assets/wallet/icon_wallet.png";
import wallet_search_none from "../../../../assets/wallet/wallet_search_none.png";
import icon_trading from "../../../../assets/wallet/icon_trading.png";
import icon_convert from "../../../../assets/wallet/icon_convert.png";
import icon_deposit from "../../../../assets/wallet/icon_deposit.png";
import icon_withdrawal from "../../../../assets/wallet/icon_withdrawal.png";
import icon_gift from "../../../../assets/wallet/icon_gift.png";
import crypto_icon_eth from "../../../../assets/home/crypto_icon_eth.png";
import crypto_icon_btc from "../../../../assets/home/crypto_icon_btc.png";

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

interface User {
  date: string;
  name: string;
  address: string;
}

// const handleEdit = (index: number, row: User) => {
//   console.log(index, row);
// };
// const handleDelete = (index: number, row: User) => {
//   console.log(index, row);
// };

// const tableData: User[] = [
//   {
//     date: "Trading",
//     name: "₮0.00",
//     address: "No. 189, Grove St, Los Angeles",
//   },
//   {
//     date: "Earning",
//     name: "₮0.00",
//     address: "No. 189, Grove St, Los Angeles",
//   },
// ];
const format = (percentage: number) =>
  percentage === 100 ? "Full" : `${percentage}%`;
const deposit = ref("Deposit");
const buy = ref("Buy");
const convert = ref("Convert");
const withdraw = ref("Withdraw");
const transfer = ref("Transfer");
const noneOverView = ref<boolean>(false);
</script>

<style scoped lang="scss">
$fontCol: #7b8293;
$fontSizeMax: 42px;
$fontSizeMedPro: 28px;
$fontSizeMed: 24px;
$fontSizeDefPro: 18px;
$fontSizeDef: 16px;
$fontSizeMinPro: 14px;
$fontSizeMin: 12px;

.minMainFont {
  font-size: $fontSizeDef;
  color: #7b8293;
  line-height: $fontSizeDefPro;
}
:deep() {
  .el-card {
    --el-card-border-radius: 5px;
  }
}
.overview-none-page {
  max-width: 1290px;
  margin: auto;
  .left-box {
    .left-value {
      width: 100%;
      padding: 24px 23px 41px 23px;
      border: 1px solid #ebebeb;
      border-radius: 5px;
      .value-top {
        font-size: 18px;
        color: #cbcccf;
        line-height: 22px;
        img {
          margin-left: 15px;
          width: 17px;
          height: 13px;
        }
      }
      .value-center {
        margin-top: 18px;
        display: flex;
        font-size: 32px;
        color: #cbcccf;
        line-height: 38px;
        button.language-chose {
          margin-left: 19px;
          margin-top: 3px;
          display: flex;
          align-items: center;
          width: 103px;
          height: 30px;
          line-height: 19px;
          font-size: 14px;
          color: #e2e2e2;
          background: none;
          border: 1px solid #e2e2e2;
          border-radius: 2px;
          padding: 0 10px;
          img {
            width: 18px;
            margin-right: 6px;
            vertical-align: middle;
          }
          svg {
            margin-left: 5px;
          }
          :deep(el-icon) {
            width: 18px !important;
          }
        }
      }
      .value-bottom {
        text-align: center;
        :deep(.button) {
          width: 110px;
        }
        .bottom-image {
          margin-top: 17px;
          img {
            width: 70px;
            height: auto;
          }
        }
        .bottom-title {
          margin-top: 17px;
        }
        .bottom-btn {
          margin-top: 21px;
          // display: flex;
          // justify-content: space-between;
          .deposit-btn {
            margin-left: -10px;
            font-weight: 100;
            @media (max-width: 451px) {
              margin-left: 0px;
            }
          }
          .buy-btn {
            margin-left: 10px;
            font-weight: 100;
            color: #000;
            background: #fff;
            border: 1px solid #dfdfe5;
            @media (max-width: 451px) {
              margin-left: 0px;
              margin-top: 5px;
            }
          }
        }
      }
    }
    .left-assets {
      margin-top: 27px;
      :deep() {
        .el-table__row {
          height: 63px;
        }
        .el-table__body-wrapper {
          margin-left: 10px;
        }
        .el-progress__text {
          font-size: 14px !important;
          color: #000000;
          line-height: 16px;
        }
        .el-button--success {
          --el-button-bg-color: #01c19a;
          --el-button-border-color: #01c19a;
          --el-button-active-color: #01c19a;
          --el-button-hover-bg-color: #01c19a;
          --el-button-outline-color: #01c19a;
          --el-button-hover-border-color: #01c19a;
          --el-button-active-bg-color: #01c19a;
        }
      }
      .card-header {
        span {
          font-size: 18px;
          color: #000000;
          line-height: 23px;
        }
      }
      .box-card {
        box-shadow: none;
        width: 100%;
        .scrollbar-flex-content {
          width: 650px;
        }
        .assets-body {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .assets-item {
            display: flex;
            align-items: center;
            .assets-icon {
              width: 30px;
              height: 30px;
              img {
                width: 100%;
                height: 100%;
                object-fit: contain;
              }
            }
            .item-title {
              margin-left: 13px;
            }
          }

          .demo-progress {
            .el-progress--line {
              display: block;
              align-items: center;
              width: 100px;
            }
            .progress-count {
              display: flex;
              float: left;
              font-size: 14px;
              color: #000;
            }
            .progress-bar {
              float: right;
              margin-left: 11px;
              border-radius: 4.5px;
              :deep(.el-progress-bar__outer) {
                background-color: #ebebeb !important;
              }
            }
          }
          .assets-btn {
            :deep() {
              .el-button {
                width: 60px;
                height: 30px;
                font-size: $fontSizeMin;
              }
              .el-button + .el-button {
                margin-left: 11px !important;
              }
            }
            .more {
              color: #000;
              font-size: $fontSizeMin;
              font-weight: lighter;
            }
          }
        }
      }
    }
    .left-recent {
      margin-top: 27px;
      .card-header {
        span {
          font-size: 18px;
          color: #000000;
          line-height: 23px;
        }
      }
      .box-card {
        box-shadow: none;
        width: 100%;
        padding-bottom: 16px;

        .value-bottom {
          text-align: center;
          padding-top: 42px;
          :deep(.button) {
            width: 110px;
          }
          .bottom-image {
            margin-top: 17px;
            img {
              width: 70px;
              height: auto;
            }
          }
          .bottom-title {
            margin-top: 17px;
          }
        }
      }
    }
  }
  .right-box {
    @media (max-width: 1000px) {
      margin-top: 27px;
    }
    .card-header {
      span {
        font-size: 18px;
        color: #000000;
        line-height: 23px;
      }
    }

    .box-card {
      box-shadow: none;
      width: 100%;
      .value-bottom {
        text-align: center;
        padding-top: 22px;
        padding-bottom: 21px;
        :deep(.button) {
          width: 110px;
        }
        .bottom-image {
          margin-top: 17px;
          img {
            width: 70px;
            height: auto;
          }
        }
        .bottom-title {
          margin-top: 17px;
        }
        .bottom-btn {
          margin-top: 21px;
          .deposit-btn {
            margin-left: -10px;
            font-weight: lighter;
            @media (max-width: 451px) {
              margin-left: 0px;
            }
          }
          .buy-btn {
            margin-left: 10px;
            font-weight: 100;
            color: #000;
            background: #fff;
            border: 1px solid #dfdfe5;
            @media (max-width: 451px) {
              margin-left: 0px;
              margin-top: 5px;
            }
          }
        }
      }
    }
  }
}
.overview-date-page {
  max-width: 1290px;
  margin: auto;
  .left-box {
    .left-value {
      width: 100%;
      padding: 24px 23px 41px 23px;
      border: 1px solid #ebebeb;
      border-radius: 5px;
      .value-top {
        font-size: 18px;
        color: #000;
        line-height: 22px;
        img {
          margin-left: 15px;
          width: 17px;
          height: 13px;
        }
      }
      .value-center {
        margin-top: 18px;
        display: flex;
        font-size: 32px;
        color: #000;
        line-height: 38px;
        float: left;
        @media (max-width: 768px) {
          // display: none;
        }
        button.language-chose {
          margin-left: 19px;
          margin-top: 3px;
          display: flex;
          align-items: center;
          width: 103px;
          height: 30px;
          line-height: 19px;
          font-size: 14px;
          background: none;
          border: 1px solid #e2e2e2;
          border-radius: 2px;
          padding: 0 10px;
          img {
            width: 20px;
            margin-right: 6px;
            vertical-align: middle;
          }
          svg {
            margin-left: 5px;
          }
          :deep(el-icon) {
            width: 18px !important;
          }
        }
      }
      .value-bottom {
        text-align: center;
        @media (max-width: 768px) {
          // float: left;
          width: 295px;
        }
        :deep(.button) {
          width: 110px;
        }
        .bottom-image {
          margin-top: 17px;
        }
        .bottom-btn {
          margin-top: 21px;
          display: flex;
          float: right;
          justify-content: space-between;
          :depp(.button) {
            padding: 0;
            font-size: 12px;
          }

          .deposit-btn {
            margin-left: -10px;
            font-size: 12px;
            width: 70px;
            height: 30px;
            padding: 0;
            font-weight: 100;
          }
          .func-btn {
            width: 70px;
            height: 30px;
            font-size: 12px;

            margin-left: 10px;
            font-weight: 100;
            color: #000;
            background: #fff;
            border: 1px solid #dfdfe5;
            padding: 0;
            @media (max-width: 768px) {
              margin-left: 5px;
              // margin-top: 5px;
            }
          }
        }
      }
    }
    .left-assets {
      margin-top: 27px;
      :deep() {
        .el-table__row {
          height: 63px;
        }
        .el-table__body-wrapper {
          margin-left: 10px;
        }
        .el-progress__text {
          font-size: 14px !important;
          color: #000000;
          line-height: 16px;
        }
        .el-button--success {
          --el-button-bg-color: #01c19a;
          --el-button-border-color: #01c19a;
          --el-button-active-color: #01c19a;
          --el-button-hover-bg-color: #01c19a;
          --el-button-outline-color: #01c19a;
          --el-button-hover-border-color: #01c19a;
          --el-button-active-bg-color: #01c19a;
        }
      }
      .card-header {
        span {
          font-size: 18px;
          color: #000000;
          line-height: 23px;
        }
      }
      .box-card {
        box-shadow: none;
        width: 100%;
        .scrollbar-flex-content {
          width: 650px;
        }
        .assets-body {
          display: flex;
          justify-content: space-between;
          align-items: center;
          @media (max-width: 768px) {
            height: 30px;
          }
          .assets-item {
            display: flex;
            align-items: center;
            .assets-icon {
              width: 30px;
              height: 30px;
              img {
                width: 100%;
                height: 100%;
                object-fit: contain;
              }
            }
            .item-title {
              margin-left: 13px;
            }
          }
          .assets-price {
            width: 100px;
            text-align: right;
          }

          .demo-progress {
            .el-progress--line {
              display: block;
              align-items: center;
              width: 100px;
            }
            :deep(.el-progress-bar__inner) {
              background-color: #01c19a;
            }
            .progress-count {
              float: left;
              font-size: 14px;
              color: #000;
              width: 50px;
              text-align: right;
            }
            .progress-bar {
              float: right;
              margin-left: 15px;
              margin-top: 2px;
              border-radius: 4.5px;
              :deep(.el-progress-bar__outer) {
                background-color: #ebebeb !important;
              }
            }
          }
          .assets-btn {
            :deep() {
              .el-button {
                width: 60px;
                height: 30px;
                font-size: $fontSizeMin;
              }
              .el-button + .el-button {
                margin-left: 11px !important;
              }
            }
            .more {
              color: #000;
              font-size: $fontSizeMin;
              font-weight: lighter;
            }
          }
        }
      }
    }
    .left-recent {
      margin-top: 27px;
      .card-header {
        span {
          font-size: 18px;
          color: #000000;
          line-height: 23px;
        }
      }
      .recent-card {
        box-shadow: none;
        width: 100%;
        padding-bottom: 16px;
        .recent-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 21px;
          .up {
            font-size: 16px;
            color: #01c19a;
            line-height: 18px;
          }
          .down {
            font-size: 16px;
            color: #f35854;
            line-height: 18px;
          }

          .box-left {
            width: 80%;
            .rencent-image {
              float: left;
              width: 30px;
              img {
                width: 100%;
                height: 100%;
                object-fit: contain;
              }
            }
            .recent-title {
              font-size: 14px;
              color: #000000;
              line-height: 16px;
              margin-left: 43px;
            }
            .recent-date {
              margin-left: 43px;
              margin-top: 4px;
              font-size: 12px;
              color: #7b8293;
              line-height: 14px;
            }
          }
        }
        .view-more {
          float: right;
          font-size: 14px;
          color: #7b8293;
          line-height: 16px;
          padding-bottom: 10px;
        }
      }
    }
  }
  .right-box {
    @media (max-width: 1000px) {
      margin-top: 27px;
    }
    .card-header {
      span {
        font-size: 18px;
        color: #000000;
        line-height: 23px;
      }
    }

    .box-card {
      box-shadow: none;
      width: 100%;
      .value-bottom {
        // text-align: center;
        // padding-top: 22px;
        // padding-bottom: 21px;
        .recent-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 21px;
          .recent-count {
            font-size: 16px;
            color: #020202;
            line-height: 18px;
          }
          .box-left {
            .rencent-image {
              float: left;
              width: 32px;
              height: 32px;
              img {
                width: 100%;
                height: 100%;
                object-fit: contain;
              }
            }
            .recent-title {
              display: block;
              font-size: 14px;
              color: #020202;
              line-height: 17px;
              // margin-left: 11px;
            }
            .recent-date {
              // margin-left: 11px;
              width: 100%;
              margin-top: 3px;
              font-size: 14px;
              color: #878787;
              line-height: 16px;
            }
          }
        }
        .view-more {
          float: right;
          font-size: 14px;
          color: #7b8293;
          line-height: 16px;
          padding-bottom: 24px;
        }
      }
    }
  }
}
</style>
