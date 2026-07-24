export const useEventsStore = defineStore('events', {
  state: () => ({
    visible: false,
    filterCategory: null,
    filterDateStart: null,
    filterDateEnd: null,
    filterMapVisible: false,
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
