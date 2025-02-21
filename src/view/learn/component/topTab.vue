<!-- tab切换内容，调整样式困难 -->
<template>
  <div>
    <div class="top-box" v-if="windowWidth > 985">
      <div class="top-container max1440">
        <el-tabs
          v-model="activeName"
          type="card"
          stretch
          class="demo-tabs"
          @tab-click="handleClick"
        >
          <el-tab-pane label="first" name="first">
            <el-row>
              <el-col :span="13">
                <div class="title">Start Your First Buy in minutes</div>
                <div
                  class="card clearfloat"
                  v-for="(item, index) in firstCard"
                  :key="index"
                >
                  <div class="number">{{ item.number }}</div>
                  <div class="con-text clearfloat">
                    <div class="msg">{{ item.msg }}</div>
                    <div class=" first-content content">{{ item.content }}</div>
                  </div>
                </div>
                <div>
                  <GetButton class="trade-btn" type="success" :text="trade" />
                </div>
              </el-col>
              <el-col :span="11">
                <div class="right-img">
                  <img :src="learn_banner01" />
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="second" name="second">
            <el-row>
              <el-col :span="13">
                <div class="title">Kick-start Your Selling Order</div>

                <div
                  class="card clearfloat"
                  v-for="(item, index) in secondCard"
                  :key="index"
                >
                  <div class="number">{{ item.number }}</div>
                  <div class="con-text clearfloat">
                    <div class="msg">{{ item.msg }}</div>
                    <div class="second-content content">{{ item.content }}</div>
                  </div>
                </div>
                <div>
                  <GetButton class="trade-btn" type="success" :text="trade" />
                </div>
              </el-col>
              <el-col :span="11">
                <div class="right-img">
                  <img :src="learn_banner02" />
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="third" name="third">
            <el-row>
              <el-col :span="13">
                <div class="title">An Introduction to Futures</div>
                <div
                  class="card clearfloat"
                  v-for="(item, index) in thirdCard"
                  :key="index"
                >
                  <div class="number">{{ item.number }}</div>
                  <div class="con-text clearfloat">
                    <div class="msg">{{ item.msg }}</div>
                    <div class="third-content content">{{ item.content }}</div>
                  </div>
                </div>
                <div>
                  <GetButton class="trade-btn" type="success" :text="trade" />
                </div>
              </el-col>
              <el-col :span="11">
                <div class="right-img">
                  <img :src="learn_banner03" />
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="fourth" name="fourth">
            <el-row>
              <el-col :span="13">
                <div class="title">How to Trade Options</div>
                <div
                  class="card clearfloat"
                  v-for="(item, index) in fourthCard"
                  :key="index"
                >
                  <div class="number">{{ item.number }}</div>
                  <div class="con-text clearfloat">
                    <div class="msg">{{ item.msg }}</div>
                    <div class="fourth-content content">{{ item.content }}</div>
                  </div>
                </div>
                <div>
                  <GetButton class="trade-btn" type="success" :text="trade" />
                </div>
              </el-col>
              <el-col :span="11">
                <div class="right-img">
                  <img :src="learn_banner04" />
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
     <div class="top-box" v-if="windowWidth <= 985">
      <div class="top-container max1440">
        <el-tabs
          v-model="activeName"
          type="card"
          stretch
          class="demo-tabs"
          @tab-click="handleClick"
        >
          <el-tab-pane label="first" name="first">
            <el-row>
              <el-col :span="24">
                <div class="title">Start Your First Buy in minutes</div>
                <div
                  class="card clearfloat"
                  v-for="(item, index) in firstCard"
                  :key="index"
                >
                  <div class="number">{{ item.number }}</div>
                  <div class="con-text clearfloat">
                    <div class="msg">{{ item.msg }}</div>
                    <div class="content">{{ item.content }}</div>
                  </div>
                </div>
                
                <div>
                  <GetButton class="trade-btn" type="success" :text="trade" />
                </div>
              </el-col>
              <el-col :span="24">
                <div class="right-img">
                  <img :src="learn_banner01" />
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="second" name="second">
            <el-row>
              <el-col :span="24">
                <div class="title">Kick-start Your Selling Order</div>

                <div
                  class="card clearfloat"   
                  v-for="(item, index) in secondCard"
                  :key="index"
                >
                  <div class="number">{{ item.number }}</div>
                  <div class="con-text clearfloat">
                    <div class="msg">{{ item.msg }}</div>
                    <div class="content">{{ item.content }}</div>
                  </div>
                </div>
                <div>
                  <GetButton class="trade-btn" type="success" :text="trade" />
                </div>
              </el-col>
              <el-col :span="24">
                <div class="right-img">
                  <img :src="learn_banner02" />
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="third" name="third">
            <el-row>
              <el-col :span="24">
                <div class="title">An Introduction to Futures</div>
                <div
                  class="card clearfloat"
                  v-for="(item, index) in thirdCard"
                  :key="index"
                >
                  <div class="number">{{ item.number }}</div>
                  <div class="con-text clearfloat">
                    <div class="msg">{{ item.msg }}</div>
                    <div class="content">{{ item.content }}</div>
                  </div>
                </div>
                <div>
                  <GetButton class="trade-btn" type="success" :text="trade" />
                </div>
              </el-col>
              <el-col :span="24">
                <div class="right-img">
                  <img :src="learn_banner03" />
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="fourth" name="fourth">
            <el-row>
              <el-col :span="24">
                <div class="title">How to Trade Options</div>
                <div
                  class="card clearfloat"
                  v-for="(item, index) in fourthCard"
                  :key="index"
                >
                  <div class="number">{{ item.number }}</div>
                  <div class="con-text clearfloat">
                    <div class="msg">{{ item.msg }}</div>
                    <div class="content">{{ item.content }}</div>
                  </div>
                </div>
                <div>
                  <GetButton class="trade-btn" type="success" :text="trade" />
                </div>
              </el-col>
              <el-col :span="24">
                <div class="right-img">
                  <img :src="learn_banner04" />
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onUnmounted, onMounted } from "vue";
import type { TabsPaneContext } from "element-plus";
import GetButton from "../../../components/GetButton.vue";

import learn_banner01 from "../../../assets/home/learn_banner01.png";
import learn_banner02 from "../../../assets/home/learn_banner02.png";
import learn_banner03 from "../../../assets/home/learn_banner03.png";
import learn_banner04 from "../../../assets/home/learn_banner04.png";

const activeName = ref("first");
const trade = ref("Trade now");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};

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
const firstCard = [
  {
    number: 1,
    msg: "Place order",
    content:
      "Find Coinflake’s advertisement and place your order",
  },
  {
    number: 2,
    msg: "Get Verified",
    content: "Complete our verification through our website",
  },
  {
    number: 3,
    msg: "Make Payment",
    content:
      'Make the payment to Coinflake via your preferred payment methods',
  },
];
const secondCard = [
  {
    number: 1,
    msg: "Place order",
    content:
      "Place order you want to buy ( Spot trading refers to exchanging a digital asset with another digital asset )",
  },
  {
    number: 2,
    msg: "Get Verified",
    content:
      "Look at the market price, choose the right price to place an order",
  },
  {
    number: 3,
    msg: 'Confirm the Payment',
    content: "Confirm your bank account detail and the receipt of money",
  },
];
const thirdCard = [
  {
    number: 1,
    msg: "Choose to open long or short position",
    content: "OKX supports weekly, bi-weekly and quarterly contracts.",
  },
  {
    number: 2,
    msg: "Enter the Quantity and Price",
    content:
      "Order can only be placed when the account equity balance is larger than or equal to the margin.",
  },
  {
    number: 3,
    msg: "Position",
    content:
      "User may open more or close position(s) anytime to take profit / stop loss.",
  },
];
const fourthCard = [
  {
    number: 1,
    msg: "Activate Options Account",
    content:
      'Before starting your first trade, click "Activate Option Trading" . After completing the quiz, you can proceed to activate your Options Account.',
  },
  {
    number: 2,
    msg: "elect options order type",
    content:
      'Choose "call" or "put" option, and then select a contract with a suitable exercise price to buy or sell.',
  },
  {
    number: 3,
    msg: "Fill order",
    content:
      'Fill in the price and quantity you want to trade on the trading page, and click "Buy" or "Sell" to place an order.',
  },
];
</script>

<style scoped lang='scss'>
$headerBackGround: #1d262f;
$bg-color: #fff;
$main-color: #3e4191;
$fontSizeMax: 42px;
$fontSizeMed: 24px;
$fontSizeDefPro: 18px;
$fontSizeDef: 16px;
$fontSizeMinPro: 14px;
$fontSizeMin: 12px;
.max1440 {
  max-width: 1440px;
  margin: 0 auto;
}
.trade-btn {
  font-weight: 500;
  height: 38px;
  margin-top: 30px;
  font-size: 16px;
  color: #ffffff;
  line-height: 19px;
  padding: 10px 17px 9px 18px !important;
}
:deep() {
  .el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
    border-bottom: 3px solid #3e4191;
    height: 77px;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__item{
    border: none;
  }
  .el-tabs__nav-scroll{
    background-color: #313E4A;
    border-radius: 8px;
  }
  
  .el-tabs__item.is-active{
    color: #3e4191;
  }
}
.top-box {
  width: auto;
  padding: 30px 100px;
  background-color: $headerBackGround;
  @media (max-width: 985px) {
    & {
      padding: 8px 16px;
    }
  }
  .demo-tabs {
    margin: auto;

    .el-tabs__content {
      padding: 32px;
      color: #7a8690;
      font-size: 32px;
      font-weight: 600;
    }
  }
}
.title {
  line-height: 29px;
  font-size: $fontSizeMed;
  color: $main-color;
  font-weight: 600;
  margin-top: 45px;
}
.con-text {
  display: block;
  float: left;
  margin-top: 20px;
  margin-left: 10px;
}
.number {
  width: 14px;
  height: 14px;
  background-color: $main-color;
  text-align: center;
  line-height: 15px;
  font-size: $fontSizeMin;
  color: $bg-color;
  display: block;
  float: left;
  margin-top: 23px;
}
.msg {
  line-height: 17px;
  font-size: $fontSizeMinPro;
  color: $bg-color;
}
.content {
  line-height: 16px;
  font-size: $fontSizeMinPro;
  color: #788590;
  margin-top: 7px;
}
.con-text{
  width: 90%;
}

.right-img {
  // margin-top: -50px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>