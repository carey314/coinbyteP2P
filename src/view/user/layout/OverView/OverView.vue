<template>
  <div>
    <el-card class="box-card">
      <div class="card-title overview-title">{{ $t('messages.user.overview_Profile') }}</div>
      <div class="card-user">
        <div class="user-info clearfloat">
          <div class="info-image"><img :src="myprofile_user"/></div>
          <div class="info-text">
            <div class="info-name profile-title">
              <!-- Aar***@hotmail.com -->
<!--              {{ userInfo && userInfo.email }}-->
              {{
                userInfo && userInfo.email?.slice(0, 2) + "***" + userInfo.email?.slice(userInfo.email?.indexOf("@"))
              }}
              <img :src="myprofile_edit" style="margin-left: 8px;cursor: pointer" @click="changeEmailDialog = true"/>
              <el-dialog
                  class="inner-dialog"
                  v-model="changeEmailDialog"
                  style="padding: 0 10px;"
                  title="Inner Dialog"
                  append-to-body
                  width="448px"
              >
                <template #header>
                  <div style="font-weight: 600; font-size: 22px">Change Email</div>
                </template>
                <div class="divider"></div>
                <el-form
                    ref="emailForm"
                    :model="emailFormData"
                    :rules="emailFormRules"
                    label-width="140px"
                    @submit.native.prevent="submitEmailForm"
                    style="margin-top: 15px"
                >
                  <el-form-item label="Current Email">
                    <!-- 使用 userInfo.email 来填充当前邮箱 -->
                    <el-input v-model="userInfo.email" disabled/>
                  </el-form-item>
                  <el-form-item label="New Email" prop="newEmail">
                    <el-input v-model="emailFormData.newEmail"/>
                  </el-form-item>
                  <el-form-item label="Verification Code" prop="verificationCode">
                    <el-input v-model="emailFormData.verificationCode"/>

                  </el-form-item>
                  <el-form-item style="margin-left: 0 !important;">
                    <el-button
                        class="send-code-btn"
                        type="primary"
                        @click="sendVerificationCode"
                        :disabled="emailFormData.newEmail === ''"
                    >
                      {{ sendingCode ? 'Sending...' : 'Send Code' }}
                    </el-button>
                  </el-form-item>
                </el-form>
              </el-dialog>

            </div>
            <div class="info-count">
              <!--              更改渲染的UID时, 需要修改复制功能的值 copyToClipboard-->
              {{ $t('messages.user.overview_UID') }}: {{ userInfo && userInfo.ID }}
              <img :src="myprofile_uid_copy" style="margin-left: 8px;cursor: pointer" @click="copyToClipboard"/>
            </div>
          </div>
        </div>
        <div class="user-info clearfloat">
          <div class="info-image"><img :src="usercenter_email"/></div>
          <div class="info-text">
            <div class="info-name profile-title">{{ $t('messages.user.overview_Email') }}</div>
            <div class="info-count" style="color: #000">
              {{
                userInfo && userInfo.email?.slice(0, 2) + "*".repeat(userInfo.email?.indexOf("@") - 2) + userInfo.email?.slice(userInfo.email?.indexOf("@"))
              }}
            </div>
          </div>
        </div>
        <div class="user-info clearfloat">
          <div class="info-image">
            <img :src="usercenter_security_mobile" style="width: 50px"/>
          </div>
          <div class="info-text">
            <div class="info-name profile-title">{{ $t('messages.user.overview_Phone') }}</div>
            <div class="info-count">
              <!-- {{ userInfo && userInfo.phone.maskedPhone }} -->
              <img class="verify-img" :src="registered_icon"/><span>Verify</span>
            </div>
          </div>
        </div>
      </div>
    </el-card>
    <div class="card-part">
      <el-row :gutter="20">
        <el-col :span="12" :xs="24">
          <el-card class="part-box-card">
            <div class="card-box">
              <div class="card-title overview-title">{{ $t('messages.user.overview_Security') }}</div>
              <div class="card-text content-text">
                {{ $t('messages.user.Security_con') }}
              </div>
              <div class="card-img">
                <img :src="usercenter_icon_security"/>
              </div>
            </div>
            <el-divider style="margin-left: -30px; width: 1000px"/>
            <div class="card-bottom">
              <div class="bottom-link">
                <router-link
                    to="/user/depositFiat"
                    style="color: #01c19a; text-decoration: none"
                >
                  <div class="link-text">{{ $t('messages.user.Security_Manage') }}</div>
                  <el-icon>
                    <Right/>
                  </el-icon>
                </router-link>
              </div>
              <div class="bottom-tip">{{ $t('messages.user.Security_features') }}: 4</div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12" :xs="24" class="xs">
          <el-card class="part-box-card">
            <div class="card-box">
              <div class="card-title overview-title">{{ $t('messages.user.overview_Verification') }}</div>
              <div class="card-text content-text">
                {{ $t('messages.user.Verification_con') }}
              </div>
              <div class="card-img">
                <img :src="usercenter_icon_verification"/>
              </div>
            </div>
            <el-divider style="margin-left: -30px; width: 1000px"/>
            <div class="card-bottom">
              <div class="bottom-link">
                <router-link
                    to="/user/verification"
                    style="color: #01c19a; text-decoration: none"
                >
                  <div class="link-text">{{ $t('messages.user.Verification_Verify') }}</div>
                  <el-icon>
                    <Right/>
                  </el-icon>
                </router-link>
              </div>

              <div class="bottom-tip">
                <div class="tip-icon" v-if="userInfo?.kyc?.status !== 'GREEN'">
                  <img :src="dropdown_usercenter_unverified"/>
                </div>
                <div v-else>
                  <img :src="dropdown_usercenter_verified"/>
                </div>
                <div class="tip-text" v-if="userInfo?.kyc?.status !== 'GREEN'">
                  {{ $t('messages.user.Verification_Unverified') }}
                </div>
                <div class="tip-text" v-else>{{ $t('messages.user.Verification_verified') }}</div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="card-part">
      <el-row :gutter="20">
        <el-col :span="12" :xs="24">
          <el-card class="part-box-card">
            <div class="card-box">
              <div class="card-title overview-title">{{ $t('messages.user.overview_Bank') }}</div>
              <div class="card-text content-text">
                {{ $t('messages.user.Bank_con') }}
              </div>
              <div class="card-img">
                <img :src="usercenter_icon_bankaccount"/>
              </div>
            </div>
            <el-divider style="margin-left: -30px; width: 1000px"/>
            <div class="card-bottom">
              <div class="bottom-link">
                <router-link
                    to="/user/bankaccount"
                    style="color: #01c19a; text-decoration: none"
                >
                  <div class="link-text">{{ $t('messages.user.paid') }}</div>
                  <el-icon>
                    <Right/>
                  </el-icon>
                </router-link>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12" :xs="24" class="xs">
          <el-card class="part-box-card">
            <div class="card-box">
              <div class="card-title overview-title">{{ $t('messages.user.overview_Preferences') }}</div>
              <div class="card-text content-text">
                {{ $t('messages.user.Preferences_con') }}
              </div>
              <div class="card-img">
                <img :src="usercenter_icon_preferences"/>
              </div>
            </div>
            <el-divider style="margin-left: -30px; width: 1000px"/>
            <div class="card-bottom">
              <div class="bottom-link">
                <router-link
                    to="/user/accountstatement"
                    style="color: #01c19a; text-decoration: none"
                >
                  <div class="link-text">{{ $t('messages.user.manage') }}</div>
                  <el-icon>
                    <Right/>
                  </el-icon>
                </router-link>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, reactive, onMounted} from "vue";
import {Right} from "@element-plus/icons-vue";

import myprofile_user from "../../../../assets/wallet/myprofile_user.png";
import registered_icon from "../../../../assets/image/registered_icon.png";
import usercenter_email from "../../../../assets/home/usercenter_email.svg";
import usercenter_security_mobile from "../../../../assets/home/usercenter_security_mobile.svg";
import dropdown_usercenter_verified from "../../../../assets/home/dropdown_usercenter_verified.svg";
import dropdown_usercenter_unverified from "../../../../assets/home/dropdown_usercenter_unverified.svg";
import usercenter_icon_security from "../../../../assets/home/usercenter_icon_security.png";
import usercenter_icon_verification from "../../../../assets/home/usercenter_icon_verification.png";
import usercenter_icon_bankaccount from "../../../../assets/home/usercenter_icon_bankaccount.png";
import usercenter_icon_preferences from "../../../../assets/home/usercenter_icon_preferences.png";
import myprofile_edit from "../../../../assets/wallet/myprofile_edit.svg";
import myprofile_uid_copy from "../../../../assets/wallet/myprofile_uid_copy.svg";

import {useUserInfoStore} from "../../../../store/user";
import {getProfile} from "../../../../api/user";
import {storeToRefs} from "pinia";
import {ElMessage} from 'element-plus';

const userInfoStore = useUserInfoStore();
const {userInfo} = storeToRefs(userInfoStore);

function copyToClipboard() {
  const value = userInfo.value && userInfo.value.ID;
  if (value) {
    navigator.clipboard.writeText(value);
    ElMessage.success('Copied to clipboard!');
  } else {
    ElMessage.error('Login failed. Please try again later!');
  }
}

// console.log("--a-a-a-", userInfo.kyc.status)

onMounted(() => {
  if (userInfoStore.isLogin) {
    getProfile().then((res) => {
      console.log("user info here -----!!!----", res.data.data);
      userInfoStore.updateUserInfo(res.data.data);
      console.log("--a--a-111", userInfo.value)
    });
  }
});
const changeEmailDialog = ref(false);
const sendingCode = ref(false);

const emailFormData = reactive({
  newEmail: "",     // 新邮箱
  verificationCode: "" // 验证码
});

const emailFormRules = {
  newEmail: [
    {required: true, message: "Please enter new email", trigger: "blur"},
    {type: "email", message: "Invalid email format", trigger: "blur"}
  ],
  verificationCode: [
    {required: true, message: "Please enter verification code", trigger: "blur"}
  ]
};

async function submitEmailForm() {
  const valid = await this.$refs.emailForm.validate();
  if (!valid) return;
  // 调用 API 更新邮箱
  const res = await updateEmail(emailFormData.newEmail, emailFormData.verificationCode);
  if (res.success) {
    ElMessage.success('Email updated successfully!');
    userInfo.email = emailFormData.newEmail; // 更新 userInfo 中的邮箱地址
    changeEmailDialog.value = false; // 关闭对话框
  } else {
    ElMessage.error('Failed to update email. Please try again later!');
  }
}

async function sendVerificationCode() {
  if (!emailFormData.newEmail) {
    ElMessage.error('Please enter new email first!');
    return;
  }
  sendingCode.value = true;
  // 调用 API 发送验证码
  const res = await sendCode(emailFormData.newEmail);
  sendingCode.value = false;
  if (res.success) {
    ElMessage.success('Verification code sent!');
  } else {
    ElMessage.error('Failed to send verification code. Please try again later!');
  }
}

function openEmailDialog() {
  emailFormData.newEmail = ""; // 清空新邮箱
  emailFormData.verificationCode = ""; // 清空验证码
  changeEmailDialog.value = true; // 打开对话框
}
</script>

<style scoped lang="scss">
:deep(.el-form-item__label) {
  justify-content: start;
  width: 100% !important;
}
:deep(.el-button.is-disabled, .el-button.is-disabled:focus, .el-button.is-disabled:hover) {
  background-color: #f1f1f1;
  border-color: #f1f1f1;
  width: 100%;
}
:deep(.el-button--primary){
  height: 48px;
  margin-top: 10px;
}
.divider {
  width: 100%;
  height: 1px;
  background-color: #ebebeb;
  margin-top: -20px;
}
:deep(.el-form-item) {
  display: block;
}
:deep(.el-form-item__content) {
  margin-left: 0 !important;
}
:deep(.el-button--primary) {
  width: 100%;
}
.inner-dialog {
  :deep(.el-divider--horizontal) {
    margin: 0 !important;
  }
}
:deep(.el-input){
  height: 48px;
}
:deep(.el-form-item__label) {
  font-size: 16px;
  color: #000000;
  line-height: 19px;
  font-weight: 600;
}

.overview-title {
  font-size: 26px;
  color: #000000;
  line-height: 32px;
}

.profile-title {
  font-size: 16px;
  color: #000000;
  line-height: 18px;
}

.content-text {
  font-size: 14px;
  color: #878787;
  line-height: 16px;
  width: 356px;
  height: 48px;
  @media (max-width: 1400px) {
    width: 70%;
  }
}

:deep(.el-card__body) {
  padding: 30px;
  padding-bottom: 20px;
  border-radius: 5px !important;
  box-shadow: none !important;
  @media (max-width: 769px) {
    padding: 20px;
  }
}

.box-card {
  .card-user {
    margin-top: 16px;
    display: flex;
    @media (max-width: 992px) {
      display: block;
    }

    .user-info {
      flex: 1;
      @media (max-width: 992px) {
        margin-top: 16px;
      }

      .info-image {
        display: flex;
        float: left;
        width: 50px;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      .info-text {
        float: left;
        margin-left: 17px;
        margin-top: 8px;

        .info-count {
          font-size: 12px;
          color: #878787;
          line-height: 14px;
          margin-top: 3px;
          position: relative;

          span {
            font-size: 14px;
            color: #01C19A;
            position: absolute;
            top: 7px;
            left: 22px;
          }

          .verify-img {
            width: 16px;
            height: 18px;
            margin-top: 4px;

            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
        }
      }
    }
  }
}

:deep(.el-divider--horizontal) {
  margin: 18px 0;
}

.card-part {
  margin-top: 22px;

  .xs {
    @media (max-width: 768px) {
      margin-top: 22px;
    }
  }

  .part-box-card {
    .card-box {
      padding-bottom: 10px;

      .card-text {
        margin-top: 6px;
      }

      .card-img {
        float: right;
        width: auto;
        height: 59px;
        margin-top: -70px;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }

    .card-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .bottom-link {
        .link-text {
          display: flex;
          float: left;
          margin-right: 5px;
        }
      }

      .bottom-tip {
        display: flex;
        // @media (max-width: 769px) {
        //   width: 123px;
        // }
        .tip-icon {
          margin-right: 8px;
        }

        .tip-text {
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
