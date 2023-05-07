<template>
<div class="chart-box">
  <div class="coin-name">
    <div>
      <img :src="BTC" />
    </div>
    <div class="coin-number" v-if="coinMarketCapData.data.length > 0">
      A$ {{ coinMarketCapData.data[0].quote.AUD.price.toFixed(2) }}
    </div>
  </div>
  <div class="coin-time">
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="24H" name="first">
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
      </el-tab-pane>
      <el-tab-pane label="1W" name="second">
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
      </el-tab-pane>
      <el-tab-pane label="1M" name="third">
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
      </el-tab-pane>
      <el-tab-pane label="1Y" name="fourth">
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
      </el-tab-pane>
      <el-tab-pane label="All" name="fifth">
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
      </el-tab-pane>
    </el-tabs>
  </div>
</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import LWChart from "./components/LWChart.vue";
import { getCoinMarketCap } from "../../../api/market";

import BTC from "../../../assets/home/part01_BTC.png";
import type { TabsPaneContext } from "element-plus";

const activeName = ref("third");
const coinMarketCapData = ref<any>({ data: [] });

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
  const types = ["area"].filter((t) => t !== chartType.value);
  const randIndex = Math.round(Math.random() * (types.length - 1));
  chartType.value = types[randIndex];
  changeData();
  // call a method on the component.
  lwChart.value!.fitContent();
};
</script>


<style scoped>
.coin-number{
  font-size: 40px;
  margin-left: 18px;
  margin-top: 3px;
}
.coin-name{
  display: flex;
  float: left;
  font-size: 14px;
}
:deep(.el-tabs__nav-scroll){
  float: right;
}
:deep(.el-tabs__nav-wrap::after){
  width: 0;
}
:deep(.el-tabs__active-bar){
  width: 30px;
  height: 4px;
  background-color: #01C19A;
}
:deep(.el-tabs__item){
  color: #878787;
}
:deep(.el-tabs__item.is-active){
  color: #01C19A;
}
.chart-container {
  margin-top: 42px;
  width: 100%;
  height: 390px;
}
</style>
