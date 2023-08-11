<template>
  <footer>
    <div class="footer-bottom-box">
      <div class="footer-bottom max1290" style="height: 104px;display: flex;justify-content: space-between;">
        <div style="display: flex;align-items: center;"><img :src="logo" /></div>
        <div>
          <div style="text-align: right;margin-top: 20px;"><span>©2023 COINBYTEP2P.COM</span></div>
          <div style="margin-top: -30px;display: flex;gap: 20px;">
            <span class="final-span">Terms  & conditions</span>
            <span class="final-span">Privacy collection notice</span>
            <span class="final-span">Privacy policy</span>
            <span class="final-span">Anti money laundering( AML) policy</span>
          </div>
        </div>
      </div>
    </div>
    <!-- <div
      
      class="message-win-box"
    > -->
    <el-dialog
      v-model="dialogTableVisible"
      class="message-win"
      :show-close="false"
    >
      <!-- <div class="message-win"> -->
      <h1 style="font-size: 24pt; font-weight: 700; color: #000">
        KYC/AML policy
      </h1>

      <p style="margin-top: 10px">
        Coinbyte is bound by Australian law to take steps to ensure that it is
        not involved in the facilitation of money laundering or terrorism
        financing.
      </p>

      <p>
        Various anti-money laundering (AML), counter-terrorism financing (CTF)
        and fraud prevention measures are in place designed to articulate our
        commitment to detecting, preventing and reporting attempts to use our
        platform to illegally launder money, to finance illegal activities such
        as terrorism and drug trafficking, or to commit fraud.
      </p>

      <p>Our measures include, but are not limited to, the following:</p>

      <ul type="disc">
        <li
          class="MsoNormal"
          style="
            mso-margin-top-alt: auto;
            mso-margin-bottom-alt: auto;
            mso-list: l1 level1 lfo1;
            tab-stops: 0.5in;
          "
        >
          Members depositing or withdrawing fiat currency to/from their account
          must undergo a verification check to confirm their identity.
        </li>
        <li
          class="MsoNormal"
          style="
            mso-margin-top-alt: auto;
            mso-margin-bottom-alt: auto;
            mso-list: l1 level1 lfo1;
            tab-stops: 0.5in;
          "
        >
          Verified members are checked against international watch lists
          including, but not limited to, Politically Exposed Persons and US
          Treasury - Office of Foreign Assets Control lists.
        </li>
        <li
          class="MsoNormal"
          style="
            mso-margin-top-alt: auto;
            mso-margin-bottom-alt: auto;
            mso-list: l1 level1 lfo1;
            tab-stops: 0.5in;
          "
        >
          Fiat currency withdrawals can only be made to a bank account held in
          the same name as the Coinbyte account.
        </li>
        <li
          class="MsoNormal"
          style="
            mso-margin-top-alt: auto;
            mso-margin-bottom-alt: auto;
            mso-list: l1 level1 lfo1;
            tab-stops: 0.5in;
          "
        >
          Fiat currency deposits can only be accepted from a bank account held
          in the same name as the Coinbyte account.
        </li>
        <li
          class="MsoNormal"
          style="
            mso-margin-top-alt: auto;
            mso-margin-bottom-alt: auto;
            mso-list: l1 level1 lfo1;
            tab-stops: 0.5in;
          "
        >
          Coinbyte is obliged to report any suspicious activity to the relevant
          authorities.
        </li>
      </ul>

      <div class="bold-title">What is Money Laundering?</div>
      <p>
        Money Laundering is the name given to the process by which illegally
        obtained funds are given the appearance of having been legitimately
        obtained. Every year, vast amounts of funds are generated from illegal
        activities such as drug trafficking, tax evasion, people smuggling,
        theft, arms trafficking and corrupt practices. These funds are mostly in
        the form of cash. The criminals who generate these funds need to bring
        them into the legitimate financial system without raising suspicion. The
        conversion of cash into other forms makes it more usable. It also puts a
        distance between the criminal activities and the funds.
      </p>

      <div class="bold-title">What is Terrorism Financing?</div>
      <p>
        Terrorism financing refers to the processing of funds to sponsor or
        facilitate terrorist activity. A terrorist group, like any other
        criminal organization, builds and maintains an infrastructure to
        facilitate the development of sources of funding, to channel those funds
        to the providers of materials and/or services to the organization, and,
        possibly, to launder the funds used in financing the terrorist activity
        or resulting from that same activity. Terrorist organizations derive
        income from a variety of sources, often combining both lawful and
        unlawful funding, and where the agents involved do not always know the
        illegitimate end of that income. The forms of financing can be grouped
        in two types:
      </p>

      <ul type="disc">
        <li
          class="MsoNormal"
          style="
            mso-margin-top-alt: auto;
            mso-margin-bottom-alt: auto;
            mso-list: l0 level1 lfo2;
            tab-stops: 0.5in;
          "
        >
          Financial support - In the form of donations, community solicitation,
          and other fundraising initiatives. Financial support may come from
          states and large organizations, or from individuals.
        </li>
        <li
          class="MsoNormal"
          style="
            mso-margin-top-alt: auto;
            mso-margin-bottom-alt: auto;
            mso-list: l0 level1 lfo2;
            tab-stops: 0.5in;
          "
        >
          Revenue generating activities - Income is often derived from criminal
          activities such as kidnapping, extortion, smuggling or fraud. Income
          may also be derived from legitimate economic activities such as
          diamond trading or real estate investment.
        </li>
      </ul>

      <div class="bold-title">What is Fraud?</div>
      <p>
        Fraud is a type of criminal activity, defined as an abuse of position,
        or false representation, or prejudicing someone's rights for personal
        gain. Put simply; fraud is an act of deception intended for personal
        gain or to cause a loss to another party. The general criminal offense
        of fraud can include deception whereby someone knowingly makes a false
        representation, fails to disclose information or abuses a position.
      </p>

      <div class="bold-title">Who is AUSTRAC?</div>
      <p>
        Australian Transaction Reports and Analysis Centre (AUSTRAC) is
        Australia's anti-money laundering and counter-terrorism financing
        regulator. AUSTRAC aims to contribute towards a financial environment
        hostile to money laundering, major crime, and tax evasion. Coinbyte is
        registered with AUSTRAC as a Digital Currency Exchange provider.
      </p>
      <div style="font-weight: bold; line-height: 40px; color: #000">
        KYC process
      </div>
      <p>
        Coinbyte's KYC process includes ID verification, face verification,
        document verification such as utility bills as proof of address, and
        biometric verification. As a regulated digital currency exchange
        services provider, we are obligated to follow the money laundering and
        terrorist financing prevention act, thus KYC would be required for all
        our users.
      </p>
      <!-- </div> -->
    </el-dialog>
    <!-- </div> -->
  </footer>
</template>

<script setup lang="ts">
import { defineComponent, getCurrentInstance, ref, watch } from "vue";
import { ArrowDown } from "@element-plus/icons-vue";
import logo from "../../assets/image/logo.svg";
import { getStoredLanguage, saveStoredLanguage } from "../../languageStorage";

const showWin = ref(false);
const dialogTableVisible = ref(false);

const hideWinFn = () => {
  showWin.value = false;
};
const showWinFn = () => {
  showWin.value = true;
};
//切换语言
const currentLanguage = ref(getStoredLanguage() || "English/USD");
const $this = getCurrentInstance()?.appContext.config.globalProperties as any;

const options = [
  {
    value: "English/USD",
    label: "English/USD",
  },
  {
    value: "简体中文",
    label: "简体中文",
  },
  {
    value: "zh-TW",
    label: "繁体中文",
  },
];
const changeLanguage = (selectedLanguage: string) => {
  $this.$i18n.locale = selectedLanguage;
  saveStoredLanguage(selectedLanguage);
  location.reload();
};

watch(currentLanguage, (newLanguage) => {
  changeLanguage(newLanguage);
});
</script>

<style scoped lang="scss">
.footer-trade {
  display: flex;
  justify-content: space-around;
  gap: 11px;
  margin-top: 23px;
  font-size: 17px;
  color: #ffffff;
  line-height: 21px;
  .buy {
    width: 140px;
    height: 38px;
    border: 1px solid #01c19a;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .sell {
    width: 140px;
    height: 38px;
    background: #01c19a;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
}
.footer-info {
  margin-top: 50px;
  .info {
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 9px;
    color: #fff;
  }
}
.max1290 {
  max-width: 1290px;
  margin: 0 auto;
}
@media (max-width: 1400px) {
  .max1290 {
    max-width: 940px;
    margin: 0 auto;
  }
}
@media (max-width: 985px) {
  .max1290 {
    width: auto !important;
    max-width: none;
    padding-left: 30px !important;
    padding-right: 30px !important;
    margin: 0 auto;
  }
}

footer {
  background: #1d262f;
  width: 100%;
  height: 100%;

  div.footer-box {
    box-sizing: border-box;
    border-bottom: none;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    //padding: 10px 20px 30px 20px;
    @media (max-width: 985px) {
      & {
        height: auto;
        padding-bottom: 30px;
        flex-direction: column;
      }
    }
    .lan-box {
      position: relative;
      .lan-icon {
        width: 20px;
        position: absolute;
        top: 7px;
        left: 10px;
        z-index: 999;
      }
      .selectLan {
        width: 148px;
        .selectOption {
          :deep(.el-select-dropdown__item.selected) {
            color: red !important;
          }
        }
        :deep() {
          .el-input--large .el-input__inner {
            color: #e3e3e3;
            margin-left: 20px;
            font-size: 14px;
          }
          .el-input__wrapper {
            height: 34px;
            background-color: #1d262f;
            box-shadow: 0 0 0 1px #5c6368;
          }
          .el-input__suffix-inner > :first-child {
            margin-left: 0;
          }
        }
      }
    }
    .footer-logo-md {
      display: none;
      padding-top: 30px;
      @media (max-width: 985px) {
        & {
          display: flex;
          align-items: center;
        }
      }
      img.logo {
        width: 142px;
        height: auto;
        margin-right: 20px;
      }
      span {
        cursor: pointer;
        display: block;
        font-size: 14px;
        color: #6c6c6c;
        margin-right: 20px;
        padding-top: 10px;
      }
      button.language-chose {
        display: flex;
        align-items: center;
        width: 140px;
        height: 37px;
        img {
          width: 16px;
          margin-right: 6px;
          vertical-align: middle;
        }
        svg {
          margin-left: 4px;
        }
        line-height: 19px;
        font-size: 14px;
        color: #e3e3e3;
        background: none;
        border: 1px solid #5c6368;
        border-radius: 1px;
        padding: 0.5rem 1rem;
      }
    }
    .footer-logo {
      display: inline-block;
      width: 34%;
      padding-top: 40px;
      @media (max-width: 985px) {
        & {
          display: none; //頁面<985
        }
      }

      img.logo {
        width: 142px;
        height: auto;
      }

      span {
        cursor: pointer;
        display: block;
        margin: 0.8rem 0;
        font-size: 14px;
        color: #6c6c6c;
        letter-spacing: 0;
        line-height: 19px;
      }
    }

    .link-cards {
      display: flex;
      width: 100%;
      vertical-align: top;
      justify-content: space-around;
      padding: 0 5% 0 8%;

      @media (max-width: 985px) {
        & {
          padding: 0;
          justify-content: space-between;
          margin-left: 0;
        }
      }

      ul.link-list {
        list-style: none;
        padding-top: 50px;
        @media (max-width: 985px) {
          & {
            padding-top: 40px;
          }
        }
        li:nth-child(1) {
          font-size: 20px;
          color: #ffffff;
          font-weight: 500;
          margin-bottom: 16px;

          &:hover {
            color: #ffffff;
          }
        }

        li {
          font-size: 14px;
          color: #909090;
          cursor: pointer;
          margin-bottom: 16px;

          &:hover {
            color: #fafafa;
          }
        }
      }
    }

    .icon-links {
      padding: 6px 0;
      padding-top: 40px;
      width: 170px;
      vertical-align: middle;
      flex-wrap: wrap;
      flex-shrink: 0;
      @media (max-width: 1400px) {
        & {
          display: none;
        }
      }
      img {
        cursor: pointer;
        width: 16px;
        margin: 12px 12px 0 0;
        height: 16px;
      }
    }
  }
  .icon-links-lg {
    padding-bottom: 10px;
    display: none;
    align-items: center;
    @media (max-width: 1400px) {
      & {
        display: flex;
      }
    }

    img {
      cursor: pointer;
      width: 24px;
      margin: 12px 12px 0 0;
      height: 24px;
    }
  }
  .footer-bottom-box {
    background: #161719;
    overflow: hidden;

    div.footer-bottom {
      width: 100vw;
      height: 60px;
      background: #161719;
      line-height: 60px;
      font-size: 0.8rem;
      color: #909090;
      letter-spacing: 0;
      box-sizing: border-box;
      .final-links {
        margin-right: 16px;
      }

      span {
        cursor: pointer;
      }

      span:hover {
        color: #fafafa;
      }
    }
  }
}
.message-win-box {
  background-color: rgba(0, 0, 0, 0.67);
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  word-break: break-word;
}
// :deep(.el-dialog) {
//   --el-dialog-width: 80%;
// }
.bold-title {
  font-weight: bold;
  line-height: 40px;
  color: rgb(0, 0, 0);
}
:deep(.message-win) {
  .el-dialog__body {
    margin-top: -30px;
  }
  P {
    word-break: break-word;
    font-size: 12pt;
    color: #000;
  }
  position: absolute;
  width: 80%;
  height: 80%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  padding: 0;
  font-size: 12pt;
  line-height: 20px !important;
  color: #060606;
  background-color: white;
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-word;
  ul {
    list-style: disc;
    margin-left: 15px !important;
    word-break: break-word;
    // margin-top: 5px;
    li {
      font-size: 12pt !important;
      word-break: break-word;
      color: #000;
      line-height: 21px;
      list-style-position: outside !important;
    }
  }
  * {
    font-family: HarmonyOS Sans, Helvetica, PingFang SC, Hiragino Sans GB,
      Microsoft YaHei, SimSun, sans-serif !important;
    //font-size: 14px!important;
  }
  .MsoNormal {
    ::marker {
      unicode-bidi: isolate;
      font-variant-numeric: tabular-nums;
      text-transform: none;
      text-indent: 0px !important;
      text-align: start !important;
      text-align-last: start !important;
    }
  }

  /* Style Definitions */
  // p.MsoNormal, li.MsoNormal, div.MsoNormal
  // {mso-style-unhide:no;
  //   mso-style-qformat:yes;
  //   mso-style-parent:"";
  //   margin:0in;
  //   margin-bottom:.0001pt;
  //   mso-pagination:widow-orphan;
  //   font-size:10.0pt;
  //   font-family:"Calibri",sans-serif;
  //   mso-fareast-font-family:SimSun;
  //   mso-bidi-font-family:"Times New Roman";}
  // h1
  // {mso-style-unhide:no;
  //   mso-style-qformat:yes;
  //   mso-style-parent:"";
  //   mso-style-next:正文;
  //   mso-margin-top-alt:auto;
  //   margin-right:0in;
  //   mso-margin-bottom-alt:auto;
  //   margin-left:0in;
  //   mso-pagination:widow-orphan;
  //   mso-outline-level:1;
  //   font-size:24.0pt;
  //   font-family:SimSun;
  //   mso-font-kerning:22.0pt;
  //   font-weight:bold;}
  // p
  // {mso-style-unhide:no;
  //   mso-style-parent:"";
  //   mso-margin-top-alt:auto;
  //   margin-right:0in;
  //   mso-margin-bottom-alt:auto;
  //   margin-left:0in;
  //   mso-pagination:widow-orphan;
  //   font-size:12.0pt;
  //   font-family:"Times New Roman",serif;
  //   mso-fareast-font-family:SimSun;}
  // .MsoChpDefault
  // {mso-style-type:export-only;
  //   mso-default-props:yes;
  //   mso-fareast-font-family:SimSun;}
  // @page WordSection1
  // {size:595.3pt 841.9pt;
  //   margin:1.0in 1.25in 1.0in 1.25in;
  //   mso-header-margin:.5in;
  //   mso-footer-margin:.5in;
  //   mso-paper-source:0;}
  // div.WordSection1
  // {page:WordSection1;}
  // /* List Definitions */
  // @list l0
  // {mso-list-id:-1040315353;
  //   mso-list-template-ids:-1040315353;}
  // @list l0:level1
  // {mso-level-number-format:bullet;
  //   mso-level-text:;
  //   mso-level-tab-stop:.5in;
  //   mso-level-number-position:left;
  //   text-indent:-.25in;
  //   mso-ansi-font-size:10.0pt;
  //   font-family:Symbol;
  //   mso-bidi-font-family:Symbol;}
  // @list l0:level2
  // {mso-level-number-format:bullet;
  //   mso-level-text:o;
  //   mso-level-tab-stop:1.0in;
  //   mso-level-number-position:left;
  //   text-indent:-.25in;
  //   mso-ansi-font-size:10.0pt;
  //   font-family:"Courier New";}
  // @list l0:level3
  // {mso-level-number-format:bullet;
  //   mso-level-text:;
  //   mso-level-tab-stop:1.5in;
  //   mso-level-number-position:left;
  //   text-indent:-.25in;
  //   mso-ansi-font-size:10.0pt;
  //   font-family:Wingdings;
  //   mso-bidi-font-family:Wingdings;}
  // @list l0:level4
  // {mso-level-number-format:bullet;
  //   mso-level-text:;
  //   mso-level-tab-stop:2.0in;
  //   mso-level-number-position:left;
  //   text-indent:-.25in;
  //   mso-ansi-font-size:10.0pt;
  //   font-family:Wingdings;
  //   mso-bidi-font-family:Wingdings;}
  // @list l0:level5
  // {mso-level-number-format:bullet;
  //   mso-level-text:;
  //   mso-level-tab-stop:2.5in;
  //   mso-level-number-position:left;
  //   text-indent:-.25in;
  //   mso-ansi-font-size:10.0pt;
  //   font-family:Wingdings;
  //   mso-bidi-font-family:Wingdings;}
  // @list l0:level6
  // {mso-level-number-format:bullet;
  //   mso-level-text:;
  //   mso-level-tab-stop:3.0in;
  //   mso-level-number-position:left;
  //   text-indent:-.25in;
  //   mso-ansi-font-size:10.0pt;
  //   font-family:Wingdings;
  //   mso-bidi-font-family:Wingdings;}
  // @list l0:level7
  // {mso-level-number-format:bullet;
  //   mso-level-text:;
  //   mso-level-tab-stop:3.5in;
  //   mso-level-number-position:left;
  //   text-indent:-.25in;
  //   mso-ansi-font-size:10.0pt;
  //   font-family:Wingdings;
  //   mso-bidi-font-family:Wingdings;}
  // @list l0:level8
  // {mso-level-number-format:bullet;
  //   mso-level-text:;
  //   mso-level-tab-stop:4.0in;
  //   mso-level-number-position:left;
  //   text-indent:-.25in;
  //   mso-ansi-font-size:10.0pt;
  //   font-family:Wingdings;
  //   mso-bidi-font-family:Wingdings;}
  // @list l0:level9
  // {mso-level-number-format:bullet;
  //   mso-level-text:;
  //   mso-level-tab-stop:4.5in;
  //   mso-level-number-position:left;
  //   text-indent:-.25in;
  //   mso-ansi-font-size:10.0pt;
  //   font-family:Wingdings;
  //   mso-bidi-font-family:Wingdings;}
  // @list l1
  // {mso-list-id:1350454723;
  //   mso-list-template-ids:1350454723;}
  // @list l1:level1
  // {mso-level-number-format:bullet;
  //   mso-level-text:;
  //   mso-level-tab-stop:.5in;
  //   mso-level-number-position:left;
  //   text-indent:-.25in;
  //   mso-ansi-font-size:10.0pt;
  //   mso-ascii-font-family:Symbol;
  //   mso-hansi-font-family:Symbol;
  //   mso-bidi-font-family:Symbol;}
  // @list l1:level2
  // {mso-level-number-format:bullet;
  //   mso-level-text:o;
  //   mso-level-tab-stop:1.0in;
  //   mso-level-number-position:left;
  //   text-indent:-.25in;
  //   mso-ansi-font-size:10.0pt;
  //   mso-ascii-font-family:"Courier New";
  //   mso-hansi-font-family:"Courier New";
  //   mso-bidi-font-family:"Courier New";}
  // @list l1:level3
  // {mso-level-number-format:bullet;
  //   mso-level-text:;
  //   mso-level-tab-stop:1.5in;
  //   mso-level-number-position:left;
  //   text-indent:-.25in;
  //   mso-ansi-font-size:10.0pt;
  //   mso-ascii-font-family:Wingdings;
  //   mso-hansi-font-family:Wingdings;
  //   mso-bidi-font-family:Wingdings;}
  // @list l1:level4
  // {mso-level-number-format:bullet;
  //   mso-level-text:;
  //   mso-level-tab-stop:2.0in;
  //   mso-level-number-position:left;
  //   text-indent:-.25in;
  //   mso-ansi-font-size:10.0pt;
  //   font-family:Wingdings;
  //   mso-bidi-font-family:Wingdings;}
  // @list l1:level5
  // {mso-level-number-format:bullet;
  //   mso-level-text:;
  //   mso-level-tab-stop:2.5in;
  //   mso-level-number-position:left;
  //   text-indent:-.25in;
  //   mso-ansi-font-size:10.0pt;
  //   font-family:Wingdings;
  //   mso-bidi-font-family:Wingdings;}
  // @list l1:level6
  // {mso-level-number-format:bullet;
  //   mso-level-text:;
  //   mso-level-tab-stop:3.0in;
  //   mso-level-number-position:left;
  //   text-indent:-.25in;
  //   mso-ansi-font-size:10.0pt;
  //   font-family:Wingdings;
  //   mso-bidi-font-family:Wingdings;}
  // @list l1:level7
  // {mso-level-number-format:bullet;
  //   mso-level-text:;
  //   mso-level-tab-stop:3.5in;
  //   mso-level-number-position:left;
  //   text-indent:-.25in;
  //   mso-ansi-font-size:10.0pt;
  //   font-family:Wingdings;
  //   mso-bidi-font-family:Wingdings;}
  // @list l1:level8
  // {mso-level-number-format:bullet;
  //   mso-level-text:;
  //   mso-level-tab-stop:4.0in;
  //   mso-level-number-position:left;
  //   text-indent:-.25in;
  //   mso-ansi-font-size:10.0pt;
  //   font-family:Wingdings;
  //   mso-bidi-font-family:Wingdings;}
  // @list l1:level9
  // {mso-level-number-format:bullet;
  //   mso-level-text:;
  //   mso-level-tab-stop:4.5in;
  //   mso-level-number-position:left;
  //   text-indent:-.25in;
  //   mso-ansi-font-size:10.0pt;
  //   font-family:Wingdings;
  //   mso-bidi-font-family:Wingdings;}
  // ol
  // {margin-bottom:0in;}
  // ul
  // {margin-bottom:0in;}
}
:deep(.el-select .el-input.is-focus .el-input__wrapper) {
  box-shadow: 0 0 0 1px #5c6368 !important;
  border-color: #5c6368;
}
:deep() {
  .el-select {
    --el-select-input-focus-border-color: #5c6368;
  }
  .el-select-dropdown__item {
    text-align: center;
  }
}
</style>
