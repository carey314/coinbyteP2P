<template>
    <div>
        <button @click="handleText">1111111</button>
    </div>
</template>

<script setup lang="ts">
    const handleText = () => {
        const jsonString = '{"user_agent":"Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko\\/20100101 Firefox\\/47.0"}';
        const base64String = btoa(jsonString);
    }
</script>

<style lang="scss" scoped>

</style>