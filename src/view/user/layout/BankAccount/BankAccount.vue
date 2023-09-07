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
          style="padding: 0 10px;"
          title="Inner Dialog"
          append-to-body
          width="448px"
      >
        <template #header>
          <div style="font-weight: 600; font-size: 22px">Add Bank Account</div>
        </template>

        <div class="divider"></div>
        <el-form
            :model="bankForm"
            label-position="top"
            ref="ruleBankFormRef"
            :rules="rules"
            style="margin-top: 10px;"
        >
          <el-form-item label="Bank Country" style="width: 100%;" prop="bank_country">
            <template #label>
              <div class="bank-form-label">Bank Country</div>
            </template>
            <el-select
                class="select-second"
                style="height: 48px; width: 100%;"
                v-model="bankForm.bank_country"
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
            <!-- <div class="receive" style="position: relative">
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
              
            </div> -->
          </el-form-item>
          <el-form-item label="Currency" prop="currency">
            <template #label>
              <div class="bank-form-label">Currency</div>
            </template>
            <el-select
                class="select-second"
                style="height: 48px; width: 100%;"
                v-model="bankForm.currency"
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
          </el-form-item>
          <el-form-item label="Back Name" prop="bank_name">
            <template #label>
              <div class="bank-form-label">Back Name</div>
            </template>
            <el-input
                class="container-input"
                v-model="bankForm.bank_name"
                style="height: 48px; width: 100%;"
                type="text"
                placeholder="Please enter"
            />
          </el-form-item>
          <el-form-item label="Branch Code" prop="branch_code">
            <template #label>
              <div class="bank-form-label">Branch Code</div>
            </template>
            <el-input
                class="container-input"
                v-model="bankForm.branch_code"
                type="text"
                placeholder="Please enter"
            />
          </el-form-item>
          <el-form-item label="Account Number" prop="account_number">
            <template #label>
              <div class="bank-form-label">Account Number</div>
            </template>
            <el-input
                class="container-input"
                v-model="bankForm.account_number"
                type="text"
                placeholder="Please enter"
            />
          </el-form-item>
          <el-form-item label="Submit Bank Statement" prop="bank_statement">
            <template #label>
              <div class="bank-form-label">Submit Bank Statement</div>
            </template>
            <el-upload
                class="upload-demo"
                drag
                action="/api/bank_statement"
                @success="uploadSuccess"
                @change="uploadChange"
                :headers="{
                'Authorization': 'Bearer ' + token
              }"
                :show-file-list="false"
                v-loading="uploadLoading"
            >
              <el-image v-if="bankForm.bank_statement" :src="bankForm.bank_statement" alt=""
                        style="width: 100%; max-height: 200px; object-fit: contain; height: 100%;"/>
              <img v-if="!bankForm.bank_statement" :src="upload" style="width: 18px; height: 18px;"/>
              <div v-if="!bankForm.bank_statement" class="el-upload__text">Upload</div>
            </el-upload>
          </el-form-item>
        </el-form>


        <el-button
            v-if="showContinueBtn"
            class="save-btn"
            @click="handleSubmit(ruleBankFormRef)"
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
        <el-divider/>
        <div>
          <span>{{ t("messages.user.label_Currency") }}: </span
          >{{ item.currency }}
        </div>
        <el-divider/>

        <div>
          <span>{{ t("messages.user.label_Name") }}: </span>{{ item.bank }}
        </div>
        <el-divider/>
        <div>
          <span>{{ t("messages.user.label_Branch") }}: </span>{{ item.code }}
        </div>
        <el-divider/>
        <div>
          <span>{{ t("messages.user.label_Number") }}: </span>{{ item.number }}
        </div>
        <el-divider/>
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
import {ref, reactive, onUnmounted, onMounted, Ref} from "vue";

import {Right} from "@element-plus/icons-vue";
import GetButton from "../../../../components/GetButton.vue";
import Table from "../../component/Table.vue";
import usercenter_verification_person from "../../../../assets/home/usercenter_verification_person.png";
import upload from "../../../../assets/image/upload.png";
import {UploadFilled} from "@element-plus/icons-vue";
import {useI18n} from "vue-i18n";
import {Bank} from "../../../../models/bank";
import {ElMessage, FormInstance, FormRules, UploadFile, UploadFiles} from "element-plus";
import {addBank} from '../../../../api/bank';

import {useUserInfoStore} from "../../../../store/user";
import {storeToRefs} from "pinia";

const userInfoStore = useUserInfoStore();
const {token, refreshToken} = storeToRefs(userInfoStore);

const {t} = useI18n();
const addressVisible = ref(false);
const selectedOption2 = ref("");
const selectCurrency = ref("");
const canContinue = ref(false);
// form ref
const ruleBankFormRef = ref<FormInstance>();
// form data
const bankForm = ref<Bank>({
  bank_country: "",
  currency: "",
  bank_name: "",
  branch_code: "",
  account_number: "",
  bank_statement: "",
});
// form rule
const rules = reactive<FormRules>({
  bank_country: [
    {required: true, message: 'Please input bank country.', trigger: 'blur'},
  ],
  currency: [
    {required: true, message: 'Please input currency.', trigger: 'blur'},
  ],
  bank_name: [
    {required: true, message: 'Please input bank name.', trigger: 'blur'},
  ],
  branch_code: [
    {required: true, message: 'Please input bank code.', trigger: 'blur'},
  ],
  account_number: [
    {required: true, message: 'Please input baccount number.', trigger: 'blur'},
  ],
});

function updateCanContinue() {
  canContinue.value = selectedOption2.value !== "";
  canContinue.value = selectCurrency.value !== "";
}

let options2 = [
  {value: "Australia", label: "Australia"},
  {value: "New Zealand", label: "New Zealand"},
];
let options3 = [
  {value: "AUD", label: "AUD"},
  {value: "NZD", label: "NZD"},
];
const innerVisible = ref(false);
const withdrawStatus = ref(false);
const showContinueBtn = ref(true);

async function handleSubmit(formEl: FormInstance | undefined) {
  if (!formEl) return
  const valid = await formEl.validate((valid, fields) => {
    return valid;
  })
  if (!valid) return;
  // withdrawStatus.value = true;
  // innerVisible.value = false;
  try {
    const res = await addBank(bankForm.value);
    ElMessage.success("Submission successful.");
    addressVisible.value = false;
  } catch (e) {
    console.log(e);
    ElMessage.error("Please try again later.");
  }
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
const uploadSuccess = (res: any, file: UploadFile, files: UploadFiles) => {
  console.log(res);
  if (res.msg === 'success') {
    bankForm.value.bank_statement = res.data.file_link;
  }
}
const uploadLoading = ref(false);
const uploadChange = (uploadFile: UploadFile) => {
  if (uploadFile.status !== 'success') {
    uploadLoading.value = true;
  } else {
    uploadLoading.value = false;
  }
}
</script>

<style scoped lang="scss">
$fontSizeMed: 26px;
$fontSizeMinPro: 14px;
$fontSizeMin: 12px;

:deep(.el-dialog) {
  --el-dialog-width: 100% !important;
}

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

:deep() {
  .el-form-item.is-required {
    position: relative;

    .el-form-item__label {
      &::before {
        position: absolute;
        top: 42px;
        left: -13px;
      }
    }
  }
}

.inner-dialog {
  border-radius: 8px !important;

  .divider {
    width: 100%;
    height: 1px;
    background-color: #ebebeb;
    margin-top: -20px;
  }

  .bank-form-label {
    font-size: 16px;
    color: #000000;
    line-height: 19px;
    font-weight: 600;
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
        height: 48px !important;
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

  :deep(.el-upload-dragger) {
      padding: 0 !important;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 124px;
      flex-direction: column;
      gap: 7px;
  }
}

.save-btn {
  width: 100%;
  height: 60px;
  background-color: #01c19a;
  border-radius: 8px;
  color: #fff;
  margin-top: 17px;
  @media (max-width: 768px) {
    height: 45px;
  }
}

:deep() {
  .el-select .el-input__inner {
    height: 48px;
  }

  .container-input {
    // padding-left: 8px;
    color: #878787;
    height: 48px;
  }
}
</style>
