<template>
  <div class="learn-center-list">
    <Header />
    <div class="center-part" v-if="windowWidth > 1050">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="Beginners Tutorial" name="first">
          <div class="min-height">
            <ListCenter />
          </div>
        </el-tab-pane>
        <el-tab-pane label="Trading Ideas" name="second">
          <div class="min-height">Trading Ideas</div>
        </el-tab-pane>
        <el-tab-pane label="Industry Analysis" name="third">
          <div class="min-height">Industry Analysis</div>
        </el-tab-pane>
        <el-tab-pane label="Blockchain Glossary" name="fourth">
          <div class="min-height">Blockchain Glossary</div>
        </el-tab-pane>
        <el-tab-pane label="Company Updates" name="fifth">
          <div class="min-height">Company Updates</div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="center-part" v-if="windowWidth <= 1050">
      <el-scrollbar>
        <div class="scrollbar-flex-content">
          <el-tabs
            v-model="activeName"
            class="demo-tabs"
            @tab-click="handleClick"
          >
            <el-tab-pane label="Beginners Tutorial" name="first">
              
            </el-tab-pane>
            <el-tab-pane label="Trading Ideas" name="second">
              <!-- <div class="min-height">Trading Ideas</div> -->
            </el-tab-pane>
            <el-tab-pane label="Industry Analysis" name="third">
              <!-- <div class="min-height">Industry Analysis</div> -->
            </el-tab-pane>
            <el-tab-pane label="Blockchain Glossary" name="fourth">
              <!-- <div class="min-height">Blockchain Glossary</div> -->
            </el-tab-pane>
            <el-tab-pane label="Company Updates" name="fifth">
              <!-- <div class="min-height">Company Updates</div> -->
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-scrollbar>
      <div class="min-height" v-if="activeName === 'first'">
        <ListCenter />
      </div>
    </div>

    <Footer v-if="windowWidth > 769" />
    <FooterMobile v-if="windowWidth <= 769" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onUnmounted, onMounted } from "vue";
import type { TabsPaneContext } from "element-plus";
import Header from "../../../layout/Header/Header.vue";
import Footer from "../../../layout/Footer/Footer.vue";
import FooterMobile from "../../../layout/Footer/FooterMobile.vue";
import ListCenter from "../component/ListCenter.vue";

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
const activeName = ref("first");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>

<style scoped lang="scss">
.scrollbar-flex-content {
  display: flex;
}

.center-part {
  max-width: 1290px;
  min-height: 985px;
  margin: auto;
  padding: 45px 0 135px 0;
  position: relative;
  @media (max-width: 1440px) {
    & {
      padding: 25px 30px 135px 30px;
    }
  }
}
.min-height {
  min-height: 50px;
  @media (max-width: 769px) {
    & {
      margin-top: -20px;

    }
  }
}

.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
:deep() {
  .el-tabs__item {
    color: #9b9b9b !important;
    font-size: 16px;
    line-height: 19px;
  }
  .el-tabs__item is-top {
    --el-menu-active-color: #01c19a;
    font-size: 16px;
    line-height: 19px;
  }
  .el-tabs__item.is-active {
    color: #01c19a !important;
    font-weight: 500;
  }
  .el-tabs__active-bar {
    background-color: #01c19a;
    height: 4px;
  }
  .el-scrollbar__bar.is-horizontal>div{
    height: 0; //iPhone滑动样式高度
  }
}
</style>
