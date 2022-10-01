<template>
  <main>
    <Map />
    <Sidebar />
    <InfoButton />
    <LogoButton />
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
    this.$store.dispatch('map/loadQueryParams', { params });
    this.$store.dispatch('data/loadLocations', { params });
    this.$store.dispatch('textBlocks/loadTextBlocks');
    this.$store.dispatch('content/loadSectors');
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

    title() {
      return this.$store.getters['textBlocks/byType']('Title')[0];
    },
  },

  head() {
    return {
      title: this.title,
    };
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
