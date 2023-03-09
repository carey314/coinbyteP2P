<template>
  <div class="overview-page">
    <el-row :gutter="15">
      <el-col :span="16" class="left-box">
        <div class="left-value">
          <div class="value-top">
            Est. total value
            <img :src="overview_eye" />
          </div>
          <div class="value-center">
            <div>₮0.00</div>
            <div>
              <button class="language-chose">
                <img :src="wallet_select_usdt_off" alt="" />
                USDT
                <el-icon style="width: 18px; color: #cbcccf"
                  ><ArrowDown
                /></el-icon>
              </button>
            </div>
          </div>
          <div class="value-bottom">
            <div class="bottom-image"><img :src="icon_wallet" /></div>
            <div class="bottom-title minMainFont">
              Your current equity is zero
            </div>
            <div class="bottom-btn">
              <GetButton class="deposit-btn" type="success" :text="deposit" />
              <GetButton class="buy-btn" :text="buy" />
            </div>
          </div>
        </div>
        <div class="left-assets">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span>My assets</span>
              </div>
            </template>
            <!-- <el-table
              :data="tableData"
              style="width: 100%;"
              :show-header="false"
            >
              <el-table-column width="200">
                <template #default="scope">
                  <div
                    style="
                      display: flex;
                      align-items: center;
                      font-size: 16px;
                      color: #000000;
                    "
                  >
                    <el-icon><timer /></el-icon>
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                  </div>
                </template>
              </el-table-column>

              <el-table-column width="180">
                <div style="font-size: 16px; color: #000000">₮0.00</div>
              </el-table-column>
              <el-table-column>
                <div class="demo-progress">
                  <div class="progress-count">0.00%</div>
                  <el-progress
                    :percentage="0"
                    stroke-width="9"
                    :show-text="false"
                    class="progress-bar"
                  />
                </div>
              </el-table-column>
              <el-table-column
                align="right"
                style="display: flex"
              >
                <template #default="scope">
                  <el-button
                    type="success"
                    @click="handleEdit(scope.$index, scope.row)"
                    >Deposit</el-button
                  >
                  <el-button @click="handleDelete(scope.$index, scope.row)"
                    >More</el-button
                  >
                </template>
              </el-table-column>
            </el-table> -->
            <div class="assets-body">
              <div class="assets-item">
                <div class="assets-icon"><img :src="icon_trading" /></div>
                <div class="item-title">Trading</div>
              </div>
              <div>₮0.00</div>
              <div class="demo-progress">
                <div class="progress-count">0.00%</div>
                <el-progress
                  :percentage="0"
                  stroke-width="9"
                  :show-text="false"
                  class="progress-bar"
                />
              </div>
              <div class="assets-btn">
                <el-button type="success">Deposit</el-button>
                <el-button class="more">More</el-button>
              </div>
            </div>
            <el-divider />
            <div class="assets-body">
              <div class="assets-item">
                <div class="assets-icon"><img :src="icon_trading" /></div>
                <div class="item-title">Earning</div>
              </div>
              <div>₮0.00</div>
              <div class="demo-progress">
                <div class="progress-count">0.00%</div>
                <el-progress
                  :percentage="0"
                  stroke-width="9"
                  :show-text="false"
                  class="progress-bar"
                />
              </div>
              <div class="assets-btn">
                <el-button type="success">Earn</el-button>
                <el-button class="more">Transfer</el-button>
              </div>
            </div>
          </el-card>
        </div>
        <div class="left-recent">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span>Recent transactions</span>
              </div>
            </template>
            <div class="value-bottom">
              <div class="bottom-image"><img :src="wallet_search_none" /></div>
              <div class="bottom-title minMainFont">
                You don't have any transactions yet
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8" class="right-box">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>Assets</span>
            </div>
          </template>
          <div class="value-bottom">
            <div class="bottom-image"><img :src="icon_wallet" /></div>
            <div class="bottom-title minMainFont">
              You don't have any assets yet
            </div>
            <div class="bottom-btn">
              <GetButton class="deposit-btn" type="success" :text="deposit" />
              <GetButton class="buy-btn" :text="buy" />
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { ArrowDown, Timer } from "@element-plus/icons-vue";
import GetButton from "../../../components/GetButton.vue";

import overview_eye from "../../../assets/wallet/overview_eye.png";
import wallet_select_usdt_off from "../../../assets/wallet/wallet_select_usdt_off.png";
import icon_wallet from "../../../assets/wallet/icon_wallet.png";
import wallet_search_none from "../../../assets/wallet/wallet_search_none.png";
import icon_trading from "../../../assets/wallet/icon_trading.png";

interface User {
  date: string;
  name: string;
  address: string;
}

const handleEdit = (index: number, row: User) => {
  console.log(index, row);
};
const handleDelete = (index: number, row: User) => {
  console.log(index, row);
};

const tableData: User[] = [
  {
    date: "Trading",
    name: "₮0.00",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "Earning",
    name: "₮0.00",
    address: "No. 189, Grove St, Los Angeles",
  },
];
const format = (percentage: number) =>
  percentage === 100 ? "Full" : `${percentage}%`;
const deposit = ref("Deposit");
const buy = ref("Buy");
</script>

<style scoped lang="scss">
$fontCol: #7b8293;
$fontSizeMax: 42px;
$fontSizeMedPro: 28px;
$fontSizeMed: 24px;
$fontSizeDefPro: 18px;
$fontSizeDef: 16px;
$fontSizeMinPro: 14px;
$fontSizeMin: 12px;

.minMainFont {
  font-size: $fontSizeDef;
  color: #7b8293;
  line-height: $fontSizeDefPro;
}
:deep() {
  .el-card {
    --el-card-border-radius: 5px;
  }
}
.overview-page {
  max-width: 1290px;
  margin: auto;
  .left-box {
    .left-value {
      width: 100%;
      padding: 24px 23px 41px 23px;
      border: 1px solid #ebebeb;
      border-radius: 5px;
      .value-top {
        font-size: 18px;
        color: #cbcccf;
        line-height: 22px;
        img {
          margin-left: 15px;
          width: 17px;
          height: 13px;
        }
      }
      .value-center {
        margin-top: 18px;
        display: flex;
        font-size: 32px;
        color: #cbcccf;
        line-height: 38px;
        button.language-chose {
          margin-left: 19px;
          margin-top: 3px;
          display: flex;
          align-items: center;
          width: 103px;
          height: 30px;
          line-height: 19px;
          font-size: 14px;
          color: #e2e2e2;
          background: none;
          border: 1px solid #e2e2e2;
          border-radius: 2px;
          padding: 14px;
          img {
            width: 16px;
            margin-right: 6px;
            vertical-align: middle;
          }
          svg {
            margin-left: 5px;
          }
          :deep(el-icon) {
            width: 18px !important;
          }
        }
      }
      .value-bottom {
        text-align: center;
        :deep(.button) {
          width: 110px;
        }
        .bottom-image {
          margin-top: 17px;
          img{
            width: 70px;
            height: auto;
          }
        }
        .bottom-title {
          margin-top: 17px;
        }
        .bottom-btn {
          margin-top: 21px;
          // display: flex;
          // justify-content: space-between;
          .deposit-btn {
            margin-left: -10px;
            font-weight: 100;
            @media (max-width: 451px) {
              margin-left: 0px;
            }
          }
          .buy-btn {
            margin-left: 10px;
            font-weight: 100;
            color: #000;
            background: #fff;
            border: 1px solid #dfdfe5;
            @media (max-width: 451px) {
              margin-left: 0px;
              margin-top: 5px;
            }
          }
        }
      }
    }
    .left-assets {
      margin-top: 27px;
      :deep() {
        .el-table__row {
          height: 63px;
        }
        .el-table__body-wrapper {
          margin-left: 10px;
        }
        .el-progress__text {
          font-size: 14px !important;
          color: #000000;
          line-height: 16px;
        }
        .el-button--success {
          --el-button-bg-color: #01c19a;
          --el-button-border-color: #01c19a;
          --el-button-active-color: #01c19a;
          --el-button-hover-bg-color: #01c19a;
          --el-button-outline-color: #01c19a;
          --el-button-hover-border-color: #01c19a;
          --el-button-active-bg-color: #01c19a;
        }
      }
      .card-header {
        span {
          font-size: 18px;
          color: #000000;
          line-height: 23px;
        }
      }
      .box-card {
        box-shadow: none;
        width: 100%;
        // :deep(.el-card__body) {
        //   padding: 0px !important;
        // }
        .assets-body {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .assets-item {
            display: flex;
            align-items: center;
            .assets-icon{
              width: 30px;
                height: 30px;
              img{
                width: 100%;
                height: 100%;
                object-fit: contain;
              }
            }
            .item-title {
              margin-left: 13px;
            }
          }

          .demo-progress {
            .el-progress--line {
              display: block;
              align-items: center;
              width: 100px;
            }
            .progress-count {
              display: flex;
              float: left;
              font-size: 14px;
              color: #000;
            }
            .progress-bar {
              float: right;
              margin-left: 11px;
              border-radius: 4.5px;
              :deep(.el-progress-bar__outer) {
                background-color: #ebebeb !important;
              }
            }
          }
          .assets-btn{
            :deep(){
              .el-button{
                width:60px;
                height: 30px;
                font-size: $fontSizeMin;
              }
              .el-button+.el-button{
                margin-left: 11px !important;
              }
            }
            .more{
              color:#000;
              font-size: $fontSizeMin;
              font-weight: lighter;
            }
          }
        }
      }
    }
    .left-recent {
      margin-top: 27px;
      .card-header {
        span {
          font-size: 18px;
          color: #000000;
          line-height: 23px;
        }
      }
      .box-card {
        box-shadow: none;
        width: 100%;
        padding-bottom: 16px;

        .value-bottom {
          text-align: center;
          padding-top: 42px;
          :deep(.button) {
            width: 110px;
          }
          .bottom-image {
            margin-top: 17px;
            img{
            width: 70px;
            height: auto;
          }
          }
          .bottom-title {
            margin-top: 17px;
          }
        }
      }
    }
  }
  .right-box {
    .card-header {
      span {
        font-size: 18px;
        color: #000000;
        line-height: 23px;
      }
    }

    .box-card {
      box-shadow: none;
      width: 100%;
      .value-bottom {
        text-align: center;
        padding-top: 22px;
        padding-bottom: 21px;
        :deep(.button) {
          width: 110px;
        }
        .bottom-image {
          margin-top: 17px;
          img{
            width: 70px;
            height: auto;
          }
        }
        .bottom-title {
          margin-top: 17px;
        }
        .bottom-btn {
          margin-top: 21px;
          // display: flex;
          // justify-content: space-between;
          .deposit-btn {
            margin-left: -10px;
            font-weight: lighter;
            @media (max-width: 451px) {
              margin-left: 0px;
            }
          }
          .buy-btn {
            margin-left: 10px;
            font-weight: 100;
            color: #000;
            background: #fff;
            border: 1px solid #dfdfe5;
            @media (max-width: 451px) {
              margin-left: 0px;
              margin-top: 5px;
            }
          }
        }
      }
    }
  }
}
</style>
