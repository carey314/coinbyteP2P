<template>
    <div class="filter-select">
        {{ title }}
        <div class="select-parent">
            <el-select v-model="selectValue" filterable :placeholder="selectValue" size="large">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    />
            </el-select>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref,defineProps } from 'vue';
    const selectValue = ref("Select");
    defineProps({
        title : {
            type : String,
            default : "xx"
        },
        options : {
            type : Object,
            default : [
                {
                    value : "Option1",
                    label : "Option1",
                },
                {
                    value : "Option2",
                    label : "Option2",
                }
            ]
        },
        selectValue : {
            type : String,
            default : "Select"
        }
    });
</script>

<style lang="scss" scoped>
    .filter-select {
        display: flex;
        // width: 100px;
        align-items: center;
        height: 41px;
        overflow: hidden;
        gap: 10px;
        .select-parent {
            display: inline-block;
        }
        :deep() {
            .el-select {
                height: 41px;
                max-width: 140px;
            }
            .el-input__wrapper {
                border-color: #DDDDDD ;
            }
        }
    }
</style>