<!-- Hi -->
<template>
  <div class="main">
    <div class="name">Chai</div>
    <div class="hi">{{ store.hi }}</div>
    <div class="count">{{ store.count }}</div>
    <div class="phone">{{ store.phoneHidden }}</div>

    <hr />

    <div class="hi">{{ hi }}</div>
    <div class="count">{{ count }}</div>
    <div class="phone">{{ phoneHidden }}</div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { mainStore } from "../store";
const store = mainStore();
const { hi, count, phoneHidden } = storeToRefs(store);
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
