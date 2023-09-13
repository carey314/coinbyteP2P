<template>
    <div style="display: flex; align-items: center; justify-content: center; flex-direction: column; margin-top: 23px; gap: 17px;">
        <img style="width: 69px; height: 79px;" :src="NoContent" alt="">
        <div style="font-size: 16px;color: #7B8293;letter-spacing: 0;text-align: center;">{{ $t('messages.user_verify.no_bank') }}</div>
    </div>
</template>

<script setup lang="ts">
import NoContent from '../../../../assets/image/编组 7.png';
import { useI18n } from "vue-i18n";
const { t } = useI18n();

</script>

<style scoped>

</style>