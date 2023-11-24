<template>
  <div class="homeBox">
    <Header/>
    <div class="bannerContainer">
      <div class="bg-img">
        <el-row style="height: 100%" class="max1290">
          <el-col :md="24" :sm="24" :xs="24" class="banner-left">
            <div class="banner-title">{{ $t('messages.home.banner_title') }}
<!--              <span v-if="$route.path.startsWith('/nz')">NZ</span>-->
<!--              <span v-if="$route.path.startsWith('/au')">AU</span>-->
            </div>
            <div class="banner-content">
              <!--              Buy and sell Cryptocurrencies with a non-custodial exchange safely-->
              <!--              and securely without hidden fees You choose where you keep your-->
              <!--              Crypto safe.-->
              {{ $t('messages.home.banner_content') }} <br/>
              {{ $t('messages.home.banner_content2') }}
            </div>
            <div class="for-what">
              <div style="position: relative">
                <img class="frame" :src="banner_frame"/>
                <div class="content">
                  <div class="content-title">{{ $t('messages.home.for_buy') }}</div>
                  <div class="content-way">{{ $t('messages.home.when_buy') }}</div>
                  <GetButton class="start-btn" type="success" :text="$t('messages.home.start_btn')"
                             @click="goToKyc('buy')"/>
                </div>
              </div>
              <div style="position: relative">
                <img class="frame gap-bottom" :src="banner_frame"/>
                <div class="content">
                  <div class="content-title">{{ $t('messages.home.for_sell') }}</div>
                  <div class="content-way">{{ $t('messages.home.when_sell') }}</div>
                  <GetButton class="start-btn" type="success" :text="$t('messages.home.start_btn')"
                             @click="goToKyc('sell')"/>
                </div>
              </div>
            </div>
            <div class="banner-more">
              <div class="banner-more-img">
                <img :src="registered_icon" alt=""/>
              </div>
              <div>
                <div class="banner-more-title" v-if="$route.path.startsWith('/au')">
                  {{ $t("messages.home.au_reg") }}
                </div>
                <div class="banner-more-title" v-if="$route.path.startsWith('/nz')">
                  {{ $t("messages.home.nz_reg") }}
                </div>
                <div
                    class="banner-learn-more"
                    @click="dialogTableVisible = true"
                >
                  {{ $t("messages.home.banner_more") }}
                  <el-icon class="more-arrow">
                    <Right/>
                  </el-icon>
                </div>
                <el-dialog v-model="dialogTableVisible" class="alert-dialog custom-dialog"
                           v-if="$route.path.startsWith('/au')">
                  <img
                      style="position:absolute;bottom: 0;left: 0;z-index: -1"
                      :src="learm_background"/>
                  <div style="position: relative;">
                    <el-row :gutter="20" v-if="$route.path.startsWith('/au')">
                      <el-col
                          :md="12"
                          :xs="24"
                          v-for="(item, index) in gridData"
                          :key="index"
                      >
                        <img class="au-learn-img" :src="asic"/>

                        <div class="alert-box">
                          <div class="alert-title">{{ item.title }}</div>
                          <div class="alert-cont">{{ item.content1 }}</div>
                          <div class="alert-cont">{{ item.content2 }}</div>
                          <div class="alert-address">
                            <a href="https://connectonline.asic.gov.au" target="_blank">
                              {{ item.address }}
                              <el-icon class="more-arrow">
                                <Right/>
                              </el-icon>
                            </a>
                          </div>
                        </div>
                      </el-col>
                      <el-col
                          :md="12"
                          :xs="24"
                          v-for="(item, index) in gridData1"
                          :key="index"
                          class="gap"
                      >
                        <img class="au-learn-img" :src="austrac"/>

                        <div class="alert-box">
                          <div class="alert-title">{{ item.title }}</div>
                          <div class="alert-cont">{{ item.content1 }}</div>
                          <div class="alert-cont">{{ item.content2 }}</div>
                          <div class="alert-cont">{{ item.content3 }}</div>
                          <div class="alert-cont">{{ item.content4 }}</div>
                          <div class="alert-address">
                            <a href="https://online.austrac.gov.au/ao/public/rsregister.seam" target="_blank">
                              {{ item.address }}
                              <el-icon class="more-arrow">
                                <Right/>
                              </el-icon>
                            </a>
                          </div>
                        </div>
                      </el-col>
                    </el-row>
                    <el-row :gutter="20" v-if="$route.path.startsWith('/nz')">
                      <el-col
                          :md="12"
                          :xs="24"
                          v-for="(item, index) in nzData"
                          :key="index"
                      >
                        <!--                      <img style="position: absolute;top: 0;left: 0;" :src="learn_dialog_back" />-->
                        <div class="alert-box">
                          <div class="alert-title">{{ item.title }}</div>
                          <div class="alert-cont">{{ item.content1 }}</div>
                          <div class="alert-cont">{{ item.content2 }}</div>
                          <div class="alert-address">
                            <a href="https://www.nzbn.govt.nz/" target="_blank">
                              {{ item.address }}
                              <el-icon class="more-arrow">
                                <Right/>
                              </el-icon>
                            </a>
                          </div>
                        </div>
                      </el-col>
                      <el-col
                          :md="12"
                          :xs="24"
                          v-for="(item, index) in nzData1"
                          :key="index"
                          class="gap-nz"
                      >
                        <div class="alert-box">
                          <div class="alert-title">{{ item.title }}</div>
                          <div class="alert-cont">{{ item.content1 }}</div>
                          <div class="alert-cont">{{ item.content2 }}</div>
                          <div class="alert-address">
                            <a href="https://fsp-register.companiesoffice.govt.nz/" target="_blank">
                              {{ item.address }}
                              <el-icon class="more-arrow">
                                <Right/>
                              </el-icon>
                            </a>
                          </div>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </el-dialog>
                <el-dialog v-model="dialogTableVisible" class="alert-dialog"
                           v-if="$route.path.startsWith('/nz')">
                  <img style="position:absolute;bottom: 0;left: 0;z-index: -1" :src="learm_background"/>

                  <div style="position: relative;">
                    <el-row :gutter="40" v-if="$route.path.startsWith('/nz')">
                      <el-col
                          :md="12"
                          :xs="24"
                          v-for="(item, index) in nzData"
                          :key="index"
                          class="nz-divider"
                      >
                        <img class="nz-learn-img" :src="learn_more2"/>
                        <div class="alert-box">

                          <div class="alert-cont" style="color: #0a0a0a">New Zealand Companies Office</div>
                          <div class="alert-cont" style="color: #0a0a0a">NZBN 9429049898163</div>

                          <div class="alert-address">
                            <a href="https://www.nzbn.govt.nz/" style="color: #01c19a;text-decoration: underline;"
                               target="_blank">
                              {{ item.address }}
                              <el-icon class="more-arrow">
                                <Right/>
                              </el-icon>
                            </a>
                          </div>
                        </div>
                      </el-col>
                      <el-col
                          :md="12"
                          :xs="24"
                          v-for="(item, index) in nzData1"
                          :key="index"
                          class="gap"
                      >
                        <img class="nz-learn-img" :src="learn_more3"/>

                        <div class="alert-box">
                          <!--                          <div class="alert-title">{{ item.title }}</div>-->
                          <div class="alert-cont" style="color: #0a0a0a">New Zealand Companies Office</div>
                          <div class="alert-cont" style="color: #0a0a0a">FSP 1004001</div>
                          <div class="alert-address">
                            <a href="https://fsp-register.companiesoffice.govt.nz/"
                               style="color: #01c19a;text-decoration: underline;" target="_blank">
                              {{ item.address }}
                              <el-icon class="more-arrow">
                                <Right/>
                              </el-icon>
                            </a>
                          </div>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </el-dialog>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- <div v-else></div> -->
    </div>

    <div class="homeContainer">
      <div class="trade-way">
        <el-tabs v-model="tradeTab" class="trade-tabs">
          <el-tab-pane :label="t('messages.home.buy')" name="first"></el-tab-pane>
          <el-tab-pane :label="t('messages.home.sell')" name="second"></el-tab-pane>
        </el-tabs>
      </div>
      <div v-if="tradeTab === 'first'">
        <div class="tabs-content">
          <div class="tabs-content-title">
            {{ $t("messages.home.buy_through") }} <span>CoinbyteP2P</span>
          </div>
          <div class="tabs-step" v-if="windowWidth > 769">
            <el-steps align-center>
              <el-step :title="t('messages.home.step1_title')">
                <template #icon>
                  <img class="step-icon" :src="icon_01"/>
                </template>
                <template #description>
                  {{ $t("messages.home.step1_cont") }}
                </template>
              </el-step>
              <el-step :title="t('messages.home.step2_title')">
                <template #icon>
                  <img class="step-icon" :src="icon_02"/>
                </template>
                <template #description>
                  {{ $t("messages.home.step2_cont") }}
                </template>
              </el-step>
              <el-step :title="t('messages.home.step3_title')">
                <template #icon>
                  <img class="step-icon" :src="icon_03"/>
                </template>
                <template #description>
                  {{ $t("messages.home.step3_cont") }}
                </template>
              </el-step>
              <el-step :title="t('messages.home.step4_title')">
                <template #icon>
                  <img class="step-icon" :src="icon_04"/>
                </template>
                <template #description>
                  {{ $t("messages.home.step4_cont") }}
                </template>
              </el-step>
            </el-steps>
          </div>
          <div v-else>
            <div class="tabs-step">
              <div class="custom-step">
                <div class="step">
                  <img class="step-icon" :src="icon_01"/>
                  <div class="step-title">{{ $t("messages.home.step1_title") }}</div>
                  <div class="step-description">{{ $t("messages.home.step1_cont") }}</div>
                </div>
                <div class="step">
                  <img class="step-icon" :src="icon_02"/>
                  <div class="step-title">{{ $t("messages.home.step2_title") }}</div>
                  <div class="step-description">{{ $t("messages.home.step2_cont") }}</div>
                </div>
                <div class="step">
                  <img class="step-icon" :src="icon_03"/>
                  <div class="step-title">{{ $t("messages.home.step3_title") }}</div>
                  <div class="step-description">{{ $t("messages.home.step3_cont") }}</div>
                </div>
                <div class="step">
                  <img class="step-icon" :src="icon_04"/>
                  <div class="step-title">{{ $t("messages.home.step4_title") }}</div>
                  <div class="step-description">{{ $t("messages.home.step4_cont") }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="tradeTab === 'second'">
        <div class="tabs-content">
          <div class="tabs-content-title">
            {{ $t("messages.home.sell_through") }} <span>CoinbyteP2P</span>
          </div>
          <div class="tabs-step" v-if="windowWidth > 769">
            <el-steps align-center>

              <el-step :title="t('messages.home.step1_title')">
                <template #icon>
                  <img class="step-icon" :src="icon_01"/>
                </template>

                <template #description>
                  {{ $t("messages.home.sell1_cont") }}
                </template>
              </el-step>
              <el-step :title="t('messages.home.step2_title')">
                <template #icon>
                  <img class="step-icon" :src="icon_02"/>
                </template>
                <template #description>
                  {{ $t("messages.home.sell2_cont") }}
                </template>
              </el-step>
              <el-step :title="t('messages.home.sell3_title')">
                <template #icon>
                  <img class="step-icon" :src="icon_03"/>
                </template>
                <template #description>
                  {{ $t("messages.home.sell3_cont") }}
                </template>
              </el-step>
              <el-step :title="t('messages.home.sell4_title')">
                <template #icon>
                  <img class="step-icon" :src="icon_04"/>
                </template>
                <template #description>
                  {{ $t("messages.home.sell4_cont") }}
                </template>
              </el-step>
            </el-steps>
          </div>
          <div v-else>
            <div class="tabs-step">
              <div class="custom-step">
                <div class="step">
                  <img class="step-icon" :src="icon_01" />
                  <div class="step-title">{{ $t("messages.home.step1_title") }}</div>
                  <div class="step-description">{{ $t("messages.home.sell1_cont") }}</div>
                </div>
              </div>
              <div class="custom-step">
                <div class="step">
                  <img class="step-icon" :src="icon_02" />
                  <div class="step-title">{{ $t("messages.home.step2_title") }}</div>
                  <div class="step-description">{{ $t("messages.home.sell2_cont") }}</div>
                </div>
              </div>
              <div class="custom-step">
                <div class="step">
                  <img class="step-icon" :src="icon_03" />
                  <div class="step-title">{{ $t("messages.home.sell3_title") }}</div>
                  <div class="step-description">{{ $t("messages.home.sell3_cont") }}</div>
                </div>
              </div>
              <div class="custom-step">
                <div class="step">
                  <img class="step-icon" :src="icon_04" />
                  <div class="step-title">{{ $t("messages.home.sell4_title") }}</div>
                  <div class="step-description">{{ $t("messages.home.sell4_cont") }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="forth-part">
        <div class="forth-title max1290">
          <div> {{ $t("messages.home.fifth_why") }} <span>CoinbyteP2P</span> ?</div>
          <div class="tip">{{ $t("messages.home.fifth_exchange") }}</div>

          <el-scrollbar height="100px" :ref="scrollContainer">
            <div class="choose-reason" ref="reasonContainer">
              <el-radio-group v-model="reasonTab" size="large" class="reason-box" :ref="radioGroup"  :style="{ transform: `translateX(${buttonOffset}px)` }">
                <el-radio-button :label="t('messages.home.fifth_regulation')" @click="scrollToCenter(0)"></el-radio-button>
                <el-radio-button :label="t('messages.home.fifth_fiat')" @click="scrollToCenter(1)"></el-radio-button>
                <el-radio-button :label="t('messages.home.fifth_Totally')" @click="scrollToCenter(2)"></el-radio-button>
                <el-radio-button :label="t('messages.home.fifth_easy')" @click="scrollToCenter(3)"></el-radio-button>
                <el-radio-button :label="t('messages.home.fifth_live')" @click="scrollToCenter(4)"></el-radio-button>
              </el-radio-group>
            </div>
          </el-scrollbar>
        <div  class="tab-content-wrapper"
              @touchstart="handleTouchStart"
              @touchmove="handleTouchMove"
              @touchend="handleTouchEnd">
          <div v-if="reasonTab === t('messages.home.fifth_regulation')" >
            <el-row class="tab-content-box">
              <el-col :span="11" :xs="24">
                <div class="tab-img">
                  <img :src="image01"/></div
                >
              </el-col>
              <el-col :span="10" :xs="24">
                <div class="tab-content">
                  <div class="tab-content-title">{{ $t("messages.home.fifth_regulation") }}</div>
                  <div class="tab-content-tip" v-if="$route.path.startsWith('/au')">
                    {{ $t("messages.home.fifth_regulationA") }}
                  </div>
                  <div class="tab-content-tip" v-if="$route.path.startsWith('/nz')">
                    {{ $t("messages.home.fifth_regulationC") }}
                  </div>
                  <div class="tab-content-btn">
                    <GetButton class="trade-btn" type="success" @click="goKyc('buy')"
                               :text="t('messages.home.start_btn')"/>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div v-if="reasonTab === t('messages.home.fifth_fiat')">
            <el-row class="tab-content-box">
              <el-col :span="11" :xs="24">
                <div class="tab-img" v-if="$route.path.startsWith('/au')">
                  <img :src="image02_au"/>
                </div>
                <div class="tab-img" v-if="$route.path.startsWith('/nz')">
                  <img :src="image02"/>
                </div>
              </el-col>
              <el-col :span="10" :xs="24">
                <div class="tab-content">
                  <div class="tab-content-title">{{ $t("messages.home.fifth_fiat") }}</div>
                  <div class="tab-content-tip"  v-if="$route.path.startsWith('/au')">
                    {{ $t("messages.home.fifth_fiatA") }}
                  </div>
                  <div class="tab-content-tip"  v-if="$route.path.startsWith('/nz')">
                    {{ $t("messages.home.fifth_fiatC") }}
                  </div>
                  <div class="tab-content-btn">
                    <GetButton class="trade-btn" type="success" @click="goKyc('buy')"
                               :text="t('messages.home.start_btn')"/>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div v-if="reasonTab === t('messages.home.fifth_Totally')">
            <el-row class="tab-content-box">
              <el-col :span="11" :xs="24">
                <div class="tab-img" v-if="$route.path.startsWith('/au')">
                  <img :src="image03_au"/>
                </div>
                <div class="tab-img" v-if="$route.path.startsWith('/nz')">
                  <img :src="image03"/>
                </div>
              </el-col>
              <el-col :span="10" :xs="24">
                <div class="tab-content">
                  <div class="tab-content-title">{{ $t("messages.home.fifth_Totally") }}</div>
                  <div class="tab-content-tip">
                    {{ $t("messages.home.fifth_TotallC") }}
                  </div>
                  <div class="tab-content-btn">
                    <GetButton class="trade-btn" type="success" @click="goKyc('buy')"
                               :text="t('messages.home.start_btn')"/>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div v-if="reasonTab === t('messages.home.fifth_easy')">
            <el-row class="tab-content-box">
              <el-col :span="11" :xs="24">
                <div class="tab-img" v-if="$route.path.startsWith('/au')">
                  <img :src="image04"/>
                </div>
                <div class="tab-img" v-if="$route.path.startsWith('/nz')">
                  <img :src="icon_card"/>
                </div>


              </el-col>
              <el-col :span="10" :xs="24">
                <div class="tab-content">
                  <div class="tab-content-title">{{ $t("messages.home.fifth_easy") }}</div>
                  <div class="tab-content-tip">
                    {{ $t("messages.home.fifth_easyC") }}
                  </div>
                  <div class="tab-content-btn">
                    <GetButton class="trade-btn" type="success" @click="goKyc('buy')"
                               :text="t('messages.home.start_btn')"/>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div v-if="reasonTab === t('messages.home.fifth_live')">
            <el-row class="tab-content-box">
              <el-col :span="11" :xs="24">
                <div class="tab-img">
                  <img :src="image05"/></div
                >
              </el-col>
              <el-col :span="10" :xs="24">
                <div class="tab-content">
                  <div class="tab-content-title">{{ $t("messages.home.fifth_live") }}</div>
                  <div class="tab-content-tip">
                    {{ $t("messages.home.fifth_liveC") }}
                  </div>
                  <div class="tab-content-btn">
                    <GetButton class="trade-btn" type="success" @click="goKyc('buy')"
                               :text="$t('messages.home.start_btn')"/>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>

        </div>
      </div>

      <div class="seventh-part max1290" v-if="windowWidth > 768">
        <div class="first-level-title">
          {{ $t("messages.home.seventh_explore") }}<span style="color: #01c19a">CoinByteP2P</span>
        </div>
        <el-row
            class="seventh-part-list"
            type="flex"
            justify="space-between"
            :gutter="40"
        >
          <el-col :span="7" class="listItem">
            <div class="seventh-part-img">
              <img :src="part07_pic01" alt=""/>
            </div>
            <div class="item-title">
              {{ $t("messages.home.seventh_how") }}
            </div>
          </el-col>
          <el-col :span="7" class="listItem">
            <div class="seventh-part-img">
              <img :src="part07_pic02" alt=""/>
            </div>
            <div class="item-title">
              {{ $t("messages.home.seventh_start") }}
            </div>
          </el-col>
          <el-col :span="7" class="listItem">
            <div class="seventh-part-img">
              <img :src="part07_pic03" alt=""/>
            </div>
            <div class="item-title">
              {{ $t("messages.home.seventh_earn") }}
            </div>
          </el-col>
        </el-row>
        <div class="view-more">
          <span>{{ $t("messages.home.seventh_more") }}</span>
        </div>
      </div>

      <div class="seventh-part max1290" v-if="windowWidth <= 768">
        <div class="first-level-title">
          {{ $t("messages.home.seventh_explore") }}
        </div>
        <el-row
            class="seventh-part-list"
            type="flex"
            justify="space-between"
            :gutter="40"
        >
          <el-col :span="24" class="listItem">
            <div class="seventh-part-img">
              <img :src="part07_pic01" alt=""/>
            </div>
            <div class="item-title">
              {{ $t("messages.home.seventh_how") }}
            </div>
          </el-col>
          <el-col :span="24" class="listItem">
            <div class="seventh-part-img">
              <img :src="part07_pic02" alt=""/>
            </div>
            <div class="item-title">
              {{ $t("messages.home.seventh_start") }}
            </div>
          </el-col>
          <el-col :span="24" class="listItem">
            <div class="seventh-part-img">
              <img :src="part07_pic03" alt=""/>
            </div>
            <div class="item-title">
              {{ $t("messages.home.seventh_earn") }}
            </div>
          </el-col>
        </el-row>
        <div class="view-more" style="margin-top: 0px">
          <span>{{ $t("messages.home.seventh_more") }} </span>
        </div>
      </div>
      <!-- //eighth-part -->
      <faq></faq>
    </div>
    <footer v-if="windowWidth > 769">
      <div class="footer-box max1290">
        <div class="footer-logo">
          <div
              class="footer-title"
          >
            {{ $t("messages.footer.start") }}
          </div>
          <div class="footer-trade">
            <div class="buy" @click="goToKyc('buy')">{{ $t("messages.footer.buy") }}</div>
            <div class="sell" @click="goToKyc('sell')">{{ $t("messages.footer.sell") }}</div>
          </div>
          <div class="footer-info">
            <div class="info">{{ $t("messages.footer.smsf") }}</div>
            <a href="/" style="color: #01c19a; font-size: 14px;">{{
                $t("messages.footer.more")
              }}</a>
            <div style="margin-top: 32px;margin-bottom: 20px; font-size: 14px;">{{
                $t("messages.footer.purchase")
              }}
            </div>
          </div>
          <!-- <div class="lan-box">
          <div class="lan-icon">
            <img :src="top_en" alt="" />
          </div>
          <el-select
            v-model="currentLanguage"
            class="selectLan"
            placeholder="Select"
            size="large"
            @change="changeLanguage"
            :popper-append-to-body="false"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div> -->
        </div>

        <div class="link-cards">
          <ul class="link-list">
            <li>{{ $t("messages.footer.about") }}</li>
            <li>
              <a
                  href="javascript:void(0)"
                  @click="goToKyc('buy')"
                  style="color: rgb(144, 144, 144); text-decoration: none"
              >{{ $t("messages.footer.about_us") }}</a
              >
            </li>
            <li>
              <a
                  href="javascript:void(0)"
                  @click="goToKyc('sell')"
                  style="color: rgb(144, 144, 144); text-decoration: none"
              >{{ $t("messages.footer.contact_us") }}</a
              >
            </li>
          </ul>
          <ul class="link-list">
            <li>{{ $t("messages.footer.legal") }}</li>
            <li><a href="/au/learnList?type=1"
                   style="color: rgb(144, 144, 144); text-decoration: none">{{ $t("messages.footer.terms") }}</a></li>
            <li><a href="/au/learnList?type=2"
                   style="color: rgb(144, 144, 144); text-decoration: none">{{ $t("messages.footer.privacy") }}</a></li>
            <li><a href="/au/learnList?type=3"
                   style="color: rgb(144, 144, 144); text-decoration: none">{{ $t("messages.footer.EOFY") }}</a></li>
            <li><a href="/au/learnList?type=4"
                   style="color: rgb(144, 144, 144); text-decoration: none">{{ $t("messages.footer.FAQs") }}</a></li>

            <!-- <li @click="dialogTableVisible = true">
            {{ $t("messages.footer.kyc_aml") }}
          </li> -->
          </ul>
          <ul class="link-list">
            <li>{{ $t("messages.footer.service") }}</li>
            <li><a href="/au" style="color: #909090;text-decoration: none"><span class="flag-icon"
                                                                                 :class="'flag-icon-au'"></span>
              {{ $t("messages.footer.service_instant") }}</a></li>
            <li><a href="/nz" style="color: #909090;text-decoration: none"><span class="flag-icon"
                                                                                 :class="'flag-icon-nz'"></span>
              {{ $t("messages.footer.Zealand") }}</a></li>
            <!-- <li>{{ $t("messages.footer.service_spot_trading") }}</li> -->
          </ul>
          <ul class="link-list">
            <li>{{ $t("messages.footer.LEGAL") }}</li>
            <li>{{ $t("messages.footer.terms_conditions") }}</li>
            <li>{{ $t("messages.footer.policy") }}</li>
            <li>{{ $t("messages.footer.aml") }}</li>
          </ul>
          <ul class="link-list">
            <li>{{ $t("messages.footer.support") }}</li>
            <li>
              <router-link v-if="$route.path.startsWith('/au')" to="/au/about"
                           style="color: #909090;text-decoration: none ">{{
                  $t("messages.footer.us")
                }}
              </router-link>
              <router-link v-if="$route.path.startsWith('/nz')" to="/nz/about"
                           style="color: #909090;text-decoration: none ">{{
                  $t("messages.footer.us")
                }}
              </router-link>
            </li>
            <li>
              <router-link v-if="$route.path.startsWith('/nz')" to="/nz/contact"
                           style="color: #909090;text-decoration: none ">
                {{ $t("messages.footer.support_center") }}
              </router-link>
              <router-link v-if="$route.path.startsWith('/au')" to="/au/contact"
                           style="color: #909090;text-decoration: none ">
                {{ $t("messages.footer.support_center") }}
              </router-link>
            </li>
            <!-- <li>
            <a
              href="/contact"
              style="color: rgb(144, 144, 144); text-decoration: none"
              >{{ $t("messages.footer.support_connect") }}</a
            >
          </li> -->
          </ul>
        </div>
        <div
            class="icon-links"
            style="
                    font-size: 14px;
                    color: #808080;
                    line-height: 19px;
                    width: 8%;
                  "
        >
          <img src="../../assets/icons/icon_twitter.svg" alt=""/>
          <img src="../../assets/icons/icon_telegram.svg" alt=""/>
          <img src="../../assets/icons/icon_whatsapp.svg" alt=""/>
        </div>
      </div>

      <div
          class="icon-links-lg max1290"
          style="font-size: 14px; color: #808080; line-height: 19px"
      >
        <!--              {{ $t("messages.footer.dce_num") }}-->
        <img src="../../assets/icons/icon_twitter.svg" alt=""/>
        <img src="../../assets/icons/icon_telegram.svg" alt=""/>
        <img src="../../assets/icons/icon_whatsapp.svg" alt=""/>

      </div>
    </footer>
    <footer v-else>
      <div class="footer-links" style="padding:20px">
        <div class="footer-logo">
          <div
              class="footer-title"
          >
            {{ $t("messages.footer.start") }}
          </div>
          <div class="footer-trade" style="justify-content: flex-start;">
            <div class="buy" @click="goToKyc('buy')">Buy</div>
            <div class="sell" @click="goToKyc('sell')">Sell</div>
          </div>
          <div class="footer-info">
            <div class="info">{{ $t("messages.footer.smsf") }}</div>
            <a href="/" style="color: #01c19a; font-size: 14px;">{{
                $t("messages.footer.more")
              }}</a>
            <div style="margin-top: 32px;margin-bottom: 20px; font-size: 14px;">{{
                $t("messages.footer.purchase")
              }}
            </div>
          </div>
          <!-- <div class="lan-box">
          <div class="lan-icon">
            <img :src="top_en" alt="" />
          </div>
          <el-select
            v-model="currentLanguage"
            class="selectLan"
            placeholder="Select"
            size="large"
            @change="changeLanguage"
            :popper-append-to-body="false"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div> -->
        </div>

        <div class="footer-logoinfo"></div>
        <div class="link-list">
          <div class="part09-collapse">
            <el-collapse v-model="activeNamesFoot" @change="handleFootChange">
              <el-collapse-item name="1">
                <template #title>
                  <div class="el-collapse-item-title">
                    {{ $t("messages.footer.about") }}
                  </div>
                </template>
                <div class="list-item">
                  <a
                      href="javascript:void(0)"
                      @click="goToKyc('buy')"
                      style="color: rgb(144, 144, 144); text-decoration: none"
                  >{{ $t("messages.footer.about_us") }}</a
                  >
                </div>
                <div class="list-item">
                  <a
                      href="javascript:void(0)"
                      @click="goToKyc('sell')"
                      style="color: rgb(144, 144, 144); text-decoration: none"
                  >{{ $t("messages.footer.contact_us") }}</a
                  >
                </div>
                <!--                <div class="list-item">-->
                <!--                  <a-->
                <!--                      href="/fees"-->
                <!--                      style="color: rgb(144, 144, 144); text-decoration: none"-->
                <!--                  >{{ $t("messages.footer.fees") }}</a-->
                <!--                  >-->
                <!--                </div>-->
              </el-collapse-item>
              <el-collapse-item name="2">
                <template #title>
                  <div class="el-collapse-item-title">
                    {{ $t("messages.footer.legal") }}
                  </div>
                </template>
                <div class="list-item"><a href="/au/learnList?type=1"
                                          style="color: rgb(144, 144, 144); text-decoration: none">{{
                    $t("messages.footer.terms")
                  }}</a></div>
                <div class="list-item"><a href="/au/learnList?type=2"
                                          style="color: rgb(144, 144, 144); text-decoration: none">{{
                    $t("messages.footer.privacy")
                  }}</a></div>
                <!-- <div class="list-item" @click="dialogTableVisible = true">
                  {{ $t("messages.footer.EOFY") }}
                </div> -->
                <div class="list-item"><a href="/au/learnList?type=3"
                                          style="color: rgb(144, 144, 144); text-decoration: none">{{
                    $t("messages.footer.EOFY")
                  }}</a></div>
                <div class="list-item"><a href="/au/learnList?type=4"
                                          style="color: rgb(144, 144, 144); text-decoration: none">{{
                    $t("messages.footer.FAQs")
                  }}</a></div>
              </el-collapse-item>
              <el-collapse-item name="3">
                <template #title>
                  <div class="el-collapse-item-title">
                    {{ $t("messages.footer.service") }}
                  </div>
                </template>
                <div class="list-item">
                  <a href="/au" style="color: #909090;text-decoration: none"><span class="flag-icon"
                                                                                   :class="'flag-icon-au'"></span>
                    {{ $t("messages.footer.service_instant") }}</a>
                </div>
                <div class="list-item">
                  <a href="/nz" style="color: #909090;text-decoration: none"><span class="flag-icon"
                                                                                   :class="'flag-icon-nz'"></span>
                    {{ $t("messages.footer.Zealand") }}</a>
                </div>
              </el-collapse-item>
              <el-collapse-item name="4">
                <template #title>
                  <div class="el-collapse-item-title">
                    {{ $t("messages.footer.LEGAL") }}
                  </div>
                </template>
                <div class="list-item">
                  {{ $t("messages.footer.terms_conditions") }}
                </div>
                <div class="list-item">
                  {{ $t("messages.footer.policy") }}
                </div>
                <div class="list-item">
                  {{ $t("messages.footer.aml") }}
                </div>
              </el-collapse-item>
              <el-collapse-item name="5">
                <template #title>
                  <div class="el-collapse-item-title">
                    {{ $t("messages.footer.support") }}
                  </div>
                </template>
                <div class="list-item">
                  <a href="/au/contact" style="color: #909090;text-decoration: none">
                    {{ $t("messages.footer.support_center") }}</a>
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
        <!--        <div class="icon-links-min" style="font-size: 14px; color: #808080; line-height: 19px">-->
        <!--          {{ $t("messages.footer.dce_num") }}-->
        <!--        </div>-->
      </div>

    </footer>

    <Footer v-if="windowWidth > 769"/>
    <FooterMobile v-if="windowWidth <= 769"></FooterMobile>
  </div>
</template>

<script setup lang="ts">
import {ref, onUnmounted, onMounted} from "vue";
import Header from "../../layout/Header/Header.vue";
import Footer from "../../layout/Footer/Footer.vue";
import FooterMobile from "../../layout/Footer/FooterMobile.vue";
import faq from "../../layout/FAQ/faq.vue";
import GetButton from "../../components/GetButton.vue";

//icon
import {Right} from "@element-plus/icons";
import type {TabsPaneContext} from "element-plus";
// img
import registered_icon from "../../assets/home/registered_icon.png";
import banner_frame from "../../assets/image/banner_frame.png";
import icon_01 from "../../assets/image/icon_01.png";
import icon_02 from "../../assets/image/icon_02.png";
import icon_03 from "../../assets/image/icon_03.png";
import icon_04 from "../../assets/image/icon_04.png";
import image01 from "../../assets/image/image01.svg";
import image02 from "../../assets/image/image02.svg";
import image02_au from "../../assets/icons/image01_aud.svg";
import image03_au from "../../assets/icons/image02_aud.svg";
import image03 from "../../assets/image/image03.svg";
import image04 from "../../assets/image/image04.png";
import image05 from "../../assets/image/image05.svg";
import part07_pic01 from "../../assets/home/part07_pic01.png";
import part07_pic02 from "../../assets/home/part07_pic02.png";
import part07_pic03 from "../../assets/home/part07_pic03.png";
import part05_icon01 from "../../assets/home/part05_icon01.png";
import part05_icon02 from "../../assets/home/part05_icon02.png";
import part05_icon03 from "../../assets/home/part05_icon03.png";
import part05_icon04 from "../../assets/home/part05_icon04.png";
import part05_icon05 from "../../assets/home/part05_icon05.png";
import part05_icon06 from "../../assets/home/part05_icon06.png";
import part05_icon07 from "../../assets/home/part05_icon07.png";
import part06_icon02 from "../../assets/home/part06_icon02.png";
import part06_icon03 from "../../assets/home/part06_icon03.png";
import part06_icon04 from "../../assets/home/part06_icon04.png";
import part06_icon05 from "../../assets/home/part06_icon05.png";
import part06_icon06 from "../../assets/home/part06_icon06.png";

import * as echarts from "echarts";
import asic from "../../assets/icons/asic.png";
import austrac from "../../assets/icons/austrac.png";
import learn_more2 from "../../assets/image/learn_more2.png";
import learn_more3 from "../../assets/image/learn_more3.png";
import learm_background from "../../assets/image/learm_background.png";
import icon_card from "../../assets/icons/icon_card.svg";

import {storeToRefs} from "pinia";
import {tradeStore} from "../../store/trade";
import {getProfile} from "../../api/user";
import {useUserInfoStore} from "../../store/user";
import {useI18n} from "vue-i18n";
import {useRouter} from "vue-router";

const userInfoStore = useUserInfoStore();
const {userInfo, validKycBuy, validKycSell} = storeToRefs(userInfoStore);

const touchStartX = ref(0);
const buttonOffset = ref(0);
function handleTouchStart(event :any) {
  touchStartX.value = event.touches[0].clientX;
}

function handleTouchMove(event:any) {
  const touchEndX = event.touches[0].clientX;
  const deltaX = touchStartX.value - touchEndX;

  // 设置滑动阈值，根据需要调整
  const threshold = 50;

  if (Math.abs(deltaX) > threshold) {
    const direction = deltaX > 0 ? 1 : -1;
    changeReasonTab(direction);

    // 根据滑动方向调整按钮位置的偏移值
    buttonOffset.value = calculateButtonOffset(direction);
  }
}


function calculateButtonOffset(direction : any) {
  // 根据方向和需要的偏移量计算新的偏移值
  // 例如，每次滑动移动一个按钮的宽度
  const buttonWidth = radioGroup.value
      ? radioGroup.value.offsetWidth: 0;
  const offsetDelta = buttonWidth * direction;
  return buttonOffset.value + offsetDelta;
}


function handleTouchEnd() {
  touchStartX.value = 0;
}

function changeReasonTab(direction :any) {
  if (reasonTab.value === t('messages.home.fifth_regulation')) {
    // 当前是第一个 tab，根据方向切换到相应的 tab
    if (direction === 1) {
      reasonTab.value = t('messages.home.fifth_fiat');
    }
  } else if (reasonTab.value === t('messages.home.fifth_fiat')) {
    // 当前是第二个 tab，根据方向切换到相应的 tab
    if (direction === 1) {
      reasonTab.value = t('messages.home.fifth_Totally');
    } else if (direction === -1) {
      reasonTab.value = t('messages.home.fifth_regulation');
    }
  } else if (reasonTab.value === t('messages.home.fifth_Totally')) {
    // 当前是第三个 tab，根据方向切换到相应的 tab
    if (direction === 1) {
      reasonTab.value = t('messages.home.fifth_easy');
    } else if (direction === -1) {
      reasonTab.value = t('messages.home.fifth_fiat');
    }
  } else if (reasonTab.value === t('messages.home.fifth_easy')) {
    // 当前是第四个 tab，根据方向切换到相应的 tab
    if (direction === 1) {
      reasonTab.value = t('messages.home.fifth_live');
    } else if (direction === -1) {
      reasonTab.value = t('messages.home.fifth_Totally');
    }
  } else if (reasonTab.value === t('messages.home.fifth_live')) {
    // 当前是最后一个 tab，根据方向切换到相应的 tab
    if (direction === -1) {
      reasonTab.value = t('messages.home.fifth_easy');
    }
  }
}

const scrollContainer = ref<HTMLElement | null>(null);
const reasonContainer = ref<HTMLElement | null>(null);
const radioGroup = ref<HTMLElement | null>(null);

const scrollToCenter = (index: number) => {
  const group = radioGroup.value;
  if (!group) return;

  const buttons = group.getElementsByClassName('el-radio-button');
  if (!buttons.length || index < 0 || index >= buttons.length) return;

  const containerWidth = group.offsetWidth;
  const button = buttons[index] as HTMLElement;
  const buttonWidth = button.offsetWidth;
  const buttonLeft = button.offsetLeft;

  // 计算滚动距离，使按钮滚动到居中位置
  const scrollDistance = buttonLeft + buttonWidth / 2 - containerWidth / 2;

  scrollContainer.value?.scrollTo({ left: scrollDistance, behavior: 'smooth' });
};

const router = useRouter();

const {t} = useI18n();
const activeNamesFoot = ref([""]);
const handleFootChange = (val: string[]) => {
  console.log(val);
};

const useTradeStore = tradeStore();
const {currencySlug, currencyName, currencyIcon} = storeToRefs(useTradeStore);

// 货币类型\
interface Coin {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  image: string;
  num_market_pairs: number;
  date_added: string;
  tags: string[];
  max_supply: number | null;
  circulating_supply: number;
  total_supply: number;
  infinite_supply: boolean;
  platform: {
    id: number;
    name: string;
    symbol: string;
    slug: string;
    token_address: string;
  } | null;
  cmc_rank: number;
  self_reported_circulating_supply: number | null;
  self_reported_market_cap: number | null;
  tvl_ratio: number | null;
  last_updated: string;
  quote: {
    AUD: {
      price: number;
      volume_24h: number;
      volume_change_24h: number;
      percent_change_1h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      percent_change_60d: number;
      percent_change_90d: number;
      market_cap: number;
      market_cap_dominance: number;
      fully_diluted_market_cap: number;
      tvl: number | null;
      last_updated: string;
    };
  };
}

const coinMarketCapData = ref<any>([]);

const activeName = ref("1");
const tradeTab = ref<any>("first");
const reasonTab = ref(t('messages.home.fifth_regulation'));

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

const dialogTableVisible = ref(false);

const gridData = [
  {
    title: "ASIC registered",
    content1: "Australian Securities and Investment Commission",
    content2: "ACN 637345290",
    address: "ASIC website",
  },
];

const gridData1 = [
  {
    title: "AUSTRAC registered",
    content1: "Australian Transaction Reports & Analysis Centre",
    content2: "100576214",
    content3: "Digital Currency Exchange DCE100662269-001",
    content4: "Remittance Service Provider IND100662269-001",
    address: "AUSTRAC website",
  },
];
const nzData = [
  {
    title: "NZBN registered",
    content1: "New Zealand Companies Office",
    content2: "NZBN 9429049898163",
    address: "NZBN Website",
  },
];
const nzData1 = [
  {
    title: "FSP registered",
    content1: "New Zealand Companies Office",
    content2: "FSP 1004001",
    address: "FSP Website",
  },
];
const tableChart = <any>ref(null);
const handleSelect = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath);
};
// tabs

const handleClick = (tab: TabsPaneContext, event: Event) => {
  // console.log(tab, event);
};

const createChart = (dom: HTMLDivElement, data: Array<any>, color: string) => {
  let myChart = echarts.init(dom);

  function colorRgba(sHex: any, p: any) {
    // 十六进制颜色值的正则表达式
    var reg =
        /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/;
    /* 16进制颜色转为RGB格式 */
    var sColor = sHex.toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4 || sColor.length === 5) {
        var sColorNew = "#";
        for (var i = 1; i < sColor.length; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }
      //  处理六位的颜色值
      var sColorChange = [];
      for (var i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
      }
      return "rgba(" + sColorChange.join(",") + "," + p + ")";
    } else {
      return sColor;
    }
  }

  const options: echarts.EChartsOption = {
    grid: {
      left: "0",
      top: "0",
      right: "0",
      bottom: "0",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      //不显示x轴线
      show: false,
    },
    yAxis: {
      type: "value",
      show: false,
      // min:function(value){
      //   return Math.floor(value.min / 10) * 10;
      // }
    },
    series: [
      {
        data: data,
        //单独修改当前线条的颜色
        lineStyle: {
          color: color,
          width: 1.5,
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: colorRgba(color, 0.2),
            },
            {
              offset: 1,
              color: colorRgba(color, 0.1),
            },
          ]),
        },
        type: "line",
        // smooth: true,
        symbol: "none",
      },
    ],
  };
  myChart.setOption(options);
};
const echartDomRef = [];

const goToKyc = (type: string) => {
  if (userInfoStore.isLogin) {
    // if (userInfo.value.kyc.status === 'GREEN') {
    //   if (type === 'buy') {
    //     router.push('/user/depositFiat');
    //   } else if (type === 'sell') {
    //     router.push('/user/bankaccount');
    //   } else {
    //     router.push('/user');
    //   }
    // } else {
    //   router.push({name: 'kyc', query: {type}});
    // }
    if (type === 'buy') {
      if (validKycBuy.value) {
        router.push('/user/depositFiat');
      } else {
        router.push({name: 'kyc', query: {type}});
      }
    } else if (type === 'sell') {
      if (validKycBuy.value || validKycSell.value) {
        router.push('/user/bankaccount');
      } else {
        router.push({name: 'kyc', query: {type}});
      }
    } else {
      router.push('/signup?type=buy');
    }
  } else {
    router.push('/signup?type=' + type);
  }
};
const goKyc = (type: string) => {
  // if (userInfoStore.isLogin) {
  //   if (userInfo.value.kyc.status === 'GREEN') {
  //     if (type === 'buy') {
  //       router.push('/user/depositFiat');
  //     } else {
  //       router.push('/home');
  //     }
  //   } else {
  //     router.push({ name: 'kyc', query: { type, return: '/home' } });
  //   }
  // } else {
  //   router.push('/signup?type=' + type);
  // }
  if (userInfoStore.isLogin) {
    if (type === 'buy') {
      if (validKycBuy.value) {
        router.push('/user/depositFiat');
      } else {
        router.push({name: 'kyc', query: {type}});
      }
    } else if (type === 'sell') {
      if (validKycBuy.value || validKycSell.value) {
        router.push('/user/bankaccount');
      } else {
        router.push({name: 'kyc', query: {type}});
      }
    } else {
      router.push('/home');
    }
  } else {
    router.push('/signup?type=' + type);
  }
};

const setEchartRef: any = (el: HTMLDivElement, typeId: number = 1) => {
  if (el) {
    echartDomRef.push(el);
    const foundData = coinMarketCapData.value[`tab-${typeId}`].find(
        (e: any) => {
          return e.id === el.getAttribute("rowId");
        }
    );
    const data = foundData.data;
    const type = foundData.isUp ? "up" : "down";

    let color = type == "up" ? "#01C19A" : "#F15958";
    createChart(el, data as Array<any>, color);
  }
};

const handleBuy = (index: number, row: Coin) => {
  console.log(index, row);
  currencySlug.value = row.symbol?.toUpperCase();
  currencyName.value = row.name;
  currencyIcon.value = row.image;
  router.push("/trade/" + row.symbol);
};
const forthList = [
  {
    number: 1,
    message: "View real-time cryptocurrency prices",
  },
  {
    number: 2,
    message:
        "Buy and sell BTC, ETH, XRP, OKB and other digital assets with ease",
  },
  {
    number: 3,
    message: "Get live price-change alerts for cryptocurrencies you follow",
  },
  {
    number: 4,
    message: "Check BTC spot, futures and options prices",
  },
  {
    number: 5,
    message: "Compare cryptocurrency prices across exchanges",
  },
];
const cardList = [
  {
    src: part05_icon01,
    title: t("messages.home.fifth_regulation"),
    desc: t("messages.home.fifth_regulationMsg"),
  },
  {
    src: part05_icon02,
    title: t("messages.home.fifth_fiat"),
    desc: t("messages.home.fifth_fiatMsg"),
  },
  {
    src: part05_icon03,
    title: t("messages.home.fifth_Totally"),
    desc: t("messages.home.fifth_TotallyMsg"),
  },
  {
    src: part05_icon04,
    title: t("messages.home.fifth_Institutional"),
    desc: t("messages.home.fifth_InstitutionalMsg"),
    btn: t("messages.home.fifth_btncheck"),
  },
  {
    src: part05_icon05,
    title: t("messages.home.fifth_API"),
    desc: t("messages.home.fifth_APIMsg"),
    btn: t("messages.home.fifth_btnAPI"),
  },
  {
    src: part05_icon06,
    title: t("messages.home.fifth_2FA"),
    desc: t("messages.home.fifth_2FAMsg"),
  },
  {
    src: part05_icon07,
    title: t("messages.home.fifth_Fast"),
    desc: t("messages.home.fifth_FastMsg"),
  },
];

const cardSupport = [
  {
    src: part06_icon02,
    title: t("messages.home.sixth_chat"),
    desc: t("messages.home.sixth_rated"),
  },
  {
    src: part06_icon03,
    title: t("messages.home.sixth_Educational"),
    desc: t("messages.home.sixth_Arrange"),
  },
  {
    src: part06_icon04,
    title: t("messages.home.sixth_Client"),
    desc: t("messages.home.sixth_Invaluable"),
  },
  {
    src: part06_icon05,
    title: t("messages.home.sixth_Knowledge"),
    desc: t("messages.home.sixth_resources"),
  },
  {
    src: part06_icon06,
    title: t("messages.home.sixth_Apply"),
    desc: t("messages.home.sixth_Verify"),
  },
];
const minCardList2 = [
  {
    src: part06_icon02,
    title: t("messages.home.sixth_chat"),
    desc: t("messages.home.sixth_rated"),
  },
  {
    src: part06_icon03,
    title: t("messages.home.sixth_Educational"),
    desc: t("messages.home.sixth_Arrange"),
  },
  {
    src: part06_icon04,
    title: t("messages.home.sixth_Client"),
    desc: t("messages.home.sixth_Invaluable"),
  },
  {
    src: part06_icon05,
    title: t("messages.home.sixth_Knowledge"),
    desc: t("messages.home.sixth_minResources"),
  },
  {
    src: part06_icon06,
    title: t("messages.home.sixth_Apply"),
    desc: t("messages.home.sixth_minVerify"),
  },
];

//Get client profile data

onMounted(() => {
  if (userInfoStore.isLogin) {
    getProfile().then((res) => {
      console.log(res.data);
      userInfoStore.updateUserInfo(res.data.data);
    });
  }
});
</script>

<style lang="scss" scoped>
@import "./index.scss";
@import url('../login/statics/css/flag-icons.min.css');

.icon-links {
  text-align: center;
}

.tab-img {
  margin: auto;
  @media (min-width: 768px) {
    transform: translateX(10px);
  }
}

.tab-content {
  margin-left: 22px;
}

.reason-box {
  :deep(.el-radio-button) {
    //display: block;
    height: 100%;

    .el-radio-button__inner {
      height: 100% !important;
    }
  }
}

.item-title {
  font-size: 22px;
}

:deep() {

  .el-scrollbar__bar.is-horizontal > div {
    height: 0;
  }

  .el-radio-group {
    flex-wrap: initial !important;
  }
}
.footer-title{
  font-size: 36px;
  color: #fff;
  line-height: 44px;
  font-weight: bold;
  @media (max-width: 992px) {
    font-size: 32px !important;
  }
}
.tab-content-wrapper {
  overflow-y: hidden;
  //white-space: nowrap;
  //display: flex;
}

.reason-box {
  transition: transform 0.3s ease; /* 添加过渡效果 */
}
</style>
