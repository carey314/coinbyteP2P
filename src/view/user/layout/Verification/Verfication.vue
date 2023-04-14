<template>
  <div>
    <div class="verify-title">{{ $t("messages.user.verify_account") }}</div>
    <div class="verify-msg">
      {{ $t("messages.user.verify_tip") }}
    </div>
    <div class="verify-card">
      <el-row :gutter="20">
        <el-col :span="12" :xs="24">
          <el-card>
            <div class="card-info">
              <div class="info-image">
                <img :src="usercenter_verification_person" />
              </div>
              <div class="info-text">
                <div class="text-title">{{ $t("messages.user.verify_Individual") }}</div>
                <div class="text-msg">
                  {{ $t("messages.user.verify_Info") }}
                </div>
              </div>
            </div>
            <el-divider style="margin-left: -30px; width: 1000px" />

            <div class="card-link">
              <router-link to="/" style="color: #01c19a; text-decoration: none">
                <div class="link-text">{{ $t("messages.user.continue") }}</div>
                <el-icon><Right /></el-icon>
              </router-link>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12" :xs="24" class="xs">
          <el-card>
            <div class="card-info">
              <div class="info-image">
                <img :src="usercenter_verification_cor" />
              </div>
              <div class="info-text">
                <div class="text-title">{{ $t("messages.user.verify_Corporate") }}</div>
                <div class="text-msg">
                  {{ $t("messages.user.verify_Company") }}
                </div>
              </div>
            </div>
            <el-divider style="margin-left: -30px; width: 1000px" />

            <div class="card-link">
              <router-link to="/" style="color: #01c19a; text-decoration: none">
                <div class="link-text">{{ $t("messages.user.continue") }}</div>
                <el-icon><Right /></el-icon>
              </router-link>
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
import usercenter_verification_person from "../../../../assets/home/usercenter_verification_person.png";
import usercenter_verification_cor from "../../../../assets/home/usercenter_verification_cor.png";
</script>

<style scoped lang="scss">
.verify-title {
  margin-top: 39px;
  font-size: 26px;
  color: #000000;
  line-height: 32px;
  @media (max-width: 768px) {
    margin-top: 0px;
  }
}
.verify-msg {
  margin-top: 10px;
  width: 550px;
  height: 32px;
  background-color: #effffc;
  font-size: 14px;
  color: #01c19a;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: auto;
  }
}
.verify-card {
  margin-top: 26px;
  :deep(.el-card__body) {
    padding: 37px 30px 17px 30px;
    @media (max-width: 780px) {
      padding: 30px 15px 17px 15px;
    }
  }
  .xs {
    @media (max-width: 768px) {
      margin-top: 22px;
    }
  }
  .card-info {
    display: flex;
    .info-image {
      width: 51px;
      height: auto;
      margin-top: -22px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      @media (max-width: 500px) {
        width: 85px;
      }
    }
    .info-text {
      margin-left: 17px;

      .text-title {
        font-size: 20px;
        color: #000000;
        line-height: 25px;
      }
      .text-msg {
        margin-top: 8px;
        font-size: 14px;
        color: #878787;
        line-height: 16px;
      }
    }
  }
  .card-link {
    .link-text {
      float: left;
      margin-right: 5px;
    }
  }
}
</style>
