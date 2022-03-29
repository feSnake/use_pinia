<script setup lang="ts">
import Hi from "@/components/Hi.vue";
import CountButton from "@/components/CountButton.vue";
import { $ref } from "vue/macros";
import { useRouter } from "vue-router";

const router = useRouter();

let activeName = $ref("");
const handleClick = (tabName: any) => {
  console.log("handleClick", tabName);
  console.log(tabName.props.name);
  if (tabName.props.name === "Home") {
    router.push({
      name: "Home",
    });
  } else {
    router.push({
      name: "Setting",
    });
  }
};
</script>

<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="Home" name="Home">Home</el-tab-pane>
    <el-tab-pane label="Setting" name="Setting">Setting</el-tab-pane>
  </el-tabs>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <Hi></Hi>
  <CountButton></CountButton>
  <router-view />
</template>

<style></style>
