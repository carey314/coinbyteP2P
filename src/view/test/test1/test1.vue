<template>
  <div>
    <div v-if="!coinMarketCapData">Loading...</div>
    <div v-else>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price (AUD)</th>
            <th>symbole</th>
            <th>cmc_rank</th>
            <th>24h volume</th>
            <th>Market cap:</th>
            <th>Circulating supply:</th>
            <th>Total supply:</th>

          </tr>
        </thead>
        <tbody>
          <el-table :data="coinMarketCapData.data" style="width: 100%">
            <el-table-column prop="quote.AUD.volume_change_24h" label="volume_change_24h"></el-table-column>

            <el-table-column prop="name" label="Name"></el-table-column>
            <el-table-column prop="quote.AUD.price" label="Price"></el-table-column>
            <el-table-column prop="symbol" label="Symbol"></el-table-column>
            <el-table-column prop="cmc_rank" label="Rank"></el-table-column>
            <el-table-column prop="quote.AUD.volume_24h" label="volume_24h"></el-table-column>
            <el-table-column prop="quote.AUD.market_cap" label="Market Cap"></el-table-column>
            <el-table-column prop="circulating_supply" label="Circulating Supply"></el-table-column>
            <el-table-column prop="total_supply" label="Total Supply"></el-table-column>
            <el-table-column prop="last_updated" label="last update" style="width: 90;"></el-table-column>
          </el-table>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { getCoinMarketCap } from "../../../api/market";

interface Coin {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  num_market_pairs: number; 
  date_added: string;
  tags: string[];
  max_supply: number | null;
  circulating_supply: number;
  total_supply: number;
  infinite_supply: boolean;
  platform: {
    id: number;
    name: string;
    symbol: string;
    slug: string;
    token_address: string; 
  } | null;
  cmc_rank: number;
  self_reported_circulating_supply: number | null;
  self_reported_market_cap: number | null;
  tvl_ratio: number | null;
  last_updated: string;
  quote: {
    AUD: {
      price: number;
      volume_24h: number;
      volume_change_24h: number;
      percent_change_1h: number;
      percent_change_24h: number;  
      percent_change_7d: number;
      percent_change_30d: number;
      percent_change_60d: number; 
      percent_change_90d: number;
      market_cap: number;
      market_cap_dominance: number;
      fully_diluted_market_cap: number;
      tvl: number | null;
      last_updated: string;
    }
  } 
}

const coinMarketCapData = ref<Coin[] | null>([]);
// const coinMarketCapData = ref<Coin[] | null>({ data: [] });
onMounted(async () => {
  try {
    const response = await getCoinMarketCap();
    coinMarketCapData.value = JSON.parse(response.data);
    console.log(coinMarketCapData.value);
    
    // console.log(coinMarketCapData.value.data.map(v => v));
  } catch (error) {
    console.error(error);
  }
});
</script>
