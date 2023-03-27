<template>
  <div>
    <Header />
    <div class="sign-box">
      <div class="sign">
        <div class="sign-title">Create account</div>
        <div class="sign-radio">
          <el-radio-group v-model="activeSign">
            <el-radio
              :label="option.value"
              v-for="option in options"
              :key="option.value"
            >
              <el-row>
                <el-col span="12">
                  <div class="label">
                    {{ option.label }}
                  </div>
                </el-col>
              </el-row>
            </el-radio>
          </el-radio-group>
          <div
            v-if="activeSign === '1'"
            class="activeNumber"
            style="margin-top: 18px"
          >
            <el-input
              v-model="number"
              placeholder="Mobile number"
              class="input-with-select"
            >
              <template #prepend>
                <el-select
                  v-model="select"
                  placeholder="Select"
                  style="width: 115px"
                >
                  <el-option label="+61" value="1" />
                  <el-option label="+86" value="2" />
                  <el-option label="+01" value="3" />
                </el-select>
              </template>
            </el-input>
          </div>
          <div v-if="activeSign === '2'" class="activeEmail">
            <el-input v-model="email" placeholder="Email">
              <template #prefix>
                <img :src="login_email" />
              </template>
            </el-input>
          </div>
        </div>
        <div class="sign-password">
          <el-input v-model="password" type="password" placeholder="Password">
            <template #prefix>
              <img :src="login_password" />
            </template>
            <template #suffix>
              <img :src="login_eye_off" />
            </template>
          </el-input>
          <div class="password-condition">
            <div class="condition clearfloat">
              <div :class="{'satisfy-frame' : true, 'dot' : password.match(/^.{8,32}$/)}"></div>
              <div class="satisfy">8-32 characters long</div>
            </div>
            <div class="condition clearfloat">
              <div :class="{'satisfy-frame' : true, 'dot' : password.match(/^(?=.*[a-z]).*$/)}"></div>
              <div class="satisfy">1 lowercase character</div>
            </div>
            <div class="condition clearfloat">
              <div :class="{'satisfy-frame' : true, 'dot' : password.match(/^(?=.*[A-Z]).*$/)}"></div>
              <div class="satisfy">1 uppercase character</div>
            </div>
            <div class="condition clearfloat">
              <div :class="{'satisfy-frame' : true, 'dot' : password.match(/^(?=.*\d).*$/)}"></div>
              <div class="satisfy">1 number</div>
            </div>
            <div class="condition clearfloat">
              <div :class="{'satisfy-frame' : true, 'dot' : password.match(/^(?=.*[@$!%*?&]).*$/)}"></div>
              <div class="satisfy">1 symbol</div>
            </div>
          </div>
        </div>
        <div class="sign-referral">
          <el-input
            v-model="optional"
            placeholder="Referral code (optional)"
          />
        </div>
        <div class="sign-agree clearfloat">
          <div class="agree-frame"></div>
          <div class="agreement">I agree to <a href="" style="color:#01C19A">Terms</a> and <a href="" style="color:#01C19A">policies </a></div>
        </div>
        <div class="sign-button">
          <GetButton :text="text" @click="handleToSignUp"/>
        </div>
        <div class="sign-login">
          <div>Have an account  &nbsp;&nbsp;  <a href="/login" style="color:#01C19A;text-decoration: none">Log in</a></div>
        </div>
        <div class="sign-with">
          <el-divider>
            <span>or sign up with</span>
          </el-divider>
        </div>
        <div class="sign-other">
          <div class="other-sign">
            <div class="other-sign-icon"><img :src="login_telegram"></div>
            <div class="other-sign-name">Telegram</div>
          </div>
          <div class="other-sign">
            <div class="other-sign-icon"><img :src="login_google"></div>
            <div class="other-sign-name">Google</div>
          </div>
        </div>
      </div>
    </div>
    <Footer v-if="windowWidth > 769" />
    <FooterMobile v-if="windowWidth <= 769" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onUnmounted, onMounted } from "vue";
import Header from "../../layout/Header/Header.vue";
import FooterMobile from "../../layout/Footer/FooterMobile.vue";
import Footer from "../../layout/Footer/Footer.vue";
import GetButton from "../../components/GetButton.vue";


import login_password from "../../assets/home/login_password.svg";
import login_eye_off from "../../assets/home/login_eye_off.svg";
import login_email from "../../assets/home/login_email.svg";
import login_telegram from "../../assets/home/login_telegram.svg";
import login_google from "../../assets/home/login_google.svg";

import {initializeSignUpWizard,signUp,choosePer} from '../../api/user';

import { useFingerprintStore } from "../../store/fingerprint";
import { ElMessage } from "element-plus";
const fingerprintStore = useFingerprintStore();

const activeSign = ref("1");
const number = ref("");
const select = ref("+61");
const email = ref("");
const password = ref("");
const optional = ref("")
const agree = ref("")
const text = ref("Sign up");

const passRule = ref([
  {
    rule : /^.{8,32}$/,
    message : "Password length 8 to 32."
  },
  {
    rule : /^(?=.*[a-z]).*$/,
    message : "Password must have at least one lowercase character."
  },
  {
    rule : /^(?=.*[A-Z]).*$/,
    message : "Password must have at least one uppercase character."
  },
  {
    rule : /^(?=.*\d).*$/,
    message : "Password must be at least one number."
  },
  {
    rule : /^(?=.*[@$!%*?&]).*$/,
    message : "Password has at least one symbol."
  },
]);

const windowWidth = ref(window.document.body.offsetWidth);
onMounted(() => {
  window.addEventListener("resize", resetWidth);
});
onUnmounted(() => {
  window.removeEventListener("resize", resetWidth);
});
const regUUID = ref("");
onMounted(() => {
  initializeSignUpWizard(
    {
      "url": "https://my.b2bdemo-accounting.com/register/{registration}/{code}",
      "utm": {
        "referral" : "",
        "uri":"https://my.b2bdemo-accounting.com/en/register",
      }
    }
  ).then((res : any) => {
    if(res.data && res.data.code === 200 || res.data.code === 202) {
      signUp({wizard_id : 13,"uuid": res.data.uuid}).then(regRes => {
        if(regRes.status === 200 || regRes.status === 202) {
          regUUID.value = regRes.data.uuid;
        } else {
          ElMessage({
            message : "Please try again later.",
            type : "error"
          })
        }
      }).catch(err => {
        ElMessage({
          message : "Please try again later.",
          type : "error"
        })
      })
    } else {
      ElMessage({
        message : "Please try again later.",
        type : "error"
      })
    }
  }).catch(() => {
    ElMessage({
      message : "Please try again later.",
      type : "error"
    })
  });
})
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
const handleToSignUp = () => {
  let correctPass = passRule.value.find(v => !(password.value.match(v.rule)));
  if(correctPass) {
    ElMessage({
      message : correctPass.message,
      type : "error"
    });
    return;
  }
  signUp({
    "wizard_id" : 13,
    "uuid": regUUID.value,
    "email": email.value,
    "password": password.value,
    "password_confirmation": password.value,
    "device_fingerprint": fingerprintStore.fingerprint
  }).then((res : any) => {
    console.log(res.data);
  })
}
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
.sign-box {
  display: flex;
  min-height: calc(100vh - 394px);
  align-items: center;
  background: #1d262f;
  padding: 80px 0;
  border-bottom: 1px solid #2e3945;
  @media (max-width: 768px) {
    padding: 0;
  }
  .sign {
    max-width: 438px;
    flex: 1;
    margin: auto;
    background: #fff;
    box-shadow: 0 0 15px 0 rgba(95, 95, 95, 0.19);
    border-radius: 8px;
    padding: 30px 40px 40px 40px;
    @media (max-width: 768px) {
      border-radius: 0px;
    }
    .sign-title {
      font-size: $fontSizeMedPro;
      color: #000000;
      line-height: 34px;
      font-weight: 600;
      text-align: center;
    }
    .sign-radio {
      margin-top: 28px;
      :deep() {
        .el-radio__inner {
          border-color: #dfdfe5;
          border-radius: 3px;
        }
        .el-radio__input.is-checked .el-radio__inner {
          background: #01c19a;
          border-color: #01c19a;
          border-radius: 4px;
        }
        .el-radio__input.is-checked + .el-radio__label {
          color: #000;
        }

        .el-radio-group {
          display: flex;
          justify-content: space-between;
        }
        .el-radio {
          width: 48%;
          margin-right: 0;
          --el-radio-text-color: #c4c9d0;
          // --el-radio-font-size:14px;
        }
        .el-radio__inner::after{
          border-radius:0px;
        }
      }
      .el-radio {
        height: 48px;
        border: 1px solid #dfdfe5;
        border-radius: 4px;
        padding: 15px;
      }
      .activeNumber {
        .input-with-select {
          :deep() {
            .el-input__inner {
              font-size: $fontSizeMinPro;
              color: #000;
              line-height: 16px;
            }
          }
        }
        :deep() {
          .el-input {
            --el-input-border-color: none;
          }
          .el-input-group__prepend {
            width: 73px;
            border-radius: 8px;
          }
          .el-input-group--prepend > .el-input__wrapper {
            margin-left: 16px;
          }
          .el-select {
            --el-select-input-focus-border-color: none;
          }

          //right input
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
          .el-input__inner {
            font-size: $fontSizeMinPro;
            color: #c4c9d0;
            line-height: 16px;
          }
        }
      }
      .activeEmail {
        margin-top: 18px;
        :deep() {
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
    }
    .sign-password {
      margin-top: 17px;
      .password-condition {
        margin-top: 12px;
        .condition {
          margin-top: 9px;
          .dot {
            background-color: #01c19a;
          }
          .satisfy-frame {
            float: left;
            width: 12px;
            height: 12px;
            border: 1px solid #dfdfe5;
            border-radius: 1px;
          }
          .satisfy{
            margin-top: -6px;
            float: left;
            margin-left: 10px;
            font-size: $fontSizeMin;
            color: #000000;
            line-height: 22px;
            font-weight: 500;
          }
        }
      }
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
    .sign-referral{
      margin-top: 14px;
      :deep() {
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
    .sign-agree{
      margin-top: 26px;
      .agree-frame{
        float: left;
        width: 12px;
        height: 12px;
        border: 1px solid #dfdfe5;
        border-radius: 1px;
      }
      .agreement{
        font-size: $fontSizeMin;
        color: #6E6E6E;
        line-height: 22px;
        float: left;
        margin-top: -6px;
        margin-left: 10px;
      }
    }
    .sign-button{
      margin-top: 7px;
      :deep(.button){
        width: 100%;
        height: 100%;
        font-size: 20px;
        line-height: 25px;
        padding: 16px 0 14px 0px;
        border: 8px;
        @media(max-width:769px) {
          padding:16px 0;
        }
      }
    }
    .sign-login{
      text-align: center;
      margin-top: 22px;
      font-size: $fontSizeMinPro;
      line-height: 16px;
      color: #000;
      font-weight: 500;
    }
    .sign-with{
      margin-top: 29px;
      span{
        font-size: $fontSizeMin;
        line-height: 14px;
        color: #6E6E6E;
      }
      :deep(.el-divider__text.is-center){
        margin-top: -2px;
      }
    }
    .sign-other{
      margin-top: 18px;
      display: flex;
      cursor: pointer;
      justify-content: space-between;

      .other-sign{
        width: 48%;
        height: 48px;
        border: 1px solid #DFDFE5;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        float: left;
        .other-sign-name{
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
