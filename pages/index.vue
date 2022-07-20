<template>
  <main>
    <Map />
    <Sidebar />
  </main>
</template>

<script>
export default {
  name: 'IndexPage',

  async mounted() {
    await this.$store.dispatch('data/loadLocations');
    this.$store.dispatch('filters/setSectors', {
      sectors: this.$store.getters['data/sectors'],
    });
  }
}
</script>

<style>
body {
  margin: 0;
}

main {
  display: flex;
  height: 100vh;
  width: 100vw;
}
</style>
