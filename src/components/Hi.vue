<!-- Hi -->
<template>
  <div class="main">
    <div class="name">Chai</div>
    <div class="hi">{{ store.hi }}</div>
    <div class="count">{{ store.count }}</div>
  </div>
</template>

<script setup lang="ts">
import { mainStore } from "../store";
const store = mainStore();
</script>

<style lang="scss" scoped>
.main {
  .name {
    color: aqua;
  }
  .hi {
    color: brown;
  }
}
</style>
