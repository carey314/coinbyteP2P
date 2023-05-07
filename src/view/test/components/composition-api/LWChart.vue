<template>
  <div class="tradingview-widget-container">
    <div class="tradingview-widget-container__widget"></div>
    <div class="tradingview-widget-copyright">
      <a href="https://www.tradingview.com/symbols/BTCUSD/?exchange=BITSTAMP" rel="noopener" target="_blank">
        <span class="blue-text">Bitcoin price</span>
      </a> by TradingView
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

// 在组件加载时，将 TradingView 脚本添加到 head 的末尾。
onMounted(() => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js';
  script.async = true;
  script.textContent = JSON.stringify({
    symbols: [['BTC', 'BITSTAMP:BTCUSD|1M']],
    chartOnly: false,
    width: '100%',
    height: '100%',
    locale: 'en',
    colorTheme: 'light',
    autosize: true,
    showVolume: false,
    showMA: false,
    hideDateRanges: false,
    hideMarketStatus: true,
    hideSymbolLogo: false,
    scalePosition: 'right',
    scaleMode: 'Normal',
    fontFamily: '-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif',
    fontSize: '10',
    noTimeScale: false,
    valuesTracking: '1',
    changeMode: 'price-and-percent',
    chartType: 'area',
    maLineColor: '#2962FF',
    maLineWidth: 1,
    maLength: 9,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    lineWidth: 2,
    lineType: 0,
    dateFormat: 'dd MMM',
  });

  document.head.appendChild(script);
});
</script>
<style lang="scss" scoped>
  .tradingview-widget-container{
    width: 100%;
    height: 800px;
  }
  .tradingview-widget-container__widget{
    width: 100%;
    height: 200px;
  }
  .tradingview-widget-copyright{
    width: 100%;
    height: 200px;
  }
</style>