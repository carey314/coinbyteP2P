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

  return { token, username,changeToken }
},{
    persist: {
      enabled: true,
      // 要存储的数据
      // 存储键
      key: 'useUserInfoStore',
      strategies: [
        {
          storage: localStorage,//表示存储在localStorage
          paths: ['token'],//指定要长久化的字段
        }
      ]
    }
  })
