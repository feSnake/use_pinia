/*
定义状态容器(仓库)
修改容器(仓库)中的 state
仓库中的 action 的使用
*/

import { defineStore } from "pinia";

export const mainStore = defineStore("main", {
  state: () => {
    return {
      hi: "hi Chai!",
      count: 0,
    };
  },
  getters: {},
  actions: {},
});
