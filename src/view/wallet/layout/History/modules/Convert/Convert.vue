<template>
    <div class="convert">
        <div class="convert-filter">
            <FilterSelect title="Time"></FilterSelect>
            <FilterSelect title="Coin"></FilterSelect>
            <div>
                <CustomButton title="Search"></CustomButton>
                <CustomButton title="Reset" bgc="#F1F1F1" fc="#000"></CustomButton>
            </div>
        </div>
        <Table :sourceData="tableData">
            <template v-slot:columns>
                <el-table-column prop="date" label="Date" width="180" />
                <el-table-column prop="wallet" label="Wallet" width="100" />
                <el-table-column prop="pair" label="Pair" width="180" />
                <el-table-column prop="from" label="From" />
                <el-table-column prop="to" label="To" />
                <el-table-column prop="price" label="Price">
                    <template #default="scope">
                        <pre>
                            {{ scope.row.price }}
                        </pre>
                    </template>
                </el-table-column>
                <el-table-column prop="date_upload" label="Date Upload" />
                <el-table-column label="Status" fixed="right">
                <template #default="scope" >
                    <div v-if="scope.row.status === 'Successful'" style="color: #01C19A;">
                        Successful
                    </div>
                    <div v-else-if="scope.row.status === 'Faild'">
                        Faild
                    </div>
                </template>
            </el-table-column>
            </template>
        </Table>
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue';
    import FilterSelect from '../../component/FilterSelect.vue';
    import CustomButton from '../../component/CustomButton.vue';
    import Table from "../../component/Table.vue";
    const tableData = ref([
        {
            date: '2022-10-03 00:48:11',
            wallet: 'Trading',
            pair: 'AUD/USDT',
            from: '699.44 BUSD',
            to: '699.39052725 USDT',
            price: `
1 BUSD = 0.999929 USDT 
1 USDT = 1.00007101 BUSD`,
            date_upload: "2022-10-03 00:48:11",
            status : "Successful"
        },
        {
            date: '2022-10-03 00:48:11',
            wallet: 'Trading',
            pair: 'AUD/USDT',
            from: '699.44 BUSD',
            to: '699.39052725 USDT',
            price: `
1 BUSD = 0.999929 USDT 
1 USDT = 1.00007101 BUSD`,
            date_upload: "2022-10-03 00:48:11",
            status : "Successful"
        },
        {
            date: '2022-10-03 00:48:11',
            wallet: 'Trading',
            pair: 'AUD/USDT',
            from: '699.44 BUSD',
            to: '699.39052725 USDT',
            price: `
1 BUSD = 0.999929 USDT 
1 USDT = 1.00007101 BUSD`,
            date_upload: "2022-10-03 00:48:11",
            status : "Successful"
        },
        {
            date: '2022-10-03 00:48:11',
            wallet: 'Trading',
            pair: 'AUD/USDT',
            from: '699.44 BUSD',
            to: '699.39052725 USDT',
            price: `
1 BUSD = 0.999929 USDT 
1 USDT = 1.00007101 BUSD`,
            date_upload: "2022-10-03 00:48:11",
            status : "Successful"
        },
        {
            date: '2022-10-03 00:48:11',
            wallet: 'Trading',
            pair: 'AUD/USDT',
            from: '699.44 BUSD',
            to: '699.39052725 USDT',
            price: `
1 BUSD = 0.999929 USDT 
1 USDT = 1.00007101 BUSD`,
            date_upload: "2022-10-03 00:48:11",
            status : "Successful"
        },
        {
            date: '2022-10-03 00:48:11',
            wallet: 'Trading',
            pair: 'AUD/USDT',
            from: '699.44 BUSD',
            to: '699.39052725 USDT',
            price: `
1 BUSD = 0.999929 USDT 
1 USDT = 1.00007101 BUSD`,
            date_upload: "2022-10-03 00:48:11",
            status : "Successful"
        },
        {
            date: '2022-10-03 00:48:11',
            wallet: 'Trading',
            pair: 'AUD/USDT',
            from: '699.44 BUSD',
            to: '699.39052725 USDT',
            price: `
1 BUSD = 0.999929 USDT 
1 USDT = 1.00007101 BUSD`,
            date_upload: "2022-10-03 00:48:11",
            status : "Successful"
        },
        {
            date: '2022-10-03 00:48:11',
            wallet: 'Trading',
            pair: 'AUD/USDT',
            from: '699.44 BUSD',
            to: '699.39052725 USDT',
            price: `
1 BUSD = 0.999929 USDT 
1 USDT = 1.00007101 BUSD`,
            date_upload: "2022-10-03 00:48:11",
            status : "Successful"
        },
        {
            date: '2022-10-03 00:48:11',
            wallet: 'Trading',
            pair: 'AUD/USDT',
            from: '699.44 BUSD',
            to: '699.39052725 USDT',
            price: `
1 BUSD = 0.999929 USDT 
1 USDT = 1.00007101 BUSD`,
            date_upload: "2022-10-03 00:48:11",
            status : "Successful"
        },
        {
            date: '2022-10-03 00:48:11',
            wallet: 'Trading',
            pair: 'AUD/USDT',
            from: '699.44 BUSD',
            to: '699.39052725 USDT',
            price: `
1 BUSD = 0.999929 USDT 
1 USDT = 1.00007101 BUSD`,
            date_upload: "2022-10-03 00:48:11",
            status : "Successful"
        },
    ]);
</script>

<style lang="scss" scoped>
    .convert {
        .convert-filter {
            display: flex;
            gap: 20px;
            margin-bottom: 15px;
        }
    }
</style>