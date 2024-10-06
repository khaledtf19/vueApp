import { defineStore } from "pinia";

export const useNavStore = defineStore("navbar", {
  state: () => {
    return { collapsed: true };
  },
  actions: {
    changeNav() {
      this.collapsed = !this.collapsed;
    },
  },
});
