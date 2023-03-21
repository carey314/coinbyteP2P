<template>
  <div class="custom-table">
      <el-table :data="sourceData" style="width: 100%" table-layout="auto">
          <slot name="columns"></slot>
          <template #empty>
              <div class="empty">
                  <img :src="wallet_search_none" alt="">
                  <p>No records found</p>
              </div>
          </template>
      </el-table>
  </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue';
  import wallet_search_none from '../../../assets/wallet/wallet_search_none.png';
  defineProps({
      sourceData : {
          type : Object,
          default : []
      }
  })

</script>

<style lang="scss" scoped>
  .custom-table {
      :deep() {
          .el-table th {
              background: #F1F1F1;
              line-height: 31px;
              height: 31px;
              padding: 0px;
              font-size: 12px;
              color: #9B9B9B;
          }
          .el-table__cell {
              font-size: 14px;
              color: #000;
          }
          .el-table__header-wrapper {
              background: #F1F1F1;
              height: 31px;
              .el-table__header {
                  background: #F1F1F1;
              }
          }
      }
      .empty {
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 14px;
          img {
              width: 85px;
              margin-left: 21px;
          }
          p {
              font-size: 16px;
              color: #7B8293;
              line-height: 18px;
          }
      }
  }
</style>