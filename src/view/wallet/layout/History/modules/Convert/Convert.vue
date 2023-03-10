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
        <Table></Table>
    </div>
</template>

<script setup>
    import FilterSelect from '../../component/FilterSelect.vue';
    import CustomButton from '../../component/CustomButton.vue';
    import Table from "../../component/Table.vue";
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