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

  <div>
    <button @click="handleClickChangePhone">
      修改手机号验证Getters 是否有缓存
    </button>
  </div>

  <div>
    <button @click="handleClickGetList">显示新store.list</button>
  </div>

  <!-- <el-button>I am ElButton</el-button>
  <div class="example-basic">
    <el-time-picker v-model="value1" placeholder="Arbitrary time" />
    <el-time-picker
      v-model="value2"
      arrow-control
      placeholder="Arbitrary time"
    />
  </div> -->

  <el-button @click="increment">{{ number }}</el-button>
</template>

<script setup lang="ts">
import { mainStore } from "../store";
import { $ref } from "vue/macros";

const store = mainStore();
let number = $ref(0);
console.log(number);

function increment() {
  number++;
}

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

const handleClickChangePhone = () => {
  store.phone = "13600000000";
};

const handleClickGetList = () => {
  store.getProductList();
};
</script>

<style lang="scss" scoped></style>
