<template>
  <div class="popup">
    <div class="close" @click="handleClose">⨉</div>
    <h2>{{properties['Display Name']}}</h2>
    <SectorPill :sector="properties['Sector']" />
    <div>Address: {{properties['Address']}}</div>
    <div>{{properties['Brief Description']}}</div>
  </div>
</template>

<script>
export default {
  props: {
    feature: [Object, true],
  },

  computed: {
    properties() {
      return this.feature?.properties ?? {};
    }
  },

  methods: {
    handleClose() {
      this.$store.dispatch("popup/setSelectedFeatures", { selectedFeatures: [] });
    },
  },
}
</script>

<style lang="scss">
.popup {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  position: relative;

  h2 {
    font-family: sans-serif;
    margin-top: 0.5em;
  }

  .close {
    position: absolute;
    right: 0;
    cursor: pointer;
    font-size: 2rem;
    top: -0.5rem;
  }
}
</style>
