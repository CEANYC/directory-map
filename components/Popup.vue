<template>
  <div class="popup">
    <div class="close" @click="handleClose">⨉</div>
    <h2>{{properties['Display Name']}}</h2>
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
  h2 {
    font-family: sans-serif;
    margin-top: 0.5em;
  }

  .close {
    cursor: pointer;
    float: right;
    font-size: 2rem;
    margin-top: -0.5em;
  }
}
</style>
