<template>
  <div class="homeBox">
    <Header />
    <div class="bannerContainer">
      <div class="bg-img">
        <el-row style="height: 100%" class="max1290">
          <el-col :md="24" :sm="24" :xs="24" class="banner-left">
            <div class="banner-title">Where Crypto meets CoinbyteP2P in NZ</div>
            <div class="banner-content">
              Buy and sell Cryptocurrencies with a non-custodial exchange safely
              and securely without hidden fees You choose where you keep your
              Crypto safe.
            </div>
            <div class="for-what">
              <div style="position: relative">
                <img class="frame" :src="banner_frame" />
                <div class="content">
                  <div class="content-title">For Buying</div>
                  <div class="content-way">When I buy</div>
                  <GetButton class="start-btn" type="success" text="Start" />
                </div>
              </div>
              <div style="position: relative">
                <img class="frame" :src="banner_frame" />
                <div class="content">
                  <div class="content-title">For Selling</div>
                  <div class="content-way">When I sell</div>
                  <GetButton class="start-btn" type="success" text="Start" />
                </div>
              </div>
            </div>
            <div class="banner-more">
              <div class="banner-more-img">
                <img :src="registered_icon" alt="" />
              </div>
              <div>
                <div class="banner-more-title">
                  {{ $t("messages.home.banner_registered") }}
                </div>
                <div
                  class="banner-learn-more"
                  @click="dialogTableVisible = true"
                >
                  {{ $t("messages.home.banner_more") }}
                  <el-icon class="more-arrow">
                    <Right />
                  </el-icon>
                </div>
                <el-dialog v-model="dialogTableVisible" class="alert-dialog">
                  <el-row :gutter="20">
                    <el-col
                      :md="12"
                      :xs="24"
                      v-for="(item, index) in gridData"
                      :key="index"
                    >
                      <div class="alert-box">
                        <div class="alert-title">{{ item.title }}</div>
                        <div class="alert-cont">{{ item.content1 }}</div>
                        <div class="alert-cont">{{ item.content2 }}</div>
                        <div class="alert-address">
                          <a href="https://asic.gov.au/" target="_blank">
                            {{ item.address }}
                            <el-icon class="more-arrow">
                              <Right />
                            </el-icon>
                          </a>
                        </div>
                      </div>
                    </el-col>
                    <el-col
                      :md="12"
                      :xs="24"
                      v-for="(item, index) in gridData1"
                      :key="index"
                      class="gap"
                    >
                      <div class="alert-box">
                        <div class="alert-title">{{ item.title }}</div>
                        <div class="alert-cont">{{ item.content1 }}</div>
                        <div class="alert-cont">{{ item.content2 }}</div>
                        <div class="alert-cont">{{ item.content3 }}</div>
                        <div class="alert-cont">{{ item.content4 }}</div>
                        <div class="alert-address">
                          <a href="https://www.austrac.gov.au/" target="_blank">
                            {{ item.address }}
                            <el-icon class="more-arrow">
                              <Right />
                            </el-icon>
                          </a>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                  <div class="alert-box" style="margin-top: 50px">
                    <div style="font-weight: bold">
                      Ausun Overseas Pty Ltd Trading as Coinbyte
                    </div>
                    <div style="font-size: 12px">
                      Suite 801/50 Clarence Street, Sydney NSW 2000 Australia
                    </div>
                  </div>
                </el-dialog>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- <div v-else></div> -->
    </div>

    <div class="homeContainer">
      <div class="trade-way">
        <el-tabs v-model="tradeTab" class="trade-tabs">
          <el-tab-pane label="Buy" name="first"></el-tab-pane>
          <el-tab-pane label="Sell" name="second"></el-tab-pane>
        </el-tabs>
      </div>
      <div v-if="tradeTab === 'first'">
        <div class="tabs-content">
          <div class="tabs-content-title">
            How to buy crypto through <span>CoinbyteP2P</span>
          </div>
          <div class="tabs-step">
            <el-steps align-center>
              <el-step title="Place order">
                <template #icon>
                  <img class="step-icon" :src="icon_01" />
                </template>
                <template #description>
                  Find CoinbyteP2P's advertisement and place your order, the
                  crypto asset will be escrowed by the Exchange
                </template>
              </el-step>
              <el-step title="Get Verified">
                <template #icon>
                  <img class="step-icon" :src="icon_02" />
                </template>
                <template #description>
                  Complete our verification through our website
                </template>
              </el-step>
              <el-step title="Make Payment">
                <template #icon>
                  <img class="step-icon" :src="icon_03" />
                </template>
                <template #description>
                  Make the payment to CoinbyteP2P via your preferred payment
                  methods and click 'transferred, notify seller' on the
                  Exchange.
                </template>
              </el-step>
              <el-step title="Get your Crypto">
                <template #icon>
                  <img class="step-icon" :src="icon_04" />
                </template>
                <template #description>
                  Once we confirms receipt of the payment, the escrowed crypto
                  will be released to you.
                </template>
              </el-step>
            </el-steps>
          </div>
        </div>
      </div>
      <div v-if="tradeTab === 'second'">
        <div class="tabs-content">
          <div class="tabs-content-title">
            How to sell crypto through <span>CoinbyteP2P</span>
          </div>
          <div class="tabs-step">
            <el-steps align-center>
              <el-step title="Place order">
                <template #icon>
                  <img class="step-icon" :src="icon_01" />
                </template>
                <template #description>
                  Find CoinbyteP2P's advertisement and place your order, the
                  crypto asset will be escrowed by the Exchange
                </template>
              </el-step>
              <el-step title="Get Verified">
                <template #icon>
                  <img class="step-icon" :src="icon_02" />
                </template>
                <template #description>
                  Complete our verification through our website
                </template>
              </el-step>
              <el-step title="Make Payment">
                <template #icon>
                  <img class="step-icon" :src="icon_03" />
                </template>
                <template #description>
                  Make the payment to CoinbyteP2P via your preferred payment
                  methods and click 'transferred, notify seller' on the
                  Exchange.
                </template>
              </el-step>
              <el-step title="Get your Crypto">
                <template #icon>
                  <img class="step-icon" :src="icon_04" />
                </template>
                <template #description>
                  Once we confirms receipt of the payment, the escrowed crypto
                  will be released to you.
                </template>
              </el-step>
            </el-steps>
          </div>
        </div>
      </div>

      <div class="forth-part">
        <div class="forth-title max1290">
          <div>Why Choose <span>CoinbyteP2P</span> ?</div>
          <div class="tip">Exchange for Professional Trader</div>
          <div></div>

          <div class="choose-reason">
            <el-radio-group v-model="reasonTab" size="large" class="reason-box">
              <el-radio-button label="Regulation" />
              <el-radio-button label="Fiat markets" />
              <el-radio-button label="Totally reliable" />
              <el-radio-button label="Fast and easy" />
              <el-radio-button label="Live chat" />
            </el-radio-group>
          </div>
          <div v-if="reasonTab === 'Regulation'">
            <el-row class="tab-content-box">
              <el-col :span="12" :xs="24">
                <div class="tab-img">
                  <img :src="image01" /></div
              ></el-col>
              <el-col :span="12" :xs="24">
                <div class="tab-content">
                  <div class="tab-content-title">Fiat markets</div>
                  <div class="tab-content-tip">
                    CoinbyteP2P is offering the Crypto/NZ pairs. You can trade
                    cryptocurrencies with NZD.
                  </div>
                  <div class="tab-content-btn">
                    <GetButton class="trade-btn" type="success" text="Start" />
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div v-if="reasonTab === 'Fiat markets'">
            <el-row class="tab-content-box">
              <el-col :span="12" :xs="24">
                <div class="tab-img">
                  <img :src="image02" /></div
              ></el-col>
              <el-col :span="12" :xs="24">
                <div class="tab-content">
                  <div class="tab-content-title">Fiat markets</div>
                  <div class="tab-content-tip">
                    CoinbyteP2P is offering the Crypto/NZ pairs. You can trade
                    cryptocurrencies with NZD.
                  </div>
                  <div class="tab-content-btn">
                    <GetButton class="trade-btn" type="success" text="Start" />
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div v-if="reasonTab === 'Totally reliable'">
            <el-row class="tab-content-box">
              <el-col :span="12" :xs="24">
                <div class="tab-img">
                  <img :src="image03" /></div
              ></el-col>
              <el-col :span="12" :xs="24">
                <div class="tab-content">
                  <div class="tab-content-title">Fiat markets</div>
                  <div class="tab-content-tip">
                    CoinbyteP2P is offering the Crypto/NZ pairs. You can trade
                    cryptocurrencies with NZD.
                  </div>
                  <div class="tab-content-btn">
                    <GetButton class="trade-btn" type="success" text="Start" />
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div v-if="reasonTab === 'Fast and easy'">
            <el-row class="tab-content-box">
              <el-col :span="12" :xs="24">
                <div class="tab-img">
                  <img :src="image04" /></div
              ></el-col>
              <el-col :span="12" :xs="24">
                <div class="tab-content">
                  <div class="tab-content-title">Fiat markets</div>
                  <div class="tab-content-tip">
                    CoinbyteP2P is offering the Crypto/NZ pairs. You can trade
                    cryptocurrencies with NZD.
                  </div>
                  <div class="tab-content-btn">
                    <GetButton class="trade-btn" type="success" text="Start" />
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div v-if="reasonTab === 'Live chat'">
            <el-row class="tab-content-box">
              <el-col :span="12" :xs="24">
                <div class="tab-img">
                  <img :src="image05" /></div
              ></el-col>
              <el-col :span="12" :xs="24">
                <div class="tab-content">
                  <div class="tab-content-title">Fiat markets</div>
                  <div class="tab-content-tip">
                    CoinbyteP2P is offering the Crypto/NZ pairs. You can trade
                    cryptocurrencies with NZD.
                  </div>
                  <div class="tab-content-btn">
                    <GetButton class="trade-btn" type="success" text="Start" />
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>

      <div class="seventh-part max1290" v-if="windowWidth > 768">
        <div class="first-level-title">
          {{ $t("messages.home.seventh_explore") }}
        </div>
        <el-row
          class="seventh-part-list"
          type="flex"
          justify="space-between"
          :gutter="40"
        >
          <el-col :span="7" class="listItem">
            <div class="seventh-part-img">
              <img :src="part07_pic01" alt="" />
            </div>
            <div class="item-title">
              {{ $t("messages.home.seventh_how") }}
            </div>
          </el-col>
          <el-col :span="7" class="listItem">
            <div class="seventh-part-img">
              <img :src="part07_pic02" alt="" />
            </div>
            <div class="item-title">
              {{ $t("messages.home.seventh_start") }}
            </div>
          </el-col>
          <el-col :span="7" class="listItem">
            <div class="seventh-part-img">
              <img :src="part07_pic03" alt="" />
            </div>
            <div class="item-title">
              {{ $t("messages.home.seventh_earn") }}
            </div>
          </el-col>
        </el-row>
        <div class="view-more">
          <span>{{ $t("messages.home.seventh_more") }} &gt;</span>
        </div>
      </div>

      <div class="seventh-part max1290" v-if="windowWidth <= 768">
        <div class="first-level-title">
          {{ $t("messages.home.seventh_explore") }}
        </div>
        <el-row
          class="seventh-part-list"
          type="flex"
          justify="space-between"
          :gutter="40"
        >
          <el-col :span="24" class="listItem">
            <div class="seventh-part-img">
              <img :src="part07_pic01" alt="" />
            </div>
            <div class="item-title">
              {{ $t("messages.home.seventh_how") }}
            </div>
          </el-col>
          <el-col :span="24" class="listItem">
            <div class="seventh-part-img">
              <img :src="part07_pic02" alt="" />
            </div>
            <div class="item-title">
              {{ $t("messages.home.seventh_start") }}
            </div>
          </el-col>
          <el-col :span="24" class="listItem">
            <div class="seventh-part-img">
              <img :src="part07_pic03" alt="" />
            </div>
            <div class="item-title">
              {{ $t("messages.home.seventh_earn") }}
            </div>
          </el-col>
        </el-row>
        <div class="view-more" style="margin-top: 0px">
          <span>{{ $t("messages.home.seventh_more") }} &gt;</span>
        </div>
      </div>
      <!-- //eighth-part -->
      <faq></faq>
    </div>
    <footer v-if="windowWidth > 769">
      <div class="footer-box max1290">
        <div class="footer-logo">
          <div
            style="
              font-size: 36px;
              color: #fff;
              line-height: 44px;
              font-weight: bold;
            "
          >
            {{ $t("messages.footer.start") }}
          </div>
          <div class="footer-trade">
            <div class="buy">Buy</div>
            <div class="sell">Sell</div>
          </div>
          <div class="footer-info">
            <div class="info">{{ $t("messages.footer.smsf") }}</div>
            <a href="/" style="color: #01c19a">{{
              $t("messages.footer.more")
            }}</a>
          </div>
          <!-- <div class="lan-box">
          <div class="lan-icon">
            <img :src="top_en" alt="" />
          </div>
          <el-select
            v-model="currentLanguage"
            class="selectLan"
            placeholder="Select"
            size="large"
            @change="changeLanguage"
            :popper-append-to-body="false"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div> -->
        </div>

        <div class="link-cards">
          <ul class="link-list">
            <li>{{ $t("messages.footer.about") }}</li>
            <li>
              <a
                href="/"
                style="color: rgb(144, 144, 144); text-decoration: none"
                >{{ $t("messages.footer.about_us") }}</a
              >
            </li>
            <li>
              <a
                href="/"
                style="color: rgb(144, 144, 144); text-decoration: none"
                >{{ $t("messages.footer.contact_us") }}</a
              >
            </li>
          </ul>
          <ul class="link-list">
            <li>{{ $t("messages.footer.legal") }}</li>
            <li>{{ $t("messages.footer.terms") }}</li>
            <li>{{ $t("messages.footer.privacy") }}</li>
            <li>{{ $t("messages.footer.EOFY") }}</li>
            <li>{{ $t("messages.footer.FAQs") }}</li>
            <li>{{ $t("messages.footer.Fees") }}</li>
            <li>{{ $t("messages.footer.base") }}</li>
            <li>{{ $t("messages.footer.News") }}</li>
            <li>{{ $t("messages.footer.Protect") }}</li>
            <li>{{ $t("messages.footer.Security") }}</li>
            <!-- <li @click="dialogTableVisible = true">
            {{ $t("messages.footer.kyc_aml") }}
          </li> -->
          </ul>
          <ul class="link-list">
            <li>{{ $t("messages.footer.service") }}</li>
            <li>{{ $t("messages.footer.service_instant") }}</li>
            <li>{{ $t("messages.footer.Zealand") }}</li>
            <!-- <li>{{ $t("messages.footer.service_spot_trading") }}</li> -->
          </ul>
          <ul class="link-list">
            <li>{{ $t("messages.footer.support") }}</li>
            <li>{{ $t("messages.footer.us") }}</li>
            <li>{{ $t("messages.footer.support_center") }}</li>
            <li>{{ $t("messages.footer.support_announcement") }}</li>
            <li>{{ $t("messages.footer.Media") }}</li>
            <!-- <li>
            <a
              href="/contact"
              style="color: rgb(144, 144, 144); text-decoration: none"
              >{{ $t("messages.footer.support_connect") }}</a
            >
          </li> -->
          </ul>
        </div>

        <div
          class="icon-links"
          style="
            font-size: 14px;
            color: #808080;
            line-height: 19px;
            width: 20%;
            margin-top: 220px;
          "
        >
          We are registered as a Digital Currency Exchange (DCE) with AUSTRAC:
          DCE-12345678
        </div>
      </div>

      <div
        class="icon-links-lg max1290"
        style="font-size: 14px; color: #808080; line-height: 19px"
      >
        We are registered as a Digital Currency Exchange (DCE) with AUSTRAC:
        DCE-12345678
      </div>
    </footer>
    <footer v-else>
      <div class="footer-links" style="padding:20px">
        <div class="footer-logo">
          <div
            style="
              font-size: 36px;
              color: #fff;
              line-height: 44px;
              font-weight: bold;
            "
          >
            {{ $t("messages.footer.start") }}
          </div>
          <div class="footer-trade" style="justify-content: flex-start;">
            <div class="buy">Buy</div>
            <div class="sell">Sell</div>
          </div>
          <div class="footer-info">
            <div class="info">{{ $t("messages.footer.smsf") }}</div>
            <a href="/" style="color: #01c19a">{{
              $t("messages.footer.more")
            }}</a>
          </div>
          <!-- <div class="lan-box">
          <div class="lan-icon">
            <img :src="top_en" alt="" />
          </div>
          <el-select
            v-model="currentLanguage"
            class="selectLan"
            placeholder="Select"
            size="large"
            @change="changeLanguage"
            :popper-append-to-body="false"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div> -->
        </div>

        <div class="footer-logoinfo"></div>
        <div class="link-list">
          <div class="part09-collapse">
            <el-collapse v-model="activeNamesFoot" @change="handleFootChange">
              <el-collapse-item name="1">
                <template #title>
                  <div class="el-collapse-item-title">
                    {{ $t("messages.footer.about") }}
                  </div>
                </template>
                <div class="list-item">
                  <a
                    href="/about"
                    style="color: rgb(144, 144, 144); text-decoration: none"
                    >{{ $t("messages.footer.about_us") }}</a
                  >
                </div>
                <div class="list-item">
                  <a
                    href="/contact"
                    style="color: rgb(144, 144, 144); text-decoration: none"
                    >{{ $t("messages.footer.contact_us") }}</a
                  >
                </div>
                <div class="list-item">
                  <a
                    href="/fees"
                    style="color: rgb(144, 144, 144); text-decoration: none"
                    >{{ $t("messages.footer.fees") }}</a
                  >
                </div>
              </el-collapse-item>
              <el-collapse-item name="2">
                <template #title>
                  <div class="el-collapse-item-title">
                    {{ $t("messages.footer.legal") }}
                  </div>
                </template>
                <div class="list-item">{{ $t("messages.footer.terms") }}</div>
                <div class="list-item">{{ $t("messages.footer.privacy") }}</div>
                <div class="list-item" @click="dialogTableVisible = true">
                  {{ $t("messages.footer.kyc_aml") }}
                </div>
              </el-collapse-item>
              <el-collapse-item name="3">
                <template #title>
                  <div class="el-collapse-item-title">
                    {{ $t("messages.footer.service") }}
                  </div>
                </template>
                <div class="list-item">
                  {{ $t("messages.footer.service_instant") }}
                </div>
                <!-- <div class="list-item">
                {{ $t("messages.footer.service_spot_trading") }}
              </div> -->
              </el-collapse-item>
              <el-collapse-item name="4">
                <template #title>
                  <div class="el-collapse-item-title">
                    {{ $t("messages.footer.support") }}
                  </div>
                </template>
                <div class="list-item">
                  {{ $t("messages.footer.support_center") }}
                </div>
                <div class="list-item">
                  {{ $t("messages.footer.support_announcement") }}
                </div>
                <div class="list-item">
                  {{ $t("messages.footer.support_connect") }}
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
        <div class="icon-links"  style="font-size: 14px; color: #808080; line-height: 19px">
          We are registered as a Digital Currency Exchange (DCE) with AUSTRAC:
          DCE-12345678
        </div>
      </div>
     
    </footer>

    <Footer v-if="windowWidth > 769" />
    <FooterMobile v-if="windowWidth <= 769"></FooterMobile>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onUnmounted, onMounted, watch as vueWatch } from "vue";
import Header from "../../layout/Header/Header.vue";
import Footer from "../../layout/Footer/Footer.vue";
import FooterMobile from "../../layout/Footer/FooterMobile.vue";
import joinCrypto from "../../layout/joinStarted/joinCrypto.vue";
import faq from "../../layout/FAQ/faq.vue";
import GetButton from "../../components/GetButton.vue";
import { getCoinMarketCap, getLastCoinMarketCap } from "../../api/market";
import { queryCurrenciesType } from "../../api/currencies";
//icon
import { Right, CaretBottom, CaretTop } from "@element-plus/icons";
import type { TabsPaneContext } from "element-plus";
// img
import registered_icon from "../../assets/home/registered_icon.png";
import banner_frame from "../../assets/image/banner_frame.png";
import icon_01 from "../../assets/image/icon_01.png";
import icon_02 from "../../assets/image/icon_02.png";
import icon_03 from "../../assets/image/icon_03.png";
import icon_04 from "../../assets/image/icon_04.png";
import image01 from "../../assets/image/image01.svg";
import image02 from "../../assets/image/image02.svg";
import image03 from "../../assets/image/image03.svg";
import image04 from "../../assets/image/image04.png";
import image05 from "../../assets/image/image05.svg";
import part07_pic01 from "../../assets/home/part07_pic01.png";
import part07_pic02 from "../../assets/home/part07_pic02.png";
import part07_pic03 from "../../assets/home/part07_pic03.png";
import home_25 from "../../assets/home/编组 25.png";
import part04 from "../../assets/home/part04.png";
import pc from "../../assets/home/pc.png";
import part05_b1 from "../../assets/home/part05_b1.png";
import part05_b2 from "../../assets/home/part05_b2.png";
import part05_icon01 from "../../assets/home/part05_icon01.png";
import part05_icon02 from "../../assets/home/part05_icon02.png";
import part05_icon03 from "../../assets/home/part05_icon03.png";
import part05_icon04 from "../../assets/home/part05_icon04.png";
import part05_icon05 from "../../assets/home/part05_icon05.png";
import part05_icon06 from "../../assets/home/part05_icon06.png";
import part05_icon07 from "../../assets/home/part05_icon07.png";
import part06_icon01 from "../../assets/home/part06_icon01.png";
import part06_icon02 from "../../assets/home/part06_icon02.png";
import part06_icon03 from "../../assets/home/part06_icon03.png";
import part06_icon04 from "../../assets/home/part06_icon04.png";
import part06_icon05 from "../../assets/home/part06_icon05.png";
import part06_icon06 from "../../assets/home/part06_icon06.png";

import * as echarts from "echarts";

import BTC from "../../assets/home/part01_BTC.png";
import ETH from "../../assets/home/part01_ETH.png";
import USDT from "../../assets/home/crypto_icon_usdt.png";
import USDC from "../../assets/home/crypto_icon_usdc.png";
import BNB from "../../assets/home/BNB.png";
import XRP from "../../assets/home/xrp.png";
import ADA from "../../assets/home/crypto_icon_ada.png";
import DOGE from "../../assets/home/dogecoin.png";
import MATIC from "../../assets/home/polygon.png";
import SOL from "../../assets/home/solana.png";

import { storeToRefs } from "pinia";
import { tradeStore } from "../../store/trade";
import { getProfile } from "../../api/user";
import { useUserInfoStore } from "../../store/user";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { watch } from "fs";

const router = useRouter();

const { t } = useI18n();
const activeNamesFoot = ref([""]);
const handleFootChange = (val: string[]) => {
  console.log(val);
};

const useTradeStore = tradeStore();
const { currencySlug, currencyName, currencyIcon } = storeToRefs(useTradeStore);
// 货币类型\
interface Coin {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  image: string;
  num_market_pairs: number;
  date_added: string;
  tags: string[];
  max_supply: number | null;
  circulating_supply: number;
  total_supply: number;
  infinite_supply: boolean;
  platform: {
    id: number;
    name: string;
    symbol: string;
    slug: string;
    token_address: string;
  } | null;
  cmc_rank: number;
  self_reported_circulating_supply: number | null;
  self_reported_market_cap: number | null;
  tvl_ratio: number | null;
  last_updated: string;
  quote: {
    AUD: {
      price: number;
      volume_24h: number;
      volume_change_24h: number;
      percent_change_1h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      percent_change_60d: number;
      percent_change_90d: number;
      market_cap: number;
      market_cap_dominance: number;
      fully_diluted_market_cap: number;
      tvl: number | null;
      last_updated: string;
    };
  };
}

const coinMarketCapData = ref<any>([]);

onMounted(async () => {
  refreshData();
  refreshData(2);
  refreshData(3);
  refreshData(4);
  setInterval(() => {
    refreshData();
    refreshData(2);
    refreshData(3);
    refreshData(4);
  }, 60000 * 5);
});

const coinSymbolToName: {
  [key: string]: string;
} = {
  BTC: "bitcoin",
  ETH: "ethereum",
  XRP: "ripple",
  LTC: "litecoin",
  DOT: "polkadot",
  SOL: "solana",
  DOGE: "dogecoin",
  LINK: "chainlink",
  USDC: "usdcoin",
  BCH: "bitcoincash",
  NEO: "neo",
  USDT: "tether",
  TRX: "tron",
  EOS: "eos",
  NANO: "nano",
  MIOTA: "iota",
  ENJ: "enjincoin",
  CRV: "curvedaotoken",
  VIOLET: "violetcoin",
  FRONT: "frontier",
  // 添加更多的加密货币
};

async function refreshData(typeId: number = 1) {
  try {
    const coins: any = await queryCurrenciesType({
      typeId: typeId,
    });
    const symbols = coins.data.content.map(
      (v: any) => v.alias && v.alias.toLowerCase()
    );
    const response = await getLastCoinMarketCap({
      symbols: symbols.join(","),
    });
    const resJson = JSON.parse(response.data);
    // const arr = [];
    // // object for getting
    // for (let key in resJson.data) {
    //   arr.push(resJson.data[key][0])
    // }
    coinMarketCapData.value[`tab-${typeId}`] = resJson;
    const symbolsSlug = coinMarketCapData.value[`tab-${typeId}`].map(
      (v: any) => v.id
    );
    const chartRes = await getCoinMarketCap({
      symbols: symbolsSlug.join(","),
      days: 1,
      interval: 2,
    });
    coinMarketCapData.value[`tab-${typeId}`].forEach((v: any) => {
      // getChart(v.id).then((res) => {
      //   v.data = res;
      // })
      v.data = getChart(chartRes.data[v.id]);
      v.isUp = v.data[0] < v.data[v.data.length - 1];
    });
    console.log(coinMarketCapData.value);
  } catch (error) {
    console.error(error);
  }
}

const activeName = ref("1");

const tradeTab = ref<any>("first");
const reasonTab = ref<any>("Regulation");

// vueWatch(activeName, (value) => {
//   refreshData(Number(value));
// })

function getChart(chartJson: any) {
  const jsonData: any = JSON.parse(chartJson);

  const mapData = jsonData["prices"].map((item: any) => {
    // const localTime = moment();
    // const offsetInMinutes = localTime.utcOffset();
    // const offsetInHours = offsetInMinutes / 60;
    // item[0] = moment(item[0]).add(offsetInHours, 'hours').valueOf()

    // return {
    //   time: Math.floor(item[0] / 1000),
    //   value: item[1],
    // };

    return item[1];
  });

  // const newArray = mapData.reduce((result:any, value:any, index:any) => {
  //   if (index % 10 === 0) {
  //     result.push(value);
  //   }
  //   return result;
  // }, []);
  // console.log(mapData)
  return mapData;
}

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

const dialogTableVisible = ref(false);

const gridData = [
  {
    title: "ASIC registered",
    content1: "Australian Securities andInvestment Commission",
    content2: "ACN 637345290",
    address: "ASIC website",
  },
];
const gridData1 = [
  {
    title: "AUSTRAC registered",
    content1: "Australian Transaction Reports & Analysis Centre",
    content2: "100576214",
    content3: "Digital Currency Exchange DCE100662269-001",
    content4: "Remittance Service Provider IND100662269-001",
    address: "AUSTRAC website",
  },
];
const tableChart = <any>ref(null);
const handleSelect = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath);
};
// tabs

const handleClick = (tab: TabsPaneContext, event: Event) => {
  // console.log(tab, event);
};

const tableData = [
  {
    id: 1,
    img: BTC,
    tag: "BTC",
    asset: "Bitcoin",
    price: "$22,678.00",
    change: "-2.58%",
    type: "up",
    data: [30, 20, 30, 10, 50, 60],
  },
  {
    id: 2,
    img: ETH,
    tag: "ETH",
    asset: "Ethereum",
    price: "$1,570",
    change: "+0.25%",
    type: "up",
    data: [30, 20, 30, 10, 50, 60],
  },
  {
    id: 3,
    img: USDT,
    tag: "USDT",
    asset: "OKB",
    price: "$15.44",
    change: "+0.88%",
    type: "up",
    data: [30, 20, 30, 10, 50, 60],
  },
  {
    id: 4,
    img: BNB,
    tag: "BNB",
    asset: "OKC Token",
    price: "$15.56",
    change: "-0.02%",
    type: "up",
    data: [30, 20, 30, 10, 50, 60],
  },
  {
    id: 5,
    img: USDC,
    tag: "USDC",
    asset: "Litecoin",
    price: "$56.57",
    change: "-2.58%",
    type: "down",
    data: [20, 20, 60],
  },
  {
    id: 6,
    img: XRP,
    tag: "XRP",
    asset: "Polkadot",
    price: "$7.40",
    change: "-1.67%",
    type: "down",
    data: [10, 20, 30],
  },
  {
    id: 7,
    img: ADA,
    tag: "ADA",
    asset: "Cardano",
    price: "$0.49",
    change: "+0.20%",
    type: "up",
    data: [10, 0, 30, 0, 50, 10, 90],
  },
  {
    id: 8,
    img: DOGE,
    tag: "DOGE",
    asset: "Cardano",
  },
  {
    id: 9,
    img: MATIC,
    tag: "MATIC",
    asset: "Cardano",
  },
  {
    id: 10,
    img: SOL,
    tag: "SOL",
    asset: "Cardano",
  },
];
const createChart = (dom: HTMLDivElement, data: Array<any>, color: string) => {
  let myChart = echarts.init(dom);
  function colorRgba(sHex: any, p: any) {
    // 十六进制颜色值的正则表达式
    var reg =
      /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/;
    /* 16进制颜色转为RGB格式 */
    var sColor = sHex.toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4 || sColor.length === 5) {
        var sColorNew = "#";
        for (var i = 1; i < sColor.length; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }
      //  处理六位的颜色值
      var sColorChange = [];
      for (var i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
      }
      return "rgba(" + sColorChange.join(",") + "," + p + ")";
    } else {
      return sColor;
    }
  }
  const options: echarts.EChartsOption = {
    grid: {
      left: "0",
      top: "0",
      right: "0",
      bottom: "0",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      //不显示x轴线
      show: false,
    },
    yAxis: {
      type: "value",
      show: false,
      // min:function(value){
      //   return Math.floor(value.min / 10) * 10;
      // }
    },
    series: [
      {
        data: data,
        //单独修改当前线条的颜色
        lineStyle: {
          color: color,
          width: 1.5,
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: colorRgba(color, 0.2),
            },
            {
              offset: 1,
              color: colorRgba(color, 0.1),
            },
          ]),
        },
        type: "line",
        // smooth: true,
        symbol: "none",
      },
    ],
  };
  myChart.setOption(options);
};
const echartDomRef = [];

// const setEchartRef: any = (el: HTMLDivElement) => {
//   // console.log(el);
//   if (el) {
//     echartDomRef.push(el);
//     const data = tableData.find(
//       (e) => e.id === Number(el.getAttribute("rowId"))
//     )?.data;
//     const type = tableData.find(
//       (e) => e.id === Number(el.getAttribute("rowId"))
//     )?.type;
//     let color = type == "up" ? "#01C19A" : "#F15958";
//     createChart(el, data as Array<any>, color);
//   }
// };

const setEchartRef: any = (el: HTMLDivElement, typeId: number = 1) => {
  if (el) {
    echartDomRef.push(el);
    const foundData = coinMarketCapData.value[`tab-${typeId}`].find(
      (e: any) => {
        return e.id === el.getAttribute("rowId");
      }
    );
    const data = foundData.data;
    const type = foundData.isUp ? "up" : "down";

    let color = type == "up" ? "#01C19A" : "#F15958";
    createChart(el, data as Array<any>, color);
  }
};

const handleBuy = (index: number, row: Coin) => {
  console.log(index, row);
  currencySlug.value = row.symbol?.toUpperCase();
  currencyName.value = row.name;
  currencyIcon.value = row.image;
  router.push("/trade/" + row.symbol);
};
const forthList = [
  {
    number: 1,
    message: "View real-time cryptocurrency prices",
  },
  {
    number: 2,
    message:
      "Buy and sell BTC, ETH, XRP, OKB and other digital assets with ease",
  },
  {
    number: 3,
    message: "Get live price-change alerts for cryptocurrencies you follow",
  },
  {
    number: 4,
    message: "Check BTC spot, futures and options prices",
  },
  {
    number: 5,
    message: "Compare cryptocurrency prices across exchanges",
  },
];
const cardList = [
  {
    src: part05_icon01,
    title: t("messages.home.fifth_regulation"),
    desc: t("messages.home.fifth_regulationMsg"),
  },
  {
    src: part05_icon02,
    title: t("messages.home.fifth_fiat"),
    desc: t("messages.home.fifth_fiatMsg"),
  },
  {
    src: part05_icon03,
    title: t("messages.home.fifth_Totally"),
    desc: t("messages.home.fifth_TotallyMsg"),
  },
  {
    src: part05_icon04,
    title: t("messages.home.fifth_Institutional"),
    desc: t("messages.home.fifth_InstitutionalMsg"),
    btn: t("messages.home.fifth_btncheck"),
  },
  {
    src: part05_icon05,
    title: t("messages.home.fifth_API"),
    desc: t("messages.home.fifth_APIMsg"),
    btn: t("messages.home.fifth_btnAPI"),
  },
  {
    src: part05_icon06,
    title: t("messages.home.fifth_2FA"),
    desc: t("messages.home.fifth_2FAMsg"),
  },
  {
    src: part05_icon07,
    title: t("messages.home.fifth_Fast"),
    desc: t("messages.home.fifth_FastMsg"),
  },
];

const cardSupport = [
  {
    src: part06_icon02,
    title: t("messages.home.sixth_chat"),
    desc: t("messages.home.sixth_rated"),
  },
  {
    src: part06_icon03,
    title: t("messages.home.sixth_Educational"),
    desc: t("messages.home.sixth_Arrange"),
  },
  {
    src: part06_icon04,
    title: t("messages.home.sixth_Client"),
    desc: t("messages.home.sixth_Invaluable"),
  },
  {
    src: part06_icon05,
    title: t("messages.home.sixth_Knowledge"),
    desc: t("messages.home.sixth_resources"),
  },
  {
    src: part06_icon06,
    title: t("messages.home.sixth_Apply"),
    desc: t("messages.home.sixth_Verify"),
  },
];
const minCardList2 = [
  {
    src: part06_icon02,
    title: t("messages.home.sixth_chat"),
    desc: t("messages.home.sixth_rated"),
  },
  {
    src: part06_icon03,
    title: t("messages.home.sixth_Educational"),
    desc: t("messages.home.sixth_Arrange"),
  },
  {
    src: part06_icon04,
    title: t("messages.home.sixth_Client"),
    desc: t("messages.home.sixth_Invaluable"),
  },
  {
    src: part06_icon05,
    title: t("messages.home.sixth_Knowledge"),
    desc: t("messages.home.sixth_minResources"),
  },
  {
    src: part06_icon06,
    title: t("messages.home.sixth_Apply"),
    desc: t("messages.home.sixth_minVerify"),
  },
];

//Get client profile data
const userInfoStore = useUserInfoStore();

onMounted(() => {
  if (userInfoStore.isLogin) {
    getProfile().then((res) => {
      console.log(res.data);
      userInfoStore.updateUserInfo(res.data);
    });
  }
});
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
