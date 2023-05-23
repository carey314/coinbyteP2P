<template>
  <div>
    <div v-if="!coinMarketCapData">Loading...</div>
    <div v-else>
      <table>
        <tbody>
          <el-table :data="coinMarketCapData" style="width: 100%">
            <el-table-column
              prop="name"
              label="name"
            ></el-table-column>
            <el-table-column prop="symbol" label="symbol"></el-table-column>
            <el-table-column
              prop="quotes[0].quote.AUD.price"
              label="Price (AUD)"
            ></el-table-column>
            <el-table-column
              prop="quotes[0].quote.AUD.volume_24h"
              label="Volume (24h)"
            ></el-table-column>
            <el-table-column
              prop="quotes[0].quote.AUD.market_cap"
              label="Market Cap"
            ></el-table-column>
          </el-table>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { getCoinMarketCap, getLastCoinMarketCap } from "../../../api/market";

interface Coin {
  id: number;
  name: string;
  symbol: string;
  is_active: number;
  is_fiat: null;
  quotes: [
    {
      timestamp: string;
      quote: {
        AUD: {
          price: number;
          volume_24h: number;
          market_cap: number;
          circulating_supply: number;
          total_supply: number;
          timestamp: string;
        };
      };
    }
  ];
}

const coinMarketCapData = ref<Coin[] | null>([]);

const fetchData = async () => {
  try {
    const [historicalResponse, latestResponse] = await Promise.all([
      getCoinMarketCap(),
      getLastCoinMarketCap()
    ]);

    const historicalData = JSON.parse(historicalResponse.data);
    const latestData = JSON.parse(latestResponse.data);

    // Combine historical and latest data
    coinMarketCapData.value = historicalData.concat(latestData);
    console.log(coinMarketCapData.value);
  } catch (error) {
    console.error(error);
  }
};
// const fetchData = async () => {
//   try {
//     const [historicalResponse, latestResponse] = await Promise.all([
//       getCoinMarketCap(),
//       getLastCoinMarketCap()
//     ]);

//     const historicalData = JSON.parse(historicalResponse.data);
//     const latestData = JSON.parse(latestResponse.data);

//     // Combine historical and latest data
//     const combinedData = { ...historicalData.data, ...latestData.data };

//     // Process and format the data to match the Coin interface
//     const formattedData = Object.values(combinedData).map((coinData) => {
//       const coin: Coin = {
//         id: coinData.id,
//         name: coinData.name,
//         symbol: coinData.symbol,
//         is_active: coinData.is_active,
//         is_fiat: coinData.is_fiat,
//         quotes: coinData.quotes.map((quoteData) => ({
//           timestamp: quoteData.timestamp,
//           quote: {
//             AUD: {
//               price: quoteData.quote.AUD.price,
//               volume_24h: quoteData.quote.AUD.volume_24h,
//               market_cap: quoteData.quote.AUD.market_cap,
//               circulating_supply: quoteData.quote.AUD.circulating_supply,
//               total_supply: quoteData.quote.AUD.total_supply,
//               timestamp: quoteData.quote.AUD.timestamp,
//             },
//           },
//         })),
//       };
//       return coin;
//     });

//     coinMarketCapData.value = formattedData;
//     console.log(coinMarketCapData.value);
//   } catch (error) {
//     console.error(error);
//   }
// };
onMounted(async () => {
  await fetchData();
});
</script>