<template>
  <div class="buy-sell">
    <div class="buy-sell-search">
      <div class="select-left">
        <el-date-picker
          type="daterange"
          :start-placeholder="t('messages.wallet.trade_Start')"
          :end-placeholder="t('messages.wallet.trade_End')"
        />
        <FilterSelect :title="t('messages.wallet.trade_Base')"></FilterSelect>
        <FilterSelect :title="t('messages.wallet.trade_Side')"></FilterSelect>
        <div>
          <CustomButton :title="t('messages.wallet.tab_search')"></CustomButton>
          <CustomButton
            :title="t('messages.wallet.tab_reset')"
            bgc="#F1F1F1"
            fc="#000"
          ></CustomButton>
        </div>
      </div>
      <div class="search-right">
        <div class="custom-link">
          <img :src="download" alt="" />
          <div>{{ $t("messages.wallet.tab_Download") }}</div>
        </div>
      </div>
    </div>
    <Table :sourceData="tableData">
      <template v-slot:columns>
        <el-table-column
          prop="date"
          :label="t('messages.wallet.convert_Date')"
          width="220"
        />
        <el-table-column
          prop="pair"
          :label="t('messages.wallet.trade_Pair')"
          width="210"
        />
        <el-table-column
          prop="side"
          :label="t('messages.wallet.trade_Side')"
          width="220"
        />
        <el-table-column
          prop="price"
          :label="t('messages.wallet.trade_Price')"
          width="200"
        />
        <el-table-column
          prop="filled"
          :label="t('messages.wallet.trade_Filled')"
          width="150"
        />
        <el-table-column
          prop="fee"
          :label="t('messages.wallet.trade_Fee')"
          width="180"
        />
        <el-table-column
          prop="total"
          :label="t('messages.wallet.trade_Total')"
          width="150"
        />
      </template>
    </Table>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import FilterSelect from "../../component/FilterSelect.vue";
import Table from "../../component/Table.vue";
import CustomButton from "../../component/CustomButton.vue";
import download from "../../../../../../assets/wallet/wallet_download.png";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const tableData = ref([
  {
    date: "2022-10-03 00:48:11",
    pair: "AUD/USDT",
    side: "Buy",
    price: "0.6434",
    filled: "929",
    fee: "0.929 AUD",
    total: "597.7186 USDT",
  },
  {
    date: "2022-10-03 00:48:11",
    pair: "AUD/USDT",
    side: "Buy",
    price: "0.6434",
    filled: "929",
    fee: "0.929 AUD",
    total: "597.7186 USDT",
  },
  {
    date: "2022-10-03 00:48:11",
    pair: "AUD/USDT",
    side: "Buy",
    price: "0.6434",
    filled: "929",
    fee: "0.929 AUD",
    total: "597.7186 USDT",
  },
  {
    date: "2022-10-03 00:48:11",
    pair: "AUD/USDT",
    side: "Buy",
    price: "0.6434",
    filled: "929",
    fee: "0.929 AUD",
    total: "597.7186 USDT",
  },
  {
    date: "2022-10-03 00:48:11",
    pair: "AUD/USDT",
    side: "Buy",
    price: "0.6434",
    filled: "929",
    fee: "0.929 AUD",
    total: "597.7186 USDT",
  },
  {
    date: "2022-10-03 00:48:11",
    pair: "AUD/USDT",
    side: "Buy",
    price: "0.6434",
    filled: "929",
    fee: "0.929 AUD",
    total: "597.7186 USDT",
  },
  {
    date: "2022-10-03 00:48:11",
    pair: "AUD/USDT",
    side: "Buy",
    price: "0.6434",
    filled: "929",
    fee: "0.929 AUD",
    total: "597.7186 USDT",
  },
  {
    date: "2022-10-03 00:48:11",
    pair: "AUD/USDT",
    side: "Buy",
    price: "0.6434",
    filled: "929",
    fee: "0.929 AUD",
    total: "597.7186 USDT",
  },
  {
    date: "2022-10-03 00:48:11",
    pair: "AUD/USDT",
    side: "Buy",
    price: "0.6434",
    filled: "929",
    fee: "0.929 AUD",
    total: "597.7186 USDT",
  },
]);
</script>

<style lang="scss" scoped>
.buy-sell {
  &-search {
    display: flex;
    gap: 20px;
    margin-bottom: 15px;

    :deep() {
      .el-range-editor.el-input__wrapper {
        width: 227px;
        flex: none;
        height: 41px;
      }
    }
    @media (max-width: 895px) {
      display: grid;
      gap: 10px;
    }
  }
}
.buy-sell-search {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
}
.select-left {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.search-right {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.custom-link {
  height: 41px;
  display: flex;
  align-items: flex-end;
  gap: 8px;
  a {
    font-size: 14px;
    color: #3e4191;
  }
  img {
    width: 19px;
    height: 19px;
    // background: #3e4191;
    filter: invert(100%);
  }
}
</style>
