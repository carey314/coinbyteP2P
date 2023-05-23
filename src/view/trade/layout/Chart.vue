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
            @change="changeType"
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
      </div>
      <div class="nav-right">
        <div class="data nav">
          <el-radio-group v-model="activeData" @change="changeData" @tab-click="handleClick"> 
            <el-radio-button :class="{ selected: activeData === 'first' }" label="first"><span>1D</span></el-radio-button>
            <el-radio-button :class="{ selected: activeData === 'second' }" label="second"><span>7D</span></el-radio-button>
            <el-radio-button :class="{ selected: activeData === 'third' }" label="third"><span>1M</span></el-radio-button>
            <el-radio-button :class="{ selected: activeData === 'forth' }" label="forth"><span>1Y</span></el-radio-button>
            <el-radio-button :class="{ selected: activeData === 'fifth' }" label="fifth"><span>ALL</span></el-radio-button>
            <el-radio-button @click.stop @click="showDatePicker">
              <el-icon><Calendar /></el-icon>
              <template #slot>
                <div class="demo-date-picker">
                  <div class="block">
                    <el-date-picker
                      v-model="value2"
                      type="date"
                      :disabled-date="disabledDate"
                      :shortcuts="shortcuts"
                    />
                  </div>
                </div>
              </template>
            </el-radio-button>
            <el-radio-button :class="{ selected: activeData === 'seventh' }" label="seventh"><span>LOG</span></el-radio-button>
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
        :data="data"
        :autosize="true"
        :chart-options="chartOptions"
        :series-options="seriesOptions"
        ref="lwChart"
      />
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
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed } from "vue";
import LWChart from "./components/LWChart.vue";
import { getCoinMarketCap } from "../../../api/market";

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
    text: "Today",
    value: new Date(),
  },
  {
    text: "Yesterday",
    value: () => {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24);
      return date;
    },
  },
  {
    text: "A week ago",
    value: () => {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
      return date;
    },
  },
];

const disabledDate = (time: Date) => {
  return time.getTime() > Date.now();
};

function showDatePicker() {
  (ref as any).value.$el.querySelector(".el-date-picker__header-label").click();
}

const coinMarketCapData = ref<any>({ data: [] });
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
  try {
    const response = await getCoinMarketCap();
    coinMarketCapData.value = JSON.parse(response.data);
  } catch (error) {
    console.error(error);
  }
});

interface DataPoint {
  time: number;
  value?: number;
  open?: number;
  high?: number;
  low?: number;
  close?: number;
}

/**
 * Generates sample data for the Lightweight Charts™ example
 * @param  {Boolean} ohlc Whether generated dat should include open, high, low, and close values
 * @returns {Array} sample data
 */
function generateSampleData(ohlc: boolean): DataPoint[] {
  const randomFactor = 25 + Math.random() * 25;
  function samplePoint(i: number): number {
    return (
      i *
        (0.5 +
          Math.sin(i / 10) * 0.2 +
          Math.sin(i / 20) * 0.4 +
          Math.sin(i / randomFactor) * 0.8 +
          Math.sin(i / 500) * 0.5) +
      200
    );
  }

  const res: DataPoint[] = [];
  let date = new Date(Date.UTC(2022, 0, 1, 0, 0, 0, 0));
  const numberOfPoints = ohlc ? 100 : 500;
  for (var i = 0; i < numberOfPoints; ++i) {
    const time = date.getTime() / 1000;
    const value = samplePoint(i);
    if (ohlc) {
      const randomRanges = [
        -1 * Math.random(),
        Math.random(),
        Math.random(),
      ].map((i) => i * 10);
      const sign = Math.sin(Math.random() - 0.5);
      res.push({
        time,
        low: value + randomRanges[0],
        high: value + randomRanges[1],
        open: value + sign * randomRanges[2],
        close: samplePoint(i + 1),
      });
    } else {
      res.push({
        time,
        value,
      });
    }

    date.setUTCDate(date.getUTCDate() + 1);
  }

  return res;
}

const chartOptions = ref({
  timeScale: {
    timeFormat: "%Y-%m-%d %H:%M:%S",
  },
});
const data = ref<DataPoint[]>(generateSampleData(false));
const seriesOptions = ref<{ [key: string]: string | number }>({
  color: "rgb(24, 183, 136)",
});
const chartType = ref<string>("area");
const lwChart = ref<typeof LWChart>();

function randomShade(): number {
  return Math.round(Math.random() * 255);
}

const randomColor = (alpha: number = 1): string => {
  return `rgba(${randomShade()}, ${randomShade()}, ${randomShade()}, ${alpha})`;
};

const colorsTypeMap: { [key: string]: [string, number][] } = {
  area: [
    ["topColor", 0.4],
    ["bottomColor", 0],
    ["lineColor", 1],
  ],
  bar: [
    ["upColor", 1],
    ["downColor", 1],
  ],
  baseline: [
    ["topFillColor1", 0.28],
    ["topFillColor2", 0.05],
    ["topLineColor", 1],
    ["bottomFillColor1", 0.28],
    ["bottomFillColor2", 0.05],
    ["bottomLineColor", 1],
  ],
  candlestick: [
    ["upColor", 1],
    ["downColor", 1],
    ["borderUpColor", 1],
    ["borderDownColor", 1],
    ["wickUpColor", 1],
    ["wickDownColor", 1],
  ],
  histogram: [["color", 1]],
  line: [["color", 1]],
};

const changeData = () => {
  const candlestickTypeData = ["candlestick", "bar"].includes(chartType.value);
  const newData = generateSampleData(candlestickTypeData);
  data.value = newData;
  if (chartType.value === "baseline") {
    const average =
      newData.reduce((s, c) => {
        return s + (c.value || 0);
      }, 0) / newData.length;
    seriesOptions.value = {
      baseValue: { type: "price", price: average } as any,
    };
  }
};

const changeColors = () => {
  const options: { [key: string]: string } = {};
  const colorsToSet = colorsTypeMap[chartType.value];
  colorsToSet.forEach((c) => {
    options[c[0]] = randomColor(c[1]);
  });
  seriesOptions.value = options;
};

const changeType = () => {
  const types = ["area", "candlestick", "line"].filter(
    (t) => t !== chartType.value
  );
  const randIndex = Math.round(Math.random() * (types.length - 1));
  chartType.value = types[randIndex];
  changeData();
  // call a method on the component.
  lwChart.value!.fitContent();
};

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
    }
    .el-radio-button {
      --el-radio-button-checked-border-color: #eff2f5;
    }
  }
  .nav-left {
    color: #616e85;
    display: flex;

    .selected span {
      background-color: #fff;
      color: #616e85;

      padding: 2px 15px;
      border-radius: 4px;
    }
    .type {
      margin-left: 20px;
    }
  }
  .nav-right{
    .selected span {
      background-color: #fff;
      color: #616e85;
      padding: 2px 15px;
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
  margin-top: 20px;
  justify-content: space-between;
  flex: 1 1 0%;
  gap: var(--c-space-100);
  .compare-input {
    width: 45%;
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
    width: 45%;
    height: 30px;
    background-color: #eff2f5 !important;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
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
}
</style>
