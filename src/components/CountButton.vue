<!--  -->
<template>
  <div>
    <button @click="handleClick">点击增加Count</button>
  </div>

  <div>
    <button @click="handleClickPatch">修改数据($patch)</button>
  </div>

  <div>
    <button @click="handleClickMethod">修改数据($patch + 函数)</button>
  </div>

  <div>
    <button @click="handleClickActions">修改数据(内部actions)</button>
  </div>
</template>

<script setup lang="ts">
import { mainStore } from "../store";

const store = mainStore();

const handleClick = () => {
  store.count++;
  store.hi = store.hi === "hi Chai!" ? "hi Zhi!" : "hi Chai!";
};

const handleClickPatch = () => {
  store.$patch({
    count: store.count * 2,
    hi: store.hi === "hi Chai!" ? "hi Zhi!" : "hi Chai!",
  });
};

const handleClickMethod = () => {
  store.$patch((state) => {
    state.count = state.count * 2;
    state.hi = state.hi === "hi Chai!" ? "hi Zhi!" : "hi Chai!";
  });
};

const handleClickActions = () => {
  store.changeState();
};
</script>

<style lang="scss" scoped></style>
