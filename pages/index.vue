<template>
  <main>
    <Map />
    <Sidebar />
    <InfoButton />
    <InfoWindow v-if="infoVisible" />
  </main>
</template>

<script>
export default {
  name: 'IndexPage',

  async mounted() {
    const params = this.$route.query;

    await this.$store.dispatch('data/loadLocations');
    this.$store.dispatch('map/loadQueryParams', { params });
    this.$store.dispatch('filters/loadQueryParams', { params });

    if (!this.$store.state.filters.sectors.length) {
      this.$store.dispatch('filters/setSectors', {
        sectors: this.$store.getters['data/sectors'],
      });
    }
  },

  computed: {
    infoVisible() {
      return this.$store.state.info.visible;
    },
  },
}
</script>

<style>
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  margin: 0;
}

main {
  display: flex;
  height: 100vh;
  width: 100vw;
}
</style>
