import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { NoticeObject } from '../models/notice';
import { markRead, markReadAll } from "../api/notices";
export const noticeInfoStore = defineStore('noticeInfo', () => {

  const noticesList = ref<NoticeObject[]>()
  const noticeInfo = ref<NoticeObject>()
  
  function markReads(){
    if(noticeInfo.value){
      // markRead(noticeInfo.value.id).then((res)=>{
        // console.log("markRead", res)
      // })
    }
  }

  function markReadsAll(){
    // console.log("4545155")
    // markReadAll().then((res)=>{
      // console.log("markReadAll", res)
    // })
  }

  return {
    noticesList,
    noticeInfo,
    markReads,
    markReadsAll
  }
},
{
  persist:{
    enabled: true,
      // 要存储的数据
      // 存储键
      strategies: [
        {
          storage: localStorage,//表示存储在localStorage
          paths: ['noticesList','noticeInfo'],//指定要长久化的字段
        }
      ]
  }
})
