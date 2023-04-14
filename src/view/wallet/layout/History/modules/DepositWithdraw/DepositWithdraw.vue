<template>
  <div class="deposit-withdraw">
    <el-radio-group v-model="radioValue">
      <!-- <el-radio-button :label="t('messages.wallet.history_Crypto')" />
      <el-radio-button :label="t('messages.wallet.history_Fiat')" />
      <el-radio-button :label="t('messages.wallet.history_Transfer')" /> -->
      <el-radio-button :label="cryptoLabel" />
      <el-radio-button :label="fiatLabel" />
      <el-radio-button :label="transferLabel" />
    </el-radio-group>
    <Crypto v-if="radioValue === cryptoLabel"> </Crypto>
    <Fiat v-else-if="radioValue === fiatLabel"> </Fiat>
    <Transfer v-else-if="radioValue === transferLabel"> </Transfer>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import Crypto from "./modules/Crypto.vue";
import Fiat from "./modules/Fiat.vue";
import Transfer from "./modules/Transfer.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
// const radioValue = ref("Crypto");
// let radioValue = ref('')
const radioValue = ref(t("messages.wallet.history_Crypto"));
const cryptoLabel = t("messages.wallet.history_Crypto");
const fiatLabel = t("messages.wallet.history_Fiat");
const transferLabel = t("messages.wallet.history_Transfer");
</script>

<style lang="scss" scoped>
.deposit-withdraw {
  :deep() {
    .el-radio-group {
      margin-top: 5px;
      margin-bottom: 20px;
    }
  }
}
</style>
