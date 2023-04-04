<template>
  <div>
    <div class="bank-account-title">Bank account</div>
    <div class="bank-account-msg">
      Deposit AUD instantly into your Coinbyte account from 100+ NPP-enabled
      banks in Australia via PayID / Osko.
    </div>
    <div class="bank-account-add">
      <GetButton class="func-btn" :text="add" />
    </div>
    <div class="table-body" v-if="windowWidth > 820">
      <Table :sourceData="bankDate">
        <template v-slot:columns>
          <el-table-column label="Bank Country" width="200">
            <template #default="scope">
              <div class="table-crypto">
                <div>
                  {{ scope.row.country }}
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="Currency" label="Currency" width="200">
            <template #default="scope">
              <div>
                {{ scope.row.currency }}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="Bank Name" label="Bank Name" width="200">
            <template #default="scope">
              <div>
                {{ scope.row.bank }}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="Branch Code" label="Branch Code" width="200">
            <template #default="scope">
              <div>
                {{ scope.row.code }}
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="Account Number"
            label="Account Number"
            width="200"
          >
            <template #default="scope">
              <div>
                {{ scope.row.number }}
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="Account Status"
            label="Account Status"
            width="200"
          >
            <template #default="scope">
              <div class="status">
                {{ scope.row.status }}
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="Operation"
            label="Operation"
            width="100"
            fixed="right"
          >
            <template #default="scope">
              <div class="operation">
                {{ scope.row.operation }}
              </div>
            </template>
          </el-table-column>
        </template>
      </Table>
    </div>
    <div class="bank-account" v-else>
      <el-card v-for="(item, index) in bankDate" :key="index">
        <div><span>Bank Crounty: </span>{{ item.country }}</div>
        <div><span>Currency: </span>{{ item.currency }}</div>
        <div><span>Bank Name: </span>{{ item.bank }}</div>
        <div><span>Branch code: </span>{{ item.code }}</div>
        <div><span>Account Number: </span>{{ item.number }}</div>
        <div><span>Account Status: </span>{{ item.status }}</div>
        <div><span>Operation: </span>{{ item.operation }}</div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onUnmounted, onMounted } from "vue";

import { Right } from "@element-plus/icons-vue";
import GetButton from "../../../../components/GetButton.vue";
import Table from "../../component/Table.vue";
import usercenter_verification_person from "../../../../assets/home/usercenter_verification_person.png";
import usercenter_verification_cor from "../../../../assets/home/usercenter_verification_cor.png";
const windowWidth = ref(window.document.body.offsetWidth);
onMounted(() => {
  window.addEventListener("resize", resetWidth);
});
onUnmounted(() => {
  window.removeEventListener("resize", resetWidth);
});
function resetWidth() {
  windowWidth.value = window.document.body.offsetWidth;
}
const add = ref("+ Add Bank Account");

const bankDate = [
  {
    country: "Australia",
    currency: "AUD",
    bank: "Others",
    code: "802-090",
    number: "423*212",
    status: "Verified",
    operation: "Delete",
  },
  {
    country: "Australia",
    currency: "AUD",
    bank: "Others",
    code: "802-090",
    number: "423*212",
    status: "Verified",
    operation: "Delete",
  },
];
</script>

<style scoped lang="scss">
$fontSizeMed: 26px;
$fontSizeMinPro: 14px;
$fontSizeMin: 12px;

.bank-account-title {
  margin-top: 39px;
  font-size: 26px;
  color: #000000;
  line-height: 32px;
  @media (max-width: 768px) {
    margin-top: 0px;
  }
}
.bank-account-msg {
  margin-top: 10px;
  font-size: 14px;
  color: #878787;
  line-height: 16px;
  @media (max-width: 768px) {
    width: auto;
  }
}
.bank-account-add {
  margin-top: 16px;
  :deep() {
    .button {
      width: 158px !important;
      height: 31px !important;
      font-size: 14px !important;
      font-weight: 400 !important;
      padding: 0;
    }
    .el-button > span {
      height: 34px;
      color: #01c19a;
    }
  }
}
.table-body {
  margin-top: 20px;
  border: 1px solid #ebebeb;
  :deep() {
    .el-table__inner-wrapper {
      margin-top: 0;
    }
    .el-table .cell {
      padding-left: 25px;
    }
  }
  .status {
    color: #01c19a;
    cursor: pointer;
  }
  .operation {
    color: #f15958;
    cursor: pointer;
  }
}
.bank-account {
  margin-top: 20px;
  font-size: $fontSizeMinPro;
  color: #000000;
  line-height: 20px;
  span {
    font-size: $fontSizeMinPro;
    color: #878787;
  }
  :deep(.el-card) {
    margin-top: 10px;
  }
}
</style>
