<script setup lang="ts">
import { createChart, version } from "lightweight-charts";
import * as LightweightCharts from "lightweight-charts";
import {
  ref,
  onMounted,
  onUnmounted,
  watch,
  defineExpose,
  defineProps,
} from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "line",
  },
  data: {
    type: Array,
    required: true,
  },
  autosize: {
    default: true,
    type: Boolean,
  },
  chartOptions: {
    type: Object,
  },
  // gridOptions: {
  //   type: Object,
  //   default: () => ({ visible: false }),
  // },
  seriesOptions: {
    type: Object,
  },
  timeScaleOptions: {
    type: Object,
  },
  priceScaleOptions: {
    type: Object,
  },
});

// Function to get the correct series constructor name for current series type.
function getChartSeriesConstructorName(type: string) {
  return `add${type.charAt(0).toUpperCase() + type.slice(1)}Series`;
}

// Lightweight Charts™ instances are stored as normal JS variables
// If you need to use a ref then it is recommended that you use `shallowRef` instead
let series: any;
let series2: any;
let chart: any;

const chartContainer = ref();

const fitContent = () => {
  if (!chart) return;
  chart.timeScale().fitContent();
};

const getChart = () => {
  return chart;
};
const getSeries = () => {
  return series;
};
const resizeChart = () => {
  if (!chart || !chartContainer.value) return;
  const dimensions = chartContainer.value.getBoundingClientRect();
  chart.resize(dimensions.width, dimensions.height);
};

defineExpose({ fitContent, getChart, getSeries, resizeChart });

// Auto resizes the chart when the browser window is resized.
const resizeHandler = () => {
  if (!chart || !chartContainer.value) return;
  const dimensions = chartContainer.value.getBoundingClientRect();
  chart.resize(dimensions.width, dimensions.height);
};

// Creates the chart series and sets the data.
const addSeriesAndData = (props: any) => {
  // console.log(props)
  const seriesConstructor = getChartSeriesConstructorName(props.type);
  // console.log(seriesConstructor)
  series = chart[seriesConstructor](props.seriesOptions);

  series.setData(props.data);
};

// Creates the chart series and sets the data.
const addVolumeAndData = (props: any) => {
  const seriesConstructor = 'addHistogramSeries';
  series = chart[seriesConstructor]({
    color: '#aaa',
    priceFormat: {
      type: 'volume',
    },
    priceScaleId: 'test',
  });
  const data = [].concat(props.data);
  props.data.forEach((item:any)=>{
    item.value = Math.random() * 150 + 300;
    const ran = Math.random() > 0.5 ? 1 : 0;
    item.color = ran ? 'rgba(0, 150, 136, 0.8)' : 'rgba(255, 82, 82, 0.8)'
  })
  series.setData(data);
};

onMounted(() => {
  // Create the Lightweight Charts Instance using the container ref.
  chart = createChart(chartContainer.value, props.chartOptions);
  addSeriesAndData(props);
  // addVolumeAndData(props);
  if (props.priceScaleOptions) {
    chart.priceScale('test').applyOptions(props.priceScaleOptions);
  }
  // if (props.gridOptions) {
  //   chart.applyOptions({ grid: props.gridOptions });
  // }

  if (props.timeScaleOptions) {
    chart.timeScale().applyOptions({
      ...props.timeScaleOptions,
      fixRightEdge:true,
      fixLeftEdge: true,
      tickMarkFormatter: (time:any, tickMarkType:any, locale:any) => {
        const visibleRange = chart.timeScale().getVisibleRange();
        const timeRange = visibleRange.to - visibleRange.from;

        if (timeRange < 24 * 60 * 60) { // 小于一天，显示小时和分钟
          const date = new Date(time * 1000);
          const formatOptions:any = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          };
          let label = date.toLocaleString(locale, formatOptions);

          // 如果当前标记是一天的开始，则在前一天和当天之间添加日期
          if (tickMarkType === LightweightCharts.TickMarkType.Year ||
              tickMarkType === LightweightCharts.TickMarkType.Month ||
              tickMarkType === LightweightCharts.TickMarkType.DayOfMonth ||
              time === visibleRange.from) {
            const dateFormatOptions:any = {
              month: 'short',
              day: 'numeric',
            };
            label += ' ' + date.toLocaleString(locale, dateFormatOptions);
          }

          return label;
        } else if (timeRange < 30 * 24 * 60 * 60) { // 小于一个月，显示月份和日期
          const date = new Date(time * 1000);
          const formatOptions:any = {
            month: 'short',
            day: 'numeric',
          };
          return date.toLocaleString(locale, formatOptions);
        } else { // 大于一个月，显示年份和月份
          const date = new Date(time * 1000);
          const formatOptions:any = {
            year: 'numeric',
            month: 'short',
          };
          return date.toLocaleString(locale, formatOptions);
        }
      },
    });
    // let lastVisibleRange = chart.timeScale().getVisibleRange();
    // chart.timeScale().subscribeVisibleTimeRangeChange((newVisibleRange:any) => {
    //   console.log(newVisibleRange)
    //   lastVisibleRange = newVisibleRange;
    // });
    // chart.timeScale().fitContent();
    // chart.timeScale().applyOptions({
    //   lockVisibleTimeRangeOnResize: true,
    //   rightOffset: 12,
    //   leftOffset: 0,
    //   maxBarSpacing: 50,
    //   minBarSpacing: 1,
    //   fixLeftEdge: false,
    //   fixRightEdge: false,
    //   visibleRange: {
    //     minRange: chart.timeScale().getVisibleRange(),
    //   },
    // })
  }
  // console.log(chart.timeScale())
  chart.timeScale().fitContent();

  if (props.autosize) {
    window.addEventListener("resize", resizeHandler);
  }
});

onUnmounted(() => {
  if (chart) {
    chart.remove();
    chart = null;
  }
  if (series) {
    series = null;
  }
  window.removeEventListener("resize", resizeHandler);
});

/*
 * Watch for changes to any of the component properties.

 * If an options property is changed then we will apply those options
 * on top of any existing options previously set (since we are using the
 * `applyOptions` method).
 *
 * If there is a change to the chart type, then the existing series is removed
 * and the new series is created, and assigned the data.
 *
 */
watch(
  () => props.autosize,
  (enabled) => {
    if (!enabled) {
      window.removeEventListener("resize", resizeHandler);
      return;
    }
    window.addEventListener("resize", resizeHandler);
  }
);

watch(
  () => props.type,
  (newType) => {
    if (series && chart) {
      chart.removeSeries(series);
    }
    addSeriesAndData(props);
  }
);

watch(
  () => props.data,
  (newData:any) => {
    if (!series) return;
    series.setData(newData);
    chart.timeScale().fitContent();
  }
);

watch(
  () => props.chartOptions,
  (newOptions) => {
    if (!chart) return;
    chart.applyOptions(newOptions);
  }
);
// watch(
//   () => props.gridOptions,
//   (newOptions) => {
//     // if (!chart) return;
//     chart.applyOptions({ grid: newOptions });
//   }
// );
watch(
  () => props.seriesOptions,
  (newOptions) => {
    if (!series) return;
    series.applyOptions(newOptions);
  }
);

watch(
  () => props.priceScaleOptions,
  (newOptions) => {
    if (!chart) return;
    chart.priceScale().applyOptions(newOptions);
  }
);

watch(
  () => props.timeScaleOptions,
  (newOptions) => {
    if (!chart) return;
    chart.timeScale().applyOptions(newOptions);
  }
);
watch(
  () => props.autosize,
  (enabled) => {
    if (!enabled) {
      window.removeEventListener("resize", resizeHandler);
      return;
    }
    window.addEventListener("resize", resizeHandler);
  }
);
</script>

<template>
  <div class="lw-chart" ref="chartContainer"></div>
</template>

<style scoped>
.lw-chart {
  width: 100%;
  height: 100%;
}
</style>
