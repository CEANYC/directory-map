export const useImageModalStore = defineStore('imageModal', {
  state: () => ({
    open: false,
    imageUrl: null,
  }),

  actions: {
    openImage(imageUrl) {
      this.imageUrl = imageUrl;
      this.open = true;
    },
    close() {
      this.imageUrl = null;
      this.open = false;
    }
  },
});
