<template>
  <div class="deposit-crypto">
    <el-row >
      <el-col :span="15" :xs="24" class="left-box">
        <div class="left-header">
          <div class="header-title">{{ $t('messages.pay_order.deposit_fiat') }}</div>
        </div>
        <div class="left-center">
          <el-form :model="form" ref="ruleFormRef" :rules="rules">
            <div class="center-step-box" style="height: 100%">
              <div v-if="depositStatus === false">
                <el-steps :active="activeStep" direction="vertical" align-center>
                  <el-step :title="t('messages.pay_order.select')">
                    <template #description>
                      <div v-if="activeStep >= 1" class="select">
                        <el-form-item style="position: relative;" prop="selectedOption1">
                          <div v-if="selectCurrencyContent" class="custome-select-content" @click.capture>
                            <img :src="selectCurrencyContent.icon"/>
                            <div style="display: flex; align-items: baseline; gap: 7px;">
                              <span style="font-size: 16px;color: #020202;">{{ selectCurrencyContent.label }}</span>
                              <span style="font-size: 14px;color: #9B9B9B;">{{
                                  selectCurrencyContent.description
                                }}</span>
                            </div>
                          </div>
                          <!--                          /au/user/depositFiat-->
                          <el-tooltip
                              class="box-item"
                              effect="dark"
                              content="Please complete the verification process before proceeding."
                              :disabled="validKycBuy"
                              placement="top"
                          >
                            <el-select v-model="form.selectedOption1"
                                       placeholder="Select currency"
                                       :disabled="!validKycBuy"
                                       @change="selectCurrency">
                              <el-option
                                  :show-arrow="false"
                                  v-for="item in options1"
                                  :key="item.value"
                                  :label="item.label"
                                  style="height: 47px;"
                                  :value="item.value"
                                  v-if="$route.path.startsWith('/au')">
                                <div
                                    style="display: flex; align-items: center; gap: 12.4px;position:relative; height: 47px;">
                                  <img :src="item.icon"/>
                                  <div style="display: flex; align-items: baseline; gap: 7px;">
                                    <span style="font-size: 16px;color: #020202;">{{ item.label }}</span>
                                    <span style="font-size: 14px;color: #9B9B9B;">{{ item.description }}</span>
                                  </div>
                                </div>
                              </el-option>
                              <el-option
                                  :show-arrow="false"
                                  v-for="item in optionsNZ"
                                  :key="item.value"
                                  :label="item.label"
                                  style="height: 47px;"
                                  :value="item.value"
                                  v-if="$route.path.startsWith('/nz')">
                                <div
                                    style="display: flex; align-items: center; gap: 12.4px;position:relative; height: 47px;">
                                  <img :src="item.icon"/>
                                  <div style="display: flex; align-items: baseline; gap: 7px;">
                                    <span style="font-size: 16px;color: #020202;">{{ item.label }}</span>
                                    <span style="font-size: 14px;color: #9B9B9B;">{{ item.description }}</span>
                                  </div>
                                </div>
                              </el-option>
                            </el-select>
                          </el-tooltip>
                          <!--                          <el-select v-model="form.selectedOption1"-->
                          <!--                                     placeholder="Select currency"-->
                          <!--                                     v-if="$route.path.startsWith('/nz')"-->
                          <!--                                     @change="selectCurrency">-->
                          <!--                            <el-option-->
                          <!--                                :show-arrow="false"-->
                          <!--                                v-for="item in options1.slice(1, 2)"-->
                          <!--                                :key="item.value"-->
                          <!--                                :label="item.label"-->
                          <!--                                style="height: 47px;"-->
                          <!--                                :value="item.value">-->
                          <!--                              <div style="display: flex; align-items: center; gap: 12.4px;position:relative; height: 47px;">-->
                          <!--                                <img :src="item.icon"/>-->
                          <!--                                <div style="display: flex; align-items: baseline; gap: 7px;">-->
                          <!--                                  <span style="font-size: 16px;color: #020202;">{{ item.label }}</span>-->
                          <!--                                  <span style="font-size: 14px;color: #9B9B9B;">{{ item.description }}</span>-->
                          <!--                                </div>-->
                          <!--                              </div>-->
                          <!--                            </el-option>-->
                          <!--                          </el-select>-->
                        </el-form-item>
                      </div>
                    </template>
                  </el-step>
                  <el-step :title="t('messages.pay_order.select_payment')" style="min-height: 100px;">
                    <template #description>
                      <el-form-item v-if="activeStep >= 2" prop="selectedPayment">
                        <div v-if="form.selectedOption1 === 'AUD'" class="payment-box">
                          <div class="payment-way">
                            <img class="payment-pay no-select" :src="payment_payid"
                                 :class="{ 'selected': form.selectedPayment === 'PayID' }"
                                 @click="selectPayment('PayID')"/>
                          </div>
                          <div class="payment-way">
                            <img class="payment-bank no-select" :src="payment_bank"
                                 :class="{ 'selected': form.selectedPayment === 'Bank Transfer' }"
                                 @click="selectPayment('Bank Transfer')"/>
                          </div>
                        </div>
                        <div class="payment-box" v-else-if="form.selectedOption1 === 'NZD'">
                          <div class="payment-way">
                            <img class="payment-poli no-select" :src="payment_poli"
                                 :class="{ 'selected': form.selectedPayment === 'Poli' }"
                                 @click="selectPayment('Poli', true)"/>
                          </div>
                        </div>
                      </el-form-item>
                    </template>
                  </el-step>
                  <el-step :title="t('messages.pay_order.enter_amount')">
                    <template #description>
                      <div
                          v-if="activeStep >= 3"
                          class="select clearfloat"
                          style="position: relative"
                      >
                        <div
                            class="enter-amount-tips"
                            @click="dialogVisible = true"
                        >
                          <el-icon>
                            <Warning/>
                          </el-icon>
                          {{ $t('messages.pay_order.require') }}
                        </div>
                        <el-dialog
                            v-model="dialogVisible"
                            class="dialog-box"
                            width="412px"
                            style="padding: 0 22px 36px 22px"
                        >
                          <template #header>
                            <div class="dialog-header">
                              {{ $t('messages.pay_order.require') }}
                            </div>
                          </template>
                          <div class="divider"></div>
                          <div class="suggest">Suggested Amount</div>

                          <div class="count-range">A$50-2,000,000</div>
                          <div class="limit requirements">
                            <div class="limit-icon">
                              <img class="icon" :src="trans_01"/>
                            </div>
                            <div class="limit-title">Limit per transaction</div>
                            <div class="limit-count">A$50-1,000,000,000</div>
                          </div>
                          <div class="remain requirements clearfloat">
                            <div class="limit-icon">
                              <img class="icon" :src="trans_02"/>
                            </div>
                            <div class="limit-title">Remaining daily limit</div>
                            <div class="limit-count">A$2,000,000</div>
                            <div class="limit-sign">/A$2M</div>
                          </div>
                        </el-dialog>

                        <div class="step-input">
                          <el-form-item prop="coinAmount">
                            <el-input-number
                                :controls="false"
                                class="input coin-amount"
                                v-model="form.coinAmount"
                                type="number"
                                placeholder="Please enter the amount"
                                @input="updateCanContinue"
                                :precision="2" :step="0.1"
                            />
                          </el-form-item>
                          <div class="label">
                            {{ form.selectedOption1 }}
                          </div>
                        </div>
                        <!-- 输入数值判断 -->
                        <!-- <div class="input-rule">
                            The limit per transaction is between 50-2000000 AUD.
                            Please adjust the amount.
                          </div> -->
                        <div class="enter-amount-rule">
                          <div class="fait-rule-item" v-show="activeStep === 2">
                            <div class="title">Transaction Method:</div>
                            <div class="require">
                              <div class="pay-img">
                                <img :src="crypto_icon_usdt"/>
                              </div>
                              <span>PayID/Osko</span>
                            </div>
                          </div>
                          <div
                              class="fait-rule-item"
                              style="padding-bottom: 15px"
                          >
                            <div class="title">{{ $t('messages.pay_order.fee') }}:</div>
                            <div class="require">
<!--                              <span v-if="form.coinAmount">{{ formatNumber(form.coinAmount) }}</span>-->
                              <span>0.00</span>
                              {{ form.selectedOption1 }}
                            </div>
                          </div>
                          <div class="receive-box" v-show="activeStep === 2 || 3">
                            <el-divider class="deposit-divider"></el-divider>
                            <div class="receive">{{ $t('messages.pay_order.receive') }}:</div>
                            <div class="receive-count">
                              <span v-if="form.coinAmount">{{ formatNumber(form.coinAmount) }}</span>
                              <span v-else>0.00</span> {{ form.selectedOption1 }}
                            </div>
                          </div>
                        </div>
                        <el-button
                            v-show="showContinueBtn"
                            class="continue-btn"
                            type="primary"
                            :disabled="!canContinue"
                            @click="handleContinue(ruleFormRef)"
                        >
                          {{ $t('messages.deposit_Fiat.continue_btn') }}
                        </el-button>
                      </div>
                      <el-dialog
                          v-model="dialogContinue"
                          class="dialog-box"
                          width="412px"
                          style="padding: 0 22px 36px 22px"
                      >
                        <template #header>
                          <div class="dialog-header-require">
                            {{ $t('messages.pay_order.require') }}
                          </div>
                        </template>
                        <div class="divider-require"></div>
                        <div
                            class="require-list"
                            v-for="(item, index) in requireList"
                            :key="index"
                        >
                          <div class="list-img">
                            <img class="image" :src="item.img"/>
                          </div>
                          <div class="list-info" v-html="item.info"></div>
                        </div>
                        <template #footer>
                          <el-button @click="handleSubmit" class="know-btn" :loading="submitDepositLoading"
                                     :disabled="submitDepositLoading"
                          > {{ $t('messages.deposit_Fiat.agree_btn') }}
                          </el-button
                          >
                        </template>
                      </el-dialog>
                    </template>
                  </el-step>
                </el-steps>
              </div>
              <div v-else>
                <div class="success-box">
                  <div class="title">
                    {{ $t('messages.deposit_Fiat.transfer_order') }}
                  </div>
                  <div v-if="form.selectedPayment === 'PayID'">
                    <div class="tip">
                      {{ $t('messages.deposit_Fiat.transfer_tip1') }}
                      <span
                      > {{ $t('messages.deposit_Fiat.transfer_tip2') }}</span
                      >
                      {{ $t('messages.deposit_Fiat.transfer_tip3') }}
                    </div>
                    <div class="info">
                      <div class="info-price">
                        <div class="coin">
                          <div v-if="selectCurrencyContent"><img :src="selectCurrencyContent.icon"/></div>
                          <div class="coin-name">{{ form.selectedOption1 }}</div>
                        </div>
                        <!-- <div class="count">{{form.selectedOption1}}</div> -->
                        <div class="count">{{ formatNumber(form.coinAmount || 0) }}</div>
                      </div>
                      <div class="divider"></div>
                      <div class="info-con">PayID Information</div>
                      <div class="info-email">
                        <div class="email-number">{{ userInfo?.zepto_account?.email || '----' }}</div>
                        <div class="email-copy" @click="textToCopy(userInfo?.zepto_account?.email || '----')">
                          <img :src="copy"/>
                          Copy
                        </div>
                      </div>
                    </div>
                    <div class="previous" @click="clickPrevious"> {{ $t('messages.deposit_Fiat.previous_btn') }}</div>
                  </div>
                  <div v-else>
                    <div class="tip">
                      Please use your unique Direct Credit detail below to make
                      the transfer and select
                      <span>'Pay Anyone'</span> when transferring from online
                      banking or mobile app.
                    </div>
                    <div class="info">
                      <div class="info-price">
                        <div class="coin">
                          <div v-if="selectCurrencyContent"><img :src="selectCurrencyContent.icon"/></div>
                          <div class="coin-name">{{ form.selectedOption1 }}</div>
                        </div>
                        <!-- <div class="count">{{form.selectedOption1}}</div> -->
                        <div class="count">{{ formatNumber(form.coinAmount || 0) }}</div>
                      </div>
                      <div class="divider"></div>
                      <div class="info-title">Account Name:</div>
                      <div class="info-email">
                        <div class="email-number">{{ userInfo?.zepto_account?.name || '----' }}</div>
                        <div class="email-copy" @click="textToCopy(userInfo?.zepto_account?.name || '----')">
                          <img :src="copy"/>
                          Copy
                        </div>
                      </div>

                      <div class="info-title">BSB Number:</div>
                      <div class="info-email">
                        <div class="email-number">{{ userInfo?.zepto_account?.bank_branch_code || '----' }}</div>
                        <div class="email-copy"
                             @click="textToCopy(userInfo?.zepto_account?.bank_branch_code || '----')">
                          <img :src="copy"/>
                          Copy
                        </div>
                      </div>

                      <div class="info-title">Account Number:</div>
                      <div class="info-email">
                        <div class="email-number">{{ userInfo?.zepto_account?.bank_account_number || '----' }}</div>
                        <div class="email-copy"
                             @click="textToCopy(userInfo?.zepto_account?.bank_account_number || '----')">
                          <img :src="copy"/>
                          Copy
                        </div>
                      </div>

                      <div class="info-title">Reference (Optional):</div>
                      <div class="info-email">
                        <div class="email-number">{{ userInfo?.zepto_account?.ref || '----' }}</div>
                        <div class="email-copy" @click="textToCopy(userInfo?.zepto_account?.ref || '----')">
                          <img :src="copy"/>
                          Copy
                        </div>
                      </div>
                    </div>
                    <div class="previous" @click="clickPrevious">previous</div>
                  </div>
                </div>
              </div>
            </div>
          </el-form>
        </div>
      </el-col>
      <el-col :span="9" :xs="24" class="right-box" style="margin-top: 10px">
        <div class="tips" v-if="depositStatus === false">
          <div @click="sendEmail">
            <div class="tips-question" style="cursor: pointer">
              <div class="question-title">
                <img :src="appeal"/>
              </div>
              <div class="question-content content">{{ $t('messages.pay_order.appeal') }}</div>
            </div>
          </div>
          <div class="tips-faq">
            <div class="faq-title">
<!--              <img style="width: 14px; height: auto" :src="notice"/>-->
<!--              Notice-->
              {{ $t('messages.pay_order.note') }}
            </div>
            <el-divider/>
            <div class="faq-content content">
              <div>
                {{ $t('messages.pay_order.first_note') }}

              </div>
              <br/>
              <div>
                {{ $t('messages.pay_order.second_note') }}

              </div>
              <br/>
              <div>
                {{ $t('messages.pay_order.third_note') }}

                <span style="cursor: pointer; color: #01c19a !important"
                >  {{ $t('messages.pay_order.term') }}</span
                >
                {{ $t('messages.pay_order.and') }}
                <span style="cursor: pointer; color: #01c19a !important"
                > {{ $t('messages.pay_order.privacy') }}</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="tips"  v-else>
          <div class="success-right">
            <div @click="sendEmail">
              <div class="tips-question">
                <div class="question-title">
                  <img :src="appeal"/>
                </div>
                <div class="question-content content">{{ $t('messages.pay_order.appeal') }}</div>
              </div>
            </div>
            <div class="tips-question" @click="openRequireDialog">
              <div class="question-title">
                <img :src="notice" style="width: 13px; height: auto"/>
              </div>
              <div class="question-content content">{{ $t('messages.deposit_Fiat.view_notes') }}</div>
            </div>
            <el-dialog
                v-model="dialogNoteContinue"
                class="dialog-box"
                width="412px"
                style="padding: 0 22px 36px 22px"
            >
              <template #header>
                <div class="dialog-header-require">
                  {{ $t('messages.pay_order.require') }}
                </div>
              </template>
              <div class="divider-require"></div>
              <div
                  class="require-list"
                  v-for="(item, index) in requireList"
                  :key="index"
              >
                <div class="list-img">
                  <img class="image" :src="item.img"/>
                </div>
                <div class="list-info" v-html="item.info"></div>
              </div>
              <template #footer>
                <el-button @click="dialogNoteContinue = false" class="know-btn" :loading="submitDepositLoading"
                           :disabled="submitDepositLoading"
                > {{ $t('messages.deposit_Fiat.agree_btn') }}
                </el-button
                >
              </template>
            </el-dialog>
          </div>
          <div class="tips-faq">
            <div class="faq-title">
              <img style="width: 20px; height: auto" :src="how"/>
              <span style="margin-left: 5px">{{ $t('messages.deposit_Fiat.how') }}</span>
            </div>
            <el-divider/>
            <div class="faq-content content">
              <div class="work-title">{{ $t('messages.deposit_Fiat.how_transfer') }}</div>
              <div class="work-content">
                {{ $t('messages.deposit_Fiat.how_to') }}
              </div>
              <br/>
              <div class="work-title">{{ $t('messages.deposit_Fiat.order') }}</div>

              <div class="work-content">
                {{ $t('messages.deposit_Fiat.order_time') }}
              </div>
              <div class="view"> {{ $t('messages.deposit_Fiat.view_history') }} &gt;</div>
              <br/>
              <div class="work-title">{{ $t('messages.deposit_Fiat.fund_arrived') }}</div>

              <div class="work-content">{{ $t('messages.deposit_Fiat.fund_release') }}</div>
              <div class="view">{{ $t('messages.deposit_Fiat.view_wallet') }} &gt;</div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <!--    <div-->
    <!--        class="deposit-details clearfloat"-->
    <!--        v-if="activeStep >= 4"-->
    <!--    >-->
    <!--      <div class="recent-deposit clearfloat" v-loading="tableDataLoading">-->
    <!--        <div class="table-name">Recent Deposits</div>-->
    <!--        <div class="not-arrive">Hasn't arrived?</div>-->
    <!--        <Table :sourceData="tableData" class="deposit-table">-->
    <!--          <template v-slot:columns>-->
    <!--            <el-table-column-->
    <!--                prop="CreatedAt"-->
    <!--                :label="t('messages.wallet.fiat_Time')"-->
    <!--                width="210"-->
    <!--            >-->
    <!--            <template #default="scope">-->
    <!--              {{ formatDate(scope.row.CreatedAt) }}-->
    <!--            </template>-->
    <!--          </el-table-column>-->
    <!--            <el-table-column-->
    <!--                prop="currency"-->
    <!--                :label="t('messages.wallet.fiat_Coin')"-->
    <!--                width="210"-->
    <!--            />-->
    <!--            <el-table-column-->
    <!--                prop="amount"-->
    <!--                :label="t('messages.wallet.fiat_Amount')"-->
    <!--                width="240"-->
    <!--            >-->
    <!--              <template #default="scope">-->
    <!--                <div>-->
    <!--                  {{ formatNumber(scope.row.amount) }}-->
    <!--                </div>-->
    <!--              </template>-->
    <!--            </el-table-column>-->
    <!--            <el-table-column-->
    <!--                :label="t('messages.wallet.fiat_Status')"-->
    <!--                width="230"-->
    <!--            >-->
    <!--              <template #default="scope">-->
    <!--                <div-->
    <!--                    style="color: #01c19a"-->
    <!--                >-->
    <!--                  Successful-->
    <!--                </div>-->
    <!--                &lt;!&ndash; <div-->
    <!--                    v-if="scope.row.status === 'Successful'"-->
    <!--                    style="color: #01c19a"-->
    <!--                >-->
    <!--                  Successful-->
    <!--                </div>-->
    <!--                <div v-else-if="scope.row.status === 'Faild'">Faild</div> &ndash;&gt;-->
    <!--              </template>-->
    <!--            </el-table-column>-->
    <!--            <el-table-column :label="t('messages.wallet.fiat_Information')">-->
    <!--              <template #default="scope">-->
    <!--                <template v-if="!isFoldArr.includes(scope.row.ID)">-->
    <!--                  <div class="info">-->
    <!--                    <p>Payment Method:</p>-->
    <!--                    <p>{{ scope.row.pay_method }}</p>-->
    <!--                  </div>-->
    <!--                </template>-->
    <!--                <template v-else>-->
    <!--                  <div class="info">-->
    <!--                    <p>Payment Method:</p>-->
    <!--                    <p>{{ scope.row.pay_method }}</p>-->
    <!--                  </div>-->
    <!--                  <div class="info">-->
    <!--                    <p>Indicated Amount:</p>-->
    <!--                    <p>{{ formatNumber(scope.row.amount) }}</p>-->
    <!--                  </div>-->
    <!--                  <div class="info">-->
    <!--                    <p>Fee:</p>-->
    <!--                    <p>{{ formatNumber(scope.row.amount) }}</p>-->
    <!--                  </div>-->
    <!--                  <div class="info">-->
    <!--                    <p>Order ID:</p>-->
    <!--                    <p>{{ scope.row.ID }}</p>-->
    <!--                  </div>-->
    <!--                </template>-->
    <!--              </template>-->
    <!--            </el-table-column>-->
    <!--            <el-table-column label="">-->
    <!--              <template #default="scope">-->
    <!--                <el-button-->
    <!--                    type="text"-->
    <!--                    :class="{-->
    <!--                    icon_button: true,-->
    <!--                    isRotate: isFoldArr.includes(scope.row.ID),-->
    <!--                  }"-->
    <!--                    @click="getKey(scope.row.ID)"-->
    <!--                    style="transition: all .4s;"-->
    <!--                >-->
    <!--                  <el-icon style="color: #9b9b9b">-->
    <!--                    <CaretBottom/>-->
    <!--                  </el-icon-->
    <!--                  >-->
    <!--                </el-button>-->
    <!--              </template>-->
    <!--            </el-table-column>-->
    <!--          </template>-->
    <!--        </Table>-->
    <!--        <div style="display: flex; justify-content: flex-end;height: 70px;">-->
    <!--          <el-pagination layout="prev, pager, next" :total="pageTotal" @current-change="currentChange"/>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script setup lang="ts">
import {ref, reactive, onUnmounted, onMounted, computed, watch} from "vue";
import type {Ref} from "vue";
import {
  Link,
  Right,
  CopyDocument,
  Upload,
  Opportunity,
  Warning,
  CaretBottom,
} from "@element-plus/icons-vue";
import GetButton from "../../../../components/GetButton.vue";
import {useWindowSize} from "../../../../hooks/useWindowSize";
import login_qrcode from "../../../../assets/home/download_qrcode.png";
import crypto_icon_usdt from "../../../../assets/home/crypto_icon_usdt.png";
import Table from "../component/Table.vue";
import {NumberFormat, useI18n} from "vue-i18n";
import {ElMessage, ElMessageBox, FormInstance, FormRules,} from "element-plus";
import requireOne from "../../../../assets/deposit/icon01.png";
import requireTwo from "../../../../assets/deposit/icon02.png";
import requireThree from "../../../../assets/deposit/icon03.png";
import requireFour from "../../../../assets/deposit/icon04.png";
import requireFive from "../../../../assets/deposit/icon05.png";
import trans_01 from "../../../../assets/image/trans_01.svg";
import trans_02 from "../../../../assets/image/trans_02.svg";
import payment_payid from "../../../../assets/image/payment_payid.png";
import payment_bank from "../../../../assets/image/payment_bank.png";
import payment_poli from '../../../../assets/image/nz_pay.png';
import appeal from "../../../../assets/image/appeal.svg";
import notice from "../../../../assets/image/notice.svg";
import how from "../../../../assets/deposit/how.svg";
import copy from "../../../../assets/image/copy.svg";
import coin_aud from "../../../../assets/image/coin_aud.svg";
import coin_nzd from "../../../../assets/image/coin_nzd.svg";
import {getDepositTransactions} from "../../../../api/deposit";
import {addTransaction, getTransactionList} from '../../../../api/transactions';
import dayjs from "dayjs";
import {useUserInfoStore} from "../../../../store/user";
import {storeToRefs} from "pinia";
import {formatNumber} from "../../../../utils/formatNumber";
import * as userAPI from "../../../../api/user";
import {useRoute, useRouter} from "vue-router";


const router = useRouter();
const userInfoStore = useUserInfoStore();
const {userInfo, validKycBuy, validKycSell} = storeToRefs(userInfoStore);

const dialogVisible = ref(false);
const dialogContinue = ref(false);
const dialogNoteContinue = ref(false);


const depositStatus = ref(false);
const faqActiveName = ref("1");

const previousStatus = ref(false);

function clickPrevious() {
  location.reload();
  router.push('/user/depositFiat');

}

const {t} = useI18n();
const noFound = ref(false);

const windowWidth = useWindowSize().width;
const activeStep = ref(1);
const selectedOption1 = ref("");
const selectedOption2 = ref("");
const canContinue = ref(false);
const selectedPayment = ref<string | null>(null);

// Form 表单 2023-08-17
const ruleFormRef = ref<FormInstance>();

interface Form {
  selectedOption1: string;
  selectedPayment: string;
  coinAmount: number | null;
}

const form = ref<Form>({
  selectedOption1: "",
  selectedPayment: "",
  coinAmount: null
})

const rules = reactive<FormRules>({
  selectedOption1: [{
    required: true, message: "Please select currency.", trigger: "blur"
  }],
  selectedPayment: [{
    required: true, message: "Please select payment method.", trigger: "change"
  }],
  coinAmount: [
    {required: true, message: "Please enter amount.", trigger: "blur"},
    {validator: validateCoinAmount, trigger: 'blur'}
  ],
})
const openRequireDialog = () => {
  dialogNoteContinue.value = true;
}
// 验证amount
function validateCoinAmount(rule: any, value: any, callback: any) {
  if (Number(value) < 50 || Number(value) > 2000000) {
    callback(new Error('The limit per transaction is between 50-2000000 ' + form.value.selectedOption1 + '. Please adjust the amount.'));
  } else {
    callback()
  }
}

// 验证表单
async function validForm(formEl: FormInstance | undefined) {
  if (!formEl) return false;
  return await formEl.validate((valid) => valid);
}

// 提交交易
async function submitTransaction(data: Form) {
  const addData = {
    // country 未知
    country: "au",
    currency: data.selectedOption1,
    pay_method: data.selectedPayment,
    amount: Number(data.coinAmount),
    // crypto 未知
    crypto: ""
  }
  return await addTransaction(addData);
}

const sendEmail = () => {
  const recipient = 'support@coinbyte.exchange'; // 收件人邮箱地址
  const subject = '邮件主题'; // 邮件主题
  const body = '邮件内容'; // 邮件内容

  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
};

const tableDataLoading = ref(false);
const formatDate = (date: Date) => {
  return dayjs(date).format('YYYY-MM-DD HH:mm');
}
// 处理提交后结果
const submitDepositLoading = ref(false);

async function handleSubmit() {
  try {
    submitDepositLoading.value = true;
    const submitResult = await submitTransaction(form.value);
    submitDepositLoading.value = false;
    if (submitResult.data.msg === 'success') {
      depositStatus.value = true;
      activeStep.value = 4;
      toGetTransactionList(1);
    }
  } catch (e) {
    ElMessage.error('Please try again later.');
    submitDepositLoading.value = false;
  }
}

const pageTotal = ref(0);
const pageData = ref({
  page: 1,
  page_size: 10
})
const toGetTransactionList = (page: number) => {
  tableDataLoading.value = true;
  getTransactionList({
    page: page,
    page_size: pageData.value.page_size
  }).then((res: any) => {
    // console.log(res.data);
    if (res.data.data && res.data.data.Data) {
      if (!pageTotal.value) {
        pageTotal.value = res.data.data.Count;
      }
      tableData.value = res.data.data.Data;
    }
    tableDataLoading.value = false;
  }).catch(() => {
    ElMessage.error("Data loading failed");
    tableDataLoading.value = false;
  });
}

const currentChange = (page: number) => {
  console.log('current change');
  toGetTransactionList(page);
  pageData.value.page = page;
}
// ----------------------------------------------------------------

let options1 = [
  {value: "AUD", label: "AUD", icon: coin_aud, description: "Australian Dollar"},
];
let optionsNZ = [
  {value: "NZD", label: "NZD", icon: coin_nzd, description: "New Zealand Dollar"},
]
// select content
const selectCurrencyContent = computed(() => {
  return options1.find(v => v.value === form.value.selectedOption1);
  return optionsNZ.find(v => v.value === form.value.selectedOption1);
})
let options2 = [
  {value: "optionA", label: "Polygon"},
  {value: "optionB", label: "Solana"},
  {value: "optionC", label: "Tezos"},
  {value: "optionD", label: "Tron(TRC20)"},
];

const showStepThree = ref(false);
const showContinueBtn = ref(true);

// step1
function selectCurrency() {
  if (!validKycBuy.value) return;
  activeStep.value = 2;
  // if (activeStep.value === 1 && selectedOption1.value !== "") {
  // } else if (activeStep.value === 2 && canContinue.value) {
  //   console.log("xx2")
  //   // 不再隐藏步骤二的内容，直接进入第三步
  //   console.log(activeStep.value);
  //   activeStep.value = 3;
  //   showStepThree.value = true;
  //   showContinueBtn.value = true; // 隐藏继续按钮
  //   dialogContinue.value = true;
  // }

  console.log("selected currency", form.value.selectedOption1)
}

// step2
function selectPayment(payment: string, disabled: boolean = false) {
  if (disabled) return;
  activeStep.value = 3
  if (form.value.selectedPayment === payment) {
    form.value.selectedPayment = ""; // 若已选中，则取消选择
  } else {
    form.value.selectedPayment = payment; // 切换选中的支付方式
  }
}

// step3
async function handleContinue(ruleFormRef: FormInstance | undefined) {
  console.log(await validForm(ruleFormRef));
  if (!await validForm(ruleFormRef)) {
    return;
  }
  try {
    const profile = await userAPI.getProfile();
    // 在这里可以继续调用其他 userAPI 中的函数
  } catch (error) {
    console.error(error);
  }
  showContinueBtn.value = true; // 隐藏继续按钮
  dialogContinue.value = true;
}

function updateCanContinue() {
  canContinue.value = selectedOption2.value !== null;
}

function closeDialog() {
  dialogContinue.value = false;
}

const requireList = [
  {
    img: requireOne,
    info: t('messages.deposit_Fiat.trans_1')
  },
  {
    img: requireTwo,
    info: t('messages.deposit_Fiat.trans_2')
  },
  {
    img: requireThree,
    info: `${t('messages.deposit_Fiat.trans_3')} <span style='color: #01c19a;cursor:pointer;'>${t('messages.deposit_Fiat.term')}</span> ${t('messages.deposit_Fiat.and')} <span style='color: #01c19a;cursor:pointer;'>${t('messages.deposit_Fiat.privacy')}</span>。`,
  },
  {
    img: requireFour,
    info: t('messages.deposit_Fiat.trans_4')
  },
  {
    img: requireFive,
    info: t('messages.deposit_Fiat.trans_5')
  },
];
const isFoldArr = ref<string[]>([]);
const getKey = (key: string) => {
  let index = isFoldArr.value.indexOf(key);
  if (index >= 0) {
    isFoldArr.value.splice(index, 1);
  } else {
    isFoldArr.value.push(key);
  }
};

const textToCopy = (contentToCopy: string | number) => {
  console.log(navigator);
  navigator.clipboard?.writeText(`${contentToCopy}`);
  ElMessage.success('Copied to clipboard!');
}

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

    .el-step__head.is-finish .is-text {
      background-color: #01c19a;
      color: #FFF;
    }

    .el-step__head.is-process .is-text, .el-step__head.is-wait .is-text {
      border: none;
      background-color: #F1F1F1;
      color: #CBCCCF;
    }

    .el-step:last-of-type .el-step__description, .el-step:last-of-type .el-step__main {
      width: 100%;
      max-width: 442px;
    }

    .el-input__inner {
      color: #000 !important;
      font-family: Helvetica-Neue;
    }
  }
}

.left-box {
  @media(max-width: 992px) {
    padding-right: 20px !important;
  }

  .left-header {
    display: flex;
    justify-content: space-between;

    .header-title {
      font-size: $fontSizeMed;
      color: #000;
      line-height: 32px;
      //font-weight: bold;
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
    .success-box {
      width: 438px;
      @media(max-width: 992px) {
        width: 100%;
      }
      .title {
        font-size: 20px;
        color: #000000;
        line-height: 25px;
        font-weight: 500;
      }

      .tip {
        margin-top: 19px;
        padding: 14px 4px 8px 13px;
        background: #fef9e0;
        border-radius: 4px;
        font-size: 12px;
        color: #878787;
        line-height: 16px;

        span {
          color: #01c19a;
        }
      }

      .info {
        margin-top: 23px;
        padding: 16px 13px 17px 12px;
        background: #f7f7f7;
        border-radius: 5px;
      }

      .info-price {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .coin {
          display: flex;
          justify-content: start;
          align-items: center;
          color: #000000;
          gap: 12px;
          font-weight: 600;

          .coin-name {
            font-size: 14px;
            line-height: 17px;
          }
        }

        .count {
          font-size: 22px;
          line-height: 27px;
        }
      }

      .divider {
        height: 1px;
        width: 100%;
        background-color: #ebebeb;
        margin-top: 11px;
      }

      .info-con {
        font-size: 12px;
        color: #878787;
        line-height: 14px;
        margin-top: 12px;
      }

      .info-title {
        font-size: 12px;
        color: #878787;
        line-height: 14px;
        margin-top: 14px;
      }

      .info-email {
        margin-top: 11px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #000;

        .email-number {
          font-size: 14px;
          line-height: 17px;
        }

        .email-copy {
          font-size: 12px;
          line-height: 14px;
          cursor: pointer;
        }
      }

      .previous {
        background: #f1f1f1;
        border-radius: 2px;
        margin-top: 24px;
        width: 96px;
        padding: 11px 20px;
        font-size: 14px;
        color: #000000;
        line-height: 17px;
        cursor: pointer;
      }
    }

    .center-step-box {
      margin-top: 23px;

      :deep(.el-step__line) {
        border-left: 2px dashed var(--el-text-color-placeholder);
        border-image: repeating-linear-gradient(
                359deg,
                var(--el-text-color-placeholder) 0,
                var(--el-text-color-placeholder) 5px,
                transparent 0,
                transparent 10px
        ) 30 12;
        background-color: transparent;
      }

      :deep(.el-step__line-inner) {
        display: none;
      }


      .payment-box {
        display: flex;
        justify-content: start;
        gap: 24px;
        @media (max-width: 992px) {
          display: block;
        }

        .payment-way {
          cursor: pointer;
          height: 70px;

          .pay {
            padding: 9px 30px;
          }

          .bank {
            padding: 11px 21px;
          }

          .payment {
            margin-top: 24px;
            width: 153px;
            height: 54px;
            border: 1px solid #dfdfe5;
            border-radius: 4px;

            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }

          .payment-pay {
            padding: 9px 30px;
          }

          .payment-bank {
            padding: 11px 21px;
          }

          .payment-poli {
            padding: 5px;
            object-fit: contain;
            cursor: not-allowed;
            opacity: .5;
          }

          .no-select {
            margin-top: 16px;
            width: 153px;
            height: 54px;
            border: 1px solid #DFDFE5;
            border-radius: 4px;
            @media(max-width: 992px) {
              margin-top: 10px;
            }
          }

          .selected {
            margin-top: 16px;
            width: 153px;
            height: 54px;
            border: 1px solid #01c19a;
            border-radius: 4px;
            @media(max-width: 992px) {
              margin-top: 10px;
            }
          }
        }
      }

      .select {
        position: relative;
        margin-top: 20px;

        :deep(.el-select .el-input__wrapper) {
          width: 442px;
          height: 48px;
          @media (max-width: 992px) {
            width: 320px !important;
          }
        }

        .enter-amount-tips {
          cursor: pointer;
          float: right;;
          margin-top: -45px;
          // margin-right: 10%;
          font-size: 14px;
          color: #878787;
          @media(max-width: 992px) {
            float: right;
            margin-right: 0%;
          }
        }

        .dialog-box {
          .dialog-header {
            font-weight: 500;
            font-size: 20px;
            color: #000000;
            line-height: 25px;
          }

          .divider {
            height: 1px;
            width: 100%;
            background-color: #dfdfe5;
            position: absolute;
            left: 0;
            top: 60px;
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
            font-weight: 600;
          }

          .requirements {
            background: #f7f7f7;
            border-radius: 8px;
            height: 67px;
            margin: 23px auto;
            align-items: center;
            padding: 13px 14px 14px 14px;

            .limit-icon {
              float: left;
              margin-top: 16px;

              .icon {
                width: 22px;
                height: 22px;

                img {
                  width: 100%;
                  height: 100%;
                  object-fit: contain;
                }
              }
            }

            .limit-title {
              font-size: 12px;
              color: #878787;
              line-height: 15px;
              margin-top: 5px;
              margin-left: 40px;
            }

            .limit-count {
              font-size: 16px;
              color: #000000;
              line-height: 19px;
              margin-left: 40px;
              margin-top: 5px;
            }

            .limit-sign {
              float: right;
              font-size: 12px;
              color: #878787;
              margin-top: -19px;
            }
          }
        }

        .enter-amount-rule {
          margin-top: 20px;

          .fait-rule-item {
            //width: 432px;
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            color: #878787;
            padding-top: 10px;
            @media (max-width: 992px) {
              width: 100%;
            }

            span {
              color: #000000;
              font-weight: 500;
            }

            .require {
              span {
                color: #878787;
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
          //width: 442px;
          width: 100%;
          height: 60px;
          margin-top: 28px;
          font-size: 20px;
          @media (max-width: 992px) {
            width: 100%;
          }
        }
      }

      .deposit-details {
        // position: relative;
        .detail-box {
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
  }

}

.recent-deposit {
  font-size: 26px;
  color: #000000;
  line-height: 32px;
  font-weight: 500;
  margin-top: 50px;
  @media (max-width: 992px) {
    & {
      margin-top: 30px;
    }
  }

  .not-arrive {
    float: right;
    font-size: 14px;
    color: #9b9b9b;
    line-height: 16px;
    text-decoration: underline #9b9b9b;
    cursor: pointer;
  }
}

.right-box {
  @media (max-width: 768px) {
    & {
      margin-top: 50px;
    }
  }

  .tips {
    .success-right {
      display: flex;
      justify-content: start;
      gap: 30px;
    }

    .tips-question {
      cursor: pointer;
      .question-title {
        float: left;
      }

      .question-content {
        margin-left: 20px;
        font-size: 14px;
        color: #878787;
        line-height: 16px;
      }
    }

    .tips-faq {
      margin-top: 30px;

      .faq-title {
        font-size: 20px;
        color: #000000;
        line-height: 25px;
        font-weight: 500;
      }

      :deep(.el-divider--horizontal) {

        margin: 18px 0;

      }

      .faq-content {
        font-size: 16px;
        color: #878787;
        letter-spacing: 0;

        span {
          color: #01c19a;
        }

        .work-title {
          font-size: 16px;
          color: #000;
          font-weight: 500;
        }

        .work-content {
          font-size: 14px;
          color: #878787;
          margin-top: 2px;
        }

        .view {
          color: #01c19a;
          text-decoration: underline;
          font-size: 14px;
          cursor: pointer;
          margin-top: 7px;
        }
      }
    }
  }
}

.coin-amount :deep() {
  input {
    text-align: left !important;
  }
}

.step-input {
  .input {
    width: 442px;
    height: 48px;
    position: relative;

    @media (max-width: 992px) {
      width: 100%;
    }
  }

  .label {
    position: absolute;
    top: 15px;
    left: 400px;
    color: #9b9b9b;
    @media (max-width: 992px) {
      left: auto;
      right: 20px !important;
    }
  }
}

.input-rule {
  font-size: 16px;
  color: #f35854;
  line-height: 18px;
  width: 442px;
  margin-top: 15px;
}

.dialog-header-require {
  font-size: 20px !important;
  color: #000000;
  line-height: 25px;
}

.divider-require {
  height: 1px;
  width: 100%;
  background-color: #dfdfe5;
  position: absolute;
  left: 0;
  top: 60px;
}

.require-list {
  margin-top: 24px;
  padding: 5px 20px;
  display: flex;
  justify-content: space-around;

  .image {
    width: 36px;
    height: auto;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .list-info {
    font-size: 14px;
    color: #878787;
    line-height: 20px;
    margin-left: 17px;
    width: 100%;
    overflow-wrap: break-word;
    //word-break: keep-all;
    word-break: break-word;
    overflow-wrap: break-word;
  }
}

.know-btn {
  width: 100% !important;
  height: 48px !important;
  border-radius: 4px;
  border: 1px solid #dfdfe5;
  background-color: #01c19a;
  color: #fff;
}

.deposit-divider {
  //width: 90%;
  margin: 10px 0 20px;
  @media(max-width: 992px) {
    width: 100%;
  }
}

.custome-select-content {
  position: absolute;
  top: 1px;
  left: 11px;
  height: calc(100% - 2px);
  z-index: 100;
  display: flex;
  align-items: center;
  background-color: #fff;
  gap: 12px;
  pointer-events: none;
}

:deep() {
  .el-form-item__error {
    position: static !important;
    width: 90%;
    font-size: 16px;
    color: #F35854;
    white-space: pre-wrap;
    line-height: 18px;
    margin-top: 15px;
  }

  .el-form-item.is-error .el-input__wrapper {
    border: 1px solid #F35854;
  }
}

.isRotate {
  transform: rotate(180deg);
}

.deposit-table :deep(.info) {
  display: flex;
  gap: 10px;

  p:nth-child(1) {
    width: 120px;
    color: #9b9b9b;
  }

  p:nth-child(2) {
    width: 180px;
  }
}
:deep(.el-collapse-item__header){
  font-size: 20px;
  color: #000;
  line-height: 25px;
}
.faq-text {
  color: #878787;
  font-size: 16px;
  padding-right: 60px;
  margin-top: 10px;
}
</style>
