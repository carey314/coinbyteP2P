import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserInfoStore = defineStore('useInfo', () => {
  // 共享数据
  const token = ref(null);
  const username = ref("test");
  // 计算属性
//   const upperMsg = computed(() => msg.value.toUpperCase())
  // 方法(同步调用或异步调用)
  const changeToken = (newToken:any) => {
    token.value = newToken;
  }
  const refreshToken = ref(null);
  const changeRefreshToken = (newToken:any) => {
    refreshToken.value = newToken;
  }

  const userInfo = ref({});
  const isLogin = computed(() => {
    if(refreshToken.value && token.value) {
      return true;
    } else {
      return false;
    }
  });

  const clearToken = () => {
    token.value = null;
    refreshToken.value = null;
  }
  return { token, username,changeToken,refreshToken,changeRefreshToken ,isLogin,clearToken};
},{
    persist: {
      enabled: true,
      // 要存储的数据
      // 存储键
      strategies: [
        {
          storage: localStorage,//表示存储在localStorage
          paths: ['token','refreshToken'],//指定要长久化的字段
        }
      ]
    }
  })
