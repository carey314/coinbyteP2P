<template>
    <div>
        flat
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue';
    import FilterSelect from '../../../component/FilterSelect.vue';
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
</script>

<style lang="scss" scoped>
    
</style>