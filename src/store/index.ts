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
      phone: "13811111111",
    };
  },
  getters: {
    phoneHidden(state) {
      console.log("phoneHidden调用！！");
      return state.phone
        .toString()
        .replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
    },
  },
  actions: {
    changeState() {
      this.count++;
      this.hi = "hi Chai changeState";
    },
  },
});
