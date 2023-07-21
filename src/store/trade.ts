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
},
{
  persist:{
    enabled: true,
      // 要存储的数据
      // 存储键
      strategies: [
        {
          storage: localStorage,//表示存储在localStorage
          paths: ['currencySlug','currencyName',"currencyIcon"],//指定要长久化的字段
        }
      ]
  }
})
