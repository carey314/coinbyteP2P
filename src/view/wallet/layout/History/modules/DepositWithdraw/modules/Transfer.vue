<template>
  <div class="transfer">
    <div class="transfer-search">
      <div class="select-left">
        <div class="to">
          <FilterSelect title=""></FilterSelect>
          <div class="img-button"><img :src="icon_convert" alt="" /></div>
          <FilterSelect title=""></FilterSelect>
        </div>
        <FilterSelect title="Time"></FilterSelect>
        <FilterSelect title="Coin"></FilterSelect>
        <div>
          <CustomButton :title="t('messages.wallet.tab_search')"></CustomButton>
          <CustomButton :title="t('messages.wallet.tab_reset')" bgc="#F1F1F1" fc="#000"></CustomButton>
        </div>
      </div>
      <div class="search-right">
        <div class="custom-link">
          <a href="#">{{ $t("messages.wallet.tab_arrive") }}</a>
        </div>
        <div class="custom-link">
          <img :src="download" alt="" />
          <div>{{ $t("messages.wallet.tab_Download") }}</div>
        </div>
      </div>
    </div>
    <Table :sourceData="tableData">
      <template v-slot:columns>
        <el-table-column prop="date" :label="t('messages.wallet.convert_Date')" width="310" />
        <el-table-column prop="coin" :label="t('messages.wallet.convert_Coin')" width="310" />
        <el-table-column prop="amount" :label="t('messages.wallet.convert_Amount')" />
        <el-table-column prop="from" :label="t('messages.wallet.convert_From')" width="310" />
        <el-table-column prop="to" :label="t('messages.wallet.convert_to')" />
      </template>
    </Table>
  </div>
</template>

<script setup lang="ts">
import FilterSelect from "../../../component/FilterSelect.vue";
import icon_convert from "../../../../../../../assets/wallet/icon_convert.png";
import download from "../../../../../../../assets/wallet/wallet_download.png";
import CustomButton from "../../../component/CustomButton.vue";
import Table from "../../../component/Table.vue";
import { ref, inject, computed } from "vue";
import type { Ref } from "vue";
import type { Transaction } from "../../../../../../../models/transactions";
import moment from "moment";
import { useI18n } from "vue-i18n";
const{ t } = useI18n();
const transactions = inject<Ref<Transaction[]>>("transactions");
const tableData = computed(() => {
  if (transactions) {
    let newData: Transaction[] = transactions?.value.filter(
      (v) => v.type === "transfer"
    );
    return newData.map((v) => {
      // let depositObj = {
      //     currency : v.creditDetails.currency.alphabeticCode,
      //     amount : parseFloat(v.creditDetails.amount),
      //     minorUnit : v.creditDetails.currency.minorUnit
      // }
      return {
        date: moment(v.createTime).format("YYYY-MM-DD hh:mm:ss"),
        coin: "",
        amount: "",
        from: "",
        to: "",
      };
    });
  }
});
// const tableData = ref([
//     {
//         date : "2022-10-03 00:48:11",
//         coin : "USDT",
//         amount : "4995.5004",
//         from : "Flat and Spot",
//         to : "Trading",
//     },
//     {
//         date : "2022-10-03 00:48:11",
//         coin : "USDT",
//         amount : "4995.5004",
//         from : "Flat and Spot",
//         to : "Trading",
//     },
//     {
//         date : "2022-10-03 00:48:11",
//         coin : "USDT",
//         amount : "4995.5004",
//         from : "Flat and Spot",
//         to : "Trading",
//     },
//     {
//         date : "2022-10-03 00:48:11",
//         coin : "USDT",
//         amount : "4995.5004",
//         from : "Flat and Spot",
//         to : "Trading",
//     },
//     {
//         date : "2022-10-03 00:48:11",
//         coin : "USDT",
//         amount : "4995.5004",
//         from : "Flat and Spot",
//         to : "Trading",
//     },
//     {
//         date : "2022-10-03 00:48:11",
//         coin : "USDT",
//         amount : "4995.5004",
//         from : "Flat and Spot",
//         to : "Trading",
//     },
//     {
//         date : "2022-10-03 00:48:11",
//         coin : "USDT",
//         amount : "4995.5004",
//         from : "Flat and Spot",
//         to : "Trading",
//     },
//     {
//         date : "2022-10-03 00:48:11",
//         coin : "USDT",
//         amount : "4995.5004",
//         from : "Flat and Spot",
//         to : "Trading",
//     },
// ]);
</script>

<style lang="scss" scoped>
.transfer-search {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  flex-wrap: wrap;
  margin-bottom: 15px;
  @media (max-width: 769px) {
    gap: 10px;
  }
  .select-left{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .to {
    display: flex;
    align-items: center;
    gap: 7px;
  }
  .img-button {
    width: 20px;
    height: 20px;
    border: 1px solid #01c19a;
    border-radius: 50%;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
  }
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
