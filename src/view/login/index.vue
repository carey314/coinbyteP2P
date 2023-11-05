<template>
  <div class="login-page">
    <Header/>

    <div class="center-box" v-if="windowWidth > 769">
      <div class="login-box">
        <el-form
            ref="ruleFormRef"
            :model="form"
            :rules="rules"
            class="login"
            @submit.native.prevent
        >
          <div class="login-title">{{ $t("messages.login.welcome") }}</div>

          <el-tabs v-model="activeLogin" class="login-tabs" @tab-change="() => clearValidate(ruleFormRef)">
            <el-tab-pane :label="t('messages.login.phone')" name="first" class="first-pan">
              <el-form-item class="login-referral" prop="number">
                <el-input
                    v-model="form.number"
                    :placeholder="t('messages.login.phone')"
                    class="input-with-select"
                >
                  <div
                      style="
                      width: 1px;
                      height: 10px;
                      background: #01c19a;
                      z-index: 999;
                    "
                  ></div>
                  <template #prepend>
                    <div style="position: absolute;z-index: 888;left: 4px;">+</div>
                    <el-select
                        class="country-select"
                        v-model="numberSelect"
                        placeholder="Select"
                        filterable
                        style="width: 130px"
                        @mousedown.stop
                    >
                      <el-option-group
                          v-for="group in options"
                          :key="group.label"
                          :label="group.label"
                      >
                        <el-option
                            v-for="item in group.options"
                            :key="item.value"
                            :label="item.telephoneCode"
                            :value="item.telephoneCode"
                        >
                          <div><span class="flag-icon" :class="'flag-icon-' + item.id.toLowerCase()"></span>&nbsp;&nbsp;{{
                              item.label
                            }} <span
                                style="float: right;">+{{ item.telephoneCode }}</span></div>

                        </el-option>
                      </el-option-group>
                    </el-select>
                  </template>
                  <!-- <el-divider direction="vertical" /> -->
                </el-input>
              </el-form-item>
            </el-tab-pane>
            <!--            <el-tab-pane label="Email" name="second">-->
            <!--              <el-form-item class="login-referral" prop="username">-->
            <!--                <el-input v-model="form.username" placeholder="Email"/>-->
            <!--              </el-form-item>-->
            <!--            </el-tab-pane>-->
          </el-tabs>


          <el-form-item>
            <div class="password-verify">
              <div class="verify-input">
                <el-input
                  v-model="form.code"
                  :placeholder="t('messages.login.ver_code')"
                ></el-input>
              </div>
              <div class="verify-btn">
                <el-button
                    style="height: 48px;width: 100%;"
                    v-loading="getCodeLoading"
                    :disabled="getCodeDisabled"
                    @click="getVerificationCode"
                    type="info"
                >
                  {{ getCodeText }}
                </el-button>
              </div>
            </div>
          </el-form-item>


          <el-form-item class="login-button clearfloat">
<!--            <div class="login-agree clearfloat">-->
<!--              <div class="agreement">-->
<!--                <a-->
<!--                    href="/password"-->
<!--                    style="color: #01c19a; text-decoration: none"-->
<!--                >{{ $t("messages.login.forgot_password") }}</a-->
<!--                >-->
<!--              </div>-->
<!--            </div>-->

            <el-button @click="toLogin(ruleFormRef)" :disabled="isButtonDisabled" class="login-btn" type="info">
              {{ $t("messages.login.login") }}
            </el-button>
          </el-form-item>

          <div class="login-signup">
            <div>
              {{ $t("messages.login.no_have") }} &nbsp;&nbsp;

              <span style="color: #01c19a;cursor: pointer" @click="dialogTableVisible = true">
                {{ $t("messages.login.sign") }}
              </span>
              <SignChoose v-model="dialogTableVisible"></SignChoose>
            </div>
          </div>
        </el-form>
      </div>
    </div>
    <div class="center-box-mobile" v-if="windowWidth <= 769">
      <div class="login-box">
        <el-form
            ref="ruleFormRef"
            :model="form"
            :rules="rules"
            class="login"
            @submit.native.prevent
        >
          <div class="login-title">{{ $t("messages.login.welcome") }}</div>
          <el-tabs v-model="activeLogin" class="login-tabs" @tab-change="() => clearValidate(ruleFormRef)">
            <el-tab-pane label="Phone" name="first" class="first-pan">
              <el-form-item class="login-referral" prop="number">
                <el-input
                    v-model="form.number"
                    placeholder="Phone"
                    class="input-with-select"
                >
                  <div
                      style="
                      width: 1px;
                      height: 10px;
                      background: #01c19a;
                      z-index: 999;
                    "
                  ></div>
                  <template #prepend>
                    <div style="position: absolute;z-index: 888;left: 4px;">+</div>
                    <el-select
                        v-model="numberSelect"
                        placeholder="Select"
                        filterable
                        style="width: 130px"
                        @mousedown.stop
                    >
                      <el-option-group
                          v-for="group in options"
                          :key="group.label"
                          :label="group.label"
                      >
                        <el-option
                            v-for="item in group.options"
                            :key="item.value"
                            :label="item.telephoneCode"
                            :value="item.telephoneCode"
                        >
                          <div><span class="flag-icon" :class="'flag-icon-' + item.id.toLowerCase()"></span>&nbsp;&nbsp;{{
                              item.label
                            }} <span
                                style="float: right;">+{{ item.telephoneCode }}</span></div>

                        </el-option>
                      </el-option-group>
                    </el-select>
                  </template>
                  <!-- <el-divider direction="vertical" /> -->
                </el-input>
              </el-form-item>
            </el-tab-pane>
            <!--            <el-tab-pane label="Email" name="second">-->
            <!--              <el-form-item class="login-referral" prop="username">-->
            <!--                <el-input v-model="form.username" placeholder="Email"/>-->
            <!--              </el-form-item>-->
            <!--            </el-tab-pane>-->
          </el-tabs>

          <!--          <el-form-item class="login-password" prop="password">-->
          <!--            <el-input-->
          <!--                v-model="form.password"-->
          <!--                :type="(isShowPass === true) ? 'text' : 'password'"-->
          <!--                placeholder="Password"-->
          <!--            >-->
          <!--              <template #prefix>-->
          <!--                <img :src="login_password"/>-->
          <!--              </template>-->
          <!--              <template v-if="!isShowPass" #suffix>-->
          <!--                <img :src="login_eye_off" @click="showPassWord"/>-->
          <!--              </template>-->
          <!--              <template v-else #suffix>-->
          <!--                <img-->
          <!--                    :src="login_eye_view"-->
          <!--                    style="width: 22px; height: 17px"-->
          <!--                    @click="showPassWord"-->
          <!--                />-->
          <!--              </template>-->
          <!--            </el-input>-->
          <!--          </el-form-item>-->
          <el-form-item>
            <div class="password-verify">
              <div class="verify-input">
                <el-input
                    v-model="form.code"
                    placeholder="Verification Code"
                ></el-input>
              </div>
              <div class="verify-btn">
                <el-button
                    style="height: 48px;width: 100%;background: #01c19a;color: #fff;"
                    v-loading="getCodeLoading"
                    :disabled="getCodeDisabled"
                    @click="getVerificationCode"
                >
                  {{ getCodeText }}
                </el-button>
              </div>
            </div>
          </el-form-item>

          <el-form-item class="login-button clearfloat">
            <el-button @click="toLogin(ruleFormRef)" :disabled="isButtonDisabled" class="login-btn" type="info">
              {{ $t("messages.login.login") }}
            </el-button>

          </el-form-item>


          <div class="login-signup">
            <div>
              {{ $t("messages.login.no_have") }} &nbsp;&nbsp;
              <span style="color: #01c19a;cursor: pointer" @click="dialogTableVisible = true">
                {{ $t("messages.login.sign") }}
              </span>
              <SignChoose v-model="dialogTableVisible"></SignChoose>

            </div>
          </div>
        </el-form>
      </div>
    </div>
    <Footer v-if="windowWidth > 769"/>
    <FooterMobile v-if="windowWidth <= 769"/>
  </div>
</template>

<script setup lang="ts">
import {ref, reactive, onUnmounted, onMounted, computed, watch} from "vue";
import Header from "../../layout/Header/Header.vue";
import FooterMobile from "../../layout/Footer/FooterMobile.vue";
import Footer from "../../layout/Footer/Footer.vue";
import GetButton from "../../components/GetButton.vue";
import SignChoose from "../../components/SignChoose.vue";
import login_password from "../../assets/home/login_password.svg";
import login_eye_off from "../../assets/home/login_eye_off.svg";
import login_eye_view from "../../assets/wallet/overview_eye.png";
import {useRouter} from "vue-router";
import {useUserInfoStore} from "../../store/user";
import {storeToRefs} from "pinia";
import {ElMessage} from "element-plus";
import {toLogin as Tologin} from "../../api/login";
import {getVerificationCodeApi} from "../../api/login"
import type {FormInstance, FormRules} from "element-plus";
import {countryList} from "./countries";

import {useI18n} from "vue-i18n";
import {Right} from "@element-plus/icons";


const {t} = useI18n();
const ruleFormRef = ref<FormInstance>();
const dialogTableVisible = ref(false);

// const rules = reactive<FormRules>({
//   username: [
//     {required: true, message: "Please input your username!", trigger: "blur"},
//   ],
//   password: [{required: true, message: "Please input your password!"}],
//   number: [
//     {required: true, message: "Please input your number!", trigger: "blur"},
//   ],
// });
const rules = computed(() => {
  let rRules: FormRules = {
    password: [{required: true, message: "Please input your password!"}],
  };
  if (activeLogin.value === 'first') {
    rRules.number = [
      {required: true, message: "Please input your phone number!", trigger: "blur"},
    ];
  } else if (activeLogin.value === 'second') {
    rRules.username = [
      {required: true, message: "Please input your email!", trigger: "blur"},
      {type: 'email', message: "Please enter a valid email format!", trigger: "blur"}
    ];
  }
  return rRules;
})

const userInfoStore = useUserInfoStore();
const {token, username, userInfo, validKycBuy, validKycSell} = storeToRefs(userInfoStore);
// console.log("islogin", userInfoStore.isLogin);
const router = useRouter();
const password = ref("");
const optional = ref("");
const loginToken = ref("")
const form = reactive({
  number: "",
  code: ""
});
const getCodeText = ref(t('messages.login.send'));
const getCodeDisabled = ref(false);
const getCodeLoading = ref(false);

const isButtonDisabled = ref(true); // 默认禁用按钮

// 监视 form.code 的变化
const isCountingDown = ref(false); // 是否处于倒计时状态

watch(() => form.code, (newCode) => {
  if (!isCountingDown.value && newCode === "") {
    isButtonDisabled.value = true; // 如果不处于倒计时状态且输入框为空，禁用登录按钮
  } else if( form.code === ""){
    isButtonDisabled.value = true;
  } else{
    isButtonDisabled.value = !isCountingDown.value;
  }
});

watch(getCodeText, (newText) => {
  if (newText !== t('messages.login.send')) {
    isCountingDown.value = true; // 发送按钮进入倒计时状态
  } else {
    isCountingDown.value = false; // 发送按钮不处于倒计时状态
    if (form.code === "") {
      isButtonDisabled.value = true; // 发送按钮不是倒计时状态且输入框为空，禁用登录按钮
    }
  }
});
const getVerificationCode = async () => {
  // 发送获取验证码的请求
  if (form.number !== '') {
    getCodeLoading.value = true;
    getCodeDisabled.value = true;
    isButtonDisabled.value = true; // 禁用登录按钮
  }
  try {
    const response = await getVerificationCodeApi("+" + numberSelect.value + form.number);
    getCodeLoading.value = false;
    if (response.data.code === 1) {
      getCodeText.value = t('messages.login.resend') + (60);
      loginToken.value = response.data.data.token;
      let count = 60;
      const timer = setInterval(() => {
        count -= 1;
        getCodeText.value = t('messages.login.resend') + `(${count})`;
        if (count === 0) {
          clearInterval(timer);
          getCodeText.value = t('messages.login.send');
          getCodeDisabled.value = false;
          if (form.code === '' && !isCountingDown.value) {
            isButtonDisabled.value = true; // 倒计时结束后，如果验证码为空且发送按钮不是倒计时状态，禁用登录按钮
          }
        }
      }, 1000);
    } else {
      ElMessage.error(response.data.msg);
      getCodeLoading.value = false;
      getCodeDisabled.value = false;
      isButtonDisabled.value = false; // 发送失败时，启用登录按钮
    }
  } catch (error) {
    ElMessage.error("Failed to get verification code.");
    getCodeLoading.value = false;
    isButtonDisabled.value = false; // 发送失败时，启用登录按钮
  }
};
const number = ref("");
const numberSelect = ref("61");
const mySelect = ref(null); // 创建 ref 引用
// 处理失去焦点事件
// const handleBlur = () => {
//   if (mySelect.value) {
//     console.log(mySelect.value);
//     mySelect.value.blur(); // 调用 blur 方法
//   }
// };
// // 处理更改事件
// const handleChange = (value:any) => {
//   console.log("Changed to", value);
//   numberSelect.value = value;
// };
const areas = [
  {label: "Australia", value: "+61"},
  {label: "United States", value: "+1"},
];

const options = Object.entries(countryList).map(([key, values]) => ({
  label: key,
  options: values.map((item) => ({
    ...item,
    value: item.telephoneCode,
    label: item.commonName,
  })),
}));
const isShowPass = ref(false);
const showPassWord = () => {
  isShowPass.value = !isShowPass.value;
};
const text = t('messages.login.login');
// 进度条
const percentage = ref(25);
const customColor = ref("#01c19a");
const increase = () => {
  percentage.value += 25;
  if (percentage.value > 100) {
    percentage.value = 100;
  }
};
const decrease = () => {
  percentage.value -= 25;
  if (percentage.value < 0) {
    percentage.value = 0;
  }
};

const activeLogin = ref("first");
// const handleClick = (tab: TabsPaneContext, event: Event) => {
//   console.log(tab, event)
// }

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

//async (formEl: FormInstance | undefined)
const toLogin = async (formEl: FormInstance | undefined) => {
  console.log('----------');
  if (!formEl || isButtonDisabled.value) return;
  const res = await formEl.validate(valid => valid);
  console.log(res);
  if (!res) return;
  // isButtonDisabled.value = true;

  let uploadMsg = {
    token: loginToken.value,
    code: form.code
  };

  Tologin(uploadMsg)
      .then((res: any) => {
            const response = res.data;
            if (response.code === 1) {
              // console.log("Bearer " + response.data.accessToken.token);
              // userInfoStore.changeToken(response.data.accessToken.token);
              // userInfoStore.changeRefreshToken(response.data.refreshToken.token);
              ElMessage.success("Login succeeded!");
              console.log(response,66);

              userInfoStore.updateUserInfo(response.data);
              if (!(validKycBuy.value || validKycSell.value)) {
                router.push("/kyc?type=" + (response.data.kyc_type || 'buy'));
                return;
              }
              router.replace("/");
            } else {
              console.log(response);
              if (response.code === 9001) {
                ElMessage.error("User not exist!");
              } else if (response.code === 9002) {
                ElMessage.error("The verification code is incorrect. Please check and try again.");
              } else if (response.code === 9003) {
                ElMessage.error("The verification code is incorrect. Please check and try again.");
              } else if (response.code === 9004) {
                ElMessage.error("The verification code has expired. Please request a new one.");
              }else {
                ElMessage.error("Login failed. Please try again later!");
              }
            }
            isButtonDisabled.value = false;
          }
      )
      .catch((err: any) => {
        console.log(err);
        isButtonDisabled.value = false;
        if (err?.response) {
          const error = err.response.data.error;
          if (error?.code === 0) {
            ElMessage.error(error.details[0].issue);
          } else {
            ElMessage.error("Login failed. Please try again later");
          }
          return;
        }
        ElMessage.error("Login failed. Please try again later");
      });
};

const clearValidate = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  setTimeout(() => formEl.clearValidate(['number', 'username', 'password']), 0);
  form.number = "";
  form.code = "";
}
</script>

<style scoped lang="scss">
@import url('./statics/css/flag-icons.min.css');

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
:deep() {
  .el-dialog {
    --el-dialog-width: 50%;
    border-radius: 8px;
    @media (max-width: 991px) {
      --el-dialog-width: 80%;
    }
  }

  .el-tabs__nav-wrap::after {
    height: 0;
  }

  .el-select {
    --el-select-input-focus-border-color: none !important;
  }

  .el-input-group__append,
  .el-input-group__prepend {
    box-shadow: none;
    background: none;
    width: 24%;
    margin-left: 10px;
  }

  .el-form-item__content .el-input-group {
    border: 1px solid #dfdfe5;
    border-radius: 4px;
  }

  .el-tabs__content {
    margin-top: -37px;
    overflow: visible !important;
    height: 78px;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
  }

  // .center-box .login-box .login .login-referral[data-v-26188718] .el-input__wrapper{
  //   border: none;
  // }
  .el-progress__text {
    display: none;
  }

  .el-progress-bar__outer {
    background-color: #fff !important;
    border-radius: 0;
  }
}
.country-select{
  :deep(.el-select-dropdown__empty){
      padding: 15px 80px !important;
  }
}
.login-page {
  background: #1d262f;
  @media (max-width: 768px) {
    background: #fff;
  }
}

.center-box {
  margin: auto;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 160px);
  align-items: center;
  border-bottom: 1px solid #2e3945;

  @media (max-width: 769px) {
    display: block !important;
  }
  @media (max-width: 768px) {
    min-height: calc(100vh - 135px);
  }

  .login-box {
    height: 100%;
    width: 439px;
    padding: 80px 0;
    @media (max-width: 769px) {
      padding: 0;
      margin: auto;
    }

    .login {
      background: #fff;
      box-shadow: 0 0 15px 0 rgba(95, 95, 95, 0.19);
      border-radius: 8px;
      padding: 37px 43px 38px 43px;

      @media (max-width: 769px) {
        border-radius: 0px;
        padding: 37px 13px 38px 13px;
      }

      :deep() {
        .el-form-item {
          display: block;
          margin-bottom: 0;

          .el-form-item__content {
            display: block;
          }
        }
      }

      .login-title {
        font-size: $fontSizeMedPro;
        color: #000000;
        line-height: 34px;
        font-weight: 600;
        text-align: center;
      }

      .login-tabs {
        .first-pan {
          :deep() {
            .center-box
            .login-box
            .login
            .login-referral[data-v-26188718]
            .el-input__wrapper {
              border: none;
            }

            .el-input__wrapper {
              border: none;
            }
          }
        }
      }

      .login-password {
        margin-top: 19px;

        .password-condition {
          margin-top: 12px;

          .condition {
            margin-top: 9px;

            .satisfy-frame {
              float: left;
              width: 12px;
              height: 12px;
              border: 1px solid #dfdfe5;
              border-radius: 1px;
            }

            .satisfy {
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

      .login-referral {
        margin-top: 28px;

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

      .login-agree {
        float: right;
        margin-top: 9px;
        z-index: 9999;

        .agree-frame {
          float: left;
          width: 12px;
          height: 12px;
          border: 1px solid #dfdfe5;
          border-radius: 1px;
        }

        .agreement {
          font-size: $fontSizeMin;
          color: #6e6e6e;
          line-height: 22px;
          float: left;
          margin-top: -6px;
          margin-left: 10px;
        }
      }

      .login-button {
        :deep(.button) {
          width: 100%;
          height: 100%;
          font-size: 20px;
          line-height: 25px;
          padding: 16px 0 14px 0px;
          border: 8px;
          @media (max-width: 769px) {
            padding: 16px 0;
          }
        }
      }

      .login-signup {
        margin-top: 18px;
        text-align: center;
        font-size: $fontSizeMinPro;
        line-height: 16px;
        color: #000;
        font-weight: 500;
      }

      .login-with {
        margin-top: 31px;

        .or-with {
          font-size: $fontSizeMin;
          line-height: 14px;
          color: #6e6e6e;
          width: 120px;
          text-align: center;
        }

        :deep() {
          .el-divider__text.is-center {
            margin-top: -2px;
          }

          .el-divider__text {
            padding: 0px;
          }
        }
      }

      .login-other {
        margin-top: 18px;
        display: flex;
        cursor: pointer;

        justify-content: space-between;

        .other-login {
          width: 48%;
          height: 48px;
          border: 1px solid #dfdfe5;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          float: left;

          .other-login-name {
            margin-left: 5px;
          }
        }
      }
    }
  }

  .scan {
    width: 357px;
    height: 100%;
    padding: 80px 0;
    text-align: center;
    @media (max-width: 769px) {
      padding: 0;
      margin: auto;
      max-width: 439px;
    }

    .scan-box {
      background: #f1f1f1;
      border-radius: 0 8px 8px 0;
      padding: 103px 42px 83px 42px;
      @media (max-width: 769px) {
        border-radius: 0px;
        padding: 94px 13px 72px 13px;
      }

      .scan-title {
        font-size: $fontSizeDefPro;
        color: #000;
        line-height: 22px;
      }

      .scan-qr {
        width: 142px;
        margin: 21px auto;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      .scan-tip {
        margin-top: 32px;
        color: #949494;
        font-size: $fontSizeMinPro;
        line-height: 16px;
      }

      .scan-download {
        margin-top: 36px;
        cursor: pointer;
        @media (max-width: 769px) {
          margin-top: 69px;
        }

        .other-sign {
          width: 142px;
          height: 48px;
          border: 1px solid #dfdfe5;
          border-radius: 4px;
          display: flex;
          margin: auto;
          align-items: center;
          justify-content: center;

          .other-sign-name {
            margin-left: 5px;
            font-size: $fontSizeMin;
            color: #000;
            line-height: 14px;
          }
        }
      }
    }
  }
}

.center-box-mobile {
  margin: auto;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 160px);
  align-items: center;
  border-bottom: 1px solid #2e3945;
  @media (max-width: 768px) {
    min-height: calc(100vh - 90px);
  }
  @media (max-width: 768px) {
    //margin-top: 30px;
    display: block !important;
    border-bottom: none;
    box-shadow: none;
  }

  .login-box {
    height: 100%;
    max-width: 439px;
    padding: 80px 0;
    @media (max-width: 769px) {
      padding: 0;
      margin: auto;
    }

    .login {
      background: #fff;
      box-shadow: 0 0 15px 0 rgba(95, 95, 95, 0.19);
      border-radius: 8px;
      padding: 37px 43px 38px 43px;

      @media (max-width: 769px) {
        border-radius: 0px;
        padding: 37px 13px 38px 13px;
        .phone-input :deep() {
          .el-input__wrapper {
            border: none !important;
          }
        }
      }

      :deep() {
        .el-form-item {
          display: block;
          margin-bottom: 0;

          .el-form-item__content {
            display: block;
          }
        }
      }

      .login-title {
        font-size: $fontSizeMedPro;
        color: #000000;
        line-height: 34px;
        font-weight: 600;
        text-align: center;
      }

      .login-radio {
        margin-top: 28px;

        :deep() {
          .el-radio__inner {
            border-color: #dfdfe5;
            border-radius: 3px;
          }

          .el-radio__input.is-checked .el-radio__inner {
            background: #01c19a;
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

      .login-password {
        margin-top: 19px;

        .password-condition {
          margin-top: 12px;

          .condition {
            margin-top: 9px;

            .satisfy-frame {
              float: left;
              width: 12px;
              height: 12px;
              border: 1px solid #dfdfe5;
              border-radius: 1px;
            }

            .satisfy {
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

      .login-referral {
        margin-top: 28px;

        :deep() {
          .el-input__wrapper {
            background: #fff;
            //border: 1px solid #dfdfe5;
            height: 48px;
            border-radius: 4px;
            --el-input-focus-border-color: none;
            --el-input-hover-border-color: none;
            box-shadow: none;
            padding-left: 15px;
          }
        }
      }

      .login-agree {
        float: right;
        margin-top: 9px;
        z-index: 9999;

        .agree-frame {
          float: left;
          width: 12px;
          height: 12px;
          border: 1px solid #dfdfe5;
          border-radius: 1px;
        }

        .agreement {
          font-size: $fontSizeMin;
          color: #6e6e6e;
          line-height: 22px;
          float: left;
          margin-top: -6px;
          margin-left: 10px;
        }
      }

      .login-button {
        :deep(.button) {
          width: 100%;
          height: 100%;
          font-size: 20px;
          line-height: 25px;
          padding: 16px 0 14px 0px;
          border: 8px;
          @media (max-width: 769px) {
            padding: 16px 0;
          }
        }
      }

      .login-signup {
        margin-top: 18px;
        text-align: center;
        font-size: $fontSizeMinPro;
        line-height: 16px;
        color: #000;
        font-weight: 500;
      }

      .login-with {
        margin-top: 31px;

        .or-with {
          font-size: $fontSizeMin;
          line-height: 14px;
          color: #6e6e6e;
          width: 120px;
          text-align: center;
        }

        :deep() {
          .el-divider__text.is-center {
            margin-top: -2px;
          }

          .el-divider__text {
            padding: 0px;
          }
        }
      }

      .login-other {
        margin-top: 18px;
        display: flex;
        cursor: pointer;

        justify-content: space-between;

        .other-login {
          width: 48%;
          height: 48px;
          border: 1px solid #dfdfe5;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          float: left;

          .other-login-name {
            margin-left: 5px;
          }
        }
      }
    }
  }

  .scan {
    max-width: 357px;
    height: 100%;
    height: 100%;
    padding: 80px 0;
    text-align: center;
    @media (max-width: 769px) {
      padding: 0;
      margin: auto;
      max-width: 439px;
    }

    .scan-box {
      background: #f1f1f1;
      border-radius: 0 8px 8px 0;
      padding: 93px 43px 72px 43px;
      @media (max-width: 769px) {
        border-radius: 0px;
        padding: 94px 13px 72px 13px;
      }

      .scan-title {
        font-size: $fontSizeDefPro;
        color: #000;
        line-height: 22px;
      }

      .scan-qr {
        width: 142px;
        margin: 21px auto;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      .scan-tip {
        margin-top: 32px;
        color: #949494;
        font-size: $fontSizeMinPro;
        line-height: 16px;
      }

      .scan-download {
        margin-top: 36px;
        cursor: pointer;
        @media (max-width: 769px) {
          margin-top: 69px;
        }

        .other-sign {
          width: 142px;
          height: 48px;
          border: 1px solid #dfdfe5;
          border-radius: 4px;
          display: flex;
          margin: auto;
          align-items: center;
          justify-content: center;

          .other-sign-name {
            margin-left: 5px;
            font-size: $fontSizeMin;
            color: #000;
            line-height: 14px;
          }
        }
      }
    }
  }
}

.other-sign-icon {
  width: 16px;
  height: 16px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.other-sign-name {
  margin-left: 3px;
}

.login-btn {
  height: 50px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  padding: 1rem 1.7rem;
  //background-color: $main-color;
  //border-color: $main-color;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  margin-top: 30px;
  width: 100%;
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
    flex:1;
    :deep(.button) {
      padding: 0 10px !important;
      font-size: 14px !important;
      font-weight: 400;
      white-space: nowrap;
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
:deep(.el-button--info){
  --el-button-bg-color: rgb(1, 193, 154);
  --el-button-border-color: rgb(1, 193, 154);
  --el-button-hover-bg-color: rgb(1, 193, 154);
  --el-button-hover-border-color: rgb(1, 193, 154);
  --el-button-active-bg-color: rgb(1, 193, 154);
  --el-button-active-border-color: rgb(1, 193, 154);
}

</style>
