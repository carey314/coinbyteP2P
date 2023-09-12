<template>
  <div>
    <Header />
    <div class="password-box">
      <div class="password">
        <div class="password-title">{{ $t('messages.forgot_password.password') }}</div>
        <div class="password-message">
          {{ $t('messages.forgot_password.withdrawal') }}
        </div>
        <el-form
          :model="updatePassForm"
          ref="updatePassFormRef"
          :rules="updatePassFormRules"
        >
          <el-form-item style="width: 100%;" prop="email">
            <div class="password-count" style="width: 100%;">
              <el-input
                v-model="updatePassForm.email"
                :placeholder="t('messages.forgot_password.equipment')"
              />
            </div>
          </el-form-item>
          <div class="password-verify">
            <el-form-item prop="code">
              <div class="verify-input">
                <el-input v-model="code" :placeholder="t('messages.forgot_password.code')" />
              </div>
            </el-form-item>
            <el-form-item style="margin-bottom: 5px;">
              <div class="verify-btn">
                <GetButton :text="t('messages.forgot_password.verify_btn')" v-loading="getCodeDisabled" :disabled="count !== 0" @click="getCode(updatePassFormRef)"/>
                <div class="password-sms" v-if="count !== 0">{{ $t('messages.forgot_password.resend') }} ({{ count }})</div>
              </div>
            </el-form-item>
          </div>
  
  
          <div class="password-continue">
            <GetButton :text="t('messages.forgot_password.continue')" @click="verifyCode(updatePassFormRef)"/>
            <!-- <router-link to="update">
            </router-link> -->
          </div>
        </el-form>
        <div class="return-login">
          <a href="/login" style="color: #01c19a; text-decoration: none"
            > {{ $t('messages.forgot_password.return_login') }}</a
          >
        </div>
      </div>
    </div>
    <Footer v-if="windowWidth > 769" />
    <FooterMobile v-if="windowWidth <= 769" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onUnmounted, onMounted } from "vue";
import Header from "../../../layout/Header/Header.vue";
import FooterMobile from "../../../layout/Footer/FooterMobile.vue";
import Footer from "../../../layout/Footer/Footer.vue";
import GetButton from "../../../components/GetButton.vue";
import {forgetPassword, verifyForgetPassword} from "../../../api/user";
import { ElMessage, FormInstance, FormRules } from "element-plus";

import {forgotPassGetCode, forgotPassValidCode} from '../../../api/login';

import { useI18n } from 'vue-i18n'
const {t} = useI18n()

const password = ref("");
const code = ref("");
const text = ref("Get Verification Code");
const textContinue = ref("Continue");
const updatePassFormRef = ref<FormInstance>();
const updatePassForm = ref({
  email: '',
  code: null
})
const count = ref(0);
const timer = ref(null);
const getCodeDisabled = ref(false);
const getCode = async (formEl: FormInstance | undefined) => {
  if(!formEl) return;
  const res = await formEl.validateField(['email'], valid => valid);
  if(!res) return;
  getCodeDisabled.value = true;
  try {
    const getCodeRes = await toGetCode();
    getCodeDisabled.value = false;
    if(getCodeRes.data.code !== 1) {
      if(getCodeRes.data.code === 9001) {
        ElMessage.error("User not exist.");
      } else {
        ElMessage.error("Please try again later.");
      }
      return;
    }
    count.value = 60;
    timer.value = setInterval(() => {
      count.value -= 1;
      if(count.value <= 0) {
        clearInterval(timer.value);
      }
    }, 1000);
  } catch (e) {
    getCodeDisabled.value = false;
    ElMessage.error("Please try again later.");
  }
}
const toGetCode = async () => {
  return await forgotPassGetCode(updatePassForm.value.email);
}
const verifyCode = async (formEl: FormInstance | undefined) => {
  if(!formEl) return;
  const res = await formEl.validate(valid => valid);
}
const updatePassFormRules = reactive<FormRules>({
  email: [
    { required: true, message: 'Please input email.', trigger: 'blur' },
    { type: 'email', message: 'Please enter a valid email format.', trigger: 'blur' },
  ],
  code: [
    { required: true, message: 'Please input code.', trigger: 'blur' },
  ]
});
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
const options = ref([
  {
    value: "1",
    label: "Mobile number",
  },
  {
    value: "2",
    label: "Email",
  },
]);
</script>

<style scoped lang="scss">
$headerBackGround: #1d262f;
$bg-color: #fff;
$main-color: #01c19a;
$fontSizeMax: 42px;
$fontSizeMedPro: 28px;  
$fontSizeMed: 24px;
$fontSizeDefPro: 18px;
$fontSizeDef: 16px;
$fontSizeMinPro: 14px;
$fontSizeMin: 12px;
$lineH: 16px;
.password-box {
  display: flex;
  min-height: calc(100vh - 160px);
  align-items: center;
  background: #1d262f;
  padding: 110px 0;
  border-bottom: 1px solid #2e3945;
  @media (max-width: 768px) {
    padding: 0;
  }
  @media (max-width: 768px) {
    min-height: calc(100vh - 135px);
  }
  .password {
    max-width: 438px;
    flex: 1;
    margin: auto;
    background: #fff;
    box-shadow: 0 0 15px 0 rgba(95, 95, 95, 0.19);
    border-radius: 8px;
    padding: 36px 42px 39px 42px;
    @media (max-width: 768px) {
      border-radius: 0px;
    }
    :deep(.el-input__inner) {
      font-size: $fontSizeMinPro;
      color: #c4c9d0;
      line-height: $lineH;
    }
    .password-title {
      font-size: $fontSizeMedPro;
      color: #000000;
      line-height: 34px;
      font-weight: 600;
      text-align: center;
    }
    .password-message {
      margin-top: 18px;
      font-size: $fontSizeMinPro;
      color: #9b9b9b;
      line-height: 16px;
    }

    .password-count {
      margin-top: 23px;

      :deep() {
        .el-input__wrapper {
          height: 48px;
          padding: 15px;
        }
        .el-input .el-input__clear,
        .el-input .el-input__password {
          font-size: 20px;
        }
        .el-icon svg {
          height: 20px;
          width: 20px;
        }
        .el-input__wrapper {
          background: #fff;
          border: 1px solid #dfdfe5;
          height: 48px;
          border-radius: 4px;
          --el-input-focus-border-color: none;
          --el-input-hover-border-color: none;
          box-shadow: none;
          padding-left: 15px;
        }
      }
    }
    .password-verify {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      .verify-btn {
        margin-left: 13px;
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        :deep(.button) {
          padding: 0 10px !important;
          font-size: 14px !important;
          font-weight: 400;
        }
      }
      :deep() {
        .btn {
          font-size: 14px;
          color: #ffffff;
        }
        .el-input__wrapper {
          // background: #fff;
          border: 1px solid #dfdfe5;
          height: 48px;
          border-radius: 4px;
          --el-input-focus-border-color: none;
          --el-input-hover-border-color: none;
          box-shadow: none;
          padding-left: 15px;
        }
      }
    }
    .password-sms {
      margin-top: 5px;
      font-size: 14px;
      color: #f15958;
      float: right;
      height: 35px;
    }
    .password-continue {
      margin-top: 5px;
      :deep(.button) {
        // color: #bdbdbd;
        // background-color: #f7f7f7;
        width: 100%;
        height: 100%;
        font-size: 20px;
        font-family: 600;
        line-height: 25px;
        padding: 16px 0 14px 0px;
        border: 8px;
        @media (max-width: 769px) {
          padding: 16px 0;
        }
      }
    }
    .return-login {
      text-align: center;
      margin-top: 18px;
      font-size: $fontSizeMinPro;
      line-height: 16px;
    }
  }
}
</style>
