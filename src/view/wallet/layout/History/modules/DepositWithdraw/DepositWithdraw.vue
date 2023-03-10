<template>
    <div class="deposit-withdraw" >
        <el-radio-group v-model="radioValue">
            <el-radio-button label="Crypto" />
            <el-radio-button label="Fiat" />
            <el-radio-button label="Transfer" />    
        </el-radio-group>
        <Crypto v-if="radioValue === 'Crypto'">
        </Crypto>
        <Fiat v-else-if="radioValue === 'Fiat'">
        </Fiat>
        <Transfer v-else-if="radioValue === 'Transfer'">
        </Transfer>
    </div>
</template>

<script setup lang="ts">
    import { ref, reactive } from "vue";
    import Crypto from './modules/Crypto.vue';
    import Fiat from './modules/Fiat.vue';
    import Transfer from './modules/Transfer.vue';
    const radioValue = ref("Crypto");
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