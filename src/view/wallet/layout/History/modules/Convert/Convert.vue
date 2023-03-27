<template>
  <div class="convert">
    <div class="convert-filter">
      <FilterSelect title="Time"></FilterSelect>
      <FilterSelect title="Coin"></FilterSelect>
      <div>
        <CustomButton title="Search"></CustomButton>
        <CustomButton title="Reset" bgc="#F1F1F1" fc="#000"></CustomButton>
      </div>
    </div>
    <Table :sourceData="tableData">
      <template v-slot:columns>
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="wallet" label="Wallet" width="100" />
        <el-table-column prop="pair" label="Pair" width="180" />
        <el-table-column prop="from" label="From" />
        <el-table-column prop="to" label="To" />
        <el-table-column prop="price" label="Price">
          <template #default="scope">
            <pre>
                            {{ scope.row.price }}
                        </pre
            >
          </template>
        </el-table-column>
        <el-table-column prop="date_upload" label="Date Upload" />
        <el-table-column label="Status" fixed="right">
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
import moment from "moment";
import {
  Status,
  StatusCollects,
  statusSelect,
} from "../../../../../../models/status";
import { statusCollects } from "../../../../../../res/status";
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
  }
}
</style>
