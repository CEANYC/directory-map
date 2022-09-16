<template>
  <div class="info-window">
    <div class="close" @click="close">⨉</div>
    <div class="content">
      <div class="content-scroll">
        <h2>Information</h2>
        <SectorSection
          v-for="sector in sectors"
          :key="sector.Name"
          :sector="sector"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$store.dispatch('info/setHidden');
    }
  },

  computed: {
    sectors() {
      return this.$store.state.content.sectors;
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.info-window {
  background: white;
  width: 50%;
  position: absolute;
  z-index: 1001;
  top: 1rem;
  right: 1rem;
  bottom: 1rem;
  border-radius: 10px;

  @media (max-width: $mobile-maximum) {
    top: 0.5rem;
    right: 0.5rem;
    bottom: 0.5rem;
    left: 0.5rem;
    width: unset;
  }
}

.content {
  height: 100%;
  padding: 2em;
}

.content-scroll {
  height: 100%;
  overflow-y: auto;
}

.close {
  cursor: pointer;
  float: right;
  font-size: 2rem;
  margin-right: 0.25em;
}
</style>
