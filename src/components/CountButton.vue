<!--  -->
<template>
  <div>
    <button @click="handleClick">点击增加Count</button>
  </div>
</template>

<script setup lang="ts">
import { mainStore } from "../store";

const store = mainStore();

const handleClick = () => {
  store.count++;
};
</script>

<style lang="scss" scoped></style>
