<template>
  <div class="convert">
    <div class="convert-filter">
      <div class="select-left">
        <FilterSelect :title="t('messages.wallet.tab_Time')"></FilterSelect>
        <FilterSelect :title="t('messages.wallet.fiat_Coin')"></FilterSelect>
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
          width="180"
        />
        <el-table-column
          prop="wallet"
          :label="t('messages.wallet.convert_Wallet')"
          width="100"
        />
        <el-table-column
          prop="pair"
          :label="t('messages.wallet.trade_Pair')"
          width="180"
        />
        <el-table-column
          prop="from"
          :label="t('messages.wallet.convert_From')"
        />
        <el-table-column prop="to" :label="t('messages.wallet.convert_to')" />
        <el-table-column prop="price" :label="t('messages.wallet.trade_Price')">
          <template #default="scope">
            <pre>
                {{ scope.row.price }}
            </pre>
          </template>
        </el-table-column>
        <el-table-column
          prop="date_upload"
          :label="t('messages.wallet.convert_upload')"
        />
        <el-table-column :label="t('messages.wallet.tab_Status')" fixed="right">
          <template #default="scope">
            <div
              :style="{color : statusCollects[scope.row.status as statusSelect].color}"
            >
              {{ statusCollects[scope.row.status as statusSelect].title }}
            </div>
          </template>
        </el-table-column>
      </template>
    </Table>
  </div>
</template>

<script setup lang="ts">
import { ref, inject, computed } from "vue";
import type { Ref } from "vue";
import FilterSelect from "../../component/FilterSelect.vue";
import CustomButton from "../../component/CustomButton.vue";
import Table from "../../component/Table.vue";
import type { Transaction } from "../../../../../../models/transactions";
import type { CurrencyAmount } from "../../../../../../models/currencies";
import download from "../../../../../../assets/wallet/wallet_download.png";
import moment from "moment";
import {
  Status,
  StatusCollects,
  statusSelect,
} from "../../../../../../models/status";
import { statusCollects } from "../../../../../../res/status";

import { useI18n } from "vue-i18n";
const { t } = useI18n();

const transactions = inject<Ref<Transaction[]>>("transactions");
console.log(transactions?.value);

const tableData = computed(() => {
  let newData: Transaction[] | undefined = transactions?.value.filter(
    (v) => v.type === "exchange"
  );
  if (newData) {
    return newData.map((v) => {
      let fromObj = <CurrencyAmount>{};
      let toObj = <CurrencyAmount>{};
      fromObj.currency = v.debitDetails.currency.alphabeticCode;
      fromObj.amount = parseFloat(v.debitDetails.amount);
      fromObj.minorUnit = v.debitDetails.currency.minorUnit;
      toObj.currency = v.creditDetails.currency.alphabeticCode;
      toObj.amount = parseFloat(v.creditDetails.amount);
      toObj.minorUnit = v.creditDetails.currency.minorUnit;
      return {
        date: moment(v.createTime).format("YYYY-MM-DD hh:mm:ss"),
        wallet: "Trading", //unknown
        pair: `${fromObj.currency}/${toObj.currency}`,
        from: `${fromObj.amount.toFixed(fromObj.minorUnit)} ${
          fromObj.currency
        }`,
        to: `${toObj.amount.toFixed(toObj.minorUnit)} ${toObj.currency}`,
        price: `
1 ${fromObj.currency} = ${(1 * parseFloat(v.foreignExchangeRate)).toFixed(
          toObj.minorUnit
        )} ${toObj.currency} 
1 ${toObj.currency} = ${(1 / parseFloat(v.foreignExchangeRate)).toFixed(
          fromObj.minorUnit
        )} ${fromObj.currency}`,
        date_upload: moment(v.updateTime).format("YYYY-MM-DD hh:mm:ss"),
        status: v.status,
      };
    });
  } else {
    return [];
  }
});
</script>

<style lang="scss" scoped>
.convert {
  .convert-filter {
    display: flex;
    gap: 20px;
    margin-bottom: 15px;
    flex-wrap: wrap;
    justify-content: space-between;
  }
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
    color: #01c19a;
  }
  img {
    width: 19px;
    height: 19px;
    // background: #01C19A;
    filter: invert(100%);
  }
}
</style>
