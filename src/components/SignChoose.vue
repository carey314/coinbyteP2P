<template>
  <el-dialog v-model="dialogTableVisible" :destroy-on-close="true" class="sign-choose">
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

onMounted(() => {
  console.log("Button component mounted.");
});
const toSign = (type: string) => {
  router.replace(`/signup?type=${type}`);
  emits('increase', false);
};
</script>

<style scoped lang="scss">

.login-divider {
  width: 1px;
  height: 100%;
  background: #eee;
  position: absolute;
  left: 50%;
  @media (max-width: 991px) {
    display: none;
  }
}

.sell-part {
  @media (max-width: 991px) {
    margin-top: 20px;
  }
}

.sign-choose {
  position: relative;

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
