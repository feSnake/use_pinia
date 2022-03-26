<!-- Hi -->
<template>
  <div class="main">
    <div class="name">Chai</div>
    <div class="msg">{{ store.hi }}</div>
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
  .msg {
    color: brown;
  }
}
</style>
