<template>
    <div class="spot-filter">
        <el-date-picker
            type="daterange"
            start-placeholder="Start date"
            end-placeholder="End date"
        />
        <FilterSelect title="Side" :options="options"></FilterSelect>
        <div>
            <CustomButton title="Search"></CustomButton>
            <CustomButton title="Reset" bgc="#F1F1F1" fc="#000"></CustomButton>
        </div>
    </div>
    <Table :sourceData="tableData">
        <template v-slot:columns>
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="pair" label="Pair" width="180" />
            <el-table-column prop="side" label="Side" />
            <el-table-column prop="price" label="Price" />
            <el-table-column prop="filled" label="Filled" />
            <el-table-column prop="fee" label="Fee" />
            <el-table-column prop="role" label="role" />
        </template>
    </Table>
</template>

<script setup lang="ts">
    import {ref} from 'vue';
    import FilterSelect from '../../component/FilterSelect.vue';
    import Table from '../../component/Table.vue';
    import CustomButton from '../../component/CustomButton.vue';
    const tableData = ref([
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
    ]);
    const options = [
                {
                    value : "Option1",
                    label : "Option1",
                },
                {
                    value : "Option2",
                    label : "Option2",
                }
            ];
</script>

<style lang="scss" scoped>
    .spot-filter {
        display: flex;
        gap: 20px;
        margin-bottom: 15px;
        :deep() {
            .el-range-editor.el-input__wrapper {
                width: 227px;
                flex: none;
                height: 41px;
            }
        }
    }
</style>