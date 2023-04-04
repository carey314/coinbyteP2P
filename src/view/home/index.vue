<template>
  <div class="homeBox">
    <Header />
    <div class="bannerContainer">
      <div class="bg-img">
        <el-row style="height: 100%" class="max1290">
          <el-col
            :md="10"
            :sm="24"
            :xs="24"
            class="banner-left"
            style="height: 100%"
          >
            <div class="banner-title">Unlock the future of Crypto</div>
            <div class="banner-content">
              Buy, trade and hold 500+ crypto with AUD. Enjoy trading with local
              FIAT.
            </div>
            <GetButton
              type="success"
              :text="text"
              class="banner-btn"
              style="width: 226px; box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.5)"
            ></GetButton>
            <div class="banner-more">
              <div class="banner-more-img">
                <img :src="registered_icon" alt="" />
              </div>
              <div>
                <div class="banner-more-title">ASIC & AUSTRAC registered</div>
                <div
                  class="banner-learn-more"
                  @click="dialogTableVisible = true"
                >
                  Learn More
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
          <el-col
            :md="14"
            :sm="0"
            :xs="0"
            style="height: 100%"
            class="banner-right"
          >
            <img :src="banner_01" alt="" class="hacker-img" />
            <img :src="banner_code" alt="" class="banner-bg" />
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="homeContainer">
      <div class="part first-part" v-if="windowWidth > 768">
        <el-tabs
          v-model="activeName"
          class="demo-tabs"
          @tab-click="handleClick"
          style="color: #01c19a"
          :stretch="true"
        >
          <el-tab-pane
            class="first-tab-pan"
            label="Popular assets"
            name="first"
          >
            <el-table :data="tableData" style="width: 100%" ref="tableChart">
              <el-table-column prop="asset" label="Asset">
                <template #default="scope">
                  <div style="display: flex; align-items: center">
                    <img
                      class="table-img"
                      style="width: 2rem"
                      :src="scope.row.img"
                      alt=""
                    />
                    <span class="table-tag">{{ scope.row.tag }}</span>
                    <span class="table-asset">{{ scope.row.asset }}</span>
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="price" label="Last price" align="right">
                <template #default="scope">
                  <span class="table-price">{{ scope.row.price }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="change" label="Change(24H)" align="right">
                <template #default="scope">
                  <span
                    v-if="scope.row.change.indexOf('-') > -1"
                    style="color: #f15958"
                  >
                    <span class="table-change">
                      {{ scope.row.change }}
                    </span>
                    <el-icon color="#F15958">
                      <CaretBottom />
                    </el-icon>
                  </span>
                  <span
                    v-if="scope.row.change.indexOf('+') > -1"
                    style="color: #01c19a"
                  >
                    <span class="table-change">
                      {{ scope.row.change }}
                    </span>

                    <el-icon color="#01C19A"><CaretTop /></el-icon>
                  </span>
                </template>
              </el-table-column>
              <el-table-column prop="chart" label="Chart" align="center">
                <template #default="scope">
                  <div
                    style="
                      height: 40px;
                      width: 140px;
                      margin: 0 auto;
                      position: relative;
                      bottom: -14px;
                    "
                    :ref="setEchartRef"
                    :rowId="scope.row.id"
                    :id="'echart' + scope.row.id"
                  ></div>
                </template>
              </el-table-column>
              <el-table-column prop="" label="Trade" align="right" width="100">
                <template #default="scope">
                  <el-button
                    class="table-buy"
                    size="default"
                    @click="handleBuy(scope.$index, scope.row)"
                    plain
                  >
                    <span>Buy</span>
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane class="first-tab-pan" label="New assets" name="second"
            >New assets
            <div style="height: 40px; width: 100px"></div>
          </el-tab-pane>
          <el-tab-pane class="first-tab-pan" label="Gains ranking" name="third"
            >Gains ranking</el-tab-pane
          >
          <el-tab-pane
            class="first-tab-pan"
            label="Turnover ranking"
            name="fourth"
            >Turnover ranking</el-tab-pane
          >
        </el-tabs>
        <div class="first-part-link">
          <div class="view-more">
            <span>View all crypto assets for trading ></span>
          </div>
        </div>
      </div>
      <div class="part part01" v-if="windowWidth <= 768">
        <el-tabs
          v-model="activeName"
          class="demo-tabs"
          @tab-click="handleClick"
          style="color: #01c19a"
          stretch="true"
        >
          <el-tab-pane label="Popular assets" name="first">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="asset" label="Asset">
                <template #default="scope">
                  <div style="display: flex; align-items: center">
                    <img class="table-img" :src="scope.row.img" alt="" />
                    <span class="table-tag">{{ scope.row.tag }}</span>
                    <span class="table-asset">{{ scope.row.asset }}</span>
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="price" label="Last price" align="right">
                <template #default="scope">
                  <span class="table-price">{{ scope.row.price }}</span>
                  <div class="price-change">
                    <span
                      v-if="scope.row.change.indexOf('-') > -1"
                      style="color: #f15958"
                      >{{ scope.row.change }}
                    </span>
                    <span
                      v-if="scope.row.change.indexOf('+') > -1"
                      style="color: #01c19a"
                      >{{ scope.row.change }}
                    </span>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="New assets" name="second"
            >New assets
          </el-tab-pane>
          <el-tab-pane label="Gains ranking" name="third"
            >Gains ranking</el-tab-pane
          >
          <el-tab-pane label="Turnover ranking" name="fourth"
            >Turnover ranking</el-tab-pane
          >
        </el-tabs>
        <div class="part01-link">
          <span>View all crypto assets for trading ></span>
        </div>
      </div>

      <div class="part second-part">
        <el-row v-if="windowWidth > 768" style="padding-top: 60px">
          <el-col :span="12" :xs="0">
            <img :src="home_25" alt="" />
          </el-col>
          <el-col :span="11" :offset="1" :xs="20" class="second-part-right">
            <div class="first-level-title">
              The simplest way to start trading
            </div>
            <div class="second-part-guild">Sign up</div>
            <div class="second-level-title">
              <a href="#" class="no-underline link-color">Sign up</a> and
              <a href="#" class="no-underline link-color">verify</a>
              with our easy process and you’re good to go!
            </div>
            <div class="second-part-guild">Deposit funds</div>
            <div class="second-level-title">
              Easily
              <a href="#" class="no-underline link-color">deposit AUD</a> into
              your account using PayID & Bank Transfer.
            </div>
            <div class="second-part-guild">Trade your crypto</div>
            <div class="second-level-title">
              <a href="#" class="no-underline link-color">Buy,sell</a> and
              <a href="#" class="no-underline link-color">trade</a> with
              Australia’s local exchange with the most AUD pairs.
            </div>
            <GetButton
              type="success"
              :text="start"
              class="start-btn"
              style="margin-top: 40px"
            ></GetButton>
          </el-col>
        </el-row>
        <el-row v-if="windowWidth <= 768">
          <el-col :span="24" :xs="24" class="second-part-right">
            <div class="first-level-title">
              The simplest way to start trading
            </div>
            <div class="second-part-guild">Sign up</div>
            <div class="second-level-title">
              <a href="#" class="no-underline link-color">Sign up</a> and
              <a href="#" class="no-underline link-color">verify</a>
              with our easy process and you’re good to go!
            </div>
            <div class="second-part-guild">Deposit funds</div>
            <div class="second-level-title">
              Easily
              <a href="#" class="no-underline link-color">deposit AUD</a> into
              your account using PayID & Bank Transfer.
            </div>
            <div class="second-part-guild">Trade your crypto</div>
            <div class="second-level-title">
              <a href="#" class="no-underline link-color">Buy,sell</a> and
              <a href="#" class="no-underline link-color">trade</a> with
              Australia’s local exchange with the most AUD pairs.
            </div>
            <GetButton
              type="success"
              :text="start"
              class="start-btn"
              style="padding: 12px 16px !important"
            ></GetButton>
            <img :src="home_25" alt="" style="margin-top: 40px" />
          </el-col>
        </el-row>
      </div>
      <div class="part third-part">
        <el-row v-if="windowWidth > 768">
          <el-col :span="11" :offset="1">
            <div class="first-level-title third-part-title">
              Zero-Fee Deposit via <span>PayID / Osko</span>
            </div>
            <div class="second-level-title third-down">
              <a href="#" class="no-underline link-color">Deposit AUD</a>
              instantly into your Coinbyte account from 100+ NPP-enabled banks
              in Australia via PayID / Osko.
            </div>
            <div class="second-level-title third-down">
              Service by Coinbyte according to its terms & privacy policy.
            </div>
            <GetButton
              type="success"
              :text="start"
              class="start-btn"
              style="margin-top: 40px"
            ></GetButton>
            <div style="width: 100px" class="third-down">
              <img :src="part03_b1" alt="" />
            </div>
          </el-col>
          <el-col :span="9" :offset="2" class="third-part-img">
            <img :src="part03_im1" alt="" />
          </el-col>
        </el-row>
        <el-row v-if="windowWidth <= 768">
          <el-col :span="22">
            <div class="first-level-title third-part-title">
              Zero-Fee Deposit via <span>PayID / Osko</span>
            </div>
            <div class="second-level-title third-down">
              <a href="#" class="no-underline link-color">Deposit AUD</a>
              instantly into your Coinbyte account from 100+ NPP-enabled banks
              in Australia via PayID / Osko.
            </div>
            <div class="second-level-title third-down">
              Service by Coinbyte according to its terms & privacy policy.
            </div>
            <GetButton
              type="success"
              :text="start"
              class="start-btn"
            ></GetButton>

            <div class="third-part-img">
              <img :src="part03_im1" alt="" />
            </div>
          </el-col>
        </el-row>
      </div>

      <div class="forth-part" v-if="windowWidth > 985">
        <img class="forth-img" :src="part04" alt="" />
        <img class="forth-img-pc" :src="pc" alt="" />
        <div class="forth-title max1290">
          <div>
            Dynamic layout allows to organize<br />
            <span>multiple workspaces</span> & <span>widgets</span> without
            limitations<br />
            Unique and innovative feature among hundreds of cryptocurrency
            exchanges
          </div>
          <div>
            <GetButton class="trade-btn" type="success" :text="trade" />
          </div>
        </div>
      </div>
      <div class="forth-part" v-if="windowWidth <= 985">
        <img class="forth-img" :src="part04" alt="" />
        <div class="forth-title max1290">
          <div>
            Dynamic layout allows to organize<br />
            <span>multiple workspaces</span> & <span>widgets</span> without
            limitations<br />
            Unique and innovative feature among hundreds of cryptocurrency
            exchanges
          </div>
          <div>
            <GetButton class="trade-btn" type="success" :text="trade" />
          </div>
        </div>
      </div>

      <div class="part fifth-part">
        <div class="first-level-title">Why choose <span>CoinByte</span>?</div>
        <div class="fifth-second-title">Exchange for Professional Trader</div>
        <img :src="part05_b1" alt="" class="fifth-part-top-img" />
        <div class="fifth-part-card">
          <div class="card-item" v-for="(item, index) in cardList" :key="index">
            <img :src="item.src" alt="" />
            <div class="card-title">{{ item.title }}</div>
            <div class="card-desc">{{ item.desc }}</div>
            <div v-if="item.btn" class="card-btn">{{ item.btn }} &gt;</div>
          </div>
          <div class="card-item">
            <img class="last-img" :src="part05_b2" alt="" />
          </div>
        </div>
      </div>

      <div class="bg-gray" v-if="windowWidth > 768">
        <div class="sixth-part part">
          <img class="sixth-part-top" :src="part06_icon01" alt="" />
          <div class="first-level-title">
            <span>Premium</span> customer support
          </div>
          <div class="sixth-part-card">
            <div
              class="card-item"
              v-for="(item, index) in cardList2"
              :key="index"
            >
              <img class="item-img" :src="item.src" alt="" />
              <div class="card-title">{{ item.title }}</div>
              <div class="card-desc">{{ item.desc }}</div>
            </div>
            <div class="card-item" style="visibility: hidden"></div>
          </div>
          <GetButton
            type="success"
            :text="trading"
            style="
              margin-top: 40px;
              box-shadow: 4px 4px 10px 0 rgba(146, 146, 146, 0.5);
            "
          />
        </div>
      </div>
      <div class="bg-gray" v-if="windowWidth <= 768">
        <div class="sixth-part">
          <img class="sixth-part-top" :src="part06_icon01" alt="" />
          <div class="first-level-title">
            <span>Premium</span> customer support
          </div>
          <div class="sixth-part-card">
            <div
              class="card-item"
              v-for="(item, index) in minCardList2"
              :key="index"
            >
              <img :src="item.src" alt="" />
              <div class="card-title">{{ item.title }}</div>
              <div class="card-desc">{{ item.desc }}</div>
            </div>
            <!-- <div class="card-item" style="visibility: hidden"></div> -->
          </div>
          <GetButton class="sixth-btn" type="success" :text="trading" />
        </div>
      </div>

      <div class="seventh-part max1290" v-if="windowWidth > 768">
        <div class="first-level-title">
          Explore endless possibilities with <span>Coinbyte</span>
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
              How to buy and sell cryptocurrency on CoinByte
            </div>
          </el-col>
          <el-col :span="7" class="listItem">
            <div class="seventh-part-img">
              <img :src="part07_pic02" alt="" />
            </div>
            <div class="item-title">
              Start trading cryptocurrency on CoinByte
            </div>
          </el-col>
          <el-col :span="7" class="listItem">
            <div class="seventh-part-img">
              <img :src="part07_pic03" alt="" />
            </div>
            <div class="item-title">
              CoinByte Earn: Use your crypto assets to earn passive income on
              CoinByte
            </div>
          </el-col>
        </el-row>
        <div class="view-more">
          <span>Learn more &gt;</span>
        </div>
      </div>

      <div class="seventh-part max1290" v-if="windowWidth <= 768">
        <div class="first-level-title">
          Explore endless possibilities with <span>Coinbyte</span>
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
              How to buy and sell cryptocurrency on CoinByte
            </div>
          </el-col>
          <el-col :span="24" class="listItem">
            <div class="seventh-part-img">
              <img :src="part07_pic02" alt="" />
            </div>
            <div class="item-title">
              Start trading cryptocurrency on CoinByte
            </div>
          </el-col>
          <el-col :span="24" class="listItem">
            <div class="seventh-part-img">
              <img :src="part07_pic03" alt="" />
            </div>
            <div class="item-title">
              CoinByte Earn: Use your crypto assets to earn passive income on
              CoinByte
            </div>
          </el-col>
        </el-row>
        <div class="view-more" style="margin-top: 0px">
          <span>Learn more &gt;</span>
        </div>
      </div>
      <!-- //eighth-part -->
      <faq></faq>
      <div class="bottom-part">
        <joinCrypto />
      </div>
    </div>

    <Footer v-if="windowWidth > 769" />
    <FooterMobile v-if="windowWidth <= 769"></FooterMobile>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onUnmounted, onMounted } from "vue";
import Header from "../../layout/Header/Header.vue";
import Footer from "../../layout/Footer/Footer.vue";
import FooterMobile from "../../layout/Footer/FooterMobile.vue";
import joinCrypto from "../../layout/joinStarted/joinCrypto.vue";
import faq from "../../layout/FAQ/faq.vue";
import GetButton from "../../components/GetButton.vue";
//icon
import { Right, CaretBottom, CaretTop } from "@element-plus/icons";

import type { TabsPaneContext } from "element-plus";

// img
import registered_icon from "../../assets/home/registered_icon.png";
import banner_01 from "../../assets/home/banner_01.png";
import banner_code from "../../assets/home/banner_code.png";
import part03_im1 from "../../assets/home/part03_im1.png";
import part03_b1 from "../../assets/home/part03_b1.png";
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
import OKB from "../../assets/home/part01_OKB.png";
import OKT from "../../assets/home/part01_OKT.png";
import LTC from "../../assets/home/part01_LTC.png";
import DOT from "../../assets/home/part01_DOT.png";
import ADA from "../../assets/home/part01_ADA.png";

import {getProfile} from '../../api/user';
import { useUserInfoStore } from '../../store/user';


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

const text = ref("Get started, it’s free");
const start = ref("Get started");
const trading = ref("Get trading in minutes ");
const trade = ref("Trade");

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
const activeName = ref("first");
const handleClick = (tab: TabsPaneContext, event: Event) => {
  // console.log(tab, event);
};

// table
const tableData = [
  {
    id: 1,
    img: BTC,
    tag: "BTC",
    asset: "Bitcoin",
    price: "$22,678.00",
    change: "-2.58%",
    type: "down",
    data: [30, 20, 30, 10, 0, 10],
  },
  {
    id: 2,
    img: ETH,
    tag: "ETH",
    asset: "Ethereum",
    price: "$1,570",
    change: "+0.25%",
    type: "up",
    data: [10, 0, 30, 50, 40, 70],
  },
  {
    id: 3,
    img: OKB,
    tag: "OKB",
    asset: "OKB",
    price: "$15.44",
    change: "+0.88%",
    type: "up",
    data: [40, 20, 30],
  },
  {
    id: 4,
    img: OKT,
    tag: "OKT",
    asset: "OKC Token",
    price: "$15.56",
    change: "-0.02%",
    type: "down",
    data: [10, 20, 70],
  },
  {
    id: 5,
    img: LTC,
    tag: "LTC",
    asset: "Litecoin",
    price: "$56.57",
    change: "-2.58%",
    type: "down",
    data: [20, 20, 60],
  },
  {
    id: 6,
    img: DOT,
    tag: "DOT",
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

const setEchartRef: any = (el: HTMLDivElement) => {
  // console.log(el);
  if (el) {
    echartDomRef.push(el);
    const data = tableData.find(
      (e) => e.id === Number(el.getAttribute("rowId"))
    )?.data;
    const type = tableData.find(
      (e) => e.id === Number(el.getAttribute("rowId"))
    )?.type;
    let color = type == "up" ? "#01C19A" : "#F15958";
    createChart(el, data as Array<any>, color);
  }
};
const handleBuy = (index: number, row: object) => {
  console.log(index, row);
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
    title: "Regulation",
    desc: "Feel safe in the knowledge that our activities fall under the scope of AU legislation. CoinByte is a Digital Currency Exchange provider registered in AUSTRAC.",
  },
  {
    src: part05_icon02,
    title: "Fiat markets",
    desc: "Coinbyte is the exchange offering the most Crypto/AUD pairs in Spot Market. You can trade almost all of cryptocurrencies with AUD.",
  },
  {
    src: part05_icon03,
    title: "Totally reliable",
    desc: "All fiat funds are placed in a regulated bank, 98% of crypto assets are placed in cold storage. Rest assured funds are safely stored in a regulated or offline environment.",
  },
  {
    src: part05_icon04,
    title: "Institutional grade volumes",
    desc: "Ocean Deep Liquidity — More than 100 BTC on top 20 levels in BTC/AUD orderbook. Sky high withdrawal limits — Up to AUD 200,000.00 per transaction.",
    btn: "Check the Depth",
  },
  {
    src: part05_icon05,
    title: "API",
    desc: "We offer WebSocket and REST connection to Public and Trading API with all the required endpoints for boundless trading",
    btn: "API documentation",
  },
  {
    src: part05_icon06,
    title: "2FA",
    desc: "Two-factor Authentication adds an extra layer of security to your account by asking for a verification code when you sign in Google Authenticator Text Message (SMS)",
  },
  {
    src: part05_icon07,
    title: "Fast and easy",
    desc: "We provide an extensive range of payment methods including PayID and OSKO.",
  },
];

const cardList2 = [
  {
    src: part06_icon02,
    title: "Live chat",
    desc: "Top-rated live chat to help you every step of the way.",
  },
  {
    src: part06_icon03,
    title: "Educational resources",
    desc: "Arrange a call with a client manager to help build your trading strategy.",
  },
  {
    src: part06_icon04,
    title: "Client Manager",
    desc: "Invaluable guidance & first-hand experience from crypto experts.",
  },
  {
    src: part06_icon05,
    title: "Knowledge & expertise",
    desc: "Premium resources, workshops & blog articles. You don’t have to know everything, but a bit of know-how can go a long way.",
  },
  {
    src: part06_icon06,
    title: "Apply in minutes",
    desc: "Verify your account in 2 minutes. Have your account fully funded & ready to trade in less than 5 minutes using PayID/OSKO instant deposit.",
  },
];
const minCardList2 = [
  {
    src: part06_icon02,
    title: "Live chat",
    desc: "Top-rated live chat to help you every step of the way.",
  },
  {
    src: part06_icon03,
    title: "Educational resources",
    desc: "Arrange a call with a client manager to help build your trading strategy.",
  },
  {
    src: part06_icon04,
    title: "Client Manager",
    desc: "Invaluable guidance & first-hand experience from crypto experts.",
  },
  {
    src: part06_icon05,
    title: "Knowledge & expertise",
    desc: "Premium resources, workshops & blog articles. ",
  },
  {
    src: part06_icon06,
    title: "Apply in minutes",
    desc: "Verify your account in 2 minutes. ",
  },
];

//Get client profile data
const userInfoStore = useUserInfoStore();

onMounted(() => {
  if(userInfoStore.isLogin) {
    getProfile().then(res => {
      console.log(res.data);
      userInfoStore.updateUserInfo(res.data);
    })
  }
})

</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
