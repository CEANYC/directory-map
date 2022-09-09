<template>
  <div class="image-modal" @click.self="close" v-hotkey="keymap">
    <img :src="imageUrl" />
  </div>
</template>

<script>
export default {
  computed: {
    imageUrl() {
      return this.$store.state.imageModal.imageUrl;
    },

    keymap() {
      return {
        'esc': this.close,
      };
    },
  },

  methods: {
    close() {
      this.$store.dispatch("imageModal/close");
    },

    toggle() {
      this.expanded = !this.expanded;
    },
  },
}
</script>

<style lang="scss" scoped>
.image-modal {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  z-index: 1001;
  background: rgba(255, 255, 255, 0.5);
  align-items: center;
  display: flex;
  justify-content: center;

  img {
    max-height: 90vh;
    max-width: 90vw;
  }
}
</style>
