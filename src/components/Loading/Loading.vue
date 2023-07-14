<template>
    <div className='loading-container'>
        <div className="loading"></div>
    </div>
</template>

<script setup>

import { ref, onMounted } from "vue";


</script>

<style lang="scss" scoped>
.loading-container {
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    .loading {
        display: flex;
        width: 3em;
        height: 3em;
        border : 5px solid transparent;
        border-top-color: #f0f;
        border-bottom-color: #f0f;
        border-radius: 50%;
        animation: spin 1.5s linear infinite;
        position: relative;
    }
    .loading::before {
        content: "";
        position: absolute;
        width: 2em;
        height: 2em;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        border : 5px solid transparent;
        border-top-color: #f0f;
        border-bottom-color: #f0f;
        border-radius: 50%;
        animation: spins .75s linear infinite;
    }
    .loading::after {
        content: "";
        display: block;
        margin: auto;
        width: 1em;
        height: 1em;
        border: 5px solid #f0f;
        border-radius: 50%;
        animation: pulse 1s alternate ease-in-out infinite;
    }
    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
    @keyframes spins {
        to {
            transform: rotate(-360deg);
        }
    }
    @keyframes pulse {
        from {
            transform: scale(0.5);
        }
        to {
            transform: scale(1);
        }
    }
}
</style>