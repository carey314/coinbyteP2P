<template>
  <div class="allCrypto-page">
    <Header></Header>
    <div class="center-part">
      <div class="search-input" v-if="windowWidth > 769">
        <el-input
          v-model="search"
          class="w-50 m-2"
          size="large"
          placeholder="Search"
          :prefix-icon="Search"
        />
      </div>

      <el-scrollbar>
        <div class="scrollbar-flex-content">
          <el-tabs
            v-model="activeName"
            class="demo-tabs"
            @tab-click="handleClick"
          >
            <el-tab-pane name="first">
              <template #label>
                <span class="custom-tabs-label">
                  <el-icon><StarFilled /></el-icon>
                  <span>{{ $t('messages.market.Favorites') }}</span>
                </span>
              </template>
            </el-tab-pane>

            <el-tab-pane :label="t('messages.market.All')" name="second">
              <el-radio-group v-model="radioValue">
                <el-scrollbar>
                  <div class="scrollbar-flex-content">
                    <el-radio-button label="All" />
                    <el-radio-button label="Metaverse" />
                    <el-radio-button label="Gaming" />
                    <el-radio-button label="DeFi" />
                    <el-radio-button label="Innovation" />
                    <el-radio-button label="Layer 1 / Layer 2" />
                    <el-radio-button label="Fan Token" />
                    <el-radio-button label="NFT" />
                    <el-radio-button label="Storage" />
                    <el-radio-button label="Polkadot" />
                    <el-radio-button label="POS" />
                    <el-radio-button label="POW" />
                    <el-radio-button label="Launchpad" />
                    <el-radio-button label="Launchpool" />
                    <el-radio-button label="BNB Chain" />
                  </div>
                </el-scrollbar>
              </el-radio-group>
              <div>
                <el-table
                  :data="filterTableData"
                  :table-layout="tableLayout"
                  class="crypto-table"
                  :default-sort="{ prop: 'address', order: 'ascending' }"
                >
                  <el-table-column prop="date" :label=" t('messages.market.table_Crypto')" width="500px">
                    <template #default="scope" class="cleatfloat">
                      <el-icon class="crypto-star clearfloat"
                        ><StarFilled
                      /></el-icon>

                      <div class="crypto-icon clearfloat">
                        <img
                          class="table-img"
                          style="width: 2rem"
                          :src="scope.row.img"
                          alt=""
                        />
                        <span class="table-tag">{{ scope.row.tag }}</span>
                        <span class="table-asset" style="color: #9b9b9b">{{
                          scope.row.asset
                        }}</span>
                      </div>
                    </template>
                  </el-table-column>

                  <el-table-column
                    prop="name"
                    :label=" t('messages.market.table_Price')"
                    align="right"
                    width="150"
                  >
                    <template #default="scope">
                      <span class="table-price">{{ scope.row.price }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="change"
                    :label=" t('messages.market.table_Change')"
                    sortable
                    width="150"
                    align="right"
                  >
                    <template #default="scope">
                      <span
                        v-if="scope.row.change.indexOf('-') > -1"
                        style="color: #f15958"
                      >
                        <span class="table-change">
                          {{ scope.row.change }}
                        </span>
                      </span>
                      <span
                        v-if="scope.row.change.indexOf('+') > -1"
                        style="color: #01c19a"
                      >
                        <span class="table-change">
                          {{ scope.row.change }}
                        </span>
                      </span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    :label="t('messages.market.table_cap')"
                    sortable
                    width="170"
                    align="right"
                  >
                    <template #default="scope">
                      <span class="table-price">{{ scope.row.cap }}</span>
                    </template>
                  </el-table-column>

                  <el-table-column
                    align="right"
                    prop="address"
                    width="300"
                    class="action"
                  >
                    <template #header> {{ t('messages.market.table_Action') }} </template>
                    <template #default="scope">
                      <div class="action-btn">
                        <el-button text link>Buy</el-button>
                        <el-divider direction="vertical" />

                        <el-button text link>Sell</el-button>
                      </div>
                    </template>
                  </el-table-column>

                  <template #empty>
                    <el-empty :image="no_found" description="No Results Found">
                    </el-empty>
                  </template>
                </el-table>
                <div class="example-pagination-block min-pagination">
                  <el-pagination
                    background
                    :hide-on-single-page="filterTableData.length < 10"
                    layout="prev, pager, next"
                    :page-size="3"
                    :total="filterTableData.length"
                  />
                </div>
              </div>
            </el-tab-pane>

            <el-tab-pane :label="t('messages.market.Spot')" name="third">
              <el-radio-group v-model="radioValue">
                <el-scrollbar>
                  <div class="scrollbar-flex-content">
                    <el-radio-button label="All" />
                    <el-radio-button label="USDT" />
                    <el-radio-button label="BNB" />
                    <el-radio-button label="BTC" />
                    <el-radio-button label="ALTS" />
                    <el-radio-button label="FIAT(All)" />
                    <el-radio-button label="ETF" />
                  </div>
                </el-scrollbar>
              </el-radio-group>
              <div>
                <el-table
                  :data="filterSpotData"
                  :table-layout="tableLayout"
                  class="crypto-table"
                  :default-sort="{ prop: 'address', order: 'ascending' }"
                >
                  <el-table-column prop="date" :label="t('messages.market.table_Crypto')" width="260px">
                    <template #default="scope" class="cleatfloat">
                      <el-icon class="crypto-star clearfloat"
                        ><StarFilled
                      /></el-icon>

                      <div class="crypto-icon clearfloat">
                        <img
                          class="table-img"
                          style="width: 2rem"
                          :src="scope.row.img"
                          alt=""
                        />
                        <span class="table-tag">{{ scope.row.tag }}</span>
                        <span class="table-asset" style="color: #9b9b9b">{{
                          scope.row.asset
                        }}</span>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    :label="t('messages.market.table_Price')"
                    width="240px"
                    sortable
                    align="right"
                  >
                    <template #default="scope">
                      <span
                        class="table-price"
                        style="margin-right: 4px; color: #01c19a"
                        >{{ scope.row.upPirce }}</span
                      >
                      <span
                        class="table-price"
                        style="margin-right: 4px; color: #f15958"
                        >{{ scope.row.downPirce }}</span
                      >
                      <span
                        class="table-price"
                        style="margin-right: 4px; color: #000"
                        >{{ scope.row.changePrice }}</span
                      >
                      <span class="table-price" style="color: #878787">{{
                        scope.row.price
                      }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="change"
                    :label="t('messages.market.table_Change')"
                    width="150px"
                    sortable
                    align="right"
                  >
                    <template #default="scope">
                      <span
                        v-if="scope.row.change.indexOf('-') > -1"
                        style="color: #f15958"
                      >
                        <span class="table-change">
                          {{ scope.row.change }}
                        </span>
                      </span>
                      <span
                        v-if="scope.row.change.indexOf('+') > -1"
                        style="color: #01c19a"
                      >
                        <span class="table-change">
                          {{ scope.row.change }}
                        </span>
                      </span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    :label="t('messages.market.table_high')"
                    width="230px"
                    align="right"
                  >
                    <template #default="scope">
                      <span
                        class="table-price"
                        style="margin-right: 4px; color: #000"
                        >{{ scope.row.changeCount }}</span
                      >
                    </template>
                  </el-table-column>
                  <el-table-column
                    sortable
                    :label="t('messages.market.table_volumn')"
                    width="140px"
                    align="right"
                  >
                    <template #default="scope">
                      <span class="table-price">{{ scope.row.volume }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                  :label="t('messages.market.table_cap')"

                    width="140px"
                    sortable
                    align="right"
                  >
                    <template #default="scope">
                      <span class="table-price">{{ scope.row.cap }}</span>
                    </template>
                  </el-table-column>

                  <el-table-column
                    align="right"
                    fixed="right"
                    prop="address"
                    label="Action"
                    class="action"
                  >
                    <template #header> {{ t('messages.market.table_Action') }} </template>
                    <template #default="scope">
                      <div class="action-btn">
                        <el-button text link>Trade</el-button>
                      </div>
                    </template>
                  </el-table-column>

                  <template #empty>
                    <el-empty :image="no_found" description="No Results Found">
                    </el-empty>
                  </template>
                </el-table>
                <div class="example-pagination-block min-pagination">
                  <el-pagination
                    background
                    :hide-on-single-page="filterSpotData.length < 10"
                    layout="prev, pager, next"
                    :page-size="3"
                    :total="filterSpotData.length"
                  />
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-scrollbar>
    </div>

    <Footer v-if="windowWidth > 769" />
    <FooterMobile v-if="windowWidth <= 769"></FooterMobile>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onUnmounted, onMounted, computed } from "vue";
import Header from "../../../layout/Header/Header.vue";
import Footer from "../../../layout/Footer/Footer.vue";
import FooterMobile from "../../../layout/Footer/FooterMobile.vue";
import { StarFilled, Search } from "@element-plus/icons-vue";

import type { TabsPaneContext } from "element-plus";
import { CaretBottom, CaretTop } from "@element-plus/icons";

import no_found from "../../../assets/home/no_found.png";

import BTC from "../../../assets/home/part01_BTC.png";
import ETH from "../../../assets/home/part01_ETH.png";
import OKB from "../../../assets/home/part01_OKB.png";
import OKT from "../../../assets/home/part01_OKT.png";
import LTC from "../../../assets/home/part01_LTC.png";
import DOT from "../../../assets/home/part01_DOT.png";
import ADA from "../../../assets/home/part01_ADA.png";

import { useI18n } from 'vue-i18n';
const {t} = useI18n();
const activeName = ref("second");
const radioValue = ref("All");
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};

const search = ref("");

const tableLayout = ref("fixed");
// const sortMethod = (a : any,b : any) => {
//   console.log(a,b);

//   return a.cap - b.cap;
// }

const tableData = [
  {
    id: 1,
    isFavorites: true,
    img: BTC,
    tag: "BTC",
    asset: "Bitcoin",
    price: "A$24087.40",
    change: "+4.33%",
    cap: "$460.00B",
    type: "down",
    data: [30, 20, 30, 10, 0, 10],
  },
  {
    id: 2,
    img: ETH,
    tag: "ETH",
    asset: "Ethereum",
    price: "A$1807.10",
    change: "+6.37%",
    cap: "$216.69B",
    type: "up",
    data: [10, 0, 30, 50, 40, 70],
  },
  {
    id: 3,
    img: OKB,
    tag: "OKB",
    asset: "OKB",
    price: "A$1.01",
    change: "-0.02%",
    cap: "$65.89B",
    type: "up",
    data: [40, 20, 30],
  },
  {
    id: 4,
    img: OKT,
    tag: "OKT",
    asset: "OKC Token",
    price: "A$1.00",
    cap: "$54.76B",
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
    cap: "$18.50B",
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
    cap: "$18.50B",
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
    cap: "$18.50B",
    change: "+0.20%",
    type: "up",
    data: [10, 0, 30, 0, 50, 10, 90],
  },
  {
    id: 7,
    img: ADA,
    tag: "ADA",
    asset: "Cardano",
    price: "$0.49",
    cap: "$18.50B",
    change: "+0.20%",
    type: "up",
    data: [10, 0, 30, 0, 50, 10, 90],
  },
  {
    id: 7,
    img: ADA,
    tag: "ADA",
    asset: "Cardano",
    price: "$0.49",
    cap: "$18.50B",
    change: "+0.20%",
    type: "up",
    data: [10, 0, 30, 0, 50, 10, 90],
  },
  {
    id: 7,
    img: ADA,
    tag: "ADA",
    asset: "Cardano",
    price: "$0.49",
    cap: "$18.50B",
    change: "+0.20%",
    type: "up",
    data: [10, 0, 30, 0, 50, 10, 90],
  },
  {
    id: 7,
    img: ADA,
    tag: "ADA",
    asset: "Cardano",
    price: "$0.49",
    cap: "$18.50B",
    change: "+0.20%",
    type: "up",
    data: [10, 0, 30, 0, 50, 10, 90],
  },
  {
    id: 7,
    img: ADA,
    tag: "ADA",
    asset: "Cardano",
    price: "$0.49",
    cap: "$18.50B",
    change: "+0.20%",
    type: "up",
    data: [10, 0, 30, 0, 50, 10, 90],
  },
  {
    id: 7,
    img: ADA,
    tag: "ADA",
    asset: "Cardano",
    price: "$0.49",
    cap: "$18.50B",
    change: "+0.20%",
    type: "up",
    data: [10, 0, 30, 0, 50, 10, 90],
  },
  {
    id: 7,
    img: ADA,
    tag: "ADA",
    asset: "Cardano",
    price: "$0.49",
    cap: "$18.50B",
    change: "+0.20%",
    type: "up",
    data: [10, 0, 30, 0, 50, 10, 90],
  },
  {
    id: 7,
    img: ADA,
    tag: "ADA",
    asset: "Cardano",
    price: "$0.49",
    cap: "$18.50B",
    change: "+0.20%",
    type: "up",
    data: [10, 0, 30, 0, 50, 10, 90],
  },
  {
    id: 7,
    img: ADA,
    tag: "ADA",
    asset: "Cardano",
    price: "$0.49",
    cap: "$18.50B",
    change: "+0.20%",
    type: "up",
    data: [10, 0, 30, 0, 50, 10, 90],
  },
  {
    id: 7,
    img: ADA,
    tag: "ADA",
    asset: "Cardano",
    price: "$0.49",
    cap: "$18.50B",
    change: "+0.20%",
    type: "up",
    data: [10, 0, 30, 0, 50, 10, 90],
  },
  {
    id: 7,
    img: ADA,
    tag: "ADA",
    asset: "Cardano",
    price: "$0.49",
    cap: "$18.50B",
    change: "+0.20%",
    type: "up",
    data: [10, 0, 30, 0, 50, 10, 90],
  },
  {
    id: 7,
    img: ADA,
    tag: "Metaverse",
    asset: "Cardano",
    price: "$0.49",
    cap: "$18.50B",
    change: "+0.20%",
    type: "up",
    data: [10, 0, 30, 0, 50, 10, 90],
  },
  {
    id: 7,
    img: ADA,
    tag: "Metaverse",
    asset: "Cardano",
    price: "$0.49",
    cap: "$18.50B",
    change: "+0.20%",
    type: "up",
    data: [10, 0, 30, 0, 50, 10, 90],
  },
  {
    id: 7,
    img: ADA,
    tag: "Metaverse",
    asset: "Cardano",
    price: "$0.49",
    cap: "$18.50B",
    change: "+0.20%",
    type: "up",
    data: [10, 0, 30, 0, 50, 10, 90],
  },
  {
    id: 7,
    img: ADA,
    tag: "Metaverse",
    asset: "Cardano",
    price: "$0.49",
    cap: "$18.50B",
    change: "+0.20%",
    type: "up",
    data: [10, 0, 30, 0, 50, 10, 90],
  },
  {
    id: 7,
    img: ADA,
    tag: "Metaverse",
    asset: "Cardano",
    price: "$0.49",
    cap: "$18.50B",
    change: "+0.20%",
    type: "up",
    data: [10, 0, 30, 0, 50, 10, 90],
  },
];

const filterTableData = computed(() => {
  if (radioValue.value === "All") return tableData;
  return tableData.filter((v) => v.tag.includes(radioValue.value));
});
const spotData = [
  {
    id: 1,
    isFavorites: true,
    img: BTC,
    tag: "BTC",
    asset: "Bitcoin",
    upPirce: "22,788,01",
    price: "/ A$32,814,73",
    change: "-0.02%",
    changeCount: "23.470.02 / 22.661.80",
    volume: "1,280.34M",
    cap: "$460.00B",
    type: "down",
    data: [30, 20, 30, 10, 0, 10],
  },
  {
    id: 2,
    img: ETH,
    tag: "ETH",
    asset: "Ethereum",
    downPirce: "1,611.30",
    price: "/ A$32,814,73",
    change: "+1.42%",
    changeCount: "1,678.86 / 1,599.99",
    volume: "814.78M",
    cap: "$216.69B",
    type: "up",
    data: [10, 0, 30, 50, 40, 70],
  },
  {
    id: 3,
    img: OKB,
    tag: "OKB",
    asset: "OKB",
    changePrice: "38.75",
    price: "/ A$32,814,73",
    change: " -3.82% ",
    changeCount: "42.45 / 37.45",
    volume: "89.27M",
    cap: "$65.89B",
    type: "up",
    data: [40, 20, 30],
  },
  {
    id: 4,
    img: OKT,
    tag: "OKT",
    asset: "OKC Token",
    changePrice: "38.75",
    price: "/ A$32,814,73",
    changeCount: "242.45 / 237.45",
    volume: "89.27M",
    cap: "$54.76B",
    change: "+1.92%",
    type: "down",
    data: [10, 20, 70],
  },
  {
    id: 5,
    img: LTC,
    tag: "LTC",
    asset: "Litecoin",
    changePrice: "38.75",
    price: "/ A$32,814,73",
    changeCount: "242.45 / 237.45",
    volume: "89.27M",
    cap: "$18.50B",
    change: "+1.92%",
    type: "down",
    data: [20, 20, 60],
  },
  {
    id: 6,
    img: DOT,
    tag: "DOT",
    asset: "Polkadot",
    changePrice: "38.75",
    price: "/ A$32,814,73",
    changeCount: "242.45 / 237.45",
    volume: "89.27M",
    cap: "$18.50B",
    change: "+1.92%",
    type: "down",
    data: [10, 20, 30],
  },
  {
    id: 7,
    img: ADA,
    tag: "ADA",
    asset: "Cardano",
    changePrice: "38.75",
    price: "/ A$32,814,73",
    changeCount: "242.45 / 237.45",
    volume: "89.27M",
    cap: "$18.50B",
    change: "+1.92%",
    type: "up",
    data: [10, 0, 30, 0, 50, 10, 90],
  },
  {
    id: 7,
    img: ADA,
    tag: "ADA",
    asset: "Cardano",
    changePrice: "38.75",
    price: "/ A$32,814,73",
    changeCount: "242.45 / 237.45",
    volume: "89.27M",
    cap: "$18.50B",
    change: "+1.92%",
    type: "up",
    data: [10, 0, 30, 0, 50, 10, 90],
  },
  {
    id: 7,
    img: ADA,
    tag: "ADA",
    asset: "Cardano",
    changePrice: "38.75",
    price: "/ A$32,814,73",
    changeCount: "242.45 / 237.45",
    volume: "89.27M",
    cap: "$18.50B",
    change: "+1.92%",
    type: "up",
    data: [10, 0, 30, 0, 50, 10, 90],
  },
  {
    id: 7,
    img: ADA,
    tag: "ADA",
    asset: "Cardano",
    changePrice: "38.75",
    price: "/ A$32,814,73",
    changeCount: "242.45 / 237.45",
    volume: "89.27M",
    cap: "$18.50B",
    change: "+0.20%",
    type: "up",
    data: [10, 0, 30, 0, 50, 10, 90],
  },
  {
    id: 7,
    img: ADA,
    tag: "ADA",
    asset: "Cardano",
    changePrice: "38.75",
    price: "/ A$32,814,73",
    changeCount: "242.45 / 237.45",
    volume: "89.27M",
    cap: "$18.50B",
    change: "+0.20%",
    type: "up",
    data: [10, 0, 30, 0, 50, 10, 90],
  },
  {
    id: 7,
    img: ADA,
    tag: "ADA",
    asset: "Cardano",
    changePrice: "38.75",
    price: "/ A$32,814,73",
    changeCount: "242.45 / 237.45",
    volume: "89.27M",
    cap: "$18.50B",
    change: "+0.20%",
    type: "up",
    data: [10, 0, 30, 0, 50, 10, 90],
  },
  {
    id: 8,
    img: ADA,
    tag: "ADA",
    asset: "Cardano",
    changePrice: "38.75",
    price: "/ A$32,814,73",
    changeCount: "242.45 / 237.45",
    volume: "89.27M",
    cap: "$18.50B",
    change: "+0.20%",
    type: "up",
    data: [10, 0, 30, 0, 50, 10, 90],
  },
  {
    id: 9,
    img: ADA,
    tag: "ADA",
    asset: "Cardano",
    changePrice: "38.75",
    price: "/ A$32,814,73",
    changeCount: "242.45 / 237.45",
    volume: "89.27M",
    cap: "$18.50B",
    change: "+0.20%",
    type: "up",
    data: [10, 0, 30, 0, 50, 10, 90],
  },
  {
    id: 10,
    img: ADA,
    tag: "ADA",
    asset: "Cardano",
    changePrice: "38.75",
    price: "/ A$32,814,73",
    changeCount: "242.45 / 237.45",
    volume: "89.27M",
    cap: "$18.50B",
    change: "+0.20%",
    type: "up",
    data: [10, 0, 30, 0, 50, 10, 90],
  },
  {
    id: 11,
    img: ADA,
    tag: "ADA",
    asset: "Cardano",
    changePrice: "38.75",
    price: "/ A$32,814,73",
    changeCount: "242.45 / 237.45",
    volume: "89.27M",
    cap: "$18.50B",
    change: "+0.20%",
    type: "up",
    data: [10, 0, 30, 0, 50, 10, 90],
  },
  {
    id: 12,
    img: ADA,
    tag: "ADA",
    asset: "Cardano",
    changePrice: "38.75",
    price: "/ A$32,814,73",
    changeCount: "242.45 / 237.45",
    volume: "89.27M",
    cap: "$18.50B",
    change: "+0.20%",
    type: "up",
    data: [10, 0, 30, 0, 50, 10, 90],
  },
  {
    id: 13,
    img: ADA,
    tag: "ADA",
    asset: "Cardano",
    changePrice: "38.75",
    price: "/ A$32,814,73",
    changeCount: "1,678.86 / 1,599.99",
    volume: "89.27M",
    cap: "$18.50B",
    change: "+0.20%",
    type: "up",
    data: [10, 0, 30, 0, 50, 10, 90],
  },
  {
    id: 14,
    img: ADA,
    tag: "Metaverse",
    asset: "Cardano",
    changePrice: "38.75",
    price: "/ A$32,814,73",
    changeCount: "1,678.86 / 1,599.99",
    volume: "89.27M",
    cap: "$18.50B",
    change: "+0.20%",
    type: "up",
    data: [10, 0, 30, 0, 50, 10, 90],
  },
  {
    id: 15,
    img: ADA,
    tag: "Metaverse",
    asset: "Cardano",
    changePrice: "38.75",
    price: "/ A$32,814,73",
    changeCount: "1,678.86 / 1,599.99",
    volume: "89.27M",
    cap: "$18.50B",
    change: "+0.20%",
    type: "up",
    data: [10, 0, 30, 0, 50, 10, 90],
  },
  {
    id: 16,
    img: ADA,
    tag: "Metaverse",
    asset: "Cardano",
    changePrice: "38.75",
    price: "/ A$32,814,73",
    changeCount: "1,678.86 / 1,599.99",
    volume: "89.27M",
    cap: "$18.50B",
    change: "+0.20%",
    type: "up",
    data: [10, 0, 30, 0, 50, 10, 90],
  },
  {
    id: 17,
    img: ADA,
    tag: "Metaverse",
    asset: "Cardano",
    changePrice: "38.75",
    price: "/ A$32,814,73",
    changeCount: "1,678.86 / 1,599.99",
    volume: "89.27M",
    cap: "$18.50B",
    change: "+0.20%",
    type: "up",
    data: [10, 0, 30, 0, 50, 10, 90],
  },
  {
    id: 18,
    img: ADA,
    tag: "Metaverse",
    asset: "Cardano",
    changePrice: "38.75",
    price: "/ A$32,814,73",
    changeCount: "1,678.86 / 1,599.99",
    volume: "89.27M",
    cap: "$18.50B",
    change: "+0.20%",
    type: "up",
    data: [10, 0, 30, 0, 50, 10, 90],
  },
];

const filterSpotData = computed(() => {
  if (radioValue.value === "All") return spotData;
  return spotData.filter((v) => v.tag.includes(radioValue.value));
});

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
</script>

<style scoped lang="scss">
// .scrollbar-flex-content {
//   display: flex;
// }
.center-part {
  max-width: 1290px;
  min-height: 985px;
  margin: auto;
  padding: 21px 0 141px 0;
  position: relative;
  @media (max-width: 1440px) {
    padding: 21px 20px 141px 20px;
    max-width: 940px;
  }
}
.search-input {
  position: absolute;
  right: 0;
  top: 20px;
  width: 231px;
  height: 37px;
  z-index: 99;
  @media (max-width: 1440px) {
    right: 20px;
  }
}

:deep() {
  .el-input--large {
    height: 37px; //搜索框
  }
  // .el-scrollbar__bar.is-horizontal > div {
  //   height: 0; //iPhone滑动样式高度
  // }

  // .el-icon svg {
  //   width: 25px;
  //   height: 25px;
  // }
  .el-input__wrapper {
    background: #f1f1f1;
    box-shadow: none;
    border-radius: 6px;
  }
  .el-tabs__item {
    color: #9b9b9b !important;
    font-size: 16px;
    line-height: 19px;
  }
  .el-table__inner-wrapper {
    margin-top: 10px;
    margin-left: -10px;
  }
  .el-table__header {
    font-size: 14px;
    line-height: 16px;
    color: #878787;
  }
  .el-table th.el-table__cell {
    font-weight: 400;
  }
  .el-table__body {
    font-weight: 500;
  }
  .el-tabs__item is-top {
    --el-menu-active-color: #01c19a;
    font-size: 16px;
    line-height: 19px;
  }
  .el-tabs__item.is-active {
    color: #01c19a !important;
    font-weight: 500;
  }
  .el-tabs__active-bar {
    background-color: #01c19a;
    height: 4px;
  }

  .el-radio-button {
    &:hover span {
      color: #01c19a;
    }
    .el-radio-button__inner {
      border-radius: 6px !important;
      border: none !important;
      box-shadow: none;
      font-size: 14px;
      line-height: 17px;
    }
    --el-radio-button-checked-bg-color: #f1f1f1;
    --el-radio-button-checked-text-color: #01c19a !important;
  }
  .el-table .descending .sort-caret.descending {
    border-top-color: #01c19a;
  }
  .el-table .ascending .sort-caret.ascending {
    border-bottom-color: #01c19a;
  }
  .el-radio-button__inner {
    color: #9b9b9b;
  }
}

.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label {
  :deep(.el-icon) {
    vertical-align: middle;
    font-size: 25px;
    color: #dfdfdf;
  }
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
:deep(.el-table__inner-wrapper::before) {
  height: 0px;
}
:deep(.el-table__row) {
  height: 70px;
}
.crypto-star {
  margin-top: 3px;
  display: flex;
  float: left;
  font-size: 25px;
  color: #dfdfdf;
  img {
    width: 100%;
    height: 100%;
  }
}
.crypto-table {
  font-size: 16px;
  font-weight: 600;
  color: #020202;
  line-height: 19px;
}

.crypto-icon {
  display: flex;
  align-items: center;
  margin-left: 35px;
}
.table-tag {
  margin-left: 11px;
}
.table-asset {
  margin-left: 11px;
  color: #9b9b9b;
  font-weight: 500;
}

.action {
  :deep(.cell) {
    float: right;
  }
}
.action-btn {
  :deep(.el-button > span) {
    font-size: 16px;
    color: #01c19a;
    line-height: 19px;
    font-weight: 500;
  }
}
:deep(.el-empty__image) {
  margin-left: 40px;
  margin-top: 52px;
}
:deep(.el-empty__description p) {
  font-weight: 400;
  font-size: 16px !important;
  color: #9b9b9b !important;
}
.example-pagination-block {
  float: right;
  margin-top: 27px;
  color: #9b9b9b;
  :deep() {
    // .el-pager{
    //   margin-top: 15px;
    // }
    .el-pager li {
      color: #9b9b9b;
    }
    .el-pagination.is-background .el-pager li {
      background-color: #ffffff;
    }
    .el-pager li.is-active {
      background-color: #f1f1f1 !important;
      color: #000;
    }
    .el-pagination.is-background .btn-next,
    .el-pagination.is-background .btn-prev,
    .el-pagination.is-background .el-pager li {
      background-color: #ffffff;
    }
    // .el-pager li:hover {
    //   color: #01c19a !important;
    // }
    .el-pagination {
      --el-pagination-border-radius: 4px;
      --el-pagination-font-size: 16px;
    }
  }
}
.min-pagination {
  :deep(.el-pagination) {
    --el-pagination-button-width: 20px;
    --el-pagination-button-height: 20px;
    --el-pagination-font-size: 14px;
  }
}
</style>
