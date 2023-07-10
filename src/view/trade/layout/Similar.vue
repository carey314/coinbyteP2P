<template>
  <div>
    <div class="similar-title">Similar Cryptocurrencies</div>
    <!-- <div class="similar-card">
      <div class="card-item" v-for="(item, index) in cardItem" :key="index">
        <div class="icon"><img :src="item.icon" /></div>
        <div class="ctypto-type">
          <div class="ctypto-type-name">{{ item.crypto }}</div>
          <div class="ctypto-type-fullname">{{ item.fullname }}</div>
        </div>
        <div class="price">
          <div class="price-asset">{{ item.asset }}</div>
          <div class="price-rate">{{ item.rate }}</div>
        </div>
        <el-divider class="divider" />
      </div>
    </div> -->
    <div class="similar-box">
      <div class="card-item">
        <div class="icon"><img :src="crypto_icon_btc" /></div>
        <div class="ctypto-type">
          <div class="ctypto-type-name">BTC</div>
          <div class="ctypto-type-fullname">Bitcoin</div>
        </div>
        <div class="price">
          <div class="price-asset">A$24,087.40</div>
          <div class="price-rate">+4.33%</div>
        </div>
      </div>
      <el-divider class="divider" />
      <div class="card-item">
        <div class="icon"><img :src="crypto_icon_eth" /></div>
        <div class="ctypto-type">
          <div class="ctypto-type-name">ETH</div>
          <div class="ctypto-type-fullname">Ethereum</div>
        </div>
        <div class="price">
          <div class="price-asset">A$1,807.10</div>
          <div class="price-rate">+6.37%</div>
        </div>
      </div>
      <el-divider class="divider" />
      <div class="card-item">
        <div class="icon"><img :src="crypto_icon_ada" /></div>
        <div class="ctypto-type">
          <div class="ctypto-type-name">ADA</div>
          <div class="ctypto-type-fullname">Cardano</div>
        </div>
        <div class="price">
          <div class="price-asset">A$1.01</div>
          <div class="price-rate">+6.37%</div>
        </div>
      </div>
      <el-divider class="divider" />
      <div class="card-item" style="padding-bottom: 60px">
        <div class="icon"><img :src="crypto_icon_usdc" /></div>
        <div class="ctypto-type">
          <div class="ctypto-type-name">USDC</div>
          <div class="ctypto-type-fullname">USD Coin</div>
        </div>
        <div class="price">
          <div class="price-asset">A$1.00</div>
          <div class="price-rate">+6.37%</div>
        </div>
      </div>
      <!-- <el-divider class="divider"  style="color: #fff !important;"/> -->
    </div>
    <div class="view-more">
      <router-link to="/market-allCrypto" style="text-decoration: none;"><div class="view-more-button">View more</div></router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import crypto_icon_btc from "../../../assets/home/crypto_icon_btc.png";
import crypto_icon_eth from "../../../assets/home/crypto_icon_eth.png";
import crypto_icon_ada from "../../../assets/home/crypto_icon_ada.png";
import crypto_icon_usdc from "../../../assets/home/crypto_icon_usdc.png";
const cardItem = [
  {
    icon: crypto_icon_btc,
    crypto: "BTC",
    fullname: "Bitcoin",
    asset: "A$24,087.40",
    rate: "+4.33%",
  },
  {
    icon: crypto_icon_eth,
    crypto: "ETH",
    fullname: "Ethereum",
    asset: "A$1,807.10",
    rate: "+6.37%",
  },
  {
    icon: crypto_icon_ada,
    crypto: "ADA",
    fullname: "Cardano",
    asset: "A$1.01",
    rate: "+6.37%",
  },
  {
    icon: crypto_icon_usdc,
    crypto: "USDC",
    fullname: "USD Coin",
    asset: "A$1.00",
    rate: "+6.37%",
  },
];
</script>

<style scoped lang="scss">
.similar-title {
  margin-top: 42px;
  font-size: 20px;
  color: #000000;
  line-height: 24px;
}
.similar-card {
  border: 1px solid #dfdfe5;
  border-radius: 8px;
  margin-top: 15px;
  .card-item {
    padding: 21px 19px 0px 19px;
    .icon {
      width: 40px;
      float: left;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .ctypto-type {
      float: left;
      margin-left: 16px;
      margin-top: 2px;
      .ctypto-type-name {
        color: #020202;
        line-height: 19px;
        font-weight: 500;
      }
      .ctypto-type-fullname {
        margin-top: 4px;
        color: #878787;
        line-height: 18px;
        font-weight: 400;
      }
    }
    .price {
      float: right;
      margin-top: 3px;
      .price-rate {
        margin-top: 4px;
        text-align: right;
        color: #01c19a;
      }
    }
    .divider {
      width: 100%;
      margin-top: 55px;
      margin-left: -20px;
      :deep(.el-divider--horizontal) {
        margin: -1px 0 !important;
      }
    }
  }
}
.similar-box {
  border: 1px solid #dfdfe5;
  border-radius: 8px;
  margin-top: 15px;

  .card-item {
    padding: 21px 19px 0px 19px;
    .icon {
      width: 40px;
      float: left;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .ctypto-type {
      float: left;
      margin-left: 16px;
      margin-top: 2px;
      .ctypto-type-name {
        color: #020202;
        line-height: 19px;
        font-weight: 500;
      }
      .ctypto-type-fullname {
        margin-top: 4px;
        color: #878787;
        line-height: 18px;
        font-weight: 400;
      }
    }
    .price {
      float: right;
      margin-top: 3px;
      .price-rate {
        margin-top: 4px;
        text-align: right;
        color: #01c19a;
      }
    }
  }
  .divider {
    width: 100%;
    margin-top: 60px !important;
  }
  :deep(.el-divider--horizontal) {
    margin: -1px 0;
  }
}
.view-more {
  width: 133px;
  height: 41px;
  border: 1px solid #d7d7d7;
  border-radius: 3px;
  margin: 29px auto;
  cursor: pointer;
  .view-more-button {
    height: 41px;
    color: #878787;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
