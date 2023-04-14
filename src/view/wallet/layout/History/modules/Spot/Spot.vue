<template>
  <div class="spot-filter">
    <el-date-picker
      type="daterange"
      :start-placeholder="t('messages.wallet.trade_Start')"
      :end-placeholder="t('messages.wallet.trade_End')"
    />
    <FilterSelect :title="t('messages.wallet.trade_Side')" :options="options"></FilterSelect>
    <div>
      <CustomButton :title="t('messages.wallet.tab_search')"></CustomButton>
      <CustomButton :title="t('messages.wallet.tab_reset')" bgc="#F1F1F1" fc="#000"></CustomButton>
    </div>
  </div>
  <Table :sourceData="tableData">
    <template v-slot:columns>
      <el-table-column prop="date" :label="t('messages.wallet.convert_Date')" width="180" />
      <el-table-column prop="pair" :label="t('messages.wallet.trade_Pair')" width="180" />
      <el-table-column prop="side" :label="t('messages.wallet.trade_Side')" />
      <el-table-column prop="price" :label="t('messages.wallet.trade_Price')" />
      <el-table-column prop="filled" :label="t('messages.wallet.trade_Filled')" />
      <el-table-column prop="fee" :label="t('messages.wallet.trade_Fee')" />
      <el-table-column prop="role" :label="t('messages.wallet.trade_role')" />
      <el-table-column prop="total" :label="t('messages.wallet.trade_Total')" />
    </template>
  </Table>
</template>

<script setup lang="ts">
import { ref } from "vue";
import FilterSelect from "../../component/FilterSelect.vue";
import Table from "../../component/Table.vue";
import CustomButton from "../../component/CustomButton.vue";
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
    role: "Maker",
    total: "597.7186 USDT"
  },
  {
    date: "2022-10-03 00:48:11",
    pair: "AUD/USDT",
    side: "Buy",
    price: "0.6434",
    filled: "929",
    fee: "0.929 AUD",
    role: "Maker",
    total: "597.7186 USDT"
  },
  {
    date: "2022-10-03 00:48:11",
    pair: "AUD/USDT",
    side: "Buy",
    price: "0.6434",
    filled: "929",
    fee: "0.929 AUD",
    role: "Maker",
    total: "597.7186 USDT"
  },
  {
    date: "2022-10-03 00:48:11",
    pair: "AUD/USDT",
    side: "Buy",
    price: "0.6434",
    filled: "929",
    fee: "0.929 AUD",
    role: "Maker",
    total: "597.7186 USDT"
  },
  {
    date: "2022-10-03 00:48:11",
    pair: "AUD/USDT",
    side: "Buy",
    price: "0.6434",
    filled: "929",
    fee: "0.929 AUD",
    role: "Maker",
    total: "597.7186 USDT"
  },
  {
    date: "2022-10-03 00:48:11",
    pair: "AUD/USDT",
    side: "Buy",
    price: "0.6434",
    filled: "929",
    fee: "0.929 AUD",
    role: "Maker",
    total: "597.7186 USDT"
  },
  {
    date: "2022-10-03 00:48:11",
    pair: "AUD/USDT",
    side: "Buy",
    price: "0.6434",
    filled: "929",
    fee: "0.929 AUD",
    role: "Maker",
    total: "597.7186 USDT"
  },
  {
    date: "2022-10-03 00:48:11",
    pair: "AUD/USDT",
    side: "Buy",
    price: "0.6434",
    filled: "929",
    fee: "0.929 AUD",
    role: "Maker",
    total: "597.7186 USDT"
  },
]);
const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
];
</script>

<style lang="scss" scoped>
.spot-filter {
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
</style>
