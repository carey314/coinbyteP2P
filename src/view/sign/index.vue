<template>
  <div>
    <Header />
    <el-progress
      :percentage="percentage"
      :color="customColor"
      show-text="none"
    />
    <div class="sign-box">
      <el-row>
        <el-col :span="24" :xs="24">
          <div class="create-title">Account Creation</div>

          <div v-if="percentage === 50">
            <div class="create-number">
              My email address is
              <span style="position: relative">
                <el-input v-model="emailInput" placeholder="email address" />
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
                <img :src="icon_info" /> <span>Reminder</span>
              </div>
              <div class="remind-tip">* Fill out the empty field.</div>
            </div>
            <el-button
              class="verify-btn"
              type="primary"
              :disabled="!isValidEmail || emailInput === ''"
              @click="increase()"
            >
              Continue
            </el-button>
          </div>
          <div v-if="percentage === 100">
            <div class="create-number">
              We're sent an activation link to your email
              <span style="text-decoration: underline" class="email-input"
                >&nbsp;&nbsp;{{ emailInput }}&nbsp;&nbsp;</span
              >
              Please check your inbox to continue.
            </div>

            <el-button
              class="verify-btn"
              type="primary"
              :disabled="!isValidEmail || emailInput === ''"
              @click="successContinue()"
            >
              Continue
            </el-button>
          </div>
          <!-- <div v-if="percentage === 60">
            <div class="create-number">
              My phone number is
              <span style="position: relative">
                <el-input v-model="phoneInput" placeholder="+00 000 000 000" />
                <span class="tip" v-if="phoneInput === ''">*</span>
              </span>
              . I'll use it whenever I log in to COINBYTEP2P.
            </div>
            <div class="remind-box" v-if="!isValidPhone">
              <div class="remind-title">
                <img :src="icon_info" /> <span>Reminder</span>
              </div>
              <div class="remind-tip">* Fill out the empty field.</div>
              <div class="remind-tip">
                * Please enter the correct phone number
              </div>
            </div>
            <el-button
              class="verify-btn"
              type="primary"
              :disabled="!isValidPhone || phoneInput === ''"
              @click="increase"
            >
              Continue
            </el-button>
          </div> -->

          <!-- <div v-if="percentage === 80">
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
              :disabled="!isValidPhone || phoneInput === ''"
              @click="increase"
            >
              Continue
            </el-button>
          </div> -->

          <!-- <div v-if="percentage === 80">
            <div class="create-number">
              I received a single-use code on my phone number ending with *86.
              Here it is:
              <span style="position: relative">
                <el-input v-model="smsCode" placeholder="000 000" />
                <span class="tip" v-if="smsCode === ''">*</span>
              </span>
            </div>

            <el-button
              class="verify-btn"
              type="primary"
              :disabled="!isValidPhone || smsCode === ''"
              @click="phoneContinue"
            >
              Continue
            </el-button>
          </div> -->

          <!-- <div v-if="percentage === 100">
            <div class="create-number">
              Here is my personal passcode
              <span style="position: relative">
                <el-input
                  v-model="passwordInput"
                  placeholder="000 000"
                  type="password"
                />
                <span class="tip" v-if="passwordInput === ''">*</span>
              </span>
            </div>
            <div class="remind-box" v-if="passwordInput === ''">
              <div class="remind-title">
                <img :src="icon_info" /> <span>Reminder</span>
              </div>
              <div class="remind-tip">* Fill out the empty field.</div>
              <div class="remind-tip">
                * Please enter the correct phone number
              </div>
            </div>
            <el-button
              class="verify-btn"
              type="primary"
              :disabled="passwordInput === ''"
              @click="successContinue"
            >
              Continue
            </el-button>
          </div> -->
        </el-col>
      </el-row>
    </div>
    <Footer v-if="windowWidth > 769" />
    <FooterMobile v-if="windowWidth <= 769" />
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

import { initializeSignUpWizard, signUp, choosePer } from "../../api/user";

import { useFingerprintStore } from "../../store/fingerprint";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
const router = useRouter();
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const fingerprintStore = useFingerprintStore();

const activeSign = ref("1");
const number = ref("");
const numberSelect = ref("+61");
const areas = [
  { label: "Australia", value: "+61" },
  { label: "United States", value: "+1" },
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
const passwordInput = ref("");

const EMAIL_REGEX = /\S+@\S+\.\S+/;
// const PHONE_REGEX = /^\+\d{2} \d{3} \d{3} \d{3}$/;
const PHONE_REGEX = /^\+(?:[0-9] ?){6,14}[0-9]$/;
const isValidEmail = computed(() => {
  return EMAIL_REGEX.test(emailInput.value);
});
const isValidPhone = computed(() => {
  return PHONE_REGEX.test(phoneInput.value);
});

const increase = () => {
  if (isValidEmail.value) {
    canContinue.value = true;
    percentage.value += 50;
    if (percentage.value > 100) {
      percentage.value = 100;
    }
  }
};
const phoneContinue = () => {
  if (isValidPhone.value) {
    canContinue.value = true;
    percentage.value += 20;
    if (percentage.value > 100) {
      percentage.value = 0;
    }
  }
};
const successContinue = () => {
  router.push("/signupSuccess");
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
const percentage = ref(50);
const customColor = ref("#01c19a");
// const increase = () => {
//   if (emailInput.value !== "") {
//     canContinue.value = true;
//     percentage.value += 25;
//     if (percentage.value > 100) {
//       percentage.value = 100;
//     }
//   }
// };

onMounted(() => {
  initializeSignUpWizard({
    url: "https://my.b2bdemo-accounting.com/register/{registration}/{code}",
    utm: {
      referral: "",
      uri: "https://my.b2bdemo-accounting.com/en/register",
    },
  })
    .then((res: any) => {
      if ((res.data && res.data.code === 200) || res.data.code === 202) {
        signUp({ wizard_id: 13, uuid: res.data.uuid })
          .then((regRes) => {
            if (regRes.status === 200 || regRes.status === 202) {
              regUUID.value = regRes.data.uuid;
            } else {
              ElMessage({
                message: "Please try again later.",
                type: "error",
              });
            }
          })
          .catch((err) => {
            ElMessage({
              message: "Please try again later.",
              type: "error",
            });
          });
      } else {
        ElMessage({
          message: "Please try again later.",
          type: "error",
        });
      }
    })
    .catch(() => {
      ElMessage({
        message: "Please try again later.",
        type: "error",
      });
    });
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
const handleToSignUp = () => {
  let correctPass = passRule.value.find((v) => !password.value.match(v.rule));
  if (correctPass) {
    ElMessage({
      message: correctPass.message,
      type: "error",
    });
    return;
  }
  signUp({
    wizard_id: 13,
    uuid: regUUID.value,
    email: email.value,
    password: password.value,
    password_confirmation: password.value,
    device_fingerprint: fingerprintStore.fingerprint,
  }).then((res: any) => {
    console.log(res.data);
  });
};
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
    @media (max-width: 768px) {
      font-size: 26px;
      display: block;
  }
  .email-input{
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
    margin-top: 47px;
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
    margin-top: 64px;
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
    width: 40%;
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
  }
  .el-button.is-disabled,
  .el-button.is-disabled:focus,
  .el-button.is-disabled:hover {
    background-color: #f7f7f7;
    color: #bdbdbd;
    border-color: #f7f7f7;
  }
}
</style>
