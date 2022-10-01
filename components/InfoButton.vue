<template>
  <div class="info-button" @click="toggle">
    <span class="button-text">Information</span>
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
@import "../styles/variables.scss";

.info-button {
  align-items: center;
  background: white;
  cursor: pointer;
  display: flex;
  font-size: 1.5em;
  justify-content: center;
  padding: 0.5rem;
  text-align: center;
  position: absolute;
  z-index: 1000;
  top: 1rem;
  right: 1rem;
  border-radius: 10px;

  &:hover {
    background: #eee;
  }

  @media (max-width: $mobile-maximum) {
    top: unset;
    bottom: 1rem;
  }
}

.button-text {
  font-size: 0.75em;
  font-weight: bold;
}
</style>
