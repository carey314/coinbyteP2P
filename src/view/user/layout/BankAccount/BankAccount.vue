<template>
  <div>
    <div class="bank-account-title">{{ $t("messages.user.bank_account") }}</div>
    <div class="bank-account-msg">
      {{ $t("messages.user.bank_msg") }}
    </div>
    <div class="bank-account-add">
      <GetButton
        class="func-btn"
        :text="t('messages.user.add_bank')"
        @click="addressVisible = true"
      />
      <el-dialog
        class="inner-dialog"
        v-model="addressVisible"
        width="448px"
        title="Inner Dialog"
        append-to-body
      >
        <template #header>
          <div style="font-weight: 600; font-size: 22px">Add Bank Account</div>
        </template>

        <div class="divider"></div>
        <div class="receive" style="position: relative">
          <div class="network">Bank Country</div>
          <div
            style="
              position: absolute;
              left: -15px;
              top: 39px;
              z-index: 9999;
              color: #cd1e1e;
            "
          >
            *
          </div>

          <el-select
            class="select-second"
            style="height: 48px"
            v-model="selectedOption2"
            placeholder="Select bank country"
            @change="updateCanContinue"
          >
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="receive" style="position: relative">
          <div class="network">Currency</div>
          <div
            style="
              position: absolute;
              left: -15px;
              top: 38px;
              z-index: 9999;
              color: #cd1e1e;
            "
          >
            *
          </div>

          <el-select
            class="select-second"
            style="height: 48px"
            v-model="selectCurrency"
            placeholder="Select Currency"
            @change="updateCanContinue"
          >
            <el-option
              v-for="item in options3"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="identify-box">
          <div class="func-text">Back Name</div>
          <div class="container" style="position: relative">
            <div
              style="
                position: absolute;
                left: -15px;
                top: 18px;
                z-index: 9999;
                color: #cd1e1e;
              "
            >
              *
            </div>
            <input
              class="container-input"
              v-model="bankName"
              type="text"
              placeholder="Please enter"
            />
          </div>
        </div>

        <div class="identify-box">
          <div class="func-text">Branch Code</div>
          <div class="container" style="position: relative">
            <div
              style="
                position: absolute;
                left: -15px;
                top: 18px;
                z-index: 9999;
                color: #cd1e1e;
              "
            >
              *
            </div>
            <input
              class="container-input"
              v-model="codeValue"
              type="text"
              placeholder="Please enter"
            />
          </div>
        </div>

        <div class="identify-box">
          <div class="func-text">Account Number</div>
          <div class="container" style="position: relative">
            <div
              style="
                position: absolute;
                left: -15px;
                top: 18px;
                z-index: 9999;
                color: #cd1e1e;
              "
            >
              *
            </div>
            <input
              class="container-input"
              v-model="accountNumber"
              type="text"
              placeholder="Please enter"
            />
          </div>
        </div>

        <div class="identify-box">
          <div class="func-text">Submit Bank Statement</div>
          <div>
            <el-upload
              class="upload-demo"
              drag
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              multiple
            >
              <img :src="upload" style="width: 18px; height: 18px" />
              <div class="el-upload__text">Upload</div>
            </el-upload>
          </div>
        </div>

        <el-button
          v-if="showContinueBtn"
          class="save-btn"
          @click="handleSubmit"
        >
          Submit
        </el-button>
      </el-dialog>
    </div>
    <div class="table-body" v-if="windowWidth > 820">
      <Table :sourceData="bankDate">
        <template v-slot:columns>
          <el-table-column
            :label="t('messages.user.label_Country')"
            width="200"
          >
            <template #default="scope">
              <div class="table-crypto">
                <div>
                  {{ scope.row.country }}
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="Currency"
            :label="t('messages.user.label_Currency')"
            width="200"
          >
            <template #default="scope">
              <div>
                {{ scope.row.currency }}
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="Bank Name"
            :label="t('messages.user.label_Name')"
            width="200"
          >
            <template #default="scope">
              <div>
                {{ scope.row.bank }}
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="Branch Code"
            :label="t('messages.user.label_Branch')"
            width="200"
          >
            <template #default="scope">
              <div>
                {{ scope.row.code }}
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="Account Number"
            :label="t('messages.user.label_Number')"
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
            :label="t('messages.user.label_Status')"
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
            :label="t('messages.user.label_Operation')"
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
        <div>
          <span>{{ t("messages.user.label_Country") }}: </span
          >{{ item.country }}
        </div>
        <el-divider />
        <div>
          <span>{{ t("messages.user.label_Currency") }}: </span
          >{{ item.currency }}
        </div>
        <el-divider />

        <div>
          <span>{{ t("messages.user.label_Name") }}: </span>{{ item.bank }}
        </div>
        <el-divider />
        <div>
          <span>{{ t("messages.user.label_Branch") }}: </span>{{ item.code }}
        </div>
        <el-divider />
        <div>
          <span>{{ t("messages.user.label_Number") }}: </span>{{ item.number }}
        </div>
        <el-divider />
        <div>
          <span>{{ t("messages.user.label_Status") }}: </span>{{ item.status }}
        </div>
        <div>
          <span>{{ t("messages.user.label_Operation") }}: </span
          >{{ item.operation }}
        </div>
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
import upload from "../../../../assets/image/upload.png";
import { UploadFilled } from "@element-plus/icons-vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const addressVisible = ref(false);
const selectedOption2 = ref("");
const selectCurrency = ref("");
const canContinue = ref(false);

function updateCanContinue() {
  canContinue.value = selectedOption2.value !== "";
  canContinue.value = selectCurrency.value !== "";
}
let options2 = [
  { value: "optionA", label: "Australia" },
  { value: "optionB", label: "America" },
];
let options3 = [
  { value: "optionA", label: "AUD" },
  { value: "optionB", label: "NZD" },
];
const innerVisible = ref(false);
const withdrawStatus = ref(false);
const showContinueBtn = ref(true);
function handleSubmit() {
  withdrawStatus.value = true;
  innerVisible.value = false;
}
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
const inputValue = ref("");
const bankName = ref("");
const codeValue = ref("");
const accountNumber = ref("");

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
.inner-dialog {
  .divider {
    width: 100%;
    height: 1px;
    background-color: #ebebeb;
    margin-top: -20px;
  }
  .receive {
    margin-top: 21px;
    font-size: 14px;
    color: #878787;
    line-height: 32px;
    .network {
      font-size: 16px;
      color: #000000;
      line-height: 19px;
      font-weight: 600;
    }
    .select-second {
      width: 100%;
      height: 48px;
      margin-top: 10px;
    }
    .checkbox {
      span {
        font-size: 14px;
        color: #878787;
        margin-left: 16px;
      }
    }
  }
  .identify-box {
    .func-text {
      font-size: 16px;
      color: #000000;
      line-height: 19px;
      margin-top: 14px;
      font-weight: 600;
    }
    .container {
      margin-top: 13px;
      position: relative;
      .container-input {
        width: 100%;
        height: 48px;
        border-radius: 4px;
        border: 1px solid #dfdfe5;
        font-size: 14px;
      }
      .resend-btn {
        color: #01c19a;
        position: absolute;
        right: 10px;
        top: 14px;
      }
      .send-btn {
        position: absolute;
        right: 10px;
        top: 14px;
      }
    }
  }

  .security {
    font-size: 14px;
    color: #01c19a;
    line-height: 32px;
    margin-top: 12px;

    .checkbox {
      float: left;
    }
    span {
      margin-left: 10px;
      font-size: 16px;
      color: #878787;
      margin-top: 4px;
      float: left;
    }
  }
}
.upload-demo {
  width: 50%;
  margin-top: 17px;
  background: #fbfbfb;
  .el-upload__text {
    font-size: 12px;
    color: #424242;
    line-height: 14px;
  }
}
.save-btn {
  width: 100%;
  height: 60px;
  background-color: #01c19a;
  border-radius: 8px;
  color: #fff;
  margin-top: 17px;
}
:deep() {
  .el-select .el-input__inner {
    height: 48px;
  }
  .container-input {
    padding-left: 8px;
    color: #878787;
  }
}
</style>
