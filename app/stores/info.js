export const useInfoStore = defineStore('info', {
  state: () => ({
    visible: false,
  }),

  actions: {
    setHidden() {
      this.visible = false;
    },

    setVisible() {
      this.visible = true;
    },
  },
});
