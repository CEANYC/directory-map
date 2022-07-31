<template>
  <section class="sector">
    <h3>{{name}}</h3>
    <div>{{details}}</div>
    <img v-if="imgUrl" :src="imgUrl" />
  </section>
</template>

<script>
export default {
  props: {
    sector: [Object, true],
  },

  computed: {
    name() {
      return this.sector.Name;
    },

    details() {
      return this.sector.Notes;
    },

    imgUrl() {
      return this.sector.Attachments?.[0]?.url ?? null;
    },
  },
}
</script>

<style lang="scss" scoped>
.info-window {
  img {
    max-width: 100%;
  }
}
</style>
