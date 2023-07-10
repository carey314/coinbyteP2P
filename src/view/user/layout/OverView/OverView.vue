<template>
  <div>
    <el-card class="box-card">
      <div class="card-title overview-title">{{ $t('messages.user.overview_Profile') }}</div>
      <div class="card-user">
        <div class="user-info clearfloat">
          <div class="info-image"><img :src="myprofile_user" /></div>
          <div class="info-text">
            <div class="info-name profile-title">
              <!-- Aar***@hotmail.com -->
              {{ userInfo && userInfo.maskedEmail }}
              <img :src="myprofile_edit" style="margin-left: 8px" />
            </div>
            <div class="info-count">
              <!-- UID:121233443434343 -->
              {{ $t('messages.user.overview_UID') }}:{{ userInfo && userInfo.id }}
              <img :src="myprofile_uid_copy" style="margin-left: 8px" />
            </div>
          </div>
        </div>
        <div class="user-info clearfloat">
          <div class="info-image"><img :src="usercenter_email" /></div>
          <div class="info-text">
            <div class="info-name profile-title">{{ $t('messages.user.overview_Email') }}</div>
            <div class="info-count">{{ userInfo && userInfo.maskedEmail }}</div>
          </div>
        </div>
        <div class="user-info clearfloat">
          <div class="info-image">
            <img :src="usercenter_security_mobile" style="width: 50px" />
          </div>
          <div class="info-text">
            <div class="info-name profile-title">{{ $t('messages.user.overview_Phone') }}</div>
            <div class="info-count">
              {{ userInfo && userInfo.phone.maskedPhone }}
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
                <img :src="usercenter_icon_security" />
              </div>
            </div>
            <el-divider style="margin-left: -30px; width: 1000px" />
            <div class="card-bottom">
              <div class="bottom-link">
                <router-link
                  to="/user/security"
                  style="color: #01c19a; text-decoration: none"
                >
                  <div class="link-text">{{ $t('messages.user.Security_Manage') }}</div>
                  <el-icon><Right /></el-icon>
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
                <img :src="usercenter_icon_verification" />
              </div>
            </div>
            <el-divider style="margin-left: -30px; width: 1000px" />
            <div class="card-bottom">
              <div class="bottom-link">
                <router-link
                  to="/user/verification"
                  style="color: #01c19a; text-decoration: none"
                >
                  <div class="link-text">{{ $t('messages.user.Verification_Verify') }}</div>
                  <el-icon><Right /></el-icon>
                </router-link>
              </div>
              <div class="bottom-tip">
                <div class="tip-icon">
                  <img :src="dropdown_usercenter_unverified" />
                </div>
                <div class="tip-text">{{ $t('messages.user.Verification_Unverified') }}</div>
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
                <img :src="usercenter_icon_bankaccount" />
              </div>
            </div>
            <el-divider style="margin-left: -30px; width: 1000px" />
            <div class="card-bottom">
              <div class="bottom-link">
                <router-link
                  to="/user/bankaccount"
                  style="color: #01c19a; text-decoration: none"
                >
                  <div class="link-text">{{ $t('messages.user.Security_Manage') }}</div>
                  <el-icon><Right /></el-icon>
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
                <img :src="usercenter_icon_preferences" />
              </div>
            </div>
            <el-divider style="margin-left: -30px; width: 1000px" />
            <div class="card-bottom">
              <div class="bottom-link">
                <router-link
                  to="/user/accountstatement"
                  style="color: #01c19a; text-decoration: none"
                >
                  <div class="link-text">{{ $t('messages.user.Security_Manage') }}</div>
                  <el-icon><Right /></el-icon>
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
import { ref, reactive } from "vue";
import { Right } from "@element-plus/icons-vue";

import myprofile_user from "../../../../assets/wallet/myprofile_user.png";
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

import { useUserInfoStore } from "../../../../store/user";
import { storeToRefs } from "pinia";

const userInfoStore = useUserInfoStore();
const { userInfo } = storeToRefs(userInfoStore);
console.log(userInfo.value);
</script>

<style scoped lang="scss">
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
          margin-top: 2px;
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
          margin-top: 2px;
        }
      }
    }
  }
}
</style>
