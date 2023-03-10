<template>
    <div class="custom-table">
        <el-table :data="sourceData" style="width: 100%">
            
            <slot name="columns"></slot>
        </el-table>
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue';
    defineProps({
        sourceData : {
            type : Object,
            default : []
        }
    })
    const tableData = [
        {
            date: '2022-10-03 00:48:11',
            pair: 'AUD/USDT',
            side: 'Buy',
            price: '0.6434',
            filled: "929",
            fee: "0.929 AUD",
            role: "Maker"
        },
        {
            date: '2022-10-03 00:48:11',
            pair: 'AUD/USDT',
            side: 'Buy',
            price: '0.6434',
            filled: "929",
            fee: "0.929 AUD",
            role: "Maker"
        },
        {
            date: '2022-10-03 00:48:11',
            pair: 'AUD/USDT',
            side: 'Buy',
            price: '0.6434',
            filled: "929",
            fee: "0.929 AUD",
            role: "Maker"
        },
        {
            date: '2022-10-03 00:48:11',
            pair: 'AUD/USDT',
            side: 'Buy',
            price: '0.6434',
            filled: "929",
            fee: "0.929 AUD",
            role: "Maker"
        },
        {
            date: '2022-10-03 00:48:11',
            pair: 'AUD/USDT',
            side: 'Buy',
            price: '0.6434',
            filled: "929",
            fee: "0.929 AUD",
            role: "Maker"
        },
        {
            date: '2022-10-03 00:48:11',
            pair: 'AUD/USDT',
            side: 'Buy',
            price: '0.6434',
            filled: "929",
            fee: "0.929 AUD",
            role: "Maker"
        },
        {
            date: '2022-10-03 00:48:11',
            pair: 'AUD/USDT',
            side: 'Buy',
            price: '0.6434',
            filled: "929",
            fee: "0.929 AUD",
            role: "Maker"
        },
        {
            date: '2022-10-03 00:48:11',
            pair: 'AUD/USDT',
            side: 'Buy',
            price: '0.6434',
            filled: "929",
            fee: "0.929 AUD",
            role: "Maker"
        },

    ]
</script>

<style lang="scss" scoped>
    .custom-table {
        :deep() {
            .el-table th,el-table_2_column_7 is-leaf el-table__cell {
                background: #F1F1F1;
                line-height: 31px;
                height: 31px;
                padding: 0px;
            }
            .el-table__header-wrapper {
                background: #F1F1F1;
                height: 31px;
                .el-table__header {
                    background: #F1F1F1;
                }
            }
        }
    }
</style>