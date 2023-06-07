<template>
    <el-button @click="handleClick" class="custom-button" :style="{background : bgc,color : fc}">
        {{ title }}
    </el-button>
</template>

<script setup lang="ts">
    import {ref,defineProps} from 'vue';
    import {emitChangeFn} from "element-plus";
    
    defineProps({
        title : {
            type : String,
            default : "Xxxxx"
        },
        bgc : {
            type : String,
            default : "#01C19A"
        },
        fc : {
            type : String,
            default : "#FFF"
        }
    });
    const handleClick = () => {
        emitChangeFn("handleClick");
    }
</script>
<style lang="scss" scoped>
    .custom-button {
        // background: #01C19A;
        min-height: 41px;
        height: 100%;
        // color: #fff;
        padding: 0 22px;
        height: 41px;
    }
</style>