<template>
  <div class="header-box">
    <div class="header-logo">
      <a href="/"><img class="logo" :src="logo" alt="logo" /></a>
    </div>
    <div class="header-menu">
      <ul class="menu">
        <li
          @mouseover="cryptoShow"
          @mouseleave="cryptoHide"
          class="crypto-dropdown-box"
        >
          Buy Crypto
          <span class="aud-badge">{{ activeName }}</span>
          <el-dropdown
            ref="navCurrency"
            style="vertical-align: middle; color: #fff"
            class="money-dropdown"
            @visible-change="changeArrow"
          >
            <img
              :src="down_arrow"
              alt=""
              style="width: 18px"
              :style="{ transform: `rotate(${deg}deg)` }"
            />
            <template #dropdown>
              <el-dropdown-menu class="crypto-dropdown-menu">
                <el-dropdown-item class="crypto-dropdown-item">
                  <div class="pay">Pay With</div>
                  <el-radio-group
                    v-model="activeName"
                    type="card"
                    class="demo-tabs"
                    size="small"
                    @tab-click="handleClick"
                  >
                    <el-radio-button label="AUD" name="AUD"></el-radio-button>
                    <el-radio-button label="NZD" name="NZD"></el-radio-button>
                  </el-radio-group>
                </el-dropdown-item>

                <el-dropdown-item
                  class="crypto-item-box"
                  style="display: flex"
                  v-for="(item, index) in cryptoItem"
                  :key="index"
                  @click="SkipTo(item.url)"
                >
                  <div class="crypto-item-icon"><img :src="item.icon" /></div>
                  <div class="crypto-item-text">
                    <div class="crypto-item-title">{{ item.title }}</div>
                    <div class="crypto-item-msg">{{ item.message }}</div>
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </li>
        <li>
          <a href="/allCrypto" style="color: #fff; text-decoration: none"
            >Markets</a
          >
        </li>
        <li>Trade</li>
        <li>
          <a href="/learnCenter" style="color: #fff; text-decoration: none"
            >Learn</a
          >
        </li>
      </ul>
    </div>
    <div class="header-right">
      <ul class="right-menu">
        <!-- 登录后 -->
        <template v-if="userInfoStore.isLogin">
          <li
            @mouseover="walletShow"
            @mouseleave="walletHide"
            class="right-dropdown-box"
          >
            <el-dropdown class="help-dropdown align-icon" ref="navWallet">
              <router-link to="/wallet" style="text-decoration: none">
                <div class="login-span">
                  Wallet
                  <div>
                    <el-icon style="color: #fff"><CaretBottom /></el-icon>
                  </div></div
              ></router-link>
              <template #dropdown>
                <el-dropdown-menu
                  class="help-dropdown-menu"
                  style="width: 224px"
                >
                  <el-dropdown-item class="help-dropdown-item">
                    <div class="help-box">
                      <div class="help-icon">
                        <img :src="dropdown_wallet_myasset" />
                      </div>
                      <div class="help-title">My Asset</div>
                    </div>
                  </el-dropdown-item>
                  <el-dropdown-item class="help-dropdown-item">
                    <div class="help-box">
                      <div class="help-icon">
                        <img :src="dropdown_wallet_deposit" />
                      </div>
                      <div class="help-title">Deposit</div>
                    </div>
                  </el-dropdown-item>
                  <el-dropdown-item class="help-dropdown-item">
                    <div class="help-box">
                      <div class="help-icon">
                        <img :src="dropdown_wallet_withdraw" />
                      </div>
                      <div class="help-title">Withdraw</div>
                    </div>
                  </el-dropdown-item>
                  <el-dropdown-item class="help-dropdown-item">
                    <div class="help-box">
                      <div class="help-icon">
                        <img :src="dropdown_wallet_history" />
                      </div>
                      <div class="help-title">Transaction History</div>
                    </div>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </li>
          <li
            style="margin-left: 10px"
            @mouseover="orderShow"
            @mouseleave="orderHide"
            class="right-dropdown-box"
          >
            <el-dropdown class="help-dropdown align-icon" ref="navOrder">
              <router-link to="/" style="text-decoration: none"
                ><div class="login-span">
                  Orders
                  <div>
                    <el-icon style="color: #fff"><CaretBottom /></el-icon>
                  </div></div
              ></router-link>
              <template #dropdown>
                <el-dropdown-menu
                  class="help-dropdown-menu"
                  style="width: 224px"
                >
                  <el-dropdown-item class="help-dropdown-item">
                    <div class="help-box">
                      <div class="help-icon">
                        <img :src="dropdown_orders_spot" />
                      </div>
                      <div class="help-title">Spot Order</div>
                    </div>
                  </el-dropdown-item>
                  <el-dropdown-item class="help-dropdown-item">
                    <div class="help-box">
                      <div class="help-icon">
                        <img :src="dropdown_orders_buysell" />
                      </div>
                      <div class="help-title">Buy/Sell Order</div>
                    </div>
                  </el-dropdown-item>
                  <el-dropdown-item class="help-dropdown-item">
                    <div class="help-box">
                      <div class="help-icon">
                        <img :src="dropdown_orders_history" />
                      </div>
                      <div class="help-title">Convert History</div>
                    </div>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </li>
          <li
            @mouseover="userShow"
            @mouseleave="userHide"
            class="right-dropdown-box"
          >
            <el-dropdown class="user-dropdown align-icon">
              <img :src="top_bar_usercenter" alt="" />
              <template #dropdown>
                <el-dropdown-menu
                  class="user-dropdown-menu"
                >
                  <el-dropdown-item class="user-dropdown-info">
                    <div
                      class="user-head-box"
                    >
                      <div class="user-head">
                        <img :src="top_bar_usercenter" />
                      </div>
                      <div class="head-text">
                        <div class="user-name">Aar***@hotmail.com</div>
                        <div class="user-id">UID:121233443434343</div>
                      </div>
                    </div>
                  </el-dropdown-item>
                  <el-dropdown-item class="verify-box" v-if="verifiy">
                    <div class="user-verify" >
                      <div class="verify-status"><img :src="dropdown_usercenter_verified" /></div>
                      <div class="verify-text">Verified</div>
                    </div>
                  </el-dropdown-item>
                  <el-dropdown-item class="verify-box" v-else>
                    <div class="user-verify" >
                      <div class="verify-status"><img :src="dropdown_usercenter_unverified" /></div>
                      <div class="verify-text">Verifiy your account</div>
                    </div>
                  </el-dropdown-item>
                  <el-divider style="margin:10px;width: 266px;margin-left: -20px;"/>
                  <el-dropdown-item class="user-dropdown-item">
                    <div class="user-box">
                      <div class="user-icon">
                        <img :src="dropdown_usercenter_overview" />
                      </div>
                      <div class="user-title">Overview</div>
                    </div>
                  </el-dropdown-item>
                  <el-dropdown-item class="user-dropdown-item">
                    <div class="user-box">
                      <div class="user-icon">
                        <img :src="dropdown_usercenter_security" />
                      </div>
                      <div class="user-title">Security</div>
                    </div>
                  </el-dropdown-item>
                  <el-dropdown-item class="user-dropdown-item">
                    <div class="user-box">
                      <div class="user-icon">
                        <img :src="dropdown_usercenter_verification" />
                      </div>
                      <div class="user-title">Verification</div>
                    </div>
                  </el-dropdown-item>
                  <el-dropdown-item class="user-dropdown-item">
                    <div class="user-box">
                      <div class="user-icon">
                        <img :src="dropdown_usercenter_bankaccount" />
                      </div>
                      <div class="user-title">Bank account</div>
                    </div>
                  </el-dropdown-item>
                  <el-dropdown-item class="user-dropdown-item">
                    <div class="user-box">
                      <div class="user-icon">
                        <img :src="dropdown_usercenter_preferences" />
                      </div>
                      <div class="user-title">Preferences</div>
                    </div>
                  </el-dropdown-item>
                  <el-divider style="margin:10px;width: 266px;margin-left: -20px;"/>
                  <div class="logout">Log out</div>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </li>
        </template>
        <template v-else>
          <li>
            <router-link to="/login" style="text-decoration: none"
              ><span class="login-span">Log in</span></router-link
            >
          </li>
          <li>
            <router-link to="/signup"
              ><button class="btn-signup">Sign up</button></router-link
            >
          </li>
        </template>

        <li
          @mouseover="downloadShow"
          @mouseleave="downloadHide"
          class="right-dropdown-box"
        >
          <el-dropdown class="download-dropdown align-icon" ref="navDownload">
            <img :src="top_down" alt="" />
            <template #dropdown>
              <el-dropdown-menu
                class="download-dropdown-menu"
                style="width: 178px"
              >
                <el-dropdown-item class="download-dropdown-item">
                  <div class="qr-code">
                    <img src="../../assets/home/download_qrcode.png" />
                  </div>
                  <div class="msg">Scan to download APP</div>
                  <div class="msg" style="padding-bottom: 10px">
                    IOS & Android
                  </div>
                </el-dropdown-item>
                <router-link to="/download" style="text-decoration: none">
                  <div class="more-option">
                    <button class="option-btn">More Download Options</button>
                  </div>
                </router-link>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </li>

        <li
          @mouseover="noticeShow"
          @mouseleave="noticeHide"
          class="right-dropdown-box"
        >
          <el-dropdown class="notice-dropdown align-icon" ref="navNotice">
            <img :src="top_notice" alt="" />
            <template #dropdown>
              <el-dropdown-menu class="notice-dropdown-menu">
                <el-dropdown-item class="notice-dropdown-item clearfloat">
                  <div class="notice-msg">
                    <div class="notice-tip"></div>
                    CoinByte plans to postpone adjustment time of <br />
                    ETHUSDT futures' position tiers
                    <div class="notice-time">09/09/2022, 20:47:22</div>
                  </div>
                </el-dropdown-item>
                <el-dropdown-item class="notice-dropdown-item clearfloat">
                  <div class="notice-msg">
                    <div class="notice-tip"></div>
                    Win up to 42% APY with SKL Staking.
                    <div class="notice-time">09/09/2022, 20:47:22</div>
                  </div>
                </el-dropdown-item>
                <el-dropdown-item class="notice-dropdown-item clearfloat">
                  <div class="notice-msg">
                    CoinByte to Enable Margin Trading & Savings and List <br />
                    Perpetual for LUNC.
                    <div class="notice-time">09/09/2022, 20:47:22</div>
                  </div>
                </el-dropdown-item>
                <el-dropdown-item class="notice-dropdown-item clearfloat">
                  <div class="notice-msg">
                    CoinByte adjusts discount rates of ETH and position <br />
                    tiers of ETH contracts.
                    <div class="notice-time">09/09/2022, 20:47:22</div>
                  </div>
                </el-dropdown-item>
                <el-dropdown-item class="notice-dropdown-item clearfloat">
                  <div class="notice-msg">
                    CoinByte will launch SKEB/USDT at 08:00 am UTC on <br />
                    Sep. 8
                    <div class="notice-time">09/09/2022, 20:47:22</div>
                  </div>
                </el-dropdown-item>

                <div class="">
                  <el-divider style="width: 100%" />

                  <div class="notice-view-more">View more</div>
                </div>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </li>

        <li
          @mouseover="helpShow"
          @mouseleave="helpHide"
          class="right-dropdown-box"
        >
          <el-dropdown class="help-dropdown align-icon" ref="navHelp">
            <img :src="top_bangzhu" alt="" />
            <template #dropdown>
              <el-dropdown-menu class="help-dropdown-menu" style="width: 224px">
                <el-dropdown-item class="help-dropdown-item">
                  <div class="help-box">
                    <div class="help-icon">
                      <img :src="dropdown_help_support" />
                    </div>
                    <div class="help-title">Support center</div>
                  </div>
                </el-dropdown-item>
                <el-dropdown-item class="help-dropdown-item">
                  <div class="help-box">
                    <div class="help-icon">
                      <img :src="dropdown_help_connect" />
                    </div>
                    <div class="help-title">Connect with Coinbyte</div>
                  </div>
                </el-dropdown-item>
                <el-dropdown-item class="help-dropdown-item">
                  <div class="help-box">
                    <div class="help-icon">
                      <img :src="dropdown_help_telegram" />
                    </div>
                    <div class="help-title">Telegram</div>
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </li>
        <li
          @mouseover="languageShow"
          @mouseleave="languageHide"
          class="right-dropdown-box"
        >
          <el-dropdown class="language-dropdown align-icon" ref="navLanguage">
            <img :src="top_en" alt="" />

            <template #dropdown>
              <el-dropdown-menu
                class="language-dropdown-menu"
                style="width: 340px"
              >
                <el-row>
                  <el-col
                    :span="12"
                    v-for="(item, index) in gridData"
                    :key="index"
                  >
                    <div class="alert-box">
                      <div class="alert-title">Language</div>
                      <el-divider style="margin: 12px 0" />
                      <el-dropdown-item>
                        <div class="alert-cont">{{ item.us }}</div>
                      </el-dropdown-item>
                      <el-dropdown-item>
                        <div class="alert-cont">{{ item.cn }}</div>
                      </el-dropdown-item>
                      <el-dropdown-item>
                        <div class="alert-cont">{{ item.tc }}</div>
                      </el-dropdown-item>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="alert-box">
                      <div class="alert-title">Local Currency</div>
                      <el-divider style="margin: 12px 0" />
                      <el-dropdown-item>
                        <div class="alert-cont">USD</div>
                      </el-dropdown-item>
                      <el-dropdown-item>
                        <div class="alert-cont">NZD</div>
                      </el-dropdown-item>
                    </div>
                  </el-col>
                </el-row>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </li>
      </ul>
      <span class="el-dropdown-link">
        <img :src="menu_icon" alt="" @click="showClickMenu" />
      </span>
      <div class="menu-dropdown" v-show="dropdownShow">
        <img
          :src="close_icon"
          alt=""
          class="close-icon"
          @click="closeDropdownMenu"
        />
        <div class="menu-dropdown-page">
          <div class="button-group">
            <router-link to="/signup"
              ><el-button class="sign-button">Sign up</el-button></router-link
            >
            <router-link to="/login" style="text-decoration: none; color: #fff"
              ><span>Login</span></router-link
            >
          </div>
          <ul class="nav-list">
            <li>Buy Crypto</li>
            <li>Markets</li>
            <li>Trade</li>
            <li>Learn</li>
            <li>Help</li>
            <li>Language</li>
          </ul>
          <div class="download-app">Download COINBYTE App</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";
import { useRouter } from "vue-router";
import { CaretBottom } from "@element-plus/icons-vue";

// img
import logo from "../../assets/home/logo.svg";
import top_down from "../../assets/home/top_down.svg";
import top_notice from "../../assets/home/top_notice.svg";
import top_bangzhu from "../../assets/home/top_bangzhu.svg";
import top_en from "../../assets/home/top_en.svg";
import down_arrow from "../../assets/home/down_arrow.png";
import menu_icon from "../../assets/home/menu_icon.png";
import close_icon from "../../assets/home/close_icon.png";
import top_bar_usercenter from "../../assets/wallet/top_bar_usercenter.svg";
import dropdown_usercenter_verified from "../../assets/home/dropdown_usercenter_verified.svg";
import dropdown_usercenter_unverified from "../../assets/home/dropdown_usercenter_unverified.svg";

import dropdown_buy_bank from "../../assets/home/dropdown_buy_bank.svg";
import dropdown_buy_quick from "../../assets/home/dropdown_buy_quick.svg";
import dropdown_buy_convert from "../../assets/home/dropdown_buy_convert.svg";
import dropdown_help_support from "../../assets/home/dropdown_help_support.svg";
import dropdown_help_connect from "../../assets/home/dropdown_help_connect.svg";
import dropdown_help_telegram from "../../assets/home/dropdown_help_telegram.svg";
import dropdown_wallet_myasset from "../../assets/home/dropdown_wallet_myasset.svg";
import dropdown_wallet_deposit from "../../assets/home/dropdown_wallet_deposit.svg";
import dropdown_wallet_withdraw from "../../assets/home/dropdown_wallet_withdraw.svg";
import dropdown_wallet_history from "../../assets/home/dropdown_wallet_history.svg";
import dropdown_orders_spot from "../../assets/home/dropdown_orders_spot.svg";
import dropdown_orders_buysell from "../../assets/home/dropdown_orders_buysell.svg";
import dropdown_orders_history from "../../assets/home/dropdown_orders_history.svg";
import dropdown_usercenter_overview from "../../assets/home/dropdown_usercenter_overview.svg";
import dropdown_usercenter_security from "../../assets/home/dropdown_usercenter_security.svg";
import dropdown_usercenter_verification from "../../assets/home/dropdown_usercenter_verification.svg";
import dropdown_usercenter_bankaccount from "../../assets/home/dropdown_usercenter_bankaccount.svg";
import dropdown_usercenter_preferences from "../../assets/home/dropdown_usercenter_preferences.svg";

import { useUserInfoStore } from "../../store/user";
const userInfoStore = useUserInfoStore();

const showname = ref<boolean>(false); //header是否登陆

let deg = ref<number>(0);
const navCurrency = ref();
const navDownload = ref();
const navNotice = ref();
const navHelp = ref();
const navLanguage = ref();
const navWallet = ref();
const navOrder = ref();
const navUser = ref();
const verifiy  = ref(false)

const dropdownShow = ref<boolean>(false);
const router = useRouter();

const showClickMenu = (): void => {
  dropdownShow.value = true;
};
const closeDropdownMenu = () => {
  dropdownShow.value = false;
};

const cryptoShow = () => {
  navCurrency.value.handleOpen();
};
const cryptoHide = () => {
  navCurrency.value.handleClose();
};

const downloadShow = () => {
  navDownload.value.handleOpen();
};
const downloadHide = () => {
  navDownload.value.handleClose();
};

const noticeShow = () => {
  navNotice.value.handleOpen();
};
const noticeHide = () => {
  navNotice.value.handleClose();
};

const helpShow = () => {
  navHelp.value.handleOpen();
};
const helpHide = () => {
  navHelp.value.handleClose();
};

const languageShow = () => {
  navLanguage.value.handleOpen();
};
const languageHide = () => {
  navLanguage.value.handleClose();
};
const walletShow = () => {
  navWallet.value.handleOpen();
};
const walletHide = () => {
  navWallet.value.handleClose();
};
const orderShow = () => {
  navOrder.value.handleOpen();
};
const orderHide = () => {
  navOrder.value.handleClose();
};
const userShow = () => {
  navUser.value.handleOpen();
};
const userHide = () => {
  navUser.value.handleClose();
};
const changeArrow = (e: any) => {
  if (e) {
    deg.value = 180;
  } else {
    deg.value = 0;
  }
};

const activeName = ref<string>("AUD");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  // console.log(tab, event)
};
const cryptoItem = [
  {
    icon: dropdown_buy_bank,
    title: "Bank Deposit",
    message: "Deposit AUD with your PayID/OSKO",
    url: "/",
  },
  {
    icon: dropdown_buy_quick,
    title: "Quick Buy/Sell",
    message: "Buy Crypto with your AUD balance",
    url: "/",
  },
  {
    icon: dropdown_buy_convert,
    title: "Convert",
    message: "Quick conversion, zero fees",
    url: "/convert",
  },
];

const SkipTo = (url: string) => {
  router.push(url);
};
const activeLanguage = ref<string>("first");

const gridData = [
  {
    title: "Language",
    us: "English",
    cn: "简体中文",
    tc: "繁體中文",
  },
];
</script>

<style scoped lang="scss">
$headerBackGround: #161719;
$system-color: #01c19a;
$bg-color: #fff;
$bold-font: HarmonyOS_Sans_Bold;
$medium-font: HarmonyOS_Sans_Medium;
$regular-font: HarmonyOS_Sans_Regular;

.header-box {
  width: 100%;
  line-height: 64px;
  height: 64px;
  background-color: $headerBackGround;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  box-sizing: border-box;
  color: #fff;
  @media (max-width: 768px) {
    line-height: 50px;
    height: 50px;
  }
}

.header-logo {
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 10px;
}
.logo {
  height: 28px;
  width: auto;
  padding-left: 30px;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.crypto-dropdown-menu {
  padding: 20px 10px;
  width: 380px;
  .pay {
    font-size: 0.8rem;
    color: #000;
  }
}
.notice-dropdown-menu {
  width: 368px;
  padding: 20px 10px;
}
.crypto-item-box {
  // padding:10px 0px;
  .crypto-item-icon {
    margin-top: 20px;
  }
  .crypto-item-text {
    margin-left: 20px;
    margin-top: 15px;
    .crypto-item-title {
      font-size: 0.8rem;
      font-weight: 600;
      color: #000;
      display: flex;
    }
    .crypto-item-msg {
      font-size: 0.8rem;
      color: #878787;
    }
  }
}
.header-right {
  display: flex;
  margin-left: auto;
  padding-right: 20px;
  @media (max-width: 1100px) {
    // padding-right: 20px;
  }
  .right-menu {
    display: flex;
    justify-content: space-around;
    gap: 3px;
    .align-icon {
      vertical-align: middle;
    }
    :deep(.el-icon) {
      width: 12px;
      height: 12px;
      margin-top: 20px;
    }
  }
  .menu-dropdown {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #121212;
    width: 376px;
    height: 100vh;
    z-index: 10000;
    @media (max-width: 768px) {
      width: 100%;
    }

    .close-icon {
      position: absolute;
      width: 20px;
      height: 20px;
      right: 20px;
      top: 14px;
      display: block !important;
    }

    .menu-dropdown-page {
      padding: 60px 20px 0;

      .button-group {
        display: flex;
        line-height: 28px;

        .sign-button {
          font-weight: 400;
          margin-right: 6px;
          width: 66px;
          height: 28px;
          background-color: transparent;
          border: 1px solid #fafafa;
          font-size: 14px;
          color: white;
        }

        span {
          padding: 0 8px;
        }
      }
    }

    .nav-list {
      list-style: none;
      text-align: left;
      line-height: 18px;
      margin-top: 20px;

      li {
        padding: 18px 0;
        font-size: 18px;
        font-weight: 400;
      }
    }

    .download-app {
      text-align: center;
      line-height: 46px;
      width: 100%;
      font-size: 16px;
      font-weight: 500;
      border: 1px solid #404040;
      border-radius: 6px;
      margin-top: 48px;
    }
  }
  .login-span {
    display: flex;
    align-items: center;
    height: 64px;
    line-height: 50px;
    margin-right: 6px;
    color: #fff;

    @media (max-width: 910px) {
      & {
        display: none;
      }
    }
  }

  .btn-signup {
    box-sizing: border-box;
    color: #fff;
    line-height: 80%;
    padding: 8px 10px;
    background: #01c19a;
    border-radius: 4px;
    border: none;
    margin: 0 8px;
    @media (max-width: 1070px) {
      & {
        margin-right: 30px;
      }
    }
    @media (max-width: 910px) {
      & {
        display: none;
      }
    }
  }

  text-align: right;
  .el-dropdown-link {
    width: 28px;
    height: 28px;
    display: none;
    margin-top: 20px;
    @media (max-width: 910px) {
      & {
        display: block;
        margin-right: 15px;
      }
    }
    @media (max-width: 768px) {
      & {
        width: 20px;
        height: 20px;
        margin-top: 15px;
        margin-right: 8px;
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block !important;
    }
  }
  img {
    width: 25px;
    height: 26px;
    margin: 0 8px;
    margin-bottom: 5px;

    @media (max-width: 1070px) {
      & {
        display: none;
      }
    }
  }
}

.header-menu {
  margin: auto;
  @media (max-width: 910px) {
    & {
      display: none;
      margin: auto;
    }
  }
  @media (min-width: 1440px) {
    margin-left: 120px !important;
  }
  .menu {
    .crypto-dropdown-box {
      cursor: pointer;

      .aud-badge {
        background: #01c19a;
        border-radius: 4px;
        font-size: 12px;
        padding: 2px 6px;
        margin-right: 4px;
        margin-left: 6px;
        line-height: 18px;
        width: 37px;
        position: relative;

        &::before {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          left: -3px;
          top: 2px;
          border-left: 0;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
          border-right: 6px solid;
          border-right-color: #01c19a;
        }
      }
    }

    .money-dropdown {
      svg {
        font-weight: bold;
        width: 1.2rem;
      }
    }

    list-style: none;

    li {
      padding: 0 1.5rem;
      display: inline-block;
      position: relative;
    }
  }
}
.download-dropdown {
  :deep(.el-dropdown-menu) {
    padding: 0 !important;
  }
}
.crypto-dropdown-menu {
  :deep(.el-radio-button:last-child .el-radio-button__inner) {
    background-color: #e9e9e9;
    color: #878787;
    box-shadow: none;
  }
  :deep(.el-radio-button:first-child .el-radio-button__inner) {
    background-color: #e9e9e9;
    color: #878787;
  }
  :deep(.el-radio-button__original-radio:checked + .el-radio-button__inner) {
    background-color: #01c19a;
    border-color: #01c19a;
    color: #fff;
  }
  :deep(.crypto-dropdown-item) {
    display: flex;
    justify-content: space-between;
  }
}
:deep(.download-dropdown-item) {
  display: block;
  .qr-code {
    text-align: center;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .msg {
    font-size: 12px;
    color: #000000;
    text-align: center;
    line-height: 14px;
  }
}

.more-option {
  height: 55px;
  background-color: #f7f7f7;
  display: flex;
  .option-btn {
    margin: auto;
    height: 28px;
    background: #ffffff;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    font-size: 12px;
    color: #000000;
    text-align: center;
  }
}
.notice-view-more {
  cursor: pointer;
  font-size: 12px;
  color: #01c19a;
  float: right;
  margin-top: -15px;
  margin-right: 15px;
  // padding: 21px 24px 21px 0px;
}
.notice-msg {
  font-size: 12px;
  color: #000000;
  line-height: 14px;
  position: relative;
  margin-left: 10px;
  padding-top: 8px;
  .notice-tip {
    width: 8px;
    height: 8px;
    background: #01c19a;
    border-radius: 50%;
    position: absolute;
    left: -15px;
    top: 12px;
  }
  .notice-time {
    color: #878787;
    margin-top: 5px;
  }
}
.notice-dropdown {
  .notice-dropdown-menu {
    width: 368px !important;
    .notice-dropdown-item {
      width: 368px !important;
      padding: 10px;
      word-break: break-word;
    }
  }
}
.help-dropdown-item {
  .help-box {
    display: flex;
    padding: 10px 20px;
    margin-left: -15px;
  }
  .help-title {
    font-size: 14px;
    color: #000000;
    line-height: 16px;
    padding-left: 15px;
  }
}

:deep(.alert-box) {
  .alert-title {
    padding-left: 25px;
    padding-top: 18px;
    font-size: 14px;
    color: #000000;
    line-height: 16px;
    cursor: pointer;
  }
  .alert-cont {
    padding-left: 10px;
    margin-bottom: 15px;
    font-size: 14px;
    color: #000000;
    line-height: 16px;
  }
}
:deep(.el-dropdown-menu__item) {
  --el-dropdown-menuItem-hover-color: #01c19a;
  --el-dropdown-menuItem-color: #01c19a;
  --el-dropdown-menuItem-hover-fill: #ffffff;
}

  .user-dropdown-menu {
    text-align: center;
    // margin-left: 10%;
    width: 246px;
    .user-dropdown-info {
      .user-head-box {
        display: flex;
        align-items: center;
        .head-text {
          margin-left: 12px;
          .user-name{
            font-size: 14px;
            color: #000000;
          }
          .user-id{
            font-size: 12px;
            color: #9B9B9B;
          }
        }

      }
     
    }
    .verify-box{
      
      .user-verify{
        border: 1px solid #DFDFE5;
        border-radius: 3px;
        width: 198px;
        height: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        .verify-status{
          margin-top: 5px;
        }
        .verify-text{
          margin-left: 6px;
          font-size: 14px;
          color: #000000;
        }
      }
    }
    .user-dropdown-item {

      .user-box {
        display: flex;
        padding: 5px 0;
        margin-left: 46px;
        .user-title {
          font-size: 14px;
          color: #000000;
          line-height: 16px;
          margin-left: 15px;
        }
      }
    }
    .logout{
      width: 246px;
      padding: 10px 0;
      font-size: 12px;
      color: #000000;
      line-height: 15px;
      cursor: pointer;
    }
  }

</style>
