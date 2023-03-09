<template>
  <div>
    <div class="eighth-part" v-if="windowWidth > 985">
        <div class="first-level-title" style="font-size: 36px; !important">
          Frequently asked questions
        </div>
        <div class="eighth-part-collapse">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item
              title="What products does CoinByte provide?"
              name="1"
            >
              <div class="collapse-content">
                What products does CoinByte provide?
              </div>
            </el-collapse-item>
            <el-collapse-item title="Where is CoinByte based?" name="2">
              <div class="collapse-content">Where is CoinByte based?</div>
            </el-collapse-item>
            <el-collapse-item title="How to buy Bitcoin on CoinByte?" name="3">
              <div class="collapse-content">
                How to buy Bitcoin on CoinByte?
              </div>
            </el-collapse-item>
            <el-collapse-item
              title="Are account verifications required to trade crypto on CoinByte?"
              name="4"
            >
              <div class="collapse-content">
                Are account verifications required to trade crypto on CoinByte?
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>

      <div class="part08" v-if="windowWidth <= 985">
        <div class="title-one">FAQs</div>
        <div class="part08-collapse">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item name="1">
              <template #title>
                <div class="el-collapse-item-title">
                  What products does CoinByte provide?
                </div>
              </template>
              <div>What products does CoinByte provide?</div>
            </el-collapse-item>
            <el-collapse-item name="2">
              <template #title>
                <div class="el-collapse-item-title">
                  Where is CoinByte based?
                </div>
              </template>
              <div>Where is CoinByte based?</div>
            </el-collapse-item>
            <el-collapse-item name="3">
              <template #title>
                <div class="el-collapse-item-title">
                  How to buy Bitcoin on CoinByte?
                </div>
              </template>
              <div>How to buy Bitcoin on CoinByte?</div>
            </el-collapse-item>
            <el-collapse-item name="4">
              <template #title>
                <div class="el-collapse-item-title">
                  Are account verifications required to trade crypto on
                  CoinByte?
                </div>
              </template>
              <div>
                Are account verifications required to trade crypto on CoinByte?
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onUnmounted, onMounted } from "vue";

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
const activeNames = ref([""]);
const handleChange = (val: string[]) => {
  // console.log(val);
};

</script>

<style scoped lang='scss'>
$headerBackGround: #161719;
$bg-color: #fff;
$main-color: #01c19a;
$fontSizeMax: 42px;
$fontSizeMed: 24px;
$fontSizeDefPro: 18px;
$fontSizeDef: 16px;
$fontSizeMinPro: 14px;
$fontSizeMin: 12px;

.first-level-title {
  font-size: 32px;
  color: #060606;
  font-weight: bold;
  line-height: 35px;
  @media (max-width: 768px) {
    & {
      font-size: 28px;
    }
  }
  span {
    color: $main-color;
  }
}
.second-level-title {
  font-size: $fontSizeDefPro;
  color: #060606;
  line-height: 30px;
  // font-weight: 500;
  text-decoration: none;
  @media (max-width: 768px) {
    & {
      line-height: 20px !important;
      font-size: $fontSizeDef;
    }
  }
}
.eighth-part {
    text-align: center;
    background-color: #fff;
    padding: 46px 0;
    margin-top: 20px;

    @media (max-width: 985px) {
      & {
        padding: 46px 30px;
      }
    }
    .eighth-part-collapse {
      padding-top: 33px;
      margin: auto;
      text-align: left;
      font-size: 16px !important;
      line-height: 19px;
      color: #060606;
      width: 907px;

      @media (max-width: 985px) {
        & {
          width: 100%;
        }
      }

      :deep(.el-collapse-item__header) {
        height: 68px;
        font-size: 20px;
        font-weight: 500;

        // @media (max-width: 920px) {
        //   & {
        //     height: 58px;
        //     font-size:16px;
        //     overflow: hidden;
        //     text-overflow: ellipsis;
        //     white-space: nowrap;
        //   }
        // }

        .el-collapse-item__arrow {
          transform: rotate(90deg);
        }

        .el-collapse-item__arrow.is-active {
          transform: rotate(270deg);
        }
      }

      .collapse-content {
        font-size: 14px;
        color: #929292;
      }
    }
  }
  .part08 {
    text-align: center;
    background-color: #fff;
    padding: 12% 0;
    @media(max-width:985px) {
      margin-top: 20px;
    }

    .title-one {
      font-size: $fontSizeDefPro;
      color: #060606;
      font-weight: 700;
      padding-bottom: 24px;
    }

    .part08-collapse {
      margin: 2% 20px;
      text-align: left;
      font-size: 14px;
      color: #060606;

      .el-collapse-item-title {
        width: 90%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
        font-weight: 500;
      }

      :deep(.el-collapse-item__content) {
        font-weight: 400;
        font-size: 14px;
        color: #929292;
      }

      .el-collapse-item__arrow {
        transform: rotate(90deg);
      }

      .el-collapse-item__arrow.is-active {
        transform: rotate(270deg);
      }

      // }
    }
  }
</style>