<template>
  <el-dialog v-model="dialogTableVisible" :destroy-on-close="true" class="sign-choose" :class="{fromSign: fromSign}">
    <div class="divider"></div>
    <el-row :gutter="20">
      <el-col
          :md="12"
          :xs="24"
      >
        <div class="choose-part">
          <img :src="icon_buying"/>
          <div class="part-for">For Buying</div>
          <div class="part-when">When I buy</div>
          <GetButton @click="toSign('buy')" class="to-sign" :text="$t('messages.home.start_btn')"/>
        </div>
      </el-col>
      <div class="login-divider"></div>
      <el-col
          :md="12"
          :xs="24"
          class="sell-part"
      >
        <div class="choose-part">
          <img :src="icon_selling"/>
          <div class="part-for">For Selling</div>
          <div class="part-when">When I sell</div>
          <GetButton @click="toSign('sell')" class="to-sign" :text="$t('messages.home.start_btn')"/>
        </div>
      </el-col>
    </el-row>
  </el-dialog>
</template>

<script lang="ts" setup>
import {onMounted, reactive, ref} from "vue";
import icon_buying from "../assets/image/icon_buying.svg";
import icon_selling from "../assets/image/icon_selling.svg";
import GetButton from "../components/GetButton.vue";
import {useRouter} from "vue-router";

const router = useRouter();

const dialogTableVisible = ref(false);

const emits = defineEmits(['increase']);
const props = defineProps({
  // 在这里定义 props
  fromSign: {
    type: Boolean,
    default: false,
  },
});
const toSign = (type: string) => {
  router.replace(`/signup?type=${type}`);
  emits('increase', false);
};
</script>

<style scoped lang="scss">

// .login-divider {
//   width: 1px;
//   height: 100%;
//   background: #eee;
//   position: absolute;
//   left: 50%;
//   @media (max-width: 991px) {
//     display: none;
//   }
// }

.sell-part {
  @media (max-width: 991px) {
    margin-top: 20px;
  }
}

.sign-choose {
  position: relative;
  .divider{ 
    content: ''; /* 伪元素需要内容属性来显示 */
    position: absolute; /* 绝对定位以便可以自由放置 */
    top: 0; /* 从顶部开始 */
    bottom: 0; /* 一直到底部 */
    left: 50%; /* 水平居中 */
    border-left: 1px solid #eee; /* 创建分割线 */
    transform: translateX(-50%); /* 确保分割线精确居中 */
    @media (max-width: 991px) {
      display: none;
    }
  }
  .choose-part {
    .part-for {
      color: #000;
      font-size: 24px;
      margin-top: 30px;
      font-weight: 500;
    }

    .part-when {
      font-size: 16px;
      color: #878787;
      margin-top: 30px;
    }

    .to-sign {
      margin-top: 30px;
    }
  }
}

.to-sign {
  width: 50%;
  font-weight: 500;
}
</style>
