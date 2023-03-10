<template>
    <div class="filter-search">
        <el-form
            ref="form"
        >   
            <div class="search-left">
                <template  v-for="item in selectMap">
                    <el-form-item>
                        <FilterSelect :title="item.title" :options="item.options" :selectValue="item.selectValue" key="item.title"></FilterSelect>
                    </el-form-item>
                </template>
                <el-form-item>
                    <CustomButton title="Search" @handleClick="submitForm"></CustomButton>
                    <CustomButton title="Reset" @handleClick="submitForm" bgc="#F1F1F1" fc="#000"></CustomButton>
                </el-form-item>
            </div>
            <div class="search-right">
                <div class="custom-link">
                    <a href="#">Hasn't arrived?</a>
                </div>
                <div class="custom-link">
                    <img :src="download" alt=""> <div>Download</div>
                </div>
            </div>
        </el-form>
    </div>
    <Table :sourceData="tableData">
        <template v-slot:columns>
            <el-table-column prop="time" label="Time" width="190" />
            <el-table-column prop="type" label="Type" width="120" />
            <el-table-column prop="deposit_wallet" label="Deposit wallet" width="170" />
            <el-table-column prop="asset" label="Asset"  width="110"/>
            <el-table-column prop="amount" label="Amount"  width="160"/>
            <el-table-column label="Destination"  width="220">
                <template #default="scope">
                    <div>
                        {{ scope.row.destination }} <el-icon style="color: #7B8293;"><Paperclip /></el-icon> <el-icon style="color: #7B8293;"><CopyDocument /></el-icon>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="TxID"  width="220">
                <template #default="scope">
                    <div>
                        {{ scope.row.TxID }} <el-icon style="color: #7B8293;"><Paperclip /></el-icon> <el-icon style="color: #7B8293;"><CopyDocument /></el-icon>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="Status" fixed="right">
                <template #default="scope" >
                    <div v-if="scope.row.status === 'Completed'" style="color: #01C19A;">
                        Completed
                    </div>
                    <div v-else-if="scope.row.status === 'Faild'">
                        Completed
                    </div>
                </template>
            </el-table-column>
        </template>
    </Table>
</template>

<script setup lang="ts">
    import {ref,reactive} from 'vue';
    import type { FormInstance, FormRules } from 'element-plus'
    import FilterSelect from '../../../component/FilterSelect.vue';
    import CustomButton from '../../../component/CustomButton.vue';
    import { CopyDocument,Paperclip } from '@element-plus/icons-vue';
    import Table from '../../../component/Table.vue';
    import download from '../../../../../../../assets/wallet/wallet_download.png';
    const selectMap = ref([
        {
            title : "Type",
            options : [
                {
                    value : "Deposit",
                    label : "Deposit",
                },
                {
                    value : "Option2",
                    label : "Option2",
                }
            ],
            selectValue : "Deposit"
        },
        {
            title : "Time",
            options : [
                {
                    value : "Past 30 days",
                    label : "Past 30 days",
                },
                {
                    value : "Option2",
                    label : "Option2",
                }
            ],
            selectValue : "Past 30 days"
        },
        {
            title : "Fiat",
            options : [
                {
                    value : "All",
                    label : "All",
                },
                {
                    value : "Option2",
                    label : "Option2",
                }
            ],
            selectValue : "All"
        },
        {
            title : "Status",
            options : [
                {
                    value : "All",
                    label : "All",
                },
                {
                    value : "Option2",
                    label : "Option2",
                }
            ],
            selectValue : "All"
        }
    ]);
    const tableData = ref([
        {
            time: "2022-10-03 00:48:11",
            type: "Deposit",
            deposit_wallet: "Trading Wallet",
            asset: "USDT",
            amount: "980.0000",
            destination: "Cf9044...104a5f",
            TxID: "TXRLV...aAjr7",
            status: "Completed",
        },
        {
            time: "2022-10-03 00:48:11",
            type: "Deposit",
            deposit_wallet: "Trading Wallet",
            asset: "USDT",
            amount: "980.0000",
            destination: "Cf9044...104a5f",
            TxID: "TXRLV...aAjr7",
            status: "Completed",
        },
        {
            time: "2022-10-03 00:48:11",
            type: "Deposit",
            deposit_wallet: "Trading Wallet",
            asset: "USDT",
            amount: "980.0000",
            destination: "Cf9044...104a5f",
            TxID: "TXRLV...aAjr7",
            status: "Completed",
        },
        {
            time: "2022-10-03 00:48:11",
            type: "Deposit",
            deposit_wallet: "Trading Wallet",
            asset: "USDT",
            amount: "980.0000",
            destination: "Cf9044...104a5f",
            TxID: "TXRLV...aAjr7",
            status: "Completed",
        },
        {
            time: "2022-10-03 00:48:11",
            type: "Deposit",
            deposit_wallet: "Trading Wallet",
            asset: "USDT",
            amount: "980.0000",
            destination: "Cf9044...104a5f",
            TxID: "TXRLV...aAjr7",
            status: "Completed",
        },
        {
            time: "2022-10-03 00:48:11",
            type: "Deposit",
            deposit_wallet: "Trading Wallet",
            asset: "USDT",
            amount: "980.0000",
            destination: "Cf9044...104a5f",
            TxID: "TXRLV...aAjr7",
            status: "Completed",
        },
    ]);
    const cloneSearchData = selectMap.value.map(v => v.title);
    let cloneSearchMap: {[key: string]: string} = {};
    cloneSearchData.forEach(v => {
        cloneSearchMap[v] = "";
    })
    const ruleForm = reactive(cloneSearchMap)
    const submitForm = async (formEl: FormInstance | undefined) => {
        if (!formEl) return
        await formEl.validate((valid, fields) => {
            if (valid) {
            console.log('submit!')
            } else {
            console.log('error submit!', fields)
            }
        })
        }

</script>

<style lang="scss" scoped>
    .filter-search {
        margin-bottom: 15px;
        :deep() {
            .el-form {
                display: flex;
                flex-wrap: wrap;
                gap: 20px;
                justify-content: space-between;
                .search-left {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                }
                .search-right {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                }
                .el-form-item {
                    margin-bottom: 0;
                }
                .custom-link {
                    height: 41px;
                    display: flex;
                    align-items: flex-end;
                    gap: 8px;
                    a {
                        font-size: 14px;
                        color: #01C19A;
                    }
                    img {
                        width: 19px;
                        height: 19px;
                        // background: #01C19A;
                        filter: invert(100%)
                    }
                }
            }
        }
    }
</style>