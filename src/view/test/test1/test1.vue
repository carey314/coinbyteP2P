<template>
    <div>
        <button @click="handleText">1111111</button>
    </div>
</template>

<script setup lang="ts">
    import http from '../../../utils/http';
    import { onMounted } from 'vue';
    import {getProfile} from '../../../api/user';
    import {getMyAssetsCopy} from '../../../api/wallet';
    onMounted(() => {
        // http.get("/v1/me?with=").then(res => {
        //     console.log(JSON.parse(res.data.data.settings.gridsters));
        // })
        // getMyAssetsCopy().then((res : any) => {
        //     console.log(res.data);
        // })
        getProfile().then(res => {
            console.log(res.data);
        })
    })
    const handleText = () => {
        const jsonString = '{"user_agent":"Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko\\/20100101 Firefox\\/47.0"}';
        const base64String = btoa(jsonString);
    }
</script>

<style lang="scss" scoped>

</style>