import { ref, computed } from 'vue'
import type { Ref } from 'vue';
import { defineStore } from 'pinia'
import type {UserInfo} from '../models/user';
export const useFingerprintStore = defineStore('fingerprint', () => {
  const userAgent = navigator.userAgent;
  // 创建一个包含user_agent属性的JSON对象
  let jsonObj = {
    user_agent: userAgent
  };

  // 将JSON对象转换为JSON字符串
  let jsonStr = JSON.stringify(jsonObj);

  // 对JSON字符串进行base64编码
  var base64String = btoa(jsonStr);
  // 共享数据
  const fingerprint = ref(base64String);
  // 计算属性
//   const upperMsg = computed(() => msg.value.toUpperCase())
  // 方法(同步调用或异步调用)
  
  return { 
    fingerprint
    };
},)
