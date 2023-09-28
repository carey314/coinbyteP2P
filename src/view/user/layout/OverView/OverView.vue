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
              <!-- {{
                userInfo && userInfo.email?.slice(0, 2) + "***" + userInfo.email?.slice(userInfo.email?.indexOf("@"))
              }} -->
              <!-- <img :src="myprofile_edit" style="margin-left: 8px;cursor: pointer" @click=openPasswordDialog /> -->
              <el-dialog
                  class="inner-dialog"
                  v-model="passwordDialog"
                  style="padding: 0 10px;"
                  title="Enter Password"
                  append-to-body
                  width="448px"
              >
                <template #header>
                  <div style="font-weight: 600; font-size: 22px">Enter Password</div>
                </template>
                <div class="divider"></div>
                <el-form
                    ref="passwordForm"
                    :model="passwordFormData"
                    :rules="passwordFormRules"
                    label-width="140px"
                    style="margin-top: 15px"
                >
                  <el-form-item label="Password" prop="password">
                    <el-input type="password" v-model="passwordFormData.password" />
                  </el-form-item>
                  <el-form-item label="New Email" prop="newEmail">
                    <el-input v-model="passwordFormData.newEmail"/>
                  </el-form-item>
                </el-form>
                <el-button type="primary" @click="submitPasswordForm(passwordForm)">Submit Password</el-button>
              </el-dialog>
              <el-dialog
                  class="inner-dialog"
                  v-model="openEmailDialog"
                  style="padding: 0 10px;"
                  title="Change Email"
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
                  <el-form-item label="Verification Code" prop="verificationCode">
                    <el-input v-model="emailFormData.verificationCode"/>
                  </el-form-item>
                  <el-form-item style="margin-left: 0 !important;">
                    <el-button
                        class="send-code-btn"
                        type="primary"
                        @click="submitEmailForm"
                        :disabled="emailFormData.verificationCode === ''"
                    >
                      Change email
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
              <div style="display: flex; gap: 5px; align-items: center;">
                {{
                  userInfo && userInfo.email?.slice(0, 2) + "*".repeat(userInfo.email?.indexOf("@") - 2) + userInfo.email?.slice(userInfo.email?.indexOf("@"))
                }}
              <div class="info-count">
                <!-- {{ userInfo && userInfo.phone.maskedPhone }} -->
                <img class="verify-img" :src="registered_icon"/>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div class="user-info clearfloat">
          <div class="info-image">
            <img :src="usercenter_security_mobile" style="width: 50px"/>
          </div>
          <div class="info-text">
            <div class="info-name profile-title">{{ $t('messages.user.overview_Phone') }}</div>
            <div style="display: flex; gap: 5px; align-items: center;">
              {{ userInfo && userInfo.phone?.slice(0, 2) + "*".repeat(userInfo.email?.indexOf("@") - 2)}}
              <div class="info-count">
                <!-- {{ userInfo && userInfo.phone.maskedPhone }} -->
                <img class="verify-img" :src="registered_icon"/>
              </div>
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
                <!-- <img :src="usercenter_icon_security"/> -->
                <img :src="usercenter_icon_bankaccount"/>
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
              <!-- <div class="bottom-tip">{{ $t('messages.user.Security_features') }}: 4</div> -->
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
                <div class="tip-icon" v-if="!validKycBuy">
                  <img :src="dropdown_usercenter_unverified"/>
                </div>
                <div v-else>
                  <img :src="dropdown_usercenter_verified"/>
                </div>
                <div class="tip-text" v-if="!validKycBuy">
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
                <!-- <img :src="usercenter_icon_bankaccount"/> -->
                <img :src="usercenter_icon_preferences"/>
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
                <img :src="usercenter_icon_security"/>
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
import {getProfile, verifyPassword, updateEmail} from "../../../../api/user";
import {storeToRefs} from "pinia";
import {ElMessage, FormInstance} from 'element-plus';

const userInfoStore = useUserInfoStore();
const {userInfo, validKycBuy} = storeToRefs(userInfoStore);

function copyToClipboard() {
  const value = userInfo.value && userInfo.value.ID;
  if (value) {
    navigator.clipboard.writeText(value);
    ElMessage.success('Copied to clipboard!');
  } else {
    ElMessage.error('Login failed. Please try again later!');
  }
}
onMounted(() => {
  if (userInfoStore.isLogin) {
    getProfile().then((res) => {
      userInfoStore.updateUserInfo(res.data.data);
    });
  }
});
function openPasswordDialog() {
  passwordFormData.password = ""; // 清空密码
  passwordDialog.value = true; // 打开对话框
}
// 密码验证
const passwordDialog = ref(false);
const openEmailDialog = ref(false);
const passwordFormData = reactive({
  password: "",
  newEmail: "", // 新邮箱地址
  token: "", // 保存返回的 token
});
const passwordFormRules = {
  password: [
    { required: true, message: "Please enter password", trigger: "blur" },
    {
      min: 8,
      max: 32,
      message: "Password must be between 8 and 32 characters",
      trigger: "blur",
    },
    {
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      message: "At least one lowercase letter, one uppercase letter, and one number",
      trigger: "blur",
    },
  ],
  newEmail: [
    { type: "email", message: "Invalid email format", trigger: "blur" }
  ]
};

const passwordForm = ref<FormInstance>();

// function openEmailDialog() {
//   // emailFormData.newEmail = ""; // 清空新邮箱
//   // emailFormData.verificationCode = ""; // 清空验证码
//   changeEmailDialog.value = true; // 打开对话框
// }
async function submitPasswordForm(formEl: FormInstance | undefined) {
  if (!formEl) return;
  const valid = await formEl.validate((valid) => valid);
  if (!valid) return;
  // 调用 API 校验密码
  const res = await verifyPassword(passwordFormData.password, passwordFormData.newEmail);
  if (res.data.msg === 'success') {
    console.log(res.data,'=======')
    passwordFormData.token = res.data.data.token; // 保存返回的 token
    passwordDialog.value = false;
    openEmailDialog.value = true;
  } else if(res.data.msg === 'email in use'){
      ElMessage.error('Error: Email in use!');
    }
  else if(res.data.msg === 'wrong pass word'){
    ElMessage.error('Error: Wrong password!');
  }
  else {
      ElMessage.error('Incorrect password. Please try again!');
    }
}

// 邮箱
const emailForm = ref<FormInstance | null>(null);
const emailFormData = reactive({
  verificationCode: ""
});
const emailFormRules = {
  verificationCode: [
    { required: true, message: "Please enter verification code", trigger: "blur" }
  ]
};
const changeEmailDialog = ref(false);

async function submitEmailForm() {
  const valid = await emailForm.value?.validate();
  if (!valid) return;

  // 调用 API 更新邮箱，使用您的实际接口
  const res = await updateEmail({
    code: emailFormData.verificationCode,
    token: passwordFormData.token // 使用保存的 token
  });
  if (res.status === 200) {
    switch (res.data.code) {
      case 9001:
        ElMessage.error('verify code not right!');
        break
      case 1:
        ElMessage.success('Email updated successfully!');
        userInfo.value.email = passwordFormData.newEmail; // 更新邮箱
        openEmailDialog.value = false;
        break
      default:
        ElMessage.error('Failed to update email. Please try again later!');
        break
    }
  } else {
    ElMessage.error('Failed to update email. Please try again later!');
  }
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
          font-size: 14px;
          margin-top: -3px;
        }
      }

      .bottom-tip {
        display: flex;
        font-size: 14px;
        // @media (max-width: 769px) {
        //   width: 123px;
        // }
        // .tip-icon {
        //   //margin-right: 8px;
        // }

        .tip-text {
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
