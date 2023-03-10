<template>
    <div class="filter-search">
        <el-form
            ref="form"
        >   
            <template  v-for="item in selectMap">
                <el-form-item>
                    <FilterSelect :title="item.title" :options="item.options" :selectValue="item.selectValue" key="item.title"></FilterSelect>
                </el-form-item>
            </template>
            <el-form-item>
                <CustomButton title="Search" @handleClick="submitForm"></CustomButton>
                <CustomButton title="Reset" @handleClick="submitForm" bgc="#F1F1F1" fc="#000"></CustomButton>
            </el-form-item>
        </el-form>
    </div>
    <Table>
        
    </Table>
</template>

<script setup lang="ts">
    import {ref,reactive} from 'vue';
    import type { FormInstance, FormRules } from 'element-plus'
    import FilterSelect from '../../../component/FilterSelect.vue';
    import CustomButton from '../../../component/CustomButton.vue';
    import Table from '../../../component/Table.vue';
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
    const cloneSearchData = selectMap.value.map(v => v.title);
    let cloneSearchMap = {};
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
                gap: 20px;
                .el-form-item {
                    margin-bottom: 0;
                }
            }
        }
    }
</style>