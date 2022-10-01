<template>
  <div class="info-window">
    <div class="close" @click="close">⨉</div>
    <div class="content">
      <div class="content-scroll">
        <h2>Information</h2>
        <TextBlock type="About" />
        <SectorSection
          v-for="sector in sectors"
          :key="sector.Name"
          :sector="sector"
        />
        <TextBlock type="Contributors" />
        <a href="https://gocoopnyc.org/" target="_blank">
          <img class="ceanyc-logo" src="/ceanyc-logo.png" />
        </a>
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

h2 {
  padding-left: 0.5em;
  margin-bottom: 0;
}

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

  @media (max-width: $mobile-maximum) {
    padding: 0.5em;
  }
}

.content-scroll {
  height: 100%;
  overflow-y: auto;
}

.ceanyc-logo {
  max-width: 250px;
}

.close {
  cursor: pointer;
  float: right;
  font-size: 1.5rem;
  margin-right: 0.25em;

  @media (max-width: $mobile-maximum) {
    font-size: 3rem;
    background: white;
    right: 1rem;
    position: absolute;
    z-index: 1001;
  }
}
</style>
