<template>
  <div>
    <div class="bank-ccount-title">Bank account</div>
    <div class="bank-ccount-msg">
      Deposit AUD instantly into your Coinbyte account from 100+ NPP-enabled
      banks in Australia via PayID / Osko.
    </div>
    <div class="bank-ccount-card">
      <el-row :gutter="20">
        <el-col :span="12" :xs="24">
          <el-card>
            <div class="card-info">
              <div class="info-image">
                <img :src="usercenter_verification_person" />
              </div>
              <div class="info-text">
                <div class="text-title">Individual account</div>
                <div class="text-msg">
                  Trade as an individual user and increase your limits by
                  providing personal info
                </div>
              </div>
            </div>
            <el-divider style="margin-left: -30px; width: 1000px" />

            <div class="card-link">
              <router-link to="/" style="color: #01c19a; text-decoration: none">
                <div class="link-text">Continue</div>
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
                <div class="text-title">Corporate account</div>
                <div class="text-msg">
                  Trade as a company by providing your company info
                </div>
              </div>
            </div>
            <el-divider style="margin-left: -30px; width: 1000px" />

            <div class="card-link">
              <router-link to="/" style="color: #01c19a; text-decoration: none">
                <div class="link-text">Continue</div>
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
.bank-ccount-title {
  margin-top: 39px;
  font-size: 26px;
  color: #000000;
  line-height: 32px;
}
.bank-ccount-msg {
  margin-top: 10px;
  font-size: 14px;
  color: #878787;
  line-height: 16px;
  @media (max-width: 768px) {
    width: auto;
  }
}
.bank-ccount-card {
  margin-top: 26px;
  :deep(.el-card__body) {
    padding: 37px 30px 17px 30px;
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
        height: 35px;
        padding-bottom: 40px;
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
