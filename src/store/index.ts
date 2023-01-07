/*
定义状态容器(仓库)
修改容器(仓库)中的 state
仓库中的 action 的使用
*/

import { defineStore } from "pinia";
import { productListStore } from "./productList";

export const mainStore = defineStore("main", {
  persist: true,
  state: () => {
    return {
      hi: "hi Chai!",
      count: 0,
      phone: "13811111111",
    };
  },
  getters: {
    // 支持 this, 也支持 'state' 入参的调用
    phoneHidden(): string {
      console.log("phoneHidden调用！！");
      return this.phone.toString().replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
    },
  },
  actions: {
    changeState() {
      this.count++;
      this.hi = "hi Chai changeState";
    },
    getProductList() {
      console.log(productListStore().list);
    },
  },
});
