<template>
  <div>
    <button @click="handleText">1111111</button>
    <!-- <div ref="myChart"></div> -->
  </div>
</template>

<script setup lang="ts">
import http from "../../../utils/http";
import { onMounted } from "vue";
import { getProfile } from "../../../api/user";
import { getMyAssetsCopy } from "../../../api/wallet";
import {
  getWithDrawalTemplates,
  getWithDrawalTemplateDetails,
  getWithDrawalMethods
} from "../../../api/withdrawals";

import * as echarts from "echarts";

// type EChartsOption = echarts.EChartsOption;

// var chartDom = document.getElementById("main")!;
// var myChart = echarts.init(chartDom);
// var option: EChartsOption;

// let base = +new Date(1968, 9, 3);
// let oneDay = 24 * 3600 * 1000;
// let date = [];

// let data = [Math.random() * 300];

// for (let i = 1; i < 20000; i++) {
//   var now = new Date((base += oneDay));
//   date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"));
//   data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
// }

// option = {
//   tooltip: {
//     trigger: "axis",
//     position: function (pt) {
//       return [pt[0], "10%"];
//     },
//   },
//   title: {
//     left: "center",
//     text: "Large Area Chart",
//   },
//   toolbox: {
//     feature: {
//       dataZoom: {
//         yAxisIndex: "none",
//       },
//       restore: {},
//       saveAsImage: {},
//     },
//   },
//   xAxis: {
//     type: "category",
//     boundaryGap: false,
//     data: date,
//   },
//   yAxis: {
//     type: "value",
//     boundaryGap: [0, "100%"],
//   },
//   dataZoom: [
//     {
//       type: "inside",
//       start: 0,
//       end: 10,
//     },
//     {
//       start: 0,
//       end: 10,
//     },
//   ],
//   series: [
//     {
//       name: "Fake Data",
//       type: "line",
//       symbol: "none",
//       sampling: "lttb",
//       itemStyle: {
//         color: "rgb(255, 70, 131)",
//       },
//       areaStyle: {
//         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//           {
//             offset: 0,
//             color: "rgb(255, 158, 68)",
//           },
//           {
//             offset: 1,
//             color: "rgb(255, 70, 131)",
//           },
//         ]),
//       },
//       data: data,
//     },
//   ],
// };

// option && myChart.setOption(option);

onMounted(() => {
  // http.get("/v1/me?with=").then(res => {
  //     console.log(JSON.parse(res.data.data.settings.gridsters));
  // })
  // getMyAssetsCopy().then((res : any) => {
  //     console.log(res.data);
  // })
  getWithDrawalMethods().then((res) => {
    console.log(res.data);
  });
});
const handleText = () => {
  const jsonString =
    '{"user_agent":"Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko\\/20100101 Firefox\\/47.0"}';
  const base64String = btoa(jsonString);
};
</script>

<style lang="scss" scoped></style>
