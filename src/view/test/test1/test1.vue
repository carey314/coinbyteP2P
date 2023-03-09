<template>
    <div>
        <button @click="handleText">1111111</button>
    </div>
</template>

<script setup lang="ts">
    import { ref, reactive, onUnmounted, onMounted } from "vue";
    import http from '../../../utils/http';
    const handleText = () => {
        // http.post('/v2/my/signin',{
        // "uuid": "36f59381-5b54-48bd-a0c7-3b908c476732",
        // "email": "foo@bar.com",
        // "password": "Secret123",
        // "password_confirmation": "Secret123",
        // "device_fingerprint": "dwqdnNFJBOEBFJEBjqewbkjqbdwjqwbndjnbj",
        // "addresses": {
        //     "0": {
        //     "country_code": "16"
        //     }
        // },
        // "info": {
        //     "familyName": "Brown",
        //     "givenName": "John"
        // },
        // "recaptchaResponse": "ut nu"
        // }).then(res  => {
        //     console.log(res.data);
        // }).catch(err => {
        //     console.log(err);
        // })
        const jsonString = '{"user_agent":"Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko\\/20100101 Firefox\\/47.0"}';
        const base64String = btoa(jsonString);

        console.log(base64String);
    }
</script>

<style lang="scss" scoped>

</style>