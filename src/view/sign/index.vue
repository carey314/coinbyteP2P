<template>
  <div>
    <Header/>
    <el-progress
        :percentage="percentage"
        :color="customColor"
        show-text="none"
    />
    <div class="sign-box">
      <el-row>
        <el-col :span="24" :xs="24">
          <div class="sign-title">
            <div class="create-title">Account Creation</div>
            <div class="previous-btn" @click="decreasePercentage" v-if="percentage !== 0">
              <el-icon>
                <Back/>
              </el-icon>
            </div>
          </div>
          <div v-if="percentage === 0">
            <div class="create-number">
              My email address is
              <span style="position: relative">
                <el-input v-model="emailInput" placeholder="email address"/>
                <span class="tip" v-if="emailInput === ''">*</span>
              </span>
              . I can confirm it and I'm allowed to use it.
            </div>
            <div class="create-rule">
              By clicking Continue, I accept the <a>Terms of Use</a> and
              <a>Privacy Policy</a>
            </div>
            <div class="remind-box" v-if="!isValidEmail">
              <div class="remind-title">
                <img :src="icon_info"/> <span>Reminder</span>
              </div>
              <div class="remind-tip">* Fill out the empty field.</div>
            </div>
            <el-button
                class="verify-btn"
                type="primary"
                :disabled="(!isValidEmail || emailInput === '') || initializeSignUpWizardDisabled"
                @click="increase()"
            >
              Continue
            </el-button>
          </div>
          <!-- <div v-if="percentage === 15">
            <div class="create-number" style="line-height: 48px;">
              We're sent an activation link to your email
              <span style="border-bottom: 2px solid;padding-bottom: 5px;" class="email-input"
              >&nbsp;&nbsp;{{ emailInput }}&nbsp;&nbsp;</span>
              <br>
              Please check your inbox to continue.
            </div>

            <el-button
                class="verify-btn"
                style="margin-top: 203px !important;"
                type="primary"
                :disabled="(!isValidEmail || emailInput === '') || initializeSignUpWizardDisabled"
                @click="increase()"
            >
              Continue
            </el-button>
          </div> -->

          <div v-if="percentage === 20">
            <div class="create-number" style="line-height: 48px;">
              I received a single-use code on my email code ending.
              <br>
              Here it is:
              <span style="position: relative">
                <el-input v-model="emailCode" placeholder="000 000" :maxlength="6" @input="validateInput"/>
                <span class="tip" v-if="emailCode === ''">*</span>
              </span>
            </div>
            <div class="remind-box" v-if="!isValidPhone">
              <div class="remind-title">
                <img :src="icon_info"/> <span>Reminder</span>
              </div>
<!--              <div class="remind-tip">* Fill out the empty field.</div>-->
              <div class="remind-tip">
                * Please enter the correct email code
              </div>
            </div>
            <el-button
                class="verify-btn"
                type="primary"
                :disabled="emailCode.length < 6 || emailConfirmedDisabled"
                @click="emailConfirmed()"
            >
              Continue
            </el-button>
          </div>


          <div v-if="percentage === 40">
            <div class="create-number">
              My phone number is
              <span style="position: relative">
                <el-input v-model="phoneInput" placeholder="+00 000 000 000"/>
                <span class="tip" v-if="phoneInput === ''">*</span>
              </span>
              . I'll use it whenever I log in to COINBYTEP2P.
            </div>
            <div class="remind-box" v-if="!isValidPhone">
              <div class="remind-title">
                <img :src="icon_info"/> <span>Reminder</span>
              </div>
              <div class="remind-tip">* Fill out the empty field.</div>
              <div class="remind-tip">
                * Please enter the correct phone number
              </div>
            </div>
            <el-button
                class="verify-btn"
                type="primary"
                :disabled="(!isValidPhone || phoneInput === '') || phoneNumberInputDisabled"
                @click="phoneNumberInput()"
            >
              Continue
            </el-button>
          </div>

          <!-- <div v-if="percentage === 75">
            <div class="create-number">
              My phone number is
              <span style="text-decoration: underline"
              >&nbsp;&nbsp;{{ phoneInput }}&nbsp;&nbsp;</span
              >.
              I'll use it whenever I log in to COINBYTEP2P.
            </div>

            <el-button
                class="verify-btn"
                type="primary"
                :disabled="(!isValidPhone || phoneInput === '') || phoneNumberInputDisabled"
                @click="phoneNumberInput()"
            >
              Continue
            </el-button>
          </div> -->

          <div v-if="percentage === 60">
            <div class="create-number" style="line-height: 48px;">
              I received a single-use code on my phone number ending with *{{ phoneInput.slice(-2) }}.<br />
              Here it is:
              <span style="position: relative">
                <el-input v-model="smsCode" placeholder="000 000" :maxlength="6" @input="validateInput" />
                <span class="tip" v-if="smsCode === ''">*</span>
              </span>
            </div>
            <div class="remind-box" v-if="!smsCode">
              <div class="remind-title" >
                <img :src="icon_info"/> <span>Reminder</span>
              </div>
              <div class="remind-tip">* Fill out the empty field.</div>
              <div class="remind-tip">
                * Please enter the correct single-use code
              </div>
            </div>
            <el-button
                class="verify-btn"
                style="margin-top: 100px !important;"
                type="primary"
                :disabled="smsCode.length < 6 || phoneConfirmedDisabled"
                @click="phoneConfirmed()"
            >
              Continue
            </el-button>
          </div>

          <div v-if="percentage === 80">
            <div class="create-number">
              Here is my personal passcode
              <span style="position: relative">
                <el-form style="display: inline-block;" :model="passwordForm" ref="passwordFormRef" :rules="passwordFormRules">
                  <el-form-item prop="password">
                    <el-input
                        v-model="passwordForm.password"
                        placeholder="00000000"
                        type="password"
                        @input="validatePassword"
                    />
                  </el-form-item>
                </el-form>
                <span class="tip" v-if="passwordInput === ''">*</span>
              </span>
            </div>
            <div class="remind-box" v-if="passwordInput === '' || !isPasswordValid">
              <div class="remind-title">
                <img :src="icon_info"/> <span style="font-weight: 500">Reminder</span>
              </div>
              <div class="remind-tip">* Fill out the empty field.</div>
              <div class="remind-tip">
                * 8-32 characters long (includ at leate 1 lowercase character, 1 uppercase character, 1 number)
              </div>
            </div>
            <el-button
                class="verify-btn"
                style="margin-top: 52px !important;"
                type="primary"
                :disabled="passwordForm.password.length < 8 || !isPasswordValid"
                @click="successContinue(passwordFormRef)"
            >
              Continue
            </el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <Footer v-if="windowWidth > 769"/>
    <FooterMobile v-if="windowWidth <= 769"/>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  reactive,
  onUnmounted,
  onMounted,
  watchEffect,
  computed,
} from "vue";
import Header from "../../layout/Header/Header.vue";
import FooterMobile from "../../layout/Footer/FooterMobile.vue";
import Footer from "../../layout/Footer/Footer.vue";
import GetButton from "../../components/GetButton.vue";

import icon_info from "../../assets/image/icon_info.svg";
import login_eye_off from "../../assets/home/login_eye_off.svg";
import login_email from "../../assets/home/login_email.svg";
import login_telegram from "../../assets/home/login_telegram.svg";
import twitter from "../../assets/home/twitter.png";
import login_google from "../../assets/home/login_google.svg";
import login_eye_view from "../../assets/wallet/overview_eye.png";
import {Back} from "@element-plus/icons";

import {initializeSignUpWizard, signUp, choosePer, emailVefify, phoneSignup, phoneVefify} from "../../api/user";

import {useFingerprintStore} from "../../store/fingerprint";
import {ElMessage, FormInstance, FormRules} from "element-plus";
import {useRouter, useRoute} from "vue-router";
import {useI18n} from "vue-i18n";

import {useUserInfoStore} from "../../store/user";
import {storeToRefs} from "pinia";

const userInfoStore = useUserInfoStore();

const router = useRouter();

const route = useRoute();

const type: any = ref('');
onMounted(() => {
  console.log(route.query);
  if(route.query.type) {
    type.value = route.query.type;
  }
})

const {t} = useI18n();


const fingerprintStore = useFingerprintStore();

const activeSign = ref("1");
const number = ref("");
const numberSelect = ref("+61");
const areas = [
  {label: "Australia", value: "+61"},
  {label: "United States", value: "+1"},
];
const filterMethod = (query: string, option: any) => {
  return (
      option.label.toLowerCase().indexOf(query.toLowerCase()) >= 0 ||
      option.value.toLowerCase().indexOf(query.toLowerCase()) >= 0
  );
};
const canContinue = ref(false);
const emailInput = ref("");
const phoneInput = ref("");
const smsCode = ref("");
const emailCode = ref("");
const validateInput = () => {
  // 移除非数字字符
  emailCode.value = emailCode.value.replace(/\D/g, '');
  // 确保只有最多六个数字
  if (emailCode.value.length > 6) {
    emailCode.value = emailCode.value.slice(0, 6);
  }
};
const passwordInput = ref("");
// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/; //至少一个符号
// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,32}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*()\-_=+{}[\]|;:'",.<>/?]{8,32}$/;

const isPasswordValid = computed(() => {
  const password = passwordForm.value.password;
  return password.length >= 8 && password.length <= 32 && passwordRegex.test(password);
});

const validatePassword = () => {
  if (!isPasswordValid.value) {
    // ElMessage.error(
    //     "Password must be 8-32 characters long and include at least 1 lowercase character, 1 uppercase character, 1 number, and 1 symbol."
    // );
  }
};

const token1 = reactive({
  token: ''
})
const token2 = reactive({
  token: ''
})

const EMAIL_REGEX = /\S+@\S+\.\S+/;
const CHINESE_REGEX = /[\u4E00-\u9FFF\u3400-\u4DFF\uF900-\uFAFF]/;
// const PHONE_REGEX = /^\+\d{2} \d{3} \d{3} \d{3}$/;
const PHONE_REGEX = /^\+(?:[0-9] ?){6,14}[0-9]$/;
const isValidEmail = computed(() => {
  const email = emailInput.value;
  return !CHINESE_REGEX.test(email) && EMAIL_REGEX.test(email);
});
const isValidPhone = computed(() => {
  return PHONE_REGEX.test(phoneInput.value);
});
const toConfirmEmail = () => {
  percentage.value = 15;
}

const registeredEmails = ref<string[]>([]);
const isEmailVerified = ref(false);
const resetEmailRegistration = () => {
  const email = emailInput.value.toLowerCase(); // 获取用户输入的邮箱并转换为小写形式
  const index = registeredEmails.value.findIndex((registeredEmail) => registeredEmail.toLowerCase() === email);
  if (index !== -1) {
    registeredEmails.value.splice(index, 1);
  }
};
const initializeSignUpWizardDisabled = ref(false);
const increase = () => {
  if (isValidEmail.value) {
    const email = emailInput.value.toLowerCase(); // 将输入的邮箱转换为小写形式

    // if (isEmailVerified.value) {
    //   // 如果邮箱已完成手机验证，则无需再次验证
    //   percentage.value = 20;
    //   registeredEmails.value.push(email); // 将邮箱添加到已注册邮箱数组中
    //   console.log('aaaaa');
    // } else {
    initializeSignUpWizardDisabled.value = true;
    initializeSignUpWizard({
      email: email, // 使用小写形式的邮箱
    })
        .then((res: any) => {
          initializeSignUpWizardDisabled.value = false;
          if (res.data && (res.status === 200 || res.status === 202)) {
            if (res.data.code === 9001) {
              ElMessage({message: "Email has been registered", type: "error"});
            } else {
              percentage.value = 20;
              registeredEmails.value.push(email); // 如果成功注册，将邮箱添加到已注册邮箱数组中
            }
          } else {
            ElMessage({message: "Please try again later.", type: "error"});
          }
        })
        .catch((err) => {
          initializeSignUpWizardDisabled.value = false;
          ElMessage({message: "Please try again later.", type: "error"});
        });
  }
};
const emailConfirmedDisabled = ref(false);
const emailConfirmed = () => {
  resetEmailRegistration(); // 在返回上一步时重置未完成手机验证的邮箱
  isEmailVerified.value = false; // 在返回上一步时将邮箱验证状态重置为未完成
  emailConfirmedDisabled.value = true;
  emailVefify({
    code: emailCode.value,
    email: emailInput.value // 这是用户输入的email
  }).then((res: any) => {
    emailConfirmedDisabled.value = false;
    if (res.data && (res.status === 200 || res.status === 202)) {
      // 如果成功，你的服务器应该已经发送了验证邮件到用户的邮箱
      if (res.data.code === 1) {
        token1.token = res.data.data.token;
        percentage.value = 40;
        isEmailVerified.value = true; // 邮箱验证完成，将标志位设置为true
      } else {
        ElMessage({message: "Email code not correct", type: "error"});
      }
    } else {
      ElMessage({message: "Please try again later.", type: "error"});
    }
  }).catch((err) => {
    emailConfirmedDisabled.value = false;
    ElMessage({message: "Please try again later.", type: "error"});
  });
};

const registeredPhoneNumbers = ref<string[]>([]);
const isPhoneVerified = ref(false);
const phoneNumberEntered = ref(false); // 新增一个标志来表示手机号已输入但未验证

const resetPhoneRegistration = () => {
  const phoneNumber = phoneInput.value;
  const index = registeredPhoneNumbers.value.indexOf(phoneNumber);
  if (index !== -1) {
    registeredPhoneNumbers.value.splice(index, 1);
  }
};
const phoneNumberInputDisabled = ref(false);
const phoneNumberInput = () => {
  if (isValidPhone.value) {
    const phoneNumber = phoneInput.value;

    // if (isPhoneVerified.value) {
    //   console.log('phone number');
    //   percentage.value = 60;
    //   registeredPhoneNumbers.value.push(phoneNumber);
    // } else {
    phoneNumberEntered.value = true; // 标记手机号已输入但未验证
    phoneNumberInputDisabled.value = true;
    phoneSignup({
      phone: phoneNumber,
    })
        .then((res: any) => {
          phoneNumberInputDisabled.value = false;
          if (res.data && (res.status === 200 || res.status === 202)) {
            if (res.data.code === 9002) {
              ElMessage({ message: "Phone number has been registered", type: "error" });
            } else {
              percentage.value = 60;
              registeredPhoneNumbers.value.push(phoneNumber);
            }
          } else {
            ElMessage({ message: "Please try again later.", type: "error" });
          }
        })
        .catch((err) => {
          phoneNumberInputDisabled.value = false;
          ElMessage({ message: "Please try again later.", type: "error" });
        });
    
  }
};

const toConfirmPhone = () => {
  if (isValidPhone.value) {
    const phoneNumber = phoneInput.value;

    if (!isPhoneVerified.value && registeredPhoneNumbers.value.includes(phoneNumber)) {
      ElMessage({ message: "Phone number has already been registered", type: "error" });
    } else {
      percentage.value = 60;
    }
  }
};
const phoneConfirmedDisabled = ref(false);
const phoneConfirmed = () => {
  if (!phoneNumberEntered.value) {
    // 如果手机号没有输入，不允许进入下一步
    ElMessage({ message: "Please enter a phone number first.", type: "error" });
    return;
  }
  phoneConfirmedDisabled.value = true;
  phoneVefify({
    code: smsCode.value,
    phone: phoneInput.value,
    token: token1.token
  }).then((res: any) => {
    phoneConfirmedDisabled.value = false;
    if (res.data && (res.status === 200 || res.status === 202)) {
      if (res.data.code === 1) {
        token2.token = res.data.data.token;
        percentage.value = 80;
        isPhoneVerified.value = true;
      } else {
        ElMessage({ message: "The phone verification code is incorrect.", type: "error" });
      }
    } else {
      ElMessage({ message: "Please try again later.", type: "error" });
    }
  }).catch((err) => {
    phoneConfirmedDisabled.value = false;
    ElMessage({ message: "Please try again later.", type: "error" });
  });
};
const phoneContinue = () => {
  if (isValidPhone.value) {
    canContinue.value = true;
    percentage.value += 15;
    if (percentage.value > 100) {
      percentage.value = 0;
    }
  }
};

// :model="passwordForm" ref="passwordFormRef" :rules="passwordFormRules
const passwordForm = ref({
  password: ''
});
const passwordFormRef = ref<FormInstance>();
const passwordFormRules = ref<FormRules>({
  password: [
    { validator: passValid, trigger: 'change' }
  ]
})
function passValid(rule: any, value: any, callback: any) {
  console.log(value);
  let correctPass = passRule.value.find((v) => !value.match(v.rule));
  if (correctPass) {
    callback(new Error(correctPass.message));
  } else {
    callback()
  }
}
const successContinueDisabled = ref(false);
const successContinue = async (formEl: FormInstance | undefined) => {
  if(!formEl) return;
  const valid = await formEl.validate(valid => valid);
  if(!valid) return;
  successContinueDisabled.value = true;
  signUp({
    email: emailInput.value,
    phone: phoneInput.value,  // 这是用户输入的email
    token: token2.token,
    pass_word: passwordForm.value.password,
    type: type.value
  }).then((res: any) => {
    successContinueDisabled.value = false;
    if (res.data && (res.status === 200 || res.status === 202)) {
      // 如果成功，你的服务器应该已经发送了验证邮件到用户的邮箱
      if (res.data.code === 9001) {
        ElMessage({message: "Count has been registered", type: "error",});
      } else {
        userInfoStore.updateUserInfo(res.data.data);
        percentage.value = 100;
        ElMessage({message: "Registration successful.", type: "success",});
        router.push("/kyc?type=" + type.value);
        console.log(type.value,'999999999999999999999999999999999')
      }
    } else {
      ElMessage({message: "Please try again later.", type: "error",});
    }
  }).catch((err) => {
    successContinueDisabled.value = false;
    ElMessage({message: "Please try again later.", type: "error",});
  });
};

const currentStep = ref(1);
const email = ref("");
const password = ref("");
const optional = ref("");
const checked = ref(false);
const text = ref("Sign up");
const isShowPass = ref(false);
const showPassWord = () => {
  isShowPass.value = !isShowPass.value;
};
const passRule = ref([
  {
    rule: /^.{8,32}$/,
    message: "Password length 8 to 32.",
  },
  {
    rule: /^(?=.*[a-z]).*$/,
    message: "Password must have at least one lowercase character.",
  },
  {
    rule: /^(?=.*[A-Z]).*$/,
    message: "Password must have at least one uppercase character.",
  },
  {
    rule: /^(?=.*\d).*$/,
    message: "Password must be at least one number.",
  },
  // {
  //   rule : /^(?=.*[@$!%*?&]).*$/,
  //   message : "Password has at least one symbol."
  // },
]);
const passwordConditions = reactive({
  length: false,
  lowercase: false,
  uppercase: false,
  number: false,
});

watchEffect(() => {
  passwordConditions.length = !!password.value.match(/^.{8,32}$/);
  passwordConditions.lowercase = !!password.value.match(/^(?=.*[a-z]).*$/);
  passwordConditions.uppercase = !!password.value.match(/^(?=.*[A-Z]).*$/);
  passwordConditions.number = !!password.value.match(/^(?=.*\d).*$/);
});

const windowWidth = ref(window.document.body.offsetWidth);
onMounted(() => {
  window.addEventListener("resize", resetWidth);
});
onUnmounted(() => {
  window.removeEventListener("resize", resetWidth);

});
const regUUID = ref("");
// 进度条
const percentage = ref(0);
const customColor = ref("#01c19a");

function decreasePercentage() {
  if (percentage.value >= 15) {
    percentage.value -= 20;
  }
}

onMounted(() => {

  // initializeSignUpWizard({
  //   url: "https://my.b2bdemo-accounting.com/register/{registration}/{code}",
  //   utm: {
  //     referral: "",
  //     uri: "https://my.b2bdemo-accounting.com/en/register",
  //   },
  // })
  //   .then((res: any) => {
  //     if ((res.data && res.data.code === 200) || res.data.code === 202) {
  //       signUp({ wizard_id: 13, uuid: res.data.uuid })
  //         .then((regRes) => {
  //           if (regRes.status === 200 || regRes.status === 202) {
  //             regUUID.value = regRes.data.uuid;
  //           } else {
  //             ElMessage({
  //               message: "Please try again later.",
  //               type: "error",
  //             });
  //           }
  //         })
  //         .catch((err) => {
  //           ElMessage({
  //             message: "Please try again later.",
  //             type: "error",
  //           });
  //         });
  //     } else {
  //       ElMessage({
  //         message: "Please try again later.",
  //         type: "error",
  //       });
  //     }
  //   })
  //   .catch(() => {
  //     ElMessage({
  //       message: "Please try again later.",
  //       type: "error",
  //     });
  //   });
});

function resetWidth() {
  windowWidth.value = window.document.body.offsetWidth;
}

const options = ref([
  {
    value: "1",
    label: t("messages.sign.mobile"),
  },
  {
    value: "2",
    label: t("messages.sign.email"),
  },
]);
// const handleToSignUp = () => {
//   let correctPass = passRule.value.find((v) => !password.value.match(v.rule));
//   if (correctPass) {
//     ElMessage({
//       message: correctPass.message,
//       type: "error",
//     });
//     return;
//   }
//   signUp({
//     // wizard_id: 13,
//     // uuid: regUUID.value,
//     email: email.value,
//   }).then((res: any) => {
//     console.log(res.data);
//   });
// };
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
  min-height: calc(100vh - 20px);
  background: #ffffff;
  padding: 0 70px;
  border-bottom: 1px solid #2e3945;
  @media (max-width: 768px) {
    padding: 0 20px;
    min-height: calc(100vh - 92px);
  }

  .sign-title {
    display: flex;
    justify-content: space-between;

    .previous-btn {
      margin-top: 56px;
      font-size: 32px;
    }
  }

  .create-title {
    margin-top: 56px;
    font-size: 36px;
    color: #060606;
    line-height: 44px;
    font-weight: 600;
  }

  .create-number {
    font-size: 32px;
    color: #060606;
    line-height: 38px;
    margin-top: 65px;
    border: 1px solid transparent;
    @media (max-width: 768px) {
      font-size: 26px;
      display: block;
    }

    .email-input {
      white-space: pre-wrap;
      word-wrap: break-word;
    }

    .tip {
      color: #f15958;
      position: absolute;
      top: -5px;
      font-size: 14px;
    }
  }

  .create-rule {
    margin-top: 45px;
    font-size: 24px;
    color: #010000;
    line-height: 29px;

    a {
      color: #01c19a;
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .remind-box {
    margin-top: 80px;
    font-size: 18px;
    color: #060606;
    line-height: 23px;

    .remind-title {
      span {
        margin-left: 9px;
      }
    }

    .remind-tip {
      margin-top: 18px;
    }
  }

  .verify-btn {
    font-size: 20px;
    border-radius: 8px;
    padding: 16px 131px;
    margin-top: 100px;
    height: 60px;
  }
}

:deep() {
  .el-select-dropdown {
    min-width: 358px !important;
  }

  .el-progress__text {
    display: none;
  }

  .el-progress-bar__outer {
    background-color: #fff !important;
    border-radius: 0;
  }

  .el-input {
    width: 339px; //mark ref
    @media (max-width: 768px) {
      width: 95%;
    }
  }

  .el-input__wrapper {
    border-radius: 0;
    box-shadow: none;
    border-bottom: 1px solid #060606;
  }

  .el-input__inner {
    color: #000;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    height: 35px;
    padding-bottom: 5px;
    font-family: Helvetica;
  }

  .el-button.is-disabled,
  .el-button.is-disabled:focus,
  .el-button.is-disabled:hover {
    background-color: #f7f7f7;
    color: #bdbdbd;
    border-color: #f7f7f7;
  }

  .el-form-item.is-error .el-input__wrapper {
    box-shadow: none;
  }
}
</style>
