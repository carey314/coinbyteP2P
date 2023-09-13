import { ref, computed } from "vue";
import type { Ref } from "vue";
import { defineStore } from "pinia";
import type { UserInfo } from "../models/user";
export const useUserInfoStore = defineStore(
  "useInfo",
  () => {
    // 共享数据
    const token = ref(null);
    const username = ref("test");
    // 计算属性
    //   const upperMsg = computed(() => msg.value.toUpperCase())
    // 方法(同步调用或异步调用)
    const changeToken = (newToken: any) => {
      console.log("change token", newToken);
      token.value = newToken;
    };
    const refreshToken = ref(null);
    const changeRefreshToken = (newToken: any) => {
      refreshToken.value = newToken;
    };

    const userInfo = ref<any | null>();
    const isLogin = computed(() => {
      console.log("token in islogin", token.value);
      if (token.value) {
        return true;
      } else {
        return false;
      }
    });

    const clearToken = () => {
      console.log("set token null!!!!");
      token.value = null;
      refreshToken.value = null;
    };

    const updateUserInfo = (info: UserInfo) => {
      userInfo.value = info;
    };
    const clearUserInfo = () => {
      userInfo.value = null;
    };
    const tokenExpired = ref(false);
    // const c = ref('en')
    // const cc = (value : string) => {
    //   c.value = value;
    // }

    const validKycBuy = computed(() => {
      if (userInfo.value?.kyc && userInfo.value?.kyc?.length > 0) {
        const kycs = userInfo.value.kyc;
        const sellItem = kycs.find((v: any) => v.type === 'buy');
        if(!sellItem) return false;
        const status = sellItem.status;
        if (status === 'GREEN') {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    })

    const validKycSell = computed(() => {
      if (userInfo.value?.kyc && userInfo.value?.kyc?.length > 0) {
        const kycs = userInfo.value.kyc;
        const sellItem = kycs.find((v: any) => v.type === 'sell');
        if(!sellItem) return false;
        const status = sellItem.status;
        if (status === 'GREEN') {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    });
    return {
      token,
      username,
      changeToken,
      refreshToken,
      changeRefreshToken,
      isLogin,
      clearToken,
      userInfo,
      updateUserInfo,
      clearUserInfo,
      tokenExpired,
      validKycBuy,
      validKycSell
    };
  },
  {
    persist: {
      enabled: true,
      // 要存储的数据
      // 存储键
      strategies: [
        {
          storage: localStorage, //表示存储在localStorage
          paths: ["token", "refreshToken", "userInfo", "c"], //指定要长久化的字段
        },
      ],
    },
  }
);
