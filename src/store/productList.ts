import { defineStore } from "pinia";

export const productListStore = defineStore("prodectList", {
  state: () => {
    return {
      list: ["iPhone", "iMac", "iPod"],
    };
  },
});
