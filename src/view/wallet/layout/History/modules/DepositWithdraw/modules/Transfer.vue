<template>
    <div class="transfer">
        <div class="transfer-search">
            <div class="to">
                <FilterSelect ></FilterSelect>
                <div class="img-button"><img :src="icon_convert" alt=""></div>
                <FilterSelect ></FilterSelect>
            </div>
            <FilterSelect title="Time"></FilterSelect>
            <FilterSelect title="Coin"></FilterSelect>
            <div>
                <CustomButton title="Search"></CustomButton>
                <CustomButton title="Reset" bgc="#F1F1F1" fc="#000"></CustomButton>
            </div>
        </div>
        <Table :sourceData="tableData">
            <template v-slot:columns>
                <el-table-column prop="date" label="Date" width="310" />
                <el-table-column prop="coin" label="Coin" width="310" />
                <el-table-column prop="amount" label="Amount"/>
                <el-table-column prop="from" label="From" width="310"/>
                <el-table-column prop="to" label="To" />
            </template>
        </Table>
    </div>
</template>

<script setup lang="ts">
    import FilterSelect from '../../../component/FilterSelect.vue';
    import icon_convert from '../../../../../../../assets/wallet/icon_convert.png';
    import CustomButton from '../../../component/CustomButton.vue';
    import Table from '../../../component/Table.vue';
    import {ref} from 'vue';
    const tableData = ref([
        {
            date : "2022-10-03 00:48:11",
            coin : "USDT",
            amount : "4995.5004",
            from : "Flat and Spot",
            to : "Trading",
        },
        {
            date : "2022-10-03 00:48:11",
            coin : "USDT",
            amount : "4995.5004",
            from : "Flat and Spot",
            to : "Trading",
        },
        {
            date : "2022-10-03 00:48:11",
            coin : "USDT",
            amount : "4995.5004",
            from : "Flat and Spot",
            to : "Trading",
        },
        {
            date : "2022-10-03 00:48:11",
            coin : "USDT",
            amount : "4995.5004",
            from : "Flat and Spot",
            to : "Trading",
        },
        {
            date : "2022-10-03 00:48:11",
            coin : "USDT",
            amount : "4995.5004",
            from : "Flat and Spot",
            to : "Trading",
        },
        {
            date : "2022-10-03 00:48:11",
            coin : "USDT",
            amount : "4995.5004",
            from : "Flat and Spot",
            to : "Trading",
        },
        {
            date : "2022-10-03 00:48:11",
            coin : "USDT",
            amount : "4995.5004",
            from : "Flat and Spot",
            to : "Trading",
        },
        {
            date : "2022-10-03 00:48:11",
            coin : "USDT",
            amount : "4995.5004",
            from : "Flat and Spot",
            to : "Trading",
        },
    ]);
</script>

<style lang="scss" scoped>
    .transfer-search {
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
        margin-bottom: 15px;
        .to {
            display: flex;
            align-items: center;
            gap: 7px;
        }
        .img-button {
            width: 20px;
            height: 20px;
            border: 1px solid #01C19A;
            border-radius: 50%;
            cursor: pointer;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>