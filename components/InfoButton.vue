<template>
  <div class="info-button" @click="toggle">
    i
  </div>
</template>

<script>
export default {
  methods: {
    toggle() {
      this.infoVisible = !this.infoVisible;
    }
  },

  computed: {
    infoVisible: {
      get() {
        return this.$store.state.info.visible;
      },
      set(value) {
        this.$store.dispatch(value ? 'info/setVisible' : 'info/setHidden');
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.info-button {
  background: white;
  cursor: pointer;
  font-size: 3em;
  width: 1.1em;
  height: 1.1em;
  text-align: center;
  position: absolute;
  z-index: 1000;
  top: 1rem;
  right: 1rem;
  border-radius: 10px;
}
</style>
