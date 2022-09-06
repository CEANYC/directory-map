<template>
  <main>
    <Map />
    <Sidebar />
    <InfoButton />
    <LayerPickerButton />
    <InfoWindow v-if="infoVisible" />
    <ImageModal v-if="imageModalOpen" />
    <LayerPicker v-if="layerPickerVisible" />
  </main>
</template>

<script>
export default {
  name: 'IndexPage',

  async mounted() {
    const params = this.$route.query;

    await this.$store.dispatch('data/loadLocations');
    this.$store.dispatch('popup/loadQueryParams', { params });
    this.$store.dispatch('map/loadQueryParams', { params });
    this.$store.dispatch('filters/loadQueryParams', { params });

    this.$store.dispatch('content/loadSectors');

    if (!this.$store.state.filters.sectors.length) {
      this.$store.dispatch('filters/setSectors', {
        sectors: this.$store.getters['data/sectors'],
      });
    }
  },

  computed: {
    imageModalOpen() {
      return this.$store.state.imageModal.open;
    },

    infoVisible() {
      return this.$store.state.info.visible;
    },

    layerPickerVisible() {
      return this.$store.state.layerPicker.visible;
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
  font-family: 'Open Sans', sans-serif;
  margin: 0;
}

main {
  display: flex;
  height: 100vh;
  width: 100vw;
}
</style>
