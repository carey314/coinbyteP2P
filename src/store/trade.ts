import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
export const tradeStore = defineStore('trade', () => {

  const currencySlug = ref("BTC")
  const currencyName = ref("Bitcoin")
  const currencyIcon = ref("http://adminapi.coinbyte.com.au:88/file/图片/crypto_icon_btc-20230715032155520.png")
  

  return {
    currencySlug,
    currencyName,
    currencyIcon
  }
})
