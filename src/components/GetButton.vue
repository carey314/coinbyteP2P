<template>
  <button class="button" type="button" @click="addClick">{{ text }}</button>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";

defineProps<{ text: any }>();

const emitChangeFn = defineEmits(["handler"]);
const addClick = () => {
  emitChangeFn("handler", "我是子传父的 button传home");
};

onMounted(() => {
  console.log("Button component mounted.");
});
</script>

<style scoped lang="scss">
$main-color: #01c19a;
.button {
  // box-shadow: 4px 4px 10px 0 rgba(146, 146, 146, 0.5);
  // box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.5);
  // box-shadow: none !important;
  height: 50px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  //padding: 1rem 1.7rem;
  background-color: $main-color;
  border-color: $main-color;
  border-radius: 4px;
  font-size: 20px;
  font-family: Helvetica-Neue;
  font-weight: 600;
  border: none;
  &:disabled {
    cursor: not-allowed;
    opacity: .5;
  }
}
</style>
