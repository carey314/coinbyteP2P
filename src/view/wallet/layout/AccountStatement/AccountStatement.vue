<template>
  <div class="account-statement">
    <div class="account-statement-header">
      <div>The snapshot will be taken at 00:00 UTC+8 of the selected date.</div>
      <div>
        * You will be notified as soon as your statements is ready for download.
        The statement will expire in one month from the time of export
      </div>
    </div>
    <div class="account-statement-search">
      <el-date-picker
        v-model="dateValue"
        type="dates"
        placeholder="Select a data"
      />
      <CustomButton title="Generate" class="search-btn"></CustomButton>
    </div>
    <div class="account-statement-table">
      <Table v-if="noFound">
        <template v-slot:columns>
          <el-table-column label="As of" width="330" />
          <el-table-column prop="Balance" label="Time of export" width="350" />
          <el-table-column label="Status" width="320" />
          <el-table-column label="Action" width="300" fixed="right" />
        </template>
      </Table>
      <div v-else>
        <div v-if="windowWidth > 820">
          <Table :sourceData="tableData">
            <template v-slot:columns>
              <el-table-column label="As of">
                <template #default="scope">
                  <div class="table-crypto">
                    <div>
                      {{ scope.row.time }}
                    </div>
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="Balance" label="Time of export">
                <template #default="scope">
                  <div>
                    {{ scope.row.exporttime }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="Status">
                <template #default="scope">
                  <div class="progress">
                    <span :class="getStatusClass(scope.row.status)">{{
                      scope.row.status
                    }}</span>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="Action" fixed="right">
                <template #default="scope">
                  <span v-if="scope.row.action === 'Download'">
                    <img :src="login_download" />
                  </span>
                  <span style="margin-left: 10px;">{{ scope.row.action }}</span>
                </template>
              </el-table-column>
            </template>
          </Table>
        </div>
        <div v-else>
          <el-card
            class="account-statement-card"
            v-for="(item, index) in tableData"
            :key="index"
          >
            <div class="card-item">
              As of :<span>{{ item.time }}</span>
            </div>
            <div class="card-item">
              Time of export : <span>{{ item.exporttime }}</span>
            </div>
            <div class="card-item">
              <span>Status :</span
              ><span :class="getStatusClass(item.status)">{{
                item.status
              }}</span>
            </div>
            <el-divider></el-divider>
            <div class="card-action card-item">
              Action :<span v-if="item.action === 'Download'"
                ><img :src="item.icon" /> {{ item.action }}</span
              >
              <span v-if="item.action === '-'"> {{ item.action }}</span>
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onUnmounted, onMounted } from "vue";
import Table from "../History/component/Table.vue";
import CustomButton from "../History/component/CustomButton.vue";
import login_download from "../../../../assets/home/login_download.svg";
const noFound = ref(false);
const dateValue = ref("");
const tableData = ref([
  {
    time: "2022-10-03",
    exporttime: "2022-10-03 00:48:11",
    icon: "",
    status: "Processing",
    action: "-",
  },
  {
    time: "2022-10-03",
    exporttime: "2022-10-02 00:48:11",
    icon: login_download,
    status: "Successful",
    action: "Download",
  },
]);
const getStatusClass = (status: string) => {
  return status === "Processing" ? "text-red" : "text-green";
};
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
</script>

<style lang="scss" scoped>
.account-statement {
  .account-statement-header {
    margin-top: 22px;
    font-size: 14px;
    color: #9b9b9b;
    line-height: 17px;
  }
  .account-statement-search {
    margin-top: 13px;
    :deep() {
      .el-date-editor.el-input,
      .el-date-editor.el-input__wrapper {
        width: 227px;
        height: 41px;
      }
      .el-button > span {
        font-size: 14px;
        line-height: 16px;
      }
    }
    .search-btn {
      margin-left: 23px;
      @media (max-width: 768px) {
        margin-left: 3px;
      }
      @media (max-width: 387px) {
        margin-left: 0px;
        margin-top: 3px;
      }
    }
  }
  .account-statement-table {
    :deep() {
      .custom-table[data-v-1f0f0ed4] .el-table th {
        padding: 0 10px;
      }
    }
    .progress {
      cursor: pointer;
    }
  }
  .account-statement-card {
    :deep(.el-divider--horizontal) {
      margin: 10px 0;
    }
    margin-top: 10px;
    .card-item {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      span {
        text-align: right;
      }
    }
  }
}
.text-red {
  color: #f49542;
}

.text-green {
  color: #01c19a;
}
</style>
