<template>
  <div class="chart-box">
    <div class="chart-nav">
      <div class="nav-left">
        <div class="currency nav">
          <el-radio-group v-model="activeName" @tab-click="handleClick">
            <el-radio-button
              :class="{ selected: activeName === 'first' }"
              label="first"
            >
              <span>Price</span>
            </el-radio-button>
            <el-radio-button
              :class="{ selected: activeName === 'second' }"
              label="second"
            >
              <span>Market Cap</span>
            </el-radio-button>
          </el-radio-group>
        </div>
        <div class="type nav">
          <el-radio-group
            v-model="activeType"
            v-show="shouldShowChartType"
            @change="changeData"
            @tab-click="handleClick"
          >
            <el-radio-button
              :class="{ selected: activeType === 'first' }"
              label="first"
            >
              <span
                ><el-icon><Sort /></el-icon
              ></span>
            </el-radio-button>
            <el-radio-button
              :class="{ selected: activeType === 'second' }"
              label="second"
            >
              <span
                ><el-icon><Finished /></el-icon
              ></span>
            </el-radio-button>
          </el-radio-group>
        </div>
        <div class="nav-bottom">
          <div class="compare-input">
            <el-select v-model="value" clearable placeholder="Compare with">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div class="trade-view">
            <div class="chart-view" @click="visible = true">
              <span class="custom-tabs-label">
                <el-icon><TrendCharts /></el-icon>
              </span>
              <span>TradingView</span>
            </div>
            <el-dialog v-model="visible" :show-close="false">
              <template #header="{ close, titleId, titleClass }">
                <div class="my-header">
                  <h4 :id="titleId" :class="titleClass">
                    This is a custom header!
                  </h4>
                  <el-button @click="close">
                    <el-icon class="el-icon--left"><Close /></el-icon>
                  </el-button>
                </div>
              </template>
              This is dialog content.
            </el-dialog>
          </div>
        </div>
      </div>

      <div class="nav-right">
        <div class="data nav">
          <el-radio-group
            v-model="activeData"
            @change="changeData"
            @tab-click="handleClick"
          >
            <el-radio-button
              :class="{ selected: activeData === 'first' }"
              label="first"
              ><span>1D</span></el-radio-button
            >
            <el-radio-button
              :class="{ selected: activeData === 'second' }"
              label="second"
              ><span>7D</span></el-radio-button
            >
            <el-radio-button
              :class="{ selected: activeData === 'third' }"
              label="third"
              ><span>1M</span></el-radio-button
            >
            <el-radio-button
              :class="{ selected: activeData === 'forth' }"
              label="forth"
              ><span>1Y</span></el-radio-button
            >
            <el-radio-button
              :class="{ selected: activeData === 'fifth' }"
              label="fifth"
              ><span>ALL</span></el-radio-button
            >
            <el-radio-button @click.stop
                             label="sixth"
                             :class="{ selected: activeData === 'sixth' }">
              <el-icon><Calendar /></el-icon>
              <el-date-picker
                  class="test-date"
                  v-model="value2"
                  @change="changeData()"
                  type="daterange"
                  :disabled-date="disabledDate"
                  :shortcuts="shortcuts"
              />
            </el-radio-button>
            <el-radio-button
              :class="{ selected: activeData === 'seventh' }"
              label="seventh"
              ><span>LOG</span></el-radio-button
            >
            <el-radio-button label="eigth">
              <el-icon><Download /></el-icon>
            </el-radio-button>
          </el-radio-group>
        </div>
      </div>
    </div>
    <div class="chart-container">
      <LWChart
        :type="chartType"
        :data="coinMarketCapData"
        :autosize="true"
        :chart-options="chartOptions"
        :series-options="seriesOptions"
        :price-scale-options="priceScaleOptions"
        :time-scale-options="timeScaleOptions"
        ref="lwChart"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed } from "vue";
import LWChart from "./components/LWChart.vue";
import { getCoinMarketCap, getCoinMarketCapOhlc } from "../../../api/market";
import moment from "moment-timezone";
import {
  Calendar,
  Sort,
  TrendCharts,
  Finished,
  Close,
  Download,
} from "@element-plus/icons-vue";
import BTC from "../../../assets/home/part01_BTC.png";
import type { TabsPaneContext } from "element-plus";

const activeName = ref("first");
const radioGroupRef = ref();
const activeType = ref("first");
const activeData = ref("first");
const visible = ref(false);
const shouldShowChartType = computed(() => activeName.value !== "second");

function handleClick() {
  activeName.value = radioGroupRef.value.modelValue;
  activeType.value = radioGroupRef.value.modelValue;
  activeData.value = radioGroupRef.value.modelValue;
}

const value2 = ref("");

const shortcuts = [
  {
    text: 'Last 7 days',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    },
  },
  {
    text: 'Last 30 days',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    },
  },
  {
    text: 'Last 90 days',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    },
  },
  {
    text: 'Last 180 days',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 180)
      return [start, end]
    },
  },
]

const disabledDate = (time: Date) => {
  return time.getTime() > Date.now();
};

function showDatePicker() {
  (ref as any).value.$el.querySelector(".el-date-picker__header-label").click();
}

const coinMarketCapData = ref<any>([]);
const value = ref("");
const options = [
  {
    value: "BTC",
    label: "BTC",
  },
  {
    value: "BNB",
    label: "BNB",
  },
];
onMounted(async () => {
  getData();
});
onMounted(async () => {
  getData();
  setInterval(() => {
    getData();
  }, 60000);
});

async function getData(isRefresh = false) {
  // console.log(value2.value)
  try {
    let days = 1;
    if (activeData.value === "first") {
      days = 1;
    } else if (activeData.value === "second") {
      days = 7;
    } else if (activeData.value === "third") {
      days = 30;
    } else if (activeData.value === "forth") {
      days = 365;
    } else if (activeData.value === "fifth") {
      days = 365 * 3;
    }

    let type = "prices";
    if (activeName.value === "first") {
      if (activeType.value === "first") {
        chartType.value = "baseline";
      } else {
        chartType.value = "candlestick";
      }
      type = "prices";
    } else {
      chartType.value = "line";
      type = "market_caps";
    }

    if (chartType.value == "candlestick") {
      if (days > 367) {
        days = 365 * 2;
      }
      const response = await getCoinMarketCapOhlc({
        symbols: "bitcoin",
        days,
      });
      const jsonData = JSON.parse(response.data.bitcoin);
      const mapData = jsonData.map((item: any) => {
        const localTime = moment();
        const offsetInMinutes = localTime.utcOffset();
        const offsetInHours = offsetInMinutes / 60;

        item[0] = moment(item[0]).add(offsetInHours, 'hours').valueOf();
        return {
          time: Math.floor(item[0] / 1000),
          open: item[1],
          high: item[2],
          low: item[3],
          close: item[4],
        };
      });
      timeScaleOptions.value = {
        ...timeScaleOptions.value,
        from: mapData[0].time,
        to: mapData[mapData.length - 1]
      }
      if (isRefresh) {
        lwChart.value!.getSeries().update(mapData[mapData.length - 1]);
      } else {
        coinMarketCapData.value = mapData;
      }
    } else {
      const response = await getCoinMarketCap({
        symbols: "bitcoin",
        days,
      });
      const jsonData = JSON.parse(response.data.bitcoin);
      console.log(jsonData);

      const mapData = jsonData[type].map((item: any) => {
        // const localTime = moment();
        // const offsetInMinutes = localTime.utcOffset();
        // const offsetInHours = offsetInMinutes / 60;
        // item[0] = moment(item[0]).add(offsetInHours, 'hours').valueOf()

        return {
          time: Math.floor(item[0] / 1000),
          value: item[1],
        };
      });
      timeScaleOptions.value = {
        ...timeScaleOptions.value,
        from: mapData[0].time,
        to: mapData[mapData.length - 1]
      }
      if (isRefresh) {
        lwChart.value!.getSeries().update(mapData[mapData.length - 1]);
      } else {
        // mapData.length = 10
        coinMarketCapData.value = mapData;

        changeColors();
        if (chartType.value === "baseline") {
          seriesOptions.value = {
            ...seriesOptions.value,
            baseLineWidth: 1,
            baseValue: { type: "price", price: mapData[0].value } as any,
          };
        }
      }
    }
  } catch (error) {
    console.error(error);
  }
}

const changeData = () => {
  getData();
};

interface DataPoint {
  time: number;
  value?: number;
  open?: number;
  high?: number;
  low?: number;
  close?: number;
}

const chartOptions = ref({
  rightPriceScale: {
    scaleMargins: {
      top: 0.3,
      bottom: 0.25,
    },
  },
  priceScale: {
    borderColor: '#eee',
  },
  grid: {
    vertLines: false,
  },
  localization: {
    priceFormatter: (price: any) => {
      if (price >= 1e15) {
        return (price / 1e15).toFixed(2) + "Q";
      } else if (price >= 1e12) {
        return (price / 1e12).toFixed(2) + "T";
      } else if (price >= 1e9) {
        return (price / 1e9).toFixed(2) + "B";
      } else if (price >= 1e6) {
        return (price / 1e6).toFixed(2) + "M";
      } else if (price >= 1e3) {
        return (price / 1e3).toFixed(2) + "K";
      } else {
        return price.toFixed(2);
      }
    },
  },
});

const seriesOptions = ref<{ [key: string]: string | number }>({
  color: "rgb(24, 183, 136)",
});
const priceScaleOptions = ref<any>({
  scaleMargins: {
    top: 0.8,
    bottom: 0,
  },
});
const timeScaleOptions = ref<any>({
  timeVisible: true,
  secondsVisible: false,
  rightOffset: 0,
});
const chartType = ref<string>("baseline");
const lwChart = ref<typeof LWChart>();

function randomShade(): number {
  return Math.round(Math.random() * 255);
}

const randomColor = (alpha: number = 1): string => {
  return `rgba(${randomShade()}, ${randomShade()}, ${randomShade()}, ${alpha})`;
};

const colorsTypeMap: { [key: string]: [string, string][] } = {
  // area: [
  //   ["topColor", 0.4],
  //   ["bottomColor", 0],
  //   ["lineColor", 1],
  // ],
  // bar: [
  //   ["upColor", 1],
  //   ["downColor", 1],
  // ],
  baseline: [
    ["topFillColor1", "rgba( 38, 166, 154, 0.28)"],
    ["topFillColor2", "rgba( 38, 166, 154, 0.05)"],
    ["topLineColor", "rgba( 38, 166, 154, 1)"],
    ["bottomFillColor1", "rgba( 239, 83, 80, 0.05)"],
    ["bottomFillColor2", "rgba( 239, 83, 80, 0.28)"],
    ["bottomLineColor", "rgba( 239, 83, 80, 1)"],
  ],
  candlestick: [],
  // candlestick: [
  //   ["upColor", 1],
  //   ["downColor", 1],
  //   ["borderUpColor", 1],
  //   ["borderDownColor", 1],
  //   ["wickUpColor", 1],
  //   ["wickDownColor", 1],
  // ],
  // histogram: [["color", 1]],
  line: [["color", "blue"]],
};

const changeColors = () => {
  const options: { [key: string]: string } = {};
  const colorsToSet = colorsTypeMap[chartType.value];
  colorsToSet.forEach((c) => {
    options[c[0]] = c[1];
  });
  seriesOptions.value = options;
};

// const changeType = () => {
//   const types = ["area", "candlestick", "line"].filter(
//     (t) => t !== chartType.value
//   );
//   const randIndex = Math.round(Math.random() * (types.length - 1));
//   chartType.value = types[randIndex];
//   changeData();
//   // call a method on the component.
//   lwChart.value!.fitContent();
// };

watch(activeName, () => {
  changeData();
});
</script>

<style scoped lang="scss">
.chart-container {
  margin-top: 42px;
  width: 100%;
  height: 390px;
}
// #eff2f5
.chart-nav {
  display: flex;
  justify-content: space-between;
  :deep() {
    // .el-radio-button__inner {
    //   height: 30px;
    // }
    .el-radio-button__inner {
      background-color: #eff2f5;
      border-color: #eff2f5;
      padding: 8px 4px !important;
    }
    .convert-page
      .convert-content
      .center-part
      .center-convert
      .convert-radio[data-v-618d032f]
      .el-radio-button__original-radio:checked
      + .el-radio-button__inner {
      border: none !important;
    }
    .el-radio-button {
      --el-radio-button-checked-border-color: #eff2f5;
    }
  }
  .nav-left {
    color: #616e85;
    display: flex;
    justify-content: space-around;
    .selected span {
      background-color: #fff;
      color: #616e85;

      padding: 2px 6px;
      border-radius: 4px;
    }
    .currency {
      // width: 180px;
    }
    .type {
      margin-left: 15px;
    }
  }
  .nav-right {
    @media (max-width: 1250px) {
      width: 35%;
    }
    .selected span {
      background-color: #fff;
      color: #616e85;
      padding: 2px;
      border-radius: 4px;
    }
  }
  :deep() {
    .el-tabs__header {
      margin: 0;
    }
  }
}

.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
.nav-bottom {
  display: flex;
  margin-left: 5px;
  justify-content: space-around;
  flex: 1 1 0%;
  gap: var(--c-space-100);
  .compare-input {
    width: 48%;
    :deep() {
      .el-input__wrapper {
        background-color: #eff2f5 !important;
        border-color: #eff2f5 !important;
      }
      .el-select {
        width: 100%;
      }
    }
  }
  .trade-view {
    height: 30px;
    background-color: #eff2f5 !important;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    padding: 0 8px;
    span {
      background: none;
    }
  }
}
:deep() {
  .el-date-editor.el-input,
  .el-date-editor.el-input__wrapper {
    width: 40px;
  }
  .el-input__wrapper {
    box-shadow: none;
  }
  .el-radio-button{
    position: relative;
    overflow: hidden;
  }
  .test-date{
    opacity: 0;
    height: 100%;
    position: absolute;
    left: -40px;
    top: 0px;
    width: 80px!important;
  }
}

</style>
