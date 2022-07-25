<template>
  <div class="info-window">
    <div class="close" @click="close">⨉</div>
    <div class="content">
      <h2>Information</h2>
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
  },
}
</script>

<style lang="scss" scoped>
.info-window {
  background: white;
  width: 50%;
  position: absolute;
  z-index: 1001;
  top: 1rem;
  right: 1rem;
  bottom: 1rem;
  border-radius: 10px;
}

.content {
  height: 100%;
  padding: 2em;
}

.close {
  cursor: pointer;
  float: right;
  font-size: 2rem;
  margin-right: 0.25em;
}
</style>
